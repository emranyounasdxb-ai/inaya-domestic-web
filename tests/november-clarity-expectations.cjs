const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const fixture = require('./fixtures/november-clarity-20261107.json');
const hash = value => createHash('sha256').update(value).digest('hex');

// Only complete reviewed outputs may project to the immutable prior release.
// Unrelated edits and partially applied changes remain visible to older guards.
function restore(value, pin, label) {
  if (!pin || hash(value) !== pin.after) return value;
  for (const change of pin.changes) {
    assert.equal(value.split(change.after).length, 2, `${label}: one exact reviewed replacement`);
    value = value.replace(change.after, change.before);
  }
  assert.equal(hash(value), pin.before, `${label}: every other byte is preserved`);
  return value;
}

function historicalSource(file, source) {
  return restore(source.replace(/\r\n/g, '\n'), fixture.sources[file], file);
}

function historicalRecord(record, family, field = 'record') {
  const pin = family === 'published' && field === 'record' && fixture.records[record.slug];
  if (!pin || hash(JSON.stringify(record)) !== pin.after) return record;
  assert.equal(record.en.body.split(pin.change.after).length, 2, `${record.slug}: one English sentence replacement`);
  const previous = { ...record, en: { ...record.en, body: record.en.body.replace(pin.change.after, pin.change.before) } };
  assert.equal(hash(JSON.stringify(previous)), pin.before, `${record.slug}: Arabic, dates, references and every other field preserved`);
  return previous;
}

function historicalPage(page) {
  const mainText = restore(page.mainText, fixture.pages[page.url], page.url);
  return mainText === page.mainText ? page : { ...page, mainText };
}

function historicalArticleText(slug, locale, value) {
  return restore(value, fixture.articleText?.[`${locale}/${slug}`], `${locale}/${slug}`);
}

module.exports = { fixture, hash, historicalSource, historicalRecord, historicalPage, historicalArticleText };
