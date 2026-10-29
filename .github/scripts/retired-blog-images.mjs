import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = fileURLToPath(new URL('../../', import.meta.url));
const manifestPath = '.github/retired-blog-images-20261024.json';
const approvalPaths = [
  'content/research/2026-10-24/remaining-blog-owner-approved-images.json',
  'content/research/2026-10-24/keyword-21-owner-approved-images.json',
];
// Deliberately fixed: a future retirement requires review of this positive allowlist.
const retiredOriginals = [
  'images/blogs/can-one-domestic-worker-handle-cleaning-cooking-and-childcare.webp',
  'images/blogs/how-should-a-household-plan-a-domestic-workers-annual-leave-and-travel.webp',
  'images/blogs/what-is-the-total-cost-of-hiring-a-domestic-worker-in-ajman.webp',
];
const widths = [480, 768, 960, 1200];
const inventoryRoots = ['images/blogs', 'optimized/images/blogs'];
const textExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.json', '.md', '.mdx', '.xml', '.html', '.txt', '.css', '.svg']);
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const json = value => JSON.stringify(value, null, 2) + '\n';
const variants = original => widths.map(width => `optimized/${original.replace(/\.webp$/, '')}-${width}.webp`);
export const retiredPaths = Object.freeze(retiredOriginals.flatMap(original => [original, ...variants(original)]).sort());

export function validatePrunePaths(paths) {
  if (!Array.isArray(paths) || paths.length !== 15 || new Set(paths).size !== 15 ||
      JSON.stringify([...paths].sort()) !== JSON.stringify(retiredPaths)) {
    throw new Error('Deletion must be exactly the 15 reviewed relative blog-image paths.');
  }
  for (const relative of paths) {
    if (!/^(?:optimized\/)?images\/blogs\/[a-z0-9-]+\.webp$/.test(relative) ||
        path.posix.normalize(relative) !== relative || relative.includes('..')) {
      throw new Error('Unsafe retired image path.');
    }
  }
  return [...paths].sort();
}

export function deletionCommands(paths, presentPaths = paths) {
  const allowed = new Set(validatePrunePaths(paths));
  if (!Array.isArray(presentPaths) || new Set(presentPaths).size !== presentPaths.length || presentPaths.some(relative => !allowed.has(relative))) {
    throw new Error('Selected deletions must be a distinct subset of the 15 reviewed paths.');
  }
  return presentPaths.length ? [...presentPaths].sort().map(relative => `rm ${relative}`).join('\n') + '\n' : '';
}

async function filesIn(directory, prefix = '') {
  const entries = await fs.readdir(path.join(directory, prefix), { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) files.push(...await filesIn(directory, relative));
    else if (entry.isFile()) files.push(relative);
    else throw new Error(`Non-regular file in image-cleanup input: ${relative}`);
  }
  return files.sort();
}

async function rejectReferences(root, relatives) {
  const names = retiredOriginals.map(relative => path.posix.basename(relative));
  for (const relative of relatives) {
    if (!textExtensions.has(path.extname(relative).toLowerCase())) continue;
    const contents = await fs.readFile(path.join(root, relative), 'utf8');
    if (names.some(name => contents.includes(name))) throw new Error(`Retired image is referenced by ${relative}`);
  }
}

