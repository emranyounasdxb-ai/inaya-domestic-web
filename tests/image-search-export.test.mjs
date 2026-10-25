import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
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
  assert.equal(described, 196, 'the gallery, About and Ajman routes no longer advertise retired gallery primary images; the other 196 pictured pages retain matching primary images');
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

// This release input records the actual owner-approved bytes and localized
// descriptions independently of the production image lookup/rendering code.
let remainingImageApproval;
const remainingApproval = () => remainingImageApproval ??= readFile('content/research/2026-10-24/remaining-blog-owner-approved-images.json', 'utf8').then(JSON.parse);
const imageSha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const visibleImageHtml = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
const imageTags = html => [...visibleImageHtml(html).matchAll(/<img\b[^>]*>/gi)].map(match => ({ ...attrs(match[0]), index: match.index }));
const imageGraph = html => [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
  .filter(match => attrs(match[1]).type === 'application/ld+json')
  .flatMap(match => { const data = JSON.parse(match[2]); return data['@graph'] ?? [data]; });

function assertExactRenderedImage(image, entry, locale, renderedSrc, label) {
  assert.ok(image, `${label}: image is present`);
  assert.equal(image.src, renderedSrc, `${label}: exact approved image and cache version`);
  assert.equal(image.alt, entry.alt[locale], `${label}: exact ${locale} description`);
  assert.equal(Number(image.width), entry.width, `${label}: intrinsic width`);
  assert.equal(Number(image.height), entry.height, `${label}: intrinsic height`);
}

function assertCanonicalImageMetadata(html, entry, locale, route) {
  const label = `${locale}/${entry.slug}`;
  const canonicalImage = origin + entry.src;
  const metadata = [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => attrs(match[0]));
  for (const [key, value] of [['property', 'og:image'], ['name', 'twitter:image']]) {
    assert.equal(metadata.find(meta => meta[key] === value)?.content, canonicalImage, `${label}: ${value} preserves the canonical image path`);
  }
  assert.equal(metadata.find(meta => meta.property === 'og:image:alt')?.content, entry.alt[locale], `${label}: localized Open Graph image description`);
  assert.equal(metadata.find(meta => meta.name === 'twitter:image:alt')?.content, entry.alt[locale], `${label}: localized Twitter image description`);
  const canonical = [...html.matchAll(/<link\b[^>]*>/gi)].map(match => attrs(match[0])).find(link => link.rel === 'canonical');
  assert.equal(canonical?.href, origin + route, `${label}: page canonical remains unchanged`);
  const graph = imageGraph(html);
  const page = graph.find(node => node['@type'] === 'WebPage');
  const primary = graph.find(node => node['@id'] === page?.primaryImageOfPage?.['@id']);
  assert.equal(primary?.['@type'], 'ImageObject', `${label}: primary image entity`);
  assert.equal(primary.contentUrl, canonicalImage, `${label}: primary image keeps an unversioned canonical URL`);
  assert.equal(primary.caption, entry.alt[locale], `${label}: primary image caption matches visible locale`);
  assert.equal(primary.inLanguage, locale, `${label}: primary image language`);
  assert.equal(graph.find(node => node['@type'] === 'Article')?.image, canonicalImage, `${label}: article image is canonical`);
}

function blogCard(indexHtml, locale, slug) {
  const route = `/${locale}/blog/${slug}/`;
  const cards = [...visibleImageHtml(indexHtml).matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/gi)]
    .map(match => match[1]).filter(card => [...card.matchAll(/<a\b[^>]*>/gi)].some(match => attrs(match[0]).href === route));
  assert.equal(cards.length, 1, `${route}: one index card in the unpaginated blog index`);
  return cards[0];
}

