const assert = require('node:assert/strict');
const changes = require('./fixtures/ajman-office-approved-copy.json');

// Owner-confirmed office access and transport, plus the approved AI-labelled Ajman visual.
// Preserve the historical source protection around these exact changes.
function approvedAjmanOfficeCopy(file, source) {
  for (const [before, after] of changes[file] || []) {
    assert.equal(source.split(before).length, 2, `${file}: one approved office-copy anchor`);
    source = source.replace(before, after);
  }
  return source;
}

module.exports = { approvedAjmanOfficeCopy };
