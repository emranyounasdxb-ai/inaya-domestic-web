import type { Metadata } from 'next';
import PhaseOneSeoSection from '@/components/PhaseOneSeoSection';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return locale === 'ar'
    ? {
        title: 'كيف تعمل عناية | خطوات اختيار خادمة في الإمارات',
        description: 'تعرف على خطوات عناية لاختيار خادمة أو عاملة منزلية في الإمارات من الاستشارة إلى مطابقة الخدمة وتأكيد المستندات والمتابعة.'
      }
    : {
        title: 'How INAYA Works | Hire a Maid or Domestic Worker in UAE',
        description: 'See how INAYA helps UAE families hire maid services, nannies, cooks, caregivers and visa support through a clear guided process.'
      };
}

export default function HowItWorksLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <>
      {children}
      <PhaseOneSeoSection page="how" locale={locale} />
    </>
  );
}
