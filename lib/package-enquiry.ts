import type { ManagedPackage } from './package-content';

export const packageEnquiryValues: Record<ManagedPackage['id'], string> = {
  'half-day': 'Half day — 4 hours', daily: 'Daily — 8 hours', weekly: 'Weekly — 7 days',
  monthly: 'Monthly — 30 days', 'six-month': '6-month contract', yearly: '12-month contract'
};

export function packageEnquiryHref(locale: string, id: ManagedPackage['id']) {
  return `/${locale}/booking/?service=${['half-day', 'daily', 'weekly'].includes(id) ? 'part-time-maid' : 'monthly-maid-contract'}&plan=${encodeURIComponent(packageEnquiryValues[id])}`;
}
