const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const fixture = require('./fixtures/page-clarity-20261030.json');
const rendered = require('./fixtures/page-clarity-rendered-20261030.json');
const sha = value => createHash('sha256').update(value).digest('hex');
const stable = v => Array.isArray(v) ? v.map(stable) : v && typeof v === 'object' ? Object.fromEntries(Object.keys(v).sort().map(k => [k, stable(v[k])])) : v;

// Only a complete exact owner-reviewed after source can project to the immutable
// prior checkpoint. Unrelated source edits and partial amendments still fail.
function historicalSource(file, source) {
  source = source.replace(/\r\n/g, '\n');
  const pin = fixture.sources[file];
  if (!pin || pin.before === null) return source;
  if (sha(source) === pin.beforeSha256) return source;
  assert.equal(sha(source), pin.afterSha256, `${file}: exact reviewed page-clarity amendment`);
  assert.equal(sha(pin.before), pin.beforeSha256, `${file}: immutable previous source`);
  return pin.before;
}
function historicalRecord(record, family, field = 'record') {
  const pin = fixture.records[record.slug];
  if (!pin || pin.family !== family || !pin[field]) return record;
  if (JSON.stringify(stable(record)) === JSON.stringify(stable(pin[field].before))) return record;
  assert.deepEqual(record, pin[field].after, `${record.slug}: exact reviewed page-clarity ${field}`);
  return structuredClone(pin[field].before);
}
function currentRecord(slug, previous, field = 'record') {
  return fixture.records[slug]?.[field]?.after ?? previous;
}
function archiveOrder(slugs) { return [...slugs.filter(s => s !== 'inaya-office-staff-careers-ajman'), ...slugs.filter(s => s === 'inaya-office-staff-careers-ajman')]; }
function dateFor(slug, fallback) { return fixture.records[slug] ? fixture.date : fallback; }
function archiveSequence(slugs) { return Array.from({length: Math.ceil(slugs.length / 12)}, (_, i) => archiveOrder(slugs.slice(i * 12, (i + 1) * 12))).flat(); }
function assertReviewedPage(page) { const pin = rendered.pages[page.url]; if (pin) assert.equal(sha(page.mainText), pin.mainTextSha256, `${page.url}: complete exact reviewed visible content`); return pin; }
module.exports = { fixture, rendered, assertReviewedPage, sha, historicalSource, historicalRecord, currentRecord, archiveOrder, archiveSequence, dateFor };
