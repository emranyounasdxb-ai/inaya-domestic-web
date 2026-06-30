import type { Metadata } from 'next';
import TrustSupportPage from '@/components/TrustSupportPage';
import { generateTrustSupportMetadata } from '@/lib/trust-support-metadata';
import { trustSupportPages } from '@/lib/trust-support-pages';

const slug = trustSupportPages[5].slug;

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return generateTrustSupportMetadata(locale, slug);
}

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  return <TrustSupportPage locale={locale} slug={slug} />;
}
