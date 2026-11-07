import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { attrs, text } from '../scripts/seo-content-audit.mjs';

const copy = {
  en: {
    summary: 'Review available profile information.',
    retired: /Thorough staff verification|Thorough background verification support/,
    cardAction: 'View service',
    limitation: 'not a safety guarantee',
    question: 'Does a profile prove criminal, medical or reference checks?'
  },
  ar: {
    summary: 'مراجعة معلومات الملف المتاحة.',
    retired: /تحقق شامل من العمالة|دعم شامل للتحقق من الخلفية/,
    cardAction: 'تفاصيل الخدمة',
    limitation: 'ليست ضماناً للأمان',
    question: 'هل يثبت الملف إجراء فحوص جنائية أو طبية أو التحقق من المراجع؟'
  }
};

const visibleHtml = html => html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '');

for (const locale of ['en', 'ar']) {
  test(`${locale}: rendered background-review cards agree with the detailed guidance scope`, async () => {
    for (const route of ['services', 'services/recruitment', 'services/maid-visa', 'services/experienced-maid']) {
      const html = visibleHtml(await readFile(`out/${locale}/${route}/index.html`, 'utf8'));
      const cards = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)]
        .filter(([, attributes, body]) =>
          attrs(attributes).href?.replace(/\/$/, '') === `/${locale}/services/background-verification`
          && text(body).includes(copy[locale].cardAction));
      assert.ok(cards.length > 0, `${locale}/${route}: actual background-guidance service card exists`);
      for (const [, , body] of cards) {
        assert.ok(text(body).includes(copy[locale].summary), `${locale}/${route}: the card explains available-information review`);
      }
      assert.doesNotMatch(text(html), copy[locale].retired, `${locale}/${route}: no unconditional comprehensive-check claim`);
    }

    const detail = visibleHtml(await readFile(`out/${locale}/services/background-verification/index.html`, 'utf8'));
    const detailText = text(detail);
    assert.ok(detailText.includes(copy[locale].limitation), `${locale}: detailed scope retains its evidence limitation`);
    assert.ok(detailText.includes(copy[locale].question), `${locale}: detailed guidance explains that a profile does not prove checks`);
    assert.doesNotMatch(detailText, copy[locale].retired);
  });
}
