import type { Metadata } from 'next';
import { localeAlternates, localizedUrl } from './seo';
import { siteConfig } from './site-config';
import { getServiceWithExtras } from './service-helpers';
import { servicePageCopies, type Lang } from './service-page-copy-all';
import { getServiceImage } from './service-presentation';
import { getLocationServicePage } from './location-service-pages';
import { getCountrySourcePage } from './country-source-pages';
import { getTrustSupportPage } from './trust-support-pages';

type Localized = Record<Lang, string>;
export type VisibleFaq = { question: string; answer: string };
export type PageSeo = {
  name: string;
  title: string;
  description: string;
  faqs?: VisibleFaq[];
  service?: { name: string; description: string; area?: string };
  image?: string;
};

// Only metadata summaries: visible page content remains in its existing source.
const pages: Record<string, { name: Localized; description: Localized }> = {
  '': {
    name: { en: 'Maid & Domestic Worker Services in UAE', ar: 'خدمات الخادمات والعمالة المنزلية في الإمارات' },
    description: { en: 'Explore INAYA domestic worker services for UAE households, including maids, nannies, cooking, care support and guidance before booking.', ar: 'استكشف خدمات عناية للعمالة المنزلية للأسر في الإمارات، بما يشمل الخادمات والمربيات والطبخ ودعم الرعاية والإرشاد قبل الحجز.' }
  },
  about: {
    name: { en: 'About INAYA Domestic Workers', ar: 'عن عناية للعمالة المنزلية' },
    description: { en: 'Learn about INAYA Domestic Workers, its household service approach, consultation process and support for families across the UAE.', ar: 'تعرف على عناية للعمالة المنزلية ونهجها في الخدمات المنزلية والاستشارة ودعم الأسر في جميع أنحاء الإمارات.' }
  },
  services: {
    name: { en: 'Domestic Worker Services in UAE', ar: 'خدمات العمالة المنزلية في الإمارات' },
    description: { en: 'Compare INAYA maid, childcare, cooking, household management, care and administrative support services. Contact the team to discuss your requirements.', ar: 'قارن خدمات عناية للخادمات ورعاية الأطفال والطبخ وإدارة المنزل ودعم الرعاية والإجراءات. تواصل مع الفريق لمناقشة متطلباتك.' }
  },
  booking: {
    name: { en: 'Request a Domestic Worker Service', ar: 'طلب خدمة عمالة منزلية' },
    description: { en: 'Send INAYA your household service requirements, emirate, timing and contact details. The team will follow up to confirm options and next steps.', ar: 'أرسل إلى عناية متطلبات الخدمة المنزلية والإمارة والموعد وبيانات التواصل. يتابع الفريق معك لتأكيد الخيارات والخطوات التالية.' }
  },
  careers: {
    name: { en: 'Domestic Worker Opportunities', ar: 'فرص العمل في الخدمات المنزلية' },
    description: { en: 'Share your domestic service experience, preferred role, language and availability with INAYA. The team will contact you when a suitable opportunity is available.', ar: 'شارك عناية خبرتك في الخدمات المنزلية ونوع العمل المناسب واللغة والتوفر. يتواصل الفريق معك عند توفر فرصة مناسبة.' }
  },
  pricing: {
    name: { en: 'Domestic Worker Packages & Pricing', ar: 'باقات وأسعار العمالة المنزلية' },
    description: { en: 'Review the domestic service packages and pricing information shown by INAYA, compare included support and contact the team to confirm your requirements.', ar: 'راجع معلومات باقات وأسعار الخدمات المنزلية المعروضة لدى عناية وقارن الدعم المشمول وتواصل مع الفريق لتأكيد متطلباتك.' }
  },
  blog: {
    name: { en: 'Domestic Service Guides', ar: 'أدلة الخدمات المنزلية' },
    description: { en: 'Browse upcoming INAYA guide topics on choosing domestic services, questions before booking and the differences between maid, nanny and care support.', ar: 'تصفح موضوعات أدلة عناية القادمة حول اختيار الخدمات المنزلية والأسئلة قبل الحجز والفروق بين خدمات الخادمة والمربية ودعم الرعاية.' }
  },
  faq: {
    name: { en: 'Frequently Asked Questions', ar: 'الأسئلة الشائعة' },
    description: { en: 'Find INAYA answers about domestic services, booking, pricing, support and UAE service procedures. Choose a topic or contact the team for clarification.', ar: 'اطلع على إجابات عناية حول الخدمات المنزلية والحجز والأسعار والدعم والإجراءات في الإمارات. اختر الموضوع أو تواصل مع الفريق للتوضيح.' }
  },
  contact: {
    name: { en: 'Contact INAYA Domestic Workers', ar: 'اتصل بعناية للعمالة المنزلية' },
    description: { en: 'Contact INAYA by phone, WhatsApp or email to discuss household services across the UAE, or arrange a visit to the Grand Mall office in Ajman.', ar: 'تواصل مع عناية عبر الهاتف أو واتساب أو البريد لمناقشة الخدمات المنزلية في الإمارات أو ترتيب زيارة المكتب في جراند مول بعجمان.' }
  },
  'how-it-works': {
    name: { en: 'How INAYA Services Work', ar: 'كيف تعمل خدمات عناية' },
    description: { en: 'Understand the INAYA process from sharing household requirements to reviewing service options, documents, confirmation and follow-up.', ar: 'تعرف على خطوات عناية من مشاركة احتياجات المنزل إلى مراجعة خيارات الخدمة والمستندات والتأكيد والمتابعة.' }
  },
  'service-areas': {
    name: { en: 'Domestic Service Areas in UAE', ar: 'مناطق الخدمات المنزلية في الإمارات' },
    description: { en: 'Explore INAYA service guides for Ajman, Dubai, Sharjah, Abu Dhabi, Ras Al Khaimah, Fujairah and Umm Al Quwain, and discuss availability in your area.', ar: 'استكشف أدلة خدمات عناية لعجمان ودبي والشارقة وأبوظبي ورأس الخيمة والفجيرة وأم القيوين وناقش التوفر في منطقتك.' }
  },
  'services/countries-we-source-from': {
    name: { en: 'Domestic Worker Source Countries', ar: 'دول مصدر العمالة المنزلية' },
    description: { en: 'Compare the domestic worker source-country guides available from INAYA. Consider individual profiles, duties, documents and household needs before deciding.', ar: 'قارن أدلة دول مصدر العمالة المنزلية المتوفرة لدى عناية. راجع الملف الفردي والمهام والمستندات واحتياجات الأسرة قبل الاختيار.' }
  },
  'service-guidelines': {
    name: { en: 'Domestic Worker Service Guidelines', ar: 'إرشادات خدمات العمالة المنزلية' },
    description: { en: 'Read INAYA service guidelines on household duties, documents, availability, agreement details and the steps to review before confirming a service.', ar: 'اقرأ إرشادات عناية للخدمات حول المهام المنزلية والمستندات والتوفر وتفاصيل الاتفاق والخطوات الواجب مراجعتها قبل تأكيد الخدمة.' }
  },
  'support-process': {
    name: { en: 'Service Support Process', ar: 'إجراءات دعم الخدمات' },
    description: { en: 'Learn how INAYA reviews household service concerns using booking details, the confirmed agreement, available options and follow-up.', ar: 'تعرف على كيفية مراجعة عناية لملاحظات الخدمات المنزلية باستخدام تفاصيل الحجز والاتفاق المؤكد والخيارات المتوفرة والمتابعة.' }
  },
  'refund-policy': {
    name: { en: 'Refund & Replacement Policy', ar: 'سياسة الاسترداد والاستبدال' },
    description: { en: 'Read the INAYA refund and replacement review process, including eligibility, agreement terms, documents and how to contact the team about your request.', ar: 'اقرأ إجراءات عناية لمراجعة الاسترداد والاستبدال بما يشمل الأهلية وشروط الاتفاق والمستندات وكيفية التواصل مع الفريق بشأن طلبك.' }
  }
};

