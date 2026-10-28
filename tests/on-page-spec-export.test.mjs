import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { attrs, decode, text } from '../scripts/seo-content-audit.mjs';

const origin = 'https://inayadomestic.ae';
const mohre = 'https://mohre.gov.ae/en/services/approved-services-centers-new1/inaya-domestic-workers-services-s-p-s-l-l-c';
const profiles = ['https://www.linkedin.com/company/inaya-domestic-workers-ajman/', 'https://www.facebook.com/inayadomesticworkersajman/', 'https://www.instagram.com/inayadomesticworkers/'];
const countries = { lk: 'sri-lankan', np: 'nepali', mm: 'myanmar', ph: 'philippines', in: 'indian', bd: 'bangladeshi', et: 'ethiopian', ke: 'kenyan', gh: 'ghanaian', ug: 'ugandan', sl: 'sierra-leone', id: 'indonesian' };
const xml = await readFile('out/sitemap.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => decode(match[1]));
const load = route => readFile(`out/${route}index.html`, 'utf8');
const visible = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
const graph = html => [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter(match => attrs(match[1]).type === 'application/ld+json').flatMap(match => { const value = JSON.parse(match[2]); return value['@graph'] ?? [value]; });

test('all public pages show the official facility number and one consistent business identity', async () => {
  assert.equal(urls.length, 284);
  for (const url of urls) {
    const html = await load(new URL(url).pathname.slice(1));
    const footer = visible(html).match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/)?.[1];
    assert.ok(footer, `${url}: visible footer`);
    assert.match(text(footer), /2637187/, `${url}: facility is visible, not logo-only`);
    assert.ok(footer.includes(`href="${mohre}"`), `${url}: official provenance link`);
    const organization = graph(html).find(node => [].concat(node['@type']).includes('Organization'));
    assert.deepEqual(organization.identifier, { '@type': 'PropertyValue', propertyID: 'MOHRE Facility Number', value: '2637187', url: mohre });
    assert.deepEqual(organization.sameAs, profiles);
    assert.equal(organization.telephone, '+971 6 740 0128');
    assert.equal(organization.contactPoint.telephone, '+971 50 203 6767');
    assert.equal(organization.contactPoint.url, 'https://wa.me/971502036767');
    assert.equal(new URL(organization.hasMap).searchParams.get('query_place_id'), 'ChIJxzRGAUJZXz4R8zN5ye8vn_M');
    assert.deepEqual(organization.areaServed, { '@type': 'Country', name: 'United Arab Emirates' });
    for (const unsupported of ['geo', 'aggregateRating', 'hasCredential']) assert.ok(!(unsupported in organization), `${url}: no unverified ${unsupported}`);
  }
});

test('homepage answers match exported FAQ schema exactly and retain qualified package amounts', async () => {
  for (const locale of ['en', 'ar']) {
    const html = await load(`${locale}/`);
    const section = visible(html).match(/<section\b[^>]*aria-labelledby="home-faq-heading"[^>]*>([\s\S]*?)<\/section>/)?.[1];
    assert.ok(section);
    const answers = [...section.matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/g)].map(([, content]) => ({ question: text(content.match(/<h3\b[^>]*>([\s\S]*?)<\/h3>/)[1]), answer: text(content.match(/<p\b[^>]*>([\s\S]*?)<\/p>/)[1]) }));
    assert.equal(answers.length, 6);
    const nodes = graph(html).filter(node => node['@type'] === 'FAQPage');
    assert.equal(nodes.length, 1);
    assert.deepEqual(nodes[0].mainEntity.map(item => ({ question: item.name, answer: item.acceptedAnswer.text })), answers);
    for (const amount of ['120', '200', '1,120', '3,500', '3,250', '3,000']) assert.ok(answers[0].answer.includes(amount));
    assert.match(answers[0].answer, locale === 'en' ? /12.month commitment/ : /12 شهراً/);
    assert.match(answers[0].answer, locale === 'en' ? /30 days/ : /30 يوماً/);
  }
});

