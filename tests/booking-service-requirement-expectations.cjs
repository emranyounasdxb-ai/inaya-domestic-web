const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');

const sha = value => createHash('sha256').update(value).digest('hex');
const renderedPins = {
  en: {
    before: '6c8c71a06c0f932c2e688c3e86c9540cab932634710fa6578b908a0580b2a013',
    current: '4ae1fd29c69cd6e7eef30ca06d9aa20d2ce6a9abeef45825b3402f33f002ef61',
  },
  ar: {
    before: '263f8847639b184d97d2e374f7eac28561fe32795c790a43dd63828268381820',
    current: '0d5e3c6efa5a36bfcace34516e105f1ac3839adf93b215baafd39e9df1e4e28d',
  },
};

function isCurrentPage(page) {
  const lang = ['en', 'ar'].find(locale => page.url === `https://inayadomestic.ae/${locale}/booking/`);
  return Boolean(lang && sha(page.mainText) === renderedPins[lang].current);
}
function historicalPage(page) {
  const lang = ['en', 'ar'].find(locale => page.url === `https://inayadomestic.ae/${locale}/booking/`);
  if (!lang) return page;
  const pin = renderedPins[lang];
  if (sha(page.mainText) === pin.before || isCurrentPage(page)) return page;
  assert.equal(sha(page.mainText), pin.current, `${page.url}: exact current reviewed booking content`);
  return page;
}

module.exports = { renderedPins, historicalPage, isCurrentPage };
