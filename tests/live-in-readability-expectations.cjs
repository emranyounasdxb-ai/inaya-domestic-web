const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const fixture = require('./fixtures/live-in-readability-20261108.json');
const hash = value => createHash('sha256').update(value).digest('hex');

// Preserve prior contracts only for the complete, exact English amendment.
function restore(value, pin, label) {
  if (!pin || hash(value) !== pin.after) return value;
  for (const change of pin.changes) {
    assert.equal(value.split(change.after).length - 1, change.count ?? 1, `${label}: exact reviewed occurrences`);
    value = value.split(change.after).join(change.before);
  }
  assert.equal(hash(value), pin.before, `${label}: every other byte preserved`);
  return value;
}

function historicalSource(file, source) {
  return restore(source.replace(/\r\n/g, '\n'), fixture.sources[file], file);
}

function historicalPage(page) {
  if (page.url !== fixture.url) return page;
  const mainText = restore(page.mainText, fixture.page, page.url);
  return mainText === page.mainText ? page : { ...page, mainText };
}

function historicalCommercialParagraphs(page) {
  const pin = fixture.paragraphs;
  if (page.url !== fixture.url || hash(page.mainText) !== fixture.page.after || hash(JSON.stringify(page.paragraphs)) !== pin.after) return page;
  const paragraphs = [...page.paragraphs];
  for (const change of pin.changes) {
    assert.equal(paragraphs[change.index], change.after, 'exact live-in paragraph placement');
    paragraphs[change.index] = change.before;
  }
  assert.equal(hash(JSON.stringify(paragraphs)), pin.before, 'all other live-in paragraphs preserved');
  return { ...page, paragraphs };
}

module.exports = { fixture, hash, historicalSource, historicalPage, historicalCommercialParagraphs };
