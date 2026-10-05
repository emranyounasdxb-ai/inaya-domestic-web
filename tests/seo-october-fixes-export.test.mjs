import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import test from 'node:test';
import { attrs, text } from '../scripts/seo-content-audit.mjs';

const core = ['live-in-maid', 'full-time-maid', 'part-time-maid', 'monthly-maid-contract', 'nanny', 'maid-visa'];
const htmlFor = (locale, route = '') => readFile(`out/${locale}/${route ? `${route}/` : ''}index.html`, 'utf8');
const visible = (html) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');

test('both home exports have descriptive H1, prioritized responsive LCP, smaller logo choices and semantic ratings', async () => {
  for (const locale of ['en', 'ar']) {
    const html = await htmlFor(locale);
    const body = visible(html);
    const headings = [...body.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)];
    assert.equal(headings.length, 1);
    assert.equal(text(headings[0][1]), locale === 'ar' ? 'خدمات الخادمات والعمالة المنزلية في عجمان وجميع أنحاء الإمارات' : 'Maid & Domestic Worker Services in Ajman and Across the UAE');
    const hero = [...body.matchAll(/<img\b([^>]*)>/g)].map(m => attrs(m[1])).find(img => img.src.includes('inaya-home-hero-family'));
    assert.equal(hero.fetchPriority, 'high');
    assert.equal(hero.loading, 'eager');
    assert.equal(hero.width, '1513');
    assert.equal(hero.height, '851');
    assert.match(body, /inaya-home-hero-family-768\.webp 768w/);
    const header = body.match(/<header\b[^>]*>([\s\S]*?)<\/header>/)[1];
    const logo = attrs(header.match(/<img\b([^>]*)>/)[1]);
    const logoSource = attrs(header.match(/<source\b([^>]*)>/)[1]);
    assert.match(logoSource.srcSet, /-160\.webp 160w, .*?-320\.webp 320w/);
    assert.equal(logo.height, '48');
    for (const source of logoSource.srcSet.split(', ').slice(0, 2)) {
      const asset = source.split(' ')[0];
      assert.ok((await stat(`public${asset}`)).size < 10000, asset);
    }
    const footer = body.match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/)[1];
    assert.equal([...footer.matchAll(/<h2\b/g)].length, 3);
    assert.doesNotMatch(footer, /<h[34]\b/);
    for (const stars of body.matchAll(/<span\b([^>]*class="google-review-stars"[^>]*)>([\s\S]*?)<\/span>/g)) {
      assert.equal(attrs(stars[1]).role, 'img');
      assert.equal(attrs(stars[1])['aria-label'], locale === 'ar' ? '5 من 5 نجوم' : '5 out of 5 stars');
      assert.match(stars[2], /aria-hidden="true"/);
    }
    for (const route of [...core.map(slug => `services/${slug}`), 'maid-services-ajman', 'maid-services-dubai', 'maid-services-sharjah']) assert.ok(body.includes(`href="/${locale}/${route}/"`), route);
    assert.doesNotMatch(html, /<link\b[^>]*rel="stylesheet"/);
    assert.match(html, /<style\b[^>]*>[\s\S]*?\.google-review-carousel/);
    assert.doesNotMatch(html, /"messages":\{/);
  }
});

test('core pages answer practical questions and visa exports contain case guidance instead of candidate matching', async () => {
  for (const locale of ['en', 'ar']) for (const slug of core) {
    const body = visible(await htmlFor(locale, `services/${slug}`));
    assert.ok(body.includes(`href="/${locale}/pricing/"`));
    assert.ok(body.includes(locale === 'ar' ? 'الحدود والمسؤوليات المطلوب توضيحها' : 'Limits and responsibilities to clarify'));
    assert.ok(body.includes(locale === 'ar' ? 'من الاستفسار إلى التأكيد' : 'From enquiry to confirmation'));
    assert.doesNotMatch(body, /Which roles can I compare when reviewing|ما الأدوار التي أقارنها عند مراجعة/);
    if (slug === 'maid-visa') {
      assert.ok(body.includes(locale === 'ar' ? 'تواصل مع عناية لتأكيد الدعم المتاح لحالتك والمتطلبات والرسوم المنطبقة' : 'Contact INAYA to confirm the support available for your case, applicable requirements and fees'));
      assert.doesNotMatch(body, /maid-filipino|maid-indonesian|maid-srilankan|maid-kenya-uganda|Request Matching|اطلب المطابقة/);
    }
  }
});

test('pricing displays only confirmed monthly amounts and makes unconfirmed terms explicit', async () => {
  for (const locale of ['en', 'ar']) {
    const body = visible(await htmlFor(locale, 'pricing'));
    assert.match(text(body), locale === 'ar' ? /Essential من 1,500 درهم شهرياً وSignature من 2,500 درهم شهرياً، شاملتين التكاليف/ : /Essential starts from AED 1,500\/month and Signature from AED 2,500\/month, all-inclusive/);
    assert.match(text(body), locale === 'ar' ? /لم تتأكد تفاصيل المهام والمزايا الفردية/ : /Individual package duties and benefits have not yet been confirmed/);
    assert.match(text(body), locale === 'ar' ? /عرض سعر مخصص/ : /Custom Quote/);
    assert.doesNotMatch(text(body), /Priority follow-up|Extended|VIP|Training and appraisal|أولوية في المتابعة|مدير متابعة للحالة|تدريب وتقييم/);
  }
});

test('three emirates link practical local notes to all six services without inventing offices', async () => {
  for (const locale of ['en', 'ar']) for (const city of ['ajman', 'dubai', 'sharjah']) {
    const body = visible(await htmlFor(locale, `maid-services-${city}`));
    for (const slug of core) assert.ok(body.includes(`href="/${locale}/services/${slug}/"`));
    assert.match(text(body), locale === 'ar' ? /جراند مول، الطابق الأرضي، الراشدية 3، عجمان/ : /Grand Mall, ground floor, Al Rashidiya 3, Ajman/);
    assert.match(text(body), locale === 'ar' ? /ليستا موقعين لمكاتب إضافية/ : /not additional office locations/);
  }
});

test('cPanel redirect uses an unconditional permanent legacy About rule before language selection', async () => {
  const workflow = await readFile('.github/workflows/deploy-cpanel.yml', 'utf8');
  const rule = 'RewriteRule ^about-us/?$ https://inayadomestic.ae/en/about/ [R=301,L]';
  assert.ok(workflow.includes(rule));
  assert.ok(workflow.indexOf(rule) < workflow.indexOf('RewriteCond %{HTTP:Accept-Language}'));
  assert.match(workflow, /inaya-home-hero-family\.webp' \? 65 : 70/);
});
