import type { MetadataRoute } from 'next';
import { allServices } from '@/lib/service-helpers';
import { countrySourcePages } from '@/lib/country-source-pages';
import { locationServicePages } from '@/lib/location-service-pages';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://inayadomestic.ae';
const locales = ['en', 'ar'] as const;
const now = new Date();

const coreRoutes = [
  '',
  'about',
  'services',
  'contact',
  'how-it-works',
  'service-areas',
  'services/countries-we-source-from'
];

function localizedEntry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'weekly') {
  return locales.map((locale) => {
    const normalizedPath = path ? `/${locale}/${path}` : `/${locale}`;
    const enPath = path ? `/en/${path}` : '/en';
    const arPath = path ? `/ar/${path}` : '/ar';

    return {
      url: `${siteUrl}${normalizedPath}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          en: `${siteUrl}${enPath}`,
          ar: `${siteUrl}${arPath}`
        }
      }
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages = coreRoutes.flatMap((route) => localizedEntry(route, route === '' ? 1 : 0.85));

  const servicePages = allServices.flatMap((service) => (
    localizedEntry(`services/${service.slug}`, service.slug === 'countries-we-source-from' ? 0.9 : 0.86)
  ));

  const countryPages = countrySourcePages.flatMap((country) => (
    localizedEntry(`maid-source-countries/${country.slug}`, 0.78)
  ));

  const locationPages = locationServicePages.flatMap((location) => (
    localizedEntry(location.slug, 0.82)
  ));

  const uniqueEntries = new Map<string, MetadataRoute.Sitemap[number]>();

  for (const entry of [...corePages, ...servicePages, ...countryPages, ...locationPages]) {
    uniqueEntries.set(entry.url, entry);
  }

  return Array.from(uniqueEntries.values());
}
