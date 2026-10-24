const assert = require('node:assert/strict');
const fixture = require('./fixtures/keyword-article-presentation-20261024.json');

// Only exact, counted presentation placements are classified separately from
// editorial prose. Every complete manuscript is independently hash-checked by
// keyword-articles-export; no generic phrase or entire article is excluded.
function withoutKeywordPresentation(pages) {
  const allowed = new Map();
  for (const placement of fixture.placements) {
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
  assert.equal(excludedTokens, fixture.expectedExcludedTokens);
  return { pages: classified, excludedParagraphs, excludedTokens };
}

module.exports = { withoutKeywordPresentation };
