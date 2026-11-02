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
    const source = clarity.checkpointSource(file, (await readFile(file, 'utf8')).replace(/\r\n/g, '\n'));
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

test('Ajman contact amendment preserves immutable checkpoints and rejects unrelated edits', async () => {
  const contacts = require('./ajman-faq-contact-expectations.cjs');
  const cityPageRevisions = require('./location-page-revisions-expectations.cjs');
  for (const [file, pin] of Object.entries(contacts.sourcePins)) {
    const rawSource = await readFile(file, 'utf8');
    const source = cityPageRevisions.historicalSource(file, rawSource);
    assert.equal(clarity.sha(contacts.historicalSource(file, source)), pin.before);
    assert.throws(() => contacts.historicalSource(file, source + '\n// Unreviewed edit\n'), /exact reviewed/);
    if (file === cityPageRevisions.pageFile) {
      assert.equal(clarity.sha(source), cityPageRevisions.contactCheckpointSha256);
      assert.throws(() => cityPageRevisions.historicalSource(file, rawSource + '\n// Unreviewed location-page edit\n'), /exact reviewed/);
    }
  }
  for (const lang of ['en','ar']) {
    const html = clean(await readFile(`out/${lang}/maid-services-ajman/index.html`, 'utf8'));
    const main = html.slice(html.indexOf('<main'), html.lastIndexOf('</main>') + 7).replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/g, '');
    const page = { url: `https://inayadomestic.ae/${lang}/maid-services-ajman/`, mainText: text(main) };
    assert.equal(contacts.isCurrentPage(page), true, `${page.url}: exact current copy including the reviewed city options and published fee ranges`);
    assert.equal(clarity.sha(contacts.historicalPage(page).mainText), contacts.renderedPins[lang].current);
    for (const phrase of lang === 'ar'
      ? ['زيارات قصيرة', 'خدمة شهرية مُدارة', 'استقدام بعقد لمرة واحدة', 'رسوم العقد لمرة واحدة حسب الجنسية']
      : ['Short visits', 'Managed monthly service', 'One-time recruitment', 'One-time contract fees by nationality']) {
      assert.ok(page.mainText.includes(phrase), `${page.url}: ${phrase}`);
    }
    assert.throws(() => contacts.historicalPage({ ...page, mainText: page.mainText + ' Unreviewed copy' }), /exact reviewed/);
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

test('pricing pages show the reviewed nationality contract fee ranges without an unsupported approval claim', async () => {
  const audit = await auditExport();
  const expectedRanges = ['AED 15,000–22,000', 'AED 10,000–14,000', 'AED 8,500–14,000', 'AED 12,000–17,000', 'AED 11,000–15,000'];
  const nationalities = {
    en: ['Filipino', 'Ethiopian', 'Ugandan', 'Indian', 'Kenyan', 'Sri Lankan', 'Nepali', 'Bangladeshi', 'Ghanaian', 'Sierra Leonean', 'Indonesian', 'Myanmar'],
    ar: ['الفلبين', 'إثيوبيا', 'أوغندا', 'الهند', 'كينيا', 'سريلانكا', 'نيبال', 'بنغلاديش', 'غانا', 'سيراليون', 'إندونيسيا', 'ميانمار'],
  };
  for (const lang of ['en', 'ar']) {
    const url = `https://inayadomestic.ae/${lang}/pricing/`;
    const page = audit.pages.find((item) => item.url === url);
    assert.ok(page, `${url}: exported pricing page exists`);
    assert.equal(clarity.isCurrentPricingPage(page), true, `${url}: exact reviewed published-fee content`);
    assert.ok(page.mainText.includes(lang === 'ar' ? 'رسوم العقد لمرة واحدة حسب الجنسية' : 'One-time contract fees by nationality'));
    assert.ok(page.mainText.includes(lang === 'ar' ? 'تأشيرة العمل غير مشمولة' : 'A work visa is not included'));
    assert.doesNotMatch(page.mainText, /MOHRE-approved|معتمد من وزارة الموارد البشرية/);
    for (const nationality of nationalities[lang]) assert.ok(page.mainText.includes(nationality), `${url}: ${nationality} price row`);
    for (const range of expectedRanges) assert.ok(page.mainText.includes(range), `${url}: ${range}`);
  }
});

test('archive categories, career separation, complete original article inventory and exact update dates are visible', async () => {
  const audit = await auditExport();
  assert.equal(Object.keys(clarity.rendered.pages).length, 46);
  for (const page of audit.pages) clarity.assertReviewedPage(page);
  const sitemap = await readFile('out/sitemap.xml', 'utf8');
  const novemberUpdatedRoutes = new Set(['maid-services-ajman', 'maid-services-dubai', 'maid-services-sharjah', 'maid-services-abu-dhabi', 'maid-services-ras-al-khaimah', 'maid-services-fujairah', 'maid-services-umm-al-quwain', 'pricing']);
  for (const route of clarity.fixture.updatedRoutes) for (const lang of ['en','ar']) {
    const url = `https://inayadomestic.ae/${lang}/${route ? route + '/' : ''}`;
    const block = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].find(m=>m[1].includes(`<loc>${url}</loc>`));
    const expectedLastmod = novemberUpdatedRoutes.has(route) ? '2026-11-02' : '2026-10-30';
    assert.ok(block?.[1].includes(`<lastmod>${expectedLastmod}</lastmod>`), `${url}: real content update date`);
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
