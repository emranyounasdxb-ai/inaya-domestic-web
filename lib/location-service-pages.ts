export type Lang = 'en' | 'ar';

type Localized = Record<Lang, string>;
type LocalizedList = Record<Lang, string[]>;

type LocationFaq = {
  question: Localized;
  answer: Localized;
};

type LocationServiceLink = {
  slug: string;
  title: Localized;
};

export type LocationServicePage = {
  slug: string;
  city: Localized;
  emirate: Localized;
  metaTitle: Localized;
  metaDescription: Localized;
  heroTitle: Localized;
  lead: Localized;
  intro: Localized;
  localNeeds: LocalizedList;
  popularServices: LocationServiceLink[];
  neighbourhoods: LocalizedList;
  faqs: LocationFaq[];
};

const commonServices: LocationServiceLink[] = [
  { slug: 'live-in-maid', title: { en: 'Live-in Maid', ar: 'خادمة مقيمة' } },
  { slug: 'live-out-maid', title: { en: 'Live-out Maid', ar: 'خادمة غير مقيمة' } },
  { slug: 'part-time-maid', title: { en: 'Part-time Maid', ar: 'خادمة بدوام جزئي' } },
  { slug: 'nanny', title: { en: 'Nanny Services', ar: 'خدمات المربيات' } },
  { slug: 'home-cooking', title: { en: 'Home Cooking', ar: 'الطبخ المنزلي' } },
  { slug: 'maid-visa', title: { en: 'Maid Visa Assistance', ar: 'مساعدة تأشيرة الخادمة' } }
];

