import TrustSupportPage from '@/components/TrustSupportPage';

const slug = 'privacy-policy';


export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TrustSupportPage locale={locale} slug={slug} />;
}
