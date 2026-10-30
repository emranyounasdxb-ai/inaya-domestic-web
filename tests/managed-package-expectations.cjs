const { approvedDeliveryMessages } = require('./form-delivery-expectations.cjs');
const assert = require('node:assert/strict');
const { approvedPosterPricing, approvedPosterMessages } = require('./poster-pricing-expectations.cjs');

// Exact source allowances for the owner-approved managed monthly offering.
// Unrelated source, form handlers, navigation and design remain protected.
const patches = {
  "tests/e2e/home.spec.ts": [
    [
      "  await expect(page.getByRole('heading', { name: 'Global Executive Concierge' })).toBeVisible();",
      "  await expect(page.getByRole('heading', { name: 'Managed Service & Follow-up' })).toBeVisible();"
    ],
    [
      "    await expect(page.getByRole('heading', { name: 'Global Executive Concierge' })).toHaveCount(0);",
      "    await expect(page.getByRole('heading', { name: 'Managed Service & Follow-up' })).toHaveCount(0);"
    ]
  ],
  "lib/services.ts": [
    [
      "    icon: '📅',\n    name: { en: 'Monthly Maid Contract', ar: 'عقد خادمة شهري' },\n    short: { en: 'Discuss monthly maid contracts and package terms.', ar: 'ناقش عقود الخادمات الشهرية وشروط الباقات.' },\n    description: { en: 'Contact INAYA to confirm the working arrangement, duties, schedule and terms included in your selected package.', ar: 'تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها.' }\n  },\n  {\n    slug: 'on-demand-domestic-help',\n",
      "    icon: '📅',\n    name: { en: 'Monthly Maid Contract', ar: 'عقد خادمة شهري' },\n    short: { en: 'Discuss monthly maid contracts and package terms.', ar: 'ناقش عقود الخادمات الشهرية وشروط الباقات.' },\n    description: {\n  \"en\": \"Essential starts from AED 2,500/month and Signature from AED 3,000/month, all-inclusive within the published scope and exclusions. INAYA Black is Custom Quote. The standard monthly offer is an INAYA-managed, salary-included live-in service under the applicable agency employment and sponsorship arrangement.\",\n  \"ar\": \"تبدأ Essential من 2,500 درهم شهرياً وSignature من 3,000 درهم شهرياً، شاملتين التكاليف ضمن النطاق والاستثناءات المنشورة. وتبقى INAYA Black بعرض سعر مخصص. العرض الشهري القياسي خدمة مقيمة داخل المنزل تديرها عناية وتشمل الراتب، وفق ترتيب التوظيف والكفالة المنطبق لدى الوكالة.\"\n}\n  },\n  {\n    slug: 'on-demand-domestic-help',\n"
    ]
  ],
  "lib/service-content-briefs.ts": [
    [
      "    prepare: { en: 'State the preferred hours or visits and the tasks that matter most. Compare a monthly contract if the same work repeats regularly, without assuming either option is available on a particular date.', ar: 'حدد الساعات أو الزيارات المفضلة والمهام الأهم. قارن العقد الشهري إذا كان العمل نفسه يتكرر بانتظام، دون افتراض توفر أي خيار في تاريخ معين.' }, related: ['monthly-maid-contract', 'live-out-maid', 'on-demand-domestic-help']\n  },\n  'monthly-maid-contract': {\n    overview: { en: 'Contact INAYA to confirm the working arrangement, duties, schedule and terms included in your selected package.', ar: 'تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها.' },\n    prepare: { en: 'Describe your household needs and the arrangement you want to discuss. Review the proposed duties, schedule, costs and terms in writing before selecting a monthly package.', ar: 'صف احتياجات المنزل والترتيب المطلوب مناقشته. راجع المهام والجدول والتكاليف والشروط المقترحة كتابةً قبل اختيار باقة شهرية.' }, related: ['part-time-maid', 'housekeeping', 'full-time-maid']\n  },\n  'on-demand-domestic-help': {\n    overview: { en: 'On-demand enquiries cover a particular household situation, such as guest preparation, moving-day tasks or short-term home support. Describe the occasion and task scope first; an urgent request is not confirmation of immediate availability.', ar: 'تغطي طلبات المساعدة عند الطلب حالة منزلية محددة، مثل تجهيز الضيوف أو مهام يوم الانتقال أو الدعم قصير المدى. وضح المناسبة ونطاق المهام أولاً؛ فالطلب العاجل لا يعني تأكيد التوفر الفوري.' },\n",
      "    prepare: { en: 'State the preferred hours or visits and the tasks that matter most. Compare a monthly contract if the same work repeats regularly, without assuming either option is available on a particular date.', ar: 'حدد الساعات أو الزيارات المفضلة والمهام الأهم. قارن العقد الشهري إذا كان العمل نفسه يتكرر بانتظام، دون افتراض توفر أي خيار في تاريخ معين.' }, related: ['monthly-maid-contract', 'live-out-maid', 'on-demand-domestic-help']\n  },\n  'monthly-maid-contract': {\n    overview: {\n  \"en\": \"Essential starts from AED 2,500/month and Signature from AED 3,000/month, all-inclusive within the published scope and exclusions. INAYA Black is Custom Quote. The standard monthly offer is an INAYA-managed, salary-included live-in service under the applicable agency employment and sponsorship arrangement.\",\n  \"ar\": \"تبدأ Essential من 2,500 درهم شهرياً وSignature من 3,000 درهم شهرياً، شاملتين التكاليف ضمن النطاق والاستثناءات المنشورة. وتبقى INAYA Black بعرض سعر مخصص. العرض الشهري القياسي خدمة مقيمة داخل المنزل تديرها عناية وتشمل الراتب، وفق ترتيب التوظيف والكفالة المنطبق لدى الوكالة.\"\n},\n    prepare: {\n  \"en\": \"List the individual duties, working hours/rest, household location, accommodation/meals and preferred start. Review the written role, price breakdown, billing date, monthly cancellation terms and eligible replacement coordination before confirmation.\",\n  \"ar\": \"حدد المهام الفردية وساعات العمل والراحة وموقع المنزل والسكن والطعام والبدء المفضل. راجع الدور المكتوب وتفصيل السعر وتاريخ الفوترة وشروط الإلغاء الشهري وتنسيق الاستبدال المؤهل قبل التأكيد.\"\n}, related: ['part-time-maid', 'housekeeping', 'full-time-maid']\n  },\n  'on-demand-domestic-help': {\n    overview: { en: 'On-demand enquiries cover a particular household situation, such as guest preparation, moving-day tasks or short-term home support. Describe the occasion and task scope first; an urgent request is not confirmation of immediate availability.', ar: 'تغطي طلبات المساعدة عند الطلب حالة منزلية محددة، مثل تجهيز الضيوف أو مهام يوم الانتقال أو الدعم قصير المدى. وضح المناسبة ونطاق المهام أولاً؛ فالطلب العاجل لا يعني تأكيد التوفر الفوري.' },\n"
    ]
  ],
  "lib/buyer-answers.ts": [
    [
      "// Editorial answers grounded in the existing intake, pricing and support guides.\n// These are preparation guidance, not legal rules or new agreement terms.\ntype Pair = { en: string; ar: string };\nexport const buyerAnswers: Record<string, { question: Pair; answer: Pair; detailRoute: string }> = {\n  booking: {\n",
      "import { packageSections } from './package-content';\n// Editorial answers grounded in the existing intake, pricing and support guides.\n// Owner-approved monthly terms and enquiry guidance remain separate from statutory rules.\ntype Pair = { en: string; ar: string };\nexport const buyerAnswers: Record<string, { question: Pair; answer: Pair; detailRoute: string }> = {\n  booking: {\n"
    ],
    [
      "  },\n  'how-it-works': {\n    question: { en: 'What happens after I make a service enquiry?', ar: 'ماذا يحدث بعد الاستفسار عن الخدمة؟' },\n    answer: { en: 'The enquiry starts with your household requirements. Discuss the role and individual profiles, then clarify documents, costs and the agreement. Consultation and candidate discussion do not themselves confirm placement or a start date.', ar: 'يبدأ الاستفسار بمتطلبات منزلك. ناقش الدور والملفات الفردية ثم وضح المستندات والتكاليف والاتفاق. الاستشارة ومناقشة المرشحات لا تؤكدان وحدهما التوظيف أو تاريخ البدء.' }, detailRoute: 'documents-required'\n  },\n  pricing: {\n    question: { en: 'Is the displayed price my final service quote?', ar: 'هل السعر المعروض هو عرض السعر النهائي لخدمتي؟' },\n    answer: { en: 'Ask for a quote for your request. The existing pricing guide makes the final amount dependent on service type, duration, emirate and requirements. Clarify inclusions and any applicable costs before confirmation.', ar: 'اطلب عرض سعر لطلبك. يربط دليل الأسعار الحالي المبلغ النهائي بنوع الخدمة والمدة والإمارة والمتطلبات. وضح البنود المشمولة وأي تكاليف منطبقة قبل التأكيد.' }, detailRoute: 'contact'\n  },\n  'documents-required': {\n    question: { en: 'Which details should I prepare before asking about documents?', ar: 'ما التفاصيل التي أجهزها قبل السؤال عن المستندات؟' },\n    answer: { en: 'Prepare your contact details, emirate, requested role and current worker or sponsor document status where relevant. This is enquiry preparation, not an eligibility decision or final visa checklist; ask which responsibilities and documents apply to your case.', ar: 'جهز بيانات التواصل والإمارة والدور المطلوب وحالة مستندات العاملة أو الكفيل إن كانت ذات صلة. هذا تجهيز للاستفسار وليس قرار أهلية أو قائمة تأشيرة نهائية؛ اسأل عن المسؤوليات والمستندات المنطبقة على حالتك.' }, detailRoute: 'services/maid-visa'\n  },\n  'refund-policy': {\n    question: { en: 'Can I assume a refund or free replacement?', ar: 'هل أفترض استرداداً أو استبدالاً مجانياً؟' },\n    answer: { en: 'No. The existing guide describes review against the service agreement, request stage, costs and available options. Share the agreement and your concern with the team rather than treating an enquiry as an approved outcome.', ar: 'لا. يصف الدليل الحالي المراجعة وفق اتفاق الخدمة ومرحلة الطلب والتكاليف والخيارات المتاحة. شارك الاتفاق وملاحظتك مع الفريق بدلاً من اعتبار الاستفسار نتيجة معتمدة.' }, detailRoute: 'support-process'\n  },\n  contact: {\n    question: { en: 'Where is INAYA and how do I arrange a visit?', ar: 'أين مكتب عناية وكيف أنسق الزيارة؟' },\n",
      "  },\n  'how-it-works': {\n    question: { en: 'What happens after I make a service enquiry?', ar: 'ماذا يحدث بعد الاستفسار عن الخدمة؟' },\n    answer: packageSections.commencement.body, detailRoute: 'documents-required'\n  },\n  pricing: {\n    question: { en: 'Is the displayed price my final service quote?', ar: 'هل السعر المعروض هو عرض السعر النهائي لخدمتي؟' },\n    answer: {\n  \"en\": \"Essential starts from AED 2,500/month and Signature from AED 3,000/month, all-inclusive within the published scope and exclusions. INAYA Black is Custom Quote. The standard monthly offer is an INAYA-managed, salary-included live-in service under the applicable agency employment and sponsorship arrangement. Request the written final quote, scope, exclusions and applicable tax before confirmation.\",\n  \"ar\": \"تبدأ Essential من 2,500 درهم شهرياً وSignature من 3,000 درهم شهرياً، شاملتين التكاليف ضمن النطاق والاستثناءات المنشورة. وتبقى INAYA Black بعرض سعر مخصص. العرض الشهري القياسي خدمة مقيمة داخل المنزل تديرها عناية وتشمل الراتب، وفق ترتيب التوظيف والكفالة المنطبق لدى الوكالة. اطلب العرض النهائي المكتوب والنطاق والاستثناءات والضريبة المنطبقة قبل التأكيد.\"\n}, detailRoute: 'contact'\n  },\n  'documents-required': {\n    question: { en: 'Which details should I prepare before asking about documents?', ar: 'ما التفاصيل التي أجهزها قبل السؤال عن المستندات؟' },\n    answer: { en: 'Prepare your contact details, emirate, requested role and current worker or sponsor document status where relevant. This is enquiry preparation, not an eligibility decision or final visa checklist; ask which responsibilities and documents apply to your case.', ar: 'جهز بيانات التواصل والإمارة والدور المطلوب وحالة مستندات العاملة أو الكفيل إن كانت ذات صلة. هذا تجهيز للاستفسار وليس قرار أهلية أو قائمة تأشيرة نهائية؛ اسأل عن المسؤوليات والمستندات المنطبقة على حالتك.' }, detailRoute: 'services/maid-visa'\n  },\n  'refund-policy': {\n    question: {\n  \"en\": \"How is an unused monthly service payment handled?\",\n  \"ar\": \"كيف تعالج دفعة الخدمة الشهرية غير المستخدمة؟\"\n},\n    answer: packageSections.cancellation.body, detailRoute: 'support-process'\n  },\n  contact: {\n    question: { en: 'Where is INAYA and how do I arrange a visit?', ar: 'أين مكتب عناية وكيف أنسق الزيارة؟' },\n"
    ]
  ],
  "lib/content-architecture.ts": [
    [
      "  blog: { en: 'The topics below are upcoming guides, not published advice articles. For information you can use now, read the service process, preparation guidelines and frequently asked questions linked here.', ar: 'الموضوعات أدناه أدلة قادمة وليست مقالات إرشادية منشورة. لمعلومات يمكن استخدامها الآن، اقرأ خطوات الخدمة وإرشادات الاستعداد والأسئلة الشائعة المرتبطة هنا.' },\n  faq: { en: 'Choose the question category that matches your enquiry. General answers explain the service conversation; for case-specific documents, prices or support concerns, follow the linked guide and review your own details with the team.', ar: 'اختر فئة الأسئلة المناسبة لطلبك. توضح الإجابات العامة موضوع الخدمة؛ وللمستندات أو الأسعار أو ملاحظات الدعم الخاصة بالحالة، تابع الدليل المرتبط وراجع تفاصيلك مع الفريق.' },\n  contact: { en: 'Use the listed contact channels to explain the household role, emirate and current situation. If you prefer the booking form, use the request link; if you plan an office visit, contact the team first about the appointment.', ar: 'استخدم وسائل التواصل المذكورة لشرح الدور المنزلي والإمارة والوضع الحالي. إذا كنت تفضل نموذج الحجز، فاستخدم رابط الطلب؛ وإذا كنت تخطط لزيارة المكتب، فتواصل مع الفريق أولاً بشأن الموعد.' },\n  pricing: { en: 'Compare the displayed package details with the duties and working arrangement you need. Keep the listed prices in context: review included support and confirm the arrangement with INAYA before relying on a package for a particular case.', ar: 'قارن تفاصيل الباقات المعروضة بالمهام وترتيب العمل المطلوب. اقرأ الأسعار ضمن سياقها: راجع الدعم المشمول وأكد الترتيب مع عناية قبل الاعتماد على باقة لحالة معينة.' },\n  'how-it-works': { en: 'Start by defining the role, then use the documents guide to prepare for the selected service path. Recruitment, a scheduled household visit and a visa enquiry are different conversations; the process below helps you choose the relevant next step.', ar: 'ابدأ بتحديد الدور ثم استخدم دليل المستندات للاستعداد لمسار الخدمة المختار. التوظيف والزيارة المنزلية المجدولة وطلب التأشيرة مناقشات مختلفة؛ وتساعدك الخطوات أدناه على اختيار المتابعة المناسبة.' },\n  'documents-required': { en: 'This is a preparation guide, not a final legal checklist. Separate the basic household enquiry from worker-document or sponsorship questions, and ask the team which details apply to the selected service and current situation.', ar: 'هذا دليل للاستعداد وليس قائمة قانونية نهائية. افصل الاستفسار المنزلي الأساسي عن مستندات العاملة أو أسئلة الكفالة، واسأل الفريق عن التفاصيل المناسبة للخدمة المختارة والوضع الحالي.' },\n  'service-guidelines': { en: 'Read these guidelines alongside the duties and agreement for your selected service. Use the preparation guide for information to gather, and the support process for concerns about an existing arrangement rather than mixing both into a new booking enquiry.', ar: 'اقرأ الإرشادات مع المهام والاتفاق الخاص بالخدمة المختارة. استخدم دليل الاستعداد للمعلومات المطلوبة وإجراءات الدعم لملاحظات ترتيب قائم، بدلاً من دمج الموضوعين في طلب حجز جديد.' },\n",
      "  blog: { en: 'The topics below are upcoming guides, not published advice articles. For information you can use now, read the service process, preparation guidelines and frequently asked questions linked here.', ar: 'الموضوعات أدناه أدلة قادمة وليست مقالات إرشادية منشورة. لمعلومات يمكن استخدامها الآن، اقرأ خطوات الخدمة وإرشادات الاستعداد والأسئلة الشائعة المرتبطة هنا.' },\n  faq: { en: 'Choose the question category that matches your enquiry. General answers explain the service conversation; for case-specific documents, prices or support concerns, follow the linked guide and review your own details with the team.', ar: 'اختر فئة الأسئلة المناسبة لطلبك. توضح الإجابات العامة موضوع الخدمة؛ وللمستندات أو الأسعار أو ملاحظات الدعم الخاصة بالحالة، تابع الدليل المرتبط وراجع تفاصيلك مع الفريق.' },\n  contact: { en: 'Use the listed contact channels to explain the household role, emirate and current situation. If you prefer the booking form, use the request link; if you plan an office visit, contact the team first about the appointment.', ar: 'استخدم وسائل التواصل المذكورة لشرح الدور المنزلي والإمارة والوضع الحالي. إذا كنت تفضل نموذج الحجز، فاستخدم رابط الطلب؛ وإذا كنت تخطط لزيارة المكتب، فتواصل مع الفريق أولاً بشأن الموعد.' },\n  pricing: {\n  \"en\": \"Compare the salary-included managed live-in packages: Essential from AED 2,500/month, Signature from AED 3,000/month and INAYA Black Custom Quote. Review core inclusions, exclusions, tier coordination and written monthly payment, cancellation and replacement terms.\",\n  \"ar\": \"قارن الباقات المقيمة المدارة المشمولة بالراتب: Essential من 2,500 درهم شهرياً وSignature من 3,000 درهم شهرياً وINAYA Black بعرض سعر مخصص. راجع العناصر الأساسية والاستثناءات وتنسيق الباقات وشروط السداد الشهري والإلغاء والاستبدال المكتوبة.\"\n},\n  'how-it-works': { en: 'Start by defining the role, then use the documents guide to prepare for the selected service path. Recruitment, a scheduled household visit and a visa enquiry are different conversations; the process below helps you choose the relevant next step.', ar: 'ابدأ بتحديد الدور ثم استخدم دليل المستندات للاستعداد لمسار الخدمة المختار. التوظيف والزيارة المنزلية المجدولة وطلب التأشيرة مناقشات مختلفة؛ وتساعدك الخطوات أدناه على اختيار المتابعة المناسبة.' },\n  'documents-required': { en: 'This is a preparation guide, not a final legal checklist. Separate the basic household enquiry from worker-document or sponsorship questions, and ask the team which details apply to the selected service and current situation.', ar: 'هذا دليل للاستعداد وليس قائمة قانونية نهائية. افصل الاستفسار المنزلي الأساسي عن مستندات العاملة أو أسئلة الكفالة، واسأل الفريق عن التفاصيل المناسبة للخدمة المختارة والوضع الحالي.' },\n  'service-guidelines': { en: 'Read these guidelines alongside the duties and agreement for your selected service. Use the preparation guide for information to gather, and the support process for concerns about an existing arrangement rather than mixing both into a new booking enquiry.', ar: 'اقرأ الإرشادات مع المهام والاتفاق الخاص بالخدمة المختارة. استخدم دليل الاستعداد للمعلومات المطلوبة وإجراءات الدعم لملاحظات ترتيب قائم، بدلاً من دمج الموضوعين في طلب حجز جديد.' },\n"
    ]
  ],
  "app/[locale]/booking/page.tsx": [
    [
      "    title: isArabic ? 'جهز استفسار خدمة العمالة المنزلية' : 'Prepare your domestic service enquiry',\n    subtitle: isArabic ? 'هذا النموذج يراجع البيانات محلياً ولا يرسلها إلى المكتب. تواصل مع عناية بالهاتف أو واتساب لمشاركة احتياجك ومناقشة الخطوة التالية.' : 'This form checks details locally and does not send them to the office. Contact INAYA by phone or WhatsApp to share your requirement and discuss the next step.',\n    sideTitle: isArabic ? 'قبل مراجعة البيانات' : 'Before checking your details',\n    points: isArabic ? ['اختر نوع الخدمة المطلوبة', 'اكتب الإمارة والمنطقة', 'أضف أي ملاحظات مهمة للعائلة'] : ['Choose the required service type', 'Add your emirate and area', 'Include any important household notes']\n  };\n\n  return (\n",
      "    title: isArabic ? 'جهز استفسار خدمة العمالة المنزلية' : 'Prepare your domestic service enquiry',\n    subtitle: isArabic ? 'هذا النموذج يراجع البيانات محلياً ولا يرسلها إلى المكتب. تواصل مع عناية بالهاتف أو واتساب لمشاركة احتياجك ومناقشة الخطوة التالية.' : 'This form checks details locally and does not send them to the office. Contact INAYA by phone or WhatsApp to share your requirement and discuss the next step.',\n    sideTitle: isArabic ? 'قبل مراجعة البيانات' : 'Before checking your details',\n    points: isArabic ? [\"اختر الخدمة والدور والباقة المطلوب مناقشتها\",\"Essential من 2,500 درهم شهرياً؛ Signature من 3,000 درهم شهرياً؛ INAYA Black بعرض سعر مخصص\",\"الخدمة الشهرية القياسية مقيمة وتشمل الراتب؛ وتعرض الخدمة غير المقيمة والزيارات الجزئية بصورة منفصلة\",\"حدد المهام والإمارة والبدء المفضل والسكن واحتياجات المنزل\",\"تسلم النطاق وتفصيل السعر ومستندات السداد كتابةً قبل التأكيد\",\"تبدأ الخدمة بعد اختيار المرشحة والتصاريح النظامية المطلوبة والتأكيد المكتوب\"] : [\"Choose the service, role and package you want to discuss\",\"Essential from AED 2,500/month; Signature from AED 3,000/month; INAYA Black Custom Quote\",\"Standard monthly service is salary-included and live-in; live-out and scheduled part-time arrangements are separately quoted\",\"State duties, emirate, preferred start, accommodation and household needs\",\"Receive written scope, price breakdown and payment documents before confirmation\",\"Service starts after candidate selection, required lawful authorisation and written confirmation\"]\n  };\n\n  return (\n"
    ]
  ]
};
const messageChanges = {
  "en": [
    [
      [
        "home",
        "why1Desc"
      ],
      "Ask what experience, training and documents can be reviewed for each candidate.",
      "Candidate assessment against the agreed household duties, with relevant individual experience and communication reviewed."
    ],
    [
      [
        "home",
        "why2Desc"
      ],
      "Hourly, part-time, full-time, monthly and live-in options.",
      "Standard managed monthly live-in service; live-out arrangements and scheduled part-time visits have separate quotations."
    ],
    [
      [
        "home",
        "why3Desc"
      ],
      "Replacement depends on the agreement, case review and available options.",
      "All tiers include eligible replacement review and administration, with standard, priority or role-specific coordination."
    ],
    [
      [
        "home",
        "why4Desc"
      ],
      "Full assistance with maid visa and sponsorship transfer.",
      "Applicable agency sponsorship and work-permit/residence processing are included in the managed monthly service; visa-only services are separately quoted."
    ],
    [
      [
        "booking",
        "planEssential"
      ],
      null,
      "Essential — from AED 2,500/month"
    ],
    [
      [
        "booking",
        "planSignature"
      ],
      null,
      "Signature — from AED 3,000/month"
    ],
    [
      [
        "booking",
        "planBlack"
      ],
      null,
      "INAYA Black — Custom Quote"
    ],
    [
      [
        "pricing",
        "subtitle"
      ],
      "Transparent and affordable plans",
      "Salary-included managed live-in packages"
    ],
    [
      [
        "pricing",
        "note"
      ],
      "Final pricing depends on service type, duration, emirate and requirements. Contact us for an exact quote.",
      "Essential starts from AED 2,500/month and Signature from AED 3,000/month, all-inclusive within the published scope and exclusions. INAYA Black is Custom Quote. The standard monthly offer is an INAYA-managed, salary-included live-in service under the applicable agency employment and sponsorship arrangement. The advertised monthly prices concern live-in service. Live-out service requires a separate itemised quotation covering accommodation and transport. Scheduled part-time visits are quoted separately and are not automatically covered by the full-time monthly price. Individual duties, hours, weekly rest and any additional work are recorded in the agreement for the selected role."
    ]
  ],
  "ar": [
    [
      [
        "home",
        "why1Desc"
      ],
      "اسأل عن الخبرة والتدريب والمستندات التي يمكن مراجعتها لكل مرشحة.",
      "تقييم المرشحة وفق المهام المنزلية المتفق عليها ومراجعة الخبرة الفردية ذات الصلة والتواصل."
    ],
    [
      [
        "home",
        "why2Desc"
      ],
      "خيارات بالساعة، دوام جزئي، دوام كامل، شهري وإقامة داخلية.",
      "خدمة شهرية مقيمة قياسية تديرها عناية؛ وللخدمة غير المقيمة والزيارات المجدولة الجزئية عروض منفصلة."
    ],
    [
      [
        "home",
        "why3Desc"
      ],
      "يعتمد الاستبدال على الاتفاق ومراجعة الحالة والخيارات المتاحة.",
      "تشمل جميع الباقات مراجعة الاستبدال المؤهل وإدارة إجراءاته، بتنسيق اعتيادي أو ذي أولوية أو بحسب الدور."
    ],
    [
      [
        "home",
        "why4Desc"
      ],
      "مساعدة كاملة في تأشيرة الخادمة ونقل الكفالة.",
      "تشمل الخدمة الشهرية المدارة الكفالة لدى الوكالة وإجراءات تصريح العمل والإقامة المنطبقة؛ وتعرض خدمات التأشيرة وحدها بصورة منفصلة."
    ],
    [
      [
        "booking",
        "planEssential"
      ],
      null,
      "Essential — من 2,500 درهم شهرياً"
    ],
    [
      [
        "booking",
        "planSignature"
      ],
      null,
      "Signature — من 3,000 درهم شهرياً"
    ],
    [
      [
        "booking",
        "planBlack"
      ],
      null,
      "INAYA Black — عرض سعر مخصص"
    ],
    [
      [
        "pricing",
        "subtitle"
      ],
      "خطط شفافة وميسورة التكلفة",
      "باقات مقيمة مدارة تشمل الراتب"
    ],
    [
      [
        "pricing",
        "note"
      ],
      "يعتمد السعر النهائي على نوع الخدمة والمدة والإمارة والمتطلبات. اتصل بنا للحصول على عرض سعر دقيق.",
      "تبدأ Essential من 2,500 درهم شهرياً وSignature من 3,000 درهم شهرياً، شاملتين التكاليف ضمن النطاق والاستثناءات المنشورة. وتبقى INAYA Black بعرض سعر مخصص. العرض الشهري القياسي خدمة مقيمة داخل المنزل تديرها عناية وتشمل الراتب، وفق ترتيب التوظيف والكفالة المنطبق لدى الوكالة. تخص الأسعار الشهرية المعلنة الخدمة المقيمة داخل المنزل. وتتطلب الخدمة غير المقيمة عرضاً منفصلاً ومفصلاً يبين السكن والنقل. أما الزيارات المجدولة بدوام جزئي فلها عرض مستقل ولا يشملها تلقائياً السعر الشهري للدوام الكامل. تسجل المهام الفردية وساعات العمل والراحة الأسبوعية وأي عمل إضافي في الاتفاق بحسب الدور المختار."
    ]
  ]
};

