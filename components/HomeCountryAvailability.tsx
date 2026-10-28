import Image from 'next/image';
import Link from 'next/link';
import { countrySourcePages } from '@/lib/country-source-pages';

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
    eyebrow: 'Nationality Preferences',
    title: 'Countries We Source Domestic Workers From',
    text: 'INAYA provides domestic worker profiles from trusted source countries based on availability, experience, documents, language preference and family needs across the UAE.',
    note: 'Profiles are subject to current availability, documentation and service requirements.',
    cta: 'Explore Countries',
    tag: 'Candidate profiles'
  },
  ar: {
    eyebrow: 'تفضيلات الجنسية',
    title: 'الدول التي نوفر منها العمالة المنزلية',
    text: 'توفر عناية ملفات عمالة منزلية من عدة دول حسب التوفر والخبرة والمستندات واللغة واحتياج الأسرة داخل الإمارات.',
    note: 'تخضع الملفات للتوفر الحالي والمستندات ومتطلبات الخدمة.',
    cta: 'استكشف الدول',
    tag: 'ملفات المرشحات'
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
            const guide = countrySourcePages.find(page => page.code === country.code);
            if (!guide) throw new Error(`Missing country guide: ${country.code}`);

            return (
              <Link href={`/${locale}/maid-source-countries/${guide.slug}/`} className="home-country-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-700" key={country.code}>
                <div className="home-country-flag">
                  <Image src={`/flags/${country.code}.svg`} alt={lang === 'ar' ? `علم ${name}` : `${name} flag`} width={80} height={48} unoptimized />
                </div>
                <div className="home-country-content">
                  <h3>{name}</h3>
                  <p>{t.tag}</p>
                </div>
              </Link>
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
