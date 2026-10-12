import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const baselineVersion = 1;

function excluded(relativePath) {
  return relativePath === '.well-known' || relativePath.startsWith('.well-known/') ||
    relativePath === '.ftp-deploy-sync-state.json';
}

async function filesIn(root, prefix = '') {
  const files = [];
  for (const entry of await fs.readdir(path.join(root, prefix), { withFileTypes: true })) {
    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) files.push(...await filesIn(root, relativePath));
    else if (entry.isFile()) files.push(relativePath);
    else throw new Error(`Export contains a non-regular file: ${relativePath}`);
  }
  return files.sort();
}

async function loadBaseline(directory) {
  try {
    const manifest = JSON.parse(await fs.readFile(path.join(directory, 'baseline.json'), 'utf8'));
    const files = await filesIn(path.join(directory, 'export'));
    // A partial/missing artifact must never cause files to be silently skipped.
    if (!files.length || manifest.version !== baselineVersion || !Array.isArray(manifest.files) ||
      JSON.stringify(manifest.files) !== JSON.stringify(files) || files.some(excluded)) return null;
    return new Set(files);
  } catch {
    return null;
  }
}

async function copyFiles(source, destination, files) {
  // Refuse stale staging contents instead of clearing or reusing them.
  await fs.mkdir(destination, { recursive: false });
  for (const relativePath of files) {
    const target = path.join(destination, relativePath);
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.copyFile(path.join(source, relativePath), target);
  }
}

export async function selectFiles(source, baseline, staging, baselineRestored) {
  const allFiles = await filesIn(source);
  const files = allFiles.filter(file => !excluded(file));
  if (!files.length) throw new Error('Static export has no deployable files.');
  const baselineFiles = baselineRestored ? await loadBaseline(baseline) : null;
  if (!baselineFiles) throw new Error('No verified FTP baseline; refusing a full upload of unchanged files.');
  const selected = [];
  const counts = {
    exported_files: allFiles.length,
    excluded_files: allFiles.length - files.length,
    unchanged_files: 0,
    new_files: 0,
    changed_files: 0,
    selected_files: 0,
    selected_bytes: 0,
  };
  for (const relativePath of files) {
    const currentBytes = await fs.readFile(path.join(source, relativePath));
    if (baselineFiles?.has(relativePath)) {
      const previousBytes = await fs.readFile(path.join(baseline, 'export', relativePath));
      // Compare actual bytes: no hashes, timestamps, or size-only decisions.
      if (currentBytes.equals(previousBytes)) {
        counts.unchanged_files++;
        continue;
      }
      counts.changed_files++;
    } else {
      counts.new_files++;
    }
    selected.push(relativePath);
    counts.selected_bytes += currentBytes.length;
  }
  counts.selected_files = selected.length;
  await copyFiles(source, staging, selected);
  const mode = 'incremental';
  const summary = [
    '## cPanel incremental deployment',
    '',
    `Comparison mode: ${mode}. Actual file bytes are compared at matching relative paths.`,
    '',
    '| Export / transfer | Count |',
    '| --- | ---: |',
    `| Total exported files | ${counts.exported_files} |`,
    `| Excluded files | ${counts.excluded_files} |`,
    `| Unchanged files | ${counts.unchanged_files} |`,
    `| New files | ${counts.new_files} |`,
    `| Changed files | ${counts.changed_files} |`,
    `| Selected files | ${counts.selected_files} |`,
    `| Selected transfer size (bytes) | ${counts.selected_bytes} |`,
    '',
    'New means absent from the verified baseline. An unavailable baseline stops publication.',
    'Files absent from the new export are left on the FTP server; no remote deletion is requested.',
    counts.selected_files ? 'Upload selected files with overwrite and forced transfer.' : 'No content changes: FTP installation and transfer are skipped.',
    '',
  ].join('\n');
  console.log(summary);
  if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, summary);
  if (process.env.GITHUB_OUTPUT) await fs.appendFile(process.env.GITHUB_OUTPUT,
    Object.entries(counts).map(([key, value]) => `${key}=${value}`).join('\n') + '\n');
  return { ...counts, mode, selected };
}

export async function snapshot(source, destination) {
  const files = (await filesIn(source)).filter(file => !excluded(file));
  if (!files.length) throw new Error('Cannot save an empty deployment baseline.');
  await fs.mkdir(destination, { recursive: false });
  await copyFiles(source, path.join(destination, 'export'), files);
  // Write completeness metadata last, after every deployed file has been copied.
  await fs.writeFile(path.join(destination, 'baseline.json'), JSON.stringify({ version: baselineVersion, files }));
  console.log(`Prepared successful deployment baseline: ${files.length} files.`);
}

export async function includePaths(source, destination) {
  const files = (await filesIn(source)).filter(file => !excluded(file));
  const patterns = new Set();
  for (const file of files) {
    if (/[\r\n]/.test(file)) throw new Error('Unexpected newline in export path.');
    const escaped = file.replace(/[\\*?\[\]]/g, '\\$&');
    patterns.add(escaped);
    const parts = escaped.split('/');
    for (let end = 1; end < parts.length; end++) patterns.add(parts.slice(0, end).join('/') + '/');
  }
  await fs.writeFile(destination, [...patterns].sort().join('\n') + '\n');
}

export async function remoteSnapshot(source, destination) {
  // Missing paths after a successful exact-path mirror are new files. Any
  // transfer/read error aborts the workflow before this manifest is written.
  const files = (await filesIn(source)).filter(file => !excluded(file));
  if (!files.length) throw new Error('FTP baseline is empty; refusing publication.');
  await fs.mkdir(destination, { recursive: false });
  await copyFiles(source, path.join(destination, 'export'), files);
  await fs.writeFile(path.join(destination, 'baseline.json'), JSON.stringify({ version: baselineVersion, files }));
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const [command, source, baselineOrDestination, staging] = process.argv.slice(2);
  if (command === 'compare' && source && baselineOrDestination && staging) {
    await selectFiles(source, baselineOrDestination, staging, process.env.BASELINE_RESTORED === 'true');
  } else if (command === 'snapshot' && source && baselineOrDestination) {
    await snapshot(source, baselineOrDestination);
  } else if (command === 'include-paths' && source && baselineOrDestination) {
    await includePaths(source, baselineOrDestination);
  } else if (command === 'remote-snapshot' && source && baselineOrDestination) {
    await remoteSnapshot(source, baselineOrDestination);
  } else {
    throw new Error('Usage: cpanel-incremental.mjs compare <export> <baseline> <staging> | snapshot <export> <destination>');
  }
}