function approvedManagedPackages(file, source) {
  for (const [before, after] of patches[file] ?? []) {
    assert.equal(source.split(before).length, 2, file + ': one approved commercial-content anchor');
    source = source.replace(before, after);
  }
  return approvedPosterPricing(file, source);
}
function approvedPackageMessages(locale, data) {
  for (const [keys, before, after] of messageChanges[locale]) {
    let record = data;
    for (const key of keys.slice(0, -1)) record = record[key];
    const key = keys.at(-1);
    assert.equal(record[key] ?? null, before, keys.join('.') + ': original localized value');
    record[key] = after;
  }
  return approvedDeliveryMessages(locale, approvedPosterMessages(locale, data));
}
const commercial = require('./fixtures/managed-package-copy.json');
// Exact retained placements after the five reviewed guide replacements. The
// former source-note paragraphs and rewritten sales copy are no longer present.
// New editorial paragraphs receive no commercial-copy exemption.
const refreshedCommercialCounts = {
  'blog/documents-for-domestic-worker-enquiry': { en: { 0: 1 }, ar: { 0: 1 } },
  'blog/domestic-worker-visa-sponsorship-support': { en: { 0: 1, 1: 1 }, ar: { 0: 1, 1: 1 } },
  'blog/choosing-domestic-worker-agency-ajman': { en: {}, ar: {} },
  'blog/domestic-worker-hiring-stages-timelines': { en: {}, ar: {} },
};
const { hubSummaries } = require('./domestic-service-refresh-expectations.cjs');
const { withoutKeywordPresentation } = require('./keyword-article-presentation-expectations.cjs');
const { readFileSync } = require('node:fs');
const { homeFaqAnswers, archiveRoutes, sharedOnPageUiPlacements, sharedOnPageUiCounts } = require('./on-page-spec-expectations.cjs');
const { blogOrderSlugs } = require('./four-guides-addition-expectations.cjs');
const commercialBlogSlugs = ['all-inclusive-domestic-worker-packages', 'domestic-worker-package-pricing-factors'];
const paragraphTokens = value => value.toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu).join(' ');
const visibleText = value => value.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();

