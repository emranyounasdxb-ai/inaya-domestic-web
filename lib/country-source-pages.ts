export type Lang = 'en' | 'ar';

type Localized = Record<Lang, string>;
type LocalizedList = Record<Lang, string[]>;

type CountryRole = {
  slug: string;
  title: Localized;
};

type CountryFaq = {
  question: Localized;
  answer: Localized;
};

export type CountrySourceSeoPage = {
  slug: string;
  code: string;
  country: Localized;
  workerLabel: Localized;
  metaTitle: Localized;
  metaDescription: Localized;
  heroTitle: Localized;
  lead: Localized;
  intro: Localized;
  strengths: LocalizedList;
  bestFor: LocalizedList;
  roles: CountryRole[];
  faqs: CountryFaq[];
};

const commonRoles: CountryRole[] = [
  { slug: 'live-in-maid', title: { en: 'Live-in Maid', ar: 'خادمة مقيمة' } },
  { slug: 'live-out-maid', title: { en: 'Live-out Maid', ar: 'خادمة غير مقيمة' } },
  { slug: 'nanny', title: { en: 'Nanny', ar: 'مربية أطفال' } },
  { slug: 'home-cooking', title: { en: 'Home Cooking', ar: 'طبخ منزلي' } },
  { slug: 'elder-care', title: { en: 'Elder Care', ar: 'رعاية كبار السن' } },
  { slug: 'maid-visa', title: { en: 'Maid Visa Support', ar: 'دعم تأشيرة الخادمة' } }
];

