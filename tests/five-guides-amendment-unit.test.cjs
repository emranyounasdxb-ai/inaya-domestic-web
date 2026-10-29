const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const test = require('node:test');
const amendment = require('./five-guides-amendment-expectations.cjs');

test('exact five reviewed replacements reconstruct all historical source bytes without changing unrelated articles', () => {
  for (const file of [...Object.keys(amendment.sourceSpecs), 'lib/article-search-titles.ts']) {
    amendment.historicalSource(file, readFileSync(file, 'utf8'));
  }
  for (const file of ['lib/customer-article-visuals.ts', 'lib/customer-article-faqs.ts']) {
    assert.equal(amendment.hash(readFileSync(file, 'utf8').replace(/\r\n/g, '\n')),
      amendment.before.sourceFiles[file].normalizedSha256, `${file}: existing unrelated diagram/FAQ datasets unchanged`);
  }
  assert.equal(amendment.before.baselineCommit, 'f61c45b9c241c9dd0d038024a00b7eee99d9d2da');
  assert.equal(amendment.after.targets.length, 5);
  for (const target of amendment.after.targets) {
    const original = amendment.getAmendment(target.slug).before;
    assert.equal(target.record.slug, original.record.slug);
    assert.equal(target.record.published, original.record.published);
    assert.equal(target.record.updated, '2026-10-29');
    for (const locale of ['en', 'ar']) {
      assert.ok(target.record[locale].title.trim());
      assert.ok(target.record[locale].description.trim());
      assert.notDeepEqual(target.record[locale], original.record[locale], `${target.slug}/${locale}: a substantive reviewed update`);
      if (target.family === 'keyword') assert.deepEqual(target.record[locale].visuals, original.record[locale].visuals, 'both original reviewed diagrams remain exact');
    }
  }
});

test('inverse amendment rejects an unreviewed paragraph, changed publication date, renamed slug and unrelated article change', () => {
  const original = amendment.after.targets.find(row => row.family === 'keyword').record;
  const changedBody = structuredClone(original);
  changedBody.en.body += '\n\nUnreviewed extra promise.';
  assert.throws(() => amendment.historicalRecord(changedBody, 'keyword'), /exact reviewed/);
  assert.throws(() => amendment.historicalRecord({ ...original, published: '2026-10-29' }, 'keyword'), /exact reviewed/);
  const raw = readFileSync('content/keyword-articles-20261024.json', 'utf8');
  for (const change of [
    records => { records.find(row => row.id === 'K02').slug += '-duplicate'; },
    records => { records.find(row => row.id === 'K03').en.body += '\n\nUnrelated change.'; }
  ]) {
    const records = JSON.parse(raw);
    change(records);
    assert.throws(() => amendment.historicalSource('content/keyword-articles-20261024.json', JSON.stringify(records, null, 2) + '\n'), /historical byte|reviewed/);
  }
  const target = amendment.after.targets[0];
  const url = `https://inayadomestic.ae/en/blog/${target.slug}/`;
  assert.throws(() => amendment.pageBefore(url, 'Unreviewed search title', target.pageFacts.en.descriptions[0]), /reviewed search title/);
});
