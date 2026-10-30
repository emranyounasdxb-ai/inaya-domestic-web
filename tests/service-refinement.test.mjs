import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createRequire,Module} from 'node:module';
import path from 'node:path';
import test from 'node:test';
import refinement from './service-refinement-expectations.cjs';
import {auditExport,attrs,text,tokens} from '../scripts/seo-content-audit.mjs';
const require=createRequire(import.meta.url);const ts=require('typescript');
const clean=s=>s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g,'');
function load(source,file){const target=path.resolve(file);const compiled=new Module(target);compiled.filename=target;compiled._compile(ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,target);return compiled.exports;}
const benefits=load(await readFile('lib/service-support-benefits.ts','utf8'),'lib/service-support-benefits.ts').serviceSupportBenefits;

test('exact scoped support refinement preserves prior checkpoints and rejects unreviewed mutations',async()=>{
 for(const[file,pin]of Object.entries(refinement.fixture.sources)){
  const source=(await readFile(file,'utf8')).replace(/\r\n/g,'\n');assert.equal(refinement.sha(source),pin.afterSha256);
  if(pin.before!==null){assert.equal(refinement.historicalSource(file,source),pin.before);assert.throws(()=>refinement.historicalSource(file,source+'\n//unreviewed\n'),/exact reviewed/);}
 }
 for(const[slug,pin]of Object.entries(refinement.fixture.records)){
  assert.equal(pin.record.after.slug,slug);assert.equal(pin.record.after.published,pin.record.before.published);
  assert.deepEqual(refinement.historicalRecord(pin.record.after,'keyword'),pin.record.before);
  for(const lang of ['en','ar']){
   const old=pin.record.before[lang],current=pin.record.after[lang];
   assert.deepEqual(current.references,old.references,'all official references preserved');
   assert.deepEqual([...current.body.matchAll(/https?:\/\/[^\s)]+/g)].map(m=>m[0]),[...old.body.matchAll(/https?:\/\/[^\s)]+/g)].map(m=>m[0]),'every original link destination and order preserved');
   assert.deepEqual(current.visuals.map(v=>[v.id,v.kind]),old.visuals.map(v=>[v.id,v.kind]),'all original diagrams retained');
   assert.equal((current.body.match(/^## /gm)??[]).length,(old.body.match(/^## /gm)??[]).length,'no manuscript sections removed');
   assert.doesNotMatch(current.title,/ledger|evidence cards|بطاقات الأدلة/i);
  }
 }
});

test('every one of the31 services renders three distinct bilingual support points without the generic comparison',async()=>{
 assert.deepEqual(Object.keys(benefits).sort(),refinement.fixture.serviceSlugs.slice().sort());
 for(const lang of ['en','ar']){
  const unique=[];
  for(const slug of refinement.fixture.serviceSlugs){
   const html=clean(await readFile(`out/${lang}/services/${slug}/index.html`,'utf8'));const section=html.match(new RegExp(`<section\\b[^>]*data-service-benefits="${slug}"[^>]*>([\\s\\S]*?)<\\/section>`))?.[1];assert.ok(section,`${lang}/${slug}: actual specific benefits section`);
   assert.equal(benefits[slug].length,3);assert.equal((section.match(/<li\b/g)??[]).length,3);assert.doesNotMatch(section,/min-w-\[760px\]|Duty scope|List the work needed|Explain the current situation|نقطة المراجعة|تفاصيل المنزل/);
   const visible=tokens(text(section)).join(' ');
   for(const item of benefits[slug]){assert.ok(visible.includes(tokens(item.title[lang]).join(' ')));assert.ok(visible.includes(tokens(item.text[lang]).join(' ')));unique.push(item.text[lang]);}
   assert.match(html,/href="tel:\+97167400128"/);assert.match(html,/href="https:\/\/wa.me\/971502036767"/);
  }
  assert.equal(new Set(unique).size,93,`${lang}: no repeated generic support paragraph`);
 }
});

test('only the two existing article pairs get simpler headings and search descriptions',async()=>{
 for(const[slug,pin]of Object.entries(refinement.fixture.records))for(const lang of ['en','ar']){
  const html=clean(await readFile(`out/${lang}/blog/${slug}/index.html`,'utf8'));const copy=pin.record.after[lang];assert.equal(text(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)[1]),copy.title);
  const metas=[...html.matchAll(/<meta\b([^>]*)>/g)].map(m=>attrs(m[1]));assert.equal(metas.find(m=>m.name==='description').content,copy.description);
  assert.match(html,new RegExp(`href="https://inayadomestic.ae/${lang}/blog/${slug}/"`),'existing canonical URL');
 }
});

test('complete published inventory and image discovery remain intact',async()=>{
 const audit=await auditExport();assert.equal(audit.pages.length,294);assert.deepEqual(audit.orphans,[]);for(const page of audit.pages)refinement.reviewedPage(page);
 const sitemap=await readFile('out/sitemap.xml','utf8');assert.equal(new Set([...sitemap.matchAll(/<image:loc>(.*?)<\/image:loc>/g)].map(m=>m[1])).size,116);
 for(const route of refinement.fixture.datedRoutes)for(const lang of ['en','ar']){
  const url=`https://inayadomestic.ae/${lang}/${route}/`;const block=[...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].find(m=>m[1].includes(`<loc>${url}</loc>`));assert.ok(block?.[1].includes('<lastmod>2026-10-30</lastmod>'));
 }
});
