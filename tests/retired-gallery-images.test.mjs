import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { retirementPaths, deletionCommands, parseRemoteInventory, prepareRetirement, verifyRemoteInventory } from '../.github/scripts/retired-gallery-images.mjs';

test('the positive gallery deletion allowlist contains exactly 179 originals and their 179 thumbnails, with no broad commands', async () => {
  const paths = await retirementPaths();
  assert.equal(paths.length, 358);
  const originals = paths.filter(relative => !relative.includes('/thumbs/'));
  const counts = Object.fromEntries(['office', 'home-support', 'cooking', 'childcare', 'general', 'design'].map(category => [category, originals.filter(relative => relative.startsWith(`images/company-gallery/inaya-${category}-`)).length]));
  assert.deepEqual(counts, { office: 30, 'home-support': 68, cooking: 20, childcare: 8, general: 46, design: 7 });
  assert.equal((await deletionCommands(paths)).split('\n').filter(Boolean).length, 358);
  assert.equal(await deletionCommands([]), '');
  for (const unsafe of ['../images/company-gallery/x.jpg', '/images/company-gallery/inaya-office-003.jpg', 'images/company-gallery/*', 'images/company-gallery/inaya-office-999.jpg', 'images/services/housekeeping.webp', 'images/company-gallery/inaya-office-003.jpg\nrm -r images']) {
    await assert.rejects(deletionCommands([unsafe]));
  }
  await assert.rejects(deletionCommands([paths[0], paths[0]]));
});

test('bounded FTP inventory rejects traversal, other folders and control characters but reports unknown gallery files', () => {
  assert.deepEqual(parseRemoteInventory('./images/company-gallery/\nimages/company-gallery/thumbs/\nimages/company-gallery/custom.jpg\n').files, ['images/company-gallery/custom.jpg']);
  for (const unsafe of ['../images/company-gallery/custom.jpg', '/images/company-gallery/custom.jpg', 'images/services/housekeeping.webp', 'images/company-gallery/../custom.jpg', 'images/company-gallery/unsafe\tname.jpg']) assert.throws(() => parseRemoteInventory(unsafe));
  assert.throws(() => parseRemoteInventory('a'.repeat(2 * 1024 * 1024 + 1)));
});

test('retirement plans reject stale export assets/references and FTP verification preserves unknown files and is idempotent', async () => {
  const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), 'inaya-gallery-retirement-'));
  try {
    const out = path.join(temporaryRoot, 'out');
    await mkdir(out);
    await writeFile(path.join(out, 'index.html'), '<h1>Gallery being updated</h1>');
    const stale = path.join(out, 'images/company-gallery');
    await mkdir(stale, { recursive: true });
    await writeFile(path.join(stale, 'unexpected.jpg'), 'fixture');
    await assert.rejects(prepareRetirement(out, path.join(temporaryRoot, 'invalid-files')));
    await rm(path.join(stale, 'unexpected.jpg'));
    await writeFile(path.join(out, 'index.html'), '<img src="/images/company-gallery/inaya-office-003.jpg">');
    await assert.rejects(prepareRetirement(out, path.join(temporaryRoot, 'invalid-ref')));
    await writeFile(path.join(out, 'index.html'), '<span id="photo-office-003">Retired caption</span>');
    await assert.rejects(prepareRetirement(out, path.join(temporaryRoot, 'invalid-photo-record')));
    await writeFile(path.join(out, 'index.html'), '<h1>Gallery being updated</h1>');
    const output = path.join(temporaryRoot, 'metadata');
    const plan = await prepareRetirement(out, output);
    await assert.rejects(prepareRetirement(out, output), 'a stale output directory must not be reused');
    const unknown = 'images/company-gallery/server-owned.jpg';
    const inventory = plan.deletePaths.concat(unknown).join('\n');
    await writeFile(path.join(output, 'remote-before.txt'), inventory);
    const before = await verifyRemoteInventory(output, 'before');
    assert.equal(before.presentRetiredPaths.length, 358);
    assert.deepEqual(before.unknownPaths, [unknown]);
    assert.ok(!(await readFile(path.join(output, 'delete.lftp'), 'utf8')).includes('server-owned'));
    await writeFile(path.join(output, 'remote-after.txt'), unknown + '\n');
    assert.equal((await verifyRemoteInventory(output, 'after')).presentRetiredPaths.length, 0);
    await writeFile(path.join(output, 'remote-before.txt'), unknown + '\n');
    await verifyRemoteInventory(output, 'before');
    assert.equal(await readFile(path.join(output, 'delete.lftp'), 'utf8'), '', 'completed retirement is a no-op');
    await writeFile(path.join(output, 'remote-after.txt'), '');
    await assert.rejects(verifyRemoteInventory(output, 'after'), 'unknown server paths must never disappear');
    await writeFile(path.join(output, 'remote-after.txt'), unknown + '\n' + plan.deletePaths[0]);
    await assert.rejects(verifyRemoteInventory(output, 'after'), 'even one retired image remaining must fail');
  } finally {
    const resolved = path.resolve(temporaryRoot);
    assert.ok(resolved.startsWith(path.resolve(os.tmpdir()) + path.sep) && path.basename(resolved).startsWith('inaya-gallery-retirement-'));
    await rm(resolved, { recursive: true, force: true });
  }
});

test('deployment validates before upload, prunes exact gallery paths after upload and saves metadata before a successful baseline', async () => {
  const workflow = await readFile('.github/workflows/deploy-cpanel.yml', 'utf8');
  const prepare = workflow.indexOf('- name: Prepare exact retired gallery image cleanup');
  const start = workflow.indexOf('- name: Inventory and remove only reviewed retired gallery image files');
  const end = workflow.indexOf('- name: Prepare successful deployment baseline');
  const cleanup = workflow.slice(start, end);
  assert.ok(prepare > 0 && prepare < workflow.indexOf('- name: Deploy to cPanel') && workflow.indexOf('- name: Deploy to cPanel') < start && end > start);
  assert.match(cleanup, /find -d 2 images\/company-gallery/);
  assert.match(cleanup, /source "\$RUNNER_TEMP\/inaya-retired-gallery-images\/delete.lftp"/);
  assert.match(cleanup, /verify-before/);
  assert.match(cleanup, /verify-after/);
  assert.match(cleanup, /if: always\(\) && steps.retired-gallery-plan.outcome == 'success'/);
  assert.doesNotMatch(cleanup, /rm -|mirror --delete|glob.*rm/);
});
