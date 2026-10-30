import { packageSections } from './package-content';
// Editorial answers grounded in the existing intake, pricing and support guides.
// Owner-approved monthly terms and enquiry guidance remain separate from statutory rules.
type Pair = { en: string; ar: string };
export const buyerAnswers: Record<string, { question: Pair; answer: Pair; detailRoute: string }> = {
  booking: {
    question: { en: 'Does sending this request confirm a booking?', ar: 'هل إرسال هذا الطلب يؤكد الحجز؟' },
    answer: { en: 'No. Submitting this form sends an enquiry to INAYA for review; it does not confirm a booking. Contact INAYA by phone or WhatsApp with your role, emirate, duties and preferred timing. Review candidate availability, costs, documents and the agreement before confirming a service.', ar: 'لا. يرسل هذا النموذج استفساراً إلى عناية للمراجعة؛ ولا يؤكد حجزاً. تواصل مع عناية بالهاتف أو واتساب وشارك الدور والإمارة والمهام والتوقيت المفضل. راجع توفر المرشحات والتكاليف والمستندات والاتفاق قبل تأكيد الخدمة.' }, detailRoute: 'how-it-works'
  },
  'how-it-works': {
    question: { en: 'What happens after I make a service enquiry?', ar: 'ماذا يحدث بعد الاستفسار عن الخدمة؟' },
    answer: packageSections.commencement.body, detailRoute: 'documents-required'
  },
  pricing: {
    question: { en: 'Is the displayed price my final service quote?', ar: 'هل السعر المعروض هو عرض السعر النهائي لخدمتي؟' },
    answer: {
      en: 'The cards and comparison table show published package prices and their commitments. Request the written final quote, service scope, inclusions, exclusions and applicable tax before confirmation.',
      ar: 'تعرض البطاقات وجدول المقارنة أسعار الباقات المنشورة والتزاماتها. اطلب عرض السعر النهائي المكتوب ونطاق الخدمة وما يشمله والاستثناءات والضريبة المنطبقة قبل التأكيد.'
    }, detailRoute: 'contact'
  },
  'documents-required': {
    question: { en: 'Which details should I prepare before asking about documents?', ar: 'ما التفاصيل التي أجهزها قبل السؤال عن المستندات؟' },
    answer: { en: 'Prepare your contact details, emirate, requested role and current worker or sponsor document status where relevant. This is enquiry preparation, not an eligibility decision or final visa checklist; ask which responsibilities and documents apply to your case.', ar: 'جهز بيانات التواصل والإمارة والدور المطلوب وحالة مستندات العاملة أو الكفيل إن كانت ذات صلة. هذا تجهيز للاستفسار وليس قرار أهلية أو قائمة تأشيرة نهائية؛ اسأل عن المسؤوليات والمستندات المنطبقة على حالتك.' }, detailRoute: 'services/maid-visa'
  },
  'refund-policy': {
    question: {
  "en": "How is an unused monthly service payment handled?",
  "ar": "كيف تعالج دفعة الخدمة الشهرية غير المستخدمة؟"
},
    answer: packageSections.cancellation.body, detailRoute: 'support-process'
  },
  contact: {
    question: { en: 'Where is INAYA and how do I arrange a visit?', ar: 'أين مكتب عناية وكيف أنسق الزيارة؟' },
    answer: { en: 'Visit INAYA at Grand Mall, ground floor, Al Rashidiya 3, Ajman. Walk-ins can collect a queue token at the counter, or you can request an appointment online for the team to confirm. Office hours are Saturday–Thursday, 9:00 AM–9:00 PM; Friday is closed. Sending the form alone does not confirm an appointment. INAYA also arranges domestic-worker transport with its own drivers; confirm locations, timing, charges and package inclusions.', ar: 'زر عناية في جراند مول، الطابق الأرضي، الراشدية 3، عجمان. يمكنك الزيارة المباشرة وأخذ تذكرة انتظار من الكاونتر، أو طلب موعد عبر الإنترنت ليؤكده الفريق. ساعات العمل من السبت إلى الخميس، من 9 صباحاً إلى 9 مساءً؛ الجمعة مغلق. إرسال النموذج وحده لا يؤكد الموعد. وترتب عناية نقل العمالة المنزلية بواسطة سائقيها؛ أكد المواقع والأوقات والتكلفة وما تشمله الباقة.' }, detailRoute: 'service-areas'
  },
  'inaya-advantages': {
    question: { en: 'What should I ask before choosing a candidate?', ar: 'ما الذي أسأل عنه قبل اختيار المرشحة؟' },
    answer: { en: 'Compare the individual profile with your duties and communication needs. Ask which experience, documents or checks can be reviewed, and which questions remain unanswered. Profile review is not a safety or suitability guarantee.', ar: 'قارن الملف الفردي بمهامك واحتياجات التواصل. اسأل عن الخبرة والمستندات أو الفحوص التي يمكن مراجعتها والأسئلة غير المحسومة. مراجعة الملف ليست ضماناً للأمان أو الملاءمة.' }, detailRoute: 'services/background-verification'
  },
  reviews: {
    question: { en: 'Do selected reviews predict my service outcome?', ar: 'هل تتنبأ التقييمات المختارة بنتيجة خدمتي؟' },
    answer: { en: 'No. Selected comments describe individual experiences, not a current listing-wide rating or a promise for your request. Review your own requirements and agreement, and use the Google listing link to inspect current public feedback.', ar: 'لا. تصف التعليقات المختارة تجارب فردية وليست تقييماً حالياً للملف كله أو وعداً لطلبك. راجع متطلباتك واتفاقك واستخدم رابط ملف Google للاطلاع على الآراء العامة الحالية.' }, detailRoute: 'contact'
  }
};
