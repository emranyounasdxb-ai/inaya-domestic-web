import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import test from 'node:test';
import { attrs, decode, text } from '../scripts/seo-content-audit.mjs';
import { pageImageUrls } from '../scripts/enrich-image-sitemap.mjs';

const origin = 'https://inayadomestic.ae';
const manifest = JSON.parse(await readFile('.github/retired-gallery-images-20261025.json', 'utf8'));
const gallery = JSON.parse(await readFile('content/site-image-gallery.json', 'utf8'));
const stripScripts = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
const expectedCategoryCounts = { inaya: 7, domestic: 9, childcare: 4, cooking: 6, care: 3, support: 7, lifestyle: 4, countries: 6, guides: 65 };
const displayedSource = image => `${image.src}?v=${image.cacheVersion}`;
const relatedPath = (locale, route) => `/${locale}/${route ? `${route.replace(/^\/+|\/+$/g, '')}/` : ''}`;

async function filesIn(directory, prefix = '') {
  const files = [];
  for (const entry of await readdir(path.join(directory, prefix), { withFileTypes: true })) {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) files.push(...await filesIn(directory, relative));
    else files.push(relative);
  }
  return files;
}

test('all 358 retired image files are absent from public/export and every published page and sitemap drops their references', async () => {
  assert.equal(manifest.images.length, 358);
  for (const root of ['public', 'out']) {
    const files = await filesIn(root);
    assert.deepEqual(files.filter(relative => relative.startsWith('images/company-gallery/') || relative.startsWith('optimized/images/company-gallery/')), []);
  }
  const xml = await readFile('out/sitemap.xml', 'utf8');
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => decode(match[1]));
  assert.equal(urls.length, 284);
  assert.doesNotMatch(xml, /images\/company-gallery/);
  for (const url of urls) {
    const html = await readFile(path.join('out', new URL(url).pathname, 'index.html'), 'utf8');
    assert.doesNotMatch(html, /images\/company-gallery|images\\\/company-gallery/, url);
  }
});

test('the current-site catalog has 111 distinct existing images with bilingual descriptions and matching cache versions', async () => {
  assert.equal(gallery.images.length, 111);
  assert.deepEqual(gallery.categories.map(category => category.id).sort(), Object.keys(expectedCategoryCounts).sort());
  assert.equal(new Set(gallery.images.map(image => image.id)).size, 111);
  assert.equal(new Set(gallery.images.map(image => image.src)).size, 111);
  const hashes = new Set();
  const counts = Object.fromEntries(gallery.categories.map(category => [category.id, 0]));
  const retiredBasenames = new Set(manifest.images.map(image => path.posix.basename(image.path)));
  for (const image of gallery.images) {
    assert.match(image.id, /^site-image-[a-z0-9-]+$/);
    assert.match(image.src, /^\/images\/[a-z0-9/-]+\.webp$/);
    assert.doesNotMatch(image.src, /company-gallery|\/optimized\/|draft|candidate-|profile|flagcdn/);
    assert.ok(!retiredBasenames.has(path.posix.basename(image.src)), image.id);
    assert.ok(Object.hasOwn(counts, image.category), `${image.id}: known category`);
    counts[image.category]++;
    const bytes = await readFile(path.join('public', image.src));
    const hash = createHash('sha256').update(bytes).digest('hex');
    hashes.add(hash);
    assert.equal(image.cacheVersion, hash.slice(0, 12), `${image.id}: version follows current original bytes`);
    const metadata = await sharp(bytes).metadata();
    assert.deepEqual([metadata.format, metadata.width, metadata.height], ['webp', image.width, image.height], image.id);
    for (const locale of ['en', 'ar']) {
      assert.ok(image.title[locale]?.trim(), `${image.id}: ${locale} friendly title`);
      assert.ok(image.alt[locale]?.trim(), `${image.id}: ${locale} description`);
      assert.doesNotMatch(image.title[locale], /\.(?:webp|png|jpe?g)\b/i);
      if (locale === 'ar') assert.match(image.title[locale], /[\u0600-\u06ff]/);
      await readFile(path.join('out', relatedPath(locale, image.relatedRoute), 'index.html'));
    }
  }
  assert.equal(hashes.size, 111, 'identical image bytes are not repeated under alias paths');
  assert.deepEqual(counts, expectedCategoryCounts);
});

