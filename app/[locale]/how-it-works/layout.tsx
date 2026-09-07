import type { Metadata } from 'next';
import PhaseOneSeoSection from '@/components/PhaseOneSeoSection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
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

export default async function HowItWorksLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <>
      {children}
      <PhaseOneSeoSection page="how" locale={locale} />
    </>
  );
}
