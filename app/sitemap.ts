import type { MetadataRoute } from 'next';
import { allServices } from '@/lib/service-helpers';
import { countrySourcePages } from '@/lib/country-source-pages';
import { locationServicePages } from '@/lib/location-service-pages';
import { domesticWorkerGuides } from '@/lib/domestic-worker-guides';
import { localizedUrl, localeAlternates } from '@/lib/seo';

const locales = ['en', 'ar'] as const;

// Record substantive content updates, not build times. Leave untracked routes undated.
const contentUpdatedAt: Record<string, string> = {
  'maid-services-ajman': '2026-10-19',
  'services/part-time-maid': '2026-10-19',
  'services/monthly-maid-contract': '2026-10-19',
  'services/nanny': '2026-10-19',
  'services/babysitting': '2026-10-19',
  'services/housekeeping': '2026-10-19'
};

export const dynamic = 'force-static';

const coreRoutes = [
  '',
  'about',
  'services',
  'contact',
  'how-it-works',
  'service-areas',
  'services/countries-we-source-from',
  'booking',
  'careers',
  'pricing',
  'blog'
];

const trustRoutes = [
  'faq',
  'documents-required',
  'inaya-advantages',
  'reviews',
  'privacy-policy',
  'terms',
  'refund-policy',
  'service-guidelines',
  'support-process'
];

function localizedEntry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'weekly') {
  return locales.map((locale) => {
    return {
      url: localizedUrl(locale, path),
      ...(contentUpdatedAt[path] ? { lastModified: contentUpdatedAt[path] } : {}),
      changeFrequency,
      priority,
      alternates: {
        languages: {
          ...localeAlternates(locale, path).languages
        }
      }
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages = coreRoutes.flatMap((route) => localizedEntry(route, route === '' ? 1 : 0.85));
  const trustPages = trustRoutes.flatMap((route) => localizedEntry(route, 0.72, 'monthly'));

  const servicePages = allServices.flatMap((service) => (
    localizedEntry(`services/${service.slug}`, service.slug === 'countries-we-source-from' ? 0.9 : 0.86)
  ));

  const countryPages = countrySourcePages.flatMap((country) => (
    localizedEntry(`maid-source-countries/${country.slug}`, 0.78)
  ));

  const locationPages = locationServicePages.flatMap((location) => (
    localizedEntry(location.slug, 0.82)
  ));

  const guidePages = domesticWorkerGuides.flatMap((guide) => (
    localizedEntry(`blog/${guide.slug}`, 0.76, 'monthly')
  ));

  const uniqueEntries = new Map<string, MetadataRoute.Sitemap[number]>();

  for (const entry of [...corePages, ...trustPages, ...servicePages, ...countryPages, ...locationPages, ...guidePages]) {
    uniqueEntries.set(entry.url, entry);
  }

  return Array.from(uniqueEntries.values());
}
