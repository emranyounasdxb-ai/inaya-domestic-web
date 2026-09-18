import TrustSupportPage from '@/components/TrustSupportPage';

const slug = 'reviews';


export default async function ReviewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TrustSupportPage locale={locale} slug={slug} />;
}
