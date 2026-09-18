import { serviceContentBriefs } from './service-content-briefs';

const relationships: Record<string, string[]> = {
  '': ['services', 'services/countries-we-source-from', 'service-areas', 'how-it-works'],
  services: ['services/countries-we-source-from', 'service-areas', 'service-guidelines'],
  'services/countries-we-source-from': ['services/recruitment', 'documents-required', 'services'],
  'service-areas': ['services', 'services/countries-we-source-from', 'contact'],
  about: ['inaya-advantages', 'careers', 'contact'],
  'inaya-advantages': ['about', 'reviews', 'how-it-works'],
  reviews: ['inaya-advantages', 'contact', 'services'],
  booking: ['services', 'documents-required', 'how-it-works'],
  careers: ['about', 'contact'],
  blog: ['how-it-works', 'faq', 'service-guidelines'],
  faq: ['documents-required', 'pricing', 'support-process'],
  contact: ['booking', 'service-areas', 'faq'],
  pricing: ['booking', 'services', 'refund-policy'],
  'how-it-works': ['booking', 'documents-required', 'services', 'blog'],
  'documents-required': ['services/recruitment', 'services/maid-visa', 'services/sponsorship-transfer'],
  'service-guidelines': ['documents-required', 'pricing', 'support-process'],
  'support-process': ['refund-policy', 'contact', 'service-guidelines'],
  'refund-policy': ['support-process', 'services/maid-replacement', 'contact'],
  'privacy-policy': ['terms', 'contact'],
  terms: ['privacy-policy', 'service-guidelines', 'refund-policy']
};

// Curated role comparisons, not a cross-product of every service/city/country.
export function relatedContentRoutes(route: string): string[] {
  if (relationships[route]) return relationships[route];
  if (route.startsWith('services/')) {
    const slug = route.slice(9);
    const related = serviceContentBriefs[slug]?.related.slice(0, 2).map((value) => `services/${value}`) || [];
    const guide = slug === 'maid-replacement' ? 'refund-policy' : 'documents-required';
    return [...related, guide, 'service-areas'];
  }
  if (route.startsWith('maid-source-countries/')) return ['services/countries-we-source-from', 'services/recruitment', 'documents-required'];
  if (route.startsWith('maid-services-')) return ['service-areas', 'services', 'documents-required'];
  return [];
}

