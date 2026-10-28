import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import test from 'node:test';
import onPage from './on-page-spec-expectations.cjs';
import { attrs, decode } from '../scripts/seo-content-audit.mjs';
import { pageImageUrls } from '../scripts/enrich-image-sitemap.mjs';

const origin = 'https://inayadomestic.ae';
const xml = await readFile('out/sitemap.xml', 'utf8');
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];

test('every image sitemap entry matches visible content, with no lost canonical pages or responsive duplicates', async () => {
  assert.equal(entries.length, onPage.canonicalCount);
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

test('the dedicated image sitemap covers every pictured canonical page and all111 current site photos', async () => {
  const dedicatedXml = await readFile('out/image-sitemap.xml', 'utf8');
  assert.match(dedicatedXml, /xmlns:image="http:\/\/www\.google\.com\/schemas\/sitemap-image\/1\.1"/);
  assert.doesNotMatch(dedicatedXml, /company-gallery|#photo-|urn:inaya:company-photo:/);
  const imageEntries = [...dedicatedXml.matchAll(/<url>([\s\S]*?)<\/url>/g)];
  const parsed = blocks => blocks.map(entry => ({
    page: decode(entry[1].match(/<loc>(.*?)<\/loc>/)[1]),
    images: [...entry[1].matchAll(/<image:loc>(.*?)<\/image:loc>/g)].map(match => decode(match[1])),
  }));
  const mainPicturedPages = parsed(entries).filter(entry => entry.images.length);
  const dedicatedPages = parsed(imageEntries);
  assert.deepEqual(dedicatedPages, mainPicturedPages, 'no pictured canonical page is omitted or invented');
  assert.equal(new Set(dedicatedPages.map(entry => entry.page)).size, dedicatedPages.length);
  const allImages = new Set();
  for (const entry of dedicatedPages) {
    assert.match(entry.page, /^https:\/\/inayadomestic\.ae\/(?:en|ar)\//);
    assert.equal(new Set(entry.images).size, entry.images.length, entry.page);
    for (const image of entry.images) {
      const url = new URL(image);
      assert.equal(url.origin, origin);
      assert.ok(url.pathname.startsWith('/images/'));
      assert.equal(url.search, '', 'discovery URLs keep the canonical image path without display versions');
      allImages.add(image);
      await access(path.join('out', url.pathname));
    }
  }
  const catalog = JSON.parse(await readFile('content/site-image-gallery.json', 'utf8'));
  assert.equal(allImages.size, 111);
  assert.deepEqual([...allImages].sort(), catalog.images.map(image => origin + image.src).sort());
  const robots = await readFile('out/robots.txt', 'utf8');
  assert.deepEqual([...robots.matchAll(/^Sitemap: (.+)$/gm)].map(match => match[1].trim()), [origin + '/sitemap.xml', origin + '/image-sitemap.xml']);
});

// Independent fingerprints from the 2026-10-25 live-page and approved-source
// audit before the country-page photo release. Keep existing assignments and bytes.
const fingerprint = rows => createHash('sha256').update(JSON.stringify(rows.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))).digest('hex');

// Independent route expectations: do not import the production image selector.
const countryPagePhotos = {
  'services/countries-we-source-from': '/images/about/about-hero-domestic-service.webp',
  'maid-source-countries/philippines-maid-uae': '/images/countries/maid-philippines.webp',
  'maid-source-countries/sri-lankan-maid-uae': '/images/countries/maid-sri-lanka.webp',
  'maid-source-countries/nepali-maid-uae': '/images/countries/maid-nepal.webp',
  'maid-source-countries/indian-maid-uae': '/images/countries/maid-india.webp',
  'maid-source-countries/indonesian-maid-uae': '/images/countries/maid-indonesia.webp',
  'maid-source-countries/kenyan-maid-uae': '/images/countries/maid-kenya-uganda.webp',
  'maid-source-countries/ugandan-maid-uae': '/images/countries/maid-kenya-uganda.webp',
  'maid-source-countries/bangladeshi-maid-uae': '/images/about/about-hero-domestic-service.webp',
  'maid-source-countries/ethiopian-maid-uae': '/images/about/about-hero-domestic-service.webp',
  'maid-source-countries/ghanaian-maid-uae': '/images/about/about-hero-domestic-service.webp',
  'maid-source-countries/sierra-leone-maid-uae': '/images/about/about-hero-domestic-service.webp',
  'maid-source-countries/myanmar-maid-uae': '/images/about/about-hero-domestic-service.webp',
};

test('all284 pages have localized previews while226 visible photos remain primary image schema', async () => {
  const catalog = JSON.parse(await readFile('content/site-image-gallery.json', 'utf8'));
  const approved = new Map(catalog.images.map(image => [origin + image.src, image]));
  const dimensions = new Map();
  const preservedMappings = [], preservedPageMetadata = [];
  const fallbackCounts = { blog: 0, countries: 0, locations: 0, information: 0 };
  const picturedCountryPages = [];
  let described = 0;
  for (const [entryIndex, entry] of entries.entries()) {
    const pageUrl = decode(entry[1].match(/<loc>(.*?)<\/loc>/)[1]);
    const pathname = new URL(pageUrl).pathname;
    const [, locale, ...segments] = pathname.split('/');
    const route = segments.filter(Boolean).join('/');
    const html = await readFile(path.join('out', pathname, 'index.html'), 'utf8');
    const metadata = [...html.matchAll(/<meta\b[^>]*>/gi)].map(match => attrs(match[0]));
    const links = [...html.matchAll(/<link\b[^>]*>/gi)].map(match => attrs(match[0]));
    const values = (key, value) => metadata.filter(meta => meta[key] === value).map(meta => meta.content);
    const ogImages = values('property', 'og:image'), ogAlt = values('property', 'og:image:alt');
    const twitterImages = values('name', 'twitter:image'), twitterAlt = values('name', 'twitter:image:alt');
    for (const [label, values] of [['Open Graph image', ogImages], ['Open Graph alt', ogAlt], ['Twitter image', twitterImages], ['Twitter alt', twitterAlt]]) {
      assert.equal(values.length, 1, `${pageUrl}: exactly one ${label}`);
      assert.ok(values[0]?.trim(), `${pageUrl}: nonempty ${label}`);
    }
    assert.deepEqual(twitterImages, ogImages, `${pageUrl}: matching preview photo`);
    assert.deepEqual(twitterAlt, ogAlt, `${pageUrl}: matching localized description`);
    assert.deepEqual(values('name', 'twitter:card'), ['summary_large_image'], pageUrl);
    assert.match(ogAlt[0], locale === 'ar' ? /[\u0600-\u06ff]/ : /[A-Za-z]/, `${pageUrl}: localized preview description`);
    if (locale === 'en') assert.doesNotMatch(ogAlt[0], /[\u0600-\u06ff]/, `${pageUrl}: English description stays English`);
    const source = approved.get(ogImages[0]);
    assert.ok(source, `${pageUrl}: preview uses a current approved canonical source without a cache query`);
    if (!dimensions.has(source.src)) dimensions.set(source.src, await sharp(path.join('out', source.src)).metadata());
    const size = dimensions.get(source.src);
    assert.ok(size.width >= 600 && size.height >= 300, `${pageUrl}: usable preview dimensions`);
    const robots = values('name', 'robots').join(', ');
    assert.match(robots, /max-image-preview:large/, `${pageUrl}: permits large image previews`);
    assert.doesNotMatch(robots, /(?:^|[,\s])(?:noindex|noimageindex)(?:[,\s]|$)/, pageUrl);
    const canonical = links.filter(link => link.rel === 'canonical').map(link => link.href);
    assert.deepEqual(canonical, [pageUrl], `${pageUrl}: stable self canonical`);
    const icons = links.filter(link => /icon/.test(link.rel));
    assert.ok(icons.some(icon => icon.href === '/favicon.ico' && icon.rel === 'icon'), pageUrl);
    assert.ok(icons.some(icon => icon.href === '/favicon-48x48.png' && icon.sizes === '48x48'), pageUrl);
    assert.ok(icons.some(icon => icon.href === '/apple-touch-icon.png' && icon.sizes === '180x180'), pageUrl);
    const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)[1]);
    const description = values('name', 'description')[0];
    const metadataChange = onPage.metadata[`${locale}/${route}`];
    if (metadataChange) assert.deepEqual({ title, description }, metadataChange.after, `${pageUrl}: exact reviewed Ajman/service summary`);
    // Normalize only the twenty independently reviewed metadata pairs to their
    // prior values. The original full274-row fingerprint still guards every
    // other title, description, canonical and favicon declaration.
    if (entryIndex < onPage.originalCanonicalCount) preservedPageMetadata.push([
      pageUrl, metadataChange?.before.title ?? title, metadataChange?.before.description ?? description, canonical,
      icons.map(icon => [icon.rel, icon.href, icon.type ?? null, icon.sizes ?? null]),
    ]);
    const graph = imageGraph(html);
    const page = graph.find(n => n['@type'] === 'WebPage');
    assert.ok(page, `${pageUrl}: page schema remains present`);
    const countryImagePath = countryPagePhotos[route];
    if (countryImagePath) assert.ok(page.primaryImageOfPage, `${pageUrl}: visible country photo has primary-image schema`);
    if (!page.primaryImageOfPage) {
      assert.ok(!graph.some(node => node['@id'] === `${pageUrl}#primaryimage`), `${pageUrl}: social fallback does not invent a primary photo`);
      let expected;
      if (route === 'blog' || onPage.archiveRoutes.includes(route)) {
        const main = visibleImageHtml(html).match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
        assert.ok(main, `${pageUrl}: visible blog content`);
        const firstGuideImage = imageTags(main).find(image => new URL(image.src, origin).pathname.startsWith('/images/blogs/'));
        assert.ok(firstGuideImage, `${pageUrl}: first displayed guide has a photo`);
        expected = approved.get(origin + new URL(firstGuideImage.src, origin).pathname);
        assert.equal(ogAlt[0], firstGuideImage.alt, `${pageUrl}: preview describes the latest displayed article`);
        fallbackCounts.blog++;
      } else if (/^maid-services-[^/]+$/.test(route)) {
        expected = approved.get(origin + '/images/services/housemaid.webp');
        fallbackCounts.locations++;
      } else {
        expected = approved.get(origin + '/images/about/about-team-leadership.webp');
        fallbackCounts.information++;
      }
      assert.ok(expected, `${pageUrl}: approved fallback is known`);
      assert.equal(ogImages[0], origin + expected.src, `${pageUrl}: relevant social-only preview`);
      assert.equal(ogAlt[0], expected.alt[locale], `${pageUrl}: approved localized fallback description`);
      continue;
    }
    const image = graph.find(n => n['@id'] === page.primaryImageOfPage['@id']);
    assert.equal(image?.['@type'], 'ImageObject', pageUrl);
    assert.equal(image.contentUrl, ogImages[0], pageUrl);
    assert.equal(image.caption, ogAlt[0], `${pageUrl}: primary caption matches the preview description`);
    assert.equal(image.inLanguage, locale);
    const visible = await pageImageUrls(html, pageUrl, 'out');
    assert.ok(visible.includes(image.contentUrl), `${pageUrl}: schema refers to visible image`);
    if (route === 'about') {
      assert.equal(image.contentUrl, origin + '/images/about/about-team-story.webp', `${pageUrl}: actual About story photo`);
      assert.equal(image.caption, source.alt[locale], `${pageUrl}: approved About photo description`);
    } else if (countryImagePath) {
      const expected = approved.get(origin + countryImagePath);
      assert.ok(expected, `${pageUrl}: country photo is in the approved catalog`);
      assert.equal(image.contentUrl, origin + countryImagePath, `${pageUrl}: correct country photo in primary/social metadata`);
      assert.equal(ogAlt[0], expected.alt[locale], `${pageUrl}: approved localized country photo description`);
      const main = visibleImageHtml(html).match(/<main\b[^>]*>([\s\S]*)<\/main>/i)?.[1];
      assert.ok(main, `${pageUrl}: visible main content`);
      const mainPhotos = imageTags(main).filter(photo => new URL(photo.src, origin).pathname === countryImagePath);
      assert.equal(mainPhotos.length, 1, `${pageUrl}: one matching country photo in main content`);
      assert.equal(mainPhotos[0].alt, expected.alt[locale], `${pageUrl}: visible photo uses its approved localized description`);
      const breadcrumb = main.indexOf('data-seo="breadcrumbs"');
      assert.ok(breadcrumb >= 0 && mainPhotos[0].index > breadcrumb, `${pageUrl}: country photo follows the protected hero and breadcrumbs`);
      const figure = [...main.matchAll(/<figure\b[^>]*>([\s\S]*?)<\/figure>/gi)]
        .find(match => imageTags(match[1]).some(photo => new URL(photo.src, origin).pathname === countryImagePath));
      assert.ok(figure, `${pageUrl}: country photo has a visible figure`);
      const caption = decode((figure[1].match(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/i)?.[1] ?? '').replace(/<[^>]*>/g, '')).trim();
      assert.ok(caption, `${pageUrl}: country photo has a nonempty visible caption`);
      assert.match(caption, locale === 'ar' ? /[\u0600-\u06ff]/ : /[A-Za-z]/, `${pageUrl}: visible caption is localized`);
      if (locale === 'en') assert.doesNotMatch(caption, /[\u0600-\u06ff]/, `${pageUrl}: English caption stays English`);
      const advertised = [...entry[1].matchAll(/<image:loc>(.*?)<\/image:loc>/g)].map(match => decode(match[1]));
      assert.equal(advertised.filter(url => url === origin + countryImagePath).length, 1, `${pageUrl}: sitemap discovers the same canonical country photo once`);
      assert.deepEqual([...entry[1].matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map(match => match[1]), ['2026-10-28'], `${pageUrl}: substantive country photo update has its exact modification date`);
      picturedCountryPages.push(pageUrl);
    } else {
      const altChange = onPage.roleImageAlts[`${locale}/${route}`];
      if (altChange) {
        assert.equal(image.contentUrl, origin + altChange.imagePath, `${pageUrl}: exact retained role photo`);
        assert.deepEqual(ogAlt, [altChange.after], `${pageUrl}: reviewed scene description`);
        assert.deepEqual(twitterAlt, [altChange.after], `${pageUrl}: reviewed sharing description`);
      }
      const preservedAlt = altChange ? [altChange.before] : ogAlt;
      const preservedTwitterAlt = altChange ? [altChange.before] : twitterAlt;
      preservedMappings.push([pageUrl, ogImages, preservedAlt, twitterImages, preservedTwitterAlt, [image.contentUrl]]);
    }
    described++;
  }
  assert.equal(described, 226, 'all26 country pages gain visible primary photos; all200 previous primary photos remain');
  assert.deepEqual(picturedCountryPages.sort(), Object.keys(countryPagePhotos).flatMap(route => ['en', 'ar'].map(locale => `${origin}/${locale}/${route}/`)).sort(), 'all26 expected country pages have matching visible, social, schema and sitemap photos');
  const substantivelyUpdated = [...onPage.onPageUpdatedRoutes, ...onPage.archiveRoutes]
    .flatMap(route => ['en', 'ar'].map(locale => `${origin}/${locale}/${route ? route + '/' : ''}`));
  assert.deepEqual(entries.filter(entry => entry[1].includes('<lastmod>2026-10-28</lastmod>')).map(entry => decode(entry[1].match(/<loc>(.*?)<\/loc>/)[1])).sort(), [...picturedCountryPages, ...substantivelyUpdated].sort(), 'only26 country photos,20 updated content pages and10 new archives have28October dates');
  assert.deepEqual(fallbackCounts, { blog: 12, countries: 0, locations: 14, information: 32 }, 'all58 text/index pages get social previews without false primary-image schema');
  assert.equal(preservedMappings.length, 198);
  assert.equal(fingerprint(preservedMappings), '13c657789b876e2365251033f1ac01f16cde1359d42d17bafbdb91477145445d', 'all198 prior photo assignments remain exact, with only the six reviewed descriptions normalized');
  assert.equal(preservedPageMetadata.length, 274);
  assert.equal(fingerprint(preservedPageMetadata), 'ff1d4ce117376ba175b0c13cca3557eca6a994177108dc249a0f936fa1ea36a6', 'all274 prior identities remain exact, with only the twenty reviewed metadata pairs normalized');
});

test('preview metadata changes preserve all111 approved original photos and all four deployed favicon files', async () => {
  const catalog = JSON.parse(await readFile('content/site-image-gallery.json', 'utf8'));
  assert.equal(catalog.images.length, 111);
  for (const folder of ['public', 'out']) {
    const photos = await Promise.all(catalog.images.map(async image => [image.src, imageSha256(await readFile(path.join(folder, image.src)))]));
    assert.equal(fingerprint(photos), '3647afad9d5239502e941dbd9e564b997f315fa3e9d701054724c52d70682dcc', `${folder}: all111 approved original photo bytes are unchanged`);
  }
  const icons = await Promise.all(['/apple-touch-icon.png', '/favicon-48x48.png', '/favicon.ico', '/icon.png'].map(async file => [file, imageSha256(await readFile(path.join('out', file)))]));
  assert.equal(fingerprint(icons), '356790abc5298eef968d053c11f107d662de6fba42d6f0354f03c7d65d3fa339', 'all four currently deployed favicon files remain unchanged');
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
  assert.equal(cards.length, 1, `${route}: one card across the six crawlable archive pages`);
  return cards[0];
}

async function allBlogArchiveHtml(locale) {
  const routes = ['blog', ...onPage.archiveRoutes];
  return (await Promise.all(routes.map(route => readFile(`out/${locale}/${route}/index.html`, 'utf8')))).join('\n');
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
    const indexHtml = await allBlogArchiveHtml(locale);
    // Every prior card is still checked once across all six crawlable pages.
    const topicCards = [...visibleImageHtml(indexHtml).matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/gi)]
      .filter(card => [...card[1].matchAll(/<a\b[^>]*>/gi)].some(link => new RegExp(`^/${locale}/blog/[^/?#]+/$`).test(attrs(link[0]).href ?? '')));
    assert.equal(topicCards.length, 65, `${locale}: all44 legacy and21 keyword cards remain discoverable across six pages`);
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
      const indexHtml = await allBlogArchiveHtml(locale);
      const cardImages = imageTags(blogCard(indexHtml, locale, entry.slug));
      assert.equal(cardImages.length, 1, `${route}: one original keyword card image`);
      assertExactRenderedImage(cardImages[0], entry, locale, entry.src, `${route} keyword card`);
    }
  }
});


