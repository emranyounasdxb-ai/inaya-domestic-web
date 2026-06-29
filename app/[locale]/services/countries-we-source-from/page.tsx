import type { Metadata } from 'next';
import CountrySourcePage from '@/components/CountrySourcePage';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return locale === 'ar'
    ? {
        title: 'دليل دول المصدر في الإمارات | عناية',
        description: 'استكشف دليل دول المصدر مع عناية من خلال بطاقات الدول والأعلام واستشارة واضحة تعتمد على الملف الفردي والخبرة والمستندات واحتياج الأسرة.'
      }
    : {
        title: 'Country Source Guide in UAE | INAYA',
        description: 'Explore INAYA country source guidance through flag cards and profile-first consultation based on experience, documents, communication and family needs.'
      };
}

export default function CountriesWeSourceFromRoute({ params: { locale } }: { params: { locale: string } }) {
  return <CountrySourcePage locale={locale} />;
}
