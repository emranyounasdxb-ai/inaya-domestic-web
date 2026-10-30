const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const sha = value => createHash('sha256').update(value).digest('hex');

// Project only the exact responsive-spacing amendment onto the prior content
// checkpoint. The previous release fixture and its protected copy stay intact.
function historicalSource(file, source) {
  source = source.replace(/\r\n/g, '\n');
  if (file !== 'components/ServiceDetailTemplate.tsx') return source;
  const beforeSha = 'fb4566300106ab64f19d0ce6c77bf5c0df625fc19a364b5b0526ea43b3f1eef8';
  if ([beforeSha, 'f935969c19ab941f9ca607034c97516a1efbe2a5d3160bf0acfb45488335bfee'].includes(sha(source))) return source;
  assert.equal(sha(source), 'cf30a54a9d4f6310a89e4bc8044009e3968043ce63b0edcd1dbbb6ea0447e37e', 'exact reviewed contact-rail spacing amendment');
  const previous = source.replace('ps-8 sm:ps-6 lg:ps-12 xl:ps-4 rtl:ps-0', 'ps-8 sm:ps-6 lg:ps-4 rtl:ps-0');
  assert.equal(sha(previous), beforeSha, 'unchanged service template outside the reviewed spacing');
  return previous;
}

module.exports = { historicalSource };
