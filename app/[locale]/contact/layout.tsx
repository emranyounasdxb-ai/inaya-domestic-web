import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/page-seo';
import RouteSeo from '@/components/RouteSeo';
import BuyerAnswer from '@/components/BuyerAnswer';
import PhaseOneSeoSection from '@/components/PhaseOneSeoSection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'contact');
}

export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <>
    <RouteSeo locale={locale} route="contact" />
    {children}
    <BuyerAnswer locale={locale} route="contact" />
    <PhaseOneSeoSection page="contact" locale={locale} />
  </>;
}
