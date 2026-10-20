import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { attrs, text } from '../scripts/seo-content-audit.mjs';

const origin = 'https://inayadomestic.ae';
const directory = 'content/drafts/2026-10-20';
const locales = ['en', 'ar'];

// Existing URLs are independent audit acceptance data, not generated from the
// new manuscripts. Covered intents must improve their current URL instead of
// creating competing articles.
const existingSlugs = new Set([
  'uae-domestic-worker-hiring-process', 'domestic-worker-package-pricing-factors',
  'documents-for-domestic-worker-enquiry', 'live-in-live-out-part-time-maid-uae',
  'monthly-maid-package-inclusions-checklist', 'maid-nanny-babysitter-differences',
  'domestic-worker-visa-sponsorship-support', 'choosing-domestic-worker-agency-ajman',
  'domestic-worker-hiring-costs-uae', 'domestic-worker-employment-arrangements-uae',
  'all-inclusive-domestic-worker-packages', 'domestic-worker-sponsorship-responsibilities',
  'domestic-worker-employer-eligibility-documents', 'domestic-worker-hiring-stages-timelines',
  'domestic-worker-skills-language-assessment', 'choosing-nanny-newborn-support',
  'caregiver-versus-licensed-nurse', 'agreeing-domestic-worker-household-duties',
  'domestic-worker-verification-checks', 'domestic-worker-interview-trial-probation',
  'domestic-worker-replacement-eligibility', 'domestic-worker-recruitment-refund-rules',
  'domestic-worker-contracts-renewal', 'domestic-worker-wages-rest-leave',
  'own-visa-part-time-domestic-work', 'domestic-worker-leave-travel-planning',
  'domestic-worker-complaints-disputes'
]);
const updatedSlugs = [
  'agreeing-domestic-worker-household-duties',
  'domestic-worker-hiring-costs-uae',
  'domestic-worker-leave-travel-planning'
];

const drafts = await Promise.all((await readdir(directory))
  .filter((file) => /^\d{2}\.json$/.test(file)).sort()
  .map(async (file) => JSON.parse(await readFile(path.join(directory, file), 'utf8'))));
const plainMarkdown = (value) => value.replace(/\[([^\]]+)\]\(https:\/\/[^)]+\)/g, ' $1 ')
  .replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
const linksIn = (body) => [...new Set([...body.matchAll(/\[[^\]]+\]\((https:\/\/[^)]+)\)/g)].map((match) => match[1]))];
const withoutScripts = (html) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '');

