import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import clarity from './november-clarity-expectations.cjs';
import { attrs, text, tokens } from '../scripts/seo-content-audit.mjs';

test('six exact source amendments preserve every other byte and reject partial changes', async () => {
  assert.deepEqual(Object.keys(clarity.fixture.sources).sort(), [
    'app/sitemap.ts', 'components/ServiceDetailTemplate.tsx', 'lib/domestic-service-content.ts',
    'lib/published-article-content.ts', 'lib/service-page-improvements.ts', 'lib/service-practical-guidance.ts'
  ]);
  for (const [file, pin] of Object.entries(clarity.fixture.sources)) {
    const current = (await readFile(file, 'utf8')).replace(/\r\n/g, '\n');
    assert.equal(clarity.hash(current), pin.after, `${file}: complete reviewed result`);
    assert.equal(clarity.hash(clarity.historicalSource(file, current)), pin.before, `${file}: unchanged prior source`);
    const unrelated = `${current}\n// Unreviewed change\n`;
    assert.equal(clarity.historicalSource(file, unrelated), unrelated, `${file}: unrelated edits cannot project`);
  }
  const file = 'lib/published-article-content.ts';
  const current = (await readFile(file, 'utf8')).replace(/\r\n/g, '\n');
  const first = clarity.fixture.sources[file].changes[0];
  const partial = current.replace(first.after, first.before);
  assert.equal(clarity.historicalSource(file, partial), partial, 'one article edit cannot stand in for both reviewed changes');
});

test('only two English article sentences change; Arabic, references and publication dates are preserved', async () => {
  const source = await readFile('lib/published-article-content.ts', 'utf8');
  const articles = JSON.parse(source.split('export const publishedArticles: PublishedArticleContent[] = ')[1].trim().replace(/;$/, ''));
  const publishedBaseline = JSON.parse(await readFile('tests/fixtures/published-article-content.json', 'utf8'));
  assert.equal(articles.length, 37);
  assert.deepEqual(Object.keys(clarity.fixture.records).sort(), ['domestic-worker-contracts-renewal', 'domestic-worker-employer-eligibility-documents']);
  assert.deepEqual(Object.keys(clarity.fixture.articleText).sort(), Object.keys(clarity.fixture.records).map(slug => `en/${slug}`).sort());
  for (const [slug, pin] of Object.entries(clarity.fixture.records)) {
    const visiblePin = clarity.fixture.articleText[`en/${slug}`];
    assert.equal(visiblePin.before, publishedBaseline.find(article => article.slug === slug).en.visible_sha256, `${slug}: immutable original rendered manuscript`);
    assert.deepEqual(visiblePin.changes, [pin.change], `${slug}: the same single approved sentence in rendered text`);
    const article = articles.find(record => record.slug === slug);
    assert.equal(clarity.hash(JSON.stringify(article)), pin.after, `${slug}: exact complete current record`);
    const before = clarity.historicalRecord(article, 'published');
    assert.equal(clarity.hash(JSON.stringify(before)), pin.before, `${slug}: exact complete prior record`);
    assert.deepEqual(article.ar, before.ar);
    assert.equal(article.published, before.published);
    assert.equal(article.updated, before.updated);
    assert.deepEqual(article.en.references, before.en.references);
    const unrelated = { ...article, en: { ...article.en, body: article.en.body + ' Unreviewed copy' } };
    assert.equal(clarity.historicalRecord(unrelated, 'published'), unrelated, `${slug}: unrelated edits cannot project`);
  }
});

