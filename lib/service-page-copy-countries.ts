import type { Lang, ServiceCopy } from './service-page-copy';

const compare = [
  { feature: 'Profile matching', inaya: 'Guided', other: 'Basic' },
  { feature: 'Language preference', inaya: 'Reviewed', other: 'Varies' },
  { feature: 'Experience check', inaya: 'Included', other: 'Limited' },
  { feature: 'Family suitability', inaya: 'Prioritized', other: 'Not always' }
];

export const servicePageCopiesCountry: Record<string, Record<Lang, ServiceCopy>> = {
  'countries-we-source-from': {
    en: {
      title: 'Countries We Source Domestic Workers From',
      meta: 'Explore the countries INAYA sources domestic workers from including the Philippines, Indonesia, Nepal, Sri Lanka, India, Kenya and Uganda.',
      badge: 'Domestic Worker Source Countries',
      lead: 'INAYA helps UAE families explore domestic worker options from multiple countries based on individual experience, communication, household skills, preferred duties and legal availability.',
      book: 'Book Consultation',
      whatsapp: 'WhatsApp Inquiry',
      whatTitle: 'Why Source Country Matters',
      whatText: 'Different families may have preferences for language, cooking style, childcare exposure, elderly support, housekeeping experience or previous UAE and GCC experience. INAYA helps families understand available options clearly.',
      whyTitle: 'How INAYA Helps You Choose',
      includedTitle: 'Best Matching Factors',
      perfectTitle: 'Source Country Guidance Is Useful For',
      journeyTitle: 'Profile Matching Process',
      journeyText: 'We guide families by matching individual worker experience with household needs, not nationality alone.',
      vettingTitle: 'Important Matching Note',
      vettingText: 'Source country is only one part of selection. The right domestic worker should be matched by skills, experience, documents, attitude, availability and family suitability.',
      countriesTitle: 'Countries We Commonly Support',
      countriesText: 'Availability depends on current profiles, documentation and legal status.',
      pricingTitle: 'Consultation Guidance',
      pricingText: 'Final cost depends on service type, worker profile, visa status, documentation and family requirements.',
      faqTitle: 'Source Country FAQs',
      relatedTitle: 'Related Services',
      compareTitle: 'Why Choose INAYA?',
      compareText: 'We focus on profile suitability, clear expectations and guided selection.',
      finalTitle: 'Not sure which profile is right for your family?',
      finalText: 'Speak with INAYA and get guided matching based on your home, language preference, duties and family routine.',
      cards: [
        { title: 'Profile-first Matching', text: 'Recommendations are based on experience, documents and family needs.' },
        { title: 'Language and Skill Guidance', text: 'We review communication, cleaning, cooking and childcare expectations.' },
        { title: 'UAE Family Support', text: 'Options are explained clearly before the family proceeds.' }
      ],
      why: ['Reviews home size and household routine', 'Understands language and communication needs', 'Discusses cleaning, laundry, cooking and childcare duties', 'Explains live-in, live-out and full-time options', 'Guides documents and visa status', 'Matches profiles to family expectations'],
      included: ['Previous household experience', 'Childcare or eldercare exposure', 'Cooking and kitchen support', 'Cleaning and laundry skills', 'Language and communication', 'Availability and legal documentation'],
      perfect: ['Families comparing worker profiles', 'Homes with language preferences', 'Families needing childcare exposure', 'Households needing cooking support', 'Families seeking UAE or GCC experience', 'Clients who want guided selection'],
      journey: [
        { title: 'Needs Review', text: 'We review the home, duties, schedule and language preference.' },
        { title: 'Country Options', text: 'Available profile options are explained clearly.' },
        { title: 'Skill Matching', text: 'Experience is matched with cleaning, cooking or childcare needs.' },
        { title: 'Documentation', text: 'Visa status and documents are discussed before confirmation.' },
        { title: 'Family Fit', text: 'The final direction is based on overall household suitability.' }
      ],
      vetting: [
        { title: 'Experience', text: 'Past household experience is reviewed.', icon: '01' },
        { title: 'Language', text: 'Communication preference is considered.', icon: '02' },
        { title: 'Skills', text: 'Cleaning, cooking and care skills are discussed.', icon: '03' },
        { title: 'Documents', text: 'Documentation and status are considered.', icon: '04' },
        { title: 'Family Fit', text: 'Suitability for the household is prioritized.', icon: '05' }
      ],
      countries: [
        { title: 'Philippines', text: 'English communication, childcare exposure and housekeeping.' },
        { title: 'Indonesia', text: 'Housekeeping, family care and kitchen support.' },
        { title: 'Nepal', text: 'Reliable cleaning routines and home organization.' },
        { title: 'Sri Lanka', text: 'Housekeeping, meal support and family assistance.' },
        { title: 'India', text: 'Cooking support, cleaning and language flexibility.' },
        { title: 'Kenya / Uganda', text: 'English communication, childcare exposure and home support.' }
      ],
      pricing: [
        { title: 'Profile Consultation', text: 'For families comparing worker profiles.', points: ['Need review', 'Country options', 'Profile guidance'] },
        { title: 'Service Matching', text: 'For families ready to proceed.', points: ['Skill matching', 'Document guidance', 'Service direction'] },
        { title: 'Visa Guidance', text: 'For documentation clarity.', points: ['Status review', 'Process guidance', 'Follow-up support'] }
      ],
      faqs: [
        { title: 'Can I choose the nationality of a domestic worker?', text: 'You may share a preference, but final availability depends on profiles, documentation, visa status and suitability.' },
        { title: 'Which country is best for a maid in the UAE?', text: 'There is no single best country. The best choice depends on individual experience, skills, communication and household needs.' },
        { title: 'Can I request English-speaking domestic workers?', text: 'Yes, language preference can be discussed during profile matching.' },
        { title: 'Can I request cooking or childcare experience?', text: 'Yes, cooking support, childcare exposure and other household skills can be discussed before matching.' },
        { title: 'Does INAYA support UAE-wide placement?', text: 'Yes, support is available across the UAE subject to availability and documentation.' },
        { title: 'Is nationality the only selection factor?', text: 'No. Individual skills, experience, attitude and family suitability are more important.' }
      ],
      comparison: compare,
      related: ['live-in-maid', 'full-time-maid', 'nanny', 'maid-visa', 'recruitment', 'background-verification']
    },
    ar: {
      title: 'الدول التي نوفر منها العمالة المنزلية',
      meta: 'تعرّف على الدول التي توفر منها عناية العمالة المنزلية مثل الفلبين وإندونيسيا ونيبال وسريلانكا والهند وكينيا وأوغندا.',
      badge: 'الدول التي نوفر منها العمالة المنزلية',
      lead: 'تساعد عناية الأسر في الإمارات على استكشاف خيارات العمالة المنزلية من عدة دول حسب الخبرة الفردية والتواصل والمهارات المنزلية والمهام المطلوبة والتوفر القانوني.',
      book: 'احجز استشارة',
      whatsapp: 'استفسار واتساب',
      whatTitle: 'لماذا تعتبر دولة المصدر مهمة؟',
      whatText: 'قد تختلف تفضيلات الأسر حسب اللغة ونمط الطبخ وخبرة رعاية الأطفال ودعم كبار السن وخبرة التنظيف أو الخبرة السابقة في الإمارات والخليج.',
      whyTitle: 'كيف تساعدك عناية في الاختيار؟',
      includedTitle: 'أهم عوامل المطابقة',
      perfectTitle: 'مناسبة لـ',
      journeyTitle: 'خطوات مطابقة الملف',
      journeyText: 'نرشد الأسر من خلال مطابقة خبرة العامل الفردية مع احتياج المنزل وليس حسب الجنسية فقط.',
      vettingTitle: 'ملاحظة مهمة عن المطابقة',
      vettingText: 'دولة المصدر هي جزء واحد فقط من الاختيار. المطابقة الصحيحة تعتمد على المهارات والخبرة والمستندات والسلوك والتوفر وملاءمة الأسرة.',
      countriesTitle: 'الدول التي ندعمها عادة',
      countriesText: 'يعتمد التوفر على الملفات الحالية والمستندات والحالة القانونية.',
      pricingTitle: 'إرشاد الاستشارة',
      pricingText: 'تعتمد التكلفة على نوع الخدمة وملف العامل وحالة التأشيرة والمستندات ومتطلبات الأسرة.',
      faqTitle: 'أسئلة الدول والمطابقة',
      relatedTitle: 'خدمات ذات صلة',
      compareTitle: 'لماذا تختار عناية؟',
      compareText: 'نركز على ملاءمة الملف ووضوح التوقعات والاختيار الموجه.',
      finalTitle: 'لست متأكداً من الملف المناسب لأسرتك؟',
      finalText: 'تواصل مع عناية للحصول على مطابقة حسب منزلك واللغة المطلوبة والمهام وروتين الأسرة.',
      cards: [
        { title: 'مطابقة حسب الملف', text: 'الترشيح يعتمد على الخبرة والمستندات واحتياج الأسرة.' },
        { title: 'إرشاد اللغة والمهارات', text: 'نراجع التواصل والتنظيف والطبخ ورعاية الأطفال.' },
        { title: 'دعم أسر الإمارات', text: 'يتم توضيح الخيارات قبل المتابعة.' }
      ],
      why: ['مراجعة حجم المنزل وروتين الأسرة', 'فهم اللغة المفضلة واحتياج التواصل', 'مناقشة التنظيف والغسيل والطبخ ورعاية الأطفال', 'توضيح خيارات المقيمة وغير المقيمة والدوام الكامل', 'إرشاد المستندات وحالة التأشيرة', 'مطابقة الملف مع توقعات الأسرة'],
      included: ['الخبرة المنزلية السابقة', 'خبرة رعاية الأطفال أو كبار السن', 'الطبخ ودعم المطبخ', 'مهارات التنظيف والغسيل', 'اللغة والتواصل', 'التوفر والمستندات القانونية'],
      perfect: ['الأسر التي تقارن الملفات', 'منازل لديها تفضيل لغة', 'أسر تحتاج خبرة أطفال', 'منازل تحتاج دعم الطبخ', 'أسر تطلب خبرة خليجية', 'عملاء يريدون اختياراً موجهاً'],
      journey: [
        { title: 'مراجعة', text: 'نراجع المنزل والمهام والجدول واللغة المطلوبة.' },
        { title: 'الخيارات', text: 'يتم توضيح خيارات الملفات المتاحة.' },
        { title: 'المهارات', text: 'تتم مطابقة الخبرة مع التنظيف أو الطبخ أو الأطفال.' },
        { title: 'المستندات', text: 'تتم مناقشة التأشيرة والمستندات قبل التأكيد.' },
        { title: 'الملاءمة', text: 'الاتجاه النهائي يعتمد على ملاءمة الأسرة.' }
      ],
      vetting: [
        { title: 'الخبرة', text: 'تتم مراجعة الخبرة المنزلية السابقة.', icon: '01' },
        { title: 'اللغة', text: 'تتم مراعاة تفضيل التواصل.', icon: '02' },
        { title: 'المهارات', text: 'تتم مناقشة التنظيف والطبخ والرعاية.', icon: '03' },
        { title: 'المستندات', text: 'تؤخذ المستندات والحالة بعين الاعتبار.', icon: '04' },
        { title: 'ملاءمة الأسرة', text: 'يتم إعطاء الأولوية لملاءمة المنزل.', icon: '05' }
      ],
      countries: [
        { title: 'الفلبين', text: 'تواصل إنجليزي وخبرة أطفال وتنظيم المنزل.' },
        { title: 'إندونيسيا', text: 'تنظيف ورعاية أسرية ودعم المطبخ.' },
        { title: 'نيبال', text: 'روتين تنظيف موثوق وتنظيم المنزل.' },
        { title: 'سريلانكا', text: 'تنظيف ودعم الوجبات ومساعدة أسرية.' },
        { title: 'الهند', text: 'دعم الطبخ والتنظيف ومرونة لغوية.' },
        { title: 'كينيا / أوغندا', text: 'تواصل إنجليزي وخبرة أطفال ودعم منزلي.' }
      ],
      pricing: [
        { title: 'استشارة الملفات', text: 'للأسر التي تقارن ملفات العمالة.', points: ['مراجعة الاحتياج', 'خيارات الدول', 'إرشاد الملف'] },
        { title: 'مطابقة الخدمة', text: 'للأسر الجاهزة للمتابعة.', points: ['مطابقة المهارات', 'إرشاد المستندات', 'توجيه الخدمة'] },
        { title: 'إرشاد التأشيرة', text: 'لوضوح المستندات.', points: ['مراجعة الحالة', 'إرشاد العملية', 'متابعة الدعم'] }
      ],
      faqs: [
        { title: 'هل يمكن اختيار جنسية العامل المنزلي؟', text: 'يمكنك مشاركة التفضيل، لكن التوفر النهائي يعتمد على الملفات والمستندات وحالة التأشيرة والملاءمة.' },
        { title: 'ما هي أفضل دولة لتوظيف خادمة في الإمارات؟', text: 'لا توجد دولة واحدة هي الأفضل. الاختيار يعتمد على خبرة العامل ومهاراته وتواصله واحتياج الأسرة.' },
        { title: 'هل يمكن طلب عاملة تتحدث الإنجليزية؟', text: 'نعم، يمكن مناقشة تفضيل اللغة أثناء مطابقة الملفات.' },
        { title: 'هل يمكن طلب خبرة في الطبخ أو رعاية الأطفال؟', text: 'نعم، يمكن مناقشة الطبخ ورعاية الأطفال والمهارات المنزلية قبل المطابقة.' },
        { title: 'هل تدعم عناية الأسر في جميع الإمارات؟', text: 'نعم، حسب التوفر ونوع الخدمة ومتطلبات المستندات.' },
        { title: 'هل الجنسية هي عامل الاختيار الوحيد؟', text: 'لا، المهارات والخبرة والسلوك وملاءمة الأسرة أهم.' }
      ],
      comparison: compare,
      related: ['live-in-maid', 'full-time-maid', 'nanny', 'maid-visa', 'recruitment', 'background-verification']
    }
  }
};
