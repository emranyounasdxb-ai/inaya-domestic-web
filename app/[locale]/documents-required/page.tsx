import TrustSupportPage from '@/components/TrustSupportPage';

const slug = 'documents-required';


export default async function DocumentsRequiredPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TrustSupportPage locale={locale} slug={slug} />;
}
