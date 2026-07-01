import type { CompareRow, Lang, ServiceCopy } from './service-page-copy';

const comparisonEn: CompareRow[] = [
  { feature: 'Requirement review and consultation', inaya: 'Included', other: 'Often limited' },
  { feature: 'Clear duty scope before booking', inaya: 'Transparent', other: 'Sometimes unclear' },
  { feature: 'Verified service coordination', inaya: 'Structured', other: 'Varies' },
  { feature: 'Family lifestyle matching', inaya: 'Personalized', other: 'Basic matching' },
  { feature: 'Schedule and duty guidance', inaya: 'Included', other: 'Not always included' },
  { feature: 'Follow-up after confirmation', inaya: 'Included', other: 'Often missing' },
  { feature: 'Replacement support as per policy', inaya: 'Package based', other: 'Not guaranteed' },
  { feature: 'UAE-wide service guidance', inaya: 'Available', other: 'Limited areas' }
];

const comparisonAr: CompareRow[] = [
  { feature: 'مراجعة الاحتياج والاستشارة', inaya: 'متوفرة', other: 'غالباً محدودة' },
  { feature: 'توضيح نطاق المهام قبل الحجز', inaya: 'شفاف', other: 'غير واضح أحياناً' },
  { feature: 'تنسيق خدمة موثق', inaya: 'منظم', other: 'يختلف' },
  { feature: 'مطابقة حسب نمط الأسرة', inaya: 'مخصصة', other: 'مطابقة محدودة' },
  { feature: 'إرشاد الجدول والمهام', inaya: 'متوفر', other: 'غير متوفر دائماً' },
  { feature: 'متابعة بعد التأكيد', inaya: 'متوفرة', other: 'غالباً غير موجودة' },
  { feature: 'دعم الاستبدال حسب السياسة', inaya: 'حسب الباقة', other: 'غير مضمون' },
  { feature: 'إرشاد الخدمة في الإمارات', inaya: 'متاح', other: 'مناطق محدودة' }
];

