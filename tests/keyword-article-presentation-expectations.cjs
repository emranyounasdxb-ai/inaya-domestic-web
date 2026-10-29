const assert = require('node:assert/strict');
const fixture = require('./fixtures/keyword-article-presentation-20261024.json');
const blogOrder = require('./fixtures/blog-guide-order-20261028.json');
const { archiveRoutes } = require('./on-page-spec-expectations.cjs');
const { getAmendment } = require('./five-guides-amendment-expectations.cjs');
const { blogOrderSlugs } = require('./four-guides-addition-expectations.cjs');
const normalizeParagraph = value => value.toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu).join(' ');

function reviewedPresentationPlacement(original) {
  if (original.id !== 'K02' || !['article-summary', 'hub-summary'].includes(original.kind)) return original;
  const amendment = getAmendment('tadbeer-center-ajman-first-visit-service-routing');
  assert.equal(original.paragraph, normalizeParagraph(amendment.before.record[original.locale].description),
    'only the exact original K02 description placements may change');
  return { ...original, paragraph: normalizeParagraph(amendment.after.record[original.locale].description) };
}

// Only exact, counted presentation placements are classified separately from
// editorial prose. Every complete manuscript is independently hash-checked by
// keyword-articles-export; no generic phrase or entire article is excluded.
function withoutKeywordPresentation(pages) {
  const allowed = new Map();
  for (const original of fixture.placements) {
    let placement = reviewedPresentationPlacement(original);
    if (original.kind === 'hub-summary') {
      assert.equal(original.route, 'blog', 'the reviewed fixture retains its original root-hub placement');
      assert.match(original.id, /^K(?:0[1-9]|1[0-9]|2[01])$/, 'one of the original21 keyword guides');
      const originalPosition = Number(original.id.slice(1)) - 1;
      assert.ok(blogOrder.slugs[originalPosition], `${original.id}: independently pinned original guide order`);
      const position = blogOrderSlugs.indexOf(blogOrder.slugs[originalPosition]);
      assert.ok(position >= 4, `${original.id}: exact original position after four new guides`);
      const pageNumber = Math.floor(position / 12) + 1;
      const route = pageNumber === 1 ? 'blog' : `blog/page/${pageNumber}`;
      placement = { ...placement, route };
      const allArchiveCopies = pages.filter(page => page.locale === original.locale && ['blog', ...archiveRoutes].includes(page.route))
        .reduce((total, page) => total + page.paragraphs.filter(paragraph => paragraph === placement.paragraph).length, 0);
      assert.equal(allArchiveCopies, original.count, `${original.locale}/${original.id}: exact original summary count across all six archive pages`);
    }
    const key = `${placement.locale}:${placement.route}`;
    const page = pages.find(candidate => `${candidate.locale}:${candidate.route}` === key);
    assert.ok(page, `${key}: reviewed presentation route exists`);
    const count = page.paragraphs.filter(paragraph => paragraph === placement.paragraph).length;
    assert.equal(count, placement.count, `${key}/${placement.id}/${placement.kind}: exact reviewed presentation paragraph placement`);
    if (!allowed.has(key)) allowed.set(key, new Set());
    assert.ok(!allowed.get(key).has(placement.paragraph), `${key}: no overlapping presentation exemptions`);
    allowed.get(key).add(placement.paragraph);
  }
  let excludedParagraphs = 0, excludedTokens = 0;
  const classified = pages.map(page => {
    const approved = allowed.get(`${page.locale}:${page.route}`) ?? new Set();
    return { ...page, paragraphs: page.paragraphs.filter(paragraph => {
      if (!approved.has(paragraph)) return true;
      excludedParagraphs++;
      excludedTokens += paragraph.split(' ').length;
      return false;
    }) };
  });
  assert.equal(excludedParagraphs, fixture.expectedExcludedParagraphs);
  // Exactly four reviewed K02 summary placements add eight UI tokens. All
  // diagrams, coordination text and substantive manuscript prose stay counted.
  assert.equal(excludedTokens, 2355);
  return { pages: classified, excludedParagraphs, excludedTokens };
}

module.exports = { withoutKeywordPresentation, reviewedPresentationPlacement };
