import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import amendment from './semrush-content-expectations.cjs';
import { extractContract, auditParagraphs } from './semrush-content-contract.mjs';
import { attrs, text } from '../scripts/seo-content-audit.mjs';

const { fixture, hash } = amendment;
const digest = value => hash(JSON.stringify(value));
const htmlFor = url => readFile(`out${new URL(url).pathname}index.html`, 'utf8');
const changedRoutes = [
  'en/', 'en/services/', 'en/maid-services-ajman/', 'en/maid-services-sharjah/',
  'en/maid-source-countries/indonesian-maid-uae/', 'en/services/live-out-maid/',
  'ar/services/live-out-maid/', 'en/services/full-time-maid/', 'en/services/part-time-maid/', 'en/services/private-chefs/'
];

test('seventeen exact source amendments preserve prior checkpoints and reject partial or unrelated edits', async () => {
  assert.equal(Object.keys(fixture.sources).length, 15);
  assert.deepEqual(Object.keys(fixture.newSources).sort(), ['components/IndonesianHouseholdGuide.tsx', 'components/PrivateChefPlanningGuide.tsx']);
  for (const [file, pin] of Object.entries(fixture.sources)) {
    const source = (await readFile(file, 'utf8')).replace(/\r\n/g, '\n');
    assert.equal(hash(source), pin.after, `${file}: complete reviewed source`);
    assert.equal(hash(amendment.historicalSource(file, source)), pin.before, `${file}: unchanged immutable prior source`);
    const [offset, length, previous] = pin.patches[0];
    const partial = source.slice(0, offset) + previous + source.slice(offset + length);
    for (const mutated of [source + '\n// Unreviewed edit\n', partial]) {
      assert.equal(amendment.historicalSource(file, mutated), mutated, `${file}: incomplete or unknown amendments remain visible`);
    }
  }
  for (const [file, expected] of Object.entries(fixture.newSources)) assert.equal(hash((await readFile(file, 'utf8')).replace(/\r\n/g, '\n')), expected, file);
});

test('all 294 page contracts preserve every unassigned page, all blogs and the preceding live-in release', async () => {
  assert.deepEqual(Object.keys(fixture.pages).sort(), changedRoutes.map(route => `https://inayadomestic.ae/${route}`).sort());
  assert.equal(Object.keys(fixture.pageContracts).length, 294);
  const sitemap = await readFile('out/sitemap.xml', 'utf8');
  assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]).sort(), Object.keys(fixture.pageContracts).sort());
  let unchanged = 0;
  for (const [url, pin] of Object.entries(fixture.pageContracts)) {
    const page = extractContract(await htmlFor(url));
    assert.equal(digest(page), pin.afterSha256 ?? pin.beforeSha256, `${url}: exact text, links, headings, images, head and JSON-LD contract`);
    if (!pin.afterSha256) { unchanged++; continue; }
    assert.equal(hash(page.mainText), fixture.pages[url].after, url);
    assert.equal(hash(amendment.historicalPage({ url, ...page }).mainText), fixture.pages[url].before, `${url}: every prior word outside approved changes retained`);
    const mutated = { url, ...page, mainText: page.mainText + ' Unreviewed change' };
    assert.equal(amendment.historicalPage(mutated), mutated);
    assert.equal(amendment.historicalPage({ url: url + '?unexpected=1', mainText: page.mainText }).mainText, page.mainText);
    const [offset, length, previous] = fixture.pages[url].patches[0];
    const partial = { url, mainText: page.mainText.slice(0, offset) + previous + page.mainText.slice(offset + length) };
    assert.equal(amendment.historicalPage(partial), partial);
    const metadata = { title: page.title, description: page.description };
    const priorMetadata = amendment.historicalMetadata(url, metadata);
    if (fixture.metadata[url]) assert.equal(hash(JSON.stringify(priorMetadata)), fixture.metadata[url].before);
    const changedMetadata = { ...metadata, description: metadata.description + ' Unreviewed claim' };
    assert.equal(amendment.historicalMetadata(url, changedMetadata), changedMetadata);
    const heading = amendment.historicalHeading(url, page.h1[0]);
    if (fixture.headings[url]) assert.equal(hash(heading), fixture.headings[url].before);
    assert.equal(amendment.historicalHeading(url, page.h1[0] + ' extra'), page.h1[0] + ' extra');
  }
  assert.equal(unchanged, 284);
  assert.equal(Object.keys(fixture.metadata).length, 5);
});