export async function currentApprovedImages(root = projectRoot) {
  const approvals = await Promise.all(approvalPaths.map(async relative => JSON.parse(await fs.readFile(path.join(root, relative), 'utf8'))));
  if (approvals[0].ownerApproved !== true || approvals[0].images.length !== 44 ||
      approvals[1].ownerApprovedWebsitePublication !== true || approvals[1].images.length !== 21) {
    throw new Error('The complete 44 + 21 owner-approved image manifests are required.');
  }
  const approved = approvals.flatMap(approval => approval.images.map(image => ({
    path: image.src?.slice(1), sha256: image.sha256 ?? image.webpSha256,
  })));
  if (approved.length !== 65 || new Set(approved.map(image => image.path)).size !== 65 || approved.some(image =>
    !/^images\/blogs\/(?:keyword-21-20261024\/)?[a-z0-9-]+\.webp$/.test(image.path) || !/^[a-f0-9]{64}$/.test(image.sha256))) {
    throw new Error('Expected exactly 65 distinct approved blog-image paths and hashes.');
  }
  const refresh = JSON.parse(await fs.readFile(path.join(root, '.github/blog-refresh-images-20261029.json'), 'utf8'));
  const refreshedSlugs = ['uae-domestic-worker-rights-employer-duties', 'domestic-worker-centre-reviews-checklist', 'domestic-workers-meaning-roles-uae', 'choosing-domestic-worker-centre-across-emirates', 'inaya-office-staff-careers-ajman'];
  if (refresh.date !== '2026-10-29' || JSON.stringify(refresh.images.map(image => image.path)) !== JSON.stringify(refreshedSlugs.map(slug => `images/blogs/blog-refresh-20261029/${slug}.webp`)) || refresh.images.some(image => !/^[a-f0-9]{64}$/.test(image.sha256))) {
    throw new Error('Expected exactly five reviewed blog-refresh paths and hashes.');
  }
  approved.push(...refresh.images);
  const actual = (await filesIn(path.join(root, 'public/images/blogs'))).map(relative => `images/blogs/${relative}`);
  if (JSON.stringify(actual) !== JSON.stringify(approved.map(image => image.path).sort())) {
    throw new Error('Current public blog images must be exactly the 70 approved assets; retired or unknown files are forbidden.');
  }
  for (const image of approved) {
    if (sha256(await fs.readFile(path.join(root, 'public', image.path))) !== image.sha256) {
      throw new Error(`Approved image bytes changed: ${image.path}`);
    }
  }
  return approved.sort((a, b) => a.path.localeCompare(b.path));
}

export async function prepareRetirement(exportRoot, outputRoot, root = projectRoot) {
  const manifest = JSON.parse(await fs.readFile(path.join(root, manifestPath), 'utf8'));
  if (manifest.version !== 1 || manifest.retiredOn !== '2026-10-24' ||
      JSON.stringify(manifest.variantWidths) !== JSON.stringify(widths) ||
      JSON.stringify(manifest.images.map(image => image.path)) !== JSON.stringify(retiredOriginals) ||
      manifest.images.some(image => !/^[a-f0-9]{64}$/.test(image.removedSha256))) {
    throw new Error('Retirement metadata does not match the reviewed image allowlist.');
  }
  const approved = await currentApprovedImages(root);
  for (const directory of ['app', 'components', 'lib', 'messages', 'content', 'public']) {
    const relatives = (await filesIn(path.join(root, directory))).map(relative => `${directory}/${relative}`);
    await rejectReferences(root, relatives);
  }
  const exported = await filesIn(exportRoot);
  await rejectReferences(exportRoot, exported);
  const expected = approved.flatMap(image => [image.path, ...variants(image.path)]).sort();
  const actual = exported.filter(relative => inventoryRoots.some(prefix => relative.startsWith(prefix + '/'))).sort();
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error('Optimized export must contain exactly 70 approved originals and their 280 responsive variants, with no retired or unknown images.');
  }
  const plan = {
    version: 1, preparedAtUtc: new Date().toISOString(), retiredOn: manifest.retiredOn,
    deletePaths: validatePrunePaths(retiredPaths), protectedApprovedImages: approved,
    expectedExportPaths: expected, inventoryRoots, inventoryMaxDepth: 3,
    unknownRemotePaths: 'Report only; never delete automatically.',
  };
  // Refuse stale plans/commands rather than reusing or recursively clearing them.
  await fs.mkdir(outputRoot, { recursive: false });
  await fs.writeFile(path.join(outputRoot, 'retirement-plan.json'), json(plan));
  await fs.writeFile(path.join(outputRoot, 'expected-export-inventory.json'), json({ paths: expected }));
  await fs.writeFile(path.join(outputRoot, 'delete.lftp'), deletionCommands(plan.deletePaths));
  console.log(`Retirement plan verified: ${approved.length} protected originals; ${expected.length} expected live files; ${plan.deletePaths.length} exact deletions.`);
  return plan;
}

