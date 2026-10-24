import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { attrs, text } from '../scripts/seo-content-audit.mjs';

const origin = 'https://inayadomestic.ae';
const organizationId = `${origin}/#organization`;
const reviewed = '2026-10-24';
const locales = ['en', 'ar'];
const sourcePages = Object.fromEntries(locales.map(locale => [locale, `${origin}/${locale}/company-information/`]));
const approvedServiceSlugs = ['recruitment', 'nanny', 'housekeeping', 'live-in-maid', 'maid-visa'];
const openDays = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
const xml = await readFile('out/sitemap.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
const rawRecord = await readFile('out/company-information.json', 'utf8');
const record = JSON.parse(rawRecord);

function graph(html) {
  return [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)]
    .filter(match => attrs(match[1]).type === 'application/ld+json')
    .flatMap(match => {
      const value = JSON.parse(match[2]);
      assert.equal(value['@context'], 'https://schema.org');
      return value['@graph'] ?? [value];
    });
}

function visibleBody(html) {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');
}

test('the exact original 230 canonicals survive and only the bilingual company-information pair is added', async () => {
  const baseline = JSON.parse(await readFile('tests/fixtures/pre-company-information-canonical-routes.json', 'utf8'));
  assert.equal(baseline.urls.length, 230);
  assert.equal(new Set(baseline.urls).size, 230);
  assert.equal(urls.length, 232);
  assert.deepEqual(urls.slice(0, 230), baseline.urls, 'all original routes and their order are preserved');
  assert.deepEqual(urls.slice(230).sort(), Object.values(sourcePages).sort());
  assert.ok(!urls.includes(`${origin}/company-information.json`), 'the data representation is not another HTML canonical');
  for (const url of Object.values(sourcePages)) {
    const entry = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].find(match => match[1].includes(`<loc>${url}</loc>`));
    assert.ok(entry, url);
    assert.deepEqual([...entry[1].matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map(match => match[1]), [reviewed]);
  }
});

