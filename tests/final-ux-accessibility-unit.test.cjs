const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { readFileSync } = require('node:fs');
const test = require('node:test');
const { assertFormPreserved } = require('./form-accessibility-preservation.cjs');
const base = 'f45a93dc0b8274ad6a792420cfa3e4bcbb828103';
const current = file => readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
const previous = file => execFileSync('git', ['show', `${base}:${file}`], { encoding: 'utf8' }).replace(/\r\n/g, '\n');

test('all form variants retain exact validation, fields, options and styling with unique labelled IDs', () => {
  for (const file of ['components/BookingForm.tsx', 'components/CareersForm.tsx', 'components/ContactForm.tsx']) {
    const source = current(file);
    assertFormPreserved(source, previous(file), file);
    assert.match(source, /const formId = useId\(\)/);
    assert.match(source, /<LocalFormConfirmation message=\{t\('success'\)\}/);
    assert.equal((source.match(/<label /g) || []).length, (source.match(/<label htmlFor=\{fieldId\(/g) || []).length);
    for (const match of source.matchAll(/<(?:input|select|textarea)\b[^>]*name="([^"]+)"/g)) {
      assert.ok(source.includes(`htmlFor={fieldId('${match[1]}')}`), `${file} ${match[1]}`);
      assert.ok(match[0].includes(`fieldId('${match[1]}')`) || match[0].includes(`fieldA11y('${match[1]}')`));
    }
  }
  const confirmation = current('components/LocalFormConfirmation.tsx');
  assert.match(confirmation, /node.focus\(\{ preventScroll: true \}\)/);
  assert.match(confirmation, /prefers-reduced-motion: reduce/);
  assert.match(confirmation, /\? 'instant' : 'smooth'/);
  assert.match(confirmation, /tabIndex=\{-1\} role="status" aria-live="polite" aria-atomic="true"/);
  assert.match(confirmation, /className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center text-green-800"/);
});

test('messages and navigation permit only reviewed localized copy changes', () => {
  for (const locale of ['en', 'ar']) {
    const file = `messages/${locale}.json`;
    const before = JSON.parse(previous(file));
    before.careers.submit = locale === 'ar' ? 'مراجعة بيانات استفسار العمل' : 'Check Career Enquiry Details';
    assert.deepEqual(JSON.parse(current(file)), before);
  }
  const file = 'components/Navbar.tsx';
  const expected = previous(file).replace('aria-label="Menu"', "aria-label={locale === 'ar' ? 'القائمة' : 'Menu'}")
    .replace('            Menu', "            {locale === 'ar' ? 'القائمة' : 'Menu'}");
  assert.equal(current(file), expected);
});

test('page and CTA sources permit only the approved form-oriented copy replacements', () => {
  const replacements = {
    'app/[locale]/contact/page.tsx': [['أرسل طلبك', 'راجع بيانات الاستفسار'], ['Send Request', 'Check Enquiry Details'], ['أرسل لنا متطلباتك', 'جهز بيانات استفسارك محلياً'], ['Send your requirement', 'Prepare your enquiry details locally']],
    'app/[locale]/booking/page.tsx': [['قبل الإرسال', 'قبل مراجعة البيانات'], ['Before you submit', 'Before checking your details']],
    'components/PhaseOneSeoSection.tsx': [['Send your details and our team will guide you clearly.', 'Review enquiry details locally. This form does not send them to the office.'], ['Send Request', 'Check Enquiry Details'], ['أرسل التفاصيل وسيرشدك فريقنا بوضوح.', 'راجع بيانات الاستفسار محلياً. لا يرسل هذا النموذج البيانات إلى المكتب.'], ['أرسل الطلب', 'راجع بيانات الاستفسار']]
  };
  for (const [file, pairs] of Object.entries(replacements)) {
    let expected = previous(file);
    for (const [before, after] of pairs) expected = expected.replace(before, after);
    assert.equal(current(file), expected, file);
  }
});
