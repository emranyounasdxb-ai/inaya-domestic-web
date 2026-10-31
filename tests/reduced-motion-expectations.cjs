const assert=require('node:assert/strict');
const {createHash}=require('node:crypto');
const fixture=require('./fixtures/reduced-motion-20261031.json');
const sha=value=>createHash('sha256').update(value).digest('hex');
function historicalSource(file,source){
  if(file!==fixture.file)return source;
  source=source.replace(/\r\n/g,'\n');
  if(sha(source)===fixture.beforeSha256)return source;
  assert.equal(sha(source),fixture.afterSha256,`${file}: exact reviewed motion-preference amendment`);
  assert.equal(source.split(fixture.after).length,2,'one scoped reduced-motion rule');
  const restored=source.replace(fixture.after,fixture.before);
  assert.equal(sha(restored),fixture.beforeSha256,'every other stylesheet byte remains protected');
  return restored;
}
module.exports={fixture,sha,historicalSource};