test('public JSON gives exact approved company facts, fixed review dates and a bounded bilingual domestic-worker service scope', () => {
  assert.doesNotMatch(rawRecord, /<html\b|<script\b|<body\b/i, 'JSON endpoint serves data, not an HTML shell');
  assert.equal(record.schemaVersion, 1);
  assert.equal(record.lastUpdated, reviewed);
  assert.equal(record.lastReviewed, reviewed);
  assert.deepEqual(record.sourcePages, sourcePages);
  const company = record.organization;
  assert.equal(company.id, organizationId);
  assert.equal(company.name.en, 'INAYA Domestic Workers');
  assert.match(company.name.ar, /عناية/);
  assert.equal(company.legalName, 'INAYA DOMESTIC WORKERS SERVICES (S.P.S - L.L.C)');
  assert.equal(company.website.replace(/\/$/, ''), origin);
  assert.equal(company.officeTelephone, '+971 6 740 0128');
  assert.equal(company.whatsapp.number, '+971 50 203 6767');
  assert.equal(company.whatsapp.url, 'https://wa.me/971502036767');
  assert.equal(company.email, 'info@inayadomestic.ae');
  assert.equal(company.office.count, 1);
  for (const fragment of ['Grand Mall', 'Ground Floor', 'Sheikh Khalifa Bin Zayed', 'Al Rashidiya 3', 'Ajman']) assert.ok(company.office.address.en.includes(fragment), fragment);
  assert.match(company.office.address.ar, /جراند مول/);
  assert.match(company.office.address.ar, /الطابق الأرضي/);
  assert.match(company.office.address.ar, /الراشدية 3/);
  assert.match(company.office.address.ar, /عجمان/);
  assert.match(company.office.directionsUrl, /^https:\/\/www\.google\.com\/maps\/dir\//);
  assert.equal(company.openingHours.timeZone, 'Asia/Dubai');
  assert.deepEqual([...company.openingHours.openDays].sort(), [...openDays].sort());
  assert.equal(company.openingHours.opens, '09:00');
  assert.equal(company.openingHours.closes, '21:00');
  assert.deepEqual(company.openingHours.closedDays, ['Friday']);
  assert.equal(company.services.length, approvedServiceSlugs.length);
  assert.deepEqual(company.services.map(service => new URL(service.url.en).pathname.split('/')[3]).sort(), [...approvedServiceSlugs].sort());
  for (const service of company.services) {
    for (const locale of locales) {
      assert.ok(service.name[locale]?.trim());
      assert.ok(service.description[locale]?.trim());
      assert.ok(urls.includes(service.url[locale]), 'service cards link only to current canonical pages');
      assert.ok(new URL(service.url[locale]).pathname.startsWith(`/${locale}/services/`));
    }
  }
  assert.doesNotMatch(rawRecord, /0506421563|971\s*50\s*642\s*1563|0564188677|0508200164|0506929330|Khaled|tourist visa|golden visa|company formation|Amer|Tasheel/i, 'no denied contacts, unsupported broad services or authority affiliations');
});

test('both visible language pages and their single shared organization graph agree with the JSON record', async () => {
  for (const locale of locales) {
    const url = sourcePages[locale];
    const html = await readFile(path.join('out', locale, 'company-information', 'index.html'), 'utf8');
    const body = visibleBody(html);
    const main = body.slice(body.indexOf('<main'), body.lastIndexOf('</main>') + 7);
    const visible = text(main);
    const company = record.organization;
    assert.equal([...main.matchAll(/<h1\b/g)].length, 1, `${locale}: one primary heading`);
    for (const value of [company.name[locale], company.legalName, company.officeTelephone, company.whatsapp.number, company.email, company.office.address[locale]]) {
      assert.ok(visible.includes(value), `${locale}: visible public fact ${value}`);
    }
    assert.ok(visible.includes(reviewed), `${locale}: visible fixed review date`);
    assert.match(main, /<time\b[^>]*dateTime="2026-10-24"|<time\b[^>]*datetime="2026-10-24"/, `${locale}: machine-readable visible review date`);
    assert.match(visible, locale === 'en' ? /Friday.*[Cc]losed|[Cc]losed.*Friday/ : /الجمعة.*مغلق|مغلق.*الجمعة/);
    for (const service of company.services) {
      assert.ok(visible.includes(service.name[locale]), `${locale}: visible service ${service.name[locale]}`);
      assert.ok(visible.includes(service.description[locale]), `${locale}: service qualifier preserved`);
      const target = new URL(service.url[locale]);
      assert.ok(main.includes(`href="${target.pathname}"`) || main.includes(`href="${service.url[locale]}"`), `${locale}: visible localized service destination`);
    }
    assert.match(main, /href="\/company-information\.json"/, `${locale}: discoverable JSON representation`);
    const nodes = graph(html);
    const organizations = nodes.filter(node => [node['@type']].flat().some(type => ['Organization', 'LocalBusiness'].includes(type)));
    assert.equal(organizations.length, 1, `${locale}: one company entity, no competing profile`);
    const organization = organizations[0];
    assert.equal(organization['@id'], organizationId);
    assert.deepEqual([organization['@type']].flat().sort(), ['LocalBusiness', 'Organization']);
    assert.equal(organization.name, company.name[locale]);
    assert.equal(organization.legalName, company.legalName);
    assert.equal(organization.telephone, company.officeTelephone);
    assert.equal(organization.email, company.email);
    assert.equal(organization.address.streetAddress, company.office.address.en);
    const hours = organization.openingHoursSpecification;
    assert.equal(hours.length, 2);
    const open = hours.find(specification => specification.opens === '09:00');
    const closed = hours.find(specification => specification.opens === '00:00');
    assert.deepEqual([...open.dayOfWeek].sort(), [...company.openingHours.openDays].sort());
    assert.equal(open.closes, company.openingHours.closes);
    assert.deepEqual([closed.dayOfWeek].flat(), company.openingHours.closedDays);
    assert.equal(closed.closes, '00:00');
    const contactPoints = [organization.contactPoint].flat().filter(Boolean);
    assert.ok(contactPoints.some(point => point.telephone === company.whatsapp.number && point.url === company.whatsapp.url && /whatsapp/i.test(point.contactType)), `${locale}: WhatsApp is distinct from office telephone`);
    const webpage = nodes.find(node => node['@id'] === `${url}#webpage`);
    assert.equal(webpage.mainEntity['@id'], organizationId);
    assert.equal(webpage.dateModified, reviewed);
    assert.equal(webpage.lastReviewed, reviewed);
    assert.equal(webpage.url, url);
    assert.equal(webpage.inLanguage, locale);
    assert.doesNotMatch(html, /<meta[^>]+name="robots"[^>]+noindex/);
    assert.equal(new Set(nodes.map(node => node['@id'])).size, nodes.length, `${locale}: no duplicate schema identities`);
  }
});

test('every page exposes the localized official reference from its footer and retains the same company identity', async () => {
  for (const url of urls) {
    const locale = new URL(url).pathname.split('/')[1];
    const html = await readFile(path.join('out', new URL(url).pathname.slice(1), 'index.html'), 'utf8');
    const footer = visibleBody(html).match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/)?.[1];
    assert.ok(footer, `${url}: footer remains present`);
    assert.ok(footer.includes(`href="/${locale}/company-information/"`), `${url}: localized official facts are internally discoverable`);
    const organizations = graph(html).filter(node => [node['@type']].flat().includes('Organization'));
    assert.equal(organizations.length, 1, `${url}: only one organization entity`);
    assert.equal(organizations[0]['@id'], organizationId);
    assert.equal(organizations[0].telephone, record.organization.officeTelephone);
    assert.equal(organizations[0].email, record.organization.email);
  }
});
