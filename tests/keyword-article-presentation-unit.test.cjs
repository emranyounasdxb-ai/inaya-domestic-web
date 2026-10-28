const assert = require('node:assert/strict');
const test = require('node:test');
const fixture = require('./fixtures/keyword-article-presentation-20261024.json');
const review = require('./fixtures/keyword-articles-reviewed-20261024.json');
const { withoutKeywordPresentation } = require('./keyword-article-presentation-expectations.cjs');
const blogOrder = require('./fixtures/blog-guide-order-20261028.json');

function presentationPages() {
  const pages = new Map();
  for (const placement of fixture.placements) {
    let route = placement.route;
    if (placement.kind === 'hub-summary') {
      const original = review.articles.find(article => article.id === placement.id);
      const position = blogOrder.slugs.indexOf(original.slug);
      assert.ok(position >= 0, `${original.slug}: independently preserved65-guide order`);
      const pageNumber = Math.floor(position / 12) + 1;
      route = pageNumber === 1 ? 'blog' : `blog/page/${pageNumber}`;
    }
    const key = `${placement.locale}:${route}`;
    if (!pages.has(key)) pages.set(key, { locale: placement.locale, route, paragraphs: [] });
    // Reuse the original reviewed paragraph verbatim; only its hub location is
    // redistributed according to the independently pinned pre-pagination order.
    pages.get(key).paragraphs.push(placement.paragraph);
  }
  for (const locale of ['en', 'ar']) for (let page = 1; page <= 6; page++) {
    const route = page === 1 ? 'blog' : `blog/page/${page}`;
    if (!pages.has(`${locale}:${route}`)) pages.set(`${locale}:${route}`, { locale, route, paragraphs: [] });
  }
  return [...pages.values()];
}

test('presentation classification is exactly 147 reviewed placements with original-source provenance', () => {
  assert.equal(fixture.placements.length, 147);
  assert.equal(fixture.expectedExcludedParagraphs, 147);
  assert.equal(fixture.expectedExcludedTokens, 2347);
  const keys = new Set();
  for (const placement of fixture.placements) {
    const original = review.articles.find(article => article.id === placement.id);
    assert.ok(original);
    assert.equal(placement.count, 1);
    assert.ok(['article-summary', 'hub-summary', 'diagram-provenance', 'shared-coordination-ui'].includes(placement.kind));
    assert.equal(placement.route, placement.kind === 'hub-summary' ? 'blog' : `blog/${original.slug}`);
    assert.ok(!keys.has(`${placement.locale}:${placement.route}:${placement.paragraph}`));
    keys.add(`${placement.locale}:${placement.route}:${placement.paragraph}`);
    if (placement.kind !== 'shared-coordination-ui') assert.equal(placement.sourceSha256, original[placement.locale].reviewedManuscriptSha256);
    else {
      assert.equal(placement.locale, 'en');
      assert.equal(placement.paragraph, 'confirm the scope availability and written terms with the inaya team');
    }
  }
  const classified = withoutKeywordPresentation(presentationPages());
  assert.equal(classified.excludedParagraphs, 147);
  assert.equal(classified.excludedTokens, 2347);
  assert.ok(classified.pages.every(page => page.paragraphs.length === 0));
});

test('classification never excludes unlisted substantive prose, another route, or an extra copy', () => {
  const pages = presentationPages();
  const uniqueProse = 'a substantive article paragraph stays inside the unchanged editorial repetition metric';
  pages[0].paragraphs.push(uniqueProse);
  pages.push({ locale: 'en', route: 'services/recruitment', paragraphs: [fixture.placements[0].paragraph] });
  const classified = withoutKeywordPresentation(pages);
  assert.ok(classified.pages[0].paragraphs.includes(uniqueProse));
  assert.deepEqual(classified.pages.at(-1).paragraphs, [fixture.placements[0].paragraph]);
  const duplicate = presentationPages();
  duplicate[0].paragraphs.push(duplicate[0].paragraphs[0]);
  assert.throws(() => withoutKeywordPresentation(duplicate), /exact reviewed presentation paragraph placement/);
  const missing = presentationPages();
  missing[0].paragraphs.shift();
  assert.throws(() => withoutKeywordPresentation(missing), /exact reviewed presentation paragraph placement/);
  const edited = presentationPages();
  edited[0].paragraphs[0] += ' changed';
  assert.throws(() => withoutKeywordPresentation(edited), /exact reviewed presentation paragraph placement/);
});
