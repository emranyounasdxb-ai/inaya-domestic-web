// Editorial answers grounded in the existing intake, pricing and support guides.
// These are preparation guidance, not legal rules or new agreement terms.
type Pair = { en: string; ar: string };
export const buyerAnswers: Record<string, { question: Pair; answer: Pair; detailRoute: string }> = {
  booking: {
    question: { en: 'Does sending this request confirm a booking?', ar: 'هل إرسال هذا الطلب يؤكد الحجز؟' },
    answer: { en: 'No. This form checks details locally and does not send a request. Contact INAYA by phone or WhatsApp with your role, emirate, duties and preferred timing. Review candidate availability, costs, documents and the agreement before confirming a service.', ar: 'لا. يراجع هذا النموذج البيانات محلياً ولا يرسل طلباً. تواصل مع عناية بالهاتف أو واتساب وشارك الدور والإمارة والمهام والتوقيت المفضل. راجع توفر المرشحات والتكاليف والمستندات والاتفاق قبل تأكيد الخدمة.' }, detailRoute: 'how-it-works'
  },
  'how-it-works': {
    question: { en: 'What happens after I make a service enquiry?', ar: 'ماذا يحدث بعد الاستفسار عن الخدمة؟' },
    answer: { en: 'The enquiry starts with your household requirements. Discuss the role and individual profiles, then clarify documents, costs and the agreement. Consultation and candidate discussion do not themselves confirm placement or a start date.', ar: 'يبدأ الاستفسار بمتطلبات منزلك. ناقش الدور والملفات الفردية ثم وضح المستندات والتكاليف والاتفاق. الاستشارة ومناقشة المرشحات لا تؤكدان وحدهما التوظيف أو تاريخ البدء.' }, detailRoute: 'documents-required'
  },
  pricing: {
    question: { en: 'Is the displayed price my final service quote?', ar: 'هل السعر المعروض هو عرض السعر النهائي لخدمتي؟' },
    answer: { en: 'Ask for a quote for your request. The existing pricing guide makes the final amount dependent on service type, duration, emirate and requirements. Clarify inclusions and any applicable costs before confirmation.', ar: 'اطلب عرض سعر لطلبك. يربط دليل الأسعار الحالي المبلغ النهائي بنوع الخدمة والمدة والإمارة والمتطلبات. وضح البنود المشمولة وأي تكاليف منطبقة قبل التأكيد.' }, detailRoute: 'contact'
  },
  'documents-required': {
    question: { en: 'Which details should I prepare before asking about documents?', ar: 'ما التفاصيل التي أجهزها قبل السؤال عن المستندات؟' },
    answer: { en: 'Prepare your contact details, emirate, requested role and current worker or sponsor document status where relevant. This is enquiry preparation, not an eligibility decision or final visa checklist; ask which responsibilities and documents apply to your case.', ar: 'جهز بيانات التواصل والإمارة والدور المطلوب وحالة مستندات العاملة أو الكفيل إن كانت ذات صلة. هذا تجهيز للاستفسار وليس قرار أهلية أو قائمة تأشيرة نهائية؛ اسأل عن المسؤوليات والمستندات المنطبقة على حالتك.' }, detailRoute: 'services/maid-visa'
  },
  'refund-policy': {
    question: { en: 'Can I assume a refund or free replacement?', ar: 'هل أفترض استرداداً أو استبدالاً مجانياً؟' },
    answer: { en: 'No. The existing guide describes review against the service agreement, request stage, costs and available options. Share the agreement and your concern with the team rather than treating an enquiry as an approved outcome.', ar: 'لا. يصف الدليل الحالي المراجعة وفق اتفاق الخدمة ومرحلة الطلب والتكاليف والخيارات المتاحة. شارك الاتفاق وملاحظتك مع الفريق بدلاً من اعتبار الاستفسار نتيجة معتمدة.' }, detailRoute: 'support-process'
  },
  contact: {
    question: { en: 'Where is INAYA and how do I arrange a visit?', ar: 'أين مكتب عناية وكيف أنسق الزيارة؟' },
    answer: { en: 'INAYA Domestic Workers Services lists its office at Grand Mall, ground floor, Al Rashidiya 3, Ajman. Use the office telephone or WhatsApp to confirm visit timing and discuss the requested area and role. No fixed opening hours or response time is confirmed here.', ar: 'توضح عناية لخدمات العمالة المنزلية أن مكتبها في جراند مول، الطابق الأرضي، الراشدية 3، عجمان. استخدم هاتف المكتب أو واتساب لتأكيد موعد الزيارة ومناقشة المنطقة والدور المطلوبين. لا تؤكد هذه الصفحة ساعات عمل ثابتة أو وقت رد محدداً.' }, detailRoute: 'service-areas'
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
