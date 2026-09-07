import type { Metadata } from 'next';
import TrustSupportPage from '@/components/TrustSupportPage';
import { generateTrustSupportMetadata } from '@/lib/trust-support-metadata';
import { trustSupportPages } from '@/lib/trust-support-pages';

const slug = trustSupportPages[5].slug;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generateTrustSupportMetadata(locale, slug);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TrustSupportPage locale={locale} slug={slug} />;
}
