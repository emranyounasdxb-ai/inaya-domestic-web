import type { Metadata } from 'next';
import { services, getService } from '@/lib/services';
import { servicePageCopies, type Lang } from '@/lib/service-page-copy-all';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const service = getService(slug);
  if (!service) return {};

  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const pageCopy = servicePageCopies[slug]?.[lang];

  return {
    title: pageCopy?.title ?? service.name[lang],
    description: pageCopy?.meta ?? service.short[lang]
  };
}

export default function ServiceDetailPage({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  return <ServiceDetailTemplate locale={locale} slug={slug} />;
}
