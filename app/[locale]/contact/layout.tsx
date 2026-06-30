import type { Metadata } from 'next';
import PhaseOneSeoSection from '@/components/PhaseOneSeoSection';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return locale === 'ar'
    ? {
        title: 'اتصل بعناية | خدمات خادمات وعمالة منزلية في الإمارات',
        description: 'تواصل مع عناية للعمالة المنزلية لطلب خادمات ومربيات وطهاة ورعاية منزلية في عجمان ودبي والشارقة وأبوظبي وجميع إمارات الدولة.'
      }
    : {
        title: 'Contact INAYA | Maid & Domestic Worker Services UAE',
        description: 'Contact INAYA Domestic Workers for maid, nanny, cook, caregiver, recruitment and maid visa support in Ajman, Dubai, Sharjah, Abu Dhabi and across the UAE.'
      };
}

export default function ContactLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <>
      {children}
      <PhaseOneSeoSection page="contact" locale={locale} />
    </>
  );
}
