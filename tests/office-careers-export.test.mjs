import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { attrs, text } from '../scripts/seo-content-audit.mjs';

const expected = JSON.parse(await readFile('tests/fixtures/office-careers-20261029.json', 'utf8'));
const data = JSON.parse(await readFile('content/office-careers-20261029.json', 'utf8'));
test('owner-confirmed eight staff roles preserve the reviewed bilingual manuscript and application channels', async () => {
  assert.deepEqual(data, [expected.article]);
  for (const locale of ['en', 'ar']) {
    const url = `https://inayadomestic.ae/${locale}/blog/${expected.slug}/`;
    const html = await readFile(`out/${locale}/blog/${expected.slug}/index.html`, 'utf8');
    const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    const article = visible.match(/<article\b[^>]*data-published-article="content"[^>]*>([\s\S]*?)<\/article>/)?.[1];
    assert.ok(article);
    const roleHeadings = [...article.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map(m => text(m[1])).filter(h => /^\d+\. /.test(h));
    assert.equal(roleHeadings.length, 8);
    assert.deepEqual(roleHeadings, [...data[0][locale].body.matchAll(/^## (\d+\. .+)$/gm)].map(m => m[1]));
    assert.match(text(article), /info@inayadomestic\.ae/);
    assert.match(article, /href="https:\/\/wa.me\/971502036767"/);
    assert.doesNotMatch(article, /href="https:\/\/wa.me\/97167400128"/);
    assert.match(visible, /href="tel:\+97167400128"/);
    assert.match(visible, new RegExp(`href="${url}"`));
    const nodes = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter(m=>attrs(m[1]).type==='application/ld+json').flatMap(m=>JSON.parse(m[2])['@graph']??[]);
    assert.ok(nodes.some(n=>n['@type']==='Article' && n.url===url));
    assert.ok(!nodes.some(n=>n['@type']==='JobPosting'), 'no invented employment type, salary or closing date');
    const main = text(article);
    for (const fragment of ['Canva', 'CapCut']) if(locale==='en') assert.ok(main.includes(fragment));
    assert.equal([...visible.matchAll(/<h1\b/g)].length, 1);
  }
});
