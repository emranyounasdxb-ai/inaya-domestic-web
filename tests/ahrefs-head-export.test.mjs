import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { attrs, text } from '../scripts/seo-content-audit.mjs';

const src = 'https://analytics.ahrefs.com/analytics.js';
const dataKey = '2EXv77rohxGm3Dfl3xH7Gw';
const about = 'https://help.ahrefs.com/en/articles/10247870-about-ahrefs-web-analytics';
const xml = await readFile('out/sitemap.xml', 'utf8');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
const scripts = html => [...html.matchAll(/<script\b([^>]*)>/g)].map(match => ({ tag: match[0], attributes: attrs(match[1]) }));
const visible = html => html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, '');

test('all292 canonical EN/AR pages contain one exact native async Ahrefs script in their initial head', async () => {
  assert.equal(urls.length, 294);
  assert.equal(new Set(urls).size, 294);
  for (const url of urls) {
    const html = await readFile(`out${new URL(url).pathname}index.html`, 'utf8');
    const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/)?.[1];
    assert.ok(head, `${url}: initial server HTML has a head`);
    const tracker = scripts(head).filter(script => script.attributes.src === src);
    assert.equal(tracker.length, 1, `${url}: one actual script element rather than an inline loader`);
    assert.equal(tracker[0].attributes['data-key'], dataKey, `${url}: exact owner-provided project key`);
    assert.match(tracker[0].tag, /\sasync(?:\s|=|>)/, `${url}: native nonblocking script`);
    assert.equal(scripts(html).filter(script => script.attributes.src === src).length, 1, `${url}: no duplicate direct installation`);
    assert.ok(!scripts(html).some(script => /googletagmanager|google-analytics|clarity\.ms/.test(script.attributes.src ?? '')), `${url}: optional vendors remain absent before consent`);
  }
});

test('both privacy notices disclose separate Ahrefs processing and all enquiry forms use native POST', async () => {
  for (const locale of ['en', 'ar']) {
    const html = visible(await readFile(`out/${locale}/privacy-policy/index.html`, 'utf8'));
    const copy = text(html);
    assert.ok(copy.includes(locale === 'ar' ? 'قياس Ahrefs دون ملفات تعريف ارتباط' : 'Cookie-free Ahrefs measurement'));
    assert.ok(copy.includes(locale === 'ar' ? 'حتى عند رفض' : 'even when optional Google Analytics and Clarity are rejected'));
    assert.ok(copy.includes(locale === 'ar' ? 'معرّف زائر مستعاراً يومياً' : 'daily pseudonymous visitor ID'));
    assert.ok(copy.includes(locale === 'ar' ? '29 أكتوبر 2026' : '29 October 2026'));
    const links = [...html.matchAll(/<a\b([^>]*)>/g)].map(match => attrs(match[1]).href);
    assert.ok(links.includes(about), `${locale}: actual linked processing explanation`);
    for (const route of ['contact', 'booking', 'careers']) {
      const formHtml = visible(await readFile(`out/${locale}/${route}/index.html`, 'utf8'));
      const forms = [...formHtml.matchAll(/<form\b([^>]*)>/g)].map(match => attrs(match[1]));
      assert.ok(forms.length > 0, `${locale}/${route}: real enquiry form`);
      for (const form of forms) assert.equal(form.method.toLowerCase(), 'post', `${locale}/${route}: no native GET fallback can put entered details in URLs`);
    }
  }
});
