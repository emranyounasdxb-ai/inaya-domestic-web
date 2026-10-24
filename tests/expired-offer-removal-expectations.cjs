const assert = require('node:assert/strict');

// Owner explicitly retired the global Sierra Leone promotion on24October.
// Preserve every other layout line and the independent Back to Top utility.
function approvedExpiredOfferRemoval(file, source) {
  if (file !== 'app/[locale]/layout.tsx') return source;
  for (const [before, after] of [
    ["import SierraLeoneOfferControls from '@/components/SierraLeoneOfferControls';", "import BackToTop from '@/components/BackToTop';"],
    ['          <SierraLeoneOfferControls locale={locale} />', '          <BackToTop locale={locale} />']
  ]) {
    assert.equal(source.split(before).length, 2, `${file}: exactly one retired-promotion anchor`);
    source = source.replace(before, after);
  }
  return source;
}
module.exports = { approvedExpiredOfferRemoval };
