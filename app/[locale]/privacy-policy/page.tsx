import type { Metadata } from 'next';
import TrustSupportPage from '@/components/TrustSupportPage';
import { generateTrustSupportMetadata } from '@/lib/trust-support-metadata';

const slug = 'privacy-policy';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generateTrustSupportMetadata(locale, slug);
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TrustSupportPage locale={locale} slug={slug} />;
}
