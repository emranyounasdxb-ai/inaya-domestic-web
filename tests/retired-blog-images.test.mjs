import assert from 'node:assert/strict';
import { copyFile, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import {
  currentApprovedImages, deletionCommands, parseRemoteInventory,
  prepareRetirement, retiredPaths, validatePrunePaths, verifyRemoteInventory,
} from '../.github/scripts/retired-blog-images.mjs';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const metadataPath = '.github/retired-blog-images-20261024.json';
const approvalPaths = [
  'content/research/2026-10-24/remaining-blog-owner-approved-images.json',
  'content/research/2026-10-24/keyword-21-owner-approved-images.json',
];

test('cleanup command generation accepts exactly the reviewed 15 files and rejects expanded scope or command syntax', () => {
  assert.equal(retiredPaths.length, 15);
  assert.equal(retiredPaths.filter(relative => relative.startsWith('images/')).length, 3);
  assert.equal(retiredPaths.filter(relative => relative.startsWith('optimized/')).length, 12);
  const commands = deletionCommands(retiredPaths).trim().split('\n');
  assert.deepEqual(commands, [...retiredPaths].sort().map(relative => `rm ${relative}`));
  assert.ok(commands.every(command => /^rm (?:optimized\/)?images\/blogs\/[a-z0-9-]+\.webp$/.test(command)));
  for (const unsafe of ['../images/blogs/x.webp', '/images/blogs/x.webp', 'images/blogs/*.webp', 'images/blogs/x.webp; bye', 'images/blogs/x.webp\nrm -r images', 'images/blogs/x.webp', 'images/company-gallery/inaya-office-003.jpg']) {
    assert.throws(() => deletionCommands([unsafe, ...retiredPaths.slice(1)]), /exactly the 15/);
  }
  assert.throws(() => validatePrunePaths(retiredPaths.slice(1)), /exactly the 15/);
  assert.throws(() => validatePrunePaths([...retiredPaths, retiredPaths[0]]), /exactly the 15/);
  assert.throws(() => validatePrunePaths([retiredPaths[1], ...retiredPaths.slice(1)]), /exactly the 15/);
  assert.equal(deletionCommands(retiredPaths, []), '');
  assert.equal(deletionCommands(retiredPaths, [retiredPaths[0]]), `rm ${retiredPaths[0]}\n`);
  assert.throws(() => deletionCommands(retiredPaths, ['images/blogs/unknown.webp']), /distinct subset/);
  assert.throws(() => deletionCommands(retiredPaths, [retiredPaths[0], retiredPaths[0]]), /distinct subset/);
});

test('public blog files are exactly the current 65 approved images with unchanged bytes and complete runtime mappings', async () => {
  const images = await currentApprovedImages();
  assert.equal(images.length, 65);
  const mapping = (await Promise.all(['lib/blog-images.ts', 'lib/keyword-article-images.ts'].map(relative => readFile(path.join(projectRoot, relative), 'utf8')))).join('\n');
  const mapped = [...mapping.matchAll(/['"]?src['"]?\s*:\s*['"](\/images\/[^'"?]+)/g)].map(match => match[1].slice(1)).sort();
  assert.deepEqual(mapped, images.map(image => image.path).sort());
  assert.ok(images.every(image => !retiredPaths.includes(image.path)));
});

test('remote listing parser is scoped, bounded and treats unknown entries as metadata rather than delete commands', () => {
  const expected = ['images/blogs/current.webp', 'optimized/images/blogs/current-480.webp'];
  const parsed = parseRemoteInventory('images/blogs/\nimages/blogs/current.webp\nimages/blogs/unknown.webp\nimages/blogs/unknown-folder/\noptimized/images/blogs/\noptimized/images/blogs/current-480.webp\n', expected);
  assert.deepEqual(parsed.files, ['images/blogs/current.webp', 'images/blogs/unknown.webp', 'optimized/images/blogs/current-480.webp']);
  assert.deepEqual(parsed.unknownDirectories, ['images/blogs/unknown-folder']);
  for (const input of ['../images/blogs/x.webp', '/images/blogs/x.webp', 'images/blogs/../x.webp', 'images/company-gallery/private.jpg', 'images/blogs/unsafe\tname.webp']) {
    assert.throws(() => parseRemoteInventory(input, expected), /Unexpected path/);
  }
  assert.throws(() => parseRemoteInventory('x'.repeat(2 * 1024 * 1024 + 1), expected), /2 MiB/);
  assert.throws(() => parseRemoteInventory('images/blogs/x.webp\n'.repeat(10001), expected), /10,000/);
});

test('retirement preflight refuses references, resurrected files, missing current assets and metadata drift before creating FTP commands', async () => {
  const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), 'inaya-retired-blog-images-'));
  try {
    const root = path.join(temporaryRoot, 'project'), out = path.join(temporaryRoot, 'out');
    for (const directory of ['app', 'components', 'lib', 'messages', 'content', 'public']) await mkdir(path.join(root, directory), { recursive: true });
    for (const relative of [metadataPath, ...approvalPaths]) {
      await mkdir(path.dirname(path.join(root, relative)), { recursive: true });
      await copyFile(path.join(projectRoot, relative), path.join(root, relative));
    }
    const images = await currentApprovedImages();
    const expected = images.flatMap(image => [image.path, ...[480, 768, 960, 1200].map(width => `optimized/${image.path.replace(/\.webp$/, '')}-${width}.webp`)]).sort();
    for (const image of images) {
      await mkdir(path.dirname(path.join(root, 'public', image.path)), { recursive: true });
      await copyFile(path.join(projectRoot, 'public', image.path), path.join(root, 'public', image.path));
    }
    for (const relative of expected) {
      await mkdir(path.dirname(path.join(out, relative)), { recursive: true });
      await writeFile(path.join(out, relative), 'Current export presence fixture; encoding is covered by the real cPanel optimizer integration test.');
    }
    const planRoot = path.join(temporaryRoot, 'plan');
    const retiredName = path.posix.basename(retiredPaths.find(relative => relative.startsWith('images/')));
    await writeFile(path.join(root, 'app/page.tsx'), `<img src="/images/blogs/${retiredName}" />`);
    await assert.rejects(prepareRetirement(out, planRoot, root), /referenced by app\/page.tsx/);
    await rm(path.join(root, 'app/page.tsx'));
    await writeFile(path.join(out, 'index.html'), `<img src="/images/blogs/${retiredName}" />`);
    await assert.rejects(prepareRetirement(out, planRoot, root), /referenced by index.html/);
    await rm(path.join(out, 'index.html'));
    await writeFile(path.join(out, retiredPaths[0]), 'resurrected old export');
    await assert.rejects(prepareRetirement(out, planRoot, root), /exactly 65 approved originals/);
    await rm(path.join(out, retiredPaths[0]));
    await rm(path.join(out, expected[0]));
    await assert.rejects(prepareRetirement(out, planRoot, root), /exactly 65 approved originals/);
    await writeFile(path.join(out, expected[0]), 'current export');
    await writeFile(path.join(root, 'public', images[0].path), 'unapproved changed image');
    await assert.rejects(prepareRetirement(out, planRoot, root), /Approved image bytes changed/);
    await copyFile(path.join(projectRoot, 'public', images[0].path), path.join(root, 'public', images[0].path));
    const metadata = JSON.parse(await readFile(path.join(root, metadataPath), 'utf8'));
    metadata.images[0].path = images[0].path;
    await writeFile(path.join(root, metadataPath), JSON.stringify(metadata));
    await assert.rejects(prepareRetirement(out, planRoot, root), /reviewed image allowlist/);
    await copyFile(path.join(projectRoot, metadataPath), path.join(root, metadataPath));

    const plan = await prepareRetirement(out, planRoot, root);
    assert.equal(plan.protectedApprovedImages.length, 65);
    assert.equal(plan.expectedExportPaths.length, 325);
    assert.equal(plan.deletePaths.length, 15);
    assert.equal(await readFile(path.join(planRoot, 'delete.lftp'), 'utf8'), deletionCommands(retiredPaths));
    await assert.rejects(prepareRetirement(out, planRoot, root), /EEXIST/);

    const unknown = 'images/blogs/unknown-stored-image.webp';
    await writeFile(path.join(planRoot, 'remote-before.txt'), [...expected, ...retiredPaths, unknown].join('\n'));
    const before = await verifyRemoteInventory(planRoot, 'before');
    assert.equal(before.status, 'needs-review');
    assert.equal(before.presentRetiredPaths.length, 15);
    assert.deepEqual(before.unknownPaths, [unknown]);
    await writeFile(path.join(planRoot, 'remote-after.txt'), [...expected, unknown].join('\n'));
    const after = await verifyRemoteInventory(planRoot, 'after');
    assert.equal(after.status, 'needs-review');
    assert.equal(after.presentRetiredPaths.length, 0);
    assert.deepEqual(after.unknownPaths, [unknown]);
    assert.deepEqual(after.unexpectedRemovedPaths, []);
    await writeFile(path.join(planRoot, 'remote-after.txt'), expected.join('\n'));
    await assert.rejects(verifyRemoteInventory(planRoot, 'after'), /verification failed/);
    assert.deepEqual(JSON.parse(await readFile(path.join(planRoot, 'remote-after.json'), 'utf8')).unexpectedRemovedPaths, [unknown]);
    await writeFile(path.join(planRoot, 'remote-after.txt'), [...expected.slice(1), retiredPaths[0], unknown].join('\n'));
    await assert.rejects(verifyRemoteInventory(planRoot, 'after'), /verification failed/);
    const failed = JSON.parse(await readFile(path.join(planRoot, 'remote-after.json'), 'utf8'));
    assert.equal(failed.missingApprovedPaths.length, 1);
    assert.equal(failed.presentRetiredPaths.length, 1);
    await writeFile(path.join(planRoot, 'remote-before.txt'), expected.join('\n'));
    const repeated = await verifyRemoteInventory(planRoot, 'before');
    assert.equal(repeated.status, 'passed');
    assert.equal(await readFile(path.join(planRoot, 'delete.lftp'), 'utf8'), '', 'Later deployments do not attempt to delete missing files');
  } finally {
    const resolved = path.resolve(temporaryRoot);
    assert.ok(resolved.startsWith(path.resolve(os.tmpdir()) + path.sep) && path.basename(resolved).startsWith('inaya-retired-blog-images-'));
    await rm(resolved, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
  }
});

test('production workflow performs reviewed cleanup after upload and before saving its baseline, with bounded metadata evidence', async () => {
  const workflow = (await readFile(path.join(projectRoot, '.github/workflows/deploy-cpanel.yml'), 'utf8')).replaceAll('\r\n', '\n');
  const start = workflow.indexOf('      - name: Prepare exact retired blog image cleanup\n');
  const end = workflow.indexOf('      - name: Prepare successful deployment baseline\n');
  assert.ok(workflow.indexOf('      - name: Deploy to cPanel\n') < start && start < end);
  const cleanup = workflow.slice(start, end);
  assert.equal((cleanup.match(/find -d 3 images\/blogs optimized\/images\/blogs/g) ?? []).length, 2);
  assert.equal((cleanup.match(/cd "\$CPANEL_FTP_SERVER_DIR"/g) ?? []).length, 2);
  assert.match(cleanup, /source "\$RUNNER_TEMP\/inaya-retired-blog-images\/delete.lftp"/);
  assert.match(cleanup, /verify-before/);
  assert.match(cleanup, /verify-after/);
  assert.doesNotMatch(cleanup, /(?:mirror[^\n]*--delete|\brm\s+-r|\bmrm\b)/);
  assert.match(cleanup, /if: always\(\) && steps.retired-blog-plan.outcome == 'success'/);
});