test('all 44 approved legacy blog assets preserve their paths and contain the reviewed 1600×900 WebP bytes', async () => {
  const approved = await remainingApproval();
  assert.equal(approved.date, '2026-10-24');
  assert.equal(approved.ownerApproved, true, 'publication has actual owner approval');
  assert.equal(approved.images.length, 44);
  assert.deepEqual(approved.images.map(image => image.id).sort(), Array.from({ length: 44 }, (_, index) => `R${String(index + 1).padStart(2, '0')}`));
  for (const field of ['slug', 'src', 'sha256']) assert.equal(new Set(approved.images.map(image => image[field])).size, 44, `44 distinct approved ${field} values`);
  for (const image of approved.images) {
    assert.match(image.src, /^\/images\/blogs\/(?!keyword-21-20261024\/)[^/?#]+\.webp$/, `${image.id}: preserved legacy asset path`);
    assert.match(image.sha256, /^[a-f0-9]{64}$/, image.id);
    assert.equal(image.cacheVersion, image.sha256.slice(0, 12), `${image.id}: browser cache version comes from the approved WebP bytes`);
    assert.equal(image.width, 1600); assert.equal(image.height, 900);
    assert.ok(image.alt.en?.trim() && image.alt.ar?.trim(), `${image.id}: both descriptions exist`);
    assert.doesNotMatch(image.alt.en, /[\u0600-\u06ff]/, `${image.id}: English image description`);
    assert.match(image.alt.ar, /[\u0600-\u06ff]/, `${image.id}: Arabic image description`);
    for (const folder of ['public', 'out']) {
      const bytes = await readFile(path.join(folder, image.src));
      assert.equal(imageSha256(bytes), image.sha256, `${image.id}: ${folder} contains approved bytes`);
      const metadata = await sharp(bytes).metadata();
      assert.deepEqual([metadata.format, metadata.width, metadata.height], ['webp', 1600, 900], `${image.id}: ${folder} image dimensions`);
    }
  }
});

test('all 88 refreshed article heroes and all 88 index cards use the matching versioned image and localized description', async () => {
  const approved = await remainingApproval();
  let heroes = 0, cards = 0;
  for (const locale of ['en', 'ar']) {
    const indexHtml = await readFile(`out/${locale}/blog/index.html`, 'utf8');
    // app/[locale]/blog/page.tsx renders every guide directly; there is no pagination.
    const topicCards = [...visibleImageHtml(indexHtml).matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/gi)]
      .filter(card => [...card[1].matchAll(/<a\b[^>]*>/gi)].some(link => new RegExp(`^/${locale}/blog/[^/?#]+/$`).test(attrs(link[0]).href ?? '')));
    assert.equal(topicCards.length, 65, `${locale}: all 44 legacy and 21 keyword cards remain visible`);
    for (const entry of approved.images) {
      const route = `/${locale}/blog/${entry.slug}/`;
      const html = await readFile(path.join('out', route, 'index.html'), 'utf8');
      const expectedSrc = `${entry.src}?v=${entry.cacheVersion}`;
      const matches = imageTags(html).filter(image => new URL(image.src, origin).pathname === entry.src);
      assert.equal(matches.length, 1, `${route}: one matching hero image`);
      assertExactRenderedImage(matches[0], entry, locale, expectedSrc, `${route} hero`);
      const visible = visibleImageHtml(html);
      const breadcrumb = visible.indexOf('data-seo="breadcrumbs"');
      assert.ok(breadcrumb >= 0 && matches[0].index < breadcrumb, `${route}: approved image is in the hero before breadcrumbs`);
      assertCanonicalImageMetadata(html, entry, locale, route);
      const sitemapEntry = entries.filter(item => decode(item[1].match(/<loc>(.*?)<\/loc>/)?.[1] ?? '') === origin + route);
      assert.equal(sitemapEntry.length, 1, `${route}: exact canonical sitemap entry`);
      const sitemapImages = [...sitemapEntry[0][1].matchAll(/<image:loc>(.*?)<\/image:loc>/g)].map(match => decode(match[1]));
      assert.equal(sitemapImages.filter(url => url === origin + entry.src).length, 1, `${route}: sitemap retains the unversioned image URL`);
      assert.ok(sitemapImages.every(url => !new URL(url).search), `${route}: no cache query leaks into the image sitemap`);
      const cardImages = imageTags(blogCard(indexHtml, locale, entry.slug));
      assert.equal(cardImages.length, 1, `${route}: one card image`);
      assertExactRenderedImage(cardImages[0], entry, locale, expectedSrc, `${route} index card`);
      heroes++; cards++;
    }
  }
  assert.equal(heroes, 88); assert.equal(cards, 88);
});

test('the 21 previously approved keyword images retain their original bytes and remain unversioned in both languages', async () => {
  const legacy = await remainingApproval();
  const keyword = JSON.parse(await readFile('content/research/2026-10-24/keyword-21-owner-approved-images.json', 'utf8'));
  assert.equal(keyword.ownerApprovedWebsitePublication, true);
  assert.equal(keyword.images.length, 21);
  const legacyPaths = new Set(legacy.images.map(image => image.src));
  const legacySlugs = new Set(legacy.images.map(image => image.slug));
  for (const entry of keyword.images) {
    assert.ok(!legacyPaths.has(entry.src) && !legacySlugs.has(entry.slug), `${entry.id}: excluded from the 44-image refresh`);
    for (const folder of ['public', 'out']) {
      const bytes = await readFile(path.join(folder, entry.src));
      assert.equal(imageSha256(bytes), entry.webpSha256, `${entry.id}: original ${folder} bytes preserved`);
    }
    for (const locale of ['en', 'ar']) {
      const route = `/${locale}/blog/${entry.slug}/`;
      const html = await readFile(path.join('out', route, 'index.html'), 'utf8');
      const matches = imageTags(html).filter(image => new URL(image.src, origin).pathname === entry.src);
      assert.equal(matches.length, 1, `${route}: one original keyword hero`);
      assertExactRenderedImage(matches[0], entry, locale, entry.src, `${route} keyword hero`);
      const indexHtml = await readFile(`out/${locale}/blog/index.html`, 'utf8');
      const cardImages = imageTags(blogCard(indexHtml, locale, entry.slug));
      assert.equal(cardImages.length, 1, `${route}: one original keyword card image`);
      assertExactRenderedImage(cardImages[0], entry, locale, entry.src, `${route} keyword card`);
    }
  }
});


const serviceApproval = JSON.parse(await readFile('content/research/2026-10-25/service-owner-approved-images.json', 'utf8'));
const pageApproval = JSON.parse(await readFile('content/research/2026-10-25/home-about-owner-approved-images.json', 'utf8'));
const serviceSlug = image => image.id === 'S28' ? 'countries-we-source-from' : path.basename(image.src, '.webp');
const renderedServiceSrc = image => `${image.src}?v=${image.cacheVersion}`;

test('the exact 33 owner-approved V2 service files retain their original paths and bytes', async () => {
  assert.equal(serviceApproval.ownerApprovedWebsitePublication, true);
  assert.equal(serviceApproval.images.length, 33);
  assert.equal(new Set(serviceApproval.images.map(image => image.src)).size, 33);
  assert.equal(new Set(serviceApproval.images.map(image => image.webpSha256)).size, 33);
  for (const image of serviceApproval.images) {
    assert.match(image.id, /^S(?:0[1-9]|[12][0-9]|3[0-3])$/);
    assert.match(image.src, /^\/images\/(?:services|about|home)\/[a-z-]+\.webp$/);
    assert.equal(image.cacheVersion, image.webpSha256.slice(0, 12));
    assert.notEqual(image.webpSha256, image.previousSha256);
    for (const root of ['public', 'out']) {
      const bytes = await readFile(path.join(root, image.src));
      assert.equal(imageSha256(bytes), image.webpSha256, `${root}${image.src}: approved bytes`);
      const metadata = await sharp(bytes).metadata();
      assert.equal(metadata.format, 'webp');
      assert.equal(metadata.width, image.width);
      assert.equal(metadata.height, image.height);
    }
  }
});

test('both languages map all32 service cards and31 existing detail heroes to their approved images', async () => {
  for (const locale of ['en', 'ar']) {
    const hub = visibleImageHtml(await readFile(`out/${locale}/services/index.html`, 'utf8'));
    const banner = serviceApproval.images.find(image => image.id === 'S33');
    assert.equal(imageTags(hub).filter(image => image.src === renderedServiceSrc(banner)).length, 1);
    for (const image of serviceApproval.images.filter(image => image.id !== 'S33')) {
      const slug = serviceSlug(image);
      const link = [...hub.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)]
        .find(match => attrs(match[1]).href === `/${locale}/services/${slug}/` && /<img\b/.test(match[2]));
      assert.ok(link, `${locale}/${slug}: service image card`);
      const cardImage = imageTags(link[2])[0];
      assert.equal(cardImage.src, renderedServiceSrc(image), `${locale}/${slug}: exact card mapping`);
      assert.ok(cardImage.alt.trim());
      const detail = await readFile(`out/${locale}/services/${slug}/index.html`, 'utf8');
      // The countries route intentionally remains its existing flag directory;
      // its approved household illustration belongs to the services-hub card.
      if (image.id === 'S28') continue;
      const hero = imageTags(detail).find(candidate => candidate.fetchPriority === 'high' && candidate.src === renderedServiceSrc(image));
      assert.ok(hero, `${locale}/${slug}: correct eager detail hero`);
      const social = [...detail.matchAll(/<meta\b[^>]*>/g)].map(match => attrs(match[0])).find(meta => meta.property === 'og:image');
      assert.equal(social.content, origin + image.src, `${locale}/${slug}: stable canonical image`);
      for (const candidate of imageTags(detail)) {
        const selected = serviceApproval.images.find(item => new URL(candidate.src, origin).pathname === item.src);
        if (selected) assert.equal(candidate.src, renderedServiceSrc(selected), `${locale}/${slug}: versioned related image`);
      }
    }
    // S33 remains the Services banner; Home/About now have their own approved
    // portraits so the same household scene is not repeated across these pages.
    const home = await readFile(`out/${locale}/index.html`, 'utf8');
    for (const source of [...home.matchAll(/<source\b[^>]*>/g)].map(match => attrs(match[0]))) {
      for (const entry of (source.srcSet ?? source.srcset ?? '').split(',').filter(Boolean)) {
        const url = new URL(entry.trim().split(/\s+/)[0], origin);
        const original = url.pathname.replace(/^\/optimized/, '').replace(/-\d+\.webp$/, '.webp');
        const selected = [...serviceApproval.images, ...pageApproval.images].find(image => image.src === original);
        if (selected) assert.equal(url.searchParams.get('v'), selected.cacheVersion, `${locale}: responsive cache version`);
        else assert.equal(url.searchParams.has('v'), false, `${locale}: unrelated source preserved`);
      }
    }
  }
});

