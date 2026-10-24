const assert = require('node:assert/strict');

// Only these reviewed image subjects and the owner's real Ajman office photo
// may change inside the historical Heroes. All surrounding markup stays exact.
const changes = {
  'app/[locale]/about/page.tsx#hero': [
    [
      "alt={isArabic ? 'صورة توضيحية لعاملة منزلية تقدم الشاي لأسرة في غرفة المعيشة' : 'Illustration of a domestic worker serving tea to a family in a living room'}",
      "alt={companyGalleryHero.alt[isArabic ? 'ar' : 'en']}"
    ]
  ],
  'app/[locale]/page.tsx#hero': [
    [
      "alt={isArabic ? 'صورة توضيحية لعاملة منزلية بجوار طاولة مع أفق دبي في الخلفية' : 'Illustration of a domestic worker beside a table with the Dubai skyline in the background'}",
      "alt={isArabic ? 'عاملة منزلية بجوار طاولة مع أفق دبي في الخلفية' : 'A domestic worker beside a table with the Dubai skyline in the background'}"
    ]
  ],
  'app/[locale]/services/page.tsx#hero': [
    [
      "alt={lang === 'ar' ? 'صورة توضيحية لعاملة منزلية ترتب وسائد الأريكة بالقرب من أم وطفلتها' : 'Illustration of a domestic worker arranging sofa cushions near a mother and child'}",
      "alt={lang === 'ar' ? 'عاملة منزلية ترتب وسائد الأريكة بالقرب من أم وطفلتها' : 'A domestic worker arranging sofa cushions near a mother and child'}"
    ]
  ],
  'app/[locale]/[locationSlug]/page.tsx#hero': [
    [
      "<Image src=\"/images/service-areas/ajman-household-planning-ai.webp\" alt={lang === 'ar' ? 'مشهد توضيحي مولّد بالذكاء الاصطناعي لأسرة وعاملة منزلية تناقشان خطة مهام المنزل' : 'AI-generated illustrative scene of a householder and domestic worker discussing a household task plan'} width={1536} height={1024}",
      '<Image src={companyGalleryHero.src} alt={companyGalleryHero.alt[lang]} width={companyGalleryHero.width} height={companyGalleryHero.height}'
    ],
    [
      "{lang === 'ar' ? 'مشهد توضيحي مولّد بالذكاء الاصطناعي؛ لا يصوّر موظفي عناية أو عملاءها الفعليين.' : 'AI-generated illustrative scene; not actual INAYA employees or customers.'}",
      '{companyGalleryHero.caption[lang]}'
    ]
  ]
};

function approvedGalleryCopy(file, source) {
  for (const [before, after] of changes[file] || []) {
    assert.equal(source.split(before).length, 2, `${file}: one approved gallery visual anchor`);
    source = source.replace(before, after);
  }
  if (file === 'app/[locale]/about/page.tsx#hero') {
    const before = `          <div className="relative min-h-[360px] overflow-hidden rounded-[30px] border border-primary-900/10 bg-white shadow-[0_28px_78px_rgba(7,22,74,0.15)]">
            <Image src={aboutImages.hero} alt={companyGalleryHero.alt[isArabic ? 'ar' : 'en']} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>`;
    const after = `          <aside className="rounded-[30px] border border-primary-900/10 bg-white p-7 shadow-[0_28px_78px_rgba(7,22,74,0.10)]" aria-label={isArabic ? 'مكتب عناية في عجمان' : 'INAYA Ajman office'}>
            <h2 className={HEADING_CLASS_TOKEN}>{isArabic ? 'مكتب عناية في عجمان' : 'INAYA Ajman office'}</h2>
            <address className="mt-5 text-sm not-italic leading-7">{isArabic ? siteConfig.addressAr : siteConfig.address}</address>
            <p className="mt-4 text-sm leading-7">{siteConfig.hours[isArabic ? 'ar' : 'en']}</p>
            <Link href={CONTACT_HREF_TOKEN} className="mt-5 inline-block text-sm font-semibold underline underline-offset-4">{copy.contact}</Link>
          </aside>`.replace('HEADING_CLASS_TOKEN', '`${headingClass} text-2xl font-bold`').replace('CONTACT_HREF_TOKEN', '`/${locale}/contact/`');
    assert.equal(source.split(before).length, 2, 'one reviewed gallery-dependent About slot');
    source = source.replace(before, after);
  }
  if (file === 'app/[locale]/[locationSlug]/page.tsx#hero') {
    const before = `            {locationSlug === 'maid-services-ajman' ? <figure className="mb-5">
              <Image src={companyGalleryHero.src} alt={companyGalleryHero.alt[lang]} width={companyGalleryHero.width} height={companyGalleryHero.height} sizes="(max-width: 1024px) 100vw, 40vw" className="h-auto w-full rounded-[24px]" />
              <figcaption className="mt-3 text-xs leading-6 text-primary-900/70">{companyGalleryHero.caption[lang]}</figcaption>
            </figure> : null}
`;
    assert.equal(source.split(before).length, 2, 'one reviewed gallery-dependent Ajman slot');
    source = source.replace(before, '');
  }
  return source;
}

module.exports = { approvedGalleryCopy };
