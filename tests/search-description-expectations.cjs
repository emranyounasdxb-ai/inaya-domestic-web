const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const fixture = require('./fixtures/search-description-20261110.json');

const hash = value => createHash('sha256').update(value).digest('hex');
const digest = value => hash(JSON.stringify(value));

// Only the complete reviewed source can project into an older checkpoint.
// Unknown files and partial/unrelated edits remain visible to existing guards.
function historicalSource(file, source) {
  const pin = Object.hasOwn(fixture.sources, file) ? fixture.sources[file] : undefined;
  const normalized = source.replace(/\r\n/g, '\n');
  if (!pin || hash(normalized) !== pin.afterSha256) return source;
  assert.equal(hash(pin.beforeSource), pin.beforeSha256, `${file}: immutable prior source`);
  return pin.beforeSource;
}

// A two-field metadata object is deliberately insufficient: the complete page
// contract must match, including both sharing descriptions and every body field.
function historicalContract(url, contract) {
  const pin = Object.hasOwn(fixture.pages, url) ? fixture.pages[url] : undefined;
  if (!pin?.changed || digest(contract) !== pin.afterContractSha256) return contract;
  assert.equal(contract.title, pin.title, `${url}: unchanged reviewed title`);
  assert.equal(contract.description, pin.after, `${url}: reviewed search description`);
  const previous = structuredClone(contract);
  previous.description = pin.before;
  const sharing = previous.sharing.filter(meta => meta.property === 'og:description' || meta.name === 'twitter:description');
  assert.equal(sharing.length, 2, `${url}: exactly two sharing descriptions`);
  for (const meta of sharing) {
    assert.equal(meta.content, pin.after, `${url}: complete reviewed sharing description`);
    meta.content = pin.before;
  }
  assert.equal(digest(previous), pin.beforeContractSha256, `${url}: every other contract field preserved`);
  return previous;
}

function hasTerminalEllipsis(value) {
  return /(?:\u2026|\.{3})[\s"'\u2019\u201d\u00bb)\]]*$/u.test(value);
}

module.exports = { fixture, hash, digest, historicalSource, historicalContract, hasTerminalEllipsis };