const serviceApproval = JSON.parse(await readFile('content/research/2026-10-25/service-owner-approved-images.json', 'utf8'));
const pageApproval = JSON.parse(await readFile('content/research/2026-10-25/home-about-owner-approved-images.json', 'utf8'));
const retainedMobileHero = {
  src: '/images/home/inaya-home-hero-mobile.webp',
  webpSha256: 'afbe41a72b02e21259a3decfade48dbc1915d051210a97d40affc1c4482feb6b',
  cacheVersion: 'afbe41a72b02',
};
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
        const selected = [...serviceApproval.images, ...pageApproval.images, retainedMobileHero].find(image => image.src === original);
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
          assert.match(image.class, approved.slot === 'homeHero' ? /home-hero__photo/ : /object-contain/);
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

test('mobile/tablet art direction preserves the previously approved studio hero bytes', async () => {
  for (const root of ['public', 'out']) {
    const bytes = await readFile(path.join(root, retainedMobileHero.src));
    assert.equal(imageSha256(bytes), retainedMobileHero.webpSha256, `${root}: exact retained studio image`);
    const metadata = await sharp(bytes).metadata();
    assert.deepEqual([metadata.format, metadata.width, metadata.height], ['webp', 1536, 1024]);
  }
  const workflow = await readFile('.github/workflows/deploy-cpanel.yml', 'utf8');
  assert.ok(workflow.includes("approvedPageImages.add('images/home/inaya-home-hero-mobile.webp');"));
  for (const locale of ['en', 'ar']) {
    const html = visibleImageHtml(await readFile(`out/${locale}/index.html`, 'utf8'));
    const mobile = [...html.matchAll(/<source\b[^>]*>/g)].map(match => attrs(match[0])).find(source => source.media === '(max-width: 1279px)');
    assert.ok(mobile);
    assert.equal(mobile.width, '1536');
    assert.equal(mobile.height, '1024');
    assert.match(mobile.srcSet, /inaya-home-hero-mobile-768\.webp\?v=afbe41a72b02 768w/);
  }
});
