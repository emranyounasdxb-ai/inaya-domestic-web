const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const test = require('node:test');
const guidance = require('./background-guidance-expectations.cjs');

test('only the two reviewed bilingual background summary lines amend the service source', () => {
  assert.deepEqual(Object.keys(guidance.fixture.sources), ['lib/services.ts']);
  const file = 'lib/services.ts';
  const source = readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const pin = guidance.fixture.sources[file];
  assert.equal(pin.replacements.length, 2);
  assert.equal(guidance.hash(source), pin.after);
  assert.equal(guidance.hash(guidance.historicalSource(file, source)), pin.before);
  const unrelated = source + '\n// Unreviewed source edit\n';
  assert.equal(guidance.historicalSource(file, unrelated), unrelated, 'unrelated changes cannot use the reviewed projection');
  const incomplete = source.replace(pin.replacements[0].after, pin.replacements[0].before);
  assert.equal(guidance.historicalSource(file, incomplete), incomplete, 'partial amendments cannot use the reviewed projection');
});

test('the eight affected exports change only the exact background card summaries', async () => {
  const { text } = await import('../scripts/seo-content-audit.mjs');
  const urls = Object.keys(guidance.fixture.pages);
  assert.equal(urls.length, 8);
  for (const url of urls) {
    const html = readFileSync(`out${new URL(url).pathname}index.html`, 'utf8');
    const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
    const main = body.slice(body.indexOf('<main'), body.lastIndexOf('</main>') + 7).replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/g, '');
    const page = require('./november-clarity-expectations.cjs').historicalPage({ url, mainText: text(main) });
    const pin = guidance.fixture.pages[url];
    assert.equal(guidance.hash(page.mainText), pin.after, `${url}: exact visible result`);
    assert.equal(guidance.hash(guidance.historicalPage(page).mainText), pin.before, `${url}: all other words preserved`);
    const unrelated = { ...page, mainText: page.mainText + ' Unreviewed page edit' };
    assert.equal(guidance.historicalPage(unrelated), unrelated, `${url}: unrelated text cannot use the reviewed projection`);
  }
});
