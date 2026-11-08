const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const test = require('node:test');
const { execFileSync } = require('node:child_process');
const { src, dataKey, beforeAhrefsSource: beforeAhrefs } = require('./ahrefs-expectations.cjs');
const { beforeSemrushBrowserSource } = require('./semrush-browser-expectations.cjs');
const beforeAhrefsSource = (file, source) => beforeAhrefs(file, beforeSemrushBrowserSource(file, source));

test('the exact Ahrefs and lead-measurement insertions plus browser-fixture import match the protected baseline sources', () => {
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

test('the home browser amendment restores only the complete reviewed H1 update', () => {
  const file = 'tests/e2e/home.spec.ts';
  const current = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const previous = execFileSync('git', ['show', `cf032574c603006d3da53497a019ad856b2b951e:${file}`], { encoding: 'utf8' }).replace(/\r\n/g, '\n');
  assert.equal(beforeSemrushBrowserSource(file, current), previous);
  assert.equal(beforeSemrushBrowserSource(file, previous), previous);
  assert.equal(beforeSemrushBrowserSource(file, current.replace(/\n/g, '\r\n')), previous);
  const otherFile = current.replace(/\n/g, '\r\n');
  assert.equal(beforeSemrushBrowserSource('tests/e2e/other.spec.ts', otherFile), otherFile);
  for (const mutated of [
    current + '\n// Unreviewed edit\n',
    current.replace('in Ajman, Dubai and Across', 'in Ajman, Dubai Across'),
    current.replace('toHaveLength(6)', 'toHaveLength(5)'),
    current + '\n// Maid & Domestic Worker Services in Ajman, Dubai and Across the UAE\n',
    previous + '\n// Partial rollback with another change\n'
  ]) {
    assert.equal(beforeSemrushBrowserSource(file, mutated), mutated);
    assert.throws(() => beforeAhrefsSource(file, mutated));
  }
});
