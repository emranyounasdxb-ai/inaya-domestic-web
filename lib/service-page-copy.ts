export type Lang = 'en' | 'ar';
export type Pair = { title: string; text: string };
export type Pricing = { title: string; text: string; points: string[] };
export type CompareRow = { feature: string; inaya: string; other: string };

export type ServiceCopy = {
  title: string;
  meta: string;
  badge: string;
  lead: string;
  book: string;
  whatsapp: string;
  whatTitle: string;
  whatText: string;
  whyTitle: string;
  includedTitle: string;
  perfectTitle: string;
  journeyTitle: string;
  journeyText: string;
  vettingTitle: string;
  vettingText: string;
  countriesTitle: string;
  countriesText: string;
  pricingTitle: string;
  pricingText: string;
  faqTitle: string;
  relatedTitle: string;
  compareTitle: string;
  compareText: string;
  finalTitle: string;
  finalText: string;
  cards: Pair[];
  why: string[];
  included: string[];
  perfect: string[];
  journey: Pair[];
  vetting: Array<Pair & { icon: string }>;
  countries: Pair[];
  pricing: Pricing[];
  faqs: Pair[];
  comparison: CompareRow[];
  related: string[];
};

const commonComparisonEn: CompareRow[] = [
  { feature: 'Requirement review and consultation', inaya: 'Included', other: 'Often limited' },
  { feature: 'Clear duty scope before booking', inaya: 'Transparent', other: 'Sometimes unclear' },
  { feature: 'Verified service coordination', inaya: 'Structured', other: 'Varies' },
  { feature: 'Family lifestyle matching', inaya: 'Personalized', other: 'Basic matching' },
  { feature: 'Document and process guidance', inaya: 'Guided support', other: 'Not always included' },
  { feature: 'Follow-up after confirmation', inaya: 'Included', other: 'Often missing' },
  { feature: 'Replacement support as per policy', inaya: 'Package based', other: 'Not guaranteed' },
  { feature: 'UAE-wide service guidance', inaya: 'Available', other: 'Limited areas' }
];

const commonComparisonAr: CompareRow[] = [
  { feature: 'مراجعة الاحتياج والاستشارة', inaya: 'متوفرة', other: 'غالباً محدودة' },
  { feature: 'توضيح نطاق المهام قبل الحجز', inaya: 'شفاف', other: 'غير واضح أحياناً' },
  { feature: 'تنسيق خدمة موثق', inaya: 'منظم', other: 'يختلف' },
  { feature: 'مطابقة حسب نمط الأسرة', inaya: 'مخصصة', other: 'مطابقة محدودة' },
  { feature: 'إرشاد المستندات والإجراءات', inaya: 'دعم واضح', other: 'غير متوفر دائماً' },
  { feature: 'متابعة بعد التأكيد', inaya: 'متوفرة', other: 'غالباً غير موجودة' },
  { feature: 'دعم الاستبدال حسب السياسة', inaya: 'حسب الباقة', other: 'غير مضمون' },
  { feature: 'إرشاد الخدمة في الإمارات', inaya: 'متاح', other: 'مناطق محدودة' }
];

