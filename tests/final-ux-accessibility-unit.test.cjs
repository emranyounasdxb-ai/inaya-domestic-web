const { approvedSeoFixes } = require('./seo-october-fixes-expectations.cjs');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { readFileSync } = require('node:fs');
const test = require('node:test');
const { assertFormPreserved } = require('./form-accessibility-preservation.cjs');
const { approvedPackageMessages } = require('./managed-package-expectations.cjs');
const base = 'f45a93dc0b8274ad6a792420cfa3e4bcbb828103';
const current = file => require('./page-clarity-expectations.cjs').historicalSource(file, readFileSync(file, 'utf8'));
const previous = file => execFileSync('git', ['show', `${base}:${file}`], { encoding: 'utf8' }).replace(/\r\n/g, '\n');
const replaceOnce = (source, before, after) => {
  assert.equal(source.split(before).length, 2, `Expected exactly one approved navigation anchor: ${before}`);
  return source.replace(before, after);
};

test('the motion preference amendment preserves every other global style and rejects unrelated edits',()=>{
  const motion=require('./reduced-motion-expectations.cjs');
  const source=readFileSync(motion.fixture.file,'utf8').replace(/\r\n/g,'\n');
  assert.equal(motion.sha(source),motion.fixture.afterSha256);
  assert.equal(motion.sha(motion.historicalSource(motion.fixture.file,source)),motion.fixture.beforeSha256);
  assert.throws(()=>motion.historicalSource(motion.fixture.file,source+'\nbody { color: red; }\n'),/exact reviewed/);
});

test('all form variants retain exact validation, fields, options and styling with unique labelled IDs', () => {
  for (const file of ['components/BookingForm.tsx', 'components/CareersForm.tsx', 'components/ContactForm.tsx']) {
    const source = current(file);
    assertFormPreserved(source, previous(file), file);
    assert.match(source, /const formId = useId\(\)/);
    assert.match(source, /<LocalFormConfirmation message=\{delivery.confirmation\}/);
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
    before.nav.bookNow = locale === 'ar' ? 'جهز استفسارك' : 'Prepare enquiry';
    before.common.langSwitch = locale === 'ar' ? 'الإنجليزية' : 'Arabic';
    assert.deepEqual(JSON.parse(current(file)), approvedPackageMessages(locale, before));
  }
  const file = 'components/Navbar.tsx';
  let expected = replaceOnce(previous(file), 'aria-label="Menu"', "aria-label={locale === 'ar' ? 'القائمة' : 'Menu'}");
  expected = replaceOnce(expected, '            Menu', "            {locale === 'ar' ? 'القائمة' : 'Menu'}");
  const faqLink = "    { href: `/${locale}/faq`, label: t('faq') },\n";
  expected = replaceOnce(expected, faqLink, faqLink + "    { href: `/${locale}/blog/`, label: locale === 'ar' ? 'الأدلة' : 'Guides' },\n");
  expected = replaceOnce(expected, '            const active = pathname === l.href;\n', [
    '            const active = l.href === `/${locale}/blog/`',
    '              ? pathname === `/${locale}/blog` || pathname.startsWith(l.href)',
    '              : pathname === l.href;'
  ].join('\n') + '\n');
  expected = replaceOnce(expected,
    '                href={l.href}\n                className={`relative',
    "                href={l.href}\n                aria-current={active ? 'page' : undefined}\n                className={`relative");
  const previousMobile = [
    '            {links.map((l) => (',
    '              <Link',
    '                key={l.href}',
    '                href={l.href}',
    '                onClick={() => setOpen(false)}',
    '                className="border-b border-primary-700/10 py-3 text-sm font-semibold text-primary-900 last:border-b-0"',
    '              >',
    '                {l.label}',
    '              </Link>',
    '            ))}'
  ].join('\n');
  const approvedMobile = [
    '            {links.map((l) => {',
    '              const active = l.href === `/${locale}/blog/`',
    '                ? pathname === `/${locale}/blog` || pathname.startsWith(l.href)',
    '                : pathname === l.href;',
    '              return (',
    '                <Link',
    '                  key={l.href}',
    '                  href={l.href}',
    '                  onClick={() => setOpen(false)}',
    "                  aria-current={active ? 'page' : undefined}",
    "                  className={`border-b py-3 text-sm font-semibold text-primary-900 last:border-b-0 ${active && l.href === `/${locale}/blog/` ? 'border-accent-500' : 'border-primary-700/10'}`}",
    '                >',
    '                  {l.label}',
    '                </Link>',
    '              );',
    '            })}'
  ].join('\n');
  expected = replaceOnce(expected, previousMobile, approvedMobile);
  assert.equal(current(file), approvedSeoFixes(file, expected));
});

test('page and CTA sources permit only the approved localized copy replacements', () => {
  const replacements = {
    'app/[locale]/contact/page.tsx': [['أرسل طلبك', 'راجع بيانات الاستفسار'], ['Send Request', 'Check Enquiry Details'], ['أرسل لنا متطلباتك', 'جهز بيانات استفسارك محلياً'], ['Send your requirement', 'Prepare your enquiry details locally']],
    'app/[locale]/booking/page.tsx': [['قبل الإرسال', 'قبل مراجعة البيانات'], ['Before you submit', 'Before checking your details']],
    'components/PhaseOneSeoSection.tsx': [['Send your details and our team will guide you clearly.', 'Review enquiry details locally. This form does not send them to the office.'], ['Send Request', 'Check Enquiry Details'], ['أرسل التفاصيل وسيرشدك فريقنا بوضوح.', 'راجع بيانات الاستفسار محلياً. لا يرسل هذا النموذج البيانات إلى المكتب.'], ['أرسل الطلب', 'راجع بيانات الاستفسار'], ["eyebrow: 'SEO Guide'", "eyebrow: 'Domestic Worker Guide'"], ["eyebrow: 'دليل تحسين المحتوى'", "eyebrow: 'دليل العمالة المنزلية'"], ['Elder care, patient care and companion care options', 'Non-clinical elder support, daily home help and companionship'], ['رعاية كبار السن والمرضى والمرافقة', 'دعم غير طبي لكبار السن ومساعدة منزلية يومية ومرافقة']]
  };
  for (const [file, pairs] of Object.entries(replacements)) {
    let expected = previous(file);
    for (const [before, after] of pairs) expected = expected.replace(before, after);
    expected = approvedSeoFixes(file, expected);
    if (file === 'app/[locale]/contact/page.tsx') {
      expected = replaceOnce(expected, "import { siteConfig } from '@/lib/site-config';\n", "import { siteConfig } from '@/lib/site-config';\nimport BusinessIdentityLine from '@/components/BusinessIdentityLine';\n");
      expected = replaceOnce(expected, "    heroTitle: isArabic ? 'تواصل مع عناية للعمالة المنزلية' : 'Premium UAE domestic care, guided clearly.',", "    heroTitle: isArabic ? 'تواصل مع عناية للعمالة المنزلية — جراند مول، عجمان' : 'Contact INAYA Domestic Workers — Grand Mall, Ajman',");
      expected = replaceOnce(expected, '            <p className="mt-4 leading-7 text-ink/70">{copy.locationText}</p>\n', '            <p className="mt-4 leading-7 text-ink/70">{copy.locationText}</p>\n            <BusinessIdentityLine locale={locale} className="mt-4 text-sm leading-7 text-primary-900/80" />\n');
    }
    assert.equal(current(file), expected, file);
  }
});

test('PHP delivery validates, limits and deduplicates without sending real email', () => {
  execFileSync(process.execPath, ['scripts/test-backend.mjs'], {stdio:'pipe'});
});
