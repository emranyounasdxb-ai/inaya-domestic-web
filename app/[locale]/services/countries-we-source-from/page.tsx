import type { Metadata } from 'next';
import CountrySourcePage from '@/components/CountrySourcePage';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return locale === 'ar'
    ? {
        title: 'دول مصدر العمالة المنزلية في الإمارات | عناية',
        description: 'قارن دول مصدر الخادمات والعمالة المنزلية في الإمارات مع عناية: الفلبين، سريلانكا، نيبال، الهند، بنغلاديش، إثيوبيا، كينيا، أوغندا، إندونيسيا وميانمار.'
      }
    : {
        title: 'Maid Source Countries in UAE | INAYA Domestic Workers',
        description: 'Compare domestic worker and maid source countries in the UAE with INAYA, including the Philippines, Sri Lanka, Nepal, India, Bangladesh, Ethiopia, Kenya, Uganda, Indonesia and Myanmar.'
      };
}

export default function CountriesWeSourceFromRoute({ params: { locale } }: { params: { locale: string } }) {
  return <CountrySourcePage locale={locale} />;
}
