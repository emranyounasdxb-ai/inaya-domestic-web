import { services, type Service } from './services';
import type { CompareRow, Lang, ServiceCopy } from './service-page-copy';

const comparisonEn: CompareRow[] = [
  { feature: 'Requirement review and consultation', inaya: 'Included', other: 'Often limited' },
  { feature: 'Clear duty scope before booking', inaya: 'Transparent', other: 'Sometimes unclear' },
  { feature: 'Verified service coordination', inaya: 'Structured', other: 'Varies' },
  { feature: 'Family lifestyle matching', inaya: 'Personalized', other: 'Basic matching' },
  { feature: 'Document and process guidance', inaya: 'Guided support', other: 'Not always included' },
  { feature: 'Follow-up after confirmation', inaya: 'Included', other: 'Often missing' },
  { feature: 'Replacement support as per policy', inaya: 'Package based', other: 'Not guaranteed' },
  { feature: 'UAE-wide service guidance', inaya: 'Available', other: 'Limited areas' }
];

const comparisonAr: CompareRow[] = [
  { feature: 'مراجعة الاحتياج والاستشارة', inaya: 'متوفرة', other: 'غالباً محدودة' },
  { feature: 'توضيح نطاق المهام قبل الحجز', inaya: 'شفاف', other: 'غير واضح أحياناً' },
  { feature: 'تنسيق خدمة موثق', inaya: 'منظم', other: 'يختلف' },
  { feature: 'مطابقة حسب نمط الأسرة', inaya: 'مخصصة', other: 'مطابقة محدودة' },
  { feature: 'إرشاد المستندات والإجراءات', inaya: 'دعم واضح', other: 'غير متوفر دائماً' },
  { feature: 'متابعة بعد التأكيد', inaya: 'متوفرة', other: 'غالباً غير موجودة' },
  { feature: 'دعم الاستبدال حسب السياسة', inaya: 'حسب الباقة', other: 'غير مضمون' },
  { feature: 'إرشاد الخدمة في الإمارات', inaya: 'متاح', other: 'مناطق محدودة' }
];

const relatedGroups = [
  ['live-in-maid', 'live-out-maid', 'housemaid', 'housekeeping', 'full-time-maid', 'part-time-maid', 'monthly-maid-contract', 'on-demand-domestic-help', 'experienced-maid'],
  ['nanny', 'executive-nannies', 'babysitting', 'newborn-care', 'housemaid', 'live-in-maid'],
  ['home-cooking', 'private-chefs', 'personal-chef', 'kitchen-helper', 'house-managers', 'bespoke-household-management'],
  ['elder-care', 'patient-care', 'companion-care', 'housemaid', 'live-in-maid'],
  ['recruitment', 'maid-visa', 'maid-replacement', 'sponsorship-transfer', 'background-verification', 'experienced-maid'],
  ['bespoke-household-management', 'house-managers', 'floral-styling', 'relocation-support', 'pet-care-specialists', 'event-staffing']
];

function relatedFor(slug: string) {
  const serviceSlugs = services.map((service) => service.slug);
  const group = relatedGroups.find((items) => items.includes(slug)) ?? serviceSlugs;
  return [...group, ...serviceSlugs]
    .filter((item, index, list) => item !== slug && serviceSlugs.includes(item) && list.indexOf(item) === index)
    .slice(0, 7);
}

function titleFor(service: Service, lang: Lang) {
  const name = service.name[lang];
  return lang === 'ar' ? `${name} في الإمارات` : `${name} in UAE`;
}

function metaFor(service: Service, lang: Lang) {
  const name = service.name[lang];
  if (lang === 'ar') {
    return `${name} في الإمارات من عناية مع استشارة واضحة، تنسيق موثوق، دعم مستندات ومتابعة منظمة للأسر في دبي وعجمان والشارقة وأبوظبي.`;
  }
  return `${name} in UAE by INAYA with clear consultation, trusted coordination, document guidance and organized follow-up for families in Dubai, Ajman, Sharjah and Abu Dhabi.`;
}

