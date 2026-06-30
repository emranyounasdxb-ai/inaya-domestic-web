import type { Metadata } from 'next';
import TrustSupportPage from '@/components/TrustSupportPage';
import { generateTrustSupportMetadata } from '@/lib/trust-support-metadata';

const slug = 'documents-required';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return generateTrustSupportMetadata(locale, slug);
}

export default function InayaAdvantagesPage({ params: { locale } }: { params: { locale: string } }) {
  return <TrustSupportPage locale={locale} slug={slug} />;
}
