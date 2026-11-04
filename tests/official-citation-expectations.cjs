const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const { readFileSync } = require('node:fs');
const fixtureText = readFileSync(require.resolve('./fixtures/official-citation-links-20261104.json'), 'utf8').replace(/\r\n/g, '\n');
const sha = value => createHash('sha256').update(value).digest('hex');
assert.equal(sha(fixtureText), '4a64deb4498e039b018c81251fd078948b349b5cb0d407faf91f634719a92285', 'independent citation-only before/after pins');
const fixture = JSON.parse(fixtureText);

function currentUrl(url) { return fixture.targets[url] ?? url; }
function currentValue(value) {
  if (typeof value === 'string') return Object.entries(fixture.targets).reduce((text, [before, after]) => text.split(before).join(after), value);
  if (Array.isArray(value)) return value.map(currentValue);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, currentValue(item)]));
  return value;
}
function restore(value, pin) {
  assert.equal(sha(value), pin.afterSha256, 'exact reviewed citation-only amendment');
  for (const change of pin.changes.slice().reverse()) {
    assert.equal(value.slice(change.offset, change.offset + change.after.length), change.after, 'exact changed URL at the recorded offset');
    value = value.slice(0, change.offset) + change.before + value.slice(change.offset + change.after.length);
  }
  assert.equal(sha(value), pin.beforeSha256, 'all surrounding source bytes and authored copy preserved');
  return value;
}
// Keep older publication provenance fixtures immutable. Only these separately
// pinned URL edits can project back to the prior complete source/manuscript.
function historicalSource(file, source) {
  source = source.replace(/\r\n/g, '\n');
  const pin = fixture.sources[file];
  if (!pin || sha(source) === pin.beforeSha256) return source;
  return restore(source, pin);
}
function historicalRecord(record, family, field = 'record') {
  const pin = family === 'published' && fixture.records[record.slug]?.[field];
  const value = JSON.stringify(record);
  // Older fixture inputs continue through their existing exact snapshot checks.
  return pin && sha(value) === pin.afterSha256 ? JSON.parse(restore(value, pin)) : record;
}
module.exports = { fixture, sha, currentUrl, currentValue, historicalSource, historicalRecord };
