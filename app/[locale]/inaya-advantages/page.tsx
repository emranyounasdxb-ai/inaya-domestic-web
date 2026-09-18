import TrustSupportPage from '@/components/TrustSupportPage';

const slug = ['why', 'choose', 'inaya'].join('-');


export default async function InayaAdvantagesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TrustSupportPage locale={locale} slug={slug} />;
}
