const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const before = require('./fixtures/four-guides-addition-20261029-before.json');
const blogOrder = require('./fixtures/blog-guide-order-20261028.json');

const date = '2026-10-29';
const originalCanonicalCount = 284;
const canonicalCount = 292;
const newSlugs = [
  'uae-domestic-worker-rights-employer-duties',
  'domestic-worker-centre-reviews-checklist',
  'domestic-workers-meaning-roles-uae',
  'choosing-domestic-worker-centre-across-emirates'
];
const origin = 'https://inayadomestic.ae';
const newCanonicalUrls = newSlugs.flatMap(slug => ['en', 'ar'].map(locale => `${origin}/${locale}/blog/${slug}/`));
const blogOrderSlugs = [...newSlugs, ...blogOrder.slugs];
const indexRoutes = ['blog', ...[2, 3, 4, 5, 6].map(page => `blog/page/${page}`)];
const indexUrls = indexRoutes.flatMap(route => ['en', 'ar'].map(locale => `${origin}/${locale}/${route}/`));
const expectedLastmods = { ...before.lastmods, ...Object.fromEntries([...indexUrls, ...newCanonicalUrls].map(url => [url, date])) };
const stable = value => Array.isArray(value) ? value.map(stable) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])])) : value;
const hash = value => createHash('sha256').update(value).digest('hex');
const fingerprint = value => hash(JSON.stringify(stable(value)));
assert.equal(before.baselineCommit.slice(0, 7), '09432ac');
assert.deepEqual(before.newSlugs, newSlugs, 'only the four separately authorized new topics');
assert.deepEqual(before.originalBlogOrder, blogOrder.slugs, 'the65-guide order fixture remains immutable');
assert.equal(before.canonicalUrls.length, originalCanonicalCount);

function assertInventory(urls) {
  assert.equal(urls.length, canonicalCount);
  assert.equal(new Set(urls).size, canonicalCount);
  assert.deepEqual(urls.slice(0, originalCanonicalCount), before.canonicalUrls, 'all284 prior canonical URLs retain their exact positions');
  assert.deepEqual(urls.slice(originalCanonicalCount), newCanonicalUrls, 'only the exact eight new bilingual article URLs append after the existing archives');
}

function assertLastmods(entries) {
  assertInventory(entries.map(entry => entry.url));
  for (const entry of entries) assert.equal(entry.lastmod ?? null, expectedLastmods[entry.url], `${entry.url}: only new articles and changed index memberships get29October dates`);
  assert.equal(entries.filter(entry => entry.lastmod).length, 256);
  assert.equal(entries.filter(entry => entry.lastmod === date).length, 30);
  assert.equal(entries.filter(entry => entry.lastmod === '2026-10-28').length, 44);
}

// This exact inverse is required before the older five-guide provenance chain.
// Nothing else in the original65-guide module is a permitted source change.
function beforeCatalogAddition(file, source) {
  if (!['lib/domestic-worker-guides.ts', 'lib/article-search-titles.ts'].includes(file)) return source;
  source = source.replace(/\r\n/g, '\n');
  if (file === 'lib/article-search-titles.ts') {
    const addedImport = "import { newArticleMetadata } from './new-article-metadata';\n";
    const addedSpread = '  ...Object.fromEntries(newArticleMetadata.map(article => [article.slug, { en: article.en.searchTitle, ar: article.ar.searchTitle }])),\n';
    assert.equal(source.split(addedImport).length, 2, 'exactly one new compact search-title import');
    assert.equal(source.split(addedSpread).length, 2, 'exactly one new search-title addition');
    const restored = source.replace(addedImport, '').replace(addedSpread, '');
    assert.equal(hash(restored), before.sourceSha256[file], `${file}: every original search-title source byte remains unchanged`);
    return restored;
  }
  const addedImport = "import { newArticleGuides } from './new-article-guides';\n";
  const addedSpread = '  ...keywordArticleGuides,\n  ...newArticleGuides';
  assert.equal(source.split(addedImport).length, 2, 'exactly one new compact catalog import');
  assert.equal(source.split(addedSpread).length, 2, 'exactly one new compact catalog append');
  const restored = source.replace(addedImport, '').replace(addedSpread, '  ...keywordArticleGuides');
  assert.equal(hash(restored), before.sourceSha256[file], `${file}: all original65-guide source bytes remain unchanged`);
  return restored;
}

function assertExistingRecords(records, family) {
  const expected = before.guideRecordSha256.filter(row => row.family === family);
  assert.equal(records.length, expected.length, `${family}: complete original cohort size`);
  for (const [index, record] of records.entries()) {
    assert.equal(record.slug, expected[index].slug, `${family}: original record order`);
    assert.equal(fingerprint(record), expected[index].sha256, `${record.slug}: every original field and full bilingual manuscript remains immutable`);
  }
}

function beforeImageAliases(source) {
  source = source.replace(/\r\n/g, '\n');
  const boundary = '\n// These new guides reuse relevant owner-approved illustrations with their exact\n';
  assert.equal(source.split(boundary).length, 2, 'one exact new image-alias boundary');
  const end = source.indexOf('\nexport function getBlogImage', source.indexOf(boundary));
  assert.ok(end > 0, 'new aliases are separate from the immutable original image definitions');
  const aliasBlock = source.slice(source.indexOf(boundary), end);
  const pairs = [...aliasBlock.matchAll(/'([^']+)': '([^']+)'/g)].map(match => [match[1], match[2]]);
  assert.deepEqual(pairs.map(([slug]) => slug), newSlugs, 'only four new image aliases are permitted');
  const revisedLookup = '  const imageSlug = newArticleImageAliases[slug] ?? slug;\n  return keywordArticleImages[imageSlug] ?? blogImages[imageSlug];';
  assert.equal(source.split(revisedLookup).length, 2, 'one exact new alias lookup');
  const restored = source.replace(aliasBlock, '').replace(revisedLookup, '  return keywordArticleImages[slug] ?? blogImages[slug];');
  assert.equal(hash(restored), before.sourceSha256['lib/blog-images.ts'], 'all original image source definitions, localized descriptions and lookup behavior remain exact');
  return { restored, aliases: Object.fromEntries(pairs) };
}

function reviewed() {
  const after = require('./fixtures/four-guides-addition-20261029-after.json');
  assert.equal(after.baselineCommit, before.baselineCommit);
  assert.equal(after.date, date);
  assert.deepEqual(after.articles.map(article => article.slug), newSlugs);
  return after;
}

module.exports = { before, date, originalCanonicalCount, canonicalCount, newSlugs, newCanonicalUrls,
  blogOrderSlugs, indexRoutes, indexUrls, expectedLastmods, stable, hash, fingerprint,
  assertInventory, assertLastmods, beforeCatalogAddition, beforeImageAliases, assertExistingRecords, reviewed };
