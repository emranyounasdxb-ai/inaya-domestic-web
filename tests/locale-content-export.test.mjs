import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import additions from './four-guides-addition-expectations.cjs';
import { authoredSegments, localeViolations, originalReviews } from './locale-content-expectations.mjs';

test('all 292 full page bodies and accessible labels keep the page language with narrowly bounded proper-name exceptions', async () => {
  const sitemap = await readFile('out/sitemap.xml', 'utf8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
  additions.assertInventory(urls);
  const counts = { en: 0, ar: 0 };
  let textNodes = 0;
  let accessibleLabels = 0;
  const problems = [];
  for (const url of urls) {
    const route = new URL(url).pathname;
    const locale = route.split('/')[1];
    assert.ok(locale === 'en' || locale === 'ar');
    counts[locale]++;
    const html = await readFile(path.join('out', route.slice(1), 'index.html'), 'utf8');
    assert.ok(new RegExp(`<html\\b[^>]*lang="${locale}"`).test(html), `${route}: declared page language`);
    const segments = authoredSegments(html);
    assert.ok(segments.length > 30, `${route}: full body was inspected`);
    textNodes += segments.filter(segment => segment.kind === 'text').length;
    accessibleLabels += segments.filter(segment => segment.kind !== 'text').length;
    problems.push(...localeViolations(html, locale, route).map(segment => ({ route, ...segment })));
  }
  assert.deepEqual(counts, { en: additions.canonicalCount / 2, ar: additions.canonicalCount / 2 });
  assert.ok(textNodes > 20000);
  assert.ok(accessibleLabels > 3000);
  assert.deepEqual(problems, [], `Untranslated authored text or accessible labels:\n${JSON.stringify(problems, null, 2)}`);
  console.log(`Locale guard inspected ${textNodes} authored text nodes and ${accessibleLabels} accessible labels across all ${additions.canonicalCount} pages.`);
});

test('the original review exception preserves exactly six real quoted comments and names only on the Arabic homepage', async () => {
  assert.equal(originalReviews.length, 6);
  const source = await readFile('lib/curated-google-reviews.ts', 'utf8');
  const homepage = authoredSegments(await readFile('out/ar/index.html', 'utf8')).filter(segment => segment.kind === 'text').map(segment => segment.value);
  for (const [index, review] of originalReviews.entries()) {
    assert.ok(source.includes(review.name));
    assert.ok(source.includes(review.text));
    assert.equal(homepage.filter(value => value === review.name).length, index < 3 ? 2 : 1, 'one original plus only the existing first-three carousel clones');
    assert.equal(homepage.filter(value => value === review.text).length, index < 3 ? 2 : 1);
  }
  const quoteNodes = authoredSegments(await readFile('out/ar/index.html', 'utf8')).filter(segment => originalReviews.some(review => review.text === segment.value));
  assert.equal(quoteNodes.length, 9);
  assert.ok(quoteNodes.every(segment => segment.tag === 'blockquote' && segment.lang === 'en' && segment.closedOriginalReview), 'only verbatim originals inside closed, explicitly identified English-language disclosures are exempt');
  const arHomepage = await readFile('out/ar/index.html', 'utf8');
  assert.equal((arHomepage.match(/ترجمة عربية للتقييم الأصلي/g) ?? []).length, 9, 'every original review has a clearly labelled Arabic translation');
});

test('locale guards reject ordinary mixed prose, accessible labels and expanded quotation exceptions without skipping main or hidden UI', () => {
  const wrap = body => `<html lang="ar"><body>${body}</body></html>`;
  assert.equal(localeViolations(wrap('<main><p>عناية على Google</p></main>'), 'ar', '/ar/').length, 0);
  for (const body of ['<main><p>Google offers the best service</p></main>', '<main><p>INAYA book now</p></main>', '<nav><span class="sr-only">Open menu</span></nav>', '<footer title="Contact us">عناية</footer>', '<img alt="INAYA call now"/>', '<input placeholder="Your name"/>', '<input type="submit" value="Send"/>', '<p>UNREVIEWED ACRONYM</p>']) {
    assert.ok(localeViolations(wrap(body), 'ar', '/ar/').length > 0, body);
  }
  const exactQuote = `<details data-original-review="true"><summary>عرض التقييم الأصلي</summary><blockquote lang="en">${originalReviews[0].text}</blockquote></details>`;
  assert.equal(localeViolations(wrap(exactQuote), 'ar', '/ar/').length, 0);
  assert.ok(localeViolations(wrap(exactQuote), 'ar', '/ar/about/').length > 0);
  assert.ok(localeViolations(wrap(exactQuote.replace('<details ', '<details open ')), 'ar', '/ar/').length > 0);
  assert.ok(localeViolations(wrap(exactQuote.replace(' lang="en"', '')), 'ar', '/ar/').length > 0);
  assert.ok(localeViolations(wrap(exactQuote.replace(' data-original-review="true"', '')), 'ar', '/ar/').length > 0);
  assert.ok(localeViolations(wrap(`<blockquote>${originalReviews[0].text} Book now</blockquote>`), 'ar', '/ar/').length > 0);
  assert.ok(localeViolations(wrap('<a aria-label="القائمة">Menu</a>'), 'en', '/en/').length > 0);
  assert.equal(localeViolations(wrap('<script>const x="Not visible prose"</script><p>عناية</p>'), 'ar', '/ar/').length, 0);
});
