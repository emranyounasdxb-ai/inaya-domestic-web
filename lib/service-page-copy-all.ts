import { servicePageCopies as baseServicePageCopies } from './service-page-copy';
import { servicePageCopiesNext } from './service-page-copy-next';

export type { CompareRow, Lang, Pair, Pricing, ServiceCopy } from './service-page-copy';

export const servicePageCopies = {
  ...baseServicePageCopies,
  ...servicePageCopiesNext
};
