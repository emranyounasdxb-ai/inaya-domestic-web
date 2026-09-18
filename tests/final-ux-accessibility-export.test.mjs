import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { attrs, text } from '../scripts/seo-content-audit.mjs';

test('all six localized form exports have one unique programmatic label per control and truthful local-check CTAs', async () => {
  for (const locale of ['en', 'ar']) {
    for (const route of ['booking', 'careers', 'contact']) {
      const html = await readFile(`out/${locale}/${route}/index.html`, 'utf8');
      const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
      const form = body.match(/<form\b([^>]*)>([\s\S]*?)<\/form>/);
      assert.ok(form, `${locale}/${route}`);
      const controls = [...form[2].matchAll(/<(?:input|select|textarea)\b([^>]*)>/g)].map(m => attrs(m[1]));
      const labels = [...form[2].matchAll(/<label\b([^>]*)>([\s\S]*?)<\/label>/g)].map(m => ({ ...attrs(m[1]), text: text(m[2]) }));
      assert.equal(controls.length, route === 'booking' ? 8 : 7);
      assert.equal(new Set(controls.map(control => control.id)).size, controls.length);
      for (const control of controls) {
        assert.ok(control.id);
        const associated = labels.filter(label => label.for === control.id);
        assert.equal(associated.length, 1);
        assert.ok(associated[0].text);
      }
      assert.doesNotMatch(text(body), /Submit Application|Send Request|Send your requirement|Before you submit|أرسل طلبك|أرسل الطلب|أرسل لنا متطلباتك|إرسال الطلب|قبل الإرسال/);
      const menu = body.match(/<button\b([^>]*aria-expanded[^>]*)>([\s\S]*?)<\/button>/);
      assert.equal(attrs(menu[1])['aria-label'], locale === 'ar' ? 'القائمة' : 'Menu');
      assert.equal(text(menu[2]), locale === 'ar' ? 'القائمة' : 'Menu');
    }
  }
});
