import { packageSummary, packageSections } from './package-content';
export type Lang = 'en' | 'ar';

type Localized = Record<Lang, string>;
type LocalizedList = Record<Lang, string[]>;

export type TrustSupportSection = {
  title: Localized;
  body: Localized;
  points: LocalizedList;
};

export type TrustSupportFaq = {
  question: Localized;
  answer: Localized;
};

export type TrustSupportPage = {
  slug: string;
  path: string;
  badge: Localized;
  title: Localized;
  metaTitle: Localized;
  metaDescription: Localized;
  lead: Localized;
  updated?: Localized;
  highlights: LocalizedList;
  sections: TrustSupportSection[];
  faqs: TrustSupportFaq[];
  ctaTitle: Localized;
  ctaText: Localized;
  links?: { label: Localized; route: string }[];
  sources?: { label: Localized; url: Localized }[];
};

export const trustSupportPages: TrustSupportPage[] = [
  {
    slug: 'documents-required',
    path: 'documents-required',
    badge: { en: 'Documents Guide', ar: 'دليل المستندات' },
    title: { en: 'Documents Required for Maid & Domestic Worker Services in UAE', ar: 'المستندات المطلوبة لخدمات الخادمات والعمالة المنزلية في الإمارات' },
    metaTitle: { en: 'Documents Required for Maid Services in UAE | INAYA', ar: 'المستندات المطلوبة لخدمات الخادمات في الإمارات | عناية' },
    metaDescription: { en: 'Understand the documents usually needed for maid services, recruitment, sponsorship transfer, maid visa support and domestic worker processing in the UAE.', ar: 'تعرف على المستندات المطلوبة عادة لخدمات الخادمات والتوظيف ونقل الكفالة وتأشيرة الخادمة وإجراءات العمالة المنزلية في الإمارات.' },
    lead: { en: 'This guide helps UAE families prepare the right information before requesting maid, nanny, cook, caregiver, recruitment or maid visa assistance from INAYA.', ar: 'يساعد هذا الدليل الأسر في الإمارات على تجهيز المعلومات المناسبة قبل طلب خادمة أو مربية أو طباخ أو مقدم رعاية أو توظيف أو مساعدة تأشيرة من عناية.' },
    highlights: { en: ['Clear checklist before consultation', 'Useful for maid visa and recruitment enquiries', 'English and Arabic family guidance', 'Document needs confirmed by case'], ar: ['قائمة واضحة قبل الاستشارة', 'مفيدة لطلبات التأشيرة والتوظيف', 'إرشاد للأسرة بالعربية والإنجليزية', 'يتم تأكيد المستندات حسب الحالة'] },
    sections: [...[{"title":{"en":"Basic information to prepare","ar":"المعلومات الأساسية التي يجب تجهيزها"},"body":{"en":"Before INAYA can guide your request accurately, the team needs clear family and service details. These details help avoid delays and make the consultation more useful.","ar":"قبل أن تتمكن عناية من إرشاد طلبك بدقة، يحتاج الفريق إلى تفاصيل واضحة عن الأسرة ونوع الخدمة. تساعد هذه التفاصيل على تقليل التأخير وجعل الاستشارة أكثر فائدة."},"points":{"en":["Full name and mobile number","Emirate and residential area","Required service type and preferred start date","Live-in, live-out, part-time or monthly requirement","Family size and main household duties"],"ar":["الاسم الكامل ورقم الهاتف","الإمارة والمنطقة السكنية","نوع الخدمة المطلوبة وتاريخ البدء المفضل","مقيمة أو غير مقيمة أو بدوام جزئي أو شهرية","عدد أفراد الأسرة والمهام المنزلية الأساسية"]}},{"title":{"en":"Documents for maid visa or sponsorship guidance","ar":"مستندات إرشاد تأشيرة الخادمة أو الكفالة"},"body":{"en":"Maid visa and sponsorship-related requirements can vary by case, emirate and selected service path. INAYA will review your case before confirming the exact checklist.","ar":"قد تختلف متطلبات تأشيرة الخادمة والكفالة حسب الحالة والإمارة ومسار الخدمة المختار. تراجع عناية حالتك قبل تأكيد القائمة الدقيقة."},"points":{"en":["Sponsor identity and contact details","Residence address and emirate","Current worker document status where applicable","Passport and visa-related details where applicable","Any previous service agreement or transfer information"],"ar":["بيانات هوية الكفيل ومعلومات التواصل","عنوان السكن والإمارة","حالة مستندات العاملة الحالية إن وجدت","تفاصيل الجواز والتأشيرة إن وجدت","أي اتفاق خدمة سابق أو معلومات نقل الكفالة"]}},{"title":{"en":"Documents for recruitment and profile matching","ar":"مستندات ومعلومات التوظيف ومطابقة الملفات"},"body":{"en":"For recruitment or profile comparison, the most important step is to define the role clearly. Nationality preference can be shared, but the final match should depend on the individual profile.","ar":"في التوظيف أو مقارنة الملفات، أهم خطوة هي تحديد الدور بوضوح. يمكن مشاركة تفضيل الجنسية، لكن المطابقة النهائية يجب أن تعتمد على الملف الفردي."},"points":{"en":["Preferred nationality or source country","Experience required in cleaning, cooking, childcare or care support","Language preference","Expected duties and working arrangement","Timing, accommodation and family routine notes"],"ar":["الجنسية أو دولة المصدر المفضلة","الخبرة المطلوبة في التنظيف أو الطبخ أو رعاية الأطفال أو الرعاية","تفضيل اللغة","المهام المتوقعة وترتيب العمل","ملاحظات التوقيت والإقامة وروتين الأسرة"]}},{"title":{"en":"Important note about final requirements","ar":"ملاحظة مهمة حول المتطلبات النهائية"},"body":{"en":"This page is a preparation guide, not a final legal checklist. INAYA confirms the exact requirements after reviewing the service type, availability, profile, documents and current UAE process.","ar":"هذه الصفحة دليل تجهيز وليست قائمة قانونية نهائية. تؤكد عناية المتطلبات الدقيقة بعد مراجعة نوع الخدمة والتوفر والملف والمستندات والإجراء الحالي في الإمارات."},"points":{"en":["Final checklist is confirmed before action","Government or third-party requirements may change","Incomplete details can delay the process","Families should keep original documents ready when needed"],"ar":["يتم تأكيد القائمة النهائية قبل أي إجراء","قد تتغير متطلبات الجهات الحكومية أو الخارجية","نقص التفاصيل قد يؤخر الإجراء","ينبغي إبقاء المستندات الأصلية جاهزة عند الحاجة"]}},{"title":{"en":"Separate household details from worker records","ar":"افصل معلومات المنزل عن سجلات العاملة"},"body":{"en":"An initial household enquiry needs a role, location, duties and preferred schedule, not a full set of identity documents. For profile review or a formal application, identify the document, the person it concerns, its purpose and who needs to receive it. A profile note is not proof that a reference, qualification or official check has been verified.","ar":"يحتاج الاستفسار المنزلي الأولي إلى الدور والموقع والمهام والجدول المفضل، وليس مجموعة كاملة من وثائق الهوية. ولمراجعة ملف أو معاملة رسمية، حدد المستند وصاحبه والغرض منه والجهة التي تحتاج استلامه. ملاحظة الملف ليست دليلاً على التحقق من مرجع أو مؤهل أو فحص رسمي."},"points":{"en":["Customer or employer records: confirm the identity and agreement documents for the selected process","Worker records: check the name, document status and relevant experience evidence available for review","Request the checklist for the exact official service and employer category","Check spelling, expiry dates and consistency before an application","Ask before sending sensitive copies; the website forms do not upload documents"],"ar":["سجلات العميل أو صاحب العمل: أكد وثائق الهوية والاتفاق المطلوبة للإجراء المختار","سجلات العاملة: راجع الاسم وحالة المستندات وإثبات الخبرة ذي الصلة المتاح للمراجعة","اطلب قائمة الخدمة الرسمية المحددة وفئة صاحب العمل","راجع كتابة الأسماء وتواريخ الانتهاء وتطابق البيانات قبل تقديم الطلب","اسأل قبل إرسال نسخ حساسة؛ فنماذج الموقع لا ترفع المستندات"]}}], packageSections.responsibilities],
    faqs: [
      { question: { en: 'Do I need all documents before contacting INAYA?', ar: 'هل يجب تجهيز كل المستندات قبل التواصل مع عناية؟' }, answer: { en: 'No. You can contact INAYA first, and the team will explain which details are needed for your specific service.', ar: 'لا. يمكنك التواصل مع عناية أولاً، وسيشرح الفريق التفاصيل المطلوبة حسب نوع خدمتك.' } },
      { question: { en: 'Are requirements the same for every maid service?', ar: 'هل المتطلبات نفسها لكل خدمات الخادمات؟' }, answer: { en: 'No. Requirements differ between live-in maid, live-out maid, recruitment, visa assistance and sponsorship transfer.', ar: 'لا. تختلف المتطلبات بين الخادمة المقيمة وغير المقيمة والتوظيف ومساعدة التأشيرة ونقل الكفالة.' } },
      { question: { en: 'Can INAYA help me understand missing documents?', ar: 'هل تساعدني عناية في معرفة المستندات الناقصة؟' }, answer: { en: 'Yes. The team can review your situation and explain what information or documents may be needed next.', ar: 'نعم. يمكن للفريق مراجعة حالتك وشرح المعلومات أو المستندات التي قد تكون مطلوبة لاحقاً.' } }
    ],
    ctaTitle: { en: 'Need a document checklist for your case?', ar: 'هل تحتاج قائمة مستندات لحالتك؟' },
    ctaText: { en: 'Share your emirate, service type and current situation. INAYA will guide you clearly before the next step.', ar: 'شارك الإمارة ونوع الخدمة ووضعك الحالي، وستوضح لك عناية الخطوات قبل المتابعة.' },
    links: [{ label: { en: 'Compare enquiry details with formal application documents', ar: 'قارن معلومات الاستفسار بمستندات المعاملة الرسمية' }, route: 'blog/documents-for-domestic-worker-enquiry' }, { label: { en: 'Review background-information limits', ar: 'راجع حدود معلومات الخلفية' }, route: 'services/background-verification' }]
  },
  {
    slug: 'why-choose-inaya',
    path: 'why-choose-inaya',
    badge: { en: 'Why INAYA', ar: 'لماذا عناية' },
    title: { en: 'Why Choose INAYA Domestic Workers in UAE', ar: 'لماذا تختار عناية للعمالة المنزلية في الإمارات' },
    metaTitle: { en: 'INAYA Domestic Workers Service Approach', ar: 'نهج خدمات عناية للعمالة المنزلية' },
    metaDescription: { en: 'Learn why UAE families choose INAYA for maid services, nannies, cooks, caregivers, recruitment, source country guidance and maid visa support.', ar: 'تعرف لماذا تختار الأسر في الإمارات عناية لخدمات الخادمات والمربيات والطهاة والرعاية والتوظيف ودول المصدر وتأشيرة الخادمة.' },
    lead: packageSummary,
    highlights: {
  "en": [
    "Salary-included monthly service, live-in or live-out",
    "Individual duty matching and written scope",
    "Coordination and follow-up under the agreed service plan",
    "Eligible replacement review and administration"
  ],
  "ar": [
    "خدمة شهرية مدارة تشمل الراتب، مقيمة أو غير مقيمة",
    "مطابقة فردية للمهام ونطاق مكتوب",
    "تنسيق ومتابعة وفق خطة الخدمة المتفق عليها",
    "مراجعة الاستبدال المؤهل وإدارة إجراءاته"
  ]
},
    sections: [{"title":{"en":"Profile-first domestic worker matching","ar":"مطابقة العمالة المنزلية حسب الملف الفردي"},"body":{"en":"Nationality can be useful as a preference, but INAYA encourages families to compare individual profiles by experience, documents, duties, communication and suitability.","ar":"قد تكون الجنسية تفضيلاً مفيداً، لكن عناية تشجع الأسر على مقارنة الملفات الفردية حسب الخبرة والمستندات والمهام والتواصل والملاءمة."},"points":{"en":["Country preference can be discussed","Experience and duties reviewed individually","Communication and family fit considered","Documents and availability checked by case"],"ar":["يمكن مناقشة تفضيل دولة المصدر","مراجعة الخبرة والمهام بشكل فردي","مراعاة التواصل وملاءمة الأسرة","فحص المستندات والتوفر حسب الحالة"]}}, packageSections.inclusions, packageSections.commencement, packageSections.replacement, packageSections.followUp],
    faqs: [
      { question: { en: 'Is INAYA only for Ajman families?', ar: 'هل عناية للأسر في عجمان فقط؟' }, answer: { en: 'No. INAYA is based in Ajman and supports enquiries across UAE emirates, subject to availability and service requirements.', ar: 'لا. عناية مقرها في عجمان وتدعم الطلبات في إمارات الدولة حسب التوفر ومتطلبات الخدمة.' } },
      { question: { en: 'Can INAYA help me choose between maid, nanny and babysitter?', ar: 'هل تساعدني عناية في الاختيار بين الخادمة والمربية وجليسة الأطفال؟' }, answer: { en: 'Yes. The team can explain which service type fits regular childcare, occasional care or household duties.', ar: 'نعم. يمكن للفريق شرح نوع الخدمة الأنسب للرعاية المنتظمة أو المؤقتة أو المهام المنزلية.' } },
      { question: { en: 'Does INAYA provide visa and recruitment guidance?', ar: 'هل تقدم عناية إرشاد التأشيرة والتوظيف؟' }, answer: { en: 'Yes. Recruitment, maid visa and sponsorship-related guidance can be discussed depending on your case.', ar: 'نعم. يمكن مناقشة إرشاد التوظيف وتأشيرة الخادمة والكفالة حسب حالتك.' } }
    ],
    ctaTitle: { en: 'Ready to discuss your household requirement?', ar: 'هل أنت مستعد لمناقشة احتياج منزلك؟' },
    ctaText: { en: 'Contact INAYA with your emirate, preferred service and family routine. The team will guide you clearly.', ar: 'تواصل مع عناية وشارك الإمارة والخدمة المفضلة وروتين الأسرة، وسيقدم لك الفريق إرشاداً واضحاً.' }
  },
  {
    slug: 'service-policy',
    path: 'service-policy',
    badge: { en: 'Service Policy', ar: 'سياسة الخدمة' },
    title: { en: 'INAYA Domestic Worker Service Policy', ar: 'سياسة خدمات عناية للعمالة المنزلية' },
    metaTitle: { en: 'Service Policy | INAYA Domestic Workers UAE', ar: 'سياسة الخدمة | عناية للعمالة المنزلية في الإمارات' },
    metaDescription: { en: 'Read INAYA service policy for maid services, domestic worker recruitment, availability, booking confirmation, documents, family responsibilities and follow-up.', ar: 'اقرأ سياسة عناية للخدمات: الخادمات والتوظيف والتوفر وتأكيد الحجز والمستندات ومسؤوليات الأسرة والمتابعة.' },
    lead: packageSummary,
    updated: { en: 'Last updated: 2026', ar: 'آخر تحديث: 2026' },
    highlights: { en: ['Availability confirmed by case', 'Service scope clarified before booking', 'Family details required for accurate guidance', 'Policies vary by selected service model'], ar: ['يتم تأكيد التوفر حسب الحالة', 'توضيح نطاق الخدمة قبل الحجز', 'تفاصيل الأسرة مطلوبة لإرشاد دقيق', 'السياسات تختلف حسب نموذج الخدمة المختار'] },
    sections: [packageSections.commencement, packageSections.responsibilities, packageSections.inclusions, packageSections.exclusions, packageSections.followUp],
    faqs: [
      { question: { en: 'Is availability guaranteed when I submit a form?', ar: 'هل يكون التوفر مضموناً عند إرسال النموذج؟' }, answer: { en: 'No. Availability is confirmed only after INAYA reviews the request and suitable options.', ar: 'لا. يتم تأكيد التوفر فقط بعد مراجعة عناية للطلب والخيارات المناسبة.' } },
      { question: { en: 'Can service details change after enquiry?', ar: 'هل يمكن أن تتغير تفاصيل الخدمة بعد الاستفسار؟' }, answer: { en: 'Yes. Details may change based on availability, documents, timing and final family requirements.', ar: 'نعم. قد تتغير التفاصيل حسب التوفر والمستندات والتوقيت ومتطلبات الأسرة النهائية.' } },
      { question: { en: 'Where can I raise a service concern?', ar: 'أين يمكنني رفع ملاحظة على الخدمة؟' }, answer: { en: 'Contact INAYA by phone, WhatsApp or email with your name, service type and concern details.', ar: 'تواصل مع عناية عبر الهاتف أو واتساب أو البريد مع الاسم ونوع الخدمة وتفاصيل الملاحظة.' } }
    ],
    ctaTitle: { en: 'Need clarification before booking?', ar: 'هل تحتاج توضيحاً قبل الحجز؟' },
    ctaText: { en: 'Share your service requirement and INAYA will explain the applicable process before confirmation.', ar: 'شارك احتياج الخدمة وستشرح عناية الإجراء المناسب قبل التأكيد.' }
  },
  {
    slug: 'replacement-policy',
    path: 'replacement-policy',
    badge: { en: 'Replacement Policy', ar: 'سياسة الاستبدال' },
    title: { en: 'Maid Replacement Policy & Support Process', ar: 'سياسة استبدال الخادمة وإجراءات الدعم' },
    metaTitle: { en: 'Maid Replacement Policy UAE | INAYA Domestic Workers', ar: 'سياسة استبدال الخادمة في الإمارات | عناية للعمالة المنزلية' },
    metaDescription: { en: 'Understand INAYA maid replacement process, review steps, issue reporting, eligibility, availability and follow-up for domestic worker service concerns.', ar: 'تعرف على عملية استبدال الخادمة لدى عناية وخطوات المراجعة وتقديم الملاحظات والأهلية والتوفر والمتابعة لملاحظات خدمات العمالة المنزلية.' },
    lead: packageSections.replacement.body,
    updated: { en: 'Last updated: 2026', ar: 'آخر تحديث: 2026' },
    highlights: { en: ['Case reviewed before decision', 'Replacement depends on service agreement', 'Availability must be confirmed', 'Clear feedback improves next match'], ar: ['مراجعة الحالة قبل القرار', 'الاستبدال يعتمد على اتفاق الخدمة', 'يجب تأكيد التوفر', 'الملاحظات الواضحة تحسن المطابقة التالية'] },
    sections: [packageSections.replacement, packageSections.commencement, packageSections.cancellation, packageSections.followUp],
    faqs: [
  {
    "question": {
      "en": "What replacement support does the agreed service plan include?",
      "ar": "ما دعم الاستبدال المشمول في خطة الخدمة المتفق عليها؟"
    },
    "answer": {
      "en": packageSections.replacement.body.en,
      "ar": packageSections.replacement.body.ar
    }
  },
  {
    "question": {
      "en": "How is a proposed replacement confirmed?",
      "ar": "كيف يؤكد البديل المقترح؟"
    },
    "answer": {
      "en": "INAYA reviews the request and agreed role, coordinates available individual profiles and explains next steps. A revised candidate profile is provided and customer consent obtained before confirmation. Matching depends on role and availability; no fixed completion deadline is promised.",
      "ar": "تراجع عناية الطلب والدور المتفق عليه وتنسق الملفات الفردية المتاحة وتوضح الخطوات التالية. يقدم ملف المرشحة المعدل وتؤخذ موافقة العميل قبل التأكيد. تعتمد المطابقة على الدور والتوفر دون وعد بمدة إنجاز ثابتة."
    }
  },
  {
    "question": {
      "en": "What if there is no suitable replacement?",
      "ar": "ماذا إن لم يتوفر بديل مناسب؟"
    },
    "answer": {
      "en": "Discuss available alternatives and effective cancellation. The unused prepaid service period is handled under INAYA’s monthly refund terms, while legally required remedies remain available.",
      "ar": "ناقش البدائل المتاحة وسريان الإلغاء. تعالج فترة الخدمة المدفوعة وغير المستخدمة وفق شروط عناية للاسترداد الشهري، مع بقاء سبل الإنصاف المطلوبة قانوناً."
    }
  }
],
    ctaTitle: { en: 'Need to discuss a replacement request?', ar: 'هل تحتاج مناقشة طلب استبدال؟' },
    ctaText: { en: 'Contact INAYA with your booking details and concern so the team can review your case clearly.', ar: 'تواصل مع عناية بتفاصيل الحجز والملاحظة حتى يتمكن الفريق من مراجعة حالتك بوضوح.' }
  },
  {
    slug: 'privacy-policy',
    path: 'privacy-policy',
    badge: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    title: { en: 'Privacy Policy for INAYA Domestic Workers', ar: 'سياسة الخصوصية لعناية للعمالة المنزلية' },
    metaTitle: { en: 'Privacy Policy | INAYA Domestic Workers UAE', ar: 'سياسة الخصوصية | عناية للعمالة المنزلية في الإمارات' },
    metaDescription: { en: 'Read how INAYA Domestic Workers collects, uses and protects customer information for maid service enquiries, bookings, WhatsApp communication and support.', ar: 'اقرأ كيف تجمع عناية للعمالة المنزلية معلومات العملاء وتستخدمها وتحميها لطلبات الخادمات والحجوزات والتواصل عبر واتساب والدعم.' },
    lead: { en: 'INAYA respects customer privacy and uses submitted information to respond to enquiries, explain service options, confirm availability and provide support.', ar: 'تحترم عناية خصوصية العملاء وتستخدم المعلومات المقدمة للرد على الاستفسارات وشرح خيارات الخدمة وتأكيد التوفر وتقديم الدعم.' },
    updated: { en: 'Last updated: 2026', ar: 'آخر تحديث: 2026' },
    highlights: { en: ['No sale of customer data', 'Information used for service communication', 'WhatsApp and website form enquiries covered', 'Contact available for privacy questions'], ar: ['لا يتم بيع بيانات العملاء', 'استخدام المعلومات للتواصل حول الخدمة', 'تشمل نماذج الموقع وواتساب', 'يمكن التواصل لأي سؤال عن الخصوصية'] },
    sections: [
      {
        title: { en: 'Information we collect', ar: 'المعلومات التي نجمعها' },
        body: { en: 'INAYA receives information you choose to share by WhatsApp, phone, email or office consultation. The website enquiry forms prepare and check details locally; they do not send those details to INAYA. Do not enter sensitive documents in these forms.', ar: 'تتلقى عناية المعلومات التي تختار مشاركتها عبر واتساب أو الهاتف أو البريد الإلكتروني أو زيارة المكتب. تجهز نماذج الاستفسار في الموقع البيانات وتراجعها محلياً؛ ولا ترسلها إلى عناية. لا تدخل مستندات حساسة في هذه النماذج.' },
        points: { en: ['Name, phone number and optional email address shared through a contact channel', 'Emirate, area, service preference, household requirements and messages you share', 'Relevant documents or case details sent when needed', 'Support, replacement, booking and payment-related correspondence you provide', 'Website preparation fields also include preferred date or plan, nationality preference and applicant role or experience; checking them locally does not send them to INAYA'], ar: ['الاسم ورقم الهاتف والبريد الإلكتروني الاختياري المشارك عبر قناة التواصل', 'الإمارة والمنطقة وتفضيل الخدمة واحتياجات المنزل والرسائل التي تشاركها', 'المستندات ذات الصلة أو تفاصيل الحالة المرسلة عند الحاجة', 'مراسلات الدعم والاستبدال والحجز والمدفوعات التي تقدمها', 'تشمل حقول التجهيز في الموقع أيضاً التاريخ أو الباقة المفضلة وتفضيل الجنسية ودور المتقدم أو خبرته؛ ولا ترسل مراجعتها محلياً هذه البيانات إلى عناية'] }
      },
      {
        title: { en: 'How we use your information', ar: 'كيف نستخدم معلوماتك' },
        body: { en: 'The information is used to understand your request, contact you, explain availability, prepare service guidance, handle support and improve the customer experience.', ar: 'تستخدم المعلومات لفهم طلبك والتواصل معك وشرح التوفر وتجهيز إرشاد الخدمة والتعامل مع الدعم وتحسين تجربة العميل.' },
        points: { en: ['Respond to enquiries', 'Confirm service requirements and next steps', 'Prepare quotation or consultation guidance', 'Support document or visa-related questions', 'Improve service follow-up'], ar: ['الرد على الاستفسارات', 'تأكيد متطلبات الخدمة والخطوات التالية', 'تجهيز عرض أو إرشاد استشارة', 'دعم أسئلة المستندات أو التأشيرة', 'تحسين المتابعة'] }
      },
      {
        title: { en: 'Sharing and protection', ar: 'المشاركة والحماية' },
        body: { en: 'INAYA does not sell customer data. Information may be shared only where needed to deliver a requested service, process support, comply with requirements or protect legitimate business interests.', ar: 'لا تبيع عناية بيانات العملاء. قد تتم مشاركة المعلومات فقط عند الحاجة لتقديم الخدمة المطلوبة أو معالجة الدعم أو الامتثال للمتطلبات أو حماية المصالح المشروعة.' },
        points: { en: ['Data is used for service purposes', 'Access is limited to relevant team members', 'Sensitive details should be shared only when needed', 'Customers can request clarification about their information'], ar: ['استخدام البيانات لأغراض الخدمة', 'الوصول محدود لأعضاء الفريق المعنيين', 'يجب مشاركة التفاصيل الحساسة عند الحاجة فقط', 'يمكن للعملاء طلب توضيح حول معلوماتهم'] }
      },
      {
        title: { en: 'Contact for privacy questions', ar: 'التواصل لأسئلة الخصوصية' },
        body: { en: 'For privacy-related questions, customers can contact INAYA through email, phone, WhatsApp or the contact page.', ar: 'لأي أسئلة متعلقة بالخصوصية، يمكن للعملاء التواصل مع عناية عبر البريد الإلكتروني أو الهاتف أو واتساب أو صفحة التواصل.' },
        points: { en: ['Email: info@inayadomestic.ae', 'Website: inayadomestic.ae', 'Share clear request details', 'Privacy requests are reviewed by the team'], ar: ['البريد: info@inayadomestic.ae', 'الموقع: inayadomestic.ae', 'شارك تفاصيل الطلب بوضوح', 'تتم مراجعة طلبات الخصوصية من الفريق'] }
      }
    ],
    faqs: [
      { question: { en: 'Does INAYA sell customer data?', ar: 'هل تبيع عناية بيانات العملاء؟' }, answer: { en: 'No. INAYA does not sell customer data.', ar: 'لا. لا تبيع عناية بيانات العملاء.' } },
      { question: { en: 'Why do you ask for service details?', ar: 'لماذا تطلبون تفاصيل الخدمة؟' }, answer: { en: 'Service details help the team understand the household requirement and provide accurate guidance.', ar: 'تساعد تفاصيل الخدمة الفريق على فهم احتياج المنزل وتقديم إرشاد دقيق.' } },
      { question: { en: 'Can I contact INAYA about privacy?', ar: 'هل يمكنني التواصل مع عناية بخصوص الخصوصية؟' }, answer: { en: 'Yes. Contact info@inayadomestic.ae with your question or request.', ar: 'نعم. تواصل عبر info@inayadomestic.ae مع سؤالك أو طلبك.' } },
      { question: { en: 'Does checking a website form send my information?', ar: 'هل ترسل مراجعة نموذج الموقع معلوماتي؟' }, answer: { en: 'No. Contact, booking and careers forms prepare and check details locally; they do not send an enquiry or upload documents. When you choose to contact INAYA through WhatsApp, email or another channel, the information you send is shared through that separate channel.', ar: 'لا. تجهز نماذج التواصل والحجز والوظائف البيانات وتراجعها محلياً؛ ولا ترسل استفساراً أو ترفع مستندات. عندما تختار التواصل مع عناية عبر واتساب أو البريد أو قناة أخرى، تتم مشاركة المعلومات التي ترسلها عبر تلك القناة المنفصلة.' } }
    ],
    ctaTitle: { en: 'Have a privacy question?', ar: 'هل لديك سؤال عن الخصوصية؟' },
    ctaText: { en: 'Contact INAYA and the team will review your privacy-related request.', ar: 'تواصل مع عناية وسيقوم الفريق بمراجعة طلبك المتعلق بالخصوصية.' }
  },
  {
    slug: 'terms',
    path: 'terms',
    badge: { en: 'Terms & Conditions', ar: 'الشروط والأحكام' },
    title: { en: 'Terms & Conditions for INAYA Domestic Workers', ar: 'الشروط والأحكام لعناية للعمالة المنزلية' },
    metaTitle: { en: 'Terms & Conditions | INAYA Domestic Workers UAE', ar: 'الشروط والأحكام | عناية للعمالة المنزلية في الإمارات' },
    metaDescription: { en: 'Read INAYA terms for website use, maid service enquiries, booking confirmation, pricing, responsibilities, service changes and support communication.', ar: 'اقرأ شروط عناية لاستخدام الموقع وطلبات خدمات الخادمات وتأكيد الحجز والأسعار والمسؤوليات وتغييرات الخدمة والتواصل.' },
    lead: {
  "en": "These terms explain INAYA’s managed monthly service, written confirmation, household responsibilities, payments, cancellation and eligible replacement support. Separately contracted recruitment and visa-only services remain distinct.",
  "ar": "توضح هذه الشروط خدمة عناية الشهرية المدارة والتأكيد المكتوب ومسؤوليات المنزل والسداد والإلغاء ودعم الاستبدال المؤهل. وتبقى خدمات الاستقدام والتأشيرة المتعاقد عليها منفصلة مستقلة."
},
    updated: { en: 'Last updated: 2026', ar: 'آخر تحديث: 2026' },
    highlights: { en: ['Website information is guidance', 'Services confirmed by INAYA team', 'Customer details must be accurate', 'Terms may vary by service agreement'], ar: ['معلومات الموقع إرشادية', 'يتم تأكيد الخدمات من فريق عناية', 'يجب أن تكون بيانات العميل دقيقة', 'قد تختلف الشروط حسب اتفاق الخدمة'] },
    sections: [...[{"title":{"en":"Use of website information","ar":"استخدام معلومات الموقع"},"body":{"en":"Website content is provided for general service guidance. Final service details, availability, prices, documents and timings are confirmed by the INAYA team.","ar":"يتم تقديم محتوى الموقع كإرشاد عام للخدمات. يتم تأكيد تفاصيل الخدمة النهائية والتوفر والأسعار والمستندات والتوقيت من فريق عناية."},"points":{"en":["Information may be updated","Availability is not guaranteed by page content alone","Final confirmation happens through the team","Customers should ask questions before booking"],"ar":["قد يتم تحديث المعلومات","التوفر لا يضمن بمجرد قراءة الصفحة","التأكيد النهائي يتم عبر الفريق","ينبغي للعميل طرح الأسئلة قبل الحجز"]}},{"title":{"en":"Submitting service requests","ar":"إرسال طلبات الخدمة"},"body":{"en":"Share accurate information when contacting INAYA by phone, WhatsApp, email or at the office. Website forms only prepare and validate details locally; they do not submit an enquiry or confirm an appointment. Contact INAYA to share your request and confirm availability.","ar":"شارك معلومات صحيحة عند التواصل مع عناية هاتفياً أو عبر واتساب أو البريد الإلكتروني أو في المكتب. تجهز نماذج الموقع البيانات وتراجعها محلياً فقط؛ ولا ترسل استفساراً أو تؤكد موعداً. تواصل مع عناية لمشاركة طلبك وتأكيد التوفر."},"points":{"en":["Provide correct name and contact number","Share accurate area and emirate","Explain service type clearly","Mention special household requirements early"],"ar":["تقديم الاسم ورقم التواصل بشكل صحيح","مشاركة المنطقة والإمارة بدقة","شرح نوع الخدمة بوضوح","ذكر المتطلبات المنزلية الخاصة مبكراً"]}}], packageSections.responsibilities, packageSections.payments, packageSections.commencement, packageSections.exclusions, packageSections.cancellation, packageSections.replacement, packageSections.followUp],
    faqs: [
      { question: { en: 'Are website prices final?', ar: 'هل أسعار الموقع نهائية؟' }, answer: { en: 'Any price or quotation should be confirmed by the INAYA team before final booking.', ar: 'يجب تأكيد أي سعر أو عرض من فريق عناية قبل الحجز النهائي.' } },
      { question: { en: 'Does a website update change my existing agreement?', ar: 'هل يغير تحديث الموقع اتفاقي القائم؟' }, answer: { en: 'Do not treat a website update as confirmation that your existing agreement has changed. Keep the terms agreed for your service and discuss any proposed change in writing, alongside applicable law.', ar: 'لا تعتبر تحديث الموقع تأكيداً لتغيير اتفاقك القائم. احتفظ بالشروط المتفق عليها لخدمتك وناقش أي تعديل مقترح كتابةً مع مراعاة القانون المنطبق.' } },
      { question: { en: 'What happens if I provide incorrect details?', ar: 'ماذا يحدث إذا قدمت تفاصيل غير صحيحة؟' }, answer: { en: 'Incorrect details can delay the process or affect availability, pricing or service suitability.', ar: 'المعلومات غير الصحيحة قد تؤخر الإجراء أو تؤثر على التوفر أو السعر أو ملاءمة الخدمة.' } }
    ],
    ctaTitle: { en: 'Need to clarify terms before booking?', ar: 'هل تحتاج توضيح الشروط قبل الحجز؟' },
    ctaText: { en: 'Contact INAYA before confirmation so the team can explain the relevant service terms.', ar: 'تواصل مع عناية قبل التأكيد حتى يشرح الفريق شروط الخدمة المناسبة.' },
    links: [{ label: { en: 'Refund and replacement conditions', ar: 'شروط الاسترداد والاستبدال' }, route: 'refund-policy' }, { label: { en: 'Support and complaint channels', ar: 'وسائل الدعم والشكوى' }, route: 'support-process' }],
    sources: [{ label: { en: 'UAE Government: domestic-worker contracts and responsibilities', ar: 'حكومة الإمارات: عقود العمالة المساعدة والمسؤوليات' }, url: { en: 'https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/domestic-helpers', ar: 'https://u.ae/ar/information-and-services/jobs/employment-in-the-private-sector/domestic-helpers' } }]
  },
  {
    slug: 'refund-policy',
    path: 'refund-policy',
    badge: { en: 'Refund & Replacement', ar: 'الاسترداد والاستبدال' },
    title: { en: 'Refund & Replacement Policy for INAYA Services', ar: 'سياسة الاسترداد والاستبدال لخدمات عناية' },
    metaTitle: { en: 'Refund & Replacement Policy | INAYA Domestic Workers', ar: 'سياسة الاسترداد والاستبدال | عناية للعمالة المنزلية' },
    metaDescription: { en: 'Read INAYA refund and replacement policy for domestic worker services, booking changes, eligibility, review process, support requests and service agreement terms.', ar: 'اقرأ سياسة عناية للاسترداد والاستبدال لخدمات العمالة المنزلية وتغييرات الحجز والأهلية وعملية المراجعة وطلبات الدعم وشروط الاتفاق.' },
    lead: packageSections.cancellation.body,
    updated: { en: 'Last updated: 2026', ar: 'آخر تحديث: 2026' },
    highlights: { en: ['Case-by-case review', 'Terms depend on service agreement', 'Clear request details required', 'Replacement may be offered where applicable'], ar: ['مراجعة حسب كل حالة', 'الشروط تعتمد على اتفاق الخدمة', 'تفاصيل الطلب الواضحة مطلوبة', 'قد يتم توفير الاستبدال عند الانطباق'] },
    sections: [packageSections.cancellation, packageSections.replacement, packageSections.payments, packageSections.followUp],
    faqs: [
  {
    "question": {
      "en": "What happens to an unused monthly service payment?",
      "ar": "ماذا يحدث لدفعة الخدمة الشهرية غير المستخدمة؟"
    },
    "answer": {
      "en": "Before service commencement, INAYA returns the unused monthly service payment. After commencement, the unused prepaid service period following effective cancellation is refunded on a clear pro-rata basis. The calculation identifies the prepaid amount, service period, effective cancellation date and unused period.",
      "ar": "قبل بدء الخدمة، تعيد عناية دفعة الخدمة الشهرية غير المستخدمة. وبعد البدء، ترد قيمة الفترة المدفوعة مقدماً وغير المستخدمة بعد سريان الإلغاء، على أساس تناسبي واضح. يبين الحساب المبلغ المدفوع وفترة الخدمة وتاريخ سريان الإلغاء والفترة غير المستخدمة."
    }
  },
  {
    "question": {
      "en": "Can included costs become refund deductions?",
      "ar": "هل تصبح التكاليف المشمولة خصومات عند الاسترداد؟"
    },
    "answer": {
      "en": "No undisclosed cancellation charge is imposed and already-included monthly costs are not reintroduced as unexpected deductions. The unused-period calculation and relevant dates are explained in writing.",
      "ar": "لا تفرض رسوم إلغاء غير مفصح عنها ولا تعاد التكاليف الشهرية المشمولة كخصومات غير متوقعة. يوضح حساب الفترة غير المستخدمة والتواريخ ذات الصلة كتابةً."
    }
  },
  {
    "question": {
      "en": "How do I raise a refund or replacement request?",
      "ar": "كيف أقدم طلب استرداد أو استبدال؟"
    },
    "answer": {
      "en": "Contact the office, WhatsApp or info@inayadomestic.ae with the agreement, paid period, relevant dates and concern. Keep written communications and use the published support and official escalation channels.",
      "ar": "تواصل مع المكتب أو واتساب أو info@inayadomestic.ae وشارك الاتفاق والفترة المدفوعة والتواريخ ذات الصلة والملاحظة. احتفظ بالمراسلات المكتوبة واستخدم قنوات الدعم والتصعيد الرسمي المنشورة."
    }
  }
],
    ctaTitle: { en: 'Need support with a refund or replacement request?', ar: 'هل تحتاج دعماً في طلب استرداد أو استبدال؟' },
    ctaText: { en: 'Share your booking details and concern so INAYA can review the applicable next step.', ar: 'شارك تفاصيل الحجز والملاحظة حتى تراجع عناية الخطوة المناسبة.' }
  },
  {
    slug: 'reviews',
    path: 'reviews',
    badge: { en: 'Client Reviews', ar: 'آراء العملاء' },
    title: { en: 'Google Reviews & Client Feedback for INAYA Domestic Workers', ar: 'آراء جوجل وتجارب العملاء مع عناية للعمالة المنزلية' },
    metaTitle: { en: 'Google Reviews & Client Feedback | INAYA Domestic Workers', ar: 'آراء جوجل وتجارب العملاء | عناية للعمالة المنزلية' },
    metaDescription: { en: 'Read how client feedback helps INAYA improve maid services, domestic worker recruitment, communication, follow-up and family support in the UAE.', ar: 'اقرأ كيف تساعد آراء العملاء عناية على تحسين خدمات الخادمات والتوظيف والتواصل والمتابعة ودعم الأسر في الإمارات.' },
    lead: { en: 'Client feedback helps families understand what matters most: clear communication, careful follow-up, respectful support and reliable service guidance.', ar: 'تساعد آراء العملاء الأسر على فهم الأهم: التواصل الواضح والمتابعة الدقيقة والدعم المحترم وإرشاد الخدمة الموثوق.' },
    highlights: { en: ['Google Business Profile review link', 'Feedback used to improve follow-up', 'Service clarity matters before booking', 'Families can share real experiences'], ar: ['رابط تقييم ملف جوجل التجاري', 'استخدام الملاحظات لتحسين المتابعة', 'وضوح الخدمة مهم قبل الحجز', 'يمكن للأسر مشاركة تجاربها الحقيقية'] },
    sections: [
      {
        title: { en: 'What client feedback usually reflects', ar: 'ماذا تعكس آراء العملاء عادة' },
        body: { en: 'Domestic worker service feedback is not only about the worker. It often reflects communication, response speed, clarity, documentation, follow-up and how well expectations were explained.', ar: 'آراء خدمات العمالة المنزلية لا تتعلق بالعاملة فقط. غالباً ما تعكس التواصل وسرعة الرد والوضوح والمستندات والمتابعة ومدى شرح التوقعات.' },
        points: { en: ['Response speed and WhatsApp communication', 'Clarity of service options', 'Follow-up before and after booking', 'Respectful support from the team'], ar: ['سرعة الرد والتواصل عبر واتساب', 'وضوح خيارات الخدمة', 'المتابعة قبل وبعد الحجز', 'الدعم المحترم من الفريق'] }
      },
      {
        title: { en: 'How INAYA uses reviews', ar: 'كيف تستخدم عناية الآراء' },
        body: { en: 'Feedback helps the INAYA team improve service explanations, profile matching, document guidance and customer support for future families.', ar: 'تساعد الملاحظات فريق عناية على تحسين شرح الخدمات ومطابقة الملفات وإرشاد المستندات ودعم العملاء للأسر القادمة.' },
        points: { en: ['Improve customer communication', 'Identify repeated concerns', 'Strengthen follow-up process', 'Refine service guidance pages'], ar: ['تحسين التواصل مع العملاء', 'تحديد الملاحظات المتكررة', 'تقوية عملية المتابعة', 'تحسين صفحات إرشاد الخدمة'] }
      },
      {
        title: { en: 'How to leave a Google review', ar: 'كيفية ترك تقييم على جوجل' },
        body: { en: 'Families can share their experience through the official Google review link. Honest and specific feedback helps other families make better decisions.', ar: 'يمكن للأسر مشاركة تجربتها من خلال رابط تقييم جوجل الرسمي. الملاحظات الصادقة والمحددة تساعد الأسر الأخرى على اتخاذ قرار أفضل.' },
        points: { en: ['Mention the service type', 'Explain what was helpful', 'Share communication experience', 'Keep personal details private'], ar: ['اذكر نوع الخدمة', 'اشرح ما كان مفيداً', 'شارك تجربة التواصل', 'حافظ على خصوصية التفاصيل الشخصية'] }
      },
      {
        title: { en: 'Review transparency', ar: 'شفافية الآراء' },
        body: { en: 'INAYA encourages honest feedback. Reviews should reflect real customer experiences and should not include private information, sensitive documents or personal details about workers or families.', ar: 'تشجع عناية الآراء الصادقة. يجب أن تعكس التقييمات تجارب حقيقية وألا تتضمن معلومات خاصة أو مستندات حساسة أو تفاصيل شخصية عن العاملات أو الأسر.' },
        points: { en: ['Real experiences are more useful', 'Private details should not be posted', 'Concerns can also be raised directly', 'Feedback helps improve service quality'], ar: ['التجارب الحقيقية أكثر فائدة', 'لا ينبغي نشر التفاصيل الخاصة', 'يمكن رفع الملاحظات مباشرة أيضاً', 'الملاحظات تساعد على تحسين جودة الخدمة'] }
      }
    ],
    faqs: [
      { question: { en: 'Can I leave a Google review for INAYA?', ar: 'هل يمكنني ترك تقييم جوجل لعناية؟' }, answer: { en: 'Yes. Customers can use the official Google review link to share their experience.', ar: 'نعم. يمكن للعملاء استخدام رابط تقييم جوجل الرسمي لمشاركة تجربتهم.' } },
      { question: { en: 'Should I include private details in a review?', ar: 'هل أضع تفاصيل خاصة في التقييم؟' }, answer: { en: 'No. Reviews should not include personal documents, private worker information or sensitive family details.', ar: 'لا. يجب ألا تتضمن التقييمات مستندات شخصية أو معلومات خاصة عن العاملة أو تفاصيل حساسة عن الأسرة.' } },
      { question: { en: 'Can I contact INAYA directly with a concern?', ar: 'هل يمكنني التواصل مع عناية مباشرة عند وجود ملاحظة؟' }, answer: { en: 'Yes. You can contact the team by phone, WhatsApp or email with service details.', ar: 'نعم. يمكنك التواصل مع الفريق عبر الهاتف أو واتساب أو البريد مع تفاصيل الخدمة.' } }
    ],
    ctaTitle: { en: 'Want to share your experience?', ar: 'هل تريد مشاركة تجربتك؟' },
    ctaText: { en: 'Contact INAYA or leave a Google review to help other families understand the service experience.', ar: 'تواصل مع عناية أو اترك تقييماً على جوجل لمساعدة الأسر الأخرى على فهم تجربة الخدمة.' }
  }
];

export function getTrustSupportPage(slug: string) {
  return trustSupportPages.find((page) => page.slug === slug);
}
