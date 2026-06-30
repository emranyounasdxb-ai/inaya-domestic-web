import type { Metadata } from 'next';
import PhaseOneSeoSection from '@/components/PhaseOneSeoSection';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return locale === 'ar'
    ? {
        title: 'عن عناية للعمالة المنزلية | شركة خادمات موثوقة في الإمارات',
        description: 'تعرف على عناية للعمالة المنزلية، شركة خدمات خادمات وعمالة منزلية موثوقة في الإمارات تقدم إرشاداً واضحاً للأسر في عجمان ودبي والشارقة وأبوظبي.'
      }
    : {
        title: 'About INAYA Domestic Workers | Trusted Maid Agency UAE',
        description: 'Learn about INAYA Domestic Workers, a trusted UAE maid and domestic worker service supporting families in Ajman, Dubai, Sharjah, Abu Dhabi and across the UAE.'
      };
}

export default function AboutLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <>
      {children}
      <PhaseOneSeoSection page="about" locale={locale} />
    </>
  );
}
