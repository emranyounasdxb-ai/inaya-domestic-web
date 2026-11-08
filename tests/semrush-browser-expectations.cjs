const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');

const file = 'tests/e2e/home.spec.ts';
const beforeHeading = 'Maid & Domestic Worker Services in Ajman and Across the UAE';
const afterHeading = 'Maid & Domestic Worker Services in Ajman, Dubai and Across the UAE';
// Full LF-normalized source at merged cf032574, then its single reviewed H1 update.
const beforeHash = '1c7a1b790dcfc8466100c786e4b820f32d5a70840e6791a0336a7e3697d8b65a';
const afterHash = '7245aeb9ebe80b4c7c4972dead658271a35b0c8966da81805923418b7500b86c';
const hash = source => createHash('sha256').update(source).digest('hex');

function beforeSemrushBrowserSource(path, source) {
  if (path !== file) return source;
  const current = source.replace(/\r\n/g, '\n');
  const currentHash = hash(current);
  if (currentHash === beforeHash) {
    assert.equal(current.split(beforeHeading).length, 2, 'one original home H1 assertion');
    return current;
  }
  // Unknown or incomplete changes stay visible to the existing source guard.
  if (currentHash !== afterHash) return source;
  assert.equal(current.split(afterHeading).length, 2, 'one reviewed home H1 assertion');
  assert.equal(current.includes(beforeHeading), false, 'the original H1 is replaced exactly once');
  const previous = current.replace(afterHeading, beforeHeading);
  assert.equal(hash(previous), beforeHash, 'every other home browser assertion remains exact');
  return previous;
}

module.exports = { beforeSemrushBrowserSource };
