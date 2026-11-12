import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import test from 'node:test';
import descriptions from './search-description-expectations.cjs';
import semrush from './semrush-content-expectations.cjs';
import { contractBeforeSocialLinksUpdate } from './semrush-content-contract.mjs';
import { attrs } from '../scripts/seo-content-audit.mjs';

const require = createRequire(import.meta.url);
const { fixture, hash, digest, historicalSource, historicalContract, hasTerminalEllipsis } = descriptions;
const htmlFor = url => readFile(`out${new URL(url).pathname}index.html`, 'utf8');
const entries = Object.entries(fixture.pages);
const changed = entries.filter(([, pin]) => pin.changed);

test('the reviewed description inventory retains all 294 routes and only 52 exact amendments', () => {
  assert.equal(entries.length, 294);
  assert.equal(changed.length, 52);
  assert.equal(entries.length - changed.length, 242);
  assert.equal(changed.filter(([url]) => new URL(url).pathname.startsWith('/en/')).length, 19);
  assert.equal(changed.filter(([url]) => new URL(url).pathname.startsWith('/ar/')).length, 33);
  assert.deepEqual(Object.keys(fixture.pages).sort(), Object.keys(semrush.fixture.pageContracts).sort());
  for (const [url, pin] of entries) {
    const previous = semrush.fixture.pageContracts[url];
    assert.equal(pin.beforeContractSha256, previous.afterSha256 ?? previous.beforeSha256, `${url}: existing immutable checkpoint`);
    assert.equal(pin.changed, pin.before !== pin.after, `${url}: exact reviewed change classification`);
    assert.ok(pin.after.trim(), `${url}: nonempty description`);
    assert.equal(hasTerminalEllipsis(pin.after), false, `${url}: complete reviewed wording`);
    if (!pin.changed) assert.equal(pin.afterContractSha256, pin.beforeContractSha256, `${url}: unchanged complete contract`);
  }
});

test('only the complete reviewed metadata source projects and all earlier source checks remain exact', async () => {
  assert.deepEqual(Object.keys(fixture.sources), ['lib/page-seo.ts']);
  assert.deepEqual(Object.keys(fixture.newSources), ['lib/search-description-refinements.ts']);
  for (const [file, pin] of Object.entries(fixture.sources)) {
    const source = (await readFile(file, 'utf8')).replace(/\r\n/g, '\n');
    assert.equal(hash(source), pin.afterSha256, `${file}: complete reviewed implementation`);
    assert.equal(hash(historicalSource(file, source)), pin.beforeSha256, `${file}: exact preceding source`);
    const partial = source.replace("import { getSearchDescription } from './search-description-refinements';\n", '');
    assert.notEqual(partial, source);
    for (const mutation of [partial, source + '\n// Unreviewed source change\n']) {
      assert.equal(historicalSource(file, mutation), mutation, `${file}: partial and unrelated changes cannot project`);
    }
    assert.equal(historicalSource('lib/unreviewed.ts', source), source, 'another file cannot use this source allowance');
  }
  for (const [file, expected] of Object.entries(fixture.newSources)) {
    assert.equal(hash((await readFile(file, 'utf8')).replace(/\r\n/g, '\n')), expected, `${file}: exact reviewed descriptions and resolver`);
  }
});

test('the runtime resolver uses the exact reviewed map and preserves complete long fallbacks without clipping', async () => {
  const ts = require('typescript');
  const source = await readFile('lib/search-description-refinements.ts', 'utf8');
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } });
  const exported = {};
  vm.runInNewContext(outputText, { exports: exported, module: { exports: exported } });
  const actual = Object.entries(exported.searchDescriptionRefinements).flatMap(([route, localized]) =>
    Object.entries(localized).map(([locale, value]) => [`https://inayadomestic.ae/${locale}/${route}/`, value]));
  assert.deepEqual(actual.sort(([a], [b]) => a.localeCompare(b)), changed.map(([url, pin]) => [url, pin.after]).sort(([a], [b]) => a.localeCompare(b)));
  for (const [url, pin] of entries) {
    const [, locale, ...parts] = new URL(url).pathname.split('/');
    const route = parts.filter(Boolean).join('/');
    assert.equal(exported.getSearchDescription(locale, route, pin.before), pin.after, `${url}: reviewed override or original summary`);
  }
  const fallbacks = {
    en: 'A complete page-specific summary can contain useful qualifications without a fixed character limit. '.repeat(25) + 'Preserve this final qualification.',
    ar: 'يحتفظ وصف الصفحة الكامل بالتفاصيل والشروط المفيدة دون حد ثابت لعدد الحروف. '.repeat(25) + 'يجب الاحتفاظ بهذا الشرط الأخير.'
  };
  for (const [locale, fallback] of Object.entries(fallbacks)) {
    assert.equal(exported.getSearchDescription(locale, 'unreviewed-route', fallback), fallback, `${locale}: complete long fallback retained`);
    assert.equal(hasTerminalEllipsis(fallback), false);
  }
  assert.equal(exported.getSearchDescription('en', 'services/private-chefs', fallbacks.en), fallbacks.en, 'an Arabic-only amendment does not replace its English fallback');
});

