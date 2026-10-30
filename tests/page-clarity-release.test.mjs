import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire, Module } from 'node:module';
import path from 'node:path';
import test from 'node:test';
import clarity from './page-clarity-expectations.cjs';
import { auditExport, attrs, text, tokens } from '../scripts/seo-content-audit.mjs';
const require = createRequire(import.meta.url);
const ts = require('typescript');
const clean = s => s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
const plain = s => tokens(s.replace(/\[([^\]]+)\]\(https:\/\/[^)]+\)/g, '$1')).join(' ');

test('page-clarity source pins allow only the complete approved changes and preserve every other checkpoint', async () => {
  for (const [file, pin] of Object.entries(clarity.fixture.sources)) {
    const source = require('./service-refinement-expectations.cjs').historicalSource(file, (await readFile(file, 'utf8')).replace(/\r\n/g, '\n'));
    assert.equal(clarity.sha(source), pin.afterSha256, `${file}: complete reviewed source`);
    if (pin.before !== null) {
      assert.equal(clarity.historicalSource(file, source), pin.before);
      assert.throws(() => clarity.historicalSource(file, source + '\n// Unreviewed change\n'), /exact reviewed/);
    }
  }
  for (const [slug, pin] of Object.entries(clarity.fixture.records)) {
    assert.equal(pin.record.after.slug, slug);
    assert.equal(pin.record.after.published, pin.record.before.published);
    assert.equal(pin.record.after.updated, '2026-10-30');
    assert.deepEqual(clarity.historicalRecord(pin.record.after, pin.family), pin.record.before);
    const altered = structuredClone(pin.record.after); altered.en.title += ' unreviewed';
    assert.throws(() => clarity.historicalRecord(altered, pin.family), /exact reviewed/);
  }
});

test('all package amounts, scope, payment and refund policies are identical to the prior release', () => {
  const file = path.resolve('lib/package-content.ts');
  const baselineModule = new Module(file); baselineModule.filename = file;
  baselineModule._compile(ts.transpileModule(clarity.fixture.sources['lib/package-content.ts'].before, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, file);
  const current = require('../.next/phase-02-unit/lib/package-content.js');
  for (const lang of ['en','ar']) assert.deepEqual(clarity.rendered.sharedCommercialParagraphs[lang], ['inclusions','payments','cancellation','replacement','followUp'].map(key => tokens(baselineModule.exports.packageSections[key].body[lang]).join(' ')), 'only five unchanged commercial policy paragraphs are classified');
  for (const key of ['managedPackages', 'packageSections', 'packageSummary', 'monthlyPackageSummary', 'packageArrangements']) {
    assert.deepEqual(current[key], baselineModule.exports[key], `${key}: no commercial or operational fact change`);
  }
});

test('all revised service copy, individual matching criteria and monthly benefits render in both languages', async () => {
  const copies = require('../.next/phase-02-unit/lib/service-page-copy-all.js').servicePageCopies;
  const packages = require('../.next/phase-02-unit/lib/package-content.js');
  for (const slug of ['part-time-maid', 'monthly-maid-contract', 'nanny', 'live-in-maid', 'maid-visa']) for (const lang of ['en','ar']) {
    const html = clean(await readFile(`out/${lang}/services/${slug}/index.html`, 'utf8'));
    const main = html.slice(html.indexOf('<main'), html.lastIndexOf('</main>'));
    const visible = tokens(text(main)).join(' '), copy = copies[slug][lang];
    for (const field of ['whatText','pricingText','journeyText','finalText']) assert.ok(visible.includes(plain(copy[field])), `${lang}/${slug}: ${field}`);
    for (const field of ['cards','countries','faqs','pricing']) for (const item of copy[field]) {
      assert.ok(visible.includes(plain(item.title)), `${lang}/${slug}: ${field} title`);
      assert.ok(visible.includes(plain(item.text)), `${lang}/${slug}: ${field} full text`);
    }
    for (const field of ['why','included','perfect']) for (const item of copy[field]) assert.ok(visible.includes(plain(item)), `${lang}/${slug}: ${field} item`);
    assert.doesNotMatch(main, /src="\/images\/countries\//, 'no nationality-based skill cards on these five pages');
    assert.equal((main.match(/Helpful Service Guide|دليل الخدمة/g) ?? []).length, 0, 'one related-service section');
    if (['monthly-maid-contract','nanny','live-in-maid'].includes(slug)) for (const point of packages.packageSections.inclusions.points[lang]) assert.ok(visible.includes(plain(point)), 'complete original monthly benefit');
    if (slug === 'maid-visa') assert.doesNotMatch(visible, /prepares details locally|يجهز البيانات محلياً/);
  }
});

test('all six package enquiries preserve selected plan, current amounts and existing backend field names', async () => {
  const values = ['Half day — 4 hours','Daily — 8 hours','Weekly — 7 days','Monthly — 30 days','6-month contract','12-month contract'];
  const plans = require('./poster-pricing-contract.cjs').expectedPlans;
  for (const lang of ['en','ar']) {
    const html = clean(await readFile(`out/${lang}/pricing/index.html`, 'utf8'));
    const cards = [...html.matchAll(/<article\b([^>]*)>([\s\S]*?)<\/article>/g)].filter(m=>attrs(m[1])['data-package']);
    for (const [index, card] of cards.entries()) {
      const link = attrs(card[2].match(/<a\b([^>]*)>/)[1]);
      const url = new URL(link.href, 'https://inayadomestic.ae');
      assert.equal(url.searchParams.get('plan'), values[index]);
      assert.equal(url.searchParams.get('service'), index < 3 ? 'part-time-maid' : 'monthly-maid-contract');
      assert.ok(text(card[2]).includes(plans[index].price[lang]));
    }
    const contact = await readFile(`out/${lang}/contact/index.html`, 'utf8');
    for (const service of ['maid-visa','home-cooking','elder-care']) assert.ok(contact.includes(`value="${service}"`));
  }
});

test('archive categories, career separation, complete original article inventory and exact update dates are visible', async () => {
  const audit = await auditExport();
  assert.equal(Object.keys(clarity.rendered.pages).length, 46);
  for (const page of audit.pages) clarity.assertReviewedPage(page);
  const sitemap = await readFile('out/sitemap.xml', 'utf8');
  for (const route of clarity.fixture.updatedRoutes) for (const lang of ['en','ar']) {
    const url = `https://inayadomestic.ae/${lang}/${route ? route + '/' : ''}`;
    const block = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].find(m=>m[1].includes(`<loc>${url}</loc>`));
    assert.ok(block?.[1].includes('<lastmod>2026-10-30</lastmod>'), `${url}: real content update date`);
  }
  for (const lang of ['en','ar']) {
    const archive = clean(await readFile(`out/${lang}/blog/index.html`, 'utf8'));
    assert.ok(archive.includes(lang === 'ar' ? 'تصفح حسب الموضوع' : 'Browse by topic'));
    assert.ok(archive.includes(lang === 'ar' ? 'وظائف المكتب' : 'Office careers'));
    const source = clean(await readFile(`out/${lang}/blog/monthly-maid-package-inclusions-checklist/index.html`, 'utf8'));
    assert.equal((source.match(/<h2\b[^>]*>[^<]*(?:Agreement and contract references|مراجع الاتفاق والشروط)<\/h2>/g) ?? []).length, 1);
    assert.ok(source.includes(`href="https://inayadomestic.ae/${lang}/pricing/"`));
  }
});