export function parseRemoteInventory(contents, expectedPaths) {
  if (contents.length > 2 * 1024 * 1024) throw new Error('Scoped remote inventory exceeds the 2 MiB bound.');
  const lines = contents.split(/\r?\n/).filter(Boolean);
  if (lines.length > 10000) throw new Error('Scoped remote inventory exceeds the 10,000-entry bound.');
  const knownDirectories = new Set(inventoryRoots);
  for (const relative of [...expectedPaths, ...retiredPaths]) {
    for (let directory = path.posix.dirname(relative); inventoryRoots.some(root => directory === root || directory.startsWith(root + '/')); directory = path.posix.dirname(directory)) {
      knownDirectories.add(directory);
    }
  }
  const files = new Set(), directories = new Set();
  for (const line of lines) {
    const normalized = line.replace(/^\.\//, '').replace(/\/$/, '');
    if (!normalized || normalized.includes('..') || /[\x00-\x1f\\]/.test(normalized) ||
        path.posix.normalize(normalized) !== normalized || !inventoryRoots.some(root => normalized === root || normalized.startsWith(root + '/'))) {
      throw new Error('Unexpected path in scoped FTP inventory.');
    }
    if (line.endsWith('/') || knownDirectories.has(normalized)) directories.add(normalized);
    else files.add(normalized);
  }
  return { files: [...files].sort(), directories: [...directories].sort(), unknownDirectories: [...directories].filter(directory => !knownDirectories.has(directory)).sort() };
}

export async function verifyRemoteInventory(outputRoot, phase) {
  if (!['before', 'after'].includes(phase)) throw new Error('Expected before/after inventory phase.');
  const plan = JSON.parse(await fs.readFile(path.join(outputRoot, 'retirement-plan.json'), 'utf8'));
  validatePrunePaths(plan.deletePaths);
  const approved = await currentApprovedImages();
  const expected = approved.flatMap(image => [image.path, ...variants(image.path)]).sort();
  if (JSON.stringify(plan.expectedExportPaths) !== JSON.stringify(expected)) throw new Error('Retirement plan does not match current approved assets.');
  const inventory = parseRemoteInventory(await fs.readFile(path.join(outputRoot, `remote-${phase}.txt`), 'utf8'), expected);
  const actual = new Set(inventory.files), protectedPaths = new Set(expected), retired = new Set(retiredPaths);
  const missingApprovedPaths = expected.filter(relative => !actual.has(relative));
  const presentRetiredPaths = retiredPaths.filter(relative => actual.has(relative));
  const unknownPaths = inventory.files.filter(relative => !protectedPaths.has(relative) && !retired.has(relative));
  const unexpectedRemovedPaths = [];
  if (phase === 'after') {
    const before = JSON.parse(await fs.readFile(path.join(outputRoot, 'remote-before.json'), 'utf8'));
    unexpectedRemovedPaths.push(...before.files.filter(relative => !actual.has(relative) && !retired.has(relative)));
  }
  const failed = missingApprovedPaths.length > 0 || unexpectedRemovedPaths.length > 0 || (phase === 'after' && presentRetiredPaths.length > 0);
  const report = {
    observedAtUtc: new Date().toISOString(), phase,
    status: failed ? 'failed' : unknownPaths.length || inventory.unknownDirectories.length ? 'needs-review' : 'passed',
    scope: { roots: inventoryRoots, maxDepth: 3, deletionAllowlistSize: 15 },
    ...inventory, missingApprovedPaths, presentRetiredPaths, unknownPaths, unexpectedRemovedPaths,
    unknownPathsWereNotDeleted: true,
  };
  await fs.writeFile(path.join(outputRoot, `remote-${phase}.json`), json(report));
  console.log(`Scoped FTP ${phase}: ${actual.size} files; ${presentRetiredPaths.length} retired remain; ${missingApprovedPaths.length} approved missing; ${unknownPaths.length} unknown files (report only).`);
  if (failed) throw new Error('Scoped FTP image-retirement verification failed; inspect the metadata report.');
  if (phase === 'before') {
    // An already-completed retirement is a no-op. Do not depend on FTP servers
    // treating deletion of a missing file as success.
    await fs.writeFile(path.join(outputRoot, 'delete.lftp'), deletionCommands(plan.deletePaths, presentRetiredPaths));
  }
  return report;
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const [command, source, destination] = process.argv.slice(2);
  if (command === 'prepare' && source && destination) await prepareRetirement(source, destination);
  else if (command === 'verify-before' && source) await verifyRemoteInventory(source, 'before');
  else if (command === 'verify-after' && source) await verifyRemoteInventory(source, 'after');
  else throw new Error('Usage: retired-blog-images.mjs prepare <optimized-export> <new-metadata-directory> | verify-before <metadata-directory> | verify-after <metadata-directory>');
}
