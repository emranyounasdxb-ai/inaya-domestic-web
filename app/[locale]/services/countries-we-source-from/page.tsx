import type { Metadata } from 'next';
import CountrySourcePage from '@/components/CountrySourcePage';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const isArabic = locale === 'ar';
  const title = isArabic ? 'دول مصدر العمالة المنزلية في الإمارات | عناية' : 'Maid Source Countries in UAE | INAYA Domestic Workers';
  const description = isArabic
    ? 'قارن دول مصدر الخادمات والعمالة المنزلية في الإمارات مع عناية: الفلبين، سريلانكا، نيبال، الهند، بنغلاديش، إثيوبيا، كينيا، أوغندا، إندونيسيا وميانمار.'
    : 'Compare domestic worker and maid source countries in the UAE with INAYA, including the Philippines, Sri Lanka, Nepal, India, Bangladesh, Ethiopia, Kenya, Uganda, Indonesia and Myanmar.';
  const canonical = `/${locale}/services/countries-we-source-from`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: '/en/services/countries-we-source-from',
        ar: '/ar/services/countries-we-source-from'
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: isArabic ? 'ar_AE' : 'en_AE',
      url: canonical
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export default function CountriesWeSourceFromRoute({ params: { locale } }: { params: { locale: string } }) {
  return <CountrySourcePage locale={locale} />;
}
