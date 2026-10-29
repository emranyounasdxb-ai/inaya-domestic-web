const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const fixture = require('./fixtures/blog-refresh-20261029.json');
const sha = value => createHash('sha256').update(value).digest('hex');
const galleryUrls = ['en', 'ar'].map(lang => `https://inayadomestic.ae/${lang}/gallery/`);

// Older publication contracts inspect their original source, after checking that
// the current presentation is EXACTLY the separately pinned user amendment.
// No manuscript or arbitrary future change can enter through this projection.
function historicalSource(file, current) {
  current = current.replace(/\r\n/g, '\n');
  const pin = fixture.sources[file];
  if (!pin) return current;
  assert.equal(sha(current), pin.afterSha256, `${file}: exact reviewed blog presentation amendment`);
  assert.equal(sha(pin.before), pin.beforeSha256, `${file}: immutable a2c56b2 before source`);
  return pin.before;
}
function expectedImage(slug, previous) {
  const image = fixture.images.assets.find(row => row.slug === slug);
  if (!image) return previous;
  const meta = require('../content/blog-refresh-images-20261029.json')[slug];
  assert.equal(meta.src, image.publicSrc);
  return meta;
}
// Restore only newly introduced anchors for legacy visible-text fingerprints;
// original Markdown links and all original words remain part of those checks.
function beforeContextLinks(html) {
  return html.replace(/<a\b[^>]*data-contextual-blog-link="true"[^>]*>([\s\S]*?)<\/a>/g, '$1');
}
module.exports = { fixture, sha, historicalSource, expectedImage, galleryUrls, beforeContextLinks };
