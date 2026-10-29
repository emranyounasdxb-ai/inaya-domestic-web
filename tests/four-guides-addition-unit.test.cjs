const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const test = require('node:test');
const additions = require('./four-guides-addition-expectations.cjs');

function arraySource(file, marker) {
  const source = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  assert.equal(source.split(marker).length, 2, `${file}: exact reviewed data export`);
  return JSON.parse(source.split(marker)[1].trim().replace(/;$/, ''));
}

test('the original65 complete records, publication chronology, images and approved renderers remain exact', () => {
  assert.equal(additions.hash(readFileSync('tests/fixtures/four-guides-addition-20261029-before.json', 'utf8').replace(/\r\n/g, '\n')), 'dd5c5c63ec0eb747d0d7888c287c9ddcd0f6866c8e7b4846d701a32624887b9f', 'before evidence is an immutable09432 capture apart from checkout line endings');
  const baseSource = additions.beforeCatalogAddition('lib/domestic-worker-guides.ts', readFileSync('lib/domestic-worker-guides.ts', 'utf8'));
  const base = JSON.parse(baseSource.split('export const domesticWorkerGuides: DomesticWorkerGuide[] = ')[1]
    .split('\n  ...publishedArticleGuides')[0].trim().replace(/,$/, '') + '\n]');
  const published = arraySource('lib/published-article-content.ts', 'export const publishedArticles: PublishedArticleContent[] = ');
  const keyword = JSON.parse(readFileSync('content/keyword-articles-20261024.json', 'utf8'));
  additions.assertExistingRecords(base, 'base');
  additions.assertExistingRecords(published, 'published');
  additions.assertExistingRecords(keyword, 'keyword');
  additions.beforeImageAliases(readFileSync('lib/blog-images.ts', 'utf8'));
  for (const file of ['lib/published-articles.ts', 'lib/published-article-content.ts', 'lib/published-article-metadata.ts', 'lib/keyword-article-metadata.ts', 'content/keyword-articles-20261024.json', 'lib/blog-pagination.ts', 'content/site-image-gallery.json', 'lib/article-search-titles.ts', 'components/PublishedArticle.tsx', 'lib/customer-article-visuals.ts', 'lib/customer-article-faqs.ts']) {
    assert.equal(additions.hash(additions.beforeCatalogAddition(file, readFileSync(file, 'utf8').replace(/\r\n/g, '\n'))), additions.before.sourceSha256[file], `${file}: original cohort and its presentation are unchanged`);
  }
});

test('exactly four genuinely new bilingual articles and compact metadata match the reviewed final pins', () => {
  const approved = additions.reviewed();
  const articles = JSON.parse(readFileSync('content/new-articles-20261029.json', 'utf8'));
  assert.deepEqual(articles, approved.articles, 'all eight final manuscripts and every field match independent review');
  assert.deepEqual(articles.map(article => article.slug), additions.reviewedSlugs);
  assert.deepEqual(articles.map(article => article.id), ['A03', 'A07', 'A08', 'A14']);
  assert.equal(new Set(articles.map(article => article.slug)).size, 4);
  const oldSlugs = new Set(additions.before.guideRecordSha256.map(article => article.slug));
  for (const article of articles) {
    assert.ok(!oldSlugs.has(article.slug), `${article.slug}: no duplicate old topic URL`);
    assert.equal(article.published, additions.date);
    assert.equal(article.updated, additions.date);
    for (const locale of ['en', 'ar']) {
      assert.ok(article[locale].title.trim() && article[locale].description.trim() && article[locale].body.trim());
      assert.doesNotMatch(article[locale].body, /(?:^|\n)### |\{\{visual:|<script|<iframe|TODO|TBD/, `${article.slug}/${locale}: only supported finished article syntax`);
    }
  }
  for (const [file, expectedHash] of Object.entries(approved.sourceModuleSha256)) {
    assert.equal(additions.hash(require('./blog-refresh-expectations.cjs').historicalSource(file, readFileSync(file, 'utf8'))), expectedHash, `${file}: exact reviewed cohort integration`);
  }
  assert.deepEqual(additions.beforeImageAliases(readFileSync('lib/blog-images.ts', 'utf8')).aliases, { ...approved.imageAliases, 'inaya-office-staff-careers-ajman': 'domestic-worker-contracts-renewal' });
  const contentModule = readFileSync('lib/new-article-content.ts', 'utf8');
  assert.match(contentModule, /import ['"]server-only['"]/);
  assert.ok(contentModule.includes('new-articles-20261029.json'));
  for (const file of ['lib/new-article-metadata.ts', 'lib/new-article-guides.ts']) {
    assert.doesNotMatch(readFileSync(file, 'utf8'), /new-article-content|new-articles-20261029\.json|\.body\b/, `${file}: shared metadata never imports full manuscripts`);
  }
});

test('new-cohort contracts reject old-route movement, unauthorized additions, stale dates and mutations to original full copy', () => {
  const urls = [...additions.before.canonicalUrls, ...additions.newCanonicalUrls];
  additions.assertInventory(urls);
  const reordered = [...urls];
  [reordered[0], reordered[1]] = [reordered[1], reordered[0]];
  assert.throws(() => additions.assertInventory(reordered), /exact positions/);
  assert.throws(() => additions.assertInventory([...urls, urls[0]]));
  const dates = urls.map(url => ({ url, lastmod: additions.expectedLastmods[url] }));
  additions.assertLastmods(dates);
  assert.throws(() => additions.assertLastmods(dates.map((entry, index) => index === 0 ? { ...entry, lastmod: additions.date } : entry)), /only new articles/);
  const source = readFileSync('lib/domestic-worker-guides.ts', 'utf8');
  assert.throws(() => additions.beforeCatalogAddition('lib/domestic-worker-guides.ts', source + '\n// Unreviewed change\n'), /original65-guide source bytes/);
  const keyword = JSON.parse(readFileSync('content/keyword-articles-20261024.json', 'utf8'));
  keyword[0].en.body += '\n\nUnreviewed changed original.';
  assert.throws(() => additions.assertExistingRecords(keyword, 'keyword'), /every original field/);
});
