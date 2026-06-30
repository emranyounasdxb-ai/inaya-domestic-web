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

export const serviceSeoPolishMoreB: ServiceSeoPolish = {
  'elder-care': {
    en: {
      title: 'Elder Care Services in UAE for Respectful Home Support',
      meta: 'Elder care services in UAE with INAYA. Arrange respectful senior support, companionship, daily routine assistance and family follow-up at home.',
      lead: 'INAYA helps families arrange elder care services in UAE for respectful senior support, daily companionship, household routine assistance and comfort-focused home care.',
      whatText: 'Elder care support is suitable for families that want a caring presence at home for an elderly parent or relative. INAYA helps clarify the required routine, mobility support, communication and comfort expectations.',
      why: ['Respectful senior care guidance', 'Daily routine and companionship support', 'Family instruction review', 'Comfort and dignity focus', 'Home environment understanding', 'Clear follow-up with family'],
      included: ['Daily companionship', 'Routine and mobility assistance', 'Meal and comfort reminders', 'Light household support around the senior', 'Family update communication', 'Respectful care expectations'],
      faqs: [
        { title: 'Is elder care medical care?', text: 'INAYA elder care is focused on home support and companionship. Any medical requirement should be discussed clearly before service selection.' },
        { title: 'Can care support daily routines?', text: 'Yes. Routine support can include companionship, reminders and daily comfort assistance depending on scope.' },
        { title: 'Can the family give instructions?', text: 'Yes. Family instructions and comfort preferences should be shared before confirmation.' },
        { title: 'Is elder care available across UAE?', text: 'INAYA supports elder care enquiries across the UAE subject to availability and requirement.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need respectful elder care support?',
      finalText: 'Share your family routine and care expectations with INAYA for clear guidance.'
    },
    ar: {
      title: 'خدمات رعاية كبار السن في الإمارات لدعم منزلي محترم',
      meta: 'خدمات رعاية كبار السن في الإمارات مع عناية. ترتيب دعم محترم ومرافقة يومية ومساعدة روتينية ومتابعة مع الأسرة داخل المنزل.',
      lead: 'تساعد عناية الأسر على ترتيب خدمات رعاية كبار السن في الإمارات لدعم محترم ومرافقة يومية ومساعدة في الروتين ورعاية منزلية تركز على الراحة.',
      whatText: 'دعم رعاية كبار السن مناسب للأسر التي تريد حضوراً حنوناً في المنزل لأحد الوالدين أو الأقارب. تساعد عناية في توضيح الروتين والدعم الحركي والتواصل وتوقعات الراحة.',
      why: ['إرشاد رعاية محترمة لكبار السن', 'دعم الروتين والمرافقة اليومية', 'مراجعة تعليمات الأسرة', 'تركيز على الراحة والكرامة', 'فهم بيئة المنزل', 'متابعة واضحة مع الأسرة'],
      included: ['مرافقة يومية', 'مساعدة في الروتين والحركة', 'تذكير بالوجبات والراحة', 'دعم منزلي خفيف حول كبير السن', 'تواصل تحديثات مع الأسرة', 'توقعات رعاية محترمة'],
      faqs: [
        { title: 'هل رعاية كبار السن رعاية طبية؟', text: 'خدمة عناية تركز على الدعم المنزلي والمرافقة. أي احتياج طبي يجب توضيحه قبل اختيار الخدمة.' },
        { title: 'هل يمكن دعم الروتين اليومي؟', text: 'نعم، يمكن أن يشمل الدعم المرافقة والتذكير والمساعدة اليومية حسب النطاق.' },
        { title: 'هل يمكن للأسرة إعطاء تعليمات؟', text: 'نعم، يجب مشاركة تعليمات الأسرة وتفضيلات الراحة قبل التأكيد.' },
        { title: 'هل الخدمة متوفرة في الإمارات؟', text: 'تدعم عناية طلبات رعاية كبار السن في الإمارات حسب التوفر والاحتياج.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج رعاية محترمة لكبار السن؟',
      finalText: 'شارك روتين الأسرة وتوقعات الرعاية مع عناية للحصول على إرشاد واضح.'
    }
  },
  'patient-care': {
    en: {
      title: 'Patient Care Services at Home in UAE for Daily Support',
      meta: 'Patient care services at home in UAE with INAYA. Arrange daily living assistance, comfort support, family instructions and respectful home care guidance.',
      lead: 'INAYA helps families arrange patient care services at home in UAE for daily living support, comfort-focused assistance and clear family instruction follow-up.',
      whatText: 'Patient care at home is useful when a family member needs non-hospital daily support, personal routine assistance and a caring presence. Requirements should be clarified carefully before service selection.',
      why: ['Home patient support guidance', 'Daily living assistance review', 'Comfort and routine focus', 'Family instruction clarity', 'Respectful care environment', 'Follow-up and communication'],
      included: ['Daily living support', 'Routine comfort assistance', 'Mobility and household help where suitable', 'Family instruction follow-up', 'Meal and hygiene routine reminders', 'Clear care scope discussion'],
      faqs: [
        { title: 'Is patient care at home medical nursing?', text: 'This service focuses on home support. Any clinical or nursing requirement must be discussed clearly and may need specialist care.' },
        { title: 'Can care be arranged after hospital discharge?', text: 'Post-discharge support can be discussed depending on the required scope and family instructions.' },
        { title: 'Can family routines be followed?', text: 'Yes. Family instructions, comfort preferences and daily routines should be shared before confirmation.' },
        { title: 'Does INAYA check availability by emirate?', text: 'Yes. Availability is reviewed by emirate, timing and service requirements.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need patient care support at home?',
      finalText: 'Share the daily support requirement and location with INAYA for clear next steps.'
    },
    ar: {
      title: 'خدمات رعاية المرضى في المنزل في الإمارات للدعم اليومي',
      meta: 'خدمات رعاية المرضى في المنزل في الإمارات مع عناية. ترتيب مساعدة يومية ودعم للراحة وتعليمات الأسرة وإرشاد رعاية منزلية محترمة.',
      lead: 'تساعد عناية الأسر على ترتيب خدمات رعاية المرضى في المنزل في الإمارات لدعم الحياة اليومية والمساعدة التي تركز على الراحة ومتابعة تعليمات الأسرة.',
      whatText: 'رعاية المرضى في المنزل مفيدة عندما يحتاج أحد أفراد الأسرة إلى دعم يومي خارج المستشفى ومساعدة في الروتين وحضور مهتم. يجب توضيح المتطلبات بعناية قبل اختيار الخدمة.',
      why: ['إرشاد دعم المرضى في المنزل', 'مراجعة مساعدة الحياة اليومية', 'تركيز على الراحة والروتين', 'وضوح تعليمات الأسرة', 'بيئة رعاية محترمة', 'متابعة وتواصل'],
      included: ['دعم الحياة اليومية', 'مساعدة في روتين الراحة', 'مساعدة في الحركة والمنزل حسب الحالة', 'متابعة تعليمات الأسرة', 'تذكير بروتين الوجبات والنظافة', 'مناقشة واضحة لنطاق الرعاية'],
      faqs: [
        { title: 'هل رعاية المرضى في المنزل تمريض طبي؟', text: 'تركز هذه الخدمة على الدعم المنزلي. أي احتياج طبي أو تمريضي يجب توضيحه وقد يحتاج رعاية متخصصة.' },
        { title: 'هل يمكن ترتيب الدعم بعد الخروج من المستشفى؟', text: 'يمكن مناقشة دعم ما بعد الخروج حسب النطاق المطلوب وتعليمات الأسرة.' },
        { title: 'هل يمكن اتباع روتين الأسرة؟', text: 'نعم، يجب مشاركة تعليمات الأسرة وتفضيلات الراحة والروتين اليومي قبل التأكيد.' },
        { title: 'هل تراجع عناية التوفر حسب الإمارة؟', text: 'نعم، تتم مراجعة التوفر حسب الإمارة والتوقيت ومتطلبات الخدمة.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج دعم رعاية مريض في المنزل؟',
      finalText: 'شارك احتياج الدعم اليومي والمنطقة مع عناية للحصول على خطوات واضحة.'
    }
  },
  'companion-care': {
    en: {
      title: 'Companion Care Services in UAE for Friendly Home Support',
      meta: 'Companion care services in UAE with INAYA. Arrange friendly companionship, conversation, daily routine help and family follow-up for loved ones at home.',
      lead: 'INAYA helps families arrange companion care services in UAE for loved ones who need friendly presence, conversation, routine support and emotional comfort at home.',
      whatText: 'Companion care is not only task support. It gives a family member a trusted presence, conversation and gentle routine help while keeping communication clear with the family.',
      why: ['Friendly companionship guidance', 'Daily routine support discussion', 'Emotional comfort focus', 'Family update communication', 'Respectful home presence', 'Flexible timing review'],
      included: ['Conversation and companionship', 'Light routine assistance', 'Meal and activity reminders', 'Family update support', 'Comfort-focused presence', 'Schedule and timing clarity'],
      faqs: [
        { title: 'Who needs companion care?', text: 'Companion care is useful for seniors or family members who need presence, conversation and gentle routine support.' },
        { title: 'Is companion care medical care?', text: 'No. It focuses on companionship and daily comfort, not medical treatment.' },
        { title: 'Can timing be flexible?', text: 'Timing can be discussed based on family needs and availability.' },
        { title: 'Can the family receive updates?', text: 'Yes. Update expectations can be discussed before confirmation.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need companion care for a loved one?',
      finalText: 'Share the preferred schedule and care expectations with INAYA.'
    },
    ar: {
      title: 'خدمات رعاية المرافقة في الإمارات لدعم منزلي ودي',
      meta: 'خدمات رعاية المرافقة في الإمارات مع عناية. ترتيب مرافقة ودية ومحادثة ومساعدة روتينية وتحديثات للأسرة داخل المنزل.',
      lead: 'تساعد عناية الأسر على ترتيب خدمات رعاية المرافقة في الإمارات للأحباء الذين يحتاجون حضوراً ودياً ومحادثة ودعماً روتينياً وراحة نفسية في المنزل.',
      whatText: 'رعاية المرافقة ليست مجرد دعم للمهام. إنها توفر حضوراً موثوقاً ومحادثة ومساعدة روتينية لطيفة مع إبقاء التواصل واضحاً مع الأسرة.',
      why: ['إرشاد مرافقة ودية', 'مناقشة دعم الروتين اليومي', 'تركيز على الراحة النفسية', 'تواصل تحديثات مع الأسرة', 'حضور منزلي محترم', 'مراجعة توقيت مرن'],
      included: ['محادثة ومرافقة', 'مساعدة روتينية خفيفة', 'تذكير بالوجبات والأنشطة', 'دعم تحديثات الأسرة', 'حضور يركز على الراحة', 'وضوح الجدول والتوقيت'],
      faqs: [
        { title: 'من يحتاج رعاية المرافقة؟', text: 'تفيد كبار السن أو أفراد الأسرة الذين يحتاجون حضوراً ومحادثة ودعماً روتينياً لطيفاً.' },
        { title: 'هل رعاية المرافقة رعاية طبية؟', text: 'لا، تركز على المرافقة والراحة اليومية وليس العلاج الطبي.' },
        { title: 'هل يمكن أن يكون التوقيت مرناً؟', text: 'يمكن مناقشة التوقيت حسب احتياج الأسرة والتوفر.' },
        { title: 'هل يمكن للأسرة استلام تحديثات؟', text: 'نعم، يمكن مناقشة توقعات التحديث قبل التأكيد.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج مرافقة لأحد أفراد الأسرة؟',
      finalText: 'شارك الجدول المفضل وتوقعات الرعاية مع عناية.'
    }
  },
  'sponsorship-transfer': {
    en: {
      title: 'Maid Sponsorship Transfer in UAE with Document Guidance',
      meta: 'Maid sponsorship transfer in UAE with INAYA. Get clear guidance for transfer steps, document review, sponsor responsibilities and domestic worker process support.',
      lead: 'INAYA helps families understand maid sponsorship transfer in UAE with clear guidance on documents, process steps, sponsor responsibilities and next actions.',
      whatText: 'A sponsorship transfer requires careful review of documents, timing and responsibilities. INAYA explains the practical steps so families understand what is required before moving forward.',
      why: ['Transfer step guidance', 'Document checklist review', 'Sponsor responsibility clarity', 'Domestic worker process support', 'Timeline and follow-up discussion', 'Clear communication before action'],
      included: ['Initial case review', 'Transfer document guidance', 'Sponsor responsibility explanation', 'Timing and process discussion', 'Follow-up for next steps', 'Service option clarification'],
      faqs: [
        { title: 'What is maid sponsorship transfer?', text: 'It is the process of changing sponsorship responsibility for a domestic worker, subject to applicable UAE requirements and documents.' },
        { title: 'Can INAYA explain required documents?', text: 'Yes. The team can guide you on the relevant checklist after reviewing the case.' },
        { title: 'Does timing vary?', text: 'Yes. Timing depends on documents, current status and process requirements.' },
        { title: 'Is transfer the same as new recruitment?', text: 'No. Transfer focuses on changing sponsorship, while recruitment focuses on selecting a new worker profile.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need maid sponsorship transfer guidance?',
      finalText: 'Share your case details with INAYA for clear document and process support.'
    },
    ar: {
      title: 'نقل كفالة الخادمة في الإمارات مع إرشاد المستندات',
      meta: 'نقل كفالة الخادمة في الإمارات مع عناية. إرشاد واضح لخطوات النقل ومراجعة المستندات ومسؤوليات الكفيل ودعم إجراءات العمالة المنزلية.',
      lead: 'تساعد عناية الأسر على فهم نقل كفالة الخادمة في الإمارات من خلال إرشاد واضح للمستندات والخطوات ومسؤوليات الكفيل والإجراءات التالية.',
      whatText: 'نقل الكفالة يتطلب مراجعة دقيقة للمستندات والتوقيت والمسؤوليات. تشرح عناية الخطوات العملية حتى تفهم الأسرة المطلوب قبل المتابعة.',
      why: ['إرشاد خطوات النقل', 'مراجعة قائمة المستندات', 'توضيح مسؤوليات الكفيل', 'دعم إجراءات العمالة المنزلية', 'مناقشة الجدول والمتابعة', 'تواصل واضح قبل الإجراء'],
      included: ['مراجعة أولية للحالة', 'إرشاد مستندات النقل', 'شرح مسؤوليات الكفيل', 'مناقشة التوقيت والإجراء', 'متابعة الخطوات التالية', 'توضيح خيار الخدمة'],
      faqs: [
        { title: 'ما هو نقل كفالة الخادمة؟', text: 'هو إجراء تغيير مسؤولية الكفالة للعاملة المنزلية حسب متطلبات ومستندات الإمارات المعمول بها.' },
        { title: 'هل تشرح عناية المستندات المطلوبة؟', text: 'نعم، يمكن للفريق إرشادك للقائمة المناسبة بعد مراجعة الحالة.' },
        { title: 'هل يختلف التوقيت؟', text: 'نعم، يعتمد التوقيت على المستندات والحالة الحالية ومتطلبات الإجراء.' },
        { title: 'هل النقل نفس التوظيف الجديد؟', text: 'لا، النقل يركز على تغيير الكفالة، بينما التوظيف يركز على اختيار ملف عاملة جديد.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج إرشاد نقل كفالة الخادمة؟',
      finalText: 'شارك تفاصيل الحالة مع عناية للحصول على دعم واضح للمستندات والإجراءات.'
    }
  },
  'experienced-maid': {
    en: {
      title: 'Experienced Maid Hiring in UAE for Skilled Household Support',
      meta: 'Experienced maid hiring in UAE with INAYA. Find trained or experienced maids for cleaning, cooking, childcare exposure, laundry and family routine support.',
      lead: 'INAYA helps families looking for experienced maid hiring in UAE by reviewing past duties, practical skills, family expectations and suitable profile options.',
      whatText: 'An experienced maid can support homes that need stronger practical knowledge in cleaning, laundry, cooking, childcare exposure or daily household routines. The right choice still depends on the individual profile.',
      why: ['Experience and duty review', 'Cleaning and laundry skill matching', 'Cooking or childcare preference discussion', 'Profile-first recommendation', 'Family routine alignment', 'Document and process clarity'],
      included: ['Past experience review', 'Skill and duty matching', 'Cleaning routine discussion', 'Cooking preference review', 'Childcare exposure check where needed', 'Family expectation clarity'],
      faqs: [
        { title: 'What counts as an experienced maid?', text: 'Experience can include previous household work, cleaning, laundry, cooking, childcare exposure or long-term family support.' },
        { title: 'Can I ask for cooking experience?', text: 'Yes. Cooking preferences should be discussed during the requirement review.' },
        { title: 'Is training guaranteed for every profile?', text: 'Experience and training vary by profile, so INAYA reviews available details before recommendation.' },
        { title: 'Can experienced maids support children?', text: 'Some profiles may have childcare exposure. Share child age and routine before selection.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need an experienced maid in UAE?',
      finalText: 'Tell INAYA your priority skills and family routine for profile guidance.'
    },
    ar: {
      title: 'توظيف خادمة ذات خبرة في الإمارات لدعم منزلي ماهر',
      meta: 'توظيف خادمة ذات خبرة في الإمارات مع عناية. ملفات مدربة أو ذات خبرة للتنظيف والطبخ ورعاية الأطفال والغسيل ودعم روتين الأسرة.',
      lead: 'تساعد عناية الأسر الباحثة عن خادمة ذات خبرة في الإمارات من خلال مراجعة المهام السابقة والمهارات العملية وتوقعات الأسرة والملفات المناسبة.',
      whatText: 'الخادمة ذات الخبرة تدعم المنازل التي تحتاج معرفة عملية أقوى في التنظيف والغسيل والطبخ أو رعاية الأطفال أو الروتين اليومي. ويبقى الاختيار الصحيح معتمداً على الملف الفردي.',
      why: ['مراجعة الخبرة والمهام', 'مطابقة مهارات التنظيف والغسيل', 'مناقشة تفضيل الطبخ أو الأطفال', 'ترشيح يعتمد على الملف', 'مواءمة روتين الأسرة', 'وضوح المستندات والإجراءات'],
      included: ['مراجعة الخبرة السابقة', 'مطابقة المهارات والمهام', 'مناقشة روتين التنظيف', 'مراجعة تفضيل الطبخ', 'فحص خبرة الأطفال عند الحاجة', 'وضوح توقعات الأسرة'],
      faqs: [
        { title: 'ماذا يعني خادمة ذات خبرة؟', text: 'قد تشمل الخبرة عملاً منزلياً سابقاً أو تنظيفاً أو غسيلاً أو طبخاً أو رعاية أطفال أو دعماً طويل المدى للأسرة.' },
        { title: 'هل يمكن طلب خبرة في الطبخ؟', text: 'نعم، يجب مناقشة تفضيلات الطبخ أثناء مراجعة الاحتياج.' },
        { title: 'هل التدريب مضمون لكل ملف؟', text: 'تختلف الخبرة والتدريب حسب الملف، لذلك تراجع عناية التفاصيل المتاحة قبل الترشيح.' },
        { title: 'هل يمكن للخادمة ذات الخبرة دعم الأطفال؟', text: 'قد تتوفر ملفات لديها خبرة مع الأطفال. شارك عمر الطفل وروتينه قبل الاختيار.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج خادمة ذات خبرة في الإمارات؟',
      finalText: 'أخبر عناية بالمهارات المطلوبة وروتين الأسرة للحصول على إرشاد الملفات.'
    }
  },
  'background-verification': {
    en: {
      title: 'Maid Background Verification Services in UAE for Safer Hiring',
      meta: 'Maid background verification services in UAE with INAYA. Review identity details, documents, experience notes and hiring risk considerations before selecting domestic support.',
      lead: 'INAYA helps families understand maid background verification in UAE by reviewing available identity details, documents, experience notes and suitability factors before selection.',
      whatText: 'Background verification helps families make a more careful decision when hiring domestic support. INAYA focuses on available documents, profile details and practical risk discussion before moving forward.',
      why: ['Identity detail review guidance', 'Document check support', 'Experience note review', 'Family suitability discussion', 'Risk and expectation clarity', 'Better hiring confidence'],
      included: ['Profile detail review', 'Document checklist guidance', 'Previous experience discussion', 'Identity information check support', 'Family concern review', 'Clear recommendation notes'],
      faqs: [
        { title: 'Why is background verification important?', text: 'It helps families review available information before choosing domestic support for the home.' },
        { title: 'Does verification remove all risk?', text: 'No process can remove every risk, but proper review improves clarity and confidence.' },
        { title: 'What details are reviewed?', text: 'Available identity details, documents, experience notes and family suitability factors may be reviewed.' },
        { title: 'Is this useful before recruitment?', text: 'Yes. Verification guidance is useful before confirming a domestic worker profile.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need background verification guidance?',
      finalText: 'Speak with INAYA to understand what can be reviewed before you proceed.'
    },
    ar: {
      title: 'خدمات التحقق من خلفية الخادمة في الإمارات لاختيار أكثر أماناً',
      meta: 'خدمات التحقق من خلفية الخادمة في الإمارات مع عناية. مراجعة بيانات الهوية والمستندات وملاحظات الخبرة واعتبارات المخاطر قبل اختيار الدعم المنزلي.',
      lead: 'تساعد عناية الأسر على فهم التحقق من خلفية الخادمة في الإمارات من خلال مراجعة بيانات الهوية والمستندات وملاحظات الخبرة وعوامل الملاءمة قبل الاختيار.',
      whatText: 'التحقق من الخلفية يساعد الأسرة على اتخاذ قرار أكثر حذراً عند اختيار دعم منزلي. تركز عناية على المستندات المتاحة وتفاصيل الملف ومناقشة المخاطر العملية قبل المتابعة.',
      why: ['إرشاد مراجعة بيانات الهوية', 'دعم فحص المستندات', 'مراجعة ملاحظات الخبرة', 'مناقشة ملاءمة الأسرة', 'وضوح المخاطر والتوقعات', 'ثقة أكبر في الاختيار'],
      included: ['مراجعة تفاصيل الملف', 'إرشاد قائمة المستندات', 'مناقشة الخبرة السابقة', 'دعم فحص معلومات الهوية', 'مراجعة ملاحظات الأسرة', 'ملاحظات ترشيح واضحة'],
      faqs: [
        { title: 'لماذا التحقق من الخلفية مهم؟', text: 'يساعد الأسرة على مراجعة المعلومات المتاحة قبل اختيار الدعم المنزلي.' },
        { title: 'هل يزيل التحقق كل المخاطر؟', text: 'لا يوجد إجراء يزيل كل المخاطر، لكن المراجعة الصحيحة تزيد الوضوح والثقة.' },
        { title: 'ما التفاصيل التي تتم مراجعتها؟', text: 'قد تتم مراجعة بيانات الهوية والمستندات وملاحظات الخبرة وعوامل ملاءمة الأسرة المتاحة.' },
        { title: 'هل يفيد قبل التوظيف؟', text: 'نعم، إرشاد التحقق مفيد قبل تأكيد ملف العاملة المنزلية.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج إرشاد التحقق من الخلفية؟',
      finalText: 'تواصل مع عناية لفهم ما يمكن مراجعته قبل المتابعة.'
    }
  }
};
