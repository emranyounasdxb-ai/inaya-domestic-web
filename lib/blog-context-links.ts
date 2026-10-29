import { articleInline, type ArticleInline } from './article-markdown';

export type BlogInlinePart = ArticleInline & { contextual?: boolean };

type Rule = { slug: string; en: string[]; ar: string[] };
const rules: Rule[] = [
  { slug: 'domestic-worker-contracts-renewal', en: ['employment contract', 'written agreement', 'contract terms', 'contracts'], ar: ['عقد العمل', 'الاتفاق المكتوب', 'شروط العقد', 'العقود'] },
  { slug: 'domestic-worker-sponsorship-responsibilities', en: ['named employer', 'sponsorship', 'employer responsibilities'], ar: ['صاحب العمل المسجل', 'الكفالة', 'مسؤوليات صاحب العمل'] },
  { slug: 'domestic-worker-employer-eligibility-documents', en: ['work permit', 'required documents', 'eligibility'], ar: ['تصريح العمل', 'المستندات المطلوبة', 'الأهلية'] },
  { slug: 'domestic-worker-hiring-costs-uae', en: ['recruitment cost', 'service fees', 'costs', 'fees'], ar: ['تكلفة الاستقدام', 'رسوم الخدمة', 'التكاليف', 'الرسوم'] },
  { slug: 'domestic-worker-package-pricing-factors', en: ['package prices', 'package price', 'pricing', 'quotation'], ar: ['أسعار الباقات', 'سعر الباقة', 'الأسعار', 'عرض السعر'] },
  { slug: 'agreeing-domestic-worker-household-duties', en: ['household duties', 'task list', 'duties'], ar: ['المهام المنزلية', 'قائمة المهام', 'المهام'] },
  { slug: 'domestic-worker-employment-arrangements-uae', en: ['employment arrangement', 'service arrangement', 'live-in', 'live-out'], ar: ['ترتيب التوظيف', 'ترتيب الخدمة', 'الإقامة داخل المنزل', 'الإقامة خارج المنزل'] },
  { slug: 'domestic-worker-skills-language-assessment', en: ['language skills', 'individual experience', 'language', 'experience'], ar: ['مهارات اللغة', 'الخبرة الفردية', 'اللغة', 'الخبرة'] },
  { slug: 'domestic-worker-replacement-eligibility', en: ['replacement', 'replacing the worker'], ar: ['الاستبدال', 'استبدال العاملة'] },
  { slug: 'domestic-worker-recruitment-refund-rules', en: ['refund', 'refunding'], ar: ['استرداد', 'رد الرسوم'] },
  { slug: 'domestic-worker-complaints-disputes', en: ['complaint', 'dispute'], ar: ['الشكوى', 'الشكاوى', 'النزاع'] },
  { slug: 'domestic-worker-wages-rest-leave', en: ['wages', 'rest', 'annual leave'], ar: ['الأجور', 'الراحة', 'الإجازة السنوية'] },
  { slug: 'maid-home-access-keys-privacy', en: ['privacy', 'home access', 'keys'], ar: ['الخصوصية', 'دخول المنزل', 'المفاتيح'] },
  { slug: 'new-maid-first-week-checklist', en: ['first week', 'orientation'], ar: ['الأسبوع الأول', 'تهيئة العاملة'] },
  { slug: 'maid-daily-instructions-handover-template', en: ['handover', 'daily instructions'], ar: ['التسليم', 'التعليمات اليومية'] },
  { slug: 'domestic-worker-hiring-stages-timelines', en: ['recruitment process', 'start date', 'processing time'], ar: ['مراحل الاستقدام', 'موعد البدء', 'مدة المعالجة'] },
  { slug: 'domestic-worker-interview-trial-probation', en: ['interview', 'trial', 'probation'], ar: ['المقابلة', 'التجربة', 'الاختبار'] },
  { slug: 'domestic-workers-meaning-roles-uae', en: ['domestic worker', 'domestic-worker', 'household role'], ar: ['العمل المنزلي', 'العمالة المنزلية', 'العامل المنزلي', 'العاملة المنزلية'] },
];

// Only existing text is linked: no new claims, replacement prose or hidden keywords.
// A target is introduced once per article, and existing manuscript links win.
export function createBlogInlineParser(slug: string, lang: 'en' | 'ar', manuscript = '') {
  const used = new Set([...manuscript.matchAll(/https:\/\/inayadomestic\.ae\/(?:en|ar)\/blog\/([^/)]+)\//g)].map(m => m[1]));
  let introduced = 0;
  const eligible = rules.filter(rule => rule.slug !== slug && (slug !== 'inaya-office-staff-careers-ajman' || rule.slug === 'domestic-workers-meaning-roles-uae'));
  return (input: string): BlogInlinePart[] => articleInline(input).flatMap(part => {
    if (part.type !== 'text' || introduced >= 4) return [part];
    const result: BlogInlinePart[] = [];
    let offset = 0;
    while (offset < part.text.length && introduced < 4) {
      let chosen: { start: number; end: number; slug: string } | undefined;
      for (const rule of eligible) {
        if (used.has(rule.slug)) continue;
        for (const phrase of rule[lang]) {
          const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const pattern = new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, 'giu');
          pattern.lastIndex = offset;
          const match = pattern.exec(part.text);
          if (match && (!chosen || match.index < chosen.start || (match.index === chosen.start && match[0].length > chosen.end - chosen.start))) chosen = { start: match.index, end: match.index + match[0].length, slug: rule.slug };
        }
      }
      if (!chosen) break;
      if (chosen.start > offset) result.push({ type: part.type, text: part.text.slice(offset, chosen.start) });
      result.push({ type: 'link', contextual: true, text: part.text.slice(chosen.start, chosen.end), href: `https://inayadomestic.ae/${lang}/blog/${chosen.slug}/` });
      used.add(chosen.slug); introduced++; offset = chosen.end;
    }
    if (offset < part.text.length) result.push({ type: part.type, text: part.text.slice(offset) });
    return result;
  });
}