test('twelve self-hosted flags point directly to existing localized country guides', async () => {
  for (const [code, nationality] of Object.entries(countries)) {
    const svg = await readFile(`public/flags/${code}.svg`, 'utf8');
    assert.match(svg, /<svg\b/);
    assert.doesNotMatch(svg, /<!DOCTYPE|<!ENTITY|<script|<foreignObject|<image|\bon\w+=|(?:xlink:)?href\s*=\s*["'](?!#)/i);
    assert.equal(await readFile(`out/flags/${code}.svg`, 'utf8'), svg);
    for (const locale of ['en', 'ar']) {
      const html = visible(await load(`${locale}/`));
      const card = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].find(match => attrs(match[1]).class?.split(' ').includes('home-country-card') && attrs(match[1]).href === `/${locale}/maid-source-countries/${nationality}-maid-uae/`);
      assert.ok(card, `${locale}/${code}: direct individual guide link`);
      assert.ok(card[2].includes(`src="/flags/${code}.svg"`));
      assert.match(card[2], /alt="[^"]+"/);
    }
  }
  for (const url of urls) {
    const html = await load(new URL(url).pathname.slice(1));
    assert.doesNotMatch(html, /(?:https?:)?\/\/flagcdn\.com/, `${url}: no runtime FlagCDN request`);
  }
});

test('decorative authority clones are hidden without claiming new licensing or changing the original logos', async () => {
  for (const locale of ['en', 'ar']) {
    const html = visible(await load(`${locale}/`));
    const cards = [...html.matchAll(/<div\b([^>]*)>\s*<picture>([\s\S]*?)<\/picture>\s*<\/div>/g)].filter(match => /src="\/authority-logos\//.test(match[2]));
    assert.equal(cards.length, 12);
    const images = cards.map(card => attrs(card[2].match(/<img\b[^>]*>/)[0]));
    for (let index = 0; index < 6; index++) {
      assert.ok(images[index].alt.length > 0);
      assert.equal(attrs(cards[index][1])['aria-hidden'], undefined);
      assert.equal(images[index + 6].src, images[index].src);
      assert.equal(images[index + 6].alt, '');
      assert.equal(attrs(cards[index + 6][1])['aria-hidden'], 'true');
    }
    assert.doesNotMatch(text(html), /MOHRE Licensed Tadbeer Partner/);
  }
});

test('About and Contact have descriptive localized headings and Ajman reuses the existing office map', async () => {
  const expected = {
    en: { about: 'About INAYA Domestic Workers — Grand Mall, Ajman', contact: 'Contact INAYA Domestic Workers — Grand Mall, Ajman' },
    ar: { about: 'عن عناية للعمالة المنزلية — جراند مول، عجمان', contact: 'تواصل مع عناية للعمالة المنزلية — جراند مول، عجمان' }
  };
  for (const locale of ['en', 'ar']) {
    for (const route of ['about', 'contact']) {
      const html = visible(await load(`${locale}/${route}/`));
      assert.deepEqual([...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map(match => text(match[1])), [expected[locale][route]]);
      const main = html.slice(html.indexOf('<main'), html.lastIndexOf('</main>'));
      assert.match(text(main), /2637187/);
    }
    const ajman = visible(await load(`${locale}/maid-services-ajman/`));
    assert.match(ajman, /data-office-location-map="true"|data-office-location-map=""/);
    const map = [...ajman.matchAll(/<iframe\b[^>]*>/g)].map(match => attrs(match[0])).find(frame => frame.src?.startsWith('https://www.google.com/maps/embed?'));
    assert.ok(map, 'noscript retains an ordinary public office embed');
    assert.ok(map.src.includes('0x3e5f5942014634c7%3A0xf39f2fefc97933f3'));
  }
});
