import type { Lang, ServiceCopy } from './service-page-copy';

type ServiceCopyPatch = Partial<ServiceCopy>;
type ServiceSeoPolish = Record<string, Partial<Record<Lang, ServiceCopyPatch>>>;

const commonComparisonEn = [
  { feature: 'Requirement review before recommendation', inaya: 'Included', other: 'Often limited' },
  { feature: 'Service scope explained clearly', inaya: 'Clear', other: 'Can be unclear' },
  { feature: 'UAE-wide enquiry support', inaya: 'Available', other: 'Area dependent' },
  { feature: 'Document and process guidance', inaya: 'Guided', other: 'Not always included' },
  { feature: 'Family routine matching', inaya: 'Personalized', other: 'Basic' },
  { feature: 'Follow-up after confirmation', inaya: 'Included', other: 'Often limited' }
];

const commonComparisonAr = [
  { feature: 'مراجعة الاحتياج قبل الترشيح', inaya: 'متوفرة', other: 'غالباً محدودة' },
  { feature: 'توضيح نطاق الخدمة', inaya: 'واضح', other: 'قد يكون غير واضح' },
  { feature: 'دعم الطلبات في الإمارات', inaya: 'متاح', other: 'حسب المنطقة' },
  { feature: 'إرشاد المستندات والإجراءات', inaya: 'موجه', other: 'غير متوفر دائماً' },
  { feature: 'مطابقة روتين الأسرة', inaya: 'مخصصة', other: 'أساسية' },
  { feature: 'المتابعة بعد التأكيد', inaya: 'متوفرة', other: 'غالباً محدودة' }
];

