export const blogCategories = {
  prices: { en: 'Prices and packages', ar: 'الأسعار والباقات' },
  hiring: { en: 'Hiring and service selection', ar: 'التوظيف واختيار الخدمة' },
  visa: { en: 'Visa and documents', ar: 'التأشيرات والمستندات' },
  childcare: { en: 'Childcare', ar: 'رعاية الأطفال' },
  household: { en: 'Household planning', ar: 'التخطيط المنزلي' },
  careers: { en: 'Office careers', ar: 'وظائف المكتب' }
};
export type BlogCategory = keyof typeof blogCategories;

export function blogCategory(slug: string): BlogCategory {
  if (slug === 'inaya-office-staff-careers-ajman') return 'careers';
  if (/nanny|babysitter|newborn|child|school/.test(slug)) return 'childcare';
  if (/price|pricing|cost|package|monthly-maid-service-ajman-commitment-budget/.test(slug)) return 'prices';
  if (/visa|permit|sponsor|document|case-status/.test(slug)) return 'visa';
  if (/hiring|recruit|agency|centre|center|tadbeer|verification|interview|contract|eligibility|rights|wages|complaint|refund|employment/.test(slug)) return 'hiring';
  return 'household';
}
