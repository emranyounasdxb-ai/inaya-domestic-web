import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/page-seo';
import RouteSeo from '@/components/RouteSeo';
import PhaseOneSeoSection from '@/components/PhaseOneSeoSection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'how-it-works');
}

export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <>
    <RouteSeo locale={locale} route="how-it-works" />
    {children}
    <PhaseOneSeoSection page="how" locale={locale} />
  </>;
}