export const serviceSeoPolishMoreA: ServiceSeoPolish = {
  'live-out-maid': {
    en: {
      title: 'Live-out Maid Services in UAE for Scheduled Home Support',
      meta: 'Live-out maid services in UAE with INAYA. Schedule reliable cleaning, laundry, kitchen and household support without accommodation in Dubai, Ajman, Sharjah and across UAE.',
      lead: 'INAYA helps families arrange live-out maid services in UAE for scheduled household support without full-time accommodation, with clear duty planning and area-based availability guidance.',
      whatText: 'A live-out maid visits the home according to an agreed schedule and leaves after completing the required duties. This option is suitable for families that want privacy, flexibility and reliable routine support.',
      why: ['Scheduled maid support without accommodation', 'Clear visit timing and duty scope', 'Flexible UAE household arrangements', 'Privacy-friendly home support', 'Cleaning and laundry routine planning', 'Follow-up after confirmation'],
      included: ['Scheduled cleaning visits', 'Laundry and ironing assistance', 'Kitchen and surface care', 'Room organization support', 'Flexible household task planning', 'Clear arrival and departure coordination'],
      faqs: [
        { title: 'Who should choose a live-out maid?', text: 'A live-out maid is suitable for families that need scheduled help without providing accommodation inside the home.' },
        { title: 'Can duties be customized?', text: 'Yes. Cleaning, laundry, kitchen support and other duties should be discussed before confirmation.' },
        { title: 'Is live-out maid support available across UAE?', text: 'INAYA supports enquiries across UAE emirates, with availability confirmed by area and schedule.' },
        { title: 'Can I move from live-out to live-in later?', text: 'You can discuss changing the service model with INAYA depending on availability and requirements.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need scheduled live-out maid support?',
      finalText: 'Share your area, timings and household duties. INAYA will guide you with suitable options.'
    },
    ar: {
      title: 'خدمات خادمة غير مقيمة في الإمارات لدعم منزلي مجدول',
      meta: 'خدمات خادمة غير مقيمة في الإمارات مع عناية. تنظيم تنظيف وغسيل ومطبخ ودعم منزلي دون إقامة في دبي وعجمان والشارقة وباقي الإمارات.',
      lead: 'تساعد عناية الأسر على ترتيب خدمات خادمة غير مقيمة في الإمارات لدعم منزلي مجدول دون إقامة، مع توضيح المهام وفحص التوفر حسب المنطقة.',
      whatText: 'الخادمة غير المقيمة تزور المنزل حسب جدول متفق عليه وتغادر بعد إكمال المهام المطلوبة. هذا الخيار مناسب للأسر التي تريد خصوصية ومرونة ودعماً روتينياً موثوقاً.',
      why: ['دعم خادمة مجدول دون إقامة', 'توضيح وقت الزيارة ونطاق المهام', 'ترتيبات مرنة للمنازل في الإمارات', 'دعم يحافظ على الخصوصية', 'تنظيم روتين التنظيف والغسيل', 'متابعة بعد التأكيد'],
      included: ['زيارات تنظيف مجدولة', 'مساعدة في الغسيل والكي', 'عناية بالمطبخ والأسطح', 'تنظيم الغرف', 'تخطيط مهام منزلية مرنة', 'تنسيق واضح للوصول والمغادرة'],
      faqs: [
        { title: 'من يناسبه خيار الخادمة غير المقيمة؟', text: 'يناسب الأسر التي تحتاج مساعدة مجدولة دون توفير إقامة داخل المنزل.' },
        { title: 'هل يمكن تخصيص المهام؟', text: 'نعم، يمكن مناقشة التنظيف والغسيل والمطبخ وباقي المهام قبل التأكيد.' },
        { title: 'هل الخدمة متوفرة في الإمارات؟', text: 'تدعم عناية الطلبات في إمارات الدولة ويتم تأكيد التوفر حسب المنطقة والجدول.' },
        { title: 'هل يمكن الانتقال لاحقاً إلى خادمة مقيمة؟', text: 'يمكن مناقشة تغيير نوع الخدمة مع عناية حسب التوفر والمتطلبات.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج خادمة غير مقيمة بجدول واضح؟',
      finalText: 'شارك منطقتك والتوقيت والمهام المنزلية، وستوجهك عناية للخيارات المناسبة.'
    }
  },
  'full-time-maid': {
    en: {
      title: 'Full-time Maid Hiring in UAE for Complete Daily Support',
      meta: 'Full-time maid hiring in UAE with INAYA. Get clear guidance for daily cleaning, laundry, household routines, family support, documents and suitable profile matching.',
      lead: 'INAYA supports families that need full-time maid hiring in UAE for consistent daily household routines, clear duty planning and reliable home support.',
      whatText: 'A full-time maid helps manage daily household tasks for families that need regular support throughout the day. INAYA reviews schedule, duties, experience and documents before explaining the right service path.',
      why: ['Full-day household support guidance', 'Cleaning and laundry duty planning', 'Family schedule understanding', 'Profile and document review', 'UAE-wide enquiry support', 'Clear follow-up before confirmation'],
      included: ['Daily cleaning routines', 'Laundry and ironing support', 'Kitchen task assistance', 'Family routine help', 'Room organization', 'Task schedule clarity'],
      faqs: [
        { title: 'What does full-time maid hiring include?', text: 'It can include daily cleaning, laundry, kitchen help and routine household support depending on the agreed scope.' },
        { title: 'Is full-time maid hiring different from live-in maid service?', text: 'Yes. Full-time refers to the work schedule, while live-in refers to accommodation inside the home.' },
        { title: 'Can INAYA help clarify documents?', text: 'Yes. Document guidance can be explained depending on the selected hiring model.' },
        { title: 'Can I request experience in cooking or childcare?', text: 'Yes. These preferences should be shared during the requirement review.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need full-time maid support in UAE?',
      finalText: 'Tell INAYA your daily routine, duties and start date for clear guidance.'
    },
    ar: {
      title: 'توظيف خادمة بدوام كامل في الإمارات لدعم يومي متكامل',
      meta: 'توظيف خادمة بدوام كامل في الإمارات مع عناية. إرشاد واضح للتنظيف اليومي والغسيل وروتين المنزل ودعم الأسرة والمستندات ومطابقة الملف.',
      lead: 'تدعم عناية الأسر التي تحتاج خادمة بدوام كامل في الإمارات لروتين منزلي يومي مستمر وتخطيط واضح للمهام ودعم موثوق.',
      whatText: 'الخادمة بدوام كامل تساعد في إدارة المهام المنزلية اليومية للأسر التي تحتاج دعماً منتظماً طوال اليوم. تراجع عناية الجدول والمهام والخبرة والمستندات قبل شرح المسار المناسب.',
      why: ['إرشاد لدعم منزلي طوال اليوم', 'تخطيط مهام التنظيف والغسيل', 'فهم جدول الأسرة', 'مراجعة الملف والمستندات', 'دعم الطلبات في الإمارات', 'متابعة واضحة قبل التأكيد'],
      included: ['روتين تنظيف يومي', 'دعم الغسيل والكي', 'مساعدة في مهام المطبخ', 'دعم روتين الأسرة', 'تنظيم الغرف', 'وضوح جدول المهام'],
      faqs: [
        { title: 'ماذا يشمل توظيف خادمة بدوام كامل؟', text: 'قد يشمل التنظيف اليومي والغسيل والمطبخ والدعم المنزلي حسب نطاق الخدمة المتفق عليه.' },
        { title: 'هل يختلف الدوام الكامل عن الخادمة المقيمة؟', text: 'نعم. الدوام الكامل يتعلق بجدول العمل، بينما الخادمة المقيمة تتعلق بالإقامة داخل المنزل.' },
        { title: 'هل تساعد عناية في توضيح المستندات؟', text: 'نعم، يتم شرح إرشاد المستندات حسب نموذج التوظيف المختار.' },
        { title: 'هل يمكن طلب خبرة في الطبخ أو الأطفال؟', text: 'نعم، يجب مشاركة هذه التفضيلات أثناء مراجعة الاحتياج.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج خادمة بدوام كامل في الإمارات؟',
      finalText: 'أخبر عناية بروتينك اليومي والمهام وتاريخ البدء للحصول على إرشاد واضح.'
    }
  },
  'part-time-maid': {
    en: {
      title: 'Part-time Maid Services in UAE for Flexible Home Cleaning',
      meta: 'Part-time maid services in UAE with INAYA. Flexible cleaning, laundry, kitchen and household help by schedule for families in Dubai, Ajman, Sharjah and across UAE.',
      lead: 'INAYA helps families arrange part-time maid services in UAE when they need flexible cleaning, laundry, kitchen support or occasional household help.',
      whatText: 'Part-time maid support is suitable for families that do not need daily full-time help but want reliable support on selected days, hours or recurring schedules.',
      why: ['Flexible maid service guidance', 'Short visit and schedule planning', 'Cleaning and laundry scope clarity', 'Weekly or occasional support', 'Area-based availability review', 'Simple next-step follow-up'],
      included: ['Home cleaning by schedule', 'Laundry and ironing where required', 'Kitchen and bathroom cleaning', 'Move-in or deep-clean support discussion', 'Weekly recurring help', 'Clear service timing'],
      faqs: [
        { title: 'Can part-time maid service be weekly?', text: 'Yes. Weekly or recurring schedules can be discussed depending on location and availability.' },
        { title: 'Is part-time maid service good for small apartments?', text: 'Yes. It is often suitable for apartments or homes that need periodic support.' },
        { title: 'Can I request kitchen cleaning?', text: 'Kitchen cleaning can be included when it is part of the agreed service scope.' },
        { title: 'Do I need to book long term?', text: 'Part-time support can be discussed for short-term or regular needs depending on availability.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need flexible part-time maid support?',
      finalText: 'Share your preferred days, area and home tasks with INAYA.'
    },
    ar: {
      title: 'خدمات خادمة بدوام جزئي في الإمارات لتنظيف مرن',
      meta: 'خدمات خادمة بدوام جزئي في الإمارات مع عناية. تنظيف وغسيل ومطبخ ودعم منزلي مرن حسب الجدول في دبي وعجمان والشارقة وباقي الإمارات.',
      lead: 'تساعد عناية الأسر على ترتيب خدمات خادمة بدوام جزئي في الإمارات عندما تحتاج تنظيفاً مرناً أو غسيلاً أو دعماً في المطبخ أو مساعدة منزلية عند الحاجة.',
      whatText: 'الدعم بدوام جزئي مناسب للأسر التي لا تحتاج مساعدة يومية بدوام كامل لكنها تريد دعماً موثوقاً في أيام أو ساعات أو جداول متكررة محددة.',
      why: ['إرشاد لخدمة خادمة مرنة', 'تخطيط الزيارات القصيرة والجدول', 'وضوح نطاق التنظيف والغسيل', 'دعم أسبوعي أو عند الحاجة', 'مراجعة التوفر حسب المنطقة', 'متابعة بسيطة للخطوات التالية'],
      included: ['تنظيف منزلي حسب الجدول', 'غسيل وكي عند الحاجة', 'تنظيف المطبخ والحمامات', 'مناقشة دعم الانتقال أو التنظيف العميق', 'مساعدة أسبوعية متكررة', 'وضوح توقيت الخدمة'],
      faqs: [
        { title: 'هل يمكن أن تكون الخدمة أسبوعية؟', text: 'نعم، يمكن مناقشة الجداول الأسبوعية أو المتكررة حسب المنطقة والتوفر.' },
        { title: 'هل تناسب الخدمة الشقق الصغيرة؟', text: 'نعم، غالباً تناسب الشقق أو المنازل التي تحتاج دعماً دورياً.' },
        { title: 'هل يمكن طلب تنظيف المطبخ؟', text: 'يمكن إدراج تنظيف المطبخ عندما يكون ضمن نطاق الخدمة المتفق عليه.' },
        { title: 'هل يجب الحجز لمدة طويلة؟', text: 'يمكن مناقشة الدعم القصير أو المنتظم حسب التوفر.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج خادمة بدوام جزئي مرن؟',
      finalText: 'شارك الأيام المفضلة والمنطقة والمهام المنزلية مع عناية.'
    }
  },
  'monthly-maid-contract': {
    en: {
      title: 'Monthly Maid Contract in UAE for Regular Home Support',
      meta: 'Monthly maid contract in UAE with INAYA. Plan regular cleaning, laundry and household support with clear schedules, duties and follow-up across UAE emirates.',
      lead: 'INAYA helps families plan monthly maid contracts in UAE for predictable household support, recurring cleaning schedules and clearer monthly service coordination.',
      whatText: 'A monthly maid contract is useful when families want repeated service instead of one-time visits. INAYA helps clarify the schedule, duty scope, timing and follow-up before confirmation.',
      why: ['Predictable monthly maid support', 'Recurring schedule planning', 'Clear duties and timing', 'Better household routine consistency', 'Follow-up and service coordination', 'UAE-wide enquiry support'],
      included: ['Monthly schedule discussion', 'Regular cleaning plan', 'Laundry support where required', 'Task scope clarity', 'Service timing coordination', 'Monthly follow-up guidance'],
      faqs: [
        { title: 'Who should choose a monthly maid contract?', text: 'It is suitable for families that need regular and predictable help every month.' },
        { title: 'Can the schedule be customized?', text: 'Schedules can be discussed based on home needs, area and availability.' },
        { title: 'Does monthly service include laundry?', text: 'Laundry can be included if it is part of the agreed scope.' },
        { title: 'Can I change the monthly plan later?', text: 'Changes can be discussed with INAYA depending on availability and policy.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Want a regular monthly maid plan?',
      finalText: 'Send your preferred schedule and household duties to INAYA for guidance.'
    },
    ar: {
      title: 'عقد خادمة شهري في الإمارات لدعم منزلي منتظم',
      meta: 'عقد خادمة شهري في الإمارات مع عناية. خطط لتنظيف وغسيل ودعم منزلي منتظم مع جداول ومهام ومتابعة واضحة في الإمارات.',
      lead: 'تساعد عناية الأسر على تخطيط عقود خادمة شهرية في الإمارات لدعم منزلي منتظم وجداول تنظيف متكررة وتنسيق شهري أوضح.',
      whatText: 'العقد الشهري مناسب عندما تريد الأسرة خدمة متكررة بدلاً من زيارات فردية. تساعد عناية في توضيح الجدول ونطاق المهام والتوقيت والمتابعة قبل التأكيد.',
      why: ['دعم خادمة شهري متوقع', 'تخطيط جدول متكرر', 'وضوح المهام والتوقيت', 'استقرار أفضل لروتين المنزل', 'متابعة وتنسيق الخدمة', 'دعم الطلبات في الإمارات'],
      included: ['مناقشة الجدول الشهري', 'خطة تنظيف منتظمة', 'دعم الغسيل عند الحاجة', 'وضوح نطاق المهام', 'تنسيق توقيت الخدمة', 'إرشاد المتابعة الشهرية'],
      faqs: [
        { title: 'من يناسبه عقد الخادمة الشهري؟', text: 'يناسب الأسر التي تحتاج مساعدة منتظمة ومتوقعة كل شهر.' },
        { title: 'هل يمكن تخصيص الجدول؟', text: 'يمكن مناقشة الجدول حسب احتياج المنزل والمنطقة والتوفر.' },
        { title: 'هل يشمل العقد الغسيل؟', text: 'يمكن إدراج الغسيل إذا كان ضمن نطاق الخدمة المتفق عليه.' },
        { title: 'هل يمكن تغيير الخطة لاحقاً؟', text: 'يمكن مناقشة التغييرات مع عناية حسب التوفر والسياسة.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تريد خطة خادمة شهرية منتظمة؟',
      finalText: 'أرسل الجدول المفضل والمهام المنزلية إلى عناية للحصول على إرشاد.'
    }
  },
  'home-cooking': {
    en: {
      title: 'Home Cooking Services in UAE for Family Meals',
      meta: 'Home cooking services in UAE with INAYA. Arrange domestic cooks for daily meals, family taste preferences, kitchen routines and healthy home dining support.',
      lead: 'INAYA helps families arrange home cooking services in UAE for daily meals, kitchen routines, family taste preferences and reliable meal preparation support.',
      whatText: 'Home cooking support is designed for families that want meals prepared inside the home according to their taste, schedule, diet preferences and kitchen routine.',
      why: ['Family taste and menu discussion', 'Daily meal preparation guidance', 'Kitchen routine support', 'Healthy home dining focus', 'Cooking experience review', 'Clear scope before confirmation'],
      included: ['Daily meal preparation', 'Ingredient and menu routine discussion', 'Kitchen cleaning support', 'Family preference follow-up', 'Dietary requirement discussion', 'Cooking schedule clarity'],
      faqs: [
        { title: 'Can I request specific cuisines?', text: 'You can share cuisine and taste preferences so INAYA can discuss suitable cooking support.' },
        { title: 'Does home cooking include grocery shopping?', text: 'This depends on the agreed scope and should be clarified before confirmation.' },
        { title: 'Can a cook help with kitchen cleaning?', text: 'Kitchen cleaning support can be discussed as part of the routine.' },
        { title: 'Is daily cooking available?', text: 'Daily cooking support depends on availability, location and the selected service model.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need home cooking support?',
      finalText: 'Share your cuisine preferences, schedule and location with INAYA.'
    },
    ar: {
      title: 'خدمات الطبخ المنزلي في الإمارات لوجبات الأسرة',
      meta: 'خدمات الطبخ المنزلي في الإمارات مع عناية. ترتيب طباخات منزليات للوجبات اليومية وذوق الأسرة وروتين المطبخ ودعم الطعام المنزلي الصحي.',
      lead: 'تساعد عناية الأسر على ترتيب خدمات الطبخ المنزلي في الإمارات للوجبات اليومية وروتين المطبخ وتفضيلات ذوق الأسرة ودعم إعداد الطعام.',
      whatText: 'دعم الطبخ المنزلي مصمم للأسر التي تريد إعداد الوجبات داخل المنزل حسب الذوق والجدول والتفضيلات الغذائية وروتين المطبخ.',
      why: ['مناقشة ذوق الأسرة والقائمة', 'إرشاد إعداد الوجبات اليومية', 'دعم روتين المطبخ', 'تركيز على الطعام المنزلي الصحي', 'مراجعة خبرة الطبخ', 'وضوح النطاق قبل التأكيد'],
      included: ['إعداد وجبات يومية', 'مناقشة المكونات وروتين القائمة', 'دعم تنظيف المطبخ', 'متابعة تفضيلات الأسرة', 'مناقشة المتطلبات الغذائية', 'وضوح جدول الطبخ'],
      faqs: [
        { title: 'هل يمكن طلب مطبخ معين؟', text: 'يمكنك مشاركة تفضيلات المطبخ والذوق حتى تناقش عناية الدعم المناسب.' },
        { title: 'هل يشمل الطبخ شراء المواد؟', text: 'يعتمد ذلك على نطاق الخدمة المتفق عليه ويجب توضيحه قبل التأكيد.' },
        { title: 'هل يمكن للطباخة دعم تنظيف المطبخ؟', text: 'يمكن مناقشة دعم تنظيف المطبخ كجزء من الروتين.' },
        { title: 'هل يتوفر الطبخ اليومي؟', text: 'يعتمد دعم الطبخ اليومي على التوفر والمنطقة ونموذج الخدمة المختار.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج دعم طبخ منزلي؟',
      finalText: 'شارك تفضيلات الطعام والجدول والمنطقة مع عناية.'
    }
  },
  'personal-chef': {
    en: {
      title: 'Private Chef and Personal Cook Hiring in UAE',
      meta: 'Private chef and personal cook hiring in UAE with INAYA. Premium home dining support for daily meals, special occasions, dietary preferences and family kitchens.',
      lead: 'INAYA helps families arrange private chef and personal cook support in UAE for tailored meals, special occasions, dietary preferences and premium home dining routines.',
      whatText: 'A private chef or personal cook is suitable when the family needs more tailored meal planning, special occasion preparation or refined kitchen support inside the home.',
      why: ['Tailored meal planning guidance', 'Private home dining support', 'Special occasion cooking discussion', 'Diet preference coordination', 'Kitchen routine clarity', 'Premium family experience'],
      included: ['Private meal planning', 'Daily or occasion-based cooking discussion', 'Diet and allergy preference review', 'Kitchen support coordination', 'Menu and taste guidance', 'Clear timing and scope'],
      faqs: [
        { title: 'Is a private chef different from a home cook?', text: 'A private chef usually focuses on more tailored menus, special occasions or refined meal planning.' },
        { title: 'Can dietary preferences be discussed?', text: 'Yes. Share diet, allergies and family preferences during the requirement review.' },
        { title: 'Can a chef support events at home?', text: 'Special occasion cooking can be discussed based on timing, menu and availability.' },
        { title: 'Can support be daily or occasional?', text: 'Both models can be discussed depending on the household requirement and availability.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need a private chef or personal cook?',
      finalText: 'Tell INAYA your menu needs, timing and home dining expectations.'
    },
    ar: {
      title: 'توظيف شيف خاص أو طباخ شخصي في الإمارات',
      meta: 'توظيف شيف خاص أو طباخ شخصي في الإمارات مع عناية. دعم طعام منزلي راق للوجبات اليومية والمناسبات والتفضيلات الغذائية ومطابخ الأسرة.',
      lead: 'تساعد عناية الأسر على ترتيب شيف خاص أو طباخ شخصي في الإمارات للوجبات المخصصة والمناسبات والتفضيلات الغذائية وروتين الطعام المنزلي الراقي.',
      whatText: 'الشيف الخاص أو الطباخ الشخصي مناسب عندما تحتاج الأسرة تخطيط وجبات مخصصاً أو إعداد مناسبات أو دعماً أكثر رقياً داخل مطبخ المنزل.',
      why: ['إرشاد تخطيط وجبات مخصصة', 'دعم طعام منزلي خاص', 'مناقشة طبخ المناسبات', 'تنسيق التفضيلات الغذائية', 'وضوح روتين المطبخ', 'تجربة أسرية راقية'],
      included: ['تخطيط وجبات خاصة', 'مناقشة طبخ يومي أو للمناسبات', 'مراجعة الحمية والحساسية', 'تنسيق دعم المطبخ', 'إرشاد القائمة والذوق', 'وضوح التوقيت والنطاق'],
      faqs: [
        { title: 'هل الشيف الخاص يختلف عن الطباخة المنزلية؟', text: 'عادة يركز الشيف الخاص على قوائم أكثر تخصيصاً أو مناسبات أو تخطيط وجبات راق.' },
        { title: 'هل يمكن مناقشة التفضيلات الغذائية؟', text: 'نعم، شارك الحمية والحساسية وتفضيلات الأسرة أثناء مراجعة الاحتياج.' },
        { title: 'هل يمكن للشيف دعم المناسبات في المنزل؟', text: 'يمكن مناقشة طبخ المناسبات حسب التوقيت والقائمة والتوفر.' },
        { title: 'هل يمكن أن يكون الدعم يومياً أو عند الحاجة؟', text: 'يمكن مناقشة النموذجين حسب احتياج المنزل والتوفر.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج شيف خاص أو طباخ شخصي؟',
      finalText: 'أخبر عناية باحتياج القائمة والتوقيت وتوقعات الطعام المنزلي.'
    }
  },
  'kitchen-helper': {
    en: {
      title: 'Kitchen Helper Services in UAE for Home Meal Routines',
      meta: 'Kitchen helper services in UAE with INAYA. Get support for food preparation, dish care, kitchen cleaning, storage and daily meal routines at home.',
      lead: 'INAYA helps families arrange kitchen helper services in UAE for food preparation, dish care, cleaning, storage support and smooth daily meal routines.',
      whatText: 'A kitchen helper supports the home kitchen without necessarily taking the role of a full cook. This service is useful for busy kitchens that need assistance before, during and after meals.',
      why: ['Food preparation support', 'Dish and counter care', 'Kitchen routine assistance', 'Storage and organization help', 'Family meal schedule support', 'Clear duty discussion'],
      included: ['Food preparation assistance', 'Dishwashing and counter care', 'Kitchen cleaning support', 'Storage organization', 'Meal routine help', 'After-meal cleanup'],
      faqs: [
        { title: 'Is a kitchen helper the same as a cook?', text: 'No. A kitchen helper assists with preparation, cleaning and organization, while a cook focuses on meal preparation.' },
        { title: 'Can the helper prepare ingredients?', text: 'Food preparation assistance can be discussed as part of the service scope.' },
        { title: 'Can kitchen cleaning be included?', text: 'Yes, kitchen cleaning and dish care can be included where agreed.' },
        { title: 'Is this useful for large families?', text: 'Yes. Kitchen helper support is useful for homes with frequent cooking or busy meal routines.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need help in your home kitchen?',
      finalText: 'Share your kitchen routine and support needs with INAYA.'
    },
    ar: {
      title: 'خدمات مساعد المطبخ في الإمارات لروتين الوجبات المنزلية',
      meta: 'خدمات مساعد المطبخ في الإمارات مع عناية. دعم لتحضير الطعام والعناية بالأطباق وتنظيف المطبخ والتخزين وروتين الوجبات اليومية.',
      lead: 'تساعد عناية الأسر على ترتيب خدمات مساعد المطبخ في الإمارات لتحضير الطعام والعناية بالأطباق والتنظيف وتنظيم التخزين وتسهيل روتين الوجبات.',
      whatText: 'مساعد المطبخ يدعم مطبخ المنزل دون أن يكون بالضرورة طباخاً كاملاً. هذه الخدمة مفيدة للمطابخ المزدحمة التي تحتاج مساعدة قبل وأثناء وبعد الوجبات.',
      why: ['دعم تحضير الطعام', 'العناية بالأطباق والأسطح', 'مساعدة في روتين المطبخ', 'تنظيم التخزين', 'دعم جدول وجبات الأسرة', 'مناقشة واضحة للمهام'],
      included: ['مساعدة في تحضير الطعام', 'غسيل الأطباق والعناية بالأسطح', 'دعم تنظيف المطبخ', 'تنظيم التخزين', 'مساعدة في روتين الوجبات', 'تنظيف بعد الوجبات'],
      faqs: [
        { title: 'هل مساعد المطبخ نفس الطباخ؟', text: 'لا، مساعد المطبخ يساعد في التحضير والتنظيف والتنظيم، بينما الطباخ يركز على إعداد الوجبات.' },
        { title: 'هل يمكنه تجهيز المكونات؟', text: 'يمكن مناقشة مساعدة تحضير الطعام ضمن نطاق الخدمة.' },
        { title: 'هل يشمل تنظيف المطبخ؟', text: 'نعم، يمكن إدراج تنظيف المطبخ والعناية بالأطباق عند الاتفاق.' },
        { title: 'هل يناسب الأسر الكبيرة؟', text: 'نعم، دعم مساعد المطبخ مفيد للمنازل التي تطبخ كثيراً أو لديها روتين وجبات مزدحم.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج مساعدة في مطبخ المنزل؟',
      finalText: 'شارك روتين المطبخ واحتياج الدعم مع عناية.'
    }
  }
};
