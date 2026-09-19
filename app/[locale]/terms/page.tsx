import TrustSupportPage from '@/components/TrustSupportPage';
import { trustSupportPages } from '@/lib/trust-support-pages';

const slug = trustSupportPages[5].slug;


export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TrustSupportPage locale={locale} slug={slug} />;
}
