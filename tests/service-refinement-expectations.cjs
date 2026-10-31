const assert = require('node:assert/strict');
const contactRail = require('./contact-rail-expectations.cjs');
const ajmanContacts = require('./ajman-faq-contact-expectations.cjs');
const {createHash} = require('node:crypto');
const fixture = require('./fixtures/service-refinement-20261030.json');
const sha = value => createHash('sha256').update(value).digest('hex');
const stable = value => Array.isArray(value) ? value.map(stable) : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map(k=>[k,stable(value[k])])) : value;
function historicalSource(file, source) {
  source=ajmanContacts.historicalSource(file,source);
  source=contactRail.historicalSource(file,source);
  source=source.replace(/\r\n/g,'\n'); const pin=fixture.sources[file];
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
function reviewedPage(page) { const pin=require('./fixtures/service-refinement-rendered-20261030.json').pages[page.url];if(pin)assert.equal(sha(page.mainText),pin.mainTextSha256,`${page.url}: exact reviewed service refinement output`);return pin; }
function pageBefore(url,title,description){const pin=require('./fixtures/service-refinement-rendered-20261030.json').pages[url]?.metadata;if(!pin)return{title,description};assert.deepEqual({title,description},pin.after,`${url}: exact reviewed readable metadata`);return pin.before;}
module.exports={fixture,sha,pageBefore,historicalSource,historicalRecord,currentRecord,reviewedPage};