test('terminal truncation is detected independently of arbitrary description lengths', () => {
  for (const value of ['A cut-off description…', 'A cut-off description...', 'وصف غير مكتمل…', 'A cut-off description…”  ']) {
    assert.equal(hasTerminalEllipsis(value), true, value);
  }
  for (const value of ['A complete summary.', 'ملخص كامل.', 'A source mentions … but the summary is complete.']) {
    assert.equal(hasTerminalEllipsis(value), false, value);
  }
  assert.ok(changed.some(([, pin]) => hasTerminalEllipsis(pin.before)), 'the captured literal truncation is part of this regression');
});

test('all 294 rendered pages have the reviewed three descriptions and preserve every other contract field', async () => {
  const sitemap = await readFile('out/sitemap.xml', 'utf8');
  assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]).sort(), Object.keys(fixture.pages).sort());
  for (const [url, pin] of entries) {
    const html = await htmlFor(url);
    const meta = [...html.matchAll(/<meta\b([^>]*)>/g)].map(match => attrs(match[1]));
    for (const [attribute, name] of [['name', 'description'], ['property', 'og:description'], ['name', 'twitter:description']]) {
      const values = meta.filter(item => item[attribute] === name).map(item => item.content);
      assert.deepEqual(values, [pin.after], `${url}: one complete, consistent ${name}`);
      assert.equal(hasTerminalEllipsis(values[0]), false, `${url}: no literal terminal truncation`);
    }
    const contract = contractBeforeSocialLinksUpdate(html);
    assert.equal(digest(contract), pin.afterContractSha256, `${url}: exact current contract`);
    const prior = historicalContract(url, contract);
    assert.equal(digest(prior), pin.beforeContractSha256, `${url}: all prior body, headings, links, images, title, canonical, hreflang, robots and JSON-LD fields retained`);
    if (!pin.changed) assert.equal(prior, contract, `${url}: no projection for unchanged pages`);
  }
});

test('contract projection rejects unknown URLs, partial descriptions and unrelated changes to every field', async () => {
  for (const [url, pin] of changed) {
    const contract = contractBeforeSocialLinksUpdate(await htmlFor(url));
    assert.equal(digest(contract), pin.afterContractSha256);
    const partialMetadata = { title: contract.title, description: contract.description };
    assert.equal(historicalContract(url, partialMetadata), partialMetadata, `${url}: two fields cannot authorize a projection`);
    for (const unknown of [url + '?unexpected=1', url + '#unexpected', url.replace('inayadomestic.ae', 'example.com')]) {
      assert.equal(historicalContract(unknown, contract), contract, `${unknown}: exact canonical URL required`);
    }
    for (const field of Object.keys(contract)) {
      const mutation = structuredClone(contract);
      mutation[field] = typeof mutation[field] === 'string' ? mutation[field] + ' Unreviewed change' : null;
      assert.equal(historicalContract(url, mutation), mutation, `${url}: unreviewed ${field} remains visible`);
    }
    for (const field of ['description', 'og:description', 'twitter:description']) {
      const partial = structuredClone(contract);
      if (field === 'description') partial.description = pin.before;
      else partial.sharing.find(item => item.property === field || item.name === field).content = pin.before;
      assert.equal(historicalContract(url, partial), partial, `${url}: partial ${field} update cannot project`);
    }
    const additionalField = { ...contract, unreviewed: true };
    assert.equal(historicalContract(url, additionalField), additionalField, `${url}: additional fields cannot be hidden`);
  }
});