export function getPageSeo(locale: string, route: string): PageSeo | undefined {
  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const entry = pages[route];
  if (entry) return { name: entry.name[lang], title: entry.name[lang], description: entry.description[lang] };

  const trustRoutes: Record<string, string> = {
    'documents-required': 'documents-required', 'inaya-advantages': 'why-choose-inaya',
    'privacy-policy': 'privacy-policy', terms: 'terms', reviews: 'reviews'
  };
  const trust = trustRoutes[route] ? getTrustSupportPage(trustRoutes[route]) : undefined;
  if (trust) return {
    name: trust.title[lang], title: trust.metaTitle[lang], description: trust.metaDescription[lang],
    faqs: trust.faqs.map((faq) => ({ question: faq.question[lang], answer: faq.answer[lang] }))
  };
  if (route.startsWith('services/')) {
    const slug = route.slice('services/'.length);
    const service = getServiceWithExtras(slug);
    const copy = servicePageCopies[slug]?.[lang];
    if (service && copy) return {
      name: service.name[lang], title: copy.title, description: copy.meta,
      image: getServiceImage(slug),
      service: { name: service.name[lang], description: copy.lead },
      faqs: copy.faqs.map((faq) => ({ question: faq.title, answer: faq.text }))
    };
  }
  if (route.startsWith('maid-source-countries/')) {
    const country = getCountrySourcePage(route.slice('maid-source-countries/'.length));
    if (country) return {
      name: country.workerLabel[lang], title: country.metaTitle[lang], description: country.metaDescription[lang],
      faqs: country.faqs.map((faq) => ({ question: faq.question[lang], answer: faq.answer[lang] }))
    };
  }
  const location = getLocationServicePage(route);
  if (location) return {
    name: location.heroTitle[lang], title: location.metaTitle[lang], description: location.metaDescription[lang],
    service: { name: location.heroTitle[lang], description: location.lead[lang], area: location.city[lang] },
    faqs: location.faqs.map((faq) => ({ question: faq.question[lang], answer: faq.answer[lang] }))
  };
}

