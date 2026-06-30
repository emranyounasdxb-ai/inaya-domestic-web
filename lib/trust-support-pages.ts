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
    sections: [
      {
        title: { en: 'Basic information to prepare', ar: 'المعلومات الأساسية التي يجب تجهيزها' },
        body: { en: 'Before INAYA can guide your request accurately, the team needs clear family and service details. These details help avoid delays and make the consultation more useful.', ar: 'قبل أن تتمكن عناية من إرشاد طلبك بدقة، يحتاج الفريق إلى تفاصيل واضحة عن الأسرة ونوع الخدمة. تساعد هذه التفاصيل على تقليل التأخير وجعل الاستشارة أكثر فائدة.' },
        points: { en: ['Full name and mobile number', 'Emirate and residential area', 'Required service type and preferred start date', 'Live-in, live-out, part-time or monthly requirement', 'Family size and main household duties'], ar: ['الاسم الكامل ورقم الهاتف', 'الإمارة والمنطقة السكنية', 'نوع الخدمة المطلوبة وتاريخ البدء المفضل', 'مقيمة أو غير مقيمة أو بدوام جزئي أو شهرية', 'عدد أفراد الأسرة والمهام المنزلية الأساسية'] }
      },
      {
        title: { en: 'Documents for maid visa or sponsorship guidance', ar: 'مستندات إرشاد تأشيرة الخادمة أو الكفالة' },
        body: { en: 'Maid visa and sponsorship-related requirements can vary by case, emirate and selected service path. INAYA will review your case before confirming the exact checklist.', ar: 'قد تختلف متطلبات تأشيرة الخادمة والكفالة حسب الحالة والإمارة ومسار الخدمة المختار. تراجع عناية حالتك قبل تأكيد القائمة الدقيقة.' },
        points: { en: ['Sponsor identity and contact details', 'Residence address and emirate', 'Current worker document status where applicable', 'Passport and visa-related details where applicable', 'Any previous service agreement or transfer information'], ar: ['بيانات هوية الكفيل ومعلومات التواصل', 'عنوان السكن والإمارة', 'حالة مستندات العاملة الحالية إن وجدت', 'تفاصيل الجواز والتأشيرة إن وجدت', 'أي اتفاق خدمة سابق أو معلومات نقل الكفالة'] }
      },
      {
        title: { en: 'Documents for recruitment and profile matching', ar: 'مستندات ومعلومات التوظيف ومطابقة الملفات' },
        body: { en: 'For recruitment or profile comparison, the most important step is to define the role clearly. Nationality preference can be shared, but the final match should depend on the individual profile.', ar: 'في التوظيف أو مقارنة الملفات، أهم خطوة هي تحديد الدور بوضوح. يمكن مشاركة تفضيل الجنسية، لكن المطابقة النهائية يجب أن تعتمد على الملف الفردي.' },
        points: { en: ['Preferred nationality or source country', 'Experience required in cleaning, cooking, childcare or care support', 'Language preference', 'Expected duties and working arrangement', 'Timing, accommodation and family routine notes'], ar: ['الجنسية أو دولة المصدر المفضلة', 'الخبرة المطلوبة في التنظيف أو الطبخ أو رعاية الأطفال أو الرعاية', 'تفضيل اللغة', 'المهام المتوقعة وترتيب العمل', 'ملاحظات التوقيت والإقامة وروتين الأسرة'] }
      },
      {
        title: { en: 'Important note about final requirements', ar: 'ملاحظة مهمة حول المتطلبات النهائية' },
        body: { en: 'This page is a preparation guide, not a final legal checklist. INAYA confirms the exact requirements after reviewing the service type, availability, profile, documents and current UAE process.', ar: 'هذه الصفحة دليل تجهيز وليست قائمة قانونية نهائية. تؤكد عناية المتطلبات الدقيقة بعد مراجعة نوع الخدمة والتوفر والملف والمستندات والإجراء الحالي في الإمارات.' },
        points: { en: ['Final checklist is confirmed before action', 'Government or third-party requirements may change', 'Incomplete details can delay the process', 'Families should keep original documents ready when needed'], ar: ['يتم تأكيد القائمة النهائية قبل أي إجراء', 'قد تتغير متطلبات الجهات الحكومية أو الخارجية', 'نقص التفاصيل قد يؤخر الإجراء', 'ينبغي إبقاء المستندات الأصلية جاهزة عند الحاجة'] }
      }
    ],
    faqs: [
      { question: { en: 'Do I need all documents before contacting INAYA?', ar: 'هل يجب تجهيز كل المستندات قبل التواصل مع عناية؟' }, answer: { en: 'No. You can contact INAYA first, and the team will explain which details are needed for your specific service.', ar: 'لا. يمكنك التواصل مع عناية أولاً، وسيشرح الفريق التفاصيل المطلوبة حسب نوع خدمتك.' } },
      { question: { en: 'Are requirements the same for every maid service?', ar: 'هل المتطلبات نفسها لكل خدمات الخادمات؟' }, answer: { en: 'No. Requirements differ between live-in maid, live-out maid, recruitment, visa assistance and sponsorship transfer.', ar: 'لا. تختلف المتطلبات بين الخادمة المقيمة وغير المقيمة والتوظيف ومساعدة التأشيرة ونقل الكفالة.' } },
      { question: { en: 'Can INAYA help me understand missing documents?', ar: 'هل تساعدني عناية في معرفة المستندات الناقصة؟' }, answer: { en: 'Yes. The team can review your situation and explain what information or documents may be needed next.', ar: 'نعم. يمكن للفريق مراجعة حالتك وشرح المعلومات أو المستندات التي قد تكون مطلوبة لاحقاً.' } }
    ],
    ctaTitle: { en: 'Need a document checklist for your case?', ar: 'هل تحتاج قائمة مستندات لحالتك؟' },
    ctaText: { en: 'Share your emirate, service type and current situation. INAYA will guide you clearly before the next step.', ar: 'شارك الإمارة ونوع الخدمة ووضعك الحالي، وستوضح لك عناية الخطوات قبل المتابعة.' }
  },
  {
    slug: 'why-choose-inaya',
    path: 'why-choose-inaya',
    badge: { en: 'Why INAYA', ar: 'لماذا عناية' },
    title: { en: 'Why Choose INAYA Domestic Workers in UAE', ar: 'لماذا تختار عناية للعمالة المنزلية في الإمارات' },
    metaTitle: { en: 'Why Choose INAYA Domestic Workers | Trusted Maid Agency UAE', ar: 'لماذا تختار عناية للعمالة المنزلية | شركة خادمات موثوقة في الإمارات' },
    metaDescription: { en: 'Learn why UAE families choose INAYA for maid services, nannies, cooks, caregivers, recruitment, source country guidance and maid visa support.', ar: 'تعرف لماذا تختار الأسر في الإمارات عناية لخدمات الخادمات والمربيات والطهاة والرعاية والتوظيف ودول المصدر وتأشيرة الخادمة.' },
    lead: { en: 'INAYA focuses on clear communication, profile-first matching, organized follow-up and family-safe domestic worker service guidance across the UAE.', ar: 'تركز عناية على التواصل الواضح ومطابقة الملفات أولاً والمتابعة المنظمة وإرشاد خدمات العمالة المنزلية الآمن للأسرة في الإمارات.' },
    highlights: { en: ['UAE family-focused consultation', 'Profile-first selection approach', 'Source country and service guidance', 'Clear follow-up before confirmation'], ar: ['استشارة موجهة للأسر في الإمارات', 'اختيار يعتمد على الملف الفردي', 'إرشاد دول المصدر والخدمات', 'متابعة واضحة قبل التأكيد'] },
    sections: [
      {
        title: { en: 'Family-first service guidance', ar: 'إرشاد خدمة يركز على الأسرة' },
        body: { en: 'INAYA starts by understanding the home, family routine, children, elderly care needs, cooking preferences, accommodation arrangement and preferred timing before recommending the next step.', ar: 'تبدأ عناية بفهم المنزل وروتين الأسرة والأطفال واحتياجات رعاية كبار السن وتفضيلات الطبخ وترتيب الإقامة والتوقيت قبل ترشيح الخطوة التالية.' },
        points: { en: ['Requirement review before recommendation', 'Service type explained clearly', 'Timing and duty expectations discussed', 'Support for villas, apartments and family homes'], ar: ['مراجعة الاحتياج قبل الترشيح', 'شرح نوع الخدمة بوضوح', 'مناقشة التوقيت والمهام المتوقعة', 'دعم للفلل والشقق والمنازل العائلية'] }
      },
      {
        title: { en: 'Profile-first domestic worker matching', ar: 'مطابقة العمالة المنزلية حسب الملف الفردي' },
        body: { en: 'Nationality can be useful as a preference, but INAYA encourages families to compare individual profiles by experience, documents, duties, communication and suitability.', ar: 'قد تكون الجنسية تفضيلاً مفيداً، لكن عناية تشجع الأسر على مقارنة الملفات الفردية حسب الخبرة والمستندات والمهام والتواصل والملاءمة.' },
        points: { en: ['Country preference can be discussed', 'Experience and duties reviewed individually', 'Communication and family fit considered', 'Documents and availability checked by case'], ar: ['يمكن مناقشة تفضيل دولة المصدر', 'مراجعة الخبرة والمهام بشكل فردي', 'مراعاة التواصل وملاءمة الأسرة', 'فحص المستندات والتوفر حسب الحالة'] }
      },
      {
        title: { en: 'Clear process and transparent follow-up', ar: 'إجراء واضح ومتابعة شفافة' },
        body: { en: 'Families need confidence before making a domestic worker decision. INAYA explains the service path, documents, availability, costs and next actions before confirmation.', ar: 'تحتاج الأسر إلى الثقة قبل اتخاذ قرار العمالة المنزلية. توضح عناية مسار الخدمة والمستندات والتوفر والتكاليف والخطوات التالية قبل التأكيد.' },
        points: { en: ['No unclear promises before review', 'Availability confirmed by service type', 'Important costs discussed before booking', 'Support through phone, WhatsApp and office consultation'], ar: ['لا وعود غير واضحة قبل المراجعة', 'تأكيد التوفر حسب نوع الخدمة', 'مناقشة التكاليف المهمة قبل الحجز', 'دعم عبر الهاتف وواتساب وزيارة المكتب'] }
      },
      {
        title: { en: 'Premium UAE household support', ar: 'دعم منزلي راق للأسر في الإمارات' },
        body: { en: 'INAYA is designed for UAE families that want organized, respectful and premium-feeling domestic worker support without confusion or rushed decisions.', ar: 'صممت عناية للأسر في الإمارات التي تريد دعماً منزلياً منظماً ومحترماً وراقياً دون ارتباك أو قرارات مستعجلة.' },
        points: { en: ['Maid, nanny, cook and caregiver options', 'Ajman office access and UAE-wide enquiries', 'English and Arabic service support', 'Practical guidance for long-term household needs'], ar: ['خيارات خادمة ومربية وطباخ ورعاية', 'مكتب في عجمان وطلبات في جميع الإمارات', 'دعم بالعربية والإنجليزية', 'إرشاد عملي للاحتياجات المنزلية طويلة المدى'] }
      }
    ],
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
    lead: { en: 'This policy explains how INAYA receives service enquiries, reviews requirements, confirms availability and guides families before booking domestic worker services.', ar: 'تشرح هذه السياسة كيف تستقبل عناية طلبات الخدمة وتراجع المتطلبات وتؤكد التوفر وترشد الأسر قبل حجز خدمات العمالة المنزلية.' },
    updated: { en: 'Last updated: 2026', ar: 'آخر تحديث: 2026' },
    highlights: { en: ['Availability confirmed by case', 'Service scope clarified before booking', 'Family details required for accurate guidance', 'Policies vary by selected service model'], ar: ['يتم تأكيد التوفر حسب الحالة', 'توضيح نطاق الخدمة قبل الحجز', 'تفاصيل الأسرة مطلوبة لإرشاد دقيق', 'السياسات تختلف حسب نموذج الخدمة المختار'] },
    sections: [
      {
        title: { en: 'Service enquiry and requirement review', ar: 'طلب الخدمة ومراجعة الاحتياج' },
        body: { en: 'When a family contacts INAYA, the team reviews the emirate, home type, service category, preferred timing, duties, accommodation needs and any special family requirements.', ar: 'عند تواصل الأسرة مع عناية، يراجع الفريق الإمارة ونوع المنزل وفئة الخدمة والتوقيت المفضل والمهام واحتياج الإقامة وأي متطلبات خاصة للأسرة.' },
        points: { en: ['Inquiry details must be accurate', 'Service type should be clearly selected', 'Family routine affects recommendations', 'Availability is not final until confirmed by the team'], ar: ['يجب أن تكون تفاصيل الطلب دقيقة', 'يجب تحديد نوع الخدمة بوضوح', 'روتين الأسرة يؤثر على الترشيحات', 'التوفر لا يكون نهائياً حتى يؤكده الفريق'] }
      },
      {
        title: { en: 'Booking and confirmation', ar: 'الحجز والتأكيد' },
        body: { en: 'No service is considered confirmed until INAYA clearly confirms the service details, timing, scope, cost and next step with the family.', ar: 'لا تعتبر الخدمة مؤكدة حتى تؤكد عناية بوضوح تفاصيل الخدمة والتوقيت والنطاق والتكلفة والخطوة التالية مع الأسرة.' },
        points: { en: ['Prices and timing are confirmed before booking', 'Service scope is explained before action', 'Urgent requests depend on availability', 'Changes should be communicated as early as possible'], ar: ['تأكيد الأسعار والتوقيت قبل الحجز', 'شرح نطاق الخدمة قبل أي إجراء', 'الطلبات العاجلة تعتمد على التوفر', 'يجب إبلاغ التغييرات في أقرب وقت ممكن'] }
      },
      {
        title: { en: 'Family responsibilities', ar: 'مسؤوليات الأسرة' },
        body: { en: 'Families should provide safe, respectful and clear working conditions according to the selected service model and UAE expectations.', ar: 'ينبغي على الأسر توفير ظروف عمل آمنة ومحترمة وواضحة حسب نموذج الخدمة المختار وتوقعات الإمارات.' },
        points: { en: ['Share correct home and duty details', 'Treat domestic workers respectfully', 'Provide agreed accommodation when applicable', 'Follow confirmed payment and document steps'], ar: ['مشاركة تفاصيل صحيحة عن المنزل والمهام', 'التعامل مع العمالة المنزلية باحترام', 'توفير الإقامة المتفق عليها عند الحاجة', 'اتباع خطوات الدفع والمستندات المؤكدة'] }
      },
      {
        title: { en: 'Follow-up and support', ar: 'المتابعة والدعم' },
        body: { en: 'INAYA provides follow-up based on the selected service path. The team can help clarify concerns, replacement policy, document steps or next actions where applicable.', ar: 'تقدم عناية المتابعة حسب مسار الخدمة المختار. يمكن للفريق توضيح الملاحظات وسياسة الاستبدال وخطوات المستندات أو الإجراءات التالية عند الحاجة.' },
        points: { en: ['Support requests should include clear details', 'Replacement or refund terms depend on agreement', 'Document delays may affect timing', 'Customer communication remains part of the service process'], ar: ['يجب أن تتضمن طلبات الدعم تفاصيل واضحة', 'شروط الاستبدال أو الاسترداد تعتمد على الاتفاق', 'تأخير المستندات قد يؤثر على التوقيت', 'تواصل العميل جزء من عملية الخدمة'] }
      }
    ],
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
    lead: { en: 'INAYA handles replacement requests by reviewing the concern, service agreement, timing, availability and family requirement before explaining the next step.', ar: 'تتعامل عناية مع طلبات الاستبدال من خلال مراجعة الملاحظة واتفاق الخدمة والتوقيت والتوفر واحتياج الأسرة قبل شرح الخطوة التالية.' },
    updated: { en: 'Last updated: 2026', ar: 'آخر تحديث: 2026' },
    highlights: { en: ['Case reviewed before decision', 'Replacement depends on service agreement', 'Availability must be confirmed', 'Clear feedback improves next match'], ar: ['مراجعة الحالة قبل القرار', 'الاستبدال يعتمد على اتفاق الخدمة', 'يجب تأكيد التوفر', 'الملاحظات الواضحة تحسن المطابقة التالية'] },
    sections: [
      {
        title: { en: 'How replacement requests are reviewed', ar: 'كيف تتم مراجعة طلبات الاستبدال' },
        body: { en: 'Replacement is not handled as a simple automatic swap. INAYA first reviews the reason, timeline, service type, agreement terms and whether the issue can be resolved through clarification.', ar: 'لا يتم التعامل مع الاستبدال كمجرد تبديل تلقائي. تراجع عناية أولاً السبب والوقت ونوع الخدمة وشروط الاتفاق وما إذا كان يمكن حل الملاحظة بالتوضيح.' },
        points: { en: ['Reason for request is documented', 'Service agreement is checked', 'Family duties and expectations are reviewed again', 'Suitable next options are explained'], ar: ['توثيق سبب الطلب', 'مراجعة اتفاق الخدمة', 'إعادة مراجعة مهام وتوقعات الأسرة', 'شرح الخيارات التالية المناسبة'] }
      },
      {
        title: { en: 'Eligibility and timing', ar: 'الأهلية والتوقيت' },
        body: { en: 'Replacement eligibility depends on the selected package, service type, timing of the request, documents, availability and the details agreed before confirmation.', ar: 'تعتمد أهلية الاستبدال على الباقة المختارة ونوع الخدمة وتوقيت الطلب والمستندات والتوفر والتفاصيل المتفق عليها قبل التأكيد.' },
        points: { en: ['Request should be raised as early as possible', 'Availability can affect replacement timing', 'Documents may affect process speed', 'Confirmed agreement terms remain the reference'], ar: ['يفضل رفع الطلب في أقرب وقت ممكن', 'التوفر قد يؤثر على توقيت الاستبدال', 'المستندات قد تؤثر على سرعة الإجراء', 'شروط الاتفاق المؤكد هي المرجع'] }
      },
      {
        title: { en: 'Information needed for a replacement request', ar: 'المعلومات المطلوبة لطلب الاستبدال' },
        body: { en: 'A clear explanation helps INAYA assess the concern and guide the family faster. Vague complaints can delay the review.', ar: 'الشرح الواضح يساعد عناية على تقييم الملاحظة وإرشاد الأسرة بسرعة أكبر. الملاحظات غير الواضحة قد تؤخر المراجعة.' },
        points: { en: ['Customer name and contact number', 'Service type and booking details', 'Reason for replacement request', 'Dates, duties and concern notes', 'Preferred replacement requirements'], ar: ['اسم العميل ورقم التواصل', 'نوع الخدمة وتفاصيل الحجز', 'سبب طلب الاستبدال', 'التواريخ والمهام والملاحظات', 'متطلبات الاستبدال المفضلة'] }
      },
      {
        title: { en: 'Improving the next match', ar: 'تحسين المطابقة التالية' },
        body: { en: 'When replacement is applicable, INAYA uses the family feedback to better clarify duties, communication, routine and expectations for the next option.', ar: 'عندما يكون الاستبدال منطبقاً، تستخدم عناية ملاحظات الأسرة لتوضيح المهام والتواصل والروتين والتوقعات بشكل أفضل للخيار التالي.' },
        points: { en: ['Duties are clarified again', 'Profile requirements are adjusted where possible', 'Communication preferences are discussed', 'Follow-up remains important after replacement'], ar: ['توضيح المهام مرة أخرى', 'تعديل متطلبات الملف حيثما أمكن', 'مناقشة تفضيلات التواصل', 'المتابعة تبقى مهمة بعد الاستبدال'] }
      }
    ],
    faqs: [
      { question: { en: 'Is maid replacement always guaranteed?', ar: 'هل استبدال الخادمة مضمون دائماً؟' }, answer: { en: 'No. Replacement depends on service agreement terms, eligibility, availability and case review.', ar: 'لا. يعتمد الاستبدال على شروط اتفاق الخدمة والأهلية والتوفر ومراجعة الحالة.' } },
      { question: { en: 'How fast can a replacement happen?', ar: 'كم يستغرق الاستبدال؟' }, answer: { en: 'Timing depends on availability, documents, selected service type and the details of the request.', ar: 'يعتمد التوقيت على التوفر والمستندات ونوع الخدمة المختار وتفاصيل الطلب.' } },
      { question: { en: 'Can I change requirements during replacement?', ar: 'هل يمكن تغيير المتطلبات أثناء الاستبدال؟' }, answer: { en: 'You can discuss updated requirements, and INAYA will explain what is possible based on availability and agreement terms.', ar: 'يمكنك مناقشة المتطلبات المحدثة، وستوضح عناية ما يمكن تنفيذه حسب التوفر وشروط الاتفاق.' } }
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
        body: { en: 'INAYA may collect information you provide through website forms, WhatsApp, phone calls, email, booking requests or office consultation.', ar: 'قد تجمع عناية المعلومات التي تقدمها عبر نماذج الموقع أو واتساب أو المكالمات أو البريد الإلكتروني أو طلبات الحجز أو زيارة المكتب.' },
        points: { en: ['Name, phone number and email address', 'Emirate, area and preferred contact method', 'Service type and household requirements', 'Documents or case details shared voluntarily', 'Messages related to support, replacement or booking'], ar: ['الاسم ورقم الهاتف والبريد الإلكتروني', 'الإمارة والمنطقة وطريقة التواصل المفضلة', 'نوع الخدمة واحتياجات المنزل', 'المستندات أو تفاصيل الحالة التي تشاركها طوعاً', 'رسائل الدعم أو الاستبدال أو الحجز'] }
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
      { question: { en: 'Can I contact INAYA about privacy?', ar: 'هل يمكنني التواصل مع عناية بخصوص الخصوصية؟' }, answer: { en: 'Yes. Contact info@inayadomestic.ae with your question or request.', ar: 'نعم. تواصل عبر info@inayadomestic.ae مع سؤالك أو طلبك.' } }
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
    lead: { en: 'These terms explain how customers use the INAYA website and request domestic worker services, consultations, recruitment support and maid visa guidance.', ar: 'توضح هذه الشروط كيفية استخدام العملاء لموقع عناية وطلب خدمات العمالة المنزلية والاستشارات ودعم التوظيف وإرشاد تأشيرة الخادمة.' },
    updated: { en: 'Last updated: 2026', ar: 'آخر تحديث: 2026' },
    highlights: { en: ['Website information is guidance', 'Services confirmed by INAYA team', 'Customer details must be accurate', 'Terms may vary by service agreement'], ar: ['معلومات الموقع إرشادية', 'يتم تأكيد الخدمات من فريق عناية', 'يجب أن تكون بيانات العميل دقيقة', 'قد تختلف الشروط حسب اتفاق الخدمة'] },
    sections: [
      {
        title: { en: 'Use of website information', ar: 'استخدام معلومات الموقع' },
        body: { en: 'Website content is provided for general service guidance. Final service details, availability, prices, documents and timings are confirmed by the INAYA team.', ar: 'يتم تقديم محتوى الموقع كإرشاد عام للخدمات. يتم تأكيد تفاصيل الخدمة النهائية والتوفر والأسعار والمستندات والتوقيت من فريق عناية.' },
        points: { en: ['Information may be updated', 'Availability is not guaranteed by page content alone', 'Final confirmation happens through the team', 'Customers should ask questions before booking'], ar: ['قد يتم تحديث المعلومات', 'التوفر لا يضمن بمجرد قراءة الصفحة', 'التأكيد النهائي يتم عبر الفريق', 'ينبغي للعميل طرح الأسئلة قبل الحجز'] }
      },
      {
        title: { en: 'Submitting service requests', ar: 'إرسال طلبات الخدمة' },
        body: { en: 'Customers should provide correct information when submitting forms, WhatsApp messages or booking requests. Incorrect information can delay or affect the service process.', ar: 'يجب على العملاء تقديم معلومات صحيحة عند إرسال النماذج أو رسائل واتساب أو طلبات الحجز. المعلومات غير الصحيحة قد تؤخر أو تؤثر على إجراء الخدمة.' },
        points: { en: ['Provide correct name and contact number', 'Share accurate area and emirate', 'Explain service type clearly', 'Mention special household requirements early'], ar: ['تقديم الاسم ورقم التواصل بشكل صحيح', 'مشاركة المنطقة والإمارة بدقة', 'شرح نوع الخدمة بوضوح', 'ذكر المتطلبات المنزلية الخاصة مبكراً'] }
      },
      {
        title: { en: 'Prices, payments and confirmation', ar: 'الأسعار والمدفوعات والتأكيد' },
        body: { en: 'Any prices, quotations, payments, deposits or government-related costs are explained according to the selected service and confirmed before final action where applicable.', ar: 'يتم شرح أي أسعار أو عروض أو مدفوعات أو دفعات مقدمة أو تكاليف حكومية حسب الخدمة المختارة وتأكيدها قبل الإجراء النهائي عند الحاجة.' },
        points: { en: ['Prices can vary by service type and case', 'Official fees may be separate', 'Payment terms should be confirmed before proceeding', 'Receipts or confirmations should be kept'], ar: ['قد تختلف الأسعار حسب نوع الخدمة والحالة', 'قد تكون الرسوم الرسمية منفصلة', 'يجب تأكيد شروط الدفع قبل المتابعة', 'ينبغي الاحتفاظ بالإيصالات أو التأكيدات'] }
      },
      {
        title: { en: 'Changes, cancellation and support', ar: 'التغييرات والإلغاء والدعم' },
        body: { en: 'Changes, cancellations, replacement requests and support issues are reviewed according to the confirmed service agreement, timing, availability and work already completed.', ar: 'تتم مراجعة التغييرات والإلغاء وطلبات الاستبدال وملاحظات الدعم حسب اتفاق الخدمة المؤكد والتوقيت والتوفر والعمل الذي تم إنجازه.' },
        points: { en: ['Raise changes early', 'Replacement and refund terms vary by agreement', 'Support requests should include clear details', 'INAYA may refuse unsuitable or unlawful requests'], ar: ['رفع التغييرات مبكراً', 'شروط الاستبدال والاسترداد تختلف حسب الاتفاق', 'يجب أن تتضمن طلبات الدعم تفاصيل واضحة', 'قد ترفض عناية الطلبات غير المناسبة أو غير النظامية'] }
      }
    ],
    faqs: [
      { question: { en: 'Are website prices final?', ar: 'هل أسعار الموقع نهائية؟' }, answer: { en: 'Any price or quotation should be confirmed by the INAYA team before final booking.', ar: 'يجب تأكيد أي سعر أو عرض من فريق عناية قبل الحجز النهائي.' } },
      { question: { en: 'Can INAYA change service terms?', ar: 'هل يمكن لعناية تغيير شروط الخدمة؟' }, answer: { en: 'Terms may be updated when needed. The applicable terms are explained before confirmation where relevant.', ar: 'قد يتم تحديث الشروط عند الحاجة. يتم شرح الشروط المطبقة قبل التأكيد عند الحاجة.' } },
      { question: { en: 'What happens if I provide incorrect details?', ar: 'ماذا يحدث إذا قدمت تفاصيل غير صحيحة؟' }, answer: { en: 'Incorrect details can delay the process or affect availability, pricing or service suitability.', ar: 'المعلومات غير الصحيحة قد تؤخر الإجراء أو تؤثر على التوفر أو السعر أو ملاءمة الخدمة.' } }
    ],
    ctaTitle: { en: 'Need to clarify terms before booking?', ar: 'هل تحتاج توضيح الشروط قبل الحجز؟' },
    ctaText: { en: 'Contact INAYA before confirmation so the team can explain the relevant service terms.', ar: 'تواصل مع عناية قبل التأكيد حتى يشرح الفريق شروط الخدمة المناسبة.' }
  },
  {
    slug: 'refund-policy',
    path: 'refund-policy',
    badge: { en: 'Refund & Replacement', ar: 'الاسترداد والاستبدال' },
    title: { en: 'Refund & Replacement Policy for INAYA Services', ar: 'سياسة الاسترداد والاستبدال لخدمات عناية' },
    metaTitle: { en: 'Refund & Replacement Policy | INAYA Domestic Workers', ar: 'سياسة الاسترداد والاستبدال | عناية للعمالة المنزلية' },
    metaDescription: { en: 'Read INAYA refund and replacement policy for domestic worker services, booking changes, eligibility, review process, support requests and service agreement terms.', ar: 'اقرأ سياسة عناية للاسترداد والاستبدال لخدمات العمالة المنزلية وتغييرات الحجز والأهلية وعملية المراجعة وطلبات الدعم وشروط الاتفاق.' },
    lead: { en: 'Refund and replacement requests are reviewed according to the selected service, agreement terms, timing, availability, documents and the stage of the request.', ar: 'تتم مراجعة طلبات الاسترداد والاستبدال حسب الخدمة المختارة وشروط الاتفاق والتوقيت والتوفر والمستندات ومرحلة الطلب.' },
    updated: { en: 'Last updated: 2026', ar: 'آخر تحديث: 2026' },
    highlights: { en: ['Case-by-case review', 'Terms depend on service agreement', 'Clear request details required', 'Replacement may be offered where applicable'], ar: ['مراجعة حسب كل حالة', 'الشروط تعتمد على اتفاق الخدمة', 'تفاصيل الطلب الواضحة مطلوبة', 'قد يتم توفير الاستبدال عند الانطباق'] },
    sections: [
      {
        title: { en: 'Refund review approach', ar: 'طريقة مراجعة الاسترداد' },
        body: { en: 'Refund requests are reviewed based on the agreement, work already completed, official or third-party costs, documents, service stage and the reason for the request.', ar: 'تتم مراجعة طلبات الاسترداد حسب الاتفاق والعمل الذي تم إنجازه والتكاليف الرسمية أو الخارجية والمستندات ومرحلة الخدمة وسبب الطلب.' },
        points: { en: ['Refunds are not automatic', 'Official or third-party fees may be non-refundable', 'Completed work affects eligibility', 'Written confirmation may be required'], ar: ['الاسترداد ليس تلقائياً', 'قد تكون الرسوم الرسمية أو الخارجية غير قابلة للاسترداد', 'العمل المنجز يؤثر على الأهلية', 'قد تكون هناك حاجة إلى تأكيد كتابي'] }
      },
      {
        title: { en: 'Replacement as a support option', ar: 'الاستبدال كخيار دعم' },
        body: { en: 'Where applicable, replacement may be discussed instead of refund. The replacement process depends on package terms, availability and the nature of the issue.', ar: 'عند الانطباق، قد تتم مناقشة الاستبدال بدلاً من الاسترداد. تعتمد عملية الاستبدال على شروط الباقة والتوفر وطبيعة الملاحظة.' },
        points: { en: ['Replacement depends on agreement terms', 'Availability affects timing', 'Feedback helps improve next match', 'New requirements may change options'], ar: ['الاستبدال يعتمد على شروط الاتفاق', 'التوفر يؤثر على التوقيت', 'الملاحظات تساعد على تحسين المطابقة التالية', 'المتطلبات الجديدة قد تغير الخيارات'] }
      },
      {
        title: { en: 'How to submit a request', ar: 'كيفية تقديم الطلب' },
        body: { en: 'Customers should contact INAYA support with clear details and relevant evidence where available. The team will review and explain the next step.', ar: 'يجب على العملاء التواصل مع دعم عناية بتفاصيل واضحة وأي إثباتات متاحة. سيراجع الفريق الطلب ويوضح الخطوة التالية.' },
        points: { en: ['Customer name and contact number', 'Service type and booking information', 'Reason for refund or replacement', 'Dates and communication history if needed', 'Any supporting details or documents'], ar: ['اسم العميل ورقم التواصل', 'نوع الخدمة ومعلومات الحجز', 'سبب الاسترداد أو الاستبدال', 'التواريخ وسجل التواصل عند الحاجة', 'أي تفاصيل أو مستندات داعمة'] }
      },
      {
        title: { en: 'Final decision and communication', ar: 'القرار النهائي والتواصل' },
        body: { en: 'INAYA communicates the outcome after reviewing the agreement, request details, availability and applicable terms. The goal is to provide a clear, fair and documented response.', ar: 'تبلغ عناية النتيجة بعد مراجعة الاتفاق وتفاصيل الطلب والتوفر والشروط المطبقة. الهدف هو تقديم رد واضح وعادل وموثق.' },
        points: { en: ['Outcome explained clearly', 'Applicable next steps shared', 'Timeline depends on case complexity', 'Customers should keep confirmations and receipts'], ar: ['شرح النتيجة بوضوح', 'مشاركة الخطوات التالية المطبقة', 'التوقيت يعتمد على تعقيد الحالة', 'ينبغي الاحتفاظ بالتأكيدات والإيصالات'] }
      }
    ],
    faqs: [
      { question: { en: 'Are refunds guaranteed?', ar: 'هل الاسترداد مضمون؟' }, answer: { en: 'No. Refunds are reviewed according to the agreement, service stage and applicable costs.', ar: 'لا. تتم مراجعة الاسترداد حسب الاتفاق ومرحلة الخدمة والتكاليف المطبقة.' } },
      { question: { en: 'Can I request replacement instead of refund?', ar: 'هل يمكن طلب الاستبدال بدلاً من الاسترداد؟' }, answer: { en: 'Where applicable, replacement can be discussed based on policy, eligibility and availability.', ar: 'عند الانطباق، يمكن مناقشة الاستبدال حسب السياسة والأهلية والتوفر.' } },
      { question: { en: 'How do I raise a refund request?', ar: 'كيف أرفع طلب استرداد؟' }, answer: { en: 'Contact INAYA with your booking details, service type and reason for the request.', ar: 'تواصل مع عناية بتفاصيل الحجز ونوع الخدمة وسبب الطلب.' } }
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
