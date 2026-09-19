import type { Metadata } from 'next';
import { localeAlternates, localizedUrl } from '@/lib/seo';
import { getTrustSupportPage, type Lang } from './trust-support-pages';

export function generateTrustSupportMetadata(locale: string, slug: string, routePath = slug): Metadata {
  const page = getTrustSupportPage(slug);
  if (!page) return {};

  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const canonical = localizedUrl(locale, routePath);

  return {
    title: page.metaTitle[lang],
    description: page.metaDescription[lang],
    alternates: localeAlternates(locale, routePath),
    openGraph: {
      title: page.metaTitle[lang],
      description: page.metaDescription[lang],
      type: 'website',
      locale: lang === 'ar' ? 'ar_AE' : 'en_AE',
      url: canonical
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle[lang],
      description: page.metaDescription[lang]
    }
  };
}