test('both current gallery pages render the complete localized catalog while retired images and records stay absent', async () => {
  const xml = await readFile('out/sitemap.xml', 'utf8');
  const imageXml = await readFile('out/image-sitemap.xml', 'utf8');
  const expectedImages = gallery.images.map(image => origin + image.src).sort();
  for (const locale of ['en', 'ar']) {
    const url = `${origin}/${locale}/gallery/`;
    const html = await readFile(`out/${locale}/gallery/index.html`, 'utf8');
    const body = stripScripts(html);
    const main = body.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
    assert.ok(main);
    assert.equal([...body.matchAll(/<main\b/g)].length, 1);
    assert.equal([...body.matchAll(/<h1\b/g)].length, 1);
    assert.doesNotMatch(main, /googleusercontent|maps\.google|photo gallery is being updated|يجري تحديث معرض الصور/i);
    assert.doesNotMatch(html, /photo-(?:office|home-support|cooking|childcare|general|design)-[0-9]{3}|data-retired-photo-anchor|companyGalleryPhotos|companyGalleryGroups|galleryDestinations/);
    const cards = [...main.matchAll(/<figure\b([^>]*)>([\s\S]*?)<\/figure>/g)]
      .map(match => ({ attributes: attrs(match[1]), contents: match[2] }));
    assert.equal(cards.length, 111, `${locale}: all photos are present in server HTML`);
    assert.equal([...main.matchAll(/<img\b/g)].length, 111, `${locale}: one image per canonical photo`);
    for (const image of gallery.images) {
      const selected = cards.filter(card => card.attributes['data-site-image-id'] === image.id);
      assert.equal(selected.length, 1, `${locale}/${image.id}: one card`);
      const card = selected[0];
      assert.equal(card.attributes.id, image.id);
      assert.equal(card.attributes['data-category'], image.category);
      const images = [...card.contents.matchAll(/<img\b[^>]*>/g)].map(match => attrs(match[0]));
      assert.equal(images.length, 1);
      assert.equal(images[0].src, displayedSource(image), `${locale}/${image.id}: exact canonical image and version`);
      assert.equal(images[0].alt, image.alt[locale], `${locale}/${image.id}: localized description`);
      assert.equal(images[0].width, String(image.width));
      assert.equal(images[0].height, String(image.height));
      assert.ok(text(card.contents).includes(image.title[locale]), `${locale}/${image.id}: friendly visible title`);
      const links = [...card.contents.matchAll(/<a\b[^>]*>/g)].map(match => attrs(match[0]));
      assert.ok(links.some(link => link.href === relatedPath(locale, image.relatedRoute)), `${locale}/${image.id}: relevant current page link`);
    }
    for (const category of gallery.categories) {
      assert.ok(text(main).includes(category.label[locale]), `${locale}: localized ${category.id} category`);
    }
    for (const route of ['contact', 'services', 'maid-services-ajman']) {
      assert.ok(main.includes(`href="/${locale}/${route}/"`), `${locale}: useful ${route} destination`);
      await readFile(`out/${locale}/${route}/index.html`);
    }
    assert.deepEqual(await pageImageUrls(html, url, 'out'), expectedImages);
    const entry = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].find(item => decode(item[1].match(/<loc>(.*?)<\/loc>/)[1]) === url);
    assert.ok(entry);
    const advertised = [...entry[1].matchAll(/<image:loc>(.*?)<\/image:loc>/g)].map(match => decode(match[1]));
    assert.deepEqual(advertised, expectedImages, `${locale}: complete unique canonical image sitemap`);
    const dedicatedEntry = [...imageXml.matchAll(/<url>([\s\S]*?)<\/url>/g)].find(item => decode(item[1].match(/<loc>(.*?)<\/loc>/)[1]) === url);
    assert.ok(dedicatedEntry, `${locale}: gallery is included in the dedicated image sitemap`);
    assert.deepEqual([...dedicatedEntry[1].matchAll(/<image:loc>(.*?)<\/image:loc>/g)].map(match => decode(match[1])), expectedImages);
    assert.match(entry[1], /<lastmod>2026-10-25<\/lastmod>/);
    const social = [...html.matchAll(/<meta\b[^>]*>/g)].map(match => attrs(match[0]));
    for (const [attribute, value] of [['property', 'og:image'], ['name', 'twitter:image']]) {
      assert.equal(social.find(meta => meta[attribute] === value)?.content, origin + '/images/home/inaya-home-hero-family.webp');
    }
  }
});

test('shared About and Ajman slots contain no retired media and preserve visible office/contact information', async () => {
  for (const locale of ['en', 'ar']) {
    for (const route of ['about', 'maid-services-ajman']) {
      const html = await readFile(`out/${locale}/${route}/index.html`, 'utf8');
      const body = stripScripts(html);
      assert.doesNotMatch(html, /company-gallery/);
      assert.match(text(body), locale === 'en' ? /Grand Mall/ : /جراند مول/);
      assert.ok(body.includes(`href="/${locale}/contact/"`));
      assert.ok(body.includes(`href="/${locale}/gallery/"`));
    }
  }
});

test('all four inactive Pinterest RSS URLs remain valid empty feeds with no retired photo records', async () => {
  for (const name of ['ajman-office', 'home-cooking', 'household-services', 'nanny-family-support']) {
    const source = await readFile(`public/pinterest-feeds/${name}.xml`, 'utf8');
    const exported = await readFile(`out/pinterest-feeds/${name}.xml`, 'utf8');
    assert.equal(exported, source);
    assert.match(source, /<rss\b[\s\S]*<channel>/);
    assert.match(source, /No image items are published/);
    assert.doesNotMatch(source, /<item>|<media:content|company-gallery|#photo-|urn:inaya:company-photo:/);
  }
});
