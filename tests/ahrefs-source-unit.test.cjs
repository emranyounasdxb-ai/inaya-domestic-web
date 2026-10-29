const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const test = require('node:test');
const { src, dataKey, beforeAhrefsSource } = require('./ahrefs-expectations.cjs');

test('the native Ahrefs head and browser import are the only changes to their complete protected baseline sources', () => {
  for (const file of ['app/[locale]/layout.tsx', 'tests/e2e/home.spec.ts']) beforeAhrefsSource(file, readFileSync(file, 'utf8'));
});

test('source amendments reject a changed project, duplicate tracker and any other layout or browser assertion change', () => {
  const file = 'app/[locale]/layout.tsx', source = readFileSync(file, 'utf8');
  assert.throws(() => beforeAhrefsSource(file, source.replace(dataKey, 'another-project')));
  assert.throws(() => beforeAhrefsSource(file, source + `\n<script src="${src}" />`));
  assert.throws(() => beforeAhrefsSource(file, source + '\n// Another unreviewed layout change\n'));
  const home = readFileSync('tests/e2e/home.spec.ts', 'utf8');
  assert.throws(() => beforeAhrefsSource('tests/e2e/home.spec.ts', home + '\n// An unreviewed assertion change\n'));
});
