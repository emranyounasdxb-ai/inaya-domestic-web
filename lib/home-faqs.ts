import { packageArrangements, packageSections, packageSummary, type LocalizedText } from './package-content';
import { domesticWorkerVisaScope } from './company-information';
import { siteConfig } from './site-config';
import type { VisibleFaq } from './page-seo';

// Positive business answers share the approved package and service-scope sources.
// FAQ markup describes these visible answers; it does not promise rich results.
export const homeQuestions: { id: string; question: LocalizedText; answer: LocalizedText }[] = [
  {
    id: 'prices',
    question: { en: 'What are INAYA’s published maid package prices?', ar: 'ما أسعار باقات الخادمات المنشورة لدى عناية؟' },
    answer: packageSummary
  },
  {
    id: 'visa',
    question: { en: 'What domestic-worker visa support can I discuss?', ar: 'ما دعم تأشيرة العمالة المنزلية الذي يمكنني مناقشته؟' },
    answer: domesticWorkerVisaScope
  },
  {
    id: 'replacement',
    question: { en: 'What replacement support applies to the monthly agreement?', ar: 'ما دعم الاستبدال المنطبق على الاتفاق الشهري؟' },
    answer: packageSections.replacement.body
  },
  {
    id: 'profile-preferences',
    question: { en: 'How are nationality and communication preferences reviewed?', ar: 'كيف تُراجع تفضيلات الجنسية والتواصل؟' },
    answer: {
      en: `${packageSections.commencement.body.en} ${packageSections.commencement.points.en[0]}`,
      ar: `${packageSections.commencement.body.ar} ${packageSections.commencement.points.ar[0]}`
    }
  },
  {
    id: 'live-in-out',
    question: { en: 'Do live-in and live-out arrangements have different package prices?', ar: 'هل تختلف أسعار باقات الخدمة المقيمة وغير المقيمة؟' },
    answer: packageArrangements
  },
  {
    id: 'mohre',
    question: { en: 'Where can I check INAYA’s MOHRE facility record?', ar: 'أين يمكنني التحقق من سجل منشأة عناية لدى الوزارة؟' },
    answer: {
      en: `INAYA is listed in MOHRE’s Approved Services Centres directory for Ajman under Facility No. ${siteConfig.mohreFacility.number}. Use the official MOHRE record linked on this page to check the listing.`,
      ar: `عناية مدرجة في دليل مراكز الخدمات المعتمدة لدى وزارة الموارد البشرية والتوطين في عجمان برقم المنشأة ${siteConfig.mohreFacility.number}. استخدم رابط السجل الرسمي لدى الوزارة الوارد في هذه الصفحة للتحقق من الإدراج.`
    }
  }
];

export function getHomeFaqs(locale: string): VisibleFaq[] {
  const lang = locale === 'ar' ? 'ar' : 'en';
  return homeQuestions.map(({ question, answer }) => ({ question: question[lang], answer: answer[lang] }));
}