test('draft series has twenty distinct audited questions, seventeen new topics and three existing updates', () => {
  assert.equal(drafts.length, 20, 'all twenty manuscripts must exist');
  assert.deepEqual(drafts.map((draft) => draft.id), Array.from({ length: 20 }, (_, index) => String(index + 1).padStart(2, '0')));
  assert.equal(new Set(drafts.map((draft) => draft.slug)).size, 20, 'one canonical destination for each question');
  assert.equal(drafts.filter((draft) => draft.mode === 'new').length, 17);
  assert.deepEqual(drafts.filter((draft) => draft.mode === 'update').map((draft) => draft.slug).sort(), updatedSlugs);
  for (const draft of drafts) {
    assert.match(draft.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(existingSlugs.has(draft.slug), draft.mode === 'update', `${draft.id}: no duplicate new URL for an existing topic`);
    assert.ok(typeof draft.gap === 'string' && draft.gap.trim(), `${draft.id}: a specific content-gap rationale`);
    assert.ok(Array.isArray(draft.existingMatches) && draft.existingMatches.length, `${draft.id}: existing coverage considered`);
    for (const slug of draft.existingMatches) assert.ok(existingSlugs.has(slug), `${draft.id}: matching existing guide ${slug}`);
    assert.ok(Array.isArray(draft.sources) && draft.sources.length >= 2, `${draft.id}: source registry`);
    for (const source of draft.sources) {
      assert.equal(new URL(source.url).protocol, 'https:');
      assert.ok(typeof source.supports === 'string' && source.supports.trim(), `${draft.id}: source supports a stated fact`);
    }
    assert.ok(Array.isArray(draft.searchEvidence) && draft.searchEvidence.length, `${draft.id}: recorded search-intent evidence`);
    for (const evidence of draft.searchEvidence) {
      assert.ok(typeof evidence.query === 'string' && evidence.query.trim());
      assert.equal(new URL(evidence.url).protocol, 'https:');
    }
  }
});

test('draft English and Arabic versions contain complete Q&A, useful tables, relevant links and valid visual data', () => {
  for (const draft of drafts) {
    for (const locale of locales) {
      const copy = draft[locale];
      const label = `${draft.id}/${locale}`;
      assert.ok(copy?.title?.trim() && copy?.description?.trim() && copy?.body?.trim(), `${label}: complete translated manuscript`);
      assert.match(copy.body, locale === 'ar' ? /[\u0600-\u06ff]/ : /[A-Za-z]/, `${label}: expected language`);
      assert.doesNotMatch(copy.body, /^#\s|```|!\[[^\]]*\]\(|<\/?[A-Za-z][^>]*>/m, `${label}: supported manuscript formatting`);
      assert.doesNotMatch([copy.title, copy.description, copy.body, ...copy.faqs.flatMap((faq) => [faq.question, faq.answer])].join('\n'),
        /\b(?:unconfirmed|not confirmed|TODO|TBD|placeholder|editorial notes|pending business facts)\b|غير مؤكد|قيد التأكيد/i,
        `${label}: publishable prose without placeholders or editorial uncertainty labels`);
      const tableGroups = copy.body.match(/^\|.+\|\s*\n\|[\s:|\-]+\|\s*\n(?:\|.+\|(?:\n|$))+/gm) ?? [];
      assert.ok(tableGroups.length >= 1, `${label}: a meaningful comparison or practical worksheet table`);
      for (const table of tableGroups) {
        const rows = table.trim().split(/\r?\n/).map((line) => line.trim().slice(1, -1).split('|'));
        assert.ok(rows[0].length >= 2 && rows.length >= 4, `${label}: table contains headings and at least two useful rows`);
        for (const row of rows) assert.equal(row.length, rows[0].length, `${label}: table column integrity`);
      }
      assert.equal(copy.faqs.length, 4, `${label}: four explicit customer questions and answers`);
      assert.equal(new Set(copy.faqs.map((faq) => faq.question.trim())).size, 4, `${label}: distinct FAQs`);
      for (const faq of copy.faqs) assert.ok(faq.question?.trim() && faq.answer?.trim(), `${label}: complete Q&A pair`);
      const links = linksIn(copy.body);
      const internal = links.filter((url) => new URL(url).origin === origin);
      const external = links.filter((url) => new URL(url).origin !== origin);
      assert.ok(internal.length >= 3, `${label}: contextual internal links`);
      assert.ok(external.length >= 2, `${label}: external primary references`);
      for (const link of internal) assert.ok(new URL(link).pathname.startsWith(`/${locale}/`), `${label}: language-correct internal link ${link}`);
      const visual = copy.visual;
      assert.ok(['steps', 'bars'].includes(visual?.kind), `${label}: meaningful visual type`);
      assert.ok(visual.title?.trim() && visual.caption?.trim(), `${label}: labelled chart with explanatory caption`);
      assert.ok(visual.items.length >= 2, `${label}: visual has comparison or process detail`);
      for (const item of visual.items) {
        assert.ok(item.label?.trim() && item.detail?.trim(), `${label}: useful visual labels`);
        if (visual.kind === 'bars') assert.ok(Number.isFinite(item.value) && item.value >= 0, `${label}: finite nonnegative chart value`);
      }
    }
    assert.equal(draft.en.visual.kind, draft.ar.visual.kind, `${draft.id}: equivalent visual structure`);
    assert.equal(draft.en.visual.items.length, draft.ar.visual.items.length, `${draft.id}: complete visual translation`);
    if (draft.en.visual.kind === 'bars') assert.deepEqual(draft.en.visual.items.map((item) => item.value), draft.ar.visual.items.map((item) => item.value), `${draft.id}: identical translated chart facts`);
  }
});

test('exported twenty-article series renders its tables, charts, Q&A and working canonical internal destinations in both languages', async () => {
  const sitemap = await readFile('out/sitemap.xml', 'utf8');
  const sitemapUrls = new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]));
  for (const draft of drafts) {
    for (const locale of locales) {
      const route = `/${locale}/blog/${draft.slug}/`;
      const url = `${origin}${route}`;
      const copy = draft[locale];
      const html = await readFile(`out${route}index.html`, 'utf8');
      const body = withoutScripts(html);
      const article = body.match(/<article\b[^>]*data-published-article="content"[^>]*>([\s\S]*?)<\/article>/)?.[1];
      assert.ok(article, `${route}: complete visible publication`);
      const visible = text(article);
      assert.ok(visible.includes(plainMarkdown(copy.body.split(/\r?\n\s*\r?\n/)[0])), `${route}: direct answer rendered`);
      assert.ok((article.match(/<table\b/g) ?? []).length >= 1, `${route}: practical table rendered`);
      assert.ok(article.includes(`data-article-visual="${copy.visual.kind}"`), `${route}: chart rendered`);
      assert.ok(visible.includes(copy.visual.title) && visible.includes(copy.visual.caption), `${route}: chart text and source context visible`);
      for (const item of copy.visual.items) assert.ok(visible.includes(item.label) && visible.includes(item.detail), `${route}: complete chart translation`);
      for (const faq of copy.faqs) {
        assert.ok(visible.includes(plainMarkdown(faq.question)), `${route}: FAQ question visible`);
        assert.ok(visible.includes(plainMarkdown(faq.answer)), `${route}: FAQ answer visible`);
      }
      const actualLinks = [...article.matchAll(/<a\b([^>]*)>/g)].map((match) => attrs(match[1]).href);
      for (const link of linksIn(copy.body)) {
        assert.ok(actualLinks.includes(link), `${route}: reference remains clickable: ${link}`);
        const target = new URL(link);
        if (target.origin === origin) {
          const canonical = `${origin}${target.pathname.replace(/\/$/, '')}/`;
          assert.ok(sitemapUrls.has(canonical), `${route}: linked internal page is canonical: ${link}`);
          const targetHtml = await readFile(path.join('out', target.pathname.slice(1), 'index.html'), 'utf8');
          assert.match(targetHtml, /<h1\b/, `${route}: linked page exists: ${link}`);
          assert.ok(!/\bnoindex\b/i.test([...targetHtml.matchAll(/<meta\b[^>]*>/g)].filter((match) => attrs(match[0]).name === 'robots').map((match) => attrs(match[0]).content).join(' ')), `${route}: linked destination is indexable`);
        }
      }
      assert.ok(sitemapUrls.has(url), `${route}: one canonical sitemap destination`);
      const canonicalLink = [...html.matchAll(/<link\b([^>]*)>/g)].map((match) => attrs(match[1])).find((link) => link.rel === 'canonical');
      assert.equal(canonicalLink?.href, url);
      const alternate = [...html.matchAll(/<link\b([^>]*)>/g)].map((match) => attrs(match[1])).find((link) => link.rel === 'alternate' && link.hrefLang === (locale === 'en' ? 'ar' : 'en'));
      assert.equal(alternate?.href, `${origin}/${locale === 'en' ? 'ar' : 'en'}/blog/${draft.slug}/`);
      const hub = await readFile(`out/${locale}/blog/index.html`, 'utf8');
      assert.ok(hub.includes(`href="${route}"`), `${route}: discoverable from the localized guide hub`);
    }
  }
});