export const countrySourcePages: CountrySourceSeoPage[] = [
  {
    slug: 'philippines-maid-uae',
    code: 'ph',
    country: { en: 'Philippines', ar: 'الفلبين' },
    workerLabel: { en: 'Filipino maid', ar: 'خادمة فلبينية' },
    metaTitle: { en: 'Filipino Maid in UAE | Philippines Domestic Workers | INAYA', ar: 'خادمة فلبينية في الإمارات | عمالة منزلية من الفلبين | عناية' },
    metaDescription: { en: 'Looking for a Filipino maid in UAE? INAYA helps families compare Philippines domestic worker profiles for housekeeping, nanny care, cooking support and visa guidance.', ar: 'تبحث عن خادمة فلبينية في الإمارات؟ تساعد عناية الأسر على مقارنة ملفات العمالة المنزلية من الفلبين للتنظيف ورعاية الأطفال والطبخ والتأشيرة.' },
    heroTitle: { en: 'Filipino Maid & Domestic Worker Profiles in UAE', ar: 'خادمات وعمالة منزلية من الفلبين في الإمارات' },
    lead: { en: 'INAYA helps UAE families review Filipino maid and domestic worker options with clear profile guidance, document support and family-first matching.', ar: 'تساعد عناية الأسر في الإمارات على مراجعة خيارات الخادمات والعمالة المنزلية من الفلبين من خلال إرشاد واضح للملفات والمستندات ومطابقة احتياج الأسرة.' },
    intro: { en: 'Many families search for Filipino maids in UAE because of communication, childcare exposure and household experience. The right decision should still depend on the individual profile, duties, documents, availability and family routine.', ar: 'تبحث كثير من الأسر عن خادمات فلبينيات في الإمارات بسبب التواصل وخبرة رعاية الأطفال والعمل المنزلي. ومع ذلك يجب أن يعتمد الاختيار الصحيح على الملف الفردي والمهام والمستندات والتوفر وروتين الأسرة.' },
    strengths: { en: ['English communication is often a preference for families', 'Commonly requested for nanny and childcare support', 'Suitable for structured villa and apartment routines', 'Can be reviewed for housekeeping, cooking support and family care'], ar: ['التواصل باللغة الإنجليزية غالباً ما يكون تفضيلاً لدى الأسر', 'مطلوبة كثيراً لخدمات المربية ورعاية الأطفال', 'مناسبة لروتين الفلل والشقق المنظم', 'يمكن مراجعتها للتنظيف والطبخ ودعم الأسرة'] },
    bestFor: { en: ['Families with children', 'Working parents', 'Homes needing communication clarity', 'Households comparing nanny and maid duties'], ar: ['الأسر التي لديها أطفال', 'الوالدان العاملان', 'المنازل التي تحتاج وضوحاً في التواصل', 'الأسر التي تقارن بين مهام المربية والخادمة'] },
    roles: commonRoles,
    faqs: [
      { question: { en: 'Can I request a Filipino maid in UAE?', ar: 'هل يمكن طلب خادمة فلبينية في الإمارات؟' }, answer: { en: 'Yes, you can share a Philippines preference and INAYA will explain current availability and suitable profile options.', ar: 'نعم، يمكنك مشاركة تفضيل الفلبين وستوضح عناية التوفر الحالي والملفات المناسبة.' } },
      { question: { en: 'Are Filipino maids suitable for childcare?', ar: 'هل الخادمات الفلبينيات مناسبات لرعاية الأطفال؟' }, answer: { en: 'Some profiles may have childcare experience. INAYA reviews each profile individually before recommendation.', ar: 'قد تتوفر ملفات لديها خبرة في رعاية الأطفال. تراجع عناية كل ملف بشكل فردي قبل الترشيح.' } },
      { question: { en: 'Can INAYA help with documents and visa steps?', ar: 'هل تساعد عناية في المستندات وخطوات التأشيرة؟' }, answer: { en: 'Yes. Document and visa-related guidance can be discussed based on the selected service model.', ar: 'نعم، يمكن مناقشة إرشاد المستندات والتأشيرة حسب نموذج الخدمة المختار.' } }
    ]
  },
  {
    slug: 'sri-lankan-maid-uae',
    code: 'lk',
    country: { en: 'Sri Lanka', ar: 'سريلانكا' },
    workerLabel: { en: 'Sri Lankan maid', ar: 'خادمة سريلانكية' },
    metaTitle: { en: 'Sri Lankan Maid in UAE | Sri Lanka Domestic Workers | INAYA', ar: 'خادمة سريلانكية في الإمارات | عمالة منزلية من سريلانكا | عناية' },
    metaDescription: { en: 'Compare Sri Lankan maid profiles in UAE with INAYA for housekeeping, cooking support, childcare exposure, family routines and document guidance.', ar: 'قارن ملفات الخادمات السريلانكيات في الإمارات مع عناية للتنظيف والطبخ ورعاية الأطفال وروتين الأسرة وإرشاد المستندات.' },
    heroTitle: { en: 'Sri Lankan Maid & Domestic Worker Options in UAE', ar: 'خيارات الخادمات والعمالة المنزلية من سريلانكا في الإمارات' },
    lead: { en: 'INAYA guides families comparing Sri Lankan domestic worker profiles for daily household support, cooking routines, cleaning and family care.', ar: 'ترشد عناية الأسر التي تقارن ملفات العمالة المنزلية من سريلانكا للدعم المنزلي اليومي والطبخ والتنظيف ورعاية الأسرة.' },
    intro: { en: 'Sri Lankan maid profiles are often considered for experienced household routines, meal support and reliable cleaning. INAYA helps families review the individual profile instead of deciding by nationality alone.', ar: 'غالباً ما تُراجع ملفات الخادمات السريلانكيات للروتين المنزلي والطبخ والتنظيف الموثوق. تساعد عناية الأسرة على مراجعة الملف الفردي بدلاً من الاعتماد على الجنسية وحدها.' },
    strengths: { en: ['Often considered for housekeeping routines', 'Can be reviewed for meal preparation support', 'Suitable for families needing steady home assistance', 'Profile matching based on duties, documents and availability'], ar: ['تُراجع كثيراً لأعمال المنزل اليومية', 'يمكن مراجعتها لدعم إعداد الوجبات', 'مناسبة للأسر التي تحتاج مساعدة منزلية مستقرة', 'مطابقة الملفات حسب المهام والمستندات والتوفر'] },
    bestFor: { en: ['Families needing cooking support', 'Daily cleaning routines', 'Live-in or full-time home support', 'Homes needing calm service coordination'], ar: ['الأسر التي تحتاج دعماً في الطبخ', 'روتين تنظيف يومي', 'دعم منزلي مقيم أو بدوام كامل', 'منازل تحتاج تنسيق خدمة هادئ'] },
    roles: commonRoles,
    faqs: [
      { question: { en: 'Can I hire a Sri Lankan maid in UAE?', ar: 'هل يمكن توظيف خادمة سريلانكية في الإمارات؟' }, answer: { en: 'You can share a Sri Lanka preference and INAYA will check availability by profile, service type and documents.', ar: 'يمكنك مشاركة تفضيل سريلانكا وستراجع عناية التوفر حسب الملف ونوع الخدمة والمستندات.' } },
      { question: { en: 'Can Sri Lankan maids support cooking?', ar: 'هل يمكن للخادمات السريلانكيات دعم الطبخ؟' }, answer: { en: 'Some profiles may support cooking or meal preparation. The exact duties should be reviewed before confirmation.', ar: 'قد تدعم بعض الملفات الطبخ أو تحضير الوجبات. يجب مراجعة المهام بدقة قبل التأكيد.' } },
      { question: { en: 'Does INAYA compare profiles individually?', ar: 'هل تقارن عناية الملفات بشكل فردي؟' }, answer: { en: 'Yes. INAYA focuses on profile, experience, duties and family fit.', ar: 'نعم، تركز عناية على الملف والخبرة والمهام وملاءمة الأسرة.' } }
    ]
  },
  {
    slug: 'nepali-maid-uae',
    code: 'np',
    country: { en: 'Nepal', ar: 'نيبال' },
    workerLabel: { en: 'Nepali maid', ar: 'خادمة نيبالية' },
    metaTitle: { en: 'Nepali Maid in UAE | Nepal Domestic Workers | INAYA', ar: 'خادمة نيبالية في الإمارات | عمالة منزلية من نيبال | عناية' },
    metaDescription: { en: 'Looking for a Nepali maid in UAE? INAYA helps families review Nepal domestic worker profiles for cleaning, household duties, childcare exposure and family fit.', ar: 'تبحث عن خادمة نيبالية في الإمارات؟ تساعد عناية الأسر على مراجعة ملفات العمالة المنزلية من نيبال للتنظيف والمهام المنزلية ورعاية الأطفال وملاءمة الأسرة.' },
    heroTitle: { en: 'Nepali Maid & Domestic Worker Profiles in UAE', ar: 'خادمات وعمالة منزلية من نيبال في الإمارات' },
    lead: { en: 'INAYA supports families comparing Nepali maid profiles for cleaning routines, live-in support, household duties and practical home assistance.', ar: 'تدعم عناية الأسر التي تقارن ملفات الخادمات من نيبال للتنظيف والدعم المقيم والمهام المنزلية والمساعدة العملية.' },
    intro: { en: 'Nepali maid profiles may be suitable for families that need reliable housekeeping and day-to-day domestic support. INAYA helps review experience, documents, duties and communication before recommendation.', ar: 'قد تناسب ملفات الخادمات النيباليات الأسر التي تحتاج تنظيفاً موثوقاً ودعماً منزلياً يومياً. تساعد عناية في مراجعة الخبرة والمستندات والمهام والتواصل قبل الترشيح.' },
    strengths: { en: ['Often reviewed for cleaning and daily home duties', 'Can fit live-in and full-time support needs', 'Useful for families needing steady household help', 'Availability reviewed by documents and service model'], ar: ['تُراجع كثيراً للتنظيف والمهام المنزلية اليومية', 'قد تناسب الدعم المقيم أو الدوام الكامل', 'مفيدة للأسر التي تحتاج مساعدة منزلية مستقرة', 'يتم فحص التوفر حسب المستندات ونموذج الخدمة'] },
    bestFor: { en: ['Daily housekeeping', 'Villas and apartments', 'Full-time household routines', 'Families needing simple clear support'], ar: ['أعمال المنزل اليومية', 'الفلل والشقق', 'روتين منزلي بدوام كامل', 'الأسر التي تحتاج دعماً بسيطاً وواضحاً'] },
    roles: commonRoles,
    faqs: [
      { question: { en: 'Can INAYA provide Nepali maid options?', ar: 'هل توفر عناية خيارات خادمة نيبالية؟' }, answer: { en: 'INAYA can review current availability and explain suitable Nepal profile options where available.', ar: 'يمكن لعناية مراجعة التوفر الحالي وشرح خيارات ملفات نيبال المناسبة عند توفرها.' } },
      { question: { en: 'Are Nepali maids suitable for live-in support?', ar: 'هل الخادمات النيباليات مناسبات للدعم المقيم؟' }, answer: { en: 'Some profiles may be suitable for live-in support depending on experience, documents and family requirements.', ar: 'قد تناسب بعض الملفات الدعم المقيم حسب الخبرة والمستندات ومتطلبات الأسرة.' } },
      { question: { en: 'How do I compare profiles?', ar: 'كيف أقارن الملفات؟' }, answer: { en: 'Compare duties, experience, language, availability and document status before deciding.', ar: 'قارن المهام والخبرة واللغة والتوفر وحالة المستندات قبل القرار.' } }
    ]
  },
  {
    slug: 'indian-maid-uae',
    code: 'in',
    country: { en: 'India', ar: 'الهند' },
    workerLabel: { en: 'Indian maid', ar: 'خادمة هندية' },
    metaTitle: { en: 'Indian Maid in UAE | India Domestic Workers | INAYA', ar: 'خادمة هندية في الإمارات | عمالة منزلية من الهند | عناية' },
    metaDescription: { en: 'Compare Indian maid profiles in UAE with INAYA for cooking, cleaning, childcare support, home routines, recruitment and maid visa guidance.', ar: 'قارن ملفات الخادمات الهنديات في الإمارات مع عناية للطبخ والتنظيف ورعاية الأطفال وروتين المنزل والتوظيف وتأشيرة الخادمة.' },
    heroTitle: { en: 'Indian Maid & Domestic Worker Options in UAE', ar: 'خيارات الخادمات والعمالة المنزلية من الهند في الإمارات' },
    lead: { en: 'INAYA helps families compare Indian domestic worker profiles for home cooking, cleaning, family care routines and document guidance.', ar: 'تساعد عناية الأسر على مقارنة ملفات العمالة المنزلية من الهند للطبخ والتنظيف وروتين رعاية الأسرة وإرشاد المستندات.' },
    intro: { en: 'Indian maid profiles are often reviewed for cooking preferences, language familiarity, cleaning routines and household support. INAYA helps match the profile to the home requirement.', ar: 'غالباً ما تُراجع ملفات الخادمات الهنديات لتفضيلات الطبخ والألفة اللغوية وروتين التنظيف والدعم المنزلي. تساعد عناية على مطابقة الملف مع احتياج المنزل.' },
    strengths: { en: ['Can be reviewed for cooking and kitchen support', 'Useful for family routines and home care', 'Language and food preferences can be discussed', 'Document and process guidance available by case'], ar: ['يمكن مراجعتها للطبخ ودعم المطبخ', 'مفيدة لروتين الأسرة والعناية بالمنزل', 'يمكن مناقشة اللغة وتفضيلات الطعام', 'إرشاد المستندات والإجراءات متاح حسب الحالة'] },
    bestFor: { en: ['Families with specific cooking preferences', 'Housekeeping and meal routines', 'Live-in or full-time support', 'Homes needing cultural and language familiarity'], ar: ['الأسر ذات تفضيلات طبخ محددة', 'روتين التنظيف والوجبات', 'دعم مقيم أو بدوام كامل', 'منازل تحتاج ألفة ثقافية ولغوية'] },
    roles: commonRoles,
    faqs: [
      { question: { en: 'Can I request an Indian maid in UAE?', ar: 'هل يمكن طلب خادمة هندية في الإمارات؟' }, answer: { en: 'Yes, you can share an India preference and INAYA will explain profile availability and suitable service options.', ar: 'نعم، يمكنك مشاركة تفضيل الهند وستوضح عناية توفر الملفات وخيارات الخدمة المناسبة.' } },
      { question: { en: 'Can Indian maids support home cooking?', ar: 'هل يمكن للخادمات الهنديات دعم الطبخ المنزلي؟' }, answer: { en: 'Some profiles may support cooking. Cuisine and household preferences should be discussed before confirmation.', ar: 'قد تدعم بعض الملفات الطبخ. يجب مناقشة تفضيلات الطعام والمنزل قبل التأكيد.' } },
      { question: { en: 'Can INAYA help with visa or sponsorship guidance?', ar: 'هل تساعد عناية في إرشاد التأشيرة أو الكفالة؟' }, answer: { en: 'Yes, the team can explain document and process guidance depending on the selected service.', ar: 'نعم، يمكن للفريق شرح إرشاد المستندات والإجراءات حسب الخدمة المختارة.' } }
    ]
  },
  {
    slug: 'bangladeshi-maid-uae',
    code: 'bd',
    country: { en: 'Bangladesh', ar: 'بنغلاديش' },
    workerLabel: { en: 'Bangladeshi maid', ar: 'خادمة بنغلاديشية' },
    metaTitle: { en: 'Bangladeshi Maid in UAE | Bangladesh Domestic Workers | INAYA', ar: 'خادمة بنغلاديشية في الإمارات | عمالة منزلية من بنغلاديش | عناية' },
    metaDescription: { en: 'Looking for a Bangladeshi maid in UAE? INAYA helps review Bangladesh domestic worker profiles for cleaning, home duties, kitchen support and family routines.', ar: 'تبحث عن خادمة بنغلاديشية في الإمارات؟ تساعد عناية في مراجعة ملفات العمالة المنزلية من بنغلاديش للتنظيف والمهام المنزلية والمطبخ وروتين الأسرة.' },
    heroTitle: { en: 'Bangladeshi Maid & Domestic Worker Profiles in UAE', ar: 'خادمات وعمالة منزلية من بنغلاديش في الإمارات' },
    lead: { en: 'INAYA guides UAE families comparing Bangladeshi maid profiles for housekeeping, kitchen support, live-in roles and family duty planning.', ar: 'ترشد عناية الأسر في الإمارات التي تقارن ملفات الخادمات من بنغلاديش للتنظيف ودعم المطبخ والأدوار المقيمة وتخطيط مهام الأسرة.' },
    intro: { en: 'Bangladeshi maid profiles may be considered for practical household duties, cleaning routines and kitchen support. INAYA reviews each profile by experience, documents and family suitability.', ar: 'قد تُراجع ملفات الخادمات البنغلاديشيات للمهام المنزلية العملية وروتين التنظيف ودعم المطبخ. تراجع عناية كل ملف حسب الخبرة والمستندات وملاءمة الأسرة.' },
    strengths: { en: ['Practical household support', 'Cleaning and kitchen assistance', 'Can fit live-in or full-time routines', 'Profile review by duties and documents'], ar: ['دعم منزلي عملي', 'تنظيف ومساعدة في المطبخ', 'قد تناسب الروتين المقيم أو الدوام الكامل', 'مراجعة الملف حسب المهام والمستندات'] },
    bestFor: { en: ['Housekeeping routines', 'Kitchen helper support', 'Live-in domestic help', 'Families needing clear duty planning'], ar: ['روتين أعمال المنزل', 'دعم مساعد المطبخ', 'مساعدة منزلية مقيمة', 'الأسر التي تحتاج تخطيطاً واضحاً للمهام'] },
    roles: commonRoles,
    faqs: [
      { question: { en: 'Can INAYA provide Bangladeshi maid profiles?', ar: 'هل توفر عناية ملفات خادمات من بنغلاديش؟' }, answer: { en: 'Availability can be checked by service type, documents and family requirement.', ar: 'يمكن فحص التوفر حسب نوع الخدمة والمستندات واحتياج الأسرة.' } },
      { question: { en: 'Are Bangladeshi maids suitable for cleaning routines?', ar: 'هل الخادمات البنغلاديشيات مناسبات لروتين التنظيف؟' }, answer: { en: 'Some profiles may be suitable for daily cleaning and household support. Duties should be confirmed before booking.', ar: 'قد تناسب بعض الملفات التنظيف اليومي والدعم المنزلي. يجب تأكيد المهام قبل الحجز.' } },
      { question: { en: 'Can I discuss kitchen duties?', ar: 'هل يمكن مناقشة مهام المطبخ؟' }, answer: { en: 'Yes, kitchen and meal-related support can be discussed during requirement review.', ar: 'نعم، يمكن مناقشة دعم المطبخ والوجبات أثناء مراجعة الاحتياج.' } }
    ]
  },
  {
    slug: 'ethiopian-maid-uae',
    code: 'et',
    country: { en: 'Ethiopia', ar: 'إثيوبيا' },
    workerLabel: { en: 'Ethiopian maid', ar: 'خادمة إثيوبية' },
    metaTitle: { en: 'Ethiopian Maid in UAE | Ethiopia Domestic Workers | INAYA', ar: 'خادمة إثيوبية في الإمارات | عمالة منزلية من إثيوبيا | عناية' },
    metaDescription: { en: 'Compare Ethiopian maid profiles in UAE with INAYA for housekeeping, childcare exposure, home routines, recruitment and document guidance.', ar: 'قارن ملفات الخادمات الإثيوبيات في الإمارات مع عناية للتنظيف ورعاية الأطفال وروتين المنزل والتوظيف وإرشاد المستندات.' },
    heroTitle: { en: 'Ethiopian Maid & Domestic Worker Options in UAE', ar: 'خيارات الخادمات والعمالة المنزلية من إثيوبيا في الإمارات' },
    lead: { en: 'INAYA helps families review Ethiopian domestic worker profiles for home support, cleaning routines, childcare exposure and family fit.', ar: 'تساعد عناية الأسر على مراجعة ملفات العمالة المنزلية من إثيوبيا للدعم المنزلي والتنظيف وخبرة رعاية الأطفال وملاءمة الأسرة.' },
    intro: { en: 'Ethiopian maid profiles may be suitable for families seeking household support, cleaning and care-related duties. INAYA helps clarify expectations and review profile details before recommendation.', ar: 'قد تناسب ملفات الخادمات الإثيوبيات الأسر التي تبحث عن دعم منزلي وتنظيف ومهام رعاية. تساعد عناية في توضيح التوقعات ومراجعة تفاصيل الملف قبل الترشيح.' },
    strengths: { en: ['Housekeeping and home support options', 'Can be reviewed for childcare exposure', 'Suitable for live-in or scheduled roles where available', 'Profile matching based on household expectations'], ar: ['خيارات تنظيف ودعم منزلي', 'يمكن مراجعتها لخبرة رعاية الأطفال', 'قد تناسب الأدوار المقيمة أو المجدولة عند التوفر', 'مطابقة الملفات حسب توقعات المنزل'] },
    bestFor: { en: ['Families needing household help', 'Cleaning and daily support', 'Childcare exposure where available', 'Homes needing careful profile review'], ar: ['الأسر التي تحتاج مساعدة منزلية', 'التنظيف والدعم اليومي', 'خبرة رعاية الأطفال عند توفرها', 'منازل تحتاج مراجعة دقيقة للملفات'] },
    roles: commonRoles,
    faqs: [
      { question: { en: 'Can I request an Ethiopian maid?', ar: 'هل يمكن طلب خادمة إثيوبية؟' }, answer: { en: 'Yes, Ethiopia can be shared as a preference and INAYA will review current availability.', ar: 'نعم، يمكن مشاركة تفضيل إثيوبيا وستراجع عناية التوفر الحالي.' } },
      { question: { en: 'What duties can be discussed?', ar: 'ما المهام التي يمكن مناقشتها؟' }, answer: { en: 'Cleaning, laundry, kitchen support, childcare exposure and family routines can be discussed depending on the profile.', ar: 'يمكن مناقشة التنظيف والغسيل والمطبخ ورعاية الأطفال وروتين الأسرة حسب الملف.' } },
      { question: { en: 'Is availability fixed?', ar: 'هل التوفر ثابت؟' }, answer: { en: 'No. Availability changes by documents, timing and service requirements.', ar: 'لا، يتغير التوفر حسب المستندات والتوقيت ومتطلبات الخدمة.' } }
    ]
  },
  {
    slug: 'kenyan-maid-uae',
    code: 'ke',
    country: { en: 'Kenya', ar: 'كينيا' },
    workerLabel: { en: 'Kenyan maid', ar: 'خادمة كينية' },
    metaTitle: { en: 'Kenyan Maid in UAE | Kenya Domestic Workers | INAYA', ar: 'خادمة كينية في الإمارات | عمالة منزلية من كينيا | عناية' },
    metaDescription: { en: 'Looking for a Kenyan maid in UAE? INAYA helps review Kenya domestic worker profiles for childcare, housekeeping, communication, cooking support and family matching.', ar: 'تبحث عن خادمة كينية في الإمارات؟ تساعد عناية في مراجعة ملفات العمالة المنزلية من كينيا لرعاية الأطفال والتنظيف والتواصل والطبخ ومطابقة الأسرة.' },
    heroTitle: { en: 'Kenyan Maid & Domestic Worker Profiles in UAE', ar: 'خادمات وعمالة منزلية من كينيا في الإمارات' },
    lead: { en: 'INAYA guides families comparing Kenyan domestic worker profiles for childcare exposure, housekeeping, family communication and home support.', ar: 'ترشد عناية الأسر التي تقارن ملفات العمالة المنزلية من كينيا لرعاية الأطفال والتنظيف والتواصل مع الأسرة والدعم المنزلي.' },
    intro: { en: 'Kenyan maid profiles may be considered for families that value communication, childcare exposure and active household support. The final choice should be based on the individual profile and duties required.', ar: 'قد تُراجع ملفات الخادمات الكينيات للأسر التي تهتم بالتواصل وخبرة رعاية الأطفال والدعم المنزلي النشط. يجب أن يعتمد القرار النهائي على الملف الفردي والمهام المطلوبة.' },
    strengths: { en: ['Communication and family interaction can be a preference', 'Often reviewed for childcare exposure', 'Suitable for active household routines', 'Profile details reviewed before recommendation'], ar: ['قد يكون التواصل والتفاعل مع الأسرة من التفضيلات', 'تُراجع كثيراً لخبرة رعاية الأطفال', 'مناسبة لروتين منزلي نشط', 'تتم مراجعة تفاصيل الملف قبل الترشيح'] },
    bestFor: { en: ['Families with children', 'Homes needing communication clarity', 'Housekeeping with routine support', 'Nanny or maid role comparison'], ar: ['الأسر التي لديها أطفال', 'منازل تحتاج وضوحاً في التواصل', 'تنظيف مع دعم روتيني', 'مقارنة دور المربية أو الخادمة'] },
    roles: commonRoles,
    faqs: [
      { question: { en: 'Can I request a Kenyan maid in UAE?', ar: 'هل يمكن طلب خادمة كينية في الإمارات؟' }, answer: { en: 'Yes. INAYA can review Kenya profile availability and explain suitable options.', ar: 'نعم، يمكن لعناية مراجعة توفر ملفات كينيا وشرح الخيارات المناسبة.' } },
      { question: { en: 'Can Kenyan profiles support childcare?', ar: 'هل يمكن لملفات كينيا دعم رعاية الأطفال؟' }, answer: { en: 'Some profiles may have childcare exposure. Share child age and routine for better matching.', ar: 'قد تتوفر ملفات لديها خبرة مع الأطفال. شارك عمر الطفل وروتينه لمطابقة أفضل.' } },
      { question: { en: 'Can I compare Kenya and Uganda profiles?', ar: 'هل يمكن مقارنة ملفات كينيا وأوغندا؟' }, answer: { en: 'Yes. INAYA can help compare profiles by experience, duties, documents and availability.', ar: 'نعم، يمكن لعناية مساعدتك في مقارنة الملفات حسب الخبرة والمهام والمستندات والتوفر.' } }
    ]
  },
  {
    slug: 'ugandan-maid-uae',
    code: 'ug',
    country: { en: 'Uganda', ar: 'أوغندا' },
    workerLabel: { en: 'Ugandan maid', ar: 'خادمة أوغندية' },
    metaTitle: { en: 'Ugandan Maid in UAE | Uganda Domestic Workers | INAYA', ar: 'خادمة أوغندية في الإمارات | عمالة منزلية من أوغندا | عناية' },
    metaDescription: { en: 'Compare Ugandan maid profiles in UAE with INAYA for housekeeping, childcare exposure, family support, documents and domestic worker recruitment guidance.', ar: 'قارن ملفات الخادمات الأوغنديات في الإمارات مع عناية للتنظيف ورعاية الأطفال ودعم الأسرة والمستندات وإرشاد التوظيف.' },
    heroTitle: { en: 'Ugandan Maid & Domestic Worker Options in UAE', ar: 'خيارات الخادمات والعمالة المنزلية من أوغندا في الإمارات' },
    lead: { en: 'INAYA helps UAE families review Ugandan domestic worker profiles with clear guidance for duties, childcare exposure, documents and family fit.', ar: 'تساعد عناية الأسر في الإمارات على مراجعة ملفات العمالة المنزلية من أوغندا مع إرشاد واضح للمهام وخبرة الأطفال والمستندات وملاءمة الأسرة.' },
    intro: { en: 'Ugandan maid profiles can be reviewed for home support, housekeeping and care-related duties. INAYA helps families compare individual profiles instead of relying on nationality alone.', ar: 'يمكن مراجعة ملفات الخادمات الأوغنديات للدعم المنزلي والتنظيف ومهام الرعاية. تساعد عناية الأسرة على مقارنة الملفات الفردية بدلاً من الاعتماد على الجنسية وحدها.' },
    strengths: { en: ['Household and care support options', 'Can be reviewed for childcare exposure', 'Suitable for active family homes where available', 'Clear profile comparison by duty and documents'], ar: ['خيارات دعم منزلي ورعاية', 'يمكن مراجعتها لخبرة رعاية الأطفال', 'مناسبة للمنازل العائلية النشطة عند التوفر', 'مقارنة واضحة للملفات حسب المهام والمستندات'] },
    bestFor: { en: ['Housekeeping support', 'Childcare exposure where available', 'Live-in or full-time roles', 'Families comparing African source countries'], ar: ['دعم أعمال المنزل', 'خبرة رعاية الأطفال عند توفرها', 'أدوار مقيمة أو بدوام كامل', 'أسر تقارن دول المصدر الأفريقية'] },
    roles: commonRoles,
    faqs: [
      { question: { en: 'Can INAYA provide Ugandan maid profiles?', ar: 'هل توفر عناية ملفات خادمات من أوغندا؟' }, answer: { en: 'INAYA can review current availability and explain suitable Uganda profile options where available.', ar: 'يمكن لعناية مراجعة التوفر الحالي وشرح خيارات ملفات أوغندا المناسبة عند توفرها.' } },
      { question: { en: 'How are Ugandan profiles reviewed?', ar: 'كيف تتم مراجعة الملفات الأوغندية؟' }, answer: { en: 'Profiles are reviewed by experience, duties, documents, communication and family routine.', ar: 'تتم مراجعة الملفات حسب الخبرة والمهام والمستندات والتواصل وروتين الأسرة.' } },
      { question: { en: 'Can I request childcare experience?', ar: 'هل يمكن طلب خبرة في رعاية الأطفال؟' }, answer: { en: 'Yes. Share child age, routine and expectations before profile comparison.', ar: 'نعم، شارك عمر الطفل وروتينه وتوقعاتك قبل مقارنة الملفات.' } }
    ]
  },
  {
    slug: 'ghanaian-maid-uae',
    code: 'gh',
    country: { en: 'Ghana', ar: 'غانا' },
    workerLabel: { en: 'Ghanaian maid', ar: 'خادمة غانية' },
    metaTitle: { en: 'Ghanaian Maid in UAE | Ghana Domestic Workers | INAYA', ar: 'خادمة غانية في الإمارات | عمالة منزلية من غانا | عناية' },
    metaDescription: { en: 'Looking for a Ghanaian maid in UAE? INAYA helps compare Ghana domestic worker profiles for home duties, cleaning, childcare exposure, documents and family matching.', ar: 'تبحث عن خادمة غانية في الإمارات؟ تساعد عناية في مقارنة ملفات العمالة المنزلية من غانا للمهام المنزلية والتنظيف ورعاية الأطفال والمستندات ومطابقة الأسرة.' },
    heroTitle: { en: 'Ghanaian Maid & Domestic Worker Profiles in UAE', ar: 'خادمات وعمالة منزلية من غانا في الإمارات' },
    lead: { en: 'INAYA guides families reviewing Ghanaian domestic worker profiles for household duties, cleaning routines, family support and document readiness.', ar: 'ترشد عناية الأسر التي تراجع ملفات العمالة المنزلية من غانا للمهام المنزلية وروتين التنظيف ودعم الأسرة وجاهزية المستندات.' },
    intro: { en: 'Ghanaian maid profiles may be suitable for families comparing African source countries for household support. INAYA helps review the profile, availability, duties and family expectations before recommendation.', ar: 'قد تناسب ملفات الخادمات الغانيات الأسر التي تقارن دول المصدر الأفريقية للدعم المنزلي. تساعد عناية في مراجعة الملف والتوفر والمهام وتوقعات الأسرة قبل الترشيح.' },
    strengths: { en: ['Housekeeping and family support options', 'Can be reviewed for childcare exposure', 'Suitable for families comparing source country profiles', 'Profile matching by documents and duties'], ar: ['خيارات تنظيف ودعم الأسرة', 'يمكن مراجعتها لخبرة رعاية الأطفال', 'مناسبة للأسر التي تقارن ملفات دول المصدر', 'مطابقة الملفات حسب المستندات والمهام'] },
    bestFor: { en: ['Household duty support', 'Families comparing African profiles', 'Live-in or full-time support where available', 'Clear profile review'], ar: ['دعم المهام المنزلية', 'الأسر التي تقارن الملفات الأفريقية', 'دعم مقيم أو بدوام كامل عند التوفر', 'مراجعة واضحة للملفات'] },
    roles: commonRoles,
    faqs: [
      { question: { en: 'Can I request a Ghanaian maid?', ar: 'هل يمكن طلب خادمة غانية؟' }, answer: { en: 'Yes, Ghana can be shared as a preference and INAYA will review availability and suitability.', ar: 'نعم، يمكن مشاركة تفضيل غانا وستراجع عناية التوفر والملاءمة.' } },
      { question: { en: 'What should I compare before choosing?', ar: 'ما الذي يجب مقارنته قبل الاختيار؟' }, answer: { en: 'Compare experience, duties, document status, communication and family routine.', ar: 'قارن الخبرة والمهام وحالة المستندات والتواصل وروتين الأسرة.' } },
      { question: { en: 'Can INAYA help with recruitment and visa guidance?', ar: 'هل تساعد عناية في التوظيف وإرشاد التأشيرة؟' }, answer: { en: 'Yes, recruitment and document guidance can be explained according to the selected service path.', ar: 'نعم، يمكن شرح التوظيف وإرشاد المستندات حسب مسار الخدمة المختار.' } }
    ]
  },
  {
    slug: 'sierra-leone-maid-uae',
    code: 'sl',
    country: { en: 'Sierra Leone', ar: 'سيراليون' },
    workerLabel: { en: 'Sierra Leone maid', ar: 'خادمة من سيراليون' },
    metaTitle: { en: 'Sierra Leone Maid in UAE | Domestic Workers | INAYA', ar: 'خادمة من سيراليون في الإمارات | عمالة منزلية | عناية' },
    metaDescription: { en: 'Compare Sierra Leone maid profiles in UAE with INAYA for housekeeping, home support, childcare exposure, documents and family matching guidance.', ar: 'قارن ملفات الخادمات من سيراليون في الإمارات مع عناية للتنظيف والدعم المنزلي ورعاية الأطفال والمستندات وإرشاد مطابقة الأسرة.' },
    heroTitle: { en: 'Sierra Leone Maid & Domestic Worker Options in UAE', ar: 'خيارات الخادمات والعمالة المنزلية من سيراليون في الإمارات' },
    lead: { en: 'INAYA helps families review Sierra Leone domestic worker profiles based on availability, duties, documents, communication and household expectations.', ar: 'تساعد عناية الأسر على مراجعة ملفات العمالة المنزلية من سيراليون حسب التوفر والمهام والمستندات والتواصل وتوقعات المنزل.' },
    intro: { en: 'Sierra Leone maid profiles may be considered for household duties and family support where available. INAYA helps families review each profile carefully before moving forward.', ar: 'قد تُراجع ملفات الخادمات من سيراليون للمهام المنزلية ودعم الأسرة عند توفرها. تساعد عناية الأسر على مراجعة كل ملف بعناية قبل المتابعة.' },
    strengths: { en: ['Availability reviewed by case', 'Housekeeping and family support discussion', 'Document and profile review', 'Suitable for families comparing African source options'], ar: ['مراجعة التوفر حسب الحالة', 'مناقشة التنظيف ودعم الأسرة', 'مراجعة المستندات والملف', 'مناسبة للأسر التي تقارن خيارات المصدر الأفريقية'] },
    bestFor: { en: ['Families checking current availability', 'Household duty support', 'Profile-first selection', 'Document-guided recruitment'], ar: ['الأسر التي تفحص التوفر الحالي', 'دعم المهام المنزلية', 'اختيار يعتمد على الملف', 'توظيف موجه بالمستندات'] },
    roles: commonRoles,
    faqs: [
      { question: { en: 'Are Sierra Leone maid profiles available in UAE?', ar: 'هل تتوفر ملفات خادمات من سيراليون في الإمارات؟' }, answer: { en: 'Availability changes by time, documents and service model. INAYA can review current options.', ar: 'يتغير التوفر حسب الوقت والمستندات ونموذج الخدمة. يمكن لعناية مراجعة الخيارات الحالية.' } },
      { question: { en: 'What duties can be discussed?', ar: 'ما المهام التي يمكن مناقشتها؟' }, answer: { en: 'Housekeeping, family support, childcare exposure and kitchen help can be discussed depending on the profile.', ar: 'يمكن مناقشة التنظيف ودعم الأسرة وخبرة الأطفال ومساعدة المطبخ حسب الملف.' } },
      { question: { en: 'Does INAYA recommend by nationality only?', ar: 'هل ترشح عناية حسب الجنسية فقط؟' }, answer: { en: 'No. INAYA reviews the individual profile, documents, duties and family requirement.', ar: 'لا، تراجع عناية الملف الفردي والمستندات والمهام واحتياج الأسرة.' } }
    ]
  },
  {
    slug: 'indonesian-maid-uae',
    code: 'id',
    country: { en: 'Indonesia', ar: 'إندونيسيا' },
    workerLabel: { en: 'Indonesian maid', ar: 'خادمة إندونيسية' },
    metaTitle: { en: 'Indonesian Maid in UAE | Indonesia Domestic Workers | INAYA', ar: 'خادمة إندونيسية في الإمارات | عمالة منزلية من إندونيسيا | عناية' },
    metaDescription: { en: 'Looking for an Indonesian maid in UAE? INAYA helps review Indonesia domestic worker profiles for housekeeping, cooking support, family care and document guidance.', ar: 'تبحث عن خادمة إندونيسية في الإمارات؟ تساعد عناية في مراجعة ملفات العمالة المنزلية من إندونيسيا للتنظيف والطبخ ورعاية الأسرة وإرشاد المستندات.' },
    heroTitle: { en: 'Indonesian Maid & Domestic Worker Profiles in UAE', ar: 'خادمات وعمالة منزلية من إندونيسيا في الإمارات' },
    lead: { en: 'INAYA helps UAE families compare Indonesian maid profiles for household routines, meal support, cleaning, childcare exposure and family suitability.', ar: 'تساعد عناية الأسر في الإمارات على مقارنة ملفات الخادمات الإندونيسيات لروتين المنزل ودعم الوجبات والتنظيف وخبرة الأطفال وملاءمة الأسرة.' },
    intro: { en: 'Indonesian maid profiles are often reviewed for home routines, cooking support and family care. INAYA helps clarify availability, documents, duties and profile suitability before recommendation.', ar: 'غالباً ما تُراجع ملفات الخادمات الإندونيسيات لروتين المنزل ودعم الطبخ ورعاية الأسرة. تساعد عناية في توضيح التوفر والمستندات والمهام وملاءمة الملف قبل الترشيح.' },
    strengths: { en: ['Household routine and meal support options', 'Can be reviewed for family care duties', 'Suitable for live-in support where available', 'Profile selection based on documents and expectations'], ar: ['خيارات روتين المنزل ودعم الوجبات', 'يمكن مراجعتها لمهام رعاية الأسرة', 'مناسبة للدعم المقيم عند التوفر', 'اختيار الملف حسب المستندات والتوقعات'] },
    bestFor: { en: ['Families needing cooking support', 'Live-in household routines', 'Cleaning and family care', 'Homes comparing Asian source countries'], ar: ['الأسر التي تحتاج دعماً في الطبخ', 'روتين منزلي مقيم', 'تنظيف ورعاية الأسرة', 'منازل تقارن دول المصدر الآسيوية'] },
    roles: commonRoles,
    faqs: [
      { question: { en: 'Can I request an Indonesian maid in UAE?', ar: 'هل يمكن طلب خادمة إندونيسية في الإمارات؟' }, answer: { en: 'Yes, you can share Indonesia as a preference and INAYA will check availability and suitable profiles.', ar: 'نعم، يمكنك مشاركة تفضيل إندونيسيا وستراجع عناية التوفر والملفات المناسبة.' } },
      { question: { en: 'Are Indonesian maids suitable for cooking?', ar: 'هل الخادمات الإندونيسيات مناسبات للطبخ؟' }, answer: { en: 'Some profiles may support cooking and meal preparation. Preferences should be discussed before confirmation.', ar: 'قد تدعم بعض الملفات الطبخ وتحضير الوجبات. يجب مناقشة التفضيلات قبل التأكيد.' } },
      { question: { en: 'Can INAYA help compare Indonesia and Philippines profiles?', ar: 'هل تساعد عناية في مقارنة ملفات إندونيسيا والفلبين؟' }, answer: { en: 'Yes. INAYA can help compare profiles by experience, duties, documents and family needs.', ar: 'نعم، يمكن لعناية مقارنة الملفات حسب الخبرة والمهام والمستندات واحتياج الأسرة.' } }
    ]
  },
  {
    slug: 'myanmar-maid-uae',
    code: 'mm',
    country: { en: 'Myanmar', ar: 'ميانمار' },
    workerLabel: { en: 'Myanmar maid', ar: 'خادمة من ميانمار' },
    metaTitle: { en: 'Myanmar Maid in UAE | Myanmar Domestic Workers | INAYA', ar: 'خادمة من ميانمار في الإمارات | عمالة منزلية من ميانمار | عناية' },
    metaDescription: { en: 'Compare Myanmar maid profiles in UAE with INAYA for cleaning, household duties, family support, availability, documents and domestic worker guidance.', ar: 'قارن ملفات الخادمات من ميانمار في الإمارات مع عناية للتنظيف والمهام المنزلية ودعم الأسرة والتوفر والمستندات وإرشاد العمالة المنزلية.' },
    heroTitle: { en: 'Myanmar Maid & Domestic Worker Options in UAE', ar: 'خيارات الخادمات والعمالة المنزلية من ميانمار في الإمارات' },
    lead: { en: 'INAYA helps families review Myanmar domestic worker profiles by availability, household duties, documents, experience and family fit.', ar: 'تساعد عناية الأسر على مراجعة ملفات العمالة المنزلية من ميانمار حسب التوفر والمهام المنزلية والمستندات والخبرة وملاءمة الأسرة.' },
    intro: { en: 'Myanmar maid profiles may be reviewed for household support and cleaning routines depending on current availability. INAYA helps families compare the profile details before choosing.', ar: 'يمكن مراجعة ملفات الخادمات من ميانمار للدعم المنزلي وروتين التنظيف حسب التوفر الحالي. تساعد عناية الأسر على مقارنة تفاصيل الملف قبل الاختيار.' },
    strengths: { en: ['Availability reviewed by current profile supply', 'Housekeeping and daily duty support', 'Document and service requirement review', 'Suitable for families wanting profile-first matching'], ar: ['مراجعة التوفر حسب الملفات الحالية', 'دعم التنظيف والمهام اليومية', 'مراجعة المستندات ومتطلبات الخدمة', 'مناسبة للأسر التي تريد مطابقة تعتمد على الملف'] },
    bestFor: { en: ['Families checking available profiles', 'Daily home duties', 'Cleaning and household support', 'Document-guided selection'], ar: ['الأسر التي تفحص الملفات المتاحة', 'المهام المنزلية اليومية', 'التنظيف والدعم المنزلي', 'اختيار موجه بالمستندات'] },
    roles: commonRoles,
    faqs: [
      { question: { en: 'Can I request a Myanmar maid in UAE?', ar: 'هل يمكن طلب خادمة من ميانمار في الإمارات؟' }, answer: { en: 'Yes, Myanmar can be shared as a preference and INAYA will review current availability.', ar: 'نعم، يمكن مشاركة تفضيل ميانمار وستراجع عناية التوفر الحالي.' } },
      { question: { en: 'What is the best way to choose?', ar: 'ما أفضل طريقة للاختيار؟' }, answer: { en: 'Review the individual profile, duties, documents, availability and family routine before deciding.', ar: 'راجع الملف الفردي والمهام والمستندات والتوفر وروتين الأسرة قبل القرار.' } },
      { question: { en: 'Can INAYA guide the next steps?', ar: 'هل ترشد عناية للخطوات التالية؟' }, answer: { en: 'Yes. INAYA explains suitable options, document requirements and service steps clearly.', ar: 'نعم، تشرح عناية الخيارات المناسبة ومتطلبات المستندات وخطوات الخدمة بوضوح.' } }
    ]
  }
];

export function getCountrySourcePage(slug: string) {
  return countrySourcePages.find((country) => country.slug === slug);
}