test('deployment keeps supported provenance metadata for approved service originals and responsive variants', async () => {
  const workflow = await readFile('.github/workflows/deploy-cpanel.yml', 'utf8');
  assert.match(workflow, /if \(approvedServiceImages\.has\(webPath\) \|\| approvedPageImages\.has\(webPath\)\) variant = variant\.keepMetadata\(\)/);
  assert.match(workflow, /if \(approvedServiceImages\.has\(webPath\) \|\| approvedPageImages\.has\(webPath\)\) image = image\.keepMetadata\(\)/);
  for (const image of serviceApproval.images) {
    const bytes = await readFile(path.join('public', image.src));
    const before = await sharp(bytes).metadata();
    const after = await sharp(await sharp(bytes).resize({ width: 480 }).webp({ quality: 70, effort: 6 }).keepMetadata().toBuffer()).metadata();
    if (before.xmp) assert.deepEqual(after.xmp, before.xmp, `${image.id}: retained XMP, without claiming original signatures remain valid`);
  }
});

test('six owner-supplied portraits retain full-frame dimensions, exact approved bytes and unique Home/About slots', async () => {
  assert.equal(pageApproval.ownerApprovedWebsitePublication, true);
  assert.equal(pageApproval.images.length, 6);
  assert.equal(new Set(pageApproval.images.map(image => image.src)).size, 6);
  assert.equal(new Set(pageApproval.images.map(image => image.sourceSha256)).size, 6);
  for (const image of pageApproval.images) {
    assert.equal(image.cacheVersion, image.webpSha256.slice(0, 12));
    assert.deepEqual([image.width, image.height], [image.sourceWidth, image.sourceHeight]);
    for (const root of ['public', 'out']) {
      const bytes = await readFile(path.join(root, image.src));
      assert.equal(imageSha256(bytes), image.webpSha256, `${root}${image.src}: approved conversion`);
      const metadata = await sharp(bytes).metadata();
      assert.deepEqual([metadata.format, metadata.width, metadata.height], ['webp', image.width, image.height]);
    }
  }
  const homeServiceSources = ['nanny', 'home-cooking', 'bespoke-household-management', 'executive-nannies', 'private-chefs', 'house-managers'].map(slug => `/images/services/${slug}.webp`);
  const allApproved = [...serviceApproval.images, ...pageApproval.images];
  for (const locale of ['en', 'ar']) {
    const acrossPages = [];
    for (const route of ['', 'about/']) {
      const html = visibleImageHtml(await readFile(`out/${locale}/${route}index.html`, 'utf8'));
      const expected = route ? pageApproval.images.filter(image => image.slot.startsWith('about')).map(image => image.src) : [...pageApproval.images.filter(image => image.slot.startsWith('home')).map(image => image.src), ...homeServiceSources];
      const selected = imageTags(html).filter(image => allApproved.some(item => item.src === new URL(image.src, origin).pathname));
      assert.deepEqual(selected.map(image => new URL(image.src, origin).pathname).sort(), expected.sort(), `${locale}/${route}: unique exact slot mapping`);
      acrossPages.push(...selected.map(image => new URL(image.src, origin).pathname));
      for (const image of selected) {
        const url = new URL(image.src, origin), approved = allApproved.find(item => item.src === url.pathname);
        assert.equal(url.searchParams.get('v'), approved.cacheVersion);
        assert.ok(image.alt.trim());
        if (pageApproval.images.includes(approved)) {
          assert.match(image.class, /object-contain/);
          assert.equal(image.alt, approved.alt[locale]);
          assert.equal(image.width, String(approved.width));
          assert.equal(image.height, String(approved.height));
        }
      }
      for (const source of [...html.matchAll(/<source\b[^>]*>/g)].map(match => attrs(match[0]))) {
        for (const entry of (source.srcSet ?? source.srcset ?? '').split(',').filter(Boolean)) {
          const url = new URL(entry.trim().split(/\s+/)[0], origin);
          const original = url.pathname.replace(/^\/optimized/, '').replace(/-\d+\.webp$/, '.webp');
          const approved = allApproved.find(image => image.src === original);
          if (approved) assert.equal(url.searchParams.get('v'), approved.cacheVersion, `${locale}/${route}: derivative version`);
        }
      }
    }
    assert.equal(acrossPages.length, 12);
    assert.equal(new Set(acrossPages).size, 12, `${locale}: no portrait/action repeated across Home/About`);
  }
});