export const servicePageCopiesNext: Record<string, Record<Lang, ServiceCopy>> = {
  'full-time-maid': {
    en: {
      title: 'Full-time Maid Hiring in UAE',
      meta: 'Hire a full-time maid in UAE with INAYA for dedicated daily cleaning, laundry, kitchen assistance and household support across Dubai, Ajman, Sharjah and all emirates.',
      badge: 'Dedicated Full-time Maid Hiring in UAE',
      lead: 'Hire a dedicated full-time maid for daily household management, cleaning, laundry, kitchen assistance and family support with clear guidance from INAYA.',
      book: 'Book Full-time Maid',
      whatsapp: 'WhatsApp Inquiry',
      whatTitle: 'What is Full-time Maid Hiring?',
      whatText: 'Full-time maid hiring gives your family dedicated domestic support for regular daily routines. It is designed for homes that need consistent help with cleaning, laundry, organizing, kitchen support and household care during agreed working hours or service arrangements.',
      whyTitle: 'Why Families Choose INAYA',
      includedTitle: 'What Full-time Maid Support Can Include',
      perfectTitle: 'Perfect For',
      journeyTitle: 'Our Full-time Maid Hiring Process',
      journeyText: 'A clear hiring and matching process that helps families choose the right domestic worker for daily household needs.',
      countriesTitle: 'Candidate Matching Guidance',
      countriesText: 'Families can be guided by language, experience, cooking style, childcare exposure, cleaning standards and preferred nationality where available.',
      pricingTitle: 'Full-time Maid Pricing Guidance',
      pricingText: 'Pricing depends on service model, working schedule, home size, documentation, visa status, duties and family requirements.',
      faqTitle: 'Full-time Maid FAQs',
      relatedTitle: 'Related Maid Services',
      compareTitle: 'Why Choose INAYA for Full-time Maid Hiring?',
      compareText: 'A structured hiring experience with clear communication, duty planning and family-focused matching.',
      finalTitle: 'Ready to hire a full-time maid in UAE?',
      finalText: 'Speak with INAYA today and get clear guidance for full-time household help that fits your family routine.',
      cards: [
        { title: 'Dedicated Daily Help', text: 'Consistent support for cleaning, laundry, kitchen tasks and home routines.' },
        { title: 'Family-focused Matching', text: 'Requirements are reviewed carefully before recommending the right service direction.' },
        { title: 'Clear Process Guidance', text: 'Our team explains duties, documents, pricing factors and next steps before confirmation.' }
      ],
      why: ['Dedicated household support', 'Clear duties before booking', 'Suitable for apartments and villas', 'Family routine matching', 'Document and process guidance', 'Follow-up support after confirmation'],
      included: ['Daily cleaning and room care', 'Laundry and ironing', 'Kitchen assistance', 'Home organization', 'Childcare support where suitable', 'Basic elderly household assistance'],
      perfect: ['Working families', 'Busy professionals', 'Large homes and villas', 'Families with children', 'Homes needing daily cleaning', 'Families wanting consistent support'],
      journey: [
        { title: 'Requirement', text: 'We review your home size, duties, schedule and family priorities.' },
        { title: 'Profile Direction', text: 'We guide the profile type based on cleaning, cooking and family needs.' },
        { title: 'Duty Plan', text: 'Daily tasks and expectations are clarified before confirmation.' },
        { title: 'Documentation', text: 'Required documents and process steps are explained clearly.' },
        { title: 'Confirmation', text: 'The service plan is aligned with timing, location and family expectations.' }
      ],
      countries: [
        { title: 'Philippines', text: 'Strong English communication, childcare exposure and housekeeping.' },
        { title: 'Indonesia', text: 'Housekeeping, family care and cooking support.' },
        { title: 'Nepal', text: 'Reliable cleaning routines and daily household support.' },
        { title: 'Sri Lanka', text: 'Household experience, organization and meal support.' },
        { title: 'India', text: 'Cooking, cleaning, family support and language flexibility.' },
        { title: 'Kenya / Uganda', text: 'Home support, cleaning routines and childcare exposure.' }
      ],
      pricing: [
        { title: 'Requirement Consultation', text: 'For families exploring full-time maid options.', points: ['Duty review', 'Schedule guidance', 'Document checklist'] },
        { title: 'Full-time Hiring Plan', text: 'For families ready to proceed with dedicated support.', points: ['Profile direction', 'Service coordination', 'Joining support'] },
        { title: 'Visa and Document Guidance', text: 'For families needing process clarity.', points: ['Visa status review', 'Required documents', 'Follow-up support'] }
      ],
      faqs: [
        { title: 'What does a full-time maid do?', text: 'A full-time maid can support daily cleaning, laundry, ironing, kitchen assistance, home organization and family routines depending on agreed scope.' },
        { title: 'Is full-time maid hiring different from live-in maid service?', text: 'Yes. Full-time refers to dedicated working support, while live-in usually includes accommodation inside the home.' },
        { title: 'Can I request cooking or childcare experience?', text: 'Yes. Cooking, childcare exposure and language preference can be discussed during requirement review.' },
        { title: 'Do you serve Dubai, Ajman and Sharjah?', text: 'Yes, INAYA provides guidance for families across the UAE subject to availability and requirements.' },
        { title: 'Is the price fixed?', text: 'No. Pricing depends on service model, duties, documentation, visa status and selected arrangement.' },
        { title: 'Can I get replacement support?', text: 'Replacement support depends on the selected package and policy explained before confirmation.' }
      ],
      comparison: comparisonEn,
      related: ['live-in-maid', 'live-out-maid', 'part-time-maid', 'monthly-maid-contract', 'maid-visa', 'maid-replacement']
    },
    ar: {
      title: 'توظيف خادمة بدوام كامل في الإمارات',
      meta: 'وظّف خادمة بدوام كامل في الإمارات مع عناية لدعم التنظيف اليومي والغسيل والمطبخ وتنظيم المنزل في دبي وعجمان والشارقة وجميع الإمارات.',
      badge: 'توظيف خادمة بدوام كامل في الإمارات',
      lead: 'احصل على خادمة بدوام كامل لدعم إدارة المنزل اليومية والتنظيف والغسيل والمساعدة في المطبخ ورعاية الأسرة مع إرشاد واضح من عناية.',
      book: 'احجز خادمة بدوام كامل',
      whatsapp: 'استفسار واتساب',
      whatTitle: 'ما هو توظيف الخادمة بدوام كامل؟',
      whatText: 'توظيف خادمة بدوام كامل يمنح الأسرة دعماً منزلياً مخصصاً للروتين اليومي. يناسب المنازل التي تحتاج إلى تنظيف وغسيل وترتيب ومساعدة في المطبخ ودعم منزلي خلال ساعات أو ترتيبات متفق عليها.',
      whyTitle: 'لماذا تختار الأسر عناية؟',
      includedTitle: 'ما الذي يمكن أن يشمله الدعم؟',
      perfectTitle: 'مناسبة لـ',
      journeyTitle: 'خطوات توظيف خادمة بدوام كامل',
      journeyText: 'عملية واضحة للمطابقة والتوظيف تساعد الأسر على اختيار الدعم المنزلي المناسب للاحتياج اليومي.',
      countriesTitle: 'إرشاد مطابقة العمالة',
      countriesText: 'يمكن إرشاد الأسر حسب اللغة والخبرة ونمط الطبخ ورعاية الأطفال ومعايير التنظيف والجنسية المفضلة عند التوفر.',
      pricingTitle: 'إرشاد أسعار الخادمة بدوام كامل',
      pricingText: 'تختلف التكلفة حسب نموذج الخدمة والجدول وحجم المنزل والمستندات وحالة التأشيرة والمهام المطلوبة.',
      faqTitle: 'أسئلة خادمة بدوام كامل',
      relatedTitle: 'خدمات خادمات ذات صلة',
      compareTitle: 'لماذا تختار عناية لتوظيف خادمة بدوام كامل؟',
      compareText: 'تجربة توظيف منظمة مع تواصل واضح وتخطيط للمهام ومطابقة تناسب الأسرة.',
      finalTitle: 'هل أنت جاهز لتوظيف خادمة بدوام كامل؟',
      finalText: 'تواصل مع عناية اليوم للحصول على إرشاد واضح لدعم منزلي بدوام كامل يناسب روتين أسرتك.',
      cards: [
        { title: 'مساعدة يومية مخصصة', text: 'دعم ثابت للتنظيف والغسيل والمطبخ وروتين المنزل.' },
        { title: 'مطابقة حسب الأسرة', text: 'تتم مراجعة الاحتياج بعناية قبل توجيه الخدمة المناسبة.' },
        { title: 'إرشاد واضح للإجراءات', text: 'نوضح المهام والمستندات وعوامل السعر والخطوات التالية قبل التأكيد.' }
      ],
      why: ['دعم منزلي مخصص', 'توضيح المهام قبل الحجز', 'مناسب للشقق والفلل', 'مطابقة حسب روتين الأسرة', 'إرشاد المستندات والإجراءات', 'متابعة بعد التأكيد'],
      included: ['تنظيف يومي وترتيب الغرف', 'الغسيل والكي', 'مساعدة في المطبخ', 'تنظيم المنزل', 'دعم رعاية الأطفال عند المناسبة', 'مساعدة منزلية أساسية لكبار السن'],
      perfect: ['الأسر العاملة', 'المهنيون المشغولون', 'المنازل الكبيرة والفلل', 'الأسر التي لديها أطفال', 'المنازل التي تحتاج تنظيفاً يومياً', 'الأسر التي تريد دعماً ثابتاً'],
      journey: [
        { title: 'الاحتياج', text: 'نراجع حجم المنزل والمهام والجدول وأولويات الأسرة.' },
        { title: 'نوع الملف', text: 'نرشد نوع الملف حسب التنظيف والطبخ واحتياج الأسرة.' },
        { title: 'خطة المهام', text: 'يتم توضيح المهام اليومية والتوقعات قبل التأكيد.' },
        { title: 'المستندات', text: 'يتم شرح المستندات المطلوبة وخطوات العملية بوضوح.' },
        { title: 'التأكيد', text: 'تتم مواءمة خطة الخدمة مع التوقيت والموقع وتوقعات الأسرة.' }
      ],
      countries: [
        { title: 'الفلبين', text: 'تواصل إنجليزي قوي ورعاية أطفال وتنظيم المنزل.' },
        { title: 'إندونيسيا', text: 'تنظيف ورعاية أسرية ودعم الطبخ.' },
        { title: 'نيبال', text: 'روتين تنظيف موثوق ودعم منزلي يومي.' },
        { title: 'سريلانكا', text: 'خبرة منزلية وتنظيم ودعم في الوجبات.' },
        { title: 'الهند', text: 'طبخ وتنظيف ودعم أسري ومرونة لغوية.' },
        { title: 'كينيا / أوغندا', text: 'دعم منزلي وروتين تنظيف وخبرة حول الأطفال.' }
      ],
      pricing: [
        { title: 'استشارة الاحتياج', text: 'للأسر التي تدرس خيارات الخادمة بدوام كامل.', points: ['مراجعة المهام', 'إرشاد الجدول', 'قائمة مستندات'] },
        { title: 'خطة التوظيف بدوام كامل', text: 'للأسر الجاهزة لدعم منزلي مخصص.', points: ['توجيه الملف', 'تنسيق الخدمة', 'دعم الالتحاق'] },
        { title: 'إرشاد التأشيرة والمستندات', text: 'للأسر التي تحتاج وضوحاً في الإجراءات.', points: ['مراجعة حالة التأشيرة', 'المستندات المطلوبة', 'متابعة الدعم'] }
      ],
      faqs: [
        { title: 'ماذا تفعل الخادمة بدوام كامل؟', text: 'يمكن أن تدعم التنظيف اليومي والغسيل والكي والمطبخ وتنظيم المنزل وروتين الأسرة حسب نطاق الخدمة.' },
        { title: 'هل تختلف عن الخادمة المقيمة؟', text: 'نعم. الدوام الكامل يعني دعماً مخصصاً، بينما الخادمة المقيمة عادة تشمل الإقامة داخل المنزل.' },
        { title: 'هل يمكن طلب خبرة في الطبخ أو رعاية الأطفال؟', text: 'نعم، يمكن مناقشة الطبخ وخبرة الأطفال وتفضيل اللغة أثناء مراجعة الاحتياج.' },
        { title: 'هل تخدمون دبي وعجمان والشارقة؟', text: 'نعم، تقدم عناية الإرشاد للأسر في جميع إمارات الدولة حسب التوفر والمتطلبات.' },
        { title: 'هل السعر ثابت؟', text: 'لا، يعتمد السعر على نموذج الخدمة والمهام والمستندات وحالة التأشيرة والترتيب المختار.' },
        { title: 'هل يوجد دعم استبدال؟', text: 'يعتمد دعم الاستبدال على الباقة والسياسة التي يتم توضيحها قبل التأكيد.' }
      ],
      comparison: comparisonAr,
      related: ['live-in-maid', 'live-out-maid', 'part-time-maid', 'monthly-maid-contract', 'maid-visa', 'maid-replacement']
    }
  },
  'part-time-maid': {
    en: {
      title: 'Part-time Maid Hiring in UAE',
      meta: 'Book part-time maid services in UAE with flexible hourly, weekly and scheduled cleaning support for apartments, villas and family homes across all emirates.',
      badge: 'Flexible Part-time Maid Services in UAE',
      lead: 'Book part-time maid support for cleaning, laundry, ironing, kitchen help and household organization whenever your home needs flexible assistance.',
      book: 'Book Part-time Maid',
      whatsapp: 'WhatsApp Inquiry',
      whatTitle: 'What is Part-time Maid Hiring?',
      whatText: 'Part-time maid hiring gives families flexible domestic help for selected hours, selected days or specific household tasks. It is ideal when you do not need full-time or live-in support but still want reliable cleaning and home assistance.',
      whyTitle: 'Why Families Choose INAYA',
      includedTitle: 'What Part-time Maid Support Can Include',
      perfectTitle: 'Perfect For',
      journeyTitle: 'Our Part-time Maid Booking Process',
      journeyText: 'A simple process that aligns timing, tasks and home requirements before the service is confirmed.',
      countriesTitle: 'Flexible Matching Guidance',
      countriesText: 'Part-time support can be guided by cleaning needs, home size, language preference, kitchen assistance and visit frequency.',
      pricingTitle: 'Part-time Maid Pricing Guidance',
      pricingText: 'Pricing depends on hours, visit frequency, location, home size and task scope.',
      faqTitle: 'Part-time Maid FAQs',
      relatedTitle: 'Related Maid Services',
      compareTitle: 'Why Choose INAYA for Part-time Maid Services?',
      compareText: 'Flexible household help with clear timing, duty planning and organized coordination.',
      finalTitle: 'Need flexible part-time maid help?',
      finalText: 'Speak with INAYA today and arrange part-time maid support for your home routine.',
      cards: [
        { title: 'Hourly Flexibility', text: 'Choose support based on hours, tasks and home routine.' },
        { title: 'Easy Scheduled Visits', text: 'Arrange cleaning support for selected days or repeat visits.' },
        { title: 'Practical Home Help', text: 'Ideal for cleaning, laundry, ironing and quick household organization.' }
      ],
      why: ['Flexible hourly or scheduled support', 'Good for apartments and villas', 'No long-term commitment needed', 'Clear task scope before booking', 'Suitable for busy families', 'UAE-wide guidance subject to availability'],
      included: ['General cleaning', 'Bathroom and kitchen cleaning', 'Dusting and floor care', 'Laundry and ironing add-on', 'Kitchen assistance', 'Home organization'],
      perfect: ['Small apartments', 'Weekly cleaning', 'Busy professionals', 'Families needing occasional help', 'Move-in or move-out cleaning support', 'Homes needing extra hands'],
      journey: [
        { title: 'Need', text: 'We review the cleaning need, home size and preferred timing.' },
        { title: 'Hours', text: 'Required hours and visit frequency are discussed clearly.' },
        { title: 'Tasks', text: 'Cleaning, laundry, ironing and kitchen tasks are defined.' },
        { title: 'Schedule', text: 'The visit timing and location details are confirmed.' },
        { title: 'Support', text: 'Feedback is reviewed for future bookings or repeat plans.' }
      ],
      countries: [
        { title: 'Cleaning Focus', text: 'Routine cleaning and home organization needs are reviewed.' },
        { title: 'Laundry Support', text: 'Laundry and ironing can be added when time allows.' },
        { title: 'Kitchen Help', text: 'Light kitchen assistance can be discussed before booking.' },
        { title: 'Visit Frequency', text: 'One-time, weekly and monthly support can be planned.' },
        { title: 'Language Preference', text: 'Communication preference can be considered where available.' },
        { title: 'Home Access', text: 'Access and timing details are confirmed for smooth service.' }
      ],
      pricing: [
        { title: 'Hourly Visit', text: 'For short cleaning or organizing needs.', points: ['Hour review', 'Task selection', 'Visit confirmation'] },
        { title: 'Weekly Visits', text: 'For regular part-time household support.', points: ['Fixed timing', 'Recurring tasks', 'Follow-up support'] },
        { title: 'Monthly Schedule', text: 'For ongoing flexible domestic help.', points: ['Planned visits', 'Clear task scope', 'Priority coordination'] }
      ],
      faqs: [
        { title: 'Can I book a part-time maid by the hour?', text: 'Yes. Hourly or scheduled support can be discussed depending on area, timing and availability.' },
        { title: 'Can part-time maids do laundry and ironing?', text: 'Yes, these tasks can be included if discussed before booking and time allows.' },
        { title: 'Is part-time maid service suitable for villas?', text: 'Yes, but the required hours should match the home size and task scope.' },
        { title: 'Can I book the same maid again?', text: 'We try to support repeat arrangements where possible, subject to schedule and availability.' },
        { title: 'Do you serve all UAE emirates?', text: 'INAYA supports families across the UAE subject to service availability.' },
        { title: 'How do I get exact pricing?', text: 'Share your location, hours, home size and task list so our team can guide you.' }
      ],
      comparison: comparisonEn,
      related: ['live-out-maid', 'full-time-maid', 'monthly-maid-contract', 'home-cooking', 'kitchen-helper', 'babysitting']
    },
    ar: {
      title: 'توظيف خادمة بدوام جزئي في الإمارات',
      meta: 'احجز خدمات خادمة بدوام جزئي في الإمارات بدعم مرن بالساعة أو بجدول أسبوعي للتنظيف والغسيل وتنظيم المنزل في جميع إمارات الدولة.',
      badge: 'خدمات خادمة بدوام جزئي في الإمارات',
      lead: 'احجز دعماً منزلياً بدوام جزئي للتنظيف والغسيل والكي والمساعدة في المطبخ وتنظيم المنزل عندما تحتاج أسرتك إلى مساعدة مرنة.',
      book: 'احجز خادمة بدوام جزئي',
      whatsapp: 'استفسار واتساب',
      whatTitle: 'ما هو توظيف الخادمة بدوام جزئي؟',
      whatText: 'توظيف خادمة بدوام جزئي يوفر للأسر مساعدة منزلية مرنة لساعات محددة أو أيام محددة أو مهام معينة. يناسب الأسر التي لا تحتاج إلى دوام كامل أو إقامة داخلية ولكنها تريد دعماً موثوقاً في التنظيف والمنزل.',
      whyTitle: 'لماذا تختار الأسر عناية؟',
      includedTitle: 'ما الذي يمكن أن يشمله الدعم؟',
      perfectTitle: 'مناسبة لـ',
      journeyTitle: 'خطوات حجز خادمة بدوام جزئي',
      journeyText: 'عملية بسيطة توائم التوقيت والمهام واحتياج المنزل قبل تأكيد الخدمة.',
      countriesTitle: 'إرشاد المطابقة المرنة',
      countriesText: 'يمكن توجيه الدعم الجزئي حسب احتياج التنظيف وحجم المنزل واللغة والمطبخ وعدد الزيارات.',
      pricingTitle: 'إرشاد أسعار الخادمة بدوام جزئي',
      pricingText: 'يعتمد السعر على عدد الساعات والزيارات والموقع وحجم المنزل ونطاق المهام.',
      faqTitle: 'أسئلة خادمة بدوام جزئي',
      relatedTitle: 'خدمات خادمات ذات صلة',
      compareTitle: 'لماذا تختار عناية لخدمة الدوام الجزئي؟',
      compareText: 'دعم منزلي مرن مع وضوح التوقيت وتخطيط المهام وتنسيق منظم.',
      finalTitle: 'هل تحتاج إلى خادمة بدوام جزئي؟',
      finalText: 'تواصل مع عناية اليوم لترتيب دعم منزلي بدوام جزئي يناسب روتين منزلك.',
      cards: [
        { title: 'مرونة بالساعة', text: 'اختر الدعم حسب الساعات والمهام وروتين المنزل.' },
        { title: 'زيارات مجدولة بسهولة', text: 'رتب دعم التنظيف في أيام محددة أو زيارات متكررة.' },
        { title: 'مساعدة منزلية عملية', text: 'مناسبة للتنظيف والغسيل والكي والتنظيم السريع.' }
      ],
      why: ['دعم مرن بالساعة أو بجدول', 'مناسب للشقق والفلل', 'لا يحتاج التزاماً طويلاً', 'توضيح المهام قبل الحجز', 'مناسب للأسر المشغولة', 'إرشاد في الإمارات حسب التوفر'],
      included: ['تنظيف عام', 'تنظيف الحمام والمطبخ', 'إزالة الغبار وتنظيف الأرضيات', 'إضافة الغسيل والكي', 'مساعدة في المطبخ', 'تنظيم المنزل'],
      perfect: ['الشقق الصغيرة', 'التنظيف الأسبوعي', 'المهنيون المشغولون', 'الأسر التي تحتاج مساعدة مؤقتة', 'دعم تنظيف الانتقال', 'المنازل التي تحتاج أيدي إضافية'],
      journey: [
        { title: 'الاحتياج', text: 'نراجع احتياج التنظيف وحجم المنزل والتوقيت المفضل.' },
        { title: 'الساعات', text: 'تتم مناقشة عدد الساعات وتكرار الزيارات بوضوح.' },
        { title: 'المهام', text: 'يتم تحديد التنظيف والغسيل والكي والمطبخ.' },
        { title: 'الجدول', text: 'يتم تأكيد موعد الزيارة وتفاصيل الموقع.' },
        { title: 'الدعم', text: 'تتم مراجعة الملاحظات للحجوزات القادمة أو الخطط المتكررة.' }
      ],
      countries: [
        { title: 'تركيز التنظيف', text: 'تتم مراجعة احتياج التنظيف والتنظيم.' },
        { title: 'دعم الغسيل', text: 'يمكن إضافة الغسيل والكي إذا سمح الوقت.' },
        { title: 'مساعدة المطبخ', text: 'يمكن مناقشة المساعدة الخفيفة في المطبخ قبل الحجز.' },
        { title: 'عدد الزيارات', text: 'يمكن تخطيط زيارة واحدة أو أسبوعية أو شهرية.' },
        { title: 'تفضيل اللغة', text: 'يمكن مراعاة تفضيل التواصل عند التوفر.' },
        { title: 'دخول المنزل', text: 'تتم مراجعة تفاصيل الوصول والتوقيت لخدمة سلسة.' }
      ],
      pricing: [
        { title: 'زيارة بالساعة', text: 'للاحتياج القصير في التنظيف أو التنظيم.', points: ['مراجعة الساعات', 'اختيار المهام', 'تأكيد الزيارة'] },
        { title: 'زيارات أسبوعية', text: 'لدعم منزلي منتظم بدوام جزئي.', points: ['توقيت ثابت', 'مهام متكررة', 'متابعة الدعم'] },
        { title: 'جدول شهري', text: 'لدعم منزلي مرن ومستمر.', points: ['زيارات مخططة', 'نطاق مهام واضح', 'تنسيق أولوية'] }
      ],
      faqs: [
        { title: 'هل يمكن حجز خادمة بالساعة؟', text: 'نعم، يمكن مناقشة الدعم بالساعة أو بجدول حسب المنطقة والتوقيت والتوفر.' },
        { title: 'هل تقوم الخادمة بالغسيل والكي؟', text: 'نعم، يمكن إضافة هذه المهام إذا تم توضيحها قبل الحجز وكان الوقت مناسباً.' },
        { title: 'هل تناسب الخدمة الفلل؟', text: 'نعم، لكن يجب أن تتناسب الساعات المطلوبة مع حجم المنزل ونطاق المهام.' },
        { title: 'هل يمكن حجز نفس الخادمة مرة أخرى؟', text: 'نحاول دعم الترتيبات المتكررة حيثما أمكن حسب الجدول والتوفر.' },
        { title: 'هل تخدمون جميع الإمارات؟', text: 'تدعم عناية الأسر في جميع إمارات الدولة حسب توفر الخدمة.' },
        { title: 'كيف أحصل على سعر دقيق؟', text: 'شارك الموقع وعدد الساعات وحجم المنزل وقائمة المهام ليقدم فريقنا الإرشاد المناسب.' }
      ],
      comparison: comparisonAr,
      related: ['live-out-maid', 'full-time-maid', 'monthly-maid-contract', 'home-cooking', 'kitchen-helper', 'babysitting']
    }
  }
};
