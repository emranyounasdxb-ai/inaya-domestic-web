import clarity from './page-clarity-expectations.cjs';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import additions from './four-guides-addition-expectations.cjs';
import { attrs, decode } from '../scripts/seo-content-audit.mjs';

const origin = 'https://inayadomestic.ae';
const baseline = JSON.parse(await readFile('tests/fixtures/blog-guide-order-20261028.json', 'utf8'));
const routeFor = page => page === 1 ? 'blog' : `blog/page/${page}`;
const urlFor = (locale, page) => `${origin}/${locale}/${routeFor(page)}/`;
const sitemap = await readFile('out/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => decode(match[1]));
const body = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');

test('ten archive URLs retain their positions and all69 article routes remain canonical with eight new copies at the inventory tail', () => {
  const appended = [2, 3, 4, 5, 6].flatMap(page => ['en', 'ar'].map(locale => urlFor(locale, page)));
  additions.assertInventory(urls);
  assert.deepEqual(urls.slice(274, additions.originalCanonicalCount), appended);
  for (const locale of ['en', 'ar']) {
    const articles = urls.filter(url => url.startsWith(`${origin}/${locale}/blog/`) && url !== `${origin}/${locale}/blog/` && !url.includes('/blog/page/'));
    assert.deepEqual(articles.sort(), additions.blogOrderSlugs.map(slug => `${origin}/${locale}/blog/${slug}/`).sort());
    assert.ok(!urls.includes(`${origin}/${locale}/blog/page/1/`));
  }
});

test('both languages render bounded archive cards with crawlable navigation, distinct metadata and truthful index schema', async () => {
  const titles = new Set();
  for (const locale of ['en', 'ar']) {
    const seen = [];
    for (let page = 1; page <= 6; page++) {
      const route = routeFor(page);
      const html = await readFile(`out/${locale}/${route}/index.html`, 'utf8');
      const visible = body(html);
      const url = urlFor(locale, page);
      const cards = [...visible.matchAll(/<article\b([^>]*)>([\s\S]*?)<\/article>/g)]
        .filter(match => attrs(match[1])['data-blog-guide']);
      const expected = clarity.archiveOrder(additions.blogOrderSlugs.slice((page - 1) * 12, page * 12));
      assert.deepEqual(cards.map(match => attrs(match[1])['data-blog-guide']), expected, `${url}: exact four-new-plus-original65 card order`);
      for (const [index, card] of cards.entries()) {
        assert.ok(card[2].includes(`href="/${locale}/blog/${expected[index]}/"`), `${url}: crawlable article link`);
        assert.equal([...card[2].matchAll(/<img\b/g)].length, 1, `${url}: one approved photo per guide`);
      }
      seen.push(...expected);
      const nav = [...visible.matchAll(/<nav\b([^>]*)>([\s\S]*?)<\/nav>/g)]
        .find(match => attrs(match[1])['aria-label'] === (locale === 'ar' ? 'صفحات الأدلة' : 'Guide pages'));
      assert.ok(nav, `${url}: localized pagination navigation`);
      assert.equal([...nav[2].matchAll(/aria-current="page"/g)].length, 1, `${url}: one current archive page`);
      for (let target = 1; target <= 6; target++) {
        if (target !== page) assert.ok(nav[2].includes(`href="/${locale}/${routeFor(target)}/"`), `${url}: page${target} is crawlable`);
      }
      const previous = [...nav[2].matchAll(/<a\b[^>]*>/g)].map(match => attrs(match[0])).filter(link => link.rel === 'prev');
      const next = [...nav[2].matchAll(/<a\b[^>]*>/g)].map(match => attrs(match[0])).filter(link => link.rel === 'next');
      assert.deepEqual(previous.map(link => link.href), page > 1 ? [`/${locale}/${routeFor(page - 1)}/`] : []);
      assert.deepEqual(next.map(link => link.href), page < 6 ? [`/${locale}/${routeFor(page + 1)}/`] : []);
      const links = [...html.matchAll(/<link\b[^>]*>/g)].map(match => attrs(match[0]));
      assert.deepEqual(links.filter(link => link.rel === 'canonical').map(link => link.href), [url]);
      for (const language of ['en', 'ar', 'x-default']) {
        assert.deepEqual(links.filter(link => link.rel === 'alternate' && (link.hrefLang ?? link.hreflang) === language).map(link => link.href), [urlFor(language === 'x-default' ? 'en' : language, page)], `${url}: reciprocal ${language} alternate`);
      }
      const title = decode(html.match(/<title>(.*?)<\/title>/)[1]);
      assert.ok(!titles.has(title), `${url}: unique archive title`);
      assert.ok(title.length <= 70, `${url}: bounded title`);
      titles.add(title);
      const graph = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)]
        .filter(match => attrs(match[1]).type === 'application/ld+json')
        .flatMap(match => { const value = JSON.parse(match[2]); return value['@graph'] ?? [value]; });
      assert.ok(!graph.some(node => node['@type'] === 'Article'), `${url}: archive is not an Article`);
      const webPage = graph.find(node => node['@type'] === 'WebPage');
      assert.equal(webPage.url, url);
      assert.ok(!webPage.mainEntity?.['@id']?.endsWith('#article'), `${url}: no nonexistent Article entity`);
      const breadcrumb = graph.find(node => node['@type'] === 'BreadcrumbList');
      assert.equal(breadcrumb.itemListElement.at(-1).item, url);
      if (page > 1) assert.equal(breadcrumb.itemListElement.at(-2).item, urlFor(locale, 1));
    }
    assert.deepEqual(seen, clarity.archiveSequence(additions.blogOrderSlugs), `${locale}: all69 guides occur once across the archive`);
    assert.deepEqual(seen.filter(slug => !additions.newSlugs.includes(slug)), baseline.slugs, `${locale}: all65 original guides retain their relative order`);
  }
});

test('production pages use cacheable external stylesheets while retaining Next hydration', async () => {
  for (const route of ['en/', 'ar/', 'en/blog/', 'en/services/housemaid/', 'en/contact/']) {
    const html = await readFile(`out/${route}index.html`, 'utf8');
    const styles = [...html.matchAll(/<link\b[^>]*>/g)].map(match => attrs(match[0])).filter(link => link.rel === 'stylesheet');
    assert.ok(styles.length, `${route}: external stylesheet links`);
    for (const style of styles) {
      const url = new URL(style.href, origin);
      assert.equal(url.origin, origin);
      await access(path.join('out', url.pathname));
    }
    const inlineBytes = [...html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].reduce((total, match) => total + Buffer.byteLength(match[1]), 0);
    assert.ok(inlineBytes < 20000, `${route}: avoids repeating the135KB shared stylesheet in each HTML/RSC response`);
    assert.match(html, /self\.__next_f/, `${route}: framework hydration is preserved`);
  }
});
