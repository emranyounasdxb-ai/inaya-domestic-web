const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const fixture = require('./fixtures/background-guidance-20261107.json');

const hash = value => createHash('sha256').update(value).digest('hex');

// Project only a complete reviewed source or page back to its previous release.
// Partial amendments and unrelated edits remain visible to the older contracts.
function historicalSource(file, source) {
  source = source.replace(/\r\n/g, '\n');
  const pin = fixture.sources[file];
  if (!pin || hash(source) !== pin.after) return source;
  for (const pair of pin.replacements) {
    assert.equal(source.split(pair.after).length, 2, `${file}: one exact reviewed line`);
    source = source.replace(pair.after, pair.before);
  }
  assert.equal(hash(source), pin.before, `${file}: previous source is unchanged`);
  return source;
}

function historicalPage(page) {
  const pin = fixture.pages[page.url];
  if (!pin || hash(page.mainText) !== pin.after) return page;
  const pair = fixture.summaries[pin.locale];
  assert.equal(page.mainText.split(pair.after).length, pin.occurrences + 1, `${page.url}: exact summary placements`);
  const mainText = page.mainText.replaceAll(pair.after, pair.before);
  assert.equal(hash(mainText), pin.before, `${page.url}: previous visible content is unchanged`);
  return { ...page, mainText };
}

module.exports = { fixture, hash, historicalSource, historicalPage };
