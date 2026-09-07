import type { Metadata } from 'next';
import TrustSupportPage from '@/components/TrustSupportPage';
import { generateTrustSupportMetadata } from '@/lib/trust-support-metadata';

const slug = 'documents-required';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generateTrustSupportMetadata(locale, slug);
}

export default async function DocumentsRequiredPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TrustSupportPage locale={locale} slug={slug} />;
}
