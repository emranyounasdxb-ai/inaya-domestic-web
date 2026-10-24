import type { MetadataRoute } from 'next';
import { allServices } from '@/lib/service-helpers';
import { countrySourcePages } from '@/lib/country-source-pages';
import { locationServicePages } from '@/lib/location-service-pages';
import { domesticWorkerGuides } from '@/lib/domestic-worker-guides';
import { localizedUrl, localeAlternates } from '@/lib/seo';
import { companyInformation } from '@/lib/company-information';

const locales = ['en', 'ar'] as const;

// Record substantive content updates, not build times. Leave untracked routes undated.
const contentUpdatedAt: Record<string, string> = {
  [companyInformation.route]: companyInformation.updated,
  "gallery": '2026-10-22',
  "about": '2026-10-22',
  "contact": '2026-10-22',
  "blog/domestic-worker-contract-permit-residence-cancellation": '2026-10-20',
  "blog/maid-daily-instructions-handover-template": '2026-10-22',
  "blog/one-maid-two-helpers-workload": '2026-10-20',
  "blog/moving-home-emirate-with-domestic-worker": '2026-10-20',
  "blog/domestic-worker-leave-travel-planning": '2026-10-20',
  "blog/maid-duties-family-holiday": '2026-10-20',
  "blog/maid-help-family-guests-gathering": '2026-10-20',
  "blog/maid-home-access-keys-privacy": '2026-10-20',
  "blog/maid-household-with-pets": '2026-10-20',
  "blog/nanny-school-routine-child-handover": '2026-10-20',
  "blog/new-maid-first-week-checklist": '2026-10-22',
  "blog/home-cooking-weekly-meal-prep-plan": '2026-10-20',
  "blog/maid-laundry-ironing-task-checklist": '2026-10-20',
  "blog/prepare-cleaning-supplies-maid-visit": '2026-10-20',
  "blog/regular-maid-service-deep-move-in-cleaning": '2026-10-20',
  "blog/apartment-villa-maid-task-plan": '2026-10-20',
  "blog/maid-visit-frequency-planner": '2026-10-20',
  "blog/four-hour-eight-hour-maid-visit-plan": '2026-10-24',
  "": '2026-10-19',
  "blog": '2026-10-24',
  "blog/agreeing-domestic-worker-household-duties": '2026-10-22',
  "blog/all-inclusive-domestic-worker-packages": '2026-10-19',
  "blog/caregiver-versus-licensed-nurse": '2026-10-19',
  "blog/choosing-domestic-worker-agency-ajman": '2026-10-24',
  "blog/choosing-nanny-newborn-support": '2026-10-19',
  "blog/domestic-worker-complaints-disputes": '2026-10-19',
  "blog/domestic-worker-contracts-renewal": '2026-10-19',
  "blog/domestic-worker-employment-arrangements-uae": '2026-10-24',
  "blog/domestic-worker-employer-eligibility-documents": '2026-10-24',
  "blog/domestic-worker-hiring-costs-uae": '2026-10-22',
  "blog/domestic-worker-hiring-stages-timelines": '2026-10-24',
  "blog/domestic-worker-interview-trial-probation": '2026-10-22',
  "blog/domestic-worker-package-pricing-factors": '2026-10-19',
  "blog/domestic-worker-replacement-eligibility": '2026-10-19',
  "blog/domestic-worker-skills-language-assessment": '2026-10-22',
  "blog/domestic-worker-sponsorship-responsibilities": '2026-10-19',
  "blog/domestic-worker-verification-checks": '2026-10-19',
  "blog/live-in-live-out-part-time-maid-uae": '2026-10-19',
  "blog/maid-nanny-babysitter-differences": '2026-10-19',
  "blog/monthly-maid-package-inclusions-checklist": '2026-10-19',
  "blog/own-visa-part-time-domestic-work": '2026-10-19',
  "blog/uae-domestic-worker-hiring-process": '2026-10-19',
  "booking": '2026-10-19',
  "documents-required": '2026-10-19',
  "faq": '2026-10-19',
  "how-it-works": '2026-10-19',
  "inaya-advantages": '2026-10-19',
  "maid-services-ajman": '2026-10-24',
  "maid-services-dubai": '2026-10-22',
  "maid-services-sharjah": '2026-10-22',
  "pricing": '2026-10-23',
  "refund-policy": '2026-10-19',
  "service-guidelines": '2026-10-19',
  "services": '2026-10-24',
  "services/babysitting": '2026-10-19',
  "services/bespoke-household-management": '2026-10-19',
  "services/companion-care": '2026-10-19',
  "services/elder-care": '2026-10-19',
  "services/executive-nannies": '2026-10-19',
  "services/experienced-maid": '2026-10-19',
  "services/full-time-maid": '2026-10-19',
  "services/house-managers": '2026-10-19',
  "services/housekeeping": '2026-10-24',
  "services/housemaid": '2026-10-19',
  "services/live-in-maid": '2026-10-19',
  "services/live-out-maid": '2026-10-19',
  "services/maid-replacement": '2026-10-19',
  "services/maid-visa": '2026-10-24',
  "services/monthly-maid-contract": '2026-10-19',
  "services/nanny": '2026-10-19',
  "services/newborn-care": '2026-10-19',
  "services/on-demand-domestic-help": '2026-10-19',
  "services/part-time-maid": '2026-10-19',
  "services/patient-care": '2026-10-19',
  "services/private-chefs": '2026-10-19',
  "services/recruitment": '2026-10-24',
  "services/sponsorship-transfer": '2026-10-19',
  "support-process": '2026-10-19',
  "terms": '2026-10-19'
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

  for (const entry of [...corePages, ...trustPages, ...servicePages, ...countryPages, ...locationPages, ...guidePages, ...localizedEntry('gallery', 0.65, 'monthly'), ...localizedEntry(companyInformation.route, 0.72, 'monthly')]) {
    uniqueEntries.set(entry.url, entry);
  }

  return Array.from(uniqueEntries.values());
}
