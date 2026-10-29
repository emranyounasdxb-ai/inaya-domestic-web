import { keywordArticleMetadata } from './keyword-article-metadata';
import { newArticleMetadata } from './new-article-metadata';

// Concise search snippets; the full customer questions remain as article headings.
export const articleSearchTitles: Record<string, Partial<Record<'en' | 'ar', string>>> = {
  ...Object.fromEntries(keywordArticleMetadata.map(article => [article.slug, { en: article.en.searchTitle, ar: article.ar.searchTitle }])),
  ...Object.fromEntries(newArticleMetadata.map(article => [article.slug, { en: article.en.searchTitle, ar: article.ar.searchTitle }])),
  'domestic-worker-employment-arrangements-uae': { en: 'Live-in, Live-out or Temporary Domestic Help' },
  'all-inclusive-domestic-worker-packages': { en: 'What Does a Domestic Worker Package Include?' },
  'domestic-worker-sponsorship-responsibilities': { en: 'Domestic Worker Sponsorship Responsibilities' },
  'domestic-worker-employer-eligibility-documents': { en: 'Domestic Worker Permit Eligibility & Documents' },
  'domestic-worker-hiring-stages-timelines': { en: 'Domestic Worker Hiring in Ajman: Stages & Timelines' },
  'domestic-worker-skills-language-assessment': { en: "Choosing a Domestic Worker's Skills & Language" },
  'caregiver-versus-licensed-nurse': { en: 'Caregiver or Licensed Nurse: Which Do You Need?' },
  'agreeing-domestic-worker-household-duties': {
    en: 'Cleaning, Cooking & Childcare: Agreeing Maid Duties',
    ar: 'مهام العاملة المنزلية: التنظيف والطهي ورعاية الأطفال',
  },
  'domestic-worker-interview-trial-probation': {
    en: 'Domestic Worker Interviews, Trials & Probation',
    ar: 'توظيف عامل مساعد: المقابلة والتجربة وفترة الاختبار',
  },
  'domestic-worker-contracts-renewal': { en: 'Domestic Worker Contracts & Renewal Guide' },
  'domestic-worker-wages-rest-leave': {
    en: 'Domestic Worker Wages, Rest & Leave Guide',
    ar: 'أجور العامل المساعد وراحته وإجازاته',
  },
  'own-visa-part-time-domestic-work': { en: 'Own Visa & Part-time Domestic Work: What to Check' },
  'domestic-worker-leave-travel-planning': { en: "Planning a Domestic Worker's Annual Leave & Travel" },
  'domestic-worker-complaints-disputes': { en: 'Domestic Worker Complaints & Agency Disputes' },
  'home-cooking-weekly-meal-prep-plan': { en: 'Home Cooking & Weekly Meal Prep with a Maid' },
  'new-maid-first-week-checklist': { en: 'New Maid First Week: Household Checklist' },
  'maid-help-family-guests-gathering': { en: 'Maid Help for Guests & Family Gatherings' },
  'maid-duties-family-holiday': { en: 'Maid Duties While the Family Is on Holiday' },
  'moving-home-emirate-with-domestic-worker': { ar: 'الانتقال إلى منزل أو إمارة أخرى مع العاملة المنزلية' },
  'domestic-worker-contract-permit-residence-cancellation': { en: 'Domestic Worker Contract, Permit & Residence Cancellation' },
};
