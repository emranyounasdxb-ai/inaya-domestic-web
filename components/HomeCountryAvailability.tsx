import Link from 'next/link';

const countries = [
  { code: 'lk', en: 'Sri Lanka', ar: 'سريلانكا' },
  { code: 'np', en: 'Nepal', ar: 'نيبال' },
  { code: 'mm', en: 'Myanmar', ar: 'ميانمار' },
  { code: 'ph', en: 'Philippines', ar: 'الفلبين' },
  { code: 'in', en: 'India', ar: 'الهند' },
  { code: 'bd', en: 'Bangladesh', ar: 'بنغلاديش' },
  { code: 'et', en: 'Ethiopia', ar: 'إثيوبيا' },
  { code: 'ke', en: 'Kenya', ar: 'كينيا' },
  { code: 'gh', en: 'Ghana', ar: 'غانا' },
  { code: 'ug', en: 'Uganda', ar: 'أوغندا' },
  { code: 'sl', en: 'Sierra Leone', ar: 'سيراليون' },
  { code: 'id', en: 'Indonesia', ar: 'إندونيسيا' }
];

const copy = {
  en: {
    eyebrow: 'Available Nationalities',
    title: 'Countries We Source Domestic Workers From',
    text: 'INAYA provides domestic worker profiles from trusted source countries based on availability, experience, documents, language preference and family needs across the UAE.',
    note: 'Profiles are subject to current availability, documentation and service requirements.',
    cta: 'Explore Countries',
    tag: 'Available profiles'
  },
  ar: {
    eyebrow: 'الجنسيات المتوفرة',
    title: 'الدول التي نوفر منها العمالة المنزلية',
    text: 'توفر عناية ملفات عمالة منزلية من عدة دول حسب التوفر والخبرة والمستندات واللغة واحتياج الأسرة داخل الإمارات.',
    note: 'تخضع الملفات للتوفر الحالي والمستندات ومتطلبات الخدمة.',
    cta: 'استكشف الدول',
    tag: 'ملفات متاحة'
  }
};

export default function HomeCountryAvailability({ locale }: { locale: string }) {
  const lang = locale === 'ar' ? 'ar' : 'en';
  const t = copy[lang];

  return (
    <section className="home-country-section" data-home-country-availability="true">
      <div className="home-country-shell">
        <div className="home-country-heading">
          <p>{t.eyebrow}</p>
          <h2>{t.title}</h2>
          <span aria-hidden="true" />
          <div>{t.text}</div>
        </div>

        <div className="home-country-scroll" dir="ltr">
          {countries.map((country) => {
            const name = lang === 'ar' ? country.ar : country.en;

            return (
              <article className="home-country-card" key={country.code}>
                <div className="home-country-flag">
                  <img src={`https://flagcdn.com/w80/${country.code}.png`} alt={`${name} flag`} loading="lazy" />
                </div>
                <div className="home-country-content">
                  <h3>{name}</h3>
                  <p>{t.tag}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="home-country-footer">
          <p>{t.note}</p>
          <Link href={`/${locale}/services/countries-we-source-from`}>{t.cta}</Link>
        </div>
      </div>
    </section>
  );
}
