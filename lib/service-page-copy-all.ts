import { servicePageCopies as baseServicePageCopies } from './service-page-copy';
import { servicePageCopiesNext } from './service-page-copy-next';
import { servicePageCopiesMore } from './service-page-copy-more';
import { servicePageCopiesCountry } from './service-page-copy-countries';

export type { CompareRow, Lang, Pair, Pricing, ServiceCopy } from './service-page-copy';

export const servicePageCopies = {
  ...baseServicePageCopies,
  ...servicePageCopiesNext,
  ...servicePageCopiesMore,
  ...servicePageCopiesCountry
};
