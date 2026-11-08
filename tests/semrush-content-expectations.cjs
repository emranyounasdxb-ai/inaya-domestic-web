const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const fixture = require('./fixtures/semrush-content-20261108.json');
const hash = value => createHash('sha256').update(value).digest('hex');

// Preserve immutable prior checkpoints only for the complete reviewed result.
// Offsets refer to that exact result; partial or unrelated edits cannot project.
function restore(value, pin, label) {
  if (!pin || hash(value) !== pin.after) return value;
  for (const [offset, length, previous] of pin.patches.slice().reverse()) {
    value = value.slice(0, offset) + previous + value.slice(offset + length);
  }
  assert.equal(hash(value), pin.before, `${label}: every other byte preserved`);
  return value;
}
function historicalSource(file, source) {
  return restore(source.replace(/\r\n/g, '\n'), fixture.sources[file], file);
}
function historicalPage(page) {
  const mainText = restore(page.mainText, fixture.pages[page.url], page.url);
  return mainText === page.mainText ? page : { ...page, mainText };
}
function historicalMetadata(url, metadata) {
  const value = JSON.stringify(metadata);
  const previous = restore(value, fixture.metadata[url], `${url}: metadata`);
  return previous === value ? metadata : JSON.parse(previous);
}
function historicalHeading(url, heading) {
  return restore(heading, fixture.headings[url], `${url}: H1`);
}
function historicalLastmod(url, lastmod) {
  return Object.hasOwn(fixture.lastmods, url) && lastmod === fixture.lastmods[url] ? fixture.previousLastmods[url] : lastmod;
}
function beforeDeploymentImages(url, contract) {
  const pin = fixture.deploymentImages?.[url];
  if (!pin || hash(JSON.stringify(contract.images)) !== pin.deployed) return contract;
  const images = contract.images.map(image => ({ ...image, src: pin.paths[image.src] ?? image.src }));
  assert.equal(hash(JSON.stringify(images)), pin.built, `${url}: exact existing deployment image conversion`);
  return { ...contract, images };
}
function historicalCommercialParagraphs(page) {
  const pin = fixture.commercialParagraphs[page.url];
  if (!pin || hash(page.mainText) !== fixture.pages[page.url].after || hash(JSON.stringify(page.paragraphs)) !== pin.after) return page;
  const paragraphs = [...page.paragraphs];
  for (const change of pin.changes) {
    assert.equal(paragraphs[change.index], change.after, `${page.url}: exact reviewed paragraph placement`);
    paragraphs[change.index] = change.before;
  }
  assert.equal(hash(JSON.stringify(paragraphs)), pin.before, `${page.url}: all other current paragraphs retained`);
  return { ...page, paragraphs };
}
module.exports = { fixture, hash, historicalSource, historicalPage, historicalMetadata, historicalHeading, historicalLastmod, historicalCommercialParagraphs, beforeDeploymentImages };
