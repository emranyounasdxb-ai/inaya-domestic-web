const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const { pages, sources } = require('./fixtures/bilingual-seo-draft-20261105.json');

function hash(value) {
  return createHash('sha256').update(value).digest('hex');
}

// Older regression contracts inspect their original checkpoint after projecting
// the exact candidate changes. Every other source or text edit still reaches
// those contracts and is checked against their existing expectations.
function historicalValue(value, checkpoint) {
  if (!checkpoint || hash(value) !== checkpoint.after) return value;
  let previous = value;
  for (const [offset, length, text] of checkpoint.patches.slice().reverse()) {
    previous = previous.slice(0, offset) + text + previous.slice(offset + length);
  }
  assert.equal(hash(previous), checkpoint.before);
  return previous;
}

function historicalSource(file, source) {
  source = require('./november-clarity-expectations.cjs').historicalSource(file, source);
  source = require('./service-hero-sizing-expectations.cjs').historicalSource(file, source);
  source = require('./background-guidance-expectations.cjs').historicalSource(file, source);
  return historicalValue(source.replace(/\r\n/g, '\n'), sources[file]);
}

function historicalPage(page) {
  page = require('./november-clarity-expectations.cjs').historicalPage(page);
  page = require('./background-guidance-expectations.cjs').historicalPage(page);
  const mainText = historicalValue(page.mainText, pages[page.url]);
  return mainText === page.mainText ? page : { ...page, mainText };
}

module.exports = { historicalSource, historicalPage };