function copyFor(service: Service, lang: Lang): ServiceCopy {
  const name = service.name[lang];
  const short = service.short[lang];
  const description = service.description[lang];
  const isArabic = lang === 'ar';

  if (isArabic) {
    return {
      title: titleFor(service, lang),
      meta: metaFor(service, lang),
      badge: `${name} موثوقة في الإمارات`,
      lead: `${description} تقدم عناية تجربة منظمة للأسر في دبي وعجمان والشارقة وأبوظبي وجميع إمارات الدولة مع تواصل واضح ومتابعة مناسبة.`,
      book: 'احجز استشارة',
      whatsapp: 'استفسار واتساب',
      whatTitle: `ما هي ${name}؟`,
      whatText: `${description} يتم ترتيب الخدمة بعد مراجعة احتياج الأسرة ونطاق المهام والجدول المناسب، مع إرشاد واضح للخطوات والمستندات والمتابعة حسب نوع الخدمة.`,
      whyTitle: 'لماذا تختار عناية؟',
      includedTitle: 'ما الذي يمكن أن تشمل الخدمة؟',
      perfectTitle: 'مناسبة لـ',
      journeyTitle: 'طريقة العمل في عناية',
      journeyText: 'خطوات واضحة تساعد الأسرة على فهم الخيارات، تحديد نطاق الخدمة، وتأكيد الترتيب المناسب بثقة.',
      countriesTitle: 'إرشاد مطابقة العمالة',
      countriesText: 'يمكن الإرشاد حسب اللغة والخبرة المنزلية ونمط الأسرة ونوع الخدمة والتوفر داخل الإمارات.',
      pricingTitle: 'إرشاد واضح للأسعار',
      pricingText: 'تختلف التكلفة حسب نوع الخدمة والمدة والمهام والموقع والمستندات وحالة التأشيرة ومتطلبات الأسرة.',
      faqTitle: 'أسئلة شائعة',
      relatedTitle: 'خدمات ذات صلة',
      compareTitle: 'لماذا عناية هي الخيار المناسب؟',
      compareText: 'تجربة منظمة وشفافة تساعد الأسر على اختيار الخدمة المنزلية المناسبة بثقة ووضوح.',
      finalTitle: `هل تحتاج إلى ${name}؟`,
      finalText: 'تواصل مع عناية اليوم للحصول على استشارة واضحة وخطة خدمة تناسب منزلك وأسلوب حياة أسرتك.',
      cards: [
        { title: 'مراجعة الاحتياج', text: `نبدأ بفهم احتياج الأسرة والمهام المطلوبة قبل تنسيق ${name}.` },
        { title: 'تنسيق موثوق', text: 'نوضح الخيارات والخطوات والتوفر بطريقة منظمة ومريحة.' },
        { title: 'متابعة بعد التأكيد', text: 'يبقى فريقنا متاحاً للمتابعة والدعم حسب سياسة الخدمة.' }
      ],
      why: ['استشارة واضحة قبل الحجز', 'تنسيق مناسب للأسر في الإمارات', 'توضيح نطاق المهام والتوقعات', 'إرشاد المستندات عند الحاجة', 'تواصل منظم وسريع', 'متابعة بعد تأكيد الخدمة'],
      included: [short, 'مراجعة احتياج الأسرة', 'تحديد نطاق المهام بوضوح', 'إرشاد الجدول أو مدة الخدمة', 'تنسيق الخطوات التالية', 'دعم المتابعة حسب الباقة'],
      perfect: ['الأسر المشغولة', 'المنازل والفيلات والشقق', 'العائلات الجديدة في الإمارات', 'من يحتاج إلى دعم موثوق', 'الأسر التي تريد عملية واضحة', 'العملاء الباحثون عن خدمة منظمة'],
      journey: [
        { title: 'الاستشارة', text: 'نفهم احتياج الأسرة والموقع والجدول ونوع الدعم المطلوب.' },
        { title: 'نطاق الخدمة', text: 'نوضح المهام والمسؤوليات والتوقعات قبل التأكيد.' },
        { title: 'المطابقة', text: 'يتم توجيه الأسرة نحو الخيار الأنسب حسب التوفر والمتطلبات.' },
        { title: 'التأكيد', text: 'نرتب الخطوات النهائية ونوضح المستندات أو التفاصيل المطلوبة.' },
        { title: 'المتابعة', text: 'نتابع التجربة بعد التأكيد للحفاظ على خدمة منظمة.' }
      ],
      countries: [
        { title: 'تفضيل اللغة', text: 'يمكن مراعاة الإنجليزية أو العربية أو لغات أخرى حسب التوفر.' },
        { title: 'خبرة منزلية', text: 'ننظر إلى الخبرة المناسبة للمهام المطلوبة داخل المنزل.' },
        { title: 'نمط الأسرة', text: 'نراعي حجم المنزل وروتين الأسرة ومستوى الخصوصية.' },
        { title: 'نوع الخدمة', text: 'تختلف المطابقة بين الخادمة والمربية والطاهي ومدير المنزل والدعم الإداري.' },
        { title: 'الموقع داخل الإمارات', text: 'يتم تنسيق الخدمة حسب الإمارة والمنطقة والتوفر.' },
        { title: 'خطة البدء', text: 'نوضح الخطوات والجدول قبل تأكيد الترتيب النهائي.' }
      ],
      pricing: [
        { title: 'استشارة', text: 'للأسر التي تريد مقارنة الخيارات وفهم الخطوات.', points: ['مراجعة الاحتياج', 'توضيح نطاق الخدمة', 'إرشاد أولي للأسعار'] },
        { title: 'تنسيق الخدمة', text: 'للأسر الجاهزة لاختيار الترتيب المناسب.', points: ['مطابقة الخدمة', 'تنسيق التوفر', 'متابعة قبل البدء'] },
        { title: 'دعم المستندات', text: 'للخدمات التي تتطلب إرشاداً إضافياً في الإجراءات.', points: ['قائمة المتطلبات', 'إرشاد الخطوات', 'متابعة منظمة'] }
      ],
      faqs: [
        { title: `كيف أحجز ${name}؟`, text: 'يمكنك مشاركة احتياج المنزل والموقع والوقت المطلوب، ثم يوضح فريق عناية الخيارات والخطوات التالية.' },
        { title: 'هل الخدمة متوفرة في دبي وعجمان؟', text: 'نقدم الإرشاد والخدمة في دبي وعجمان والشارقة وأبوظبي وباقي الإمارات حسب التوفر.' },
        { title: 'هل يمكن تحديد المهام قبل الحجز؟', text: 'نعم، يتم توضيح نطاق المهام والتوقعات قبل تأكيد الخدمة.' },
        { title: 'هل الأسعار ثابتة؟', text: 'تختلف الأسعار حسب نوع الخدمة والمدة والموقع والمستندات والمتطلبات.' },
        { title: 'هل توجد متابعة بعد التأكيد؟', text: 'نعم، تقدم عناية متابعة منظمة حسب نوع الخدمة والباقة المختارة.' },
        { title: 'هل يمكن طلب لغة أو خبرة معينة؟', text: 'يمكن مشاركة تفضيلات اللغة والخبرة، وسيتم الإرشاد حسب التوفر والمطابقة المناسبة.' }
      ],
      comparison: comparisonAr,
      related: relatedFor(service.slug)
    };
  }

  return {
    title: titleFor(service, lang),
    meta: metaFor(service, lang),
    badge: `Trusted ${name} in UAE`,
    lead: `${description} INAYA coordinates a clear and family-focused experience across Dubai, Ajman, Sharjah, Abu Dhabi and all UAE emirates.`,
    book: 'Book Consultation',
    whatsapp: 'WhatsApp Inquiry',
    whatTitle: `What are ${name}?`,
    whatText: `${description} The service is coordinated after reviewing your household needs, preferred duty scope, schedule and next steps so your family can move forward with clarity.`,
    whyTitle: 'Why Families Choose INAYA',
    includedTitle: 'What This Service Can Include',
    perfectTitle: 'Perfect For',
    journeyTitle: 'How INAYA Coordinates This Service',
    journeyText: 'A clear process that helps families compare options, define the service scope and confirm the right arrangement with confidence.',
    countriesTitle: 'Candidate Matching Guidance',
    countriesText: 'Families can be guided by language, household experience, family routine, service type and availability across the UAE.',
    pricingTitle: 'Transparent Pricing Guidance',
    pricingText: 'Final pricing depends on service type, duration, duties, location, documentation, visa status and family requirements.',
    faqTitle: 'Frequently Asked Questions',
    relatedTitle: 'Related Services',
    compareTitle: 'Why Choose INAYA?',
    compareText: 'A structured and transparent experience designed to help families choose trusted home support with clarity.',
    finalTitle: `Ready to arrange ${name}?`,
    finalText: 'Speak with INAYA today and get clear guidance for a service plan that fits your home, schedule and family lifestyle.',
    cards: [
      { title: 'Requirement Review', text: `We understand your household needs and expected duties before coordinating ${name}.` },
      { title: 'Trusted Coordination', text: 'Our team explains options, availability, steps and service scope in a clear way.' },
      { title: 'Follow-up Support', text: 'INAYA keeps communication organized before and after confirmation according to the service policy.' }
    ],
    why: ['Clear consultation before booking', 'UAE-wide family support guidance', 'Defined duty scope and expectations', 'Document guidance where required', 'Organized communication and follow-up', 'Service matching based on lifestyle'],
    included: [short, 'Household requirement review', 'Clear duty and schedule guidance', 'Service coordination and next steps', 'Document guidance when required', 'Follow-up support according to package'],
    perfect: ['Busy families', 'Apartments, villas and family homes', 'New UAE households', 'Families needing trusted support', 'Clients wanting a clear process', 'Premium home service requirements'],
    journey: [
      { title: 'Consultation', text: 'We review your household needs, location, timing and preferred support style.' },
      { title: 'Service Scope', text: 'Duties, expectations and schedule are clarified before confirmation.' },
      { title: 'Matching', text: 'Your family is guided toward the most suitable option based on availability and requirements.' },
      { title: 'Confirmation', text: 'Final steps, documents or service details are explained clearly.' },
      { title: 'Follow-up', text: 'We follow up to keep the arrangement organized and comfortable.' }
    ],
    countries: [
      { title: 'Language Preference', text: 'English, Arabic or other communication preferences can be discussed.' },
      { title: 'Household Experience', text: 'Experience is considered according to your home duties and service type.' },
      { title: 'Family Routine', text: 'Home size, family routine and privacy expectations are reviewed.' },
      { title: 'Service Type', text: 'Matching differs for maids, nannies, chefs, house managers and support services.' },
      { title: 'UAE Location', text: 'Service coordination depends on emirate, area and availability.' },
      { title: 'Start Plan', text: 'Next steps and timing are clarified before final confirmation.' }
    ],
    pricing: [
      { title: 'Consultation', text: 'For families comparing options and understanding the process.', points: ['Requirement review', 'Service scope clarity', 'Initial pricing guidance'] },
      { title: 'Service Coordination', text: 'For families ready to choose a suitable arrangement.', points: ['Service matching', 'Availability coordination', 'Pre-start follow-up'] },
      { title: 'Document Support', text: 'For services requiring additional process guidance.', points: ['Requirement checklist', 'Step guidance', 'Organized follow-up'] }
    ],
    faqs: [
      { title: `How do I book ${name}?`, text: 'Share your household needs, location, preferred timing and duties. INAYA will explain the suitable options and next steps.' },
      { title: 'Is this service available in Dubai and Ajman?', text: 'INAYA supports families in Dubai, Ajman, Sharjah, Abu Dhabi and other UAE emirates subject to availability.' },
      { title: 'Can duties be agreed before booking?', text: 'Yes. The service scope, expectations and preferred schedule are discussed before confirmation.' },
      { title: 'Is pricing fixed?', text: 'Pricing depends on service type, duration, location, duties, documentation and family requirements.' },
      { title: 'Do you provide follow-up after confirmation?', text: 'Yes. INAYA provides organized follow-up according to the service type and selected package.' },
      { title: 'Can I request a language or experience preference?', text: 'You can share language, nationality or experience preferences, and our team will guide you according to suitable availability.' }
    ],
    comparison: comparisonEn,
    related: relatedFor(service.slug)
  };
}

export const servicePageCopiesGenerated = services.reduce<Record<string, Record<Lang, ServiceCopy>>>((copies, service) => {
  copies[service.slug] = {
    en: copyFor(service, 'en'),
    ar: copyFor(service, 'ar')
  };
  return copies;
}, {});
