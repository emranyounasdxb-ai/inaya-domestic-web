import type { Metadata } from 'next';
import PhaseOneSeoSection from '@/components/PhaseOneSeoSection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
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

export default async function AboutLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      {children}
      <PhaseOneSeoSection page="about" locale={locale} />
    </>
  );
}
