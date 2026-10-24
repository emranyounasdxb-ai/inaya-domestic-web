import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import test from 'node:test';
import { attrs, decode } from '../scripts/seo-content-audit.mjs';
import { pageImageUrls } from '../scripts/enrich-image-sitemap.mjs';

const origin = 'https://inayadomestic.ae';
const xml = await readFile('out/sitemap.xml', 'utf8');
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];

test('every image sitemap entry matches visible content, with no lost canonical pages or responsive duplicates', async () => {
  assert.equal(entries.length, 274);
  assert.ok(xml.includes('xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'), 'image sitemap namespace');
  const unique = new Set();
  for (const entry of entries) {
    const pageUrl = decode(entry[1].match(/<loc>(.*?)<\/loc>/)[1]);
    const html = await readFile(path.join('out', new URL(pageUrl).pathname, 'index.html'), 'utf8');
    const advertised = [...entry[1].matchAll(/<image:loc>(.*?)<\/image:loc>/g)].map(m => decode(m[1]));
    assert.deepEqual(advertised, await pageImageUrls(html, pageUrl, 'out'), pageUrl);
    assert.equal(advertised.length, new Set(advertised).size, pageUrl);
    for (const image of advertised) {
      assert.match(image, /^https:\/\/inayadomestic\.ae\/images\//);
      assert.doesNotMatch(image, /optimized|draft|candidate-|profile|flagcdn/);
      unique.add(image);
      await access(path.join('out', new URL(image).pathname));
    }
  }
  // All service illustrations, article artwork and visible country portraits.
  assert.ok(unique.size >= 80, `substantive image coverage: ${unique.size}`);
});

test('primary image schema and social images match visible image files on both languages', async () => {
  let described = 0;
  for (const entry of entries) {
    const pageUrl = decode(entry[1].match(/<loc>(.*?)<\/loc>/)[1]);
    const html = await readFile(path.join('out', new URL(pageUrl).pathname, 'index.html'), 'utf8');
    const graph = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter(m => attrs(m[1]).type === 'application/ld+json').flatMap(m => JSON.parse(m[2])['@graph'] ?? []);
    const page = graph.find(n => n['@type'] === 'WebPage');
    const social = [...html.matchAll(/<meta\b[^>]*>/g)].map(m => attrs(m[0])).find(m => m.property === 'og:image');
    if (!social) { assert.equal(page?.primaryImageOfPage, undefined, pageUrl); continue; }
    const image = graph.find(n => n['@id'] === page.primaryImageOfPage?.['@id']);
    assert.equal(image?.['@type'], 'ImageObject', pageUrl);
    assert.equal(image.contentUrl, social.content, pageUrl);
    assert.ok(image.caption?.trim(), pageUrl);
    assert.equal(image.inLanguage, new URL(pageUrl).pathname.split('/')[1]);
    const visible = await pageImageUrls(html, pageUrl, 'out');
    assert.ok(visible.includes(image.contentUrl), `${pageUrl}: schema refers to visible image`);
    const metadata = await sharp(path.join('out', new URL(image.contentUrl).pathname)).metadata();
    assert.ok(metadata.width >= 600 && metadata.height >= 300, pageUrl);
    described++;
  }
  assert.equal(described, 202, 'the original 160 pictured pages plus 42 reviewed articles with the original Ajman office photo');
});

test('localized pages advertise usable standard favicons made from the approved icon', async () => {
  const ico = await readFile('out/favicon.ico');
  assert.equal(ico.readUInt16LE(0), 0);
  assert.equal(ico.readUInt16LE(2), 1);
  assert.equal(ico.readUInt16LE(4), 3);
  for (let i = 0; i < 3; i++) {
    const start = 6 + i * 16;
    const size = [16, 32, 48][i];
    assert.equal(ico[start], size); assert.equal(ico[start + 1], size);
    const length = ico.readUInt32LE(start + 8), offset = ico.readUInt32LE(start + 12);
    const frame = ico.subarray(offset, offset + length);
    assert.equal(frame.readUInt32LE(0), 40, 'legacy-compatible BITMAPINFOHEADER');
    assert.equal(frame.readInt32LE(4), size);
    assert.equal(frame.readInt32LE(8), size * 2);
    assert.equal(frame.readUInt16LE(12), 1);
    assert.equal(frame.readUInt16LE(14), 32);
    assert.equal(frame.readUInt32LE(16), 0, 'uncompressed DIB');
    const maskStride = Math.ceil(size / 32) * 4;
    assert.equal(length, 40 + size * size * 4 + maskStride * size);
    const expected = await sharp('app/icon.png').resize(size, size).ensureAlpha().raw().toBuffer();
    // Independently decode the bottom-up BGRA frame and its transparency mask.
    const decoded = Buffer.alloc(size * size * 4);
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
      const row = size - y - 1, src = 40 + (row * size + x) * 4, dst = (y * size + x) * 4;
      decoded[dst] = frame[src + 2]; decoded[dst + 1] = frame[src + 1];
      decoded[dst + 2] = frame[src]; decoded[dst + 3] = frame[src + 3];
      const masked = Boolean(frame[40 + size * size * 4 + row * maskStride + Math.floor(x / 8)] & (128 >> (x % 8)));
      assert.equal(masked, expected[dst + 3] === 0, `${size}px mask at ${x},${y}`);
    }
    assert.deepEqual(decoded, expected, `${size}px approved logo pixels preserved`);
  }
  for (const [name, size] of [['favicon-48x48.png', 48], ['apple-touch-icon.png', 180]]) {
    const metadata = await sharp(`out/${name}`).metadata();
    assert.equal(metadata.width, size); assert.equal(metadata.height, size);
  }
  for (const locale of ['en', 'ar']) {
    const html = await readFile(`out/${locale}/index.html`, 'utf8');
    const icons = [...html.matchAll(/<link\b[^>]*>/g)].map(m => attrs(m[0])).filter(a => /icon/.test(a.rel));
    assert.ok(icons.some(a => a.href === '/favicon.ico' && a.rel === 'icon'));
    assert.ok(icons.some(a => a.href === '/favicon-48x48.png' && a.sizes === '48x48'));
    assert.ok(icons.some(a => a.href === '/apple-touch-icon.png' && a.sizes === '180x180'));
    for (const icon of icons) await access(path.join('out', new URL(icon.href, origin).pathname));
  }
});
