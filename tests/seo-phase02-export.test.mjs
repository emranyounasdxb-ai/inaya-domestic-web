import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const origin = 'https://inayadomestic.ae';
const xml = await readFile('out/sitemap.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const decode = (text) => text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const text = (html) => decode(html.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map((match) => [match[1].toLowerCase(), decode(match[2])]));
const counts = { Organization: 0, LocalBusiness: 0, WebSite: 0, WebPage: 0, Service: 0, BreadcrumbList: 0, FAQPage: 0 };

test('all exported EN/AR pages have unique localized metadata, one H1, valid graphs and links', async () => {
  const titles = new Set();
  const descriptions = new Set();
  const primaryHeadings = new Set();
  assert.equal(urls.length, 140);
  for (const url of urls) {
    const pathname = new URL(url).pathname;
    const locale = pathname.split('/')[1];
    const route = pathname.split('/').slice(2).filter(Boolean).join('/');
    const html = await readFile(path.join('out', pathname.slice(1), 'index.html'), 'utf8');
    const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
    const titleTags = [...html.matchAll(/<title>([\s\S]*?)<\/title>/g)];
    assert.equal(titleTags.length, 1, url);
    const title = text(titleTags[0][1]);
    const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map((match) => attrs(match[0]));
    const meta = (key) => {
      const matches = metas.filter((entry) => entry.name === key || entry.property === key);
      assert.equal(matches.length, 1, `${url}: ${key}`);
      assert.ok(matches[0].content?.trim(), `${url}: ${key}`);
      return matches[0].content;
    };
    const description = meta('description');
    assert.ok(!titles.has(title), `${url}: duplicate title ${title}`);
    assert.ok(!descriptions.has(description), `${url}: duplicate description`);
    titles.add(title); descriptions.add(description);
    if (locale === 'ar') { assert.match(title, /[\u0600-\u06ff]/); assert.match(description, /[\u0600-\u06ff]/); }
    assert.doesNotMatch(`${title} ${description}`, /No\. ?1|#1|top-rated|الخيار الأول/i);
    assert.equal(meta('og:title'), title);
    assert.equal(meta('og:description'), description);
    assert.equal(meta('og:url'), url);
    assert.equal(meta('og:locale'), `${locale}_AE`);
    assert.equal(meta('og:locale:alternate'), locale === 'ar' ? 'en_AE' : 'ar_AE');
    assert.equal(meta('twitter:title'), title);
    assert.equal(meta('twitter:description'), description);
    assert.ok(['summary', 'summary_large_image'].includes(meta('twitter:card')));
    const images = metas.filter((entry) => ['og:image', 'twitter:image'].includes(entry.property || entry.name));
    for (const image of images) {
      const parsed = new URL(image.content);
      assert.equal(parsed.origin, origin);
      await readFile(path.join('public', parsed.pathname));
    }
    const headings = [...body.matchAll(/<h([1-3])\b[^>]*>([\s\S]*?)<\/h[1-3]>/g)];
    assert.equal(headings.filter((entry) => entry[1] === '1').length, 1, `${url}: H1`);
    const primaryHeading = text(headings.find((entry) => entry[1] === '1')[2]);
    assert.ok(!primaryHeadings.has(primaryHeading), `${url}: duplicated primary heading`);
    primaryHeadings.add(primaryHeading);
    let level = 0;
    for (const heading of headings) {
      assert.ok(text(heading[2]), `${url}: empty heading`);
      assert.ok(+heading[1] <= level + 1, `${url}: skipped heading level`);
      level = +heading[1];
    }
    for (const match of body.matchAll(/<img\b[^>]*>/g)) {
      const image = attrs(match[0]);
      assert.ok('alt' in image, `${url}: missing alt`);
      if (image.src?.includes('flagcdn.com')) assert.match(image.alt, locale === 'ar' ? /^علم / : / flag$/);
    }
    for (const match of body.matchAll(/<a\b[^>]*>/g)) {
      const href = attrs(match[0]).href;
      if (!href || href.startsWith('#') || /^(tel|mailto|javascript):/.test(href)) continue;
      const target = new URL(href, url);
      if (target.origin !== origin || target.pathname === '/') continue;
      const canonical = `${origin}${target.pathname.replace(/\/$/, '')}/`;
      assert.ok(urls.includes(canonical), `${url}: broken internal link ${href}`);
    }
    const blocks = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)]
      .filter((match) => attrs(match[1]).type === 'application/ld+json');
    assert.equal(blocks.length, route === 'faq' ? 2 : 1, `${url}: schema blocks`);
    const nodes = blocks.flatMap((block) => { const data = JSON.parse(block[2]); assert.equal(data['@context'], 'https://schema.org'); return data['@graph'] || [data]; });
    assert.equal(new Set(nodes.map((node) => node['@id'])).size, nodes.length, `${url}: duplicate schema IDs`);
    const ofType = (type) => nodes.filter((node) => [node['@type']].flat().includes(type));
    for (const type of ['Organization', 'LocalBusiness', 'WebSite', 'WebPage']) assert.equal(ofType(type).length, 1, `${url}: ${type}`);
    for (const type of Object.keys(counts)) counts[type] += ofType(type).length;
    const organization = ofType('Organization')[0];
    assert.equal(organization['@id'], `${origin}/#organization`);
    assert.equal(organization.telephone, '+971 6 740 0128');
    assert.equal(organization.email, 'info@inayadomestic.ae');
    assert.equal(organization.address.addressLocality, 'Ajman');
    assert.equal(organization.address.addressCountry, 'AE');
    assert.equal(ofType('WebSite')[0]['@id'], `${origin}/#website`);
    assert.deepEqual(ofType('WebSite')[0].inLanguage, ['en', 'ar']);
    assert.equal(ofType('WebPage')[0].url, url);
    assert.equal(ofType('WebPage')[0].inLanguage, locale);
    const serviceExpected = (route.startsWith('services/') && route !== 'services/countries-we-source-from') || route.startsWith('maid-services-');
    assert.equal(ofType('Service').length, serviceExpected ? 1 : 0, `${url}: Service`);
    if (serviceExpected) {
      const service = ofType('Service')[0];
      assert.equal(service.url, url);
      assert.equal(service.provider['@id'], organization['@id']);
      assert.ok(service.name && service.description);
    }
    assert.equal(ofType('BreadcrumbList').length, route ? 1 : 0, `${url}: breadcrumb`);
    if (route) {
      const crumbs = ofType('BreadcrumbList')[0].itemListElement;
      const visibleNav = body.match(/<nav\b[^>]*data-seo="breadcrumbs"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
      assert.ok(visibleNav, `${url}: visible breadcrumbs`);
      assert.equal(crumbs.at(-1).item, url);
      for (const [index, crumb] of crumbs.entries()) {
        assert.equal(crumb.position, index + 1);
        assert.ok(urls.includes(crumb.item));
        assert.ok(text(visibleNav).includes(crumb.name), `${url}: breadcrumb label ${crumb.name}`);
      }
    }
    for (const faq of ofType('FAQPage')) {
      assert.equal(faq.url, url); assert.equal(faq.inLanguage, locale);
      assert.ok(faq.mainEntity.length);
      for (const question of faq.mainEntity) {
        assert.equal(question['@type'], 'Question'); assert.equal(question.acceptedAnswer['@type'], 'Answer');
        assert.ok(text(body).includes(question.name), `${url}: FAQ question not rendered`);
        assert.ok(text(body).includes(question.acceptedAnswer.text), `${url}: FAQ answer not rendered`);
      }
    }
    const inspect = (value, key = '') => {
      assert.ok(!['aggregateRating', 'review', 'ratingValue', 'offers', 'price', 'availability', 'award', 'hasCertification'].includes(key), `${url}: unsupported ${key}`);
      if (typeof value === 'string' && ['url', '@id', 'item', 'logo'].includes(key)) {
        const parsed = new URL(value); assert.equal(parsed.origin, origin);
        if (key === 'url' || key === 'item') assert.ok(urls.includes(value), `${url}: schema URL ${value}`);
      }
      if (value && typeof value === 'object') for (const [nextKey, entry] of Object.entries(value)) inspect(entry, nextKey);
    };
    nodes.forEach((node) => inspect(node));
  }
  console.log(JSON.stringify({ routes: urls.length, uniqueTitles: titles.size, uniqueDescriptions: descriptions.size, schema: counts }));
});
