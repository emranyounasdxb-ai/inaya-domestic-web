import type { Metadata } from 'next';
import { getTrustSupportPage, type Lang } from './trust-support-pages';

export function generateTrustSupportMetadata(locale: string, slug: string): Metadata {
  const page = getTrustSupportPage(slug);
  if (!page) return {};

  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const canonical = `/${locale}/${page.path}`;

  return {
    title: page.metaTitle[lang],
    description: page.metaDescription[lang],
    alternates: {
      canonical,
      languages: {
        en: `/en/${page.path}`,
        ar: `/ar/${page.path}`
      }
    },
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
