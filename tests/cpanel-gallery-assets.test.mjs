import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import test from 'node:test';
import sharp from 'sharp';

const execFileAsync = promisify(execFile);
const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');
const provenance = `<?xpacket begin="" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/">
      <dc:source>INAYA synthetic optimizer regression fixture</dc:source>
      <dc:rights>Keep this fixture provenance with the prepared JPEG.</dc:rights>
    </rdf:Description>
  </rdf:RDF>
</x:xmpmeta><?xpacket end="w"?>`;

async function jpegFixture(width, height) {
  return sharp({ create: { width, height, channels: 3, background: '#3967a9' } })
    .withMetadata({ density: 72 })
    .withExifMerge({ IFD0: { Copyright: 'INAYA regression fixture', ImageDescription: 'Prepared image provenance' } })
    .withXmp(provenance)
    .jpeg({ quality: 85, progressive: true })
    .toBuffer();
}

async function relativeFiles(directory, prefix = '') {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) files.push(...await relativeFiles(path.join(directory, entry.name), relative));
    else files.push(relative);
  }
  return files.sort();
}

async function deployedOptimizer() {
  const workflow = (await readFile(path.join(projectRoot, '.github/workflows/deploy-cpanel.yml'), 'utf8')).replaceAll('\r\n', '\n');
  const section = workflow.split('      - name: Optimize exported images\n')[1]?.split('\n      - name:')[0];
  assert.ok(section, 'The real deployment image-optimization step must exist');
  const match = section.match(/^([ ]*)node <<'NODE'\n([\s\S]*?)^\1NODE[ ]*$/m);
  assert.ok(match, 'Extract the Node heredoc from the actual deployment step');
  const indentation = match[1];
  return match[2].split('\n').map((line) => line.startsWith(indentation) ? line.slice(indentation.length) : line).join('\n');
}

test('cPanel optimizer preserves prepared gallery JPEGs and provenance while optimizing ordinary household images', { timeout: 60000 }, async () => {
  const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), 'inaya-cpanel-gallery-'));
  try {
    const out = path.join(temporaryRoot, 'out');
    const fullRelative = 'images/company-gallery/inaya-office-003.jpg';
    const thumbRelative = 'images/company-gallery/thumbs/inaya-office-003.jpg';
    const householdRelative = 'images/services/household.jpg';
    const full = await jpegFixture(1600, 1000);
    const thumbnail = await jpegFixture(480, 300);
    const household = await jpegFixture(1300, 650);
    for (const [relative, bytes] of [[fullRelative, full], [thumbRelative, thumbnail], [householdRelative, household]]) {
      const destination = path.join(out, relative);
      await mkdir(path.dirname(destination), { recursive: true });
      await writeFile(destination, bytes);
    }
    const originalMetadata = await sharp(full).metadata();
    assert.ok(originalMetadata.exif?.length, 'The fixture must exercise EXIF preservation');
    assert.ok(originalMetadata.xmp?.length, 'The fixture must exercise XMP provenance preservation');
    assert.ok(originalMetadata.icc?.length, 'The fixture must exercise colour-profile preservation');
    assert.match(originalMetadata.xmp.toString('utf8'), /INAYA synthetic optimizer regression fixture/);

    const { stdout, stderr } = await execFileAsync(process.execPath, ['-e', await deployedOptimizer()], {
      cwd: temporaryRoot,
      env: {
        ...process.env,
        NODE_PATH: [path.join(projectRoot, 'node_modules'), process.env.NODE_PATH].filter(Boolean).join(path.delimiter),
      },
      timeout: 45000,
      maxBuffer: 1024 * 1024,
    });
    assert.match(stdout, /Optimized exported images and generated responsive variants/);
    assert.doesNotMatch(stderr, /Skipped image optimization/, 'A swallowed optimizer failure must fail this integration test');

    for (const [relative, original] of [[fullRelative, full], [thumbRelative, thumbnail]]) {
      const after = await readFile(path.join(out, relative));
      assert.equal(sha256(after), sha256(original), `${relative} must remain byte-for-byte unchanged`);
      const beforeMetadata = await sharp(original).metadata();
      const afterMetadata = await sharp(after).metadata();
      assert.deepEqual([afterMetadata.width, afterMetadata.height], [beforeMetadata.width, beforeMetadata.height]);
      for (const key of ['exif', 'xmp', 'icc']) {
        assert.deepEqual(afterMetadata[key], beforeMetadata[key], `${relative} must retain its ${key} metadata`);
      }
    }
    const files = await relativeFiles(out);
    assert.deepEqual(files.filter((file) => file.startsWith('images/company-gallery/')), [fullRelative, thumbRelative]);
    assert.ok(!files.some((file) => file.startsWith('optimized/images/company-gallery/')), 'Gallery originals and thumbnails must not acquire redundant responsive variants');

    const householdAfter = await readFile(path.join(out, householdRelative));
    const householdMetadata = await sharp(householdAfter).metadata();
    assert.notEqual(sha256(householdAfter), sha256(household), 'The gallery exception must not disable ordinary JPEG optimization');
    assert.equal(householdMetadata.format, 'jpeg');
    assert.deepEqual([householdMetadata.width, householdMetadata.height], [900, 450]);
    assert.equal(householdMetadata.isProgressive, true);
    const expectedVariants = [480, 768, 900].map((width) => `optimized/images/services/household-${width}.webp`);
    assert.deepEqual(files.filter((file) => file.startsWith('optimized/')), expectedVariants);
    for (const width of [480, 768, 900]) {
      const variant = await sharp(await readFile(path.join(out, `optimized/images/services/household-${width}.webp`))).metadata();
      assert.equal(variant.format, 'webp');
      assert.deepEqual([variant.width, variant.height], [width, width / 2]);
    }
  } finally {
    const resolvedTemporaryRoot = path.resolve(temporaryRoot);
    const expectedPrefix = path.resolve(os.tmpdir()) + path.sep;
    assert.ok(resolvedTemporaryRoot.startsWith(expectedPrefix) && path.basename(resolvedTemporaryRoot).startsWith('inaya-cpanel-gallery-'));
    await rm(resolvedTemporaryRoot, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
  }
});
