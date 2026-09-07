import type { Metadata } from 'next';
import { allServices, getServiceWithExtras } from '@/lib/service-helpers';
import { servicePageCopies, type Lang } from '@/lib/service-page-copy-all';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const staticServicePages = ['countries-we-source-from'];

export function generateStaticParams() {
  return allServices
    .filter((service) => !staticServicePages.includes(service.slug))
    .map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceWithExtras(slug);
  if (!service) return {};

  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const pageCopy = servicePageCopies[slug]?.[lang];
  const title = pageCopy?.title ?? service.name[lang];
  const description = pageCopy?.meta ?? service.short[lang];
  const canonical = `/${locale}/services/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `/en/services/${slug}`,
        ar: `/ar/services/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: lang === 'ar' ? 'ar_AE' : 'en_AE',
      url: canonical
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  return <ServiceDetailTemplate locale={locale} slug={slug} />;
}
