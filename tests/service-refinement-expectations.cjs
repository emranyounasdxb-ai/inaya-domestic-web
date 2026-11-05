const assert = require('node:assert/strict');
const contactRail = require('./contact-rail-expectations.cjs');
const ajmanContacts = require('./ajman-faq-contact-expectations.cjs');
const locationPages = require('./location-page-revisions-expectations.cjs');
const {createHash} = require('node:crypto');
const fixture = require('./fixtures/service-refinement-20261030.json');
const sha = value => createHash('sha256').update(value).digest('hex');
const stable = value => Array.isArray(value) ? value.map(stable) : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map(k=>[k,stable(value[k])])) : value;
function removeLaterSitemapUpdates(file, source) {
  source=source.replace(/\r\n/g,'\n');
  if (file === 'app/sitemap.ts') {
    const novemberLastmods = `  // Only routes with substantive edits in the 2 November release are marked current.\n  'maid-services-ajman': '2026-11-02',\n  'maid-services-dubai': '2026-11-02',\n  'maid-services-sharjah': '2026-11-02',\n  'maid-services-abu-dhabi': '2026-11-02',\n  'maid-services-ras-al-khaimah': '2026-11-02',\n  'maid-services-fujairah': '2026-11-02',\n  'maid-services-umm-al-quwain': '2026-11-02',\n  'pricing': '2026-11-02'\n`;
    if (!source.includes(novemberLastmods)) return source;
    assert.equal(source.split(novemberLastmods).length, 2, `${file}: exact 2 November sitemap timestamps`);
    source = source.replace(novemberLastmods, '');
    const historicalLocationLastmods = `  "inaya-advantages": '2026-10-19',\n  "refund-policy": '2026-10-19',`;
    const restoredLocationLastmods = `  "inaya-advantages": '2026-10-19',\n  "maid-services-ajman": '2026-10-28',\n  "maid-services-dubai": '2026-10-22',\n  "maid-services-sharjah": '2026-10-22',\n  "pricing": '2026-10-23',\n  "refund-policy": '2026-10-19',`;
    assert.equal(source.split(historicalLocationLastmods).length, 2, `${file}: known pre-release location timestamps`);
    source = source.replace(historicalLocationLastmods, restoredLocationLastmods);
    const currentTrailingComma = `  'blog/housemaid-recruitment-ajman-candidate-evidence-cards': '2026-10-30',\n};`;
    const historicalFinalEntry = `  'blog/housemaid-recruitment-ajman-candidate-evidence-cards': '2026-10-30'\n};`;
    assert.equal(source.split(currentTrailingComma).length, 2, `${file}: current final entry comma`);
    source = source.replace(currentTrailingComma, historicalFinalEntry);
  }
  return source;
}
function checkpointSource(file, source) {
  return removeLaterSitemapUpdates(file, require('./bilingual-seo-draft-expectations.cjs').historicalSource(file, source));
}
function historicalSource(file, source) {
  source=require('./bilingual-seo-draft-expectations.cjs').historicalSource(file,source);
  source=require('./reduced-motion-expectations.cjs').historicalSource(file,source);
  source=require('./editorial-scope-expectations.cjs').historicalSource(file,source);
  source=locationPages.historicalSource(file,source);
  source=ajmanContacts.historicalSource(file,source);
  source=contactRail.historicalSource(file,source);
  source=removeLaterSitemapUpdates(file, source);
  const pin=fixture.sources[file];
  if(!pin || pin.before===null || sha(source)===pin.beforeSha256) return source;
  assert.equal(sha(source),pin.afterSha256,`${file}: exact reviewed service refinement`);
  assert.equal(sha(pin.before),pin.beforeSha256,`${file}: immutable prior release`);return pin.before;
}
function historicalRecord(record, family, field='record') {
  const pin=fixture.records[record.slug]; if(!pin || family!=='keyword' || !pin[field]) return record;
  if(JSON.stringify(stable(record))===JSON.stringify(stable(pin[field].before))) return record;
  assert.deepEqual(record,pin[field].after,`${record.slug}: exact reviewed service refinement ${field}`);return structuredClone(pin[field].before);
}
function currentRecord(slug,previous,field='record'){return fixture.records[slug]?.[field]?.after??previous;}
function reviewedPage(page) { page=require('./bilingual-seo-draft-expectations.cjs').historicalPage(page);page=require('./editorial-scope-expectations.cjs').historicalPage(page);const pin=require('./fixtures/service-refinement-rendered-20261030.json').pages[page.url];if(pin)assert.equal(sha(page.mainText),pin.mainTextSha256,`${page.url}: exact reviewed service refinement output`);return pin; }
function pageBefore(url,title,description){const pin=require('./fixtures/service-refinement-rendered-20261030.json').pages[url]?.metadata;if(!pin)return{title,description};assert.deepEqual({title,description},pin.after,`${url}: exact reviewed readable metadata`);return pin.before;}
module.exports={fixture,sha,pageBefore,checkpointSource,historicalSource,historicalRecord,currentRecord,reviewedPage};
