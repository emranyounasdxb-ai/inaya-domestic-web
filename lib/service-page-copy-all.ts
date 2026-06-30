import { servicePageCopies as baseServicePageCopies } from './service-page-copy';
import { servicePageCopiesNext } from './service-page-copy-next';
import { servicePageCopiesMore } from './service-page-copy-more';
import { servicePageCopiesCountry } from './service-page-copy-countries';
import { serviceSeoPolish } from './service-page-seo-polish';
import type { Lang, ServiceCopy } from './service-page-copy';

export type { CompareRow, Lang, Pair, Pricing, ServiceCopy } from './service-page-copy';

const combinedServicePageCopies: Record<string, Record<Lang, ServiceCopy>> = {
  ...baseServicePageCopies,
  ...servicePageCopiesNext,
  ...servicePageCopiesMore,
  ...servicePageCopiesCountry
};

export const servicePageCopies = Object.entries(serviceSeoPolish).reduce((copies, [slug, patchByLang]) => {
  const existing = copies[slug];
  if (!existing) return copies;

  copies[slug] = {
    en: { ...existing.en, ...(patchByLang.en ?? {}) },
    ar: { ...existing.ar, ...(patchByLang.ar ?? {}) }
  };

  return copies;
}, { ...combinedServicePageCopies });
