const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const before = require('./fixtures/five-guides-amendment-20261029-before.json');
const after = require('./fixtures/five-guides-amendment-20261029-after.json');
const beforePages = require('./fixtures/five-guides-amendment-20261029-before-pages.json');
const { beforeCatalogAddition } = require('./four-guides-addition-expectations.cjs');

const date = '2026-10-29';
const targetSlugs = [
  'tadbeer-center-ajman-first-visit-service-routing',
  'choosing-domestic-worker-agency-ajman',
  'domestic-worker-hiring-stages-timelines',
  'documents-for-domestic-worker-enquiry',
  'domestic-worker-visa-sponsorship-support'
];
const stable = value => Array.isArray(value) ? value.map(stable) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])])) : value;
const hash = value => createHash('sha256').update(value).digest('hex');
const fingerprint = value => hash(JSON.stringify(stable(value)));
const clone = value => JSON.parse(JSON.stringify(value));
assert.deepEqual(before.targets.map(row => row.slug), targetSlugs, 'exact independently captured before cohort');
assert.deepEqual(after.targets.map(row => row.slug), targetSlugs, 'exact five reviewed amendments only');
assert.equal(after.amendmentDate, date);

function getAmendment(slug) {
  const index = targetSlugs.indexOf(slug);
  return index < 0 ? undefined : { before: before.targets[index], after: after.targets[index] };
}

function assertApprovedRecord(record, family, field = 'record') {
  const amendment = getAmendment(record.slug);
  if (!amendment) return undefined;
  assert.equal(amendment.after.family, family, `${record.slug}: exact content family`);
  const expected = amendment.after[field];
  assert.ok(expected, `${record.slug}: reviewed ${field} exists`);
  assert.deepEqual(record, expected, `${record.slug}: complete exact reviewed ${field}; no unpinned changes`);
  assert.equal(record.published, amendment.before[field].published, `${record.slug}: original publication date preserved`);
  assert.equal(record.updated, date, `${record.slug}: genuine Step1 review date`);
  return amendment;
}

// Inverse amendments restore historical INPUTS for the old provenance checks.
// New rendering is separately checked against the complete after manuscript;
// removed/outdated historical statements are never required to stay public.
function historicalRecord(record, family, field = 'record') {
  record = require('./page-clarity-expectations.cjs').historicalRecord(record, family, field);
  const amendment = assertApprovedRecord(record, family, field);
  return amendment ? clone(amendment.before[field]) : record;
}

function historicalBody(slug, locale, body) {
  const clarity = require('./page-clarity-expectations.cjs').fixture.records[slug];
  if (clarity?.record.after[locale].body && body === clarity.record.after[locale].body) body = clarity.record.before[locale].body;
  const amendment = getAmendment(slug);
  if (!amendment) return body;
  assert.equal(body, amendment.after.record[locale].body, `${slug}/${locale}: exact approved replacement body`);
  return amendment.before.record[locale].body;
}

const sourceSpecs = {
  'content/keyword-articles-20261024.json': { family: 'keyword', field: 'record' },
  'lib/keyword-article-metadata.ts': { family: 'keyword', field: 'compactMetadata', marker: 'export const keywordArticleMetadata: KeywordArticleMetadata[] = ' },
  'lib/published-article-content.ts': { family: 'published', field: 'record', marker: 'export const publishedArticles: PublishedArticleContent[] = ' },
  'lib/published-article-metadata.ts': { family: 'published', field: 'compactMetadata', marker: 'export const publishedArticleMetadata: PublishedArticleMetadata[] = ' },
  'lib/domestic-worker-guides.ts': { family: 'base', field: 'record', marker: 'export const domesticWorkerGuides: DomesticWorkerGuide[] = ', base: true }
};

function sourceRecords(file, source) {
  const spec = sourceSpecs[file];
  assert.ok(spec, `${file}: only the five reviewed data sources are supported`);
  source = source.replace(/\r\n/g, '\n');
  let prefix = '', suffix = '\n', data = source;
  if (spec.marker) {
    assert.equal(source.split(spec.marker).length, 2, `${file}: one immutable export boundary`);
    const index = source.indexOf(spec.marker) + spec.marker.length;
    prefix = source.slice(0, index);
    data = source.slice(index);
    if (spec.base) {
      const end = data.indexOf('\n  ...publishedArticleGuides');
      assert.ok(end > 0, 'base guide array retains the existing spread boundary');
      suffix = data.slice(end);
      data = data.slice(0, end).trim().replace(/,$/, '') + '\n]';
    } else {
      assert.match(data, /;\s*$/, `${file}: existing module terminator`);
      data = data.trim().replace(/;$/, '');
      suffix = ';\n';
    }
  }
  return { spec, prefix, suffix, records: JSON.parse(data) };
}

function historicalSource(file, current) {
  current = beforeCatalogAddition(file, current);
  const literal = after.additionalSourceAmendments?.find(row => row.file === file);
  if (literal) {
    current = current.replace(/\r\n/g, '\n');
    assert.equal(current.split(literal.afterFragment).length, 2, `${file}: one exact reviewed title amendment`);
    const restored = current.replace(literal.afterFragment, literal.beforeFragment);
    assert.equal(hash(restored), literal.beforeSha256, `${file}: all other source bytes retained`);
    return restored;
  }
  const { spec, prefix, suffix, records } = sourceRecords(file, current);
  const restored = records.map(record => historicalRecord(record, spec.family, spec.field));
  const json = JSON.stringify(restored, null, 2);
  const result = prefix + (spec.base ? json.slice(0, -2) + ',' : json) + suffix;
  assert.equal(hash(result), before.sourceFiles[file].normalizedSha256,
    `${file}: undoing only exact target amendments reconstructs every historical byte, including unrelated records`);
  return result;
}

function dateFor(slug, fallback) {
  return require('./page-clarity-expectations.cjs').dateFor(slug, getAmendment(slug) ? date : fallback);
}

function pageBefore(url, currentTitle, currentDescription) {
  const prior=require('./service-refinement-expectations.cjs').pageBefore(url,currentTitle,currentDescription);currentTitle=prior.title;currentDescription=prior.description;
  const pathname = new URL(url).pathname;
  const slug = pathname.split('/').filter(Boolean).slice(2).join('/');
  const amendment = getAmendment(slug);
  if (!amendment) return { title: currentTitle, description: currentDescription };
  const locale = pathname.split('/')[1];
  const expected = amendment.after.pageFacts[locale];
  assert.equal(currentTitle, expected.titles[0], `${url}: exact reviewed search title`);
  assert.equal(currentDescription, expected.descriptions[0], `${url}: exact reviewed search description`);
  const original = beforePages.pages[pathname];
  return { title: original.titles[0], description: original.descriptions[0] };
}

module.exports = { before, after, beforePages, date, targetSlugs, stable, hash, fingerprint,
  getAmendment, assertApprovedRecord, historicalRecord, historicalBody,
  sourceRecords, sourceSpecs, historicalSource, dateFor, pageBefore };