test('only thirteen exact derived location schema fields change; all other structured data remains intact', async () => {
  assert.deepEqual(Object.keys(fixture.graphChanges).sort(), [
    'https://inayadomestic.ae/en/maid-services-ajman/', 'https://inayadomestic.ae/en/maid-services-sharjah/'
  ]);
  const sharedPaths = [
    [0, '@graph', 2, 'name'], [0, '@graph', 2, 'description'], [0, '@graph', 3, 'itemListElement', 2, 'name'],
    [0, '@graph', 4, 'name'], [0, '@graph', 4, 'serviceType'], [0, '@graph', 4, 'description']
  ];
  for (const url of Object.keys(fixture.pages)) {
    const contract = extractContract(await htmlFor(url));
    const pin = fixture.details[url], graph = structuredClone(contract.graph), changes = fixture.graphChanges[url] ?? [];
    assert.equal(digest(graph), pin.graphAfter);
    if (changes.length) {
      assert.deepEqual(changes.map(change => change.path), url.endsWith('/maid-services-ajman/') ? [...sharedPaths, [0, '@graph', 5, 'mainEntity', 14, 'acceptedAnswer', 'text']] : sharedPaths);
      assert.equal(graph[0]['@graph'][2]['@type'], 'WebPage');
      assert.equal(graph[0]['@graph'][3]['@type'], 'BreadcrumbList');
      assert.equal(graph[0]['@graph'][4]['@type'], 'Service');
    }
    for (const { path, before, after } of changes) {
      const parent = path.slice(0, -1).reduce((value, key) => value[key], graph), key = path.at(-1);
      assert.equal(parent[key], after); assert.equal(typeof after, 'string');
      parent[key] = before;
    }
    assert.equal(digest(graph), pin.graphBefore, `${url}: original Organization, IDs, terms, FAQs and other schema preserved`);
  }
});

test('additions retain all original copy and links; live-out keeps six criteria while removing country decorations', async () => {
  for (const route of ['en/services/', 'en/services/private-chefs/', 'en/maid-source-countries/indonesian-maid-uae/']) {
    const url = `https://inayadomestic.ae/${route}`, pin = fixture.pages[url];
    assert.ok(pin.patches.every(([, , before]) => before === ''), `${url}: purely additive visible text including retained old heading`);
  }
  for (const [url, pin] of Object.entries(fixture.details)) {
    const page = extractContract(await htmlFor(url));
    assert.equal(digest(page.mainLinks), pin.afterLinksSha256);
    const current = page.mainLinks.map(link => JSON.stringify(link));
    let cursor = 0;
    for (const original of pin.beforeLinks) {
      const link = url === 'https://inayadomestic.ae/en/' && original.text.startsWith('Visa typing ')
        ? { ...original, text: original.text.replace(/^Visa typing /, 'Maid visa typing ') } : original;
      const index = current.indexOf(JSON.stringify(link), cursor);
      assert.ok(index >= cursor, `${url}: existing link retained in order: ${original.href}`);
      cursor = index + 1;
    }
  }
  for (const baseline of fixture.liveOutMatching) {
    const html = (await htmlFor(baseline.url)).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    const section = [...html.matchAll(/<section\b[^>]*>([\s\S]*?)<\/section>/g)].find(match => text(match[1]).includes(baseline.cards[0].title))?.[1];
    assert.ok(section);
    const cards = [...section.matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/g)].map(match => match[1]);
    assert.equal(cards.length, 6);
    assert.doesNotMatch(section, /<img\b|\/images\/countries\//);
    cards.forEach((card, index) => {
      const original = baseline.cards[index];
      assert.equal(text(card.match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/)[1]), original.title);
      assert.deepEqual([...card.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].map(match => text(match[1])), [baseline.lang === 'ar' ? 'تنسيق واضح' : 'Clear coordination', original.text]);
      assert.deepEqual([...card.matchAll(/<a\b([^>]*)>/g)].map(match => attrs(match[1]).href), [original.enquiryHref]);
    });
    const page = extractContract(html), before = fixture.details[baseline.url].beforeImages;
    assert.equal(before.length - page.images.length, 6);
    const removedSources = baseline.cards.map(card => card.imageSource);
    assert.deepEqual(page.images, before.filter(image => !removedSources.some(source => image.src.split('?')[0] === source)));
  }
});

test('one exact full-time commercial paragraph projects while added editorial prose stays measured', async () => {
  const url = 'https://inayadomestic.ae/en/services/full-time-maid/';
  assert.deepEqual(Object.keys(fixture.commercialParagraphs), [url]);
  const html = await htmlFor(url), contract = extractContract(html), pin = fixture.commercialParagraphs[url];
  const page = { url, mainText: contract.mainText, paragraphs: auditParagraphs(html) };
  assert.equal(pin.changes.length, 1);
  const projected = amendment.historicalCommercialParagraphs(page);
  assert.equal(digest(projected.paragraphs), pin.before);
  assert.equal(projected.paragraphs.length, page.paragraphs.length);
  assert.ok(projected.paragraphs.some(value => value.startsWith('for a filipino maid enquiry read the philippines source guide')));
  assert.equal(projected.mainText, page.mainText);
  const partial = [...page.paragraphs]; partial[pin.changes[0].index] = pin.changes[0].before;
  for (const mutated of [
    { ...page, mainText: page.mainText + ' unrelated' }, { ...page, paragraphs: partial },
    { ...page, paragraphs: [...page.paragraphs, page.paragraphs[0]] },
    { ...page, paragraphs: page.paragraphs.map((value, index) => index ? value : value + ' unrelated') },
    { ...page, url: url.replace('/en/', '/ar/') }
  ]) assert.equal(amendment.historicalCommercialParagraphs(mutated), mutated);
});
