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
  // Disable libvips' file-handle cache in the temporary fixture process so
  // Windows can replace the WebP it just read. The encoding pipeline is unchanged.
  return "require('sharp').cache(false);\n" + match[2].split('\n').map((line) => line.startsWith(indentation) ? line.slice(indentation.length) : line).join('\n');
}

test('cPanel optimizer rejects retired gallery inputs while ordinary household image optimization remains intact', { timeout: 60000 }, async () => {
  const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), 'inaya-cpanel-gallery-'));
  try {
    const out = path.join(temporaryRoot, 'out');
    const approvalPath = 'content/research/2026-10-25/service-owner-approved-images.json';
    await mkdir(path.dirname(path.join(temporaryRoot, approvalPath)), { recursive: true });
    await writeFile(path.join(temporaryRoot, approvalPath), await readFile(path.join(projectRoot, approvalPath)));
    const pageApprovalPath = 'content/research/2026-10-25/home-about-owner-approved-images.json';
    await writeFile(path.join(temporaryRoot, pageApprovalPath), await readFile(path.join(projectRoot, pageApprovalPath)));
    const householdRelative = 'images/services/household.jpg';
    const household = await jpegFixture(1300, 650);
    const destination = path.join(out, householdRelative);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, household);
    const selected = path.join(out, 'images/services/live-in-maid.webp');
    await writeFile(selected, await sharp(household).webp().keepMetadata().toBuffer());
    const selectedPage = path.join(out, 'images/about/about-team-story.webp');
    await mkdir(path.dirname(selectedPage), { recursive: true });
    await writeFile(selectedPage, await sharp(household).webp().keepMetadata().toBuffer());
    const options = {
      cwd: temporaryRoot,
      env: { ...process.env, NODE_PATH: [path.join(projectRoot, 'node_modules'), process.env.NODE_PATH].filter(Boolean).join(path.delimiter) },
      timeout: 45000, maxBuffer: 1024 * 1024,
    };
    const { stdout, stderr } = await execFileAsync(process.execPath, ['-e', await deployedOptimizer()], options);
    assert.match(stdout, /Optimized exported images and generated responsive variants/);
    assert.doesNotMatch(stderr, /Skipped image optimization/);
    const files = await relativeFiles(out);
    assert.deepEqual(files.filter(file => file.startsWith('images/company-gallery/')), []);
    assert.ok(!files.some(file => file.startsWith('optimized/images/company-gallery/')));
    const after = await readFile(destination);
    assert.notEqual(sha256(after), sha256(household));
    const metadata = await sharp(after).metadata();
    assert.equal(metadata.format, 'jpeg');
    assert.deepEqual([metadata.width, metadata.height], [900, 450]);
    assert.equal(metadata.isProgressive, true);
    assert.deepEqual(files.filter(file => file.startsWith('optimized/images/services/household-')), [480, 768, 900].map(width => `optimized/images/services/household-${width}.webp`));
    assert.equal(metadata.xmp, undefined, 'Unrelated images retain their existing encoding behaviour');
    const selectedMetadata = await sharp(await readFile(selected)).metadata();
    assert.equal(selectedMetadata.width, 900);
    assert.equal(selectedMetadata.xmp.toString(), provenance, 'The actual optimizer retains approved-image provenance');
    const selectedPageMetadata = await sharp(await readFile(selectedPage)).metadata();
    assert.equal(selectedPageMetadata.width, 1200);
    assert.equal(selectedPageMetadata.xmp.toString(), provenance, 'Home/About approved-image provenance retained');
    for (const width of [480, 768, 960, 1200]) {
      const variant = await sharp(await readFile(path.join(out, `optimized/images/about/about-team-story-${width}.webp`))).metadata();
      assert.equal(variant.xmp.toString(), provenance, 'Home/About derivative provenance retained');
    }
    for (const width of [480, 768, 900]) {
      const variant = await sharp(await readFile(path.join(out, `optimized/images/services/household-${width}.webp`))).metadata();
      assert.equal(variant.format, 'webp');
      assert.deepEqual([variant.width, variant.height], [width, width / 2]);
      const selectedVariant = await sharp(await readFile(path.join(out, `optimized/images/services/live-in-maid-${width}.webp`))).metadata();
      assert.equal(selectedVariant.xmp.toString(), provenance, 'Responsive approved-image provenance is retained');
    }
    // Synthetic bytes exercise fail-closed retirement without restoring any old photo.
    const stale = path.join(out, 'images/company-gallery/inaya-office-003.jpg');
    await mkdir(path.dirname(stale), { recursive: true });
    await writeFile(stale, await jpegFixture(480, 300));
    await assert.rejects(execFileAsync(process.execPath, ['-e', await deployedOptimizer()], options), error => {
      assert.match(error.stderr, /Retired gallery assets must never be published again/);
      return error.code === 1;
    });
  } finally {
    const resolved = path.resolve(temporaryRoot);
    assert.ok(resolved.startsWith(path.resolve(os.tmpdir()) + path.sep) && path.basename(resolved).startsWith('inaya-cpanel-gallery-'));
    await rm(resolved, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
  }
});