function withoutReviewedHomeFaq(page) {
  if (page.route !== '') return page;
  assert.ok(['https://inayadomestic.ae/en/', 'https://inayadomestic.ae/ar/'].includes(page.url), 'FAQ exemption belongs only to the two canonical Home pages');
  const html = readFileSync(`out/${page.locale}/index.html`, 'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  const sections = [...html.matchAll(/<section\b[^>]*aria-labelledby="home-faq-heading"[^>]*>([\s\S]*?)<\/section>/g)];
  assert.equal(sections.length, 1, `${page.url}: exactly one reviewed Home FAQ section`);
  const answers = [...sections[0][1].matchAll(/<article\b[^>]*>([\s\S]*?)<\/article>/g)]
    .map(match => visibleText(match[1].match(/<p\b[^>]*>([\s\S]*?)<\/p>/)[1]));
  assert.deepEqual(answers, homeFaqAnswers[page.locale], `${page.url}: exactly the six independently reviewed visible Home answers`);
  const paragraphs = [...page.paragraphs];
  for (const answer of answers) {
    const value = paragraphTokens(answer), index = paragraphs.indexOf(value);
    assert.ok(index >= 0, `${page.url}: reviewed FAQ answer is present in audit paragraphs`);
    // Remove precisely one verified FAQ placement; any additional copy elsewhere
    // remains in the historical exact-placement and editorial repetition checks.
    paragraphs.splice(index, 1);
  }
  return { ...page, paragraphs };
}
function withoutReviewedSharedOnPageUi(pages, htmlForPage = page => readFileSync(`out/${page.locale}/${page.route ? page.route + '/' : ''}index.html`, 'utf8')) {
  const known = new Set(sharedOnPageUiPlacements.map(item => paragraphTokens(item.text)));
  let excludedParagraphs = 0, excludedTokens = 0;
  const classified = pages.map(page => {
    const placements = sharedOnPageUiPlacements.filter(item => item.locale === page.locale && item.route === page.route);
    if (!placements.length) {
      assert.ok(!page.paragraphs.some(paragraph => known.has(paragraph)), `${page.locale}/${page.route}: unlisted shared UI placement is not permitted`);
      return page;
    }
    const html = htmlForPage(page).replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
    const main = html.slice(html.indexOf('<main'), html.lastIndexOf('</main>') + 7);
    const visibleParagraphs = [...main.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].map(match => visibleText(match[1]));
    const paragraphs = [...page.paragraphs];
    for (const placement of placements) {
      assert.equal(visibleParagraphs.filter(value => value === placement.text).length, 1, `${page.locale}/${page.route}: exactly one unchanged reviewed ${placement.kind} UI paragraph`);
      const paragraph = paragraphTokens(placement.text);
      assert.equal(paragraphs.filter(value => value === paragraph).length, 1, `${page.locale}/${page.route}: exact counted shared UI placement`);
      paragraphs.splice(paragraphs.indexOf(paragraph), 1);
      excludedParagraphs++;
      excludedTokens += paragraph.split(' ').length;
    }
    assert.ok(!paragraphs.some(paragraph => known.has(paragraph)), `${page.locale}/${page.route}: extra shared UI copy is not permitted`);
    return { ...page, paragraphs };
  });
  assert.equal(excludedParagraphs, sharedOnPageUiCounts.paragraphs, 'exact18 reviewed shared UI placements');
  assert.equal(excludedTokens, sharedOnPageUiCounts.tokens, 'exact236 reviewed shared UI tokens');
  return { pages: classified, excludedParagraphs, excludedTokens };
}

function reviewedBlogPlacements(page) {
  if (!['blog', ...archiveRoutes].includes(page.route)) return null;
  const approved = commercial.copy.blog[page.locale], expected = {};
  for (const [index, slug] of commercialBlogSlugs.entries()) {
    const position = blogOrderSlugs.indexOf(slug);
    assert.ok(position >= 0, `${slug}: preserved original archive order`);
    const pageNumber = Math.floor(position / 12) + 1;
    const route = pageNumber === 1 ? 'blog' : `blog/page/${pageNumber}`;
    if (page.route !== route) continue;
    expected[index] = 1;
    const html = readFileSync(`out/${page.locale}/${page.route}/index.html`, 'utf8').replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
    const cards = [...html.matchAll(/<article\b[^>]*data-blog-guide="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)]
      .filter(match => match[1] === slug);
    assert.equal(cards.length, 1, `${page.url}: one preserved ${slug} card`);
    const description = visibleText(cards[0][2].match(/<p\b[^>]*>([\s\S]*?)<\/p>/)[1]);
    assert.equal(paragraphTokens(description), approved[index], `${page.url}: exact previously approved commercial card summary`);
  }
  return { approved, expected };
}

function editorialRepetition(audit) {
  // Mandatory, exact owner-approved commercial wording is protected separately.
  // Retain the existing budgets for editorial prose; no arbitrary paragraph,
  // unrelated route or later duplication is covered by this source snapshot.
  const pages = audit.pages.map(original => {
    const clarity = require('./page-clarity-expectations.cjs');
    const reviewedPage = clarity.assertReviewedPage(original);
    const page = withoutReviewedHomeFaq(original);
    const blog = reviewedBlogPlacements(page);
    const originalApproved = blog?.approved ?? commercial.copy[page.route]?.[page.locale] ?? [];
    const approved = reviewedPage ? [...new Set([...originalApproved, ...clarity.rendered.sharedCommercialParagraphs[page.locale]])] : originalApproved;
    const occurrences = {};
    for (const paragraph of page.paragraphs) {
      const index = approved.indexOf(paragraph);
      if (index >= 0) occurrences[index] = (occurrences[index] ?? 0) + 1;
    }
    // The allowance is bounded to the reviewed placements too: missing copy or
    // another copy of an approved paragraph must fail, not disappear from the metric.
    assert.deepEqual(occurrences, reviewedPage?.commercialCounts ?? blog?.expected ?? refreshedCommercialCounts[page.route]?.[page.locale] ?? commercial.paragraphCounts[page.route]?.[page.locale] ?? {}, `${page.url}: exact approved commercial paragraph placements`);
    const hubCopy = page.route === 'services' ? Object.values(hubSummaries).map(copy => copy[page.locale].toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu).join(' ')) : [];
    // Only the three exact service-card summaries on each localized hub are
    // excluded. Missing, changed or duplicated placements still fail.
    if (hubCopy.length) assert.deepEqual(hubCopy.map(copy => page.paragraphs.filter(p => p === copy).length), [1, 1, 1], `${page.url}: exact three approved hub-summary placements`);
    return { ...page, paragraphs: page.paragraphs.filter(p => !approved.includes(p) && !hubCopy.includes(p)) };
  });
  function repeatedContent(values) {
    const frequency = new Map();
    for (const page of values) for (const p of new Set(page.paragraphs)) {
      const key = page.locale + ':' + p;
      frequency.set(key, (frequency.get(key) ?? 0) + 1);
    }
    let repeatedParagraphs = 0, repeatedTokens = 0;
    for (const page of values) for (const p of page.paragraphs) if (frequency.get(page.locale + ':' + p) > 1) {
      repeatedParagraphs++;
      repeatedTokens += p.split(' ').length;
    }
    return { repeatedParagraphs, repeatedTokens };
  }
  const raw = repeatedContent(pages);
  const onPageUi = withoutReviewedSharedOnPageUi(pages);
  const presentation = withoutKeywordPresentation(onPageUi.pages);
  return {
    ...repeatedContent(presentation.pages),
    rawEditorialRepeatedParagraphs: raw.repeatedParagraphs,
    rawEditorialRepeatedTokens: raw.repeatedTokens,
    classifiedPresentationParagraphs: presentation.excludedParagraphs,
    classifiedPresentationTokens: presentation.excludedTokens,
    classifiedOnPageUiParagraphs: onPageUi.excludedParagraphs,
    classifiedOnPageUiTokens: onPageUi.excludedTokens
  };
}
module.exports = { approvedManagedPackages, approvedPackageMessages, editorialRepetition, withoutReviewedSharedOnPageUi, metadata: commercial.metadata, priceMentions: { ...commercial.priceMentions, ...Object.fromEntries(Object.entries(require('./page-clarity-expectations.cjs').rendered.pages).map(([url, pin]) => [new URL(url).pathname.slice(1).replace(/\/$/, ''), pin.priceMentions])) } };