test('six affected pages render the exact scoped copy with unchanged metadata, headings and structured data', async () => {
  assert.deepEqual(Object.keys(clarity.fixture.pages).sort(), [
    'https://inayadomestic.ae/ar/services/executive-nannies/',
    'https://inayadomestic.ae/en/blog/domestic-worker-contracts-renewal/',
    'https://inayadomestic.ae/en/blog/domestic-worker-employer-eligibility-documents/',
    'https://inayadomestic.ae/en/services/executive-nannies/',
    'https://inayadomestic.ae/en/services/maid-visa/',
    'https://inayadomestic.ae/en/services/nanny/'
  ]);
  for (const [url, pin] of Object.entries(clarity.fixture.pages)) {
    const html = await readFile(`out${new URL(url).pathname}index.html`, 'utf8');
    const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
    const main = body.slice(body.indexOf('<main'), body.lastIndexOf('</main>') + 7).replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/g, '');
    const page = { url, mainText: text(main) };
    assert.equal(clarity.hash(page.mainText), pin.after, `${url}: exact visible amendment`);
    assert.equal(clarity.hash(clarity.historicalPage(page).mainText), pin.before, `${url}: all other wording preserved`);
    const unrelated = { ...page, mainText: page.mainText + ' Unreviewed page edit' };
    assert.equal(clarity.historicalPage(unrelated), unrelated);
    const metas = [...html.matchAll(/<meta\b([^>]*)>/g)].map(match => attrs(match[1]));
    assert.equal(text(html.match(/<title>([\s\S]*?)<\/title>/)[1]), pin.title);
    assert.equal(metas.find(meta => meta.name === 'description').content, pin.description);
    assert.deepEqual([...body.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map(match => text(match[1])), pin.h1);
    const graph = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter(match => attrs(match[1]).type === 'application/ld+json').map(match => JSON.parse(match[2]));
    assert.equal(clarity.hash(JSON.stringify(graph)), pin.graphSha256, `${url}: every FAQ and structured-data value unchanged`);
    if (url.includes('/services/executive-nannies/')) {
      const locale = new URL(url).pathname.split('/')[1];
      const section = [...main.matchAll(/<section\b[^>]*>([\s\S]*?)<\/section>/g)].find(match => text(match[1]).includes(clarity.fixture.executiveMatchingTitle[locale]))?.[1];
      assert.ok(section, `${url}: exact executive matching section`);
      assert.equal((section.match(/<article\b/g) || []).length, 6, `${url}: six individual role criteria`);
      assert.doesNotMatch(section, /<img\b|\/images\/countries\//, `${url}: no nationality image paired with individual criteria`);
      const links = [...section.matchAll(/<a\b([^>]*)>/g)].map(match => attrs(match[1]).href);
      assert.deepEqual(links, Array(6).fill(`/${locale}/booking/?service=executive-nannies`), `${url}: existing selected-service enquiry destinations`);
    }
  }
});

test('only exact nanny and eligibility paragraphs project to unchanged commercial-placement snapshots', async () => {
  const nannyUrl = 'https://inayadomestic.ae/en/services/nanny/';
  const eligibilitySlug = 'domestic-worker-employer-eligibility-documents';
  const eligibilityUrl = `https://inayadomestic.ae/en/blog/${eligibilitySlug}/`;
  assert.deepEqual(Object.keys(clarity.fixture.commercialParagraphs), [nannyUrl, eligibilityUrl]);
  for (const url of [nannyUrl, eligibilityUrl]) {
    const html = await readFile(`out${new URL(url).pathname}index.html`, 'utf8');
    const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
    const main = body.slice(body.indexOf('<main'), body.lastIndexOf('</main>') + 7).replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/g, '');
    const paragraphs = [...main.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].map(match => tokens(text(match[1])).join(' ')).filter(value => value.length >= 60 && tokens(value).length >= 8);
    const page = { url, mainText: text(main), paragraphs };
    const pin = clarity.fixture.commercialParagraphs[url];
    assert.equal(clarity.hash(page.mainText), clarity.fixture.pages[url].after);
    assert.equal(clarity.hash(JSON.stringify(paragraphs)), pin.after);
    const previous = clarity.historicalCommercialParagraphs(page);
    assert.equal(clarity.hash(JSON.stringify(previous.paragraphs)), pin.before);
    assert.equal(previous.mainText, page.mainText, 'commercial comparison does not rewrite current visible text');
    assert.deepEqual(pin.changes.map(change => change.index), url === nannyUrl ? [11, 35] : [14]);
    const sentence = url === nannyUrl ? clarity.fixture.sources['lib/service-practical-guidance.ts'].changes[0] : clarity.fixture.articleSentences.find(item => item.slug === eligibilitySlug);
    for (const change of pin.changes) {
      assert.equal(change.after.split(tokens(sentence.after).join(' ')).length, 2);
      assert.equal(change.after.replace(tokens(sentence.after).join(' '), tokens(sentence.before).join(' ')), change.before);
    }
    const partial = [...paragraphs];
    partial[pin.changes[0].index] = pin.changes[0].before;
    for (const changed of [
      { ...page, paragraphs: partial },
      { ...page, paragraphs: [...paragraphs, paragraphs[pin.changes[0].index]] },
      { ...page, paragraphs: paragraphs.map((value, index) => index === 0 ? value + ' unreviewed copy' : value) },
      { ...page, mainText: page.mainText + ' Unreviewed copy' },
      { ...page, url: url.replace('/en/', '/ar/') }
    ]) assert.equal(clarity.historicalCommercialParagraphs(changed), changed, 'unknown, partial and duplicated paragraphs cannot project');
  }
});
