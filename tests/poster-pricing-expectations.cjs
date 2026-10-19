const assert = require('node:assert/strict');
const approved = require('./fixtures/poster-pricing-changes.json');

// Exact deltas for the owner's 19 October six-package price update. The older
// checkpoint transforms still run first; every unrelated source/message stays
// protected by those existing equality checks.
function approvedPosterPricing(file, source) {
  for (const [before, after] of approved.sourcePatches[file] ?? []) {
    assert.equal(source.split(before).length, 2, `${file}: one reviewed poster-pricing anchor`);
    source = source.replace(before, after);
  }
  return source;
}

function approvedPosterMessages(locale, data) {
  for (const change of approved.messageChanges[locale] ?? []) {
    let record = data;
    for (const key of change.path.slice(0, -1)) record = record[key];
    const key = change.path.at(-1);
    assert.equal(Object.hasOwn(record, key), change.beforePresent, `${locale}.${change.path.join('.')}: original key presence`);
    if (change.beforePresent) assert.deepEqual(record[key], change.before, `${locale}.${change.path.join('.')}: original value`);
    if (change.afterPresent) record[key] = change.after;
    else delete record[key];
  }
  return data;
}

module.exports = { approvedPosterPricing, approvedPosterMessages };
