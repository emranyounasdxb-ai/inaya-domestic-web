import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../../', import.meta.url));
const inventoryRoot = 'images/company-gallery';
const metadataFile = '.github/retired-gallery-images-20261025.json';
const safePath = /^images\/company-gallery\/(?:thumbs\/)?inaya-(?:office|home-support|cooking|childcare|general|design)-\d{3}\.jpg$/;
const json = value => JSON.stringify(value, null, 2) + '\n';

export async function retirementPaths() {
  const manifest = JSON.parse(await fs.readFile(path.join(root, metadataFile), 'utf8'));
  if (manifest.version !== 1 || manifest.retiredOn !== '2026-10-25' || manifest.images.length !== 358 ||
      manifest.images.some(image => !safePath.test(image.path) || !/^[a-f0-9]{64}$/.test(image.removedSha256))) {
    throw new Error('Expected the reviewed 358-file gallery retirement manifest.');
  }
  const paths = manifest.images.map(image => image.path).sort();
  if (new Set(paths).size !== 358 || paths.filter(relative => relative.includes('/thumbs/')).length !== 179 ||
      paths.some(relative => !relative.includes('/thumbs/') && !paths.includes(relative.replace('company-gallery/', 'company-gallery/thumbs/')))) {
    throw new Error('Every one of the 179 gallery photos must have exactly one reviewed thumbnail.');
  }
  return paths;
}

export async function deletionCommands(selected) {
  const allowed = new Set(await retirementPaths());
  if (!Array.isArray(selected) || new Set(selected).size !== selected.length || selected.some(relative => !allowed.has(relative))) {
    throw new Error('Deletion must be a distinct subset of the reviewed gallery paths.');
  }
  return [...selected].sort().map(relative => `rm ${relative}\n`).join('');
}

async function filesIn(directory, prefix = '') {
  const files = [];
  for (const entry of await fs.readdir(path.join(directory, prefix), { withFileTypes: true })) {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) files.push(...await filesIn(directory, relative));
    else if (entry.isFile()) files.push(relative);
    else throw new Error('Non-regular export input is forbidden.');
  }
  return files;
}

export async function prepareRetirement(exportRoot, outputRoot) {
  const paths = await retirementPaths();
  // Check the entire generated export, including RSC/client bundles, not just HTML.
  const retiredNames = new Set(paths.map(relative => path.posix.basename(relative)));
  for (const relative of await filesIn(exportRoot)) {
    if (relative.startsWith(inventoryRoot + '/') || relative.startsWith('optimized/' + inventoryRoot + '/')) {
      throw new Error(`Retired gallery image remains in export: ${relative}`);
    }
    if (/\.(?:html|xml|js|json|css|txt|rsc)$/.test(relative)) {
      const contents = await fs.readFile(path.join(exportRoot, relative), 'utf8');
      if ([...retiredNames].some(name => contents.includes(name)) || /(?:#|id=["'])photo-(?:office|home-support|cooking|childcare|general|design)-\d{3}|urn:inaya:company-photo:/.test(contents)) {
        throw new Error(`Retired gallery image or photo record is still referenced: ${relative}`);
      }
    }
  }
  const plan = {
    version: 1, retiredOn: '2026-10-25', preparedAtUtc: new Date().toISOString(),
    deletePaths: paths, inventoryRoot, unknownRemotePaths: 'Report and preserve; never delete automatically.',
  };
  await fs.mkdir(outputRoot, { recursive: false });
  await fs.writeFile(path.join(outputRoot, 'retirement-plan.json'), json(plan));
  await fs.writeFile(path.join(outputRoot, 'delete.lftp'), await deletionCommands(paths));
  console.log('Gallery retirement verified: no files or references in export; exactly 358 reviewed deletion paths.');
  return plan;
}

export function parseRemoteInventory(contents) {
  if (contents.length > 2 * 1024 * 1024) throw new Error('Scoped gallery inventory exceeds the 2 MiB bound.');
  const lines = contents.split(/\r?\n/).filter(Boolean);
  if (lines.length > 10000) throw new Error('Scoped gallery inventory exceeds the 10,000-entry bound.');
  const files = new Set(), directories = new Set();
  for (const line of lines) {
    const relative = line.replace(/^\.\//, '').replace(/\/$/, '');
    if (!relative || relative.includes('..') || /[\x00-\x1f\\]/.test(relative) || path.posix.normalize(relative) !== relative ||
        !(relative === inventoryRoot || relative.startsWith(inventoryRoot + '/'))) {
      throw new Error('Unexpected path in scoped gallery inventory.');
    }
    if (line.endsWith('/') || [inventoryRoot, inventoryRoot + '/thumbs'].includes(relative)) directories.add(relative);
    else files.add(relative);
  }
  return { files: [...files].sort(), directories: [...directories].sort() };
}

export async function verifyRemoteInventory(outputRoot, phase) {
  if (!['before', 'after'].includes(phase)) throw new Error('Expected before or after.');
  const allowed = await retirementPaths();
  const plan = JSON.parse(await fs.readFile(path.join(outputRoot, 'retirement-plan.json'), 'utf8'));
  if (JSON.stringify(plan.deletePaths) !== JSON.stringify(allowed)) throw new Error('Stored plan differs from the exact reviewed allowlist.');
  const inventory = parseRemoteInventory(await fs.readFile(path.join(outputRoot, `remote-${phase}.txt`), 'utf8'));
  const actual = new Set(inventory.files), allowedSet = new Set(allowed);
  const presentRetiredPaths = allowed.filter(relative => actual.has(relative));
  const unknownPaths = inventory.files.filter(relative => !allowedSet.has(relative));
  const unexpectedRemovedPaths = [];
  if (phase === 'after') {
    const before = JSON.parse(await fs.readFile(path.join(outputRoot, 'remote-before.json'), 'utf8'));
    unexpectedRemovedPaths.push(...before.files.filter(relative => !actual.has(relative) && !allowedSet.has(relative)));
  }
  const failed = unexpectedRemovedPaths.length > 0 || (phase === 'after' && presentRetiredPaths.length > 0);
  const report = {
    observedAtUtc: new Date().toISOString(), phase, status: failed ? 'failed' : unknownPaths.length ? 'needs-review' : 'passed',
    ...inventory, presentRetiredPaths, unknownPaths, unexpectedRemovedPaths, unknownPathsWereNotDeleted: true,
  };
  await fs.writeFile(path.join(outputRoot, `remote-${phase}.json`), json(report));
  if (phase === 'before') await fs.writeFile(path.join(outputRoot, 'delete.lftp'), await deletionCommands(presentRetiredPaths));
  console.log(`Gallery FTP ${phase}: ${actual.size} files; ${presentRetiredPaths.length} retired remain; ${unknownPaths.length} unknown preserved.`);
  if (failed) throw new Error('Gallery retirement verification failed. Inspect the saved scoped inventory.');
  return report;
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const [command, source, destination] = process.argv.slice(2);
  if (command === 'prepare' && source && destination) await prepareRetirement(source, destination);
  else if (command === 'verify-before' && source) await verifyRemoteInventory(source, 'before');
  else if (command === 'verify-after' && source) await verifyRemoteInventory(source, 'after');
  else throw new Error('Usage: retired-gallery-images.mjs prepare <export> <new-metadata-directory> | verify-before <metadata-directory> | verify-after <metadata-directory>');
}
