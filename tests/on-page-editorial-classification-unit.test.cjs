const assert = require('node:assert/strict');
const test = require('node:test');
const { withoutReviewedSharedOnPageUi } = require('./managed-package-expectations.cjs');
const { sharedOnPageUiPlacements, sharedOnPageUiCounts } = require('./on-page-spec-expectations.cjs');

const tokens = value => value.toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu).join(' ');
const key = page => `${page.locale}/${page.route}`;

function reviewedPages() {
  return sharedOnPageUiPlacements.map(item => ({
    ...item,
    paragraphs: [tokens(item.text), 'this original substantive paragraph remains inside the editorial repetition metric']
  }));
}

const htmlForPage = page => `<main><p>${page.text}</p></main>`;

test('only18 exact identity/navigation placements receive the fixed236-token classification', () => {
  assert.deepEqual(sharedOnPageUiCounts, { paragraphs: 18, tokens: 236 });
  assert.equal(sharedOnPageUiPlacements.length, 18);
  assert.equal(new Set(sharedOnPageUiPlacements.map(key)).size, 18);
  assert.equal(sharedOnPageUiPlacements.filter(item => item.kind === 'identity').length, 8);
  assert.equal(sharedOnPageUiPlacements.filter(item => item.kind === 'archive').length, 10);
  assert.equal(sharedOnPageUiPlacements.reduce((total, item) => total + tokens(item.text).split(' ').length, 0), 236);
  const pages = reviewedPages();
  const classified = withoutReviewedSharedOnPageUi(pages, htmlForPage);
  assert.equal(classified.excludedParagraphs, 18);
  assert.equal(classified.excludedTokens, 236);
  for (const [index, page] of classified.pages.entries()) {
    assert.deepEqual(page.paragraphs, [pages[index].paragraphs[1]], `${key(page)}: substantive prose remains`);
    assert.equal(pages[index].paragraphs.length, 2, 'input audit paragraphs are preserved');
  }
});

test('classification rejects missing, altered, extra and unlisted UI copies', () => {
  const missing = reviewedPages();
  missing.shift();
  assert.throws(() => withoutReviewedSharedOnPageUi(missing, htmlForPage), /exact18 reviewed/);

  const edited = reviewedPages();
  edited[0].text += ' changed';
  assert.throws(() => withoutReviewedSharedOnPageUi(edited, htmlForPage), /exactly one unchanged reviewed/);

  const duplicateParagraph = reviewedPages();
  duplicateParagraph[0].paragraphs.push(duplicateParagraph[0].paragraphs[0]);
  assert.throws(() => withoutReviewedSharedOnPageUi(duplicateParagraph, htmlForPage), /exact counted shared UI/);

  const duplicateMarkup = reviewedPages();
  assert.throws(() => withoutReviewedSharedOnPageUi(duplicateMarkup, page => `${htmlForPage(page).replace('</main>', `<p>${page.text}</p></main>`)}`), /exactly one unchanged reviewed/);

  const unlisted = reviewedPages();
  unlisted.push({ locale: 'en', route: 'services/recruitment', paragraphs: [unlisted[0].paragraphs[0]] });
  assert.throws(() => withoutReviewedSharedOnPageUi(unlisted, htmlForPage), /unlisted shared UI placement/);
});
