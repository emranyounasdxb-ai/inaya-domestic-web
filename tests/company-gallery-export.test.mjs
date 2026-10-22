import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import sharp from 'sharp';
import { attrs, decode, text } from '../scripts/seo-content-audit.mjs';
import { pageImageUrls } from '../scripts/enrich-image-sitemap.mjs';

const origin = 'https://inayadomestic.ae';
const source = await readFile('lib/company-gallery.ts', 'utf8');
const photos = JSON.parse(source.match(/export const companyGalleryPhotos: CompanyGalleryPhoto\[\] = (\[[\s\S]*?\n\]);/)[1]);
const lowerAttrs = tag => Object.fromEntries(Object.entries(attrs(tag)).map(([key,value]) => [key.toLowerCase(), value]));

test('curated JPEGs and thumbnails are complete, readable and exactly preserved in the static export', async () => {
  assert.equal(photos.length, 179);
  assert.equal(new Set(photos.map(photo => photo.id)).size, 179);
  assert.equal(new Set(photos.map(photo => photo.src)).size, 179);
  assert.equal(photos[0].id, 'office-003');
  assert.doesNotMatch(source, /googleusercontent|localFile|localThumbnailFile|existing_site_match|[A-Za-z]:[\\/]/);
  for (const photo of photos) {
    for (const [url,width,height] of [[photo.src,photo.width,photo.height],[photo.thumbnailSrc,photo.thumbnailWidth,photo.thumbnailHeight]]) {
      assert.match(url, /^\/images\/company-gallery\/(?:thumbs\/)?inaya-(?:office|home-support|cooking|childcare|general|design)-\d{3}\.jpg$/);
      const original = await readFile(path.join('public', url));
      const exported = await readFile(path.join('out', url));
      assert.deepEqual(exported, original, `${url}: exact prepared JPEG copied to export`);
      const meta = await sharp(original).metadata();
      assert.equal(meta.format, 'jpeg', url);
      assert.equal(meta.width, width, url);
      assert.equal(meta.height, height, url);
    }
    assert.match(photo.caption.ar, /[\u0600-\u06ff]/);
    assert.ok(photo.caption.en.length > 10 && photo.alt.en.length > 10 && photo.alt.ar.length > 5);
  }
});

test('both gallery pages render every representative with localized captions, native full-image links and crawlable originals', async () => {
  const xml = await readFile('out/sitemap.xml', 'utf8');
  const expectedImages = photos.map(photo => origin + photo.src).sort();
  for (const locale of ['en','ar']) {
    const url = `${origin}/${locale}/gallery/`;
    const html = await readFile(`out/${locale}/gallery/index.html`, 'utf8');
    const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
    assert.equal([...body.matchAll(/<main\b/g)].length, 1, 'locale layout owns the single main landmark');
    assert.equal([...body.matchAll(/<h1\b/g)].length, 1);
    assert.doesNotMatch(text(body), /illustration|illustrative|صورة توضيحية|مشهد توضيحي/i);
    const figures = [...body.matchAll(/<figure\b([^>]*)>([\s\S]*?)<\/figure>/g)];
    assert.equal(figures.length, photos.length);
    for (const photo of photos) {
      const figure = figures.find(item => lowerAttrs(item[1]).id === `photo-${photo.id}`);
      assert.ok(figure, `per-image landing anchor ${photo.id}`);
      const image = lowerAttrs(figure[2].match(/<img\b[^>]*>/)[0]);
      assert.equal(image.src, photo.src);
      assert.equal(image.alt, photo.alt[locale]);
      assert.equal(image.loading, photo.id === 'office-003' ? 'eager' : 'lazy');
      assert.equal(image.width, String(photo.width));
      assert.equal(image.height, String(photo.height));
      const link = lowerAttrs(figure[2].match(/<a\b[^>]*>/)[0]);
      assert.equal(link.href, photo.src);
      const responsive = lowerAttrs(figure[2].match(/<source\b[^>]*>/)[0]);
      assert.equal(responsive.srcset, `${photo.thumbnailSrc} ${photo.thumbnailWidth}w, ${photo.src} ${photo.width}w`);
      assert.equal(text(figure[2].match(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/)[1]), photo.caption[locale]);
    }
    assert.deepEqual(await pageImageUrls(html,url,'out'), expectedImages);
    const entry = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].find(item => decode(item[1].match(/<loc>(.*?)<\/loc>/)[1]) === url);
    assert.ok(entry, 'gallery canonical in sitemap');
    assert.deepEqual([...entry[1].matchAll(/<image:loc>(.*?)<\/image:loc>/g)].map(item=>decode(item[1])).sort(),expectedImages);
    for (const route of ['about','maid-services-ajman']) {
      const related = await readFile(`out/${locale}/${route}/index.html`,'utf8');
      assert.ok(related.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').includes(`href="/${locale}/gallery/"`),`${route}: visible gallery link`);
    }
  }
});
