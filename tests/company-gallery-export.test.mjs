import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { attrs, decode, text } from '../scripts/seo-content-audit.mjs';
import { pageImageUrls } from '../scripts/enrich-image-sitemap.mjs';

const origin = 'https://inayadomestic.ae';
const manifest = JSON.parse(await readFile('.github/retired-gallery-images-20261025.json', 'utf8'));
const stripScripts = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');

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
  assert.equal(urls.length, 274);
  assert.doesNotMatch(xml, /images\/company-gallery/);
  for (const url of urls) {
    const html = await readFile(path.join('out', new URL(url).pathname, 'index.html'), 'utf8');
    assert.doesNotMatch(html, /images\/company-gallery|images\\\/company-gallery/, url);
  }
});

test('both gallery URLs remain localized and useful with no old images, captions, category records or photo anchors', async () => {
  const xml = await readFile('out/sitemap.xml', 'utf8');
  for (const locale of ['en', 'ar']) {
    const url = `${origin}/${locale}/gallery/`;
    const html = await readFile(`out/${locale}/gallery/index.html`, 'utf8');
    const body = stripScripts(html);
    const main = body.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
    assert.ok(main);
    assert.equal([...body.matchAll(/<main\b/g)].length, 1);
    assert.equal([...body.matchAll(/<h1\b/g)].length, 1);
    assert.doesNotMatch(main, /<img\b|<picture\b|<figure\b|googleusercontent|maps\.google/i);
    assert.match(text(main), locale === 'en' ? /photo gallery is being updated/ : /يجري تحديث معرض الصور/);
    assert.doesNotMatch(html, /photo-(?:office|home-support|cooking|childcare|general|design)-[0-9]{3}|data-retired-photo-anchor|companyGalleryPhotos|companyGalleryGroups|galleryDestinations/);
    for (const route of ['contact', 'services', 'maid-services-ajman']) {
      assert.ok(main.includes(`href="/${locale}/${route}/"`), `${locale}: useful ${route} destination`);
      await readFile(`out/${locale}/${route}/index.html`);
    }
    assert.deepEqual(await pageImageUrls(html, url, 'out'), []);
    const entry = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].find(item => decode(item[1].match(/<loc>(.*?)<\/loc>/)[1]) === url);
    assert.ok(entry);
    assert.doesNotMatch(entry[1], /<image:loc>/);
    assert.match(entry[1], /<lastmod>2026-10-25<\/lastmod>/);
    const social = [...html.matchAll(/<meta\b[^>]*>/g)].map(match => attrs(match[0]));
    assert.ok(!social.some(meta => meta.property === 'og:image' || meta.name === 'twitter:image'));
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
