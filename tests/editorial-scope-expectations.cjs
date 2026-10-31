const assert = require('node:assert/strict');
const {createHash} = require('node:crypto');
const fixture = require('./fixtures/editorial-scope-20261031.json');
const sha = value => createHash('sha256').update(value).digest('hex');

function historicalSource(file, source) {
  source=source.replace(/\r\n/g,'\n');
  const pin=fixture.sources[file];
  if(!pin || sha(source)===pin.before)return source;
  assert.equal(sha(source),pin.after,`${file}: exact reviewed editorial-scope amendment`);
  for(const [before,after] of pin.changes) {
    assert.equal(source.split(after).length,2,`${file}: one exact scoped replacement`);
    source=source.replace(after,before);
  }
  assert.equal(sha(source),pin.before,`${file}: all other template bytes unchanged`);
  return source;
}

function noteText(locale,careers=false) {
  const copy=fixture.copy[locale];
  return [copy.title,careers?copy.careersBody:copy.body,careers?copy.careersLink:copy.link].join(' ');
}

function historicalPage(page) {
  const match=new URL(page.url).pathname.match(/^\/(en|ar)\/blog\/([^/]+)\/$/);
  if(!match)return page;
  const note=noteText(match[1],match[2]==='inaya-office-staff-careers-ajman');
  if(!page.mainText.includes(note))return page;
  assert.equal(page.mainText.split(note).length,2,`${page.url}: one exact publication note`);
  let mainText=page.mainText.replace(note,'').replace(/\s+/g,' ').trim();
  const attribution=fixture.attributions[page.url];
  if(attribution) {
    assert.equal(mainText.split(attribution.after).length,2,`${page.url}: dates and company byline preserved`);
    mainText=mainText.replace(attribution.after,attribution.before);
  }
  return {...page,mainText};
}

module.exports={fixture,sha,historicalSource,historicalPage,noteText};