export function pageMetadata(locale: string, route: string): Metadata {
  const page = getPageSeo(locale, route);
  if (!page) return {};
  const title = /INAYA|عناية/i.test(page.title) ? page.title : `${page.title} | ${locale === 'ar' ? 'عناية' : 'INAYA'}`;
  const images = page.image ? [{ url: `${siteConfig.url}${page.image}`, alt: page.name }] : undefined;
  return {
    title: { absolute: title }, description: page.description,
    alternates: localeAlternates(locale, route),
    openGraph: {
      type: 'website', title, description: page.description,
      url: localizedUrl(locale, route), siteName: locale === 'ar' ? 'عناية للعمالة المنزلية' : siteConfig.name,
      locale: locale === 'ar' ? 'ar_AE' : 'en_AE', alternateLocale: locale === 'ar' ? 'en_AE' : 'ar_AE', images
    },
    twitter: { card: images ? 'summary_large_image' : 'summary', title, description: page.description, images }
  };
}

export function pageBreadcrumbs(locale: string, route: string) {
  const names = (path: string) => getPageSeo(locale, path)!.name;
  const home = { name: locale === 'ar' ? 'الرئيسية' : 'Home', url: localizedUrl(locale) };
  const parents = route.startsWith('maid-source-countries/') ? ['services', 'services/countries-we-source-from']
    : route.startsWith('services/') ? ['services']
    : getLocationServicePage(route) ? ['service-areas'] : [];
  return route ? [home, ...parents.map((path) => ({ name: names(path), url: localizedUrl(locale, path) })),
    { name: names(route), url: localizedUrl(locale, route) }] : [home];
}
