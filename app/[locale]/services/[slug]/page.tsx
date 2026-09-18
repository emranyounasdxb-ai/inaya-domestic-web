import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/page-seo';
import RouteSeo from '@/components/RouteSeo';
import { allServices } from '@/lib/service-helpers';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const staticServicePages = ['countries-we-source-from'];

export function generateStaticParams() {
  return allServices
    .filter((service) => !staticServicePages.includes(service.slug))
    .map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  return pageMetadata(locale, `services/${slug}`);
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  return <><RouteSeo locale={locale} route={`services/${slug}`} /><ServiceDetailTemplate locale={locale} slug={slug} /></>;
}