// Practical reading/preparation notes; do not change legal terms, prices or forms.
export const informationNotes: Record<string, { en: string; ar: string }> = {
  about: { en: 'Use this introduction to understand INAYA’s service approach. Continue to the process guide for the steps of an enquiry, or contact the team about your own household rather than treating an overview as a confirmed service arrangement.', ar: 'استخدم هذه المقدمة لفهم نهج خدمات عناية. تابع دليل العملية لخطوات الطلب أو تواصل مع الفريق بشأن منزلك، بدلاً من اعتبار التعريف العام ترتيب خدمة مؤكداً.' },
  booking: { en: 'Before sending a request, choose the household role and explain the emirate, main duties and preferred timing. The booking form starts an enquiry; options and next steps are discussed with the team rather than confirmed by submitting the form alone.', ar: 'قبل إرسال الطلب، اختر الدور المنزلي ووضح الإمارة والمهام الأساسية والموعد المفضل. يبدأ نموذج الحجز استفساراً؛ وتناقش الخيارات والخطوات مع الفريق ولا يؤكدها إرسال النموذج وحده.' },
  careers: { en: 'Describe your relevant domestic-service experience and preferred role in the application. Include the language and availability details requested by the form; sharing a profile is not confirmation of a job or placement.', ar: 'وضح خبرتك المناسبة في الخدمات المنزلية والدور المفضل في الطلب. أضف معلومات اللغة والتوفر التي يطلبها النموذج؛ فمشاركة الملف لا تعني تأكيد وظيفة أو توظيف.' },
  blog: { en: 'The topics below are upcoming guides, not published advice articles. For information you can use now, read the service process, preparation guidelines and frequently asked questions linked here.', ar: 'الموضوعات أدناه أدلة قادمة وليست مقالات إرشادية منشورة. لمعلومات يمكن استخدامها الآن، اقرأ خطوات الخدمة وإرشادات الاستعداد والأسئلة الشائعة المرتبطة هنا.' },
  faq: { en: 'Choose the question category that matches your enquiry. General answers explain the service conversation; for case-specific documents, prices or support concerns, follow the linked guide and review your own details with the team.', ar: 'اختر فئة الأسئلة المناسبة لطلبك. توضح الإجابات العامة موضوع الخدمة؛ وللمستندات أو الأسعار أو ملاحظات الدعم الخاصة بالحالة، تابع الدليل المرتبط وراجع تفاصيلك مع الفريق.' },
  contact: { en: 'Use the listed contact channels to explain the household role, emirate and current situation. If you prefer the booking form, use the request link; if you plan an office visit, contact the team first about the appointment.', ar: 'استخدم وسائل التواصل المذكورة لشرح الدور المنزلي والإمارة والوضع الحالي. إذا كنت تفضل نموذج الحجز، فاستخدم رابط الطلب؛ وإذا كنت تخطط لزيارة المكتب، فتواصل مع الفريق أولاً بشأن الموعد.' },
  pricing: { en: 'Compare the displayed package details with the duties and working arrangement you need. Keep the listed prices in context: review included support and confirm the arrangement with INAYA before relying on a package for a particular case.', ar: 'قارن تفاصيل الباقات المعروضة بالمهام وترتيب العمل المطلوب. اقرأ الأسعار ضمن سياقها: راجع الدعم المشمول وأكد الترتيب مع عناية قبل الاعتماد على باقة لحالة معينة.' },
  'how-it-works': { en: 'Start by defining the role, then use the documents guide to prepare for the selected service path. Recruitment, a scheduled household visit and a visa enquiry are different conversations; the process below helps you choose the relevant next step.', ar: 'ابدأ بتحديد الدور ثم استخدم دليل المستندات للاستعداد لمسار الخدمة المختار. التوظيف والزيارة المنزلية المجدولة وطلب التأشيرة مناقشات مختلفة؛ وتساعدك الخطوات أدناه على اختيار المتابعة المناسبة.' },
  'documents-required': { en: 'This is a preparation guide, not a final legal checklist. Separate the basic household enquiry from worker-document or sponsorship questions, and ask the team which details apply to the selected service and current situation.', ar: 'هذا دليل للاستعداد وليس قائمة قانونية نهائية. افصل الاستفسار المنزلي الأساسي عن مستندات العاملة أو أسئلة الكفالة، واسأل الفريق عن التفاصيل المناسبة للخدمة المختارة والوضع الحالي.' },
  'service-guidelines': { en: 'Read these guidelines alongside the duties and agreement for your selected service. Use the preparation guide for information to gather, and the support process for concerns about an existing arrangement rather than mixing both into a new booking enquiry.', ar: 'اقرأ الإرشادات مع المهام والاتفاق الخاص بالخدمة المختارة. استخدم دليل الاستعداد للمعلومات المطلوبة وإجراءات الدعم لملاحظات ترتيب قائم، بدلاً من دمج الموضوعين في طلب حجز جديد.' },
  'support-process': { en: 'For an existing service concern, explain what was booked, the agreed duties and what needs review. The support and refund/replacement guides describe a review process; they do not establish the outcome of an individual request in advance.', ar: 'لملاحظة تخص خدمة قائمة، وضح الحجز والمهام المتفق عليها وما يحتاج مراجعة. تصف أدلة الدعم والاسترداد والاستبدال عملية مراجعة، ولا تحدد مسبقاً نتيجة طلب فردي.' },
  'refund-policy': { en: 'Read the eligibility and review sections against your confirmed service agreement. Keep booking details and the concern clear when contacting the team; this page should not be read as an automatic refund or replacement promise.', ar: 'اقرأ أقسام الأهلية والمراجعة وفق اتفاق خدمتك المؤكد. وضح تفاصيل الحجز والملاحظة عند التواصل؛ ولا تعتبر الصفحة وعداً باسترداد أو استبدال تلقائي.' },
  'privacy-policy': { en: 'Review this policy before sharing information through the enquiry forms. The terms page covers the separate service relationship; use the contact channel if you need clarification about the information described here.', ar: 'راجع السياسة قبل مشاركة المعلومات عبر نماذج الطلب. تغطي صفحة الشروط علاقة الخدمة بشكل منفصل؛ واستخدم وسائل التواصل إذا احتجت توضيحاً بشأن المعلومات المذكورة هنا.' },
  terms: { en: 'Read the service terms together with any confirmed agreement and the relevant service guidelines. Privacy and refund/replacement matters have separate guides linked here; do not treat a general page as confirmation of an individual service request.', ar: 'اقرأ شروط الخدمة مع أي اتفاق مؤكد وإرشادات الخدمة المناسبة. للخصوصية والاسترداد والاستبدال أدلة منفصلة مرتبطة هنا؛ ولا تعتبر صفحة عامة تأكيداً لطلب خدمة فردي.' },
  reviews: { en: 'Use the review information shown here as context, then discuss your own household requirements directly. This page does not add a new rating or promise the same experience for every service; the process guide explains the next enquiry steps.', ar: 'استخدم معلومات التقييمات المعروضة للسياق ثم ناقش احتياجات منزلك مباشرة. لا تضيف الصفحة تقييماً جديداً أو تعد بالتجربة نفسها لكل خدمة؛ ويوضح دليل العملية خطوات الطلب التالية.' },
  'inaya-advantages': { en: 'Compare the service approach described below with the duties and support your household needs. The about and process guides provide context; final responsibilities should be clarified for your selected arrangement.', ar: 'قارن نهج الخدمة الموضح أدناه بالمهام والدعم المطلوب لمنزلك. توفر صفحتا التعريف والعملية السياق؛ وينبغي توضيح المسؤوليات النهائية للترتيب المختار.' }
};
