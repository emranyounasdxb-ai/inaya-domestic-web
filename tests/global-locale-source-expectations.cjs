const assert = require('node:assert/strict');

// Exact 24 October user-authorized locale presentation amendments. These
// transformations extend the old checkpoint guards; every other source byte
// remains protected, including forms, carousel logic, prices and review text.
const patches = {
  'components/Navbar.tsx': [
    ['aria-label="INAYA Domestic Workers home"', "aria-label={locale === 'ar' ? 'عناية للعمالة المنزلية — الرئيسية' : 'INAYA Domestic Workers home'}"],
    ['            href={switchedPath}\n            prefetch={false}', '            href={switchedPath}\n            hrefLang={otherLocale}\n            prefetch={false}']
  ],
  'components/Footer.tsx': [
    ["<p>© {year} INAYA Domestic Workers. {t('rights')}</p>", "<p>© {year} {isArabic ? 'عناية للعمالة المنزلية.' : 'INAYA Domestic Workers.'} {t('rights')}</p>"]
  ],
  'components/SierraLeoneOfferControls.tsx': [
    ["alt={isArabic ? 'INAYA Arabic logo' : 'INAYA Domestic Workers'}", "alt={isArabic ? 'شعار عناية للعمالة المنزلية' : 'INAYA Domestic Workers'}"]
  ],
  'app/[locale]/layout.tsx': [
    ['          <FloatingSocialBar />', '          <FloatingSocialBar locale={locale} />']
  ],
  'app/[locale]/contact/page.tsx': [
    ['<LocationMap src={mapEmbedUrl} title={copy.mapTitle} />', "<LocationMap src={isArabic ? mapEmbedUrl.replaceAll('!1sen', '!1sar') : mapEmbedUrl} title={copy.mapTitle} />"]
  ],
  'components/HomeGoogleReviewsShowcase.tsx': [
    ['      <blockquote dir="auto">{review.text}</blockquote>', [
      "      {locale === 'ar' ? <>",
      '        <p className="google-source-label">ترجمة عربية للتقييم الأصلي</p>',
      '        <blockquote lang="ar" dir="rtl">{review.textAr}</blockquote>',
      '        <details data-original-review="true" className="mt-3 text-sm leading-7"><summary tabIndex={clone ? -1 : undefined} className="cursor-pointer underline underline-offset-4">النص الأصلي بالإنجليزية</summary><blockquote lang="en" dir="ltr">{review.text}</blockquote></details>',
      '      </> : <blockquote lang="en" dir="ltr">{review.text}</blockquote>}'
    ].join('\n')]
  ],
  'tests/e2e/home.spec.ts': [
    ["  await expect(page.locator('[data-review-card][data-carousel-clone=\"false\"][data-review-id=\"hanan\"]')).toContainText('Amazing service from INAYA Domestic Workers!');", [
      '  for (const review of CURATED_GOOGLE_REVIEWS) {',
      '    const card = page.locator(`[data-review-card][data-carousel-clone="false"][data-review-id="${review.id}"]`);',
      '    await expect(card).toContainText(review.textAr);',
      "    await expect(card).toContainText('ترجمة عربية للتقييم الأصلي');",
      '    const disclosure = card.locator(\'details[data-original-review="true"]\');',
      "    await expect(disclosure).not.toHaveAttribute('open', '');",
      '    const original = disclosure.locator(\'blockquote[lang="en"][dir="ltr"]\');',
      '    await expect(original).toHaveText(review.text);',
      '    await expect(original).not.toBeVisible();',
      '  }'
    ].join('\n')]
  ]
};

function approvedGlobalLocale(file, source) {
  for (const [before, after] of patches[file] ?? []) {
    assert.equal(source.split(before).length, 2, `${file}: exactly one authorized global-locale source anchor`);
    source = source.replace(before, after);
  }
  return source;
}

module.exports = { approvedGlobalLocale };
