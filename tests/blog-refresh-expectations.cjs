const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const fixture = require('./fixtures/blog-refresh-20261029.json');
const sha = value => createHash('sha256').update(value).digest('hex');
const galleryUrls = ['en', 'ar'].map(lang => `https://inayadomestic.ae/${lang}/gallery/`);

// Older publication contracts inspect their original source, after checking that
// the current presentation is EXACTLY the separately pinned user amendment.
// No manuscript or arbitrary future change can enter through this projection.
function historicalSource(file, current) {
  current = require('./service-image-alt-expectations.cjs').historicalSource(file, current);
  current = require('./page-clarity-expectations.cjs').historicalSource(file, current);
  current = current.replace(/\r\n/g, '\n');
  // The owner's 30 October sidebar amendment changes only the sidebar size hint.
  // Pin that exact replacement before retaining the original full-source hash.
  if (file === 'components/BlogImage.tsx') {
    const previous = "variant === 'sidebar' ? '56px'";
    const updated = "variant === 'sidebar' ? '(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw'";
    assert.equal(current.split(updated).length, 2, 'one reviewed full-width sidebar hint');
    assert.ok(!current.includes(previous), 'no remaining thumbnail-width hint');
    current = current.replace(updated, previous);
  }
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
