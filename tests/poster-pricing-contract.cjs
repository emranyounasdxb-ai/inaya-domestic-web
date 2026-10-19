// Independent acceptance values transcribed from the owner-approved price list.
// In particular, the last two amounts are monthly rates, not commitment totals.
const expectedPlans = [
  { id: 'half-day', amount: 120, billingUnit: 'package', hours: 4, price: { en: 'AED 120', ar: '120 درهماً' }, period: { en: 'for 4 hours', ar: 'مقابل 4 ساعات' } },
  { id: 'daily', amount: 200, billingUnit: 'package', hours: 8, price: { en: 'AED 200', ar: '200 درهم' }, period: { en: 'for 8 hours', ar: 'مقابل 8 ساعات' } },
  { id: 'weekly', amount: 1120, billingUnit: 'package', days: 7, price: { en: 'AED 1,120', ar: '1,120 درهماً' }, period: { en: 'for 7 days', ar: 'لمدة 7 أيام' } },
  { id: 'monthly', amount: 3500, billingUnit: 'package', days: 30, price: { en: 'AED 3,500', ar: '3,500 درهم' }, period: { en: 'for 30 days', ar: 'لمدة 30 يوماً' } },
  { id: 'six-month', amount: 3250, billingUnit: 'month', commitmentMonths: 6, price: { en: 'AED 3,250', ar: '3,250 درهماً' }, period: { en: 'per month · 6-month commitment', ar: 'شهرياً · التزام لمدة 6 أشهر' } },
  { id: 'yearly', amount: 3000, billingUnit: 'month', commitmentMonths: 12, price: { en: 'AED 3,000', ar: '3,000 درهم' }, period: { en: 'per month · 12-month commitment', ar: 'شهرياً · التزام لمدة 12 شهراً' } }
];

module.exports = { expectedPlans };
