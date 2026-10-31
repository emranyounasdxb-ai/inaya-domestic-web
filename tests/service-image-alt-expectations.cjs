const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const fixture = require('./fixtures/service-image-alts-20261031.json');
const sha = value => createHash('sha256').update(value).digest('hex');

// An exact inverse of the reviewed alt-only amendment keeps all older catalog
// publication guards intact. Any unrelated field or description change fails.
function historicalSource(file, source) {
  if (file !== 'content/site-image-gallery.json') return source;
  source = source.replace(/\r\n/g, '\n');
  assert.equal(sha(source), fixture.afterSha256, 'exact visually reviewed service-alt catalog');
  const catalog = JSON.parse(source);
  for (const change of fixture.changes) {
    const image = catalog.images.find(row => row.src === change.src);
    assert.ok(image, change.src);
    assert.deepEqual(image.alt, change.after, `${change.src}: reviewed bilingual scene description`);
    image.alt = change.before;
  }
  const restored = JSON.stringify(catalog, null, 2) + '\n';
  assert.equal(sha(restored), fixture.beforeSha256, 'all other catalog bytes remain unchanged');
  return restored;
}

function historicalAlt(src, locale, current) {
  const change = fixture.changes.find(row => row.src === src);
  if (!change) return current;
  assert.equal(current, change.after[locale], `${src}: exact reviewed preview description`);
  return change.before[locale];
}

module.exports = { fixture, historicalSource, historicalAlt };