export const locationServicePages: LocationServicePage[] = [
  {
    slug: 'maid-services-ajman',
    city: { en: 'Ajman', ar: 'عجمان' },
    emirate: { en: 'Ajman', ar: 'عجمان' },
    metaTitle: { en: 'Maid Services in Ajman | Domestic Workers Ajman | INAYA', ar: 'خدمات خادمات في عجمان | عمالة منزلية عجمان | عناية' },
    metaDescription: { en: 'Maid services in Ajman by INAYA Domestic Workers. Get help with live-in maids, live-out maids, nannies, cooks, caregivers, recruitment and maid visa support.', ar: 'خدمات خادمات في عجمان من عناية للعمالة المنزلية. دعم للخادمات المقيمات وغير المقيمات والمربيات والطهاة والرعاية والتوظيف وتأشيرة الخادمة.' },
    heroTitle: { en: 'Maid Services in Ajman for Trusted Home Support', ar: 'خدمات خادمات في عجمان لدعم منزلي موثوق' },
    lead: { en: 'INAYA is based in Ajman and supports families with maid services, domestic worker recruitment, nanny care, home cooking and maid visa guidance across the emirate.', ar: 'عناية مقرها في عجمان وتدعم الأسر بخدمات الخادمات وتوظيف العمالة المنزلية والمربيات والطبخ المنزلي وإرشاد تأشيرة الخادمة داخل الإمارة.' },
    intro: { en: 'Families in Ajman often need clear and fast support for home cleaning, live-in maid arrangements, part-time help, childcare, cooking and visa-related guidance. INAYA helps review the household requirement first, then explains suitable service options based on availability and family expectations.', ar: 'تحتاج كثير من الأسر في عجمان إلى دعم واضح وسريع للتنظيف وترتيبات الخادمة المقيمة والمساعدة الجزئية ورعاية الأطفال والطبخ وإرشاد التأشيرة. تراجع عناية احتياج المنزل أولاً ثم توضح خيارات الخدمة المناسبة حسب التوفر وتوقعات الأسرة.' },
    localNeeds: { en: ['Grand Mall Ajman office access', 'Fast consultation for Ajman families', 'Live-in and live-out maid guidance', 'Nanny, cook and care support options', 'Maid visa and document guidance'], ar: ['سهولة الوصول إلى مكتب جراند مول عجمان', 'استشارة سريعة للأسر في عجمان', 'إرشاد للخادمة المقيمة وغير المقيمة', 'خيارات المربيات والطهاة والرعاية', 'إرشاد تأشيرة الخادمة والمستندات'] },
    popularServices: commonServices,
    neighbourhoods: { en: ['Al Rashidiya', 'Al Nuaimiya', 'Al Jurf', 'Al Mowaihat', 'Ajman Corniche', 'Al Rawda'], ar: ['الراشدية', 'النعيمية', 'الجرف', 'المويهات', 'كورنيش عجمان', 'الروضة'] },
    faqs: [
      { question: { en: 'Do you provide maid services in Ajman?', ar: 'هل تقدمون خدمات خادمات في عجمان؟' }, answer: { en: 'Yes. INAYA is based in Ajman and supports maid, nanny, cook, caregiver, recruitment and visa-related enquiries in Ajman.', ar: 'نعم، عناية مقرها في عجمان وتدعم طلبات الخادمات والمربيات والطهاة والرعاية والتوظيف والتأشيرة في عجمان.' } },
      { question: { en: 'Can I visit the office in Ajman?', ar: 'هل يمكن زيارة المكتب في عجمان؟' }, answer: { en: 'Yes, you can visit INAYA at Grand Mall, Ajman. Please contact the team first to confirm timing.', ar: 'نعم، يمكن زيارة عناية في جراند مول، عجمان. يفضل التواصل مع الفريق أولاً لتأكيد الموعد.' } },
      { question: { en: 'Can you help with maid visa support in Ajman?', ar: 'هل تساعدون في تأشيرة الخادمة في عجمان؟' }, answer: { en: 'Yes. INAYA can explain document and maid visa guidance based on your case and selected service path.', ar: 'نعم، يمكن لعناية شرح إرشاد المستندات وتأشيرة الخادمة حسب حالتك ومسار الخدمة المختار.' } }
    ]
  },
  {
    slug: 'maid-services-dubai',
    city: { en: 'Dubai', ar: 'دبي' },
    emirate: { en: 'Dubai', ar: 'دبي' },
    metaTitle: { en: 'Maid Services in Dubai | Nanny, Cook & Domestic Workers | INAYA', ar: 'خدمات خادمات في دبي | مربيات وطهاة وعمالة منزلية | عناية' },
    metaDescription: { en: 'Looking for maid services in Dubai? INAYA helps families compare live-in maids, live-out maids, part-time maids, nannies, cooks, caregivers and visa support.', ar: 'تبحث عن خدمات خادمات في دبي؟ تساعد عناية الأسر على مقارنة الخادمات المقيمات وغير المقيمات والدوام الجزئي والمربيات والطهاة والرعاية والتأشيرة.' },
    heroTitle: { en: 'Maid Services in Dubai for Busy Family Homes', ar: 'خدمات خادمات في دبي للمنازل العائلية كثيرة الانشغال' },
    lead: { en: 'INAYA supports Dubai families with guided domestic worker services for villas, apartments, working parents and households that need reliable home support.', ar: 'تدعم عناية الأسر في دبي بخدمات عمالة منزلية موجهة للفلل والشقق والوالدين العاملين والمنازل التي تحتاج دعماً موثوقاً.' },
    intro: { en: 'Dubai households often need flexible domestic support because routines can be busy and varied. INAYA helps families clarify whether they need a live-in maid, live-out maid, nanny, babysitter, cook, caregiver or visa guidance before moving forward.', ar: 'تحتاج منازل دبي غالباً إلى دعم منزلي مرن بسبب ازدحام وتنوع الروتين. تساعد عناية الأسر على توضيح ما إذا كانت تحتاج خادمة مقيمة أو غير مقيمة أو مربية أو جليسة أطفال أو طباخاً أو رعاية أو إرشاد تأشيرة قبل المتابعة.' },
    localNeeds: { en: ['Villa and apartment maid service guidance', 'Nanny support for working parents', 'Part-time and scheduled home help', 'Cooking and kitchen support options', 'Recruitment and visa document guidance'], ar: ['إرشاد خدمات الخادمات للفلل والشقق', 'دعم المربيات للوالدين العاملين', 'مساعدة منزلية جزئية ومجدولة', 'خيارات الطبخ ودعم المطبخ', 'إرشاد التوظيف ومستندات التأشيرة'] },
    popularServices: commonServices,
    neighbourhoods: { en: ['Dubai Marina', 'Jumeirah', 'Downtown Dubai', 'Business Bay', 'Arabian Ranches', 'Mirdif'], ar: ['دبي مارينا', 'جميرا', 'وسط مدينة دبي', 'الخليج التجاري', 'المرابع العربية', 'مردف'] },
    faqs: [
      { question: { en: 'Do you provide maid services in Dubai?', ar: 'هل تقدمون خدمات خادمات في دبي؟' }, answer: { en: 'Yes. INAYA supports Dubai enquiries for maid, nanny, cook, caregiver, recruitment and maid visa services, subject to availability.', ar: 'نعم، تدعم عناية طلبات دبي للخادمات والمربيات والطهاة والرعاية والتوظيف وتأشيرة الخادمة حسب التوفر.' } },
      { question: { en: 'Can Dubai families request live-in or live-out maid options?', ar: 'هل يمكن لأسر دبي طلب خادمة مقيمة أو غير مقيمة؟' }, answer: { en: 'Yes. Both service models can be discussed based on the family routine, documents and availability.', ar: 'نعم، يمكن مناقشة النموذجين حسب روتين الأسرة والمستندات والتوفر.' } },
      { question: { en: 'Can INAYA help compare nanny and babysitting support?', ar: 'هل تساعد عناية في مقارنة المربية وجليسة الأطفال؟' }, answer: { en: 'Yes. The team can explain which option is better for regular childcare or occasional support.', ar: 'نعم، يمكن للفريق شرح الخيار الأنسب للرعاية المنتظمة أو الدعم المؤقت.' } }
    ]
  },
  {
    slug: 'maid-services-sharjah',
    city: { en: 'Sharjah', ar: 'الشارقة' },
    emirate: { en: 'Sharjah', ar: 'الشارقة' },
    metaTitle: { en: 'Maid Services in Sharjah | Domestic Workers Sharjah | INAYA', ar: 'خدمات خادمات في الشارقة | عمالة منزلية الشارقة | عناية' },
    metaDescription: { en: 'Maid services in Sharjah with INAYA. Get guided support for live-in maids, live-out maids, nannies, cooks, elder care, recruitment and maid visa assistance.', ar: 'خدمات خادمات في الشارقة مع عناية. دعم موجه للخادمات المقيمات وغير المقيمات والمربيات والطهاة ورعاية كبار السن والتوظيف وتأشيرة الخادمة.' },
    heroTitle: { en: 'Maid Services in Sharjah for Family Routines', ar: 'خدمات خادمات في الشارقة لروتين الأسرة' },
    lead: { en: 'INAYA helps Sharjah families compare domestic worker services for household cleaning, childcare, cooking, care support and document-guided hiring.', ar: 'تساعد عناية الأسر في الشارقة على مقارنة خدمات العمالة المنزلية للتنظيف ورعاية الأطفال والطبخ والرعاية والتوظيف الموجه بالمستندات.' },
    intro: { en: 'Sharjah families often look for dependable home support that fits family routines, school schedules and household duties. INAYA explains available maid service models and helps families choose the right next step.', ar: 'تبحث أسر الشارقة غالباً عن دعم منزلي موثوق يناسب روتين الأسرة وجداول المدرسة والمهام المنزلية. تشرح عناية نماذج خدمات الخادمات المتاحة وتساعد الأسرة على اختيار الخطوة المناسبة.' },
    localNeeds: { en: ['Family routine-based maid guidance', 'Nanny and childcare support discussion', 'Cooking and housekeeping duty review', 'Live-in or live-out options', 'Document and recruitment guidance'], ar: ['إرشاد خادمة حسب روتين الأسرة', 'مناقشة دعم المربيات ورعاية الأطفال', 'مراجعة مهام الطبخ والتنظيف', 'خيارات مقيمة أو غير مقيمة', 'إرشاد المستندات والتوظيف'] },
    popularServices: commonServices,
    neighbourhoods: { en: ['Al Nahda', 'Al Majaz', 'Muweilah', 'Al Taawun', 'Al Khan', 'University City'], ar: ['النهدة', 'المجاز', 'مويلح', 'التعاون', 'الخان', 'المدينة الجامعية'] },
    faqs: [
      { question: { en: 'Can I request maid services in Sharjah?', ar: 'هل يمكن طلب خدمات خادمات في الشارقة؟' }, answer: { en: 'Yes. INAYA supports Sharjah enquiries and confirms options by service type, timing and availability.', ar: 'نعم، تدعم عناية طلبات الشارقة وتؤكد الخيارات حسب نوع الخدمة والتوقيت والتوفر.' } },
      { question: { en: 'Can Sharjah families request nanny support?', ar: 'هل يمكن لأسر الشارقة طلب دعم مربية؟' }, answer: { en: 'Yes. Nanny and babysitting needs can be discussed based on child age, routine and schedule.', ar: 'نعم، يمكن مناقشة احتياج المربية أو جليسة الأطفال حسب عمر الطفل والروتين والجدول.' } },
      { question: { en: 'Can you help with recruitment guidance?', ar: 'هل تساعدون في إرشاد التوظيف؟' }, answer: { en: 'Yes. INAYA can guide profile comparison, documents and next steps for domestic worker recruitment.', ar: 'نعم، يمكن لعناية إرشاد مقارنة الملفات والمستندات والخطوات التالية لتوظيف العمالة المنزلية.' } }
    ]
  },
  {
    slug: 'maid-services-abu-dhabi',
    city: { en: 'Abu Dhabi', ar: 'أبوظبي' },
    emirate: { en: 'Abu Dhabi', ar: 'أبوظبي' },
    metaTitle: { en: 'Maid Services in Abu Dhabi | Domestic Workers Abu Dhabi | INAYA', ar: 'خدمات خادمات في أبوظبي | عمالة منزلية أبوظبي | عناية' },
    metaDescription: { en: 'Maid services in Abu Dhabi with INAYA. Compare live-in maids, nannies, cooks, caregivers, recruitment and maid visa guidance for family homes.', ar: 'خدمات خادمات في أبوظبي مع عناية. قارن الخادمات المقيمات والمربيات والطهاة والرعاية والتوظيف وإرشاد تأشيرة الخادمة للمنازل العائلية.' },
    heroTitle: { en: 'Maid Services in Abu Dhabi with Clear Family Guidance', ar: 'خدمات خادمات في أبوظبي مع إرشاد واضح للأسرة' },
    lead: { en: 'INAYA supports Abu Dhabi households with domestic worker guidance for family routines, villas, apartments, childcare, cooking, care support and visa-related steps.', ar: 'تدعم عناية منازل أبوظبي بإرشاد العمالة المنزلية لروتين الأسرة والفلل والشقق ورعاية الأطفال والطبخ والرعاية وخطوات التأشيرة.' },
    intro: { en: 'Abu Dhabi families may need structured support for larger homes, family schedules, childcare and long-term domestic worker arrangements. INAYA helps clarify the requirement and service path before confirmation.', ar: 'قد تحتاج أسر أبوظبي إلى دعم منظم للمنازل الكبيرة وجداول الأسرة ورعاية الأطفال وترتيبات العمالة المنزلية طويلة المدى. تساعد عناية في توضيح الاحتياج ومسار الخدمة قبل التأكيد.' },
    localNeeds: { en: ['Villa and family home support', 'Long-term maid arrangement guidance', 'Nanny and care support discussion', 'Cooking and kitchen helper options', 'Recruitment, transfer and visa guidance'], ar: ['دعم الفلل والمنازل العائلية', 'إرشاد ترتيبات خادمة طويلة المدى', 'مناقشة المربيات والرعاية', 'خيارات الطبخ ومساعد المطبخ', 'إرشاد التوظيف والنقل والتأشيرة'] },
    popularServices: commonServices,
    neighbourhoods: { en: ['Khalifa City', 'Al Reem Island', 'Mohammed Bin Zayed City', 'Al Mushrif', 'Corniche', 'Yas Island'], ar: ['مدينة خليفة', 'جزيرة الريم', 'مدينة محمد بن زايد', 'المشرف', 'الكورنيش', 'جزيرة ياس'] },
    faqs: [
      { question: { en: 'Do you support maid service enquiries in Abu Dhabi?', ar: 'هل تدعمون طلبات خدمات الخادمات في أبوظبي؟' }, answer: { en: 'Yes. INAYA supports Abu Dhabi enquiries subject to service type, location, documents and availability.', ar: 'نعم، تدعم عناية طلبات أبوظبي حسب نوع الخدمة والمنطقة والمستندات والتوفر.' } },
      { question: { en: 'Can Abu Dhabi families ask for live-in maid guidance?', ar: 'هل يمكن لأسر أبوظبي طلب إرشاد خادمة مقيمة؟' }, answer: { en: 'Yes. Live-in maid requirements, duties and documents can be discussed clearly before moving forward.', ar: 'نعم، يمكن مناقشة احتياج الخادمة المقيمة والمهام والمستندات بوضوح قبل المتابعة.' } },
      { question: { en: 'Do you provide care support guidance?', ar: 'هل تقدمون إرشاد خدمات الرعاية؟' }, answer: { en: 'Yes. Elder care, patient care and companion care options can be reviewed by family requirement.', ar: 'نعم، يمكن مراجعة خيارات رعاية كبار السن والمرضى والمرافقة حسب احتياج الأسرة.' } }
    ]
  },
  {
    slug: 'maid-services-ras-al-khaimah',
    city: { en: 'Ras Al Khaimah', ar: 'رأس الخيمة' },
    emirate: { en: 'Ras Al Khaimah', ar: 'رأس الخيمة' },
    metaTitle: { en: 'Maid Services in Ras Al Khaimah | Domestic Workers RAK | INAYA', ar: 'خدمات خادمات في رأس الخيمة | عمالة منزلية رأس الخيمة | عناية' },
    metaDescription: { en: 'Maid services in Ras Al Khaimah with INAYA. Get guidance for live-in maids, live-out maids, nannies, cooks, caregivers and maid visa support.', ar: 'خدمات خادمات في رأس الخيمة مع عناية. إرشاد للخادمات المقيمات وغير المقيمات والمربيات والطهاة والرعاية وتأشيرة الخادمة.' },
    heroTitle: { en: 'Maid Services in Ras Al Khaimah for Reliable Home Help', ar: 'خدمات خادمات في رأس الخيمة لمساعدة منزلية موثوقة' },
    lead: { en: 'INAYA helps Ras Al Khaimah families review domestic worker service options for cleaning, live-in support, childcare, cooking, care needs and documents.', ar: 'تساعد عناية أسر رأس الخيمة على مراجعة خيارات العمالة المنزلية للتنظيف والدعم المقيم ورعاية الأطفال والطبخ والرعاية والمستندات.' },
    intro: { en: 'Families in Ras Al Khaimah may need dependable home support for villas, family routines and daily domestic tasks. INAYA explains suitable options based on location, availability and service requirements.', ar: 'قد تحتاج أسر رأس الخيمة إلى دعم منزلي موثوق للفلل وروتين الأسرة والمهام اليومية. توضح عناية الخيارات المناسبة حسب المنطقة والتوفر ومتطلبات الخدمة.' },
    localNeeds: { en: ['Villa and home routine support', 'Live-in maid guidance', 'Childcare and nanny support discussion', 'Cooking and cleaning duties', 'Document and visa step guidance'], ar: ['دعم الفلل وروتين المنزل', 'إرشاد الخادمة المقيمة', 'مناقشة رعاية الأطفال والمربيات', 'مهام الطبخ والتنظيف', 'إرشاد المستندات وخطوات التأشيرة'] },
    popularServices: commonServices,
    neighbourhoods: { en: ['Al Hamra', 'Mina Al Arab', 'Khuzam', 'Al Nakheel', 'Julphar', 'Al Dhait'], ar: ['الحمرا', 'ميناء العرب', 'خزام', 'النخيل', 'جلفار', 'الظيت'] },
    faqs: [
      { question: { en: 'Do you support maid services in Ras Al Khaimah?', ar: 'هل تدعمون خدمات الخادمات في رأس الخيمة؟' }, answer: { en: 'Yes. INAYA can review Ras Al Khaimah enquiries and confirm availability by service type.', ar: 'نعم، يمكن لعناية مراجعة طلبات رأس الخيمة وتأكيد التوفر حسب نوع الخدمة.' } },
      { question: { en: 'Can I request live-in maid profiles?', ar: 'هل يمكن طلب ملفات خادمات مقيمات؟' }, answer: { en: 'Yes. Live-in support can be discussed based on family duties, documents and availability.', ar: 'نعم، يمكن مناقشة الدعم المقيم حسب مهام الأسرة والمستندات والتوفر.' } },
      { question: { en: 'Can INAYA explain visa-related steps?', ar: 'هل تشرح عناية الخطوات المتعلقة بالتأشيرة؟' }, answer: { en: 'Yes. Visa and document guidance can be provided based on the selected service path.', ar: 'نعم، يمكن تقديم إرشاد التأشيرة والمستندات حسب مسار الخدمة المختار.' } }
    ]
  },
  {
    slug: 'maid-services-fujairah',
    city: { en: 'Fujairah', ar: 'الفجيرة' },
    emirate: { en: 'Fujairah', ar: 'الفجيرة' },
    metaTitle: { en: 'Maid Services in Fujairah | Domestic Workers Fujairah | INAYA', ar: 'خدمات خادمات في الفجيرة | عمالة منزلية الفجيرة | عناية' },
    metaDescription: { en: 'Maid services in Fujairah with INAYA. Get guided support for domestic workers, live-in maids, nannies, cooks, caregivers, recruitment and maid visa steps.', ar: 'خدمات خادمات في الفجيرة مع عناية. دعم موجه للعمالة المنزلية والخادمات المقيمات والمربيات والطهاة والرعاية والتوظيف وخطوات التأشيرة.' },
    heroTitle: { en: 'Maid Services in Fujairah for Calm Family Support', ar: 'خدمات خادمات في الفجيرة لدعم عائلي هادئ' },
    lead: { en: 'INAYA supports Fujairah families with maid service guidance for housekeeping, childcare, cooking, care support, recruitment and document-related steps.', ar: 'تدعم عناية أسر الفجيرة بإرشاد خدمات الخادمات للتنظيف ورعاية الأطفال والطبخ والرعاية والتوظيف والخطوات المتعلقة بالمستندات.' },
    intro: { en: 'Fujairah families may need domestic support that is practical, clear and aligned with family routines. INAYA helps review available options and explain the next step before confirmation.', ar: 'قد تحتاج أسر الفجيرة إلى دعم منزلي عملي وواضح ومتوافق مع روتين الأسرة. تساعد عناية في مراجعة الخيارات المتاحة وشرح الخطوة التالية قبل التأكيد.' },
    localNeeds: { en: ['Housekeeping and daily routine support', 'Nanny and childcare guidance', 'Home cooking and kitchen support', 'Recruitment and profile comparison', 'Maid visa document guidance'], ar: ['دعم التنظيف والروتين اليومي', 'إرشاد المربيات ورعاية الأطفال', 'الطبخ المنزلي ودعم المطبخ', 'التوظيف ومقارنة الملفات', 'إرشاد مستندات تأشيرة الخادمة'] },
    popularServices: commonServices,
    neighbourhoods: { en: ['Fujairah City', 'Dibba', 'Khor Fakkan', 'Mirbah', 'Al Faseel', 'Sakamkam'], ar: ['مدينة الفجيرة', 'دبا', 'خورفكان', 'مربح', 'الفصيل', 'سكمكم'] },
    faqs: [
      { question: { en: 'Can I request maid service guidance in Fujairah?', ar: 'هل يمكن طلب إرشاد خدمات خادمات في الفجيرة؟' }, answer: { en: 'Yes. INAYA supports Fujairah enquiries based on service type, location and availability.', ar: 'نعم، تدعم عناية طلبات الفجيرة حسب نوع الخدمة والمنطقة والتوفر.' } },
      { question: { en: 'Can Fujairah families compare country options?', ar: 'هل يمكن لأسر الفجيرة مقارنة خيارات الدول؟' }, answer: { en: 'Yes. INAYA can help compare source country preferences by profile, documents and availability.', ar: 'نعم، يمكن لعناية المساعدة في مقارنة تفضيلات دول المصدر حسب الملف والمستندات والتوفر.' } },
      { question: { en: 'Can you help with recruitment?', ar: 'هل تساعدون في التوظيف؟' }, answer: { en: 'Yes. Domestic worker recruitment guidance can be discussed based on the role and family requirement.', ar: 'نعم، يمكن مناقشة إرشاد توظيف العمالة المنزلية حسب الدور واحتياج الأسرة.' } }
    ]
  },
  {
    slug: 'maid-services-umm-al-quwain',
    city: { en: 'Umm Al Quwain', ar: 'أم القيوين' },
    emirate: { en: 'Umm Al Quwain', ar: 'أم القيوين' },
    metaTitle: { en: 'Maid Services in Umm Al Quwain | Domestic Workers UAQ | INAYA', ar: 'خدمات خادمات في أم القيوين | عمالة منزلية أم القيوين | عناية' },
    metaDescription: { en: 'Maid services in Umm Al Quwain with INAYA. Get guidance for live-in maids, live-out maids, nannies, cooks, elder care, recruitment and visa support.', ar: 'خدمات خادمات في أم القيوين مع عناية. إرشاد للخادمات المقيمات وغير المقيمات والمربيات والطهاة ورعاية كبار السن والتوظيف والتأشيرة.' },
    heroTitle: { en: 'Maid Services in Umm Al Quwain for Family Homes', ar: 'خدمات خادمات في أم القيوين للمنازل العائلية' },
    lead: { en: 'INAYA helps Umm Al Quwain families understand domestic worker service options for household routines, childcare, cooking, care support and maid visa guidance.', ar: 'تساعد عناية أسر أم القيوين على فهم خيارات العمالة المنزلية لروتين المنزل ورعاية الأطفال والطبخ والرعاية وإرشاد تأشيرة الخادمة.' },
    intro: { en: 'Families in Umm Al Quwain often need clear guidance before choosing a maid, nanny, cook or caregiver. INAYA reviews the requirement and explains suitable options based on current availability.', ar: 'تحتاج أسر أم القيوين غالباً إلى إرشاد واضح قبل اختيار خادمة أو مربية أو طباخ أو مقدم رعاية. تراجع عناية الاحتياج وتشرح الخيارات المناسبة حسب التوفر الحالي.' },
    localNeeds: { en: ['Family home support guidance', 'Live-in and live-out maid options', 'Nanny and childcare discussion', 'Cooking and kitchen support', 'Recruitment and visa process guidance'], ar: ['إرشاد دعم المنازل العائلية', 'خيارات خادمة مقيمة وغير مقيمة', 'مناقشة المربيات ورعاية الأطفال', 'الطبخ ودعم المطبخ', 'إرشاد التوظيف وإجراءات التأشيرة'] },
    popularServices: commonServices,
    neighbourhoods: { en: ['UAQ City', 'Al Salamah', 'Al Raas', 'Falaj Al Mualla', 'Al Dar Al Baida', 'Al Humrah'], ar: ['مدينة أم القيوين', 'السلامة', 'الراس', 'فلج المعلا', 'الدار البيضاء', 'الحمراء'] },
    faqs: [
      { question: { en: 'Do you support maid services in Umm Al Quwain?', ar: 'هل تدعمون خدمات الخادمات في أم القيوين؟' }, answer: { en: 'Yes. INAYA can review Umm Al Quwain enquiries and explain suitable service options.', ar: 'نعم، يمكن لعناية مراجعة طلبات أم القيوين وشرح خيارات الخدمة المناسبة.' } },
      { question: { en: 'Can I ask for a nanny or caregiver?', ar: 'هل يمكن طلب مربية أو مقدم رعاية؟' }, answer: { en: 'Yes. Nanny, elder care, patient care and companion care needs can be discussed.', ar: 'نعم، يمكن مناقشة احتياجات المربية ورعاية كبار السن والمرضى والمرافقة.' } },
      { question: { en: 'Can INAYA guide documents?', ar: 'هل ترشد عناية للمستندات؟' }, answer: { en: 'Yes. Document and visa guidance can be explained according to your service path.', ar: 'نعم، يمكن شرح إرشاد المستندات والتأشيرة حسب مسار خدمتك.' } }
    ]
  }
];

export function getLocationServicePage(slug: string) {
  return locationServicePages.find((location) => location.slug === slug);
}
