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
  return source;
}

module.exports = { approvedGalleryCopy };