export const servicePageCopies: Record<string, Record<Lang, ServiceCopy>> = {
  'live-in-maid': {
    en: {
      title: 'Live-in Maid Services in UAE',
      meta: 'Premium live-in maid services in UAE with verified documentation support, family-focused matching and clear domestic worker placement guidance.',
      badge: 'Premium Live-in Maid Services in UAE',
      lead: 'Hire a reliable live-in maid through a clear, documented and family-focused process designed for homes across Dubai, Ajman, Sharjah, Abu Dhabi and all UAE emirates.',
      book: 'Book Consultation',
      whatsapp: 'WhatsApp Inquiry',
      whatTitle: 'What is a Live-in Maid Service?',
      whatText: 'A live-in maid provides full-time domestic support inside the home, helping with daily cleaning, laundry, kitchen routines, meal support and family care where suitable. This service is ideal for families that need consistent help every day.',
      whyTitle: 'Why Families Choose INAYA',
      includedTitle: 'Our Service Standards',
      perfectTitle: 'Perfect For',
      journeyTitle: 'How INAYA Coordinates Live-in Maid Services',
      journeyText: 'A structured evaluation framework designed to keep every service recommendation clear, trusted and suitable for your home.',
      vettingTitle: 'INAYA Vetting Matrix',
      vettingText: 'Every recommendation is supported by a clear review process designed to protect the household, clarify expectations and improve long-term suitability.',
      countriesTitle: 'Countries We Source From',
      countriesText: 'We match profiles by language, household experience, cooking style, childcare exposure and family requirements.',
      pricingTitle: 'Transparent Pricing Guidance',
      pricingText: 'Final pricing depends on service type, duration, documentation, visa status and family requirements.',
      faqTitle: 'Frequently Asked Questions',
      relatedTitle: 'Related Domestic Worker Services',
      compareTitle: 'Why INAYA is the Right Choice?',
      compareText: 'A structured, verified and transparent hiring experience that many traditional agencies simply do not offer.',
      finalTitle: 'Ready to hire a live-in maid?',
      finalText: 'Speak with INAYA today and get clear guidance for your family, documents and service plan.',
      cards: [
        { title: 'Full-time Household Support', text: 'Reliable support for daily home routines, cleaning, laundry and household care.' },
        { title: 'Clear Hiring Guidance', text: 'Step-by-step support with documents, options and joining requirements.' },
        { title: 'Premium Family Experience', text: 'Private, organized communication focused on your household needs.' }
      ],
      why: ['Licensed UAE process guidance', 'Verified documentation support', 'Dedicated family coordinator', 'Clear replacement support policy', 'Privacy-first communication', 'Fast consultation and follow-up'],
      included: ['Daily cleaning and room care', 'Laundry and ironing support', 'Kitchen assistance and meal prep', 'Childcare support where suitable', 'Elderly household assistance', 'Organized daily task planning'],
      perfect: ['Working families', 'Large villas', 'New parents', 'Elderly households', 'Busy professionals', 'Consistent household help'],
      journey: [
        { title: 'Identity', text: 'Documentation and eligibility review before service coordination.' },
        { title: 'Skill', text: 'Requirement matching based on household needs and service type.' },
        { title: 'Behaviour', text: 'Communication style and suitability are considered carefully.' },
        { title: 'Reference', text: 'Past experience and available background details are reviewed.' },
        { title: 'Matching', text: 'Service recommendation is aligned with family expectations.' }
      ],
      vetting: [
        { title: 'Identity Review', text: 'Passport, identity details and eligibility are checked before moving forward.', icon: '▣' },
        { title: 'Skills Mapping', text: 'Cleaning, laundry, cooking and family routine requirements are matched carefully.', icon: '☷' },
        { title: 'Behaviour Fit', text: 'Communication style, attitude and household suitability are reviewed.', icon: '✦' },
        { title: 'Experience Check', text: 'Past household experience and practical strengths are reviewed.', icon: '◈' },
        { title: 'Family Matching', text: 'Recommendations are aligned with home size, emirate and expectations.', icon: '◎' }
      ],
      countries: [
        { title: 'Philippines', text: 'English communication, childcare and housekeeping.' },
        { title: 'Indonesia', text: 'Housekeeping, cooking support and family care.' },
        { title: 'Nepal', text: 'Reliable domestic support and cleaning routines.' },
        { title: 'Sri Lanka', text: 'Experienced household help and meal support.' },
        { title: 'India', text: 'Cooking, cleaning and family assistance.' },
        { title: 'Kenya / Uganda', text: 'Housekeeping, childcare exposure and home support.' }
      ],
      pricing: [
        { title: 'Consultation', text: 'For families comparing live-in maid options.', points: ['Requirement review', 'Document guidance', 'Service scope clarity'] },
        { title: 'Live-in Placement', text: 'For families ready to proceed with matching.', points: ['Profile matching', 'Interview coordination', 'Joining support'] },
        { title: 'Visa Support Guidance', text: 'For families needing documentation guidance.', points: ['Document checklist', 'Process guidance', 'Follow-up support'] }
      ],
      faqs: [
        { title: 'How do I hire a live-in maid in UAE?', text: 'Share your household needs, emirate, duties and start date. INAYA then explains options and next steps.' },
        { title: 'Can a live-in maid help with cleaning and laundry?', text: 'Yes, most live-in arrangements include cleaning, laundry, ironing and household support depending on scope.' },
        { title: 'Can I request childcare experience?', text: 'Yes, you can request childcare exposure, language preference and family routine experience.' },
        { title: 'Is pricing fixed for every family?', text: 'No. Pricing depends on service model, documentation, visa status, duration and requirements.' },
        { title: 'Do you provide replacement support?', text: 'Replacement support depends on the selected package and policy explained before booking.' },
        { title: 'Which emirates do you serve?', text: 'We support families across the UAE subject to availability and requirements.' }
      ],
      comparison: commonComparisonEn,
      related: ['live-out-maid', 'full-time-maid', 'part-time-maid', 'monthly-maid-contract', 'nanny', 'maid-visa', 'maid-replacement']
    },
    ar: {
      title: 'خدمات الخادمات المقيمات في الإمارات',
      meta: 'خدمات خادمة مقيمة في الإمارات مع إرشاد واضح للتوظيف ودعم المستندات وتنسيق مناسب للأسرة.',
      badge: 'خدمات خادمة مقيمة في الإمارات',
      lead: 'استعن بخادمة مقيمة من خلال عملية واضحة ومنظمة تناسب احتياجات الأسرة في دبي وعجمان والشارقة وأبوظبي وجميع إمارات الدولة.',
      book: 'احجز استشارة',
      whatsapp: 'استفسار واتساب',
      whatTitle: 'ما هي خدمة الخادمة المقيمة؟',
      whatText: 'الخادمة المقيمة تقدم دعماً منزلياً بدوام كامل داخل المنزل يشمل التنظيف والغسيل وتنظيم المهام اليومية والمساعدة في المطبخ ورعاية الأسرة عند الحاجة.',
      whyTitle: 'لماذا تختار الأسر عناية؟',
      includedTitle: 'معايير الخدمة',
      perfectTitle: 'مناسبة لـ',
      journeyTitle: 'مصفوفة التحقق من خمس خطوات',
      journeyText: 'إطار تقييم واضح يساعد على جعل كل ترشيح مناسباً وموثوقاً للأسرة.',
      vettingTitle: 'مصفوفة التحقق في عناية',
      vettingText: 'كل ترشيح يعتمد على مراجعة منظمة تساعد على حماية الأسرة وتوضيح التوقعات وتحسين الملاءمة.',
      countriesTitle: 'الدول التي نوفر منها العمالة',
      countriesText: 'نطابق الملفات حسب اللغة والخبرة المنزلية ونمط الطبخ ورعاية الأطفال واحتياج الأسرة.',
      pricingTitle: 'إرشاد واضح للأسعار',
      pricingText: 'تختلف التكلفة حسب نوع الخدمة والمدة والمستندات وحالة التأشيرة ومتطلبات الأسرة.',
      faqTitle: 'أسئلة شائعة',
      relatedTitle: 'خدمات منزلية ذات صلة',
      compareTitle: 'لماذا عناية هي الخيار الصحيح؟',
      compareText: 'تجربة توظيف منظمة وشفافة لا توفرها العديد من الشركات التقليدية.',
      finalTitle: 'هل أنت جاهز لتوظيف خادمة مقيمة؟',
      finalText: 'تواصل مع عناية اليوم للحصول على إرشاد واضح لأسرتك وخطة الخدمة.',
      cards: [
        { title: 'دعم منزلي بدوام كامل', text: 'دعم يومي موثوق للتنظيف والغسيل وروتين المنزل.' },
        { title: 'إرشاد واضح للتوظيف', text: 'دعم خطوة بخطوة للمستندات والخيارات ومتطلبات الالتحاق.' },
        { title: 'تجربة أسرية مميزة', text: 'تواصل خاص ومنظم يركز على احتياج المنزل.' }
      ],
      why: ['إرشاد لعملية مرخصة في الإمارات', 'دعم التحقق من المستندات', 'منسق مخصص للأسرة', 'سياسة دعم للاستبدال بوضوح', 'تواصل يحافظ على الخصوصية', 'استشارة ومتابعة سريعة'],
      included: ['تنظيف يومي وترتيب الغرف', 'غسيل وكي الملابس', 'مساعدة في المطبخ والتحضير', 'دعم رعاية الأطفال عند المناسبة', 'مساعدة منزلية لكبار السن', 'تنظيم المهام اليومية'],
      perfect: ['الأسر العاملة', 'الفلل الكبيرة', 'الآباء الجدد', 'منازل كبار السن', 'المهنيون المشغولون', 'دعم منزلي ثابت'],
      journey: [
        { title: 'الهوية', text: 'مراجعة المستندات والأهلية قبل تنسيق الخدمة.' },
        { title: 'المهارة', text: 'مطابقة الاحتياج حسب المنزل ونوع الخدمة.' },
        { title: 'السلوك', text: 'مراجعة أسلوب التواصل والملاءمة بعناية.' },
        { title: 'المرجع', text: 'مراجعة الخبرة المتاحة والتفاصيل العملية.' },
        { title: 'المطابقة', text: 'تتم مواءمة الترشيح مع توقعات الأسرة.' }
      ],
      vetting: [
        { title: 'مراجعة الهوية', text: 'يتم التحقق من جواز السفر وتفاصيل الهوية والأهلية.', icon: '▣' },
        { title: 'مطابقة المهارات', text: 'تتم مطابقة التنظيف والغسيل والطبخ وروتين الأسرة.', icon: '☷' },
        { title: 'الملاءمة السلوكية', text: 'يتم أخذ التواصل والالتزام والملاءمة بعين الاعتبار.', icon: '✦' },
        { title: 'مراجعة الخبرة', text: 'تتم مراجعة الخبرات المنزلية ونقاط القوة العملية.', icon: '◈' },
        { title: 'مطابقة الأسرة', text: 'تتم مواءمة الترشيح مع المنزل والإمارة والتوقيت.', icon: '◎' }
      ],
      countries: [
        { title: 'الفلبين', text: 'تواصل إنجليزي ورعاية أطفال وتنظيم المنزل.' },
        { title: 'إندونيسيا', text: 'تنظيف ودعم الطبخ ورعاية الأسرة.' },
        { title: 'نيبال', text: 'دعم منزلي وروتين تنظيف منتظم.' },
        { title: 'سريلانكا', text: 'خبرة منزلية ودعم في الوجبات.' },
        { title: 'الهند', text: 'طبخ وتنظيف ومساعدة أسرية.' },
        { title: 'كينيا / أوغندا', text: 'تنظيف ورعاية أطفال ودعم منزلي.' }
      ],
      pricing: [
        { title: 'استشارة', text: 'للأسر التي تقارن الخيارات.', points: ['مراجعة الاحتياج', 'إرشاد المستندات', 'توضيح الخدمة'] },
        { title: 'توظيف خادمة مقيمة', text: 'للأسر الجاهزة للمطابقة.', points: ['مطابقة الملفات', 'تنسيق المقابلة', 'دعم الالتحاق'] },
        { title: 'إرشاد التأشيرة', text: 'للأسر التي تحتاج فهم المستندات.', points: ['قائمة مستندات', 'إرشاد العملية', 'متابعة الدعم'] }
      ],
      faqs: [
        { title: 'كيف أوظف خادمة مقيمة في الإمارات؟', text: 'شاركنا احتياج المنزل والإمارة والمهام المطلوبة وتاريخ البدء، ثم يوضح فريق عناية الخيارات والخطوات.' },
        { title: 'هل تساعد الخادمة المقيمة في التنظيف والغسيل؟', text: 'نعم، تشمل أغلب ترتيبات الخادمة المقيمة التنظيف والغسيل والكي والدعم المنزلي حسب نطاق الخدمة.' },
        { title: 'هل يمكن طلب خبرة في رعاية الأطفال؟', text: 'نعم، يمكن طلب خبرة في رعاية الأطفال وتفضيل اللغة وروتين الأسرة.' },
        { title: 'هل السعر ثابت لكل أسرة؟', text: 'لا، يعتمد السعر على نوع الخدمة والمستندات وحالة التأشيرة والمدة والمتطلبات.' },
        { title: 'هل توفرون دعم الاستبدال؟', text: 'يعتمد دعم الاستبدال على الباقة والسياسة التي يتم توضيحها قبل الحجز.' },
        { title: 'ما هي الإمارات التي تخدمونها؟', text: 'نقدم الإرشاد والدعم للأسر في جميع إمارات الدولة حسب التوفر والمتطلبات.' }
      ],
      comparison: commonComparisonAr,
      related: ['live-out-maid', 'full-time-maid', 'part-time-maid', 'monthly-maid-contract', 'nanny', 'maid-visa', 'maid-replacement']
    }
  },
  'live-out-maid': {
    en: {
      title: 'Live-out Maid Services in UAE',
      meta: 'Book trusted live-out maid services in UAE with flexible scheduled cleaning, laundry, kitchen help and household support across Dubai, Ajman, Sharjah and all emirates.',
      badge: 'Flexible Live-out Maid Services in UAE',
      lead: 'Hire a professional live-out maid for scheduled home cleaning, laundry, kitchen assistance and household support without the need for a full-time live-in arrangement.',
      book: 'Book Live-out Maid',
      whatsapp: 'WhatsApp Inquiry',
      whatTitle: 'What is a Live-out Maid Service?',
      whatText: 'A live-out maid visits your home according to an agreed schedule and leaves after completing the assigned duties. It is ideal for families that need reliable domestic help without accommodation inside the home.',
      whyTitle: 'Why Families Choose INAYA',
      includedTitle: 'What is Included',
      perfectTitle: 'Perfect For',
      journeyTitle: 'Our Live-out Maid Booking Process',
      journeyText: 'A clear scheduling and requirement-matching process designed for privacy, flexibility and reliable household support.',
      vettingTitle: 'INAYA Live-out Service Check',
      vettingText: 'We review timing, tasks, location and household expectations before confirming the most suitable service arrangement.',
      countriesTitle: 'Candidate Matching Guidance',
      countriesText: 'We guide families based on language needs, cleaning experience, kitchen support, childcare exposure and preferred schedule.',
      pricingTitle: 'Live-out Maid Pricing Guidance',
      pricingText: 'Pricing depends on visit frequency, hours, home size, emirate, task scope and required schedule.',
      faqTitle: 'Live-out Maid FAQs',
      relatedTitle: 'Related Maid Services',
      compareTitle: 'Why Choose INAYA for Live-out Maid Services?',
      compareText: 'A privacy-friendly and scheduled maid service experience with clear communication and organized follow-up.',
      finalTitle: 'Need flexible maid help without live-in arrangement?',
      finalText: 'Speak with INAYA today and book a live-out maid service that fits your home, schedule and family routine.',
      cards: [
        { title: 'Scheduled Home Support', text: 'Daily, weekly or monthly maid visits planned around your household routine.' },
        { title: 'No Accommodation Needed', text: 'Get domestic help without arranging a room or full-time live-in setup.' },
        { title: 'Privacy-friendly Service', text: 'A flexible option for families who prefer support only during selected hours.' }
      ],
      why: ['Flexible daily, weekly or monthly scheduling', 'Suitable for apartments, villas and family homes', 'Clear duty scope before confirmation', 'Support for cleaning, laundry and kitchen routines', 'Professional coordination and follow-up', 'UAE-wide availability subject to matching'],
      included: ['General home cleaning', 'Bedroom and living area cleaning', 'Bathroom and kitchen cleaning', 'Laundry and ironing support', 'Kitchen assistance and light meal preparation', 'Floor cleaning, dusting and organizing'],
      perfect: ['Families who do not need a live-in maid', 'Working professionals', 'Apartments and small villas', 'Weekly deep cleaning needs', 'Families who need privacy at home', 'Short-term or flexible household support'],
      journey: [
        { title: 'Review', text: 'We understand your home size, preferred timing, location and duties.' },
        { title: 'Schedule', text: 'We check availability and match service timing with your routine.' },
        { title: 'Duties', text: 'Cleaning, laundry, ironing and kitchen support are discussed clearly.' },
        { title: 'Visit', text: 'Our team confirms the visit, location and communication details.' },
        { title: 'Follow-up', text: 'We stay connected to keep the service smooth and reliable.' }
      ],
      vetting: [
        { title: 'Timing Fit', text: 'Preferred days, hours and frequency are reviewed before confirmation.', icon: '◷' },
        { title: 'Task Scope', text: 'Cleaning, laundry, ironing and kitchen support are clarified in advance.', icon: '☷' },
        { title: 'Location Check', text: 'Emirate, area and access details are reviewed for smooth coordination.', icon: '⌖' },
        { title: 'Home Type Match', text: 'Apartment, villa and family size requirements are considered carefully.', icon: '⌂' },
        { title: 'Service Follow-up', text: 'Feedback is reviewed to keep the arrangement consistent and reliable.', icon: '✓' }
      ],
      countries: [
        { title: 'Language Preference', text: 'Options can be guided by English, Arabic or other communication needs.' },
        { title: 'Cleaning Experience', text: 'Profiles are matched with routine cleaning and home organization needs.' },
        { title: 'Kitchen Support', text: 'Light meal prep and kitchen assistance can be discussed before booking.' },
        { title: 'Childcare Exposure', text: 'Families may request experience around children where suitable.' },
        { title: 'Home Size', text: 'Apartment and villa needs are reviewed before schedule confirmation.' },
        { title: 'Service Frequency', text: 'Daily, weekly, part-time and monthly plans can be discussed.' }
      ],
      pricing: [
        { title: 'Single Visit', text: 'For occasional or one-time home cleaning needs.', points: ['Task review', 'Visit timing', 'Basic cleaning support'] },
        { title: 'Weekly Schedule', text: 'For families needing regular home cleaning support.', points: ['Fixed routine', 'Laundry add-on', 'Kitchen support option'] },
        { title: 'Monthly Plan', text: 'For ongoing scheduled household help.', points: ['Regular visits', 'Priority coordination', 'Clear monthly scope'] }
      ],
      faqs: [
        { title: 'Is a live-out maid better than a live-in maid?', text: 'It depends on your household needs. Live-out is better for scheduled support without accommodation, while live-in is better for full-time daily care.' },
        { title: 'Can I book weekly cleaning?', text: 'Yes. Weekly cleaning support can be arranged depending on location, timing and availability.' },
        { title: 'Can the maid help with laundry and ironing?', text: 'Yes. Laundry and ironing can be included when discussed before booking.' },
        { title: 'Do you provide live-out maid services in Dubai and Ajman?', text: 'Yes, INAYA supports families across the UAE including Dubai, Ajman, Sharjah, Abu Dhabi and other emirates subject to availability.' },
        { title: 'Can I request the same maid every time?', text: 'Where possible, we try to maintain consistency, but it depends on schedule, availability and selected service plan.' },
        { title: 'How is pricing calculated?', text: 'Pricing depends on hours, visit frequency, home size, location and required duties.' }
      ],
      comparison: commonComparisonEn,
      related: ['live-in-maid', 'part-time-maid', 'full-time-maid', 'monthly-maid-contract', 'home-cooking', 'kitchen-helper']
    },
    ar: {
      title: 'خدمات خادمة غير مقيمة في الإمارات',
      meta: 'احجز خدمات خادمة غير مقيمة في الإمارات مع عناية للتنظيف والغسيل والمساعدة في المطبخ والمهام المنزلية في دبي وعجمان والشارقة وجميع الإمارات.',
      badge: 'خدمات خادمة غير مقيمة بجدول مرن في الإمارات',
      lead: 'احصل على خادمة غير مقيمة لزيارات مجدولة تساعدك في التنظيف والغسيل والكي والمطبخ وتنظيم المهام المنزلية دون الحاجة إلى إقامة داخل المنزل.',
      book: 'احجز خادمة غير مقيمة',
      whatsapp: 'استفسار واتساب',
      whatTitle: 'ما هي خدمة الخادمة غير المقيمة؟',
      whatText: 'الخادمة غير المقيمة تزور المنزل وفق جدول متفق عليه وتغادر بعد إنجاز المهام المطلوبة. هذه الخدمة مناسبة للأسر التي تحتاج إلى مساعدة منزلية موثوقة دون توفير إقامة داخل المنزل.',
      whyTitle: 'لماذا تختار الأسر عناية؟',
      includedTitle: 'ما الذي تشمل الخدمة؟',
      perfectTitle: 'مناسبة لـ',
      journeyTitle: 'خطوات حجز الخادمة غير المقيمة',
      journeyText: 'عملية واضحة لمطابقة الاحتياج والجدول بما يحافظ على الخصوصية والمرونة وجودة الخدمة.',
      vettingTitle: 'فحص خدمة الخادمة غير المقيمة',
      vettingText: 'نراجع التوقيت والمهام والموقع وتوقعات الأسرة قبل تأكيد ترتيب الخدمة المناسب.',
      countriesTitle: 'إرشاد مطابقة العمالة',
      countriesText: 'نرشد الأسر حسب اللغة والخبرة في التنظيف والمطبخ ورعاية الأطفال والجدول المطلوب.',
      pricingTitle: 'إرشاد أسعار الخادمة غير المقيمة',
      pricingText: 'تختلف التكلفة حسب عدد الزيارات والساعات وحجم المنزل والإمارة ونوع المهام والجدول المطلوب.',
      faqTitle: 'أسئلة خادمة غير مقيمة',
      relatedTitle: 'خدمات خادمات ذات صلة',
      compareTitle: 'لماذا تختار عناية للخادمة غير المقيمة؟',
      compareText: 'تجربة خدمة مرنة ومنظمة تراعي خصوصية المنزل مع تواصل واضح ومتابعة مناسبة.',
      finalTitle: 'هل تحتاج إلى خادمة مرنة دون إقامة داخل المنزل؟',
      finalText: 'تواصل مع عناية اليوم واحجز خدمة خادمة غير مقيمة تناسب منزلك وجدول أسرتك.',
      cards: [
        { title: 'دعم منزلي مجدول', text: 'زيارات يومية أو أسبوعية أو شهرية حسب روتين المنزل.' },
        { title: 'دون الحاجة إلى إقامة', text: 'احصل على مساعدة منزلية دون تجهيز غرفة أو ترتيب إقامة داخلية.' },
        { title: 'خدمة تحافظ على الخصوصية', text: 'خيار مرن للأسر التي تفضل الدعم في ساعات محددة فقط.' }
      ],
      why: ['جداول مرنة يومية أو أسبوعية أو شهرية', 'مناسبة للشقق والفلل والمنازل العائلية', 'توضيح نطاق الخدمة قبل التأكيد', 'دعم في التنظيف والغسيل والمطبخ', 'تنسيق احترافي ومتابعة واضحة', 'توفر الخدمة في الإمارات حسب المطابقة'],
      included: ['تنظيف عام للمنزل', 'تنظيف غرف النوم والمعيشة', 'تنظيف الحمامات والمطبخ', 'دعم الغسيل والكي', 'مساعدة في المطبخ وتحضير خفيف', 'تنظيف الأرضيات وإزالة الغبار والترتيب'],
      perfect: ['الأسر التي لا تحتاج إلى خادمة مقيمة', 'الموظفين والمهنيين المشغولين', 'الشقق والفلل الصغيرة', 'التنظيف الأسبوعي أو الدوري', 'الأسر التي تفضل الخصوصية', 'الدعم المنزلي المرن أو قصير المدى'],
      journey: [
        { title: 'المراجعة', text: 'نفهم حجم المنزل والتوقيت المناسب والموقع والمهام المطلوبة.' },
        { title: 'الجدول', text: 'نراجع التوفر وننسق موعد الخدمة بما يناسب روتين الأسرة.' },
        { title: 'المهام', text: 'يتم توضيح التنظيف والغسيل والكي والمطبخ قبل الحجز.' },
        { title: 'الزيارة', text: 'يؤكد فريقنا تفاصيل الزيارة والموقع ووسيلة التواصل.' },
        { title: 'المتابعة', text: 'نتابع معك لضمان تجربة منظمة وموثوقة.' }
      ],
      vetting: [
        { title: 'ملاءمة التوقيت', text: 'نراجع الأيام والساعات وعدد الزيارات قبل التأكيد.', icon: '◷' },
        { title: 'نطاق المهام', text: 'يتم توضيح التنظيف والغسيل والكي والمطبخ مسبقاً.', icon: '☷' },
        { title: 'مراجعة الموقع', text: 'تتم مراجعة الإمارة والمنطقة وتفاصيل الوصول للتنسيق السلس.', icon: '⌖' },
        { title: 'مطابقة نوع المنزل', text: 'نراعي احتياج الشقة أو الفيلا وحجم الأسرة.', icon: '⌂' },
        { title: 'متابعة الخدمة', text: 'نراجع الملاحظات للحفاظ على ترتيب ثابت وموثوق.', icon: '✓' }
      ],
      countries: [
        { title: 'تفضيل اللغة', text: 'يمكن الإرشاد حسب الحاجة للإنجليزية أو العربية أو غيرها.' },
        { title: 'خبرة التنظيف', text: 'تتم المطابقة حسب احتياج التنظيف والتنظيم.' },
        { title: 'دعم المطبخ', text: 'يمكن مناقشة التحضير الخفيف والمساعدة في المطبخ قبل الحجز.' },
        { title: 'خبرة رعاية الأطفال', text: 'يمكن طلب خبرة حول الأطفال عند الحاجة.' },
        { title: 'حجم المنزل', text: 'تتم مراجعة احتياج الشقة أو الفيلا قبل تأكيد الجدول.' },
        { title: 'عدد الزيارات', text: 'يمكن مناقشة الخطط اليومية أو الأسبوعية أو الشهرية.' }
      ],
      pricing: [
        { title: 'زيارة واحدة', text: 'للتنظيف العرضي أو الحاجة المؤقتة.', points: ['مراجعة المهام', 'تحديد وقت الزيارة', 'دعم تنظيف أساسي'] },
        { title: 'جدول أسبوعي', text: 'للأسر التي تحتاج تنظيفاً منتظماً.', points: ['روتين ثابت', 'إضافة الغسيل', 'خيار دعم المطبخ'] },
        { title: 'خطة شهرية', text: 'للدعم المنزلي المجدول بشكل مستمر.', points: ['زيارات منتظمة', 'تنسيق أولوية', 'نطاق شهري واضح'] }
      ],
      faqs: [
        { title: 'هل الخادمة غير المقيمة أفضل من الخادمة المقيمة؟', text: 'يعتمد ذلك على احتياج الأسرة. الخادمة غير المقيمة مناسبة للدعم المجدول دون إقامة، بينما الخادمة المقيمة مناسبة للدعم اليومي الكامل.' },
        { title: 'هل يمكن حجز تنظيف أسبوعي؟', text: 'نعم، يمكن ترتيب زيارات أسبوعية حسب الموقع والوقت وتوفر العمالة.' },
        { title: 'هل تساعد الخادمة في الغسيل والكي؟', text: 'نعم، يمكن إضافة الغسيل والكي ضمن المهام عند توضيح ذلك قبل الحجز.' },
        { title: 'هل تقدمون الخدمة في دبي وعجمان؟', text: 'نعم، تقدم عناية خدماتها في جميع إمارات الدولة بما في ذلك دبي وعجمان والشارقة وأبوظبي حسب التوفر.' },
        { title: 'هل يمكن طلب نفس الخادمة في كل زيارة؟', text: 'نحاول الحفاظ على نفس الخادمة قدر الإمكان، لكن ذلك يعتمد على الجدول والتوفر ونوع الخطة المختارة.' },
        { title: 'كيف يتم حساب السعر؟', text: 'يعتمد السعر على عدد الساعات والزيارات وحجم المنزل والموقع والمهام المطلوبة.' }
      ],
      comparison: commonComparisonAr,
      related: ['live-in-maid', 'part-time-maid', 'full-time-maid', 'monthly-maid-contract', 'home-cooking', 'kitchen-helper']
    }
  }
};
