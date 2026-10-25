import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { enrichImageSitemap, pageImageUrls } from '../scripts/enrich-image-sitemap.mjs';

const origin = 'https://inayadomestic.ae';
async function fixture(run) {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'inaya-image-sitemap-'));
  try {
    await mkdir(path.join(directory, 'images/home'), { recursive: true });
    await writeFile(path.join(directory, 'images/home/desktop.webp'), 'fixture');
    await writeFile(path.join(directory, 'images/home/mobile.webp'), 'fixture');
    return await run(directory);
  } finally {
    assert.equal(path.dirname(path.resolve(directory)), path.resolve(os.tmpdir()));
    assert.ok(path.basename(directory).startsWith('inaya-image-sitemap-'));
    await rm(directory, { recursive: true, force: true });
  }
}

test('picture art direction includes both originals once and ignores decorative, external and UI images', async () => fixture(async directory => {
  const html = `<main><picture><source media="(max-width: 1279px)" srcSet="/optimized/images/home/mobile-480.webp?v=old 480w, /optimized/images/home/mobile-960.webp?v=old 960w"><source srcSet="/optimized/images/home/desktop-768.webp?v=new 768w"><img src="/images/home/desktop.webp?v=new" alt="Five uniforms"></picture><img src="/images/decorative.webp" alt=""><img src="https://example.com/outside.webp" alt="External"><img src="/brand/logo.webp" alt="Logo"><picture><source srcSet="/images/missing.webp 480w"><img src="/images/missing.webp" alt=""></picture></main>`;
  assert.deepEqual(await pageImageUrls(html, `${origin}/en/`, directory), [`${origin}/images/home/desktop.webp`, `${origin}/images/home/mobile.webp`]);
}));

test('missing fallback or art-directed originals stop publication rather than dropping broken references', async () => fixture(async directory => {
  await assert.rejects(pageImageUrls('<main><img src="/images/missing.webp" alt="Missing"></main>', `${origin}/en/`, directory), /ENOENT/);
  await assert.rejects(pageImageUrls('<main><picture><source srcSet="/optimized/images/home/missing-480.webp 480w"><img src="/images/home/desktop.webp" alt="Photo"></picture></main>', `${origin}/en/`, directory), /Missing canonical image/);
}));

test('dedicated image sitemap preserves the same verified landing pages, canonical originals and XML escaping', async () => fixture(async directory => {
  for (const locale of ['en', 'ar']) {
    await mkdir(path.join(directory, locale, 'gallery'), { recursive: true });
    await writeFile(path.join(directory, locale, 'gallery/index.html'), '<main><img src="/images/home/desktop.webp?v=123" alt="Photo"></main>');
  }
  await mkdir(path.join(directory, 'en/contact'), { recursive: true });
  await writeFile(path.join(directory, 'en/contact/index.html'), '<main>Contact us</main>');
  await writeFile(path.join(directory, 'images/home/family & home.webp'), 'fixture');
  await writeFile(path.join(directory, 'en/gallery/index.html'), '<main><img src="/images/home/family%20&amp;%20home.webp" alt="Family"><img src="/images/home/desktop.webp?v=123" alt="Photo"></main>');
  await writeFile(path.join(directory, 'sitemap.xml'), `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/en/gallery/</loc><lastmod>2026-10-25</lastmod></url><url><loc>${origin}/ar/gallery/</loc></url><url><loc>${origin}/en/contact/</loc></url></urlset>`);
  const result = await enrichImageSitemap(directory);
  assert.deepEqual(result, { pages: 3, pagesWithImages: 2, uniqueImages: 2, imageReferences: 3 });
  const main = await readFile(path.join(directory, 'sitemap.xml'), 'utf8');
  const image = await readFile(path.join(directory, 'image-sitemap.xml'), 'utf8');
  assert.equal([...main.matchAll(/<url>/g)].length, 3);
  assert.equal([...image.matchAll(/<url>/g)].length, 2);
  assert.match(image, /xmlns:image="http:\/\/www.google.com\/schemas\/sitemap-image\/1.1"/);
  assert.match(image, /family%20&amp;%20home\.webp/);
  assert.match(image, /<lastmod>2026-10-25<\/lastmod>/);
  assert.doesNotMatch(image, /contact|\?v=|\/optimized\//);
}));
