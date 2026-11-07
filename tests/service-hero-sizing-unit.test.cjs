const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const test = require('node:test');
const sizing = require('./service-hero-sizing-expectations.cjs');

test('only the conflicting service hero minimum height is removed', () => {
  const { file, before, after } = sizing.fixture;
  const source = require('./november-clarity-expectations.cjs').historicalSource(file, readFileSync(file, 'utf8'));
  assert.equal(sizing.hash(source), after, 'exact reviewed natural-aspect-ratio fix');
  assert.equal(sizing.hash(sizing.historicalSource(file, source)), before, 'all previous template markup remains protected');
  const unrelated = source + '\n// Unreviewed template edit\n';
  assert.equal(sizing.historicalSource(file, unrelated), unrelated, 'unrelated edits remain visible to historical assertions');
});
