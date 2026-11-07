const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const fixture = require('./fixtures/service-hero-sizing-20261107.json');
const hash = value => createHash('sha256').update(value).digest('hex');

function historicalSource(file, source) {
  source = source.replace(/\r\n/g, '\n');
  if (file !== fixture.file || hash(source) !== fixture.after) return source;
  assert.equal(source.split(fixture.current).length, 2, 'one exact service hero class using its natural aspect ratio');
  const previous = source.replace(fixture.current, fixture.previous);
  assert.equal(hash(previous), fixture.before, 'all other service template source remains unchanged');
  return previous;
}

module.exports = { fixture, hash, historicalSource };
