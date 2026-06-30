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

export const serviceSeoPolish: ServiceSeoPolish = {
  'live-in-maid': {
    en: {
      title: 'Live-in Maid Services in UAE for Daily Home Support',
      meta: 'Hire live-in maid services in UAE with INAYA. Clear guidance for daily cleaning, laundry, cooking support, childcare exposure, documents and family matching across all emirates.',
      lead: 'INAYA helps UAE families hire live-in maids through a clear, profile-first process for daily household routines, cleaning, laundry, kitchen support and family care expectations.',
      whatText: 'A live-in maid is suitable when the household needs consistent support every day. INAYA reviews duties, accommodation expectations, language preference, previous experience and document requirements before explaining suitable options.',
      why: ['UAE-wide live-in maid guidance', 'Profile-first family matching', 'Clear duty and accommodation discussion', 'Document and visa step support', 'Privacy-focused communication', 'Follow-up after confirmation'],
      included: ['Daily room and surface cleaning', 'Laundry and ironing routines', 'Kitchen assistance and meal preparation support', 'Childcare exposure where suitable', 'Elderly household assistance where suitable', 'Organized daily task schedule'],
      faqs: [
        { title: 'What should I check before hiring a live-in maid in UAE?', text: 'Review duties, accommodation, documents, language needs, previous experience, start date and the family routine before confirming a live-in maid.' },
        { title: 'Can a live-in maid support childcare?', text: 'Some profiles may have childcare experience. INAYA will help you discuss this requirement before recommendation.' },
        { title: 'Is a live-in maid available in every emirate?', text: 'INAYA supports enquiries across the UAE, with final availability confirmed by service type, documents and timing.' },
        { title: 'Can INAYA explain visa steps?', text: 'Yes. The team can guide you through document and visa-related steps where the selected service requires them.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need a live-in maid for your UAE home?',
      finalText: 'Share your family routine, emirate and preferred start date. INAYA will guide you with clear next steps.'
    },
    ar: {
      title: 'خدمات خادمة مقيمة في الإمارات لدعم المنزل اليومي',
      meta: 'استعن بخادمة مقيمة في الإمارات مع عناية. إرشاد واضح للتنظيف اليومي والغسيل والمطبخ ورعاية الأطفال والمستندات ومطابقة الأسرة في جميع الإمارات.',
      lead: 'تساعد عناية الأسر في الإمارات على اختيار خادمة مقيمة من خلال عملية واضحة تعتمد على الملف الفردي وروتين المنزل والتنظيف والغسيل والمطبخ وتوقعات الأسرة.',
      whatText: 'الخادمة المقيمة مناسبة عندما يحتاج المنزل إلى دعم يومي مستمر. تراجع عناية المهام وترتيب الإقامة وتفضيل اللغة والخبرة السابقة ومتطلبات المستندات قبل شرح الخيارات المناسبة.',
      why: ['إرشاد للخادمة المقيمة في الإمارات', 'مطابقة تعتمد على ملف الأسرة', 'توضيح المهام وترتيب الإقامة', 'دعم خطوات المستندات والتأشيرة', 'تواصل يحترم الخصوصية', 'متابعة بعد التأكيد'],
      included: ['تنظيف يومي للغرف والأسطح', 'روتين الغسيل والكي', 'مساعدة في المطبخ وتحضير الوجبات', 'خبرة رعاية أطفال حسب الملف', 'مساعدة كبار السن حسب الحالة', 'تنظيم جدول المهام اليومية'],
      faqs: [
        { title: 'ما الذي يجب مراجعته قبل اختيار خادمة مقيمة؟', text: 'يجب مراجعة المهام والإقامة والمستندات واللغة والخبرة وتاريخ البدء وروتين الأسرة قبل التأكيد.' },
        { title: 'هل يمكن للخادمة المقيمة دعم رعاية الأطفال؟', text: 'قد تتوفر ملفات لديها خبرة في رعاية الأطفال، وتساعدك عناية على مناقشة هذا الاحتياج قبل الترشيح.' },
        { title: 'هل الخدمة متوفرة في كل الإمارات؟', text: 'تدعم عناية الطلبات في جميع الإمارات ويتم تأكيد التوفر حسب نوع الخدمة والمستندات والتوقيت.' },
        { title: 'هل تشرح عناية خطوات التأشيرة؟', text: 'نعم، يمكن للفريق إرشادك في خطوات المستندات والتأشيرة عندما تتطلب الخدمة ذلك.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج خادمة مقيمة لمنزلك في الإمارات؟',
      finalText: 'شارك روتين الأسرة والإمارة وتاريخ البدء، وستوضح عناية الخطوات التالية.'
    }
  },
  'nanny': {
    en: {
      title: 'Nanny Services in UAE for Childcare and Family Routines',
      meta: 'Find nanny services in UAE with INAYA. Clear childcare guidance for daily routines, supervised activities, school support and family matching in Dubai, Ajman, Sharjah and across UAE.',
      lead: 'INAYA supports parents looking for nanny services in UAE with clear guidance around childcare duties, routines, safety expectations, communication and suitable profile matching.',
      whatText: 'A nanny supports children through daily routines, supervised activities, basic learning support, school schedules and family instructions. INAYA helps parents clarify age group, duties, timing and expectations before moving forward.',
      why: ['Childcare requirement review', 'Age and routine matching', 'Communication preference discussion', 'Family privacy and safety focus', 'UAE-wide nanny enquiry support', 'Follow-up with parents'],
      included: ['Daily child routine support', 'Supervised play and learning activities', 'School and nursery schedule support', 'Meal and hygiene routine help', 'Parent instruction follow-up', 'Calm family communication'],
      faqs: [
        { title: 'Can I request a nanny with newborn or toddler experience?', text: 'Yes. Share the child age and routine so INAYA can discuss relevant profile experience.' },
        { title: 'Do nannies help with school routines?', text: 'Depending on the agreed scope, nanny support can include school preparation, schedule reminders and supervised routines.' },
        { title: 'Can I discuss language preference?', text: 'Yes. Language and communication preferences should be discussed during the requirement review.' },
        { title: 'Is nanny service available across UAE?', text: 'INAYA supports nanny enquiries across the UAE subject to availability and family requirements.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Looking for a nanny in the UAE?',
      finalText: 'Tell INAYA your child age, routine and location so the team can guide you clearly.'
    },
    ar: {
      title: 'خدمات المربيات في الإمارات لرعاية الأطفال وروتين الأسرة',
      meta: 'احصل على خدمات مربيات في الإمارات مع عناية. إرشاد واضح لرعاية الأطفال والروتين اليومي والأنشطة والدوام المدرسي ومطابقة الأسرة.',
      lead: 'تدعم عناية الآباء الباحثين عن مربيات في الإمارات من خلال إرشاد واضح حول مهام رعاية الأطفال والروتين والسلامة والتواصل ومطابقة الملف المناسب.',
      whatText: 'المربية تدعم الأطفال في الروتين اليومي والأنشطة تحت الإشراف والدعم الأساسي للتعلم وجدول المدرسة وتعليمات الأسرة. تساعد عناية في توضيح عمر الطفل والمهام والتوقيت والتوقعات قبل المتابعة.',
      why: ['مراجعة احتياج رعاية الأطفال', 'مطابقة العمر والروتين', 'مناقشة تفضيل التواصل', 'تركيز على الخصوصية والسلامة', 'دعم طلبات المربيات في الإمارات', 'متابعة مع الوالدين'],
      included: ['دعم روتين الطفل اليومي', 'أنشطة ولعب تحت إشراف', 'دعم جدول المدرسة والحضانة', 'المساعدة في الوجبات والنظافة', 'اتباع تعليمات الوالدين', 'تواصل هادئ مع الأسرة'],
      faqs: [
        { title: 'هل يمكن طلب مربية لديها خبرة مع المواليد أو الأطفال الصغار؟', text: 'نعم، شارك عمر الطفل وروتينه حتى تناقش عناية الخبرة المناسبة في الملفات المتاحة.' },
        { title: 'هل تساعد المربية في روتين المدرسة؟', text: 'حسب نطاق الخدمة المتفق عليه، يمكن أن يشمل الدعم تجهيز المدرسة والتذكير بالجدول والروتين.' },
        { title: 'هل يمكن مناقشة تفضيل اللغة؟', text: 'نعم، تفضيلات اللغة والتواصل يتم توضيحها أثناء مراجعة الاحتياج.' },
        { title: 'هل خدمة المربية متوفرة في الإمارات؟', text: 'تدعم عناية طلبات المربيات في الإمارات حسب التوفر ومتطلبات الأسرة.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'تبحث عن مربية في الإمارات؟',
      finalText: 'أخبر عناية بعمر الطفل وروتينه والمنطقة حتى تحصل على إرشاد واضح.'
    }
  },
  'babysitting': {
    en: {
      title: 'Babysitting Services in UAE for Flexible Childcare',
      meta: 'Book babysitting services in UAE with INAYA for short-term, evening, occasional and family event childcare support with clear guidance and availability checks.',
      lead: 'INAYA helps families arrange babysitting support for short-term childcare needs, evenings, events, appointments and occasional home routines across the UAE.',
      whatText: 'Babysitting is best for families that need temporary childcare support instead of a full-time nanny. INAYA clarifies timing, child age, supervision expectations and home instructions before confirming next steps.',
      why: ['Flexible childcare enquiry support', 'Clear timing and supervision scope', 'Child age and routine review', 'Short-term and occasional support', 'Parent instruction clarity', 'UAE-wide availability checks'],
      included: ['Short-term child supervision', 'Safe play and routine support', 'Evening or event care', 'Basic meal and hygiene reminders', 'Parent update communication', 'Clear arrival and timing coordination'],
      faqs: [
        { title: 'When should I use babysitting instead of nanny service?', text: 'Babysitting is useful for short-term or occasional support, while nanny service is better for regular family routines.' },
        { title: 'Can babysitting be arranged for evenings?', text: 'Evening support can be discussed depending on availability, location and family requirements.' },
        { title: 'What details should I share first?', text: 'Share child age, required timing, emirate, address area and any important routine or safety notes.' },
        { title: 'Is babysitting available for events?', text: 'Event or guest support can be discussed based on timing, number of children and availability.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need flexible babysitting support?',
      finalText: 'Send your timing, location and child age to INAYA for availability guidance.'
    },
    ar: {
      title: 'خدمات جليسات أطفال في الإمارات لرعاية مرنة',
      meta: 'احجز جليسة أطفال في الإمارات مع عناية للرعاية المؤقتة أو المسائية أو المناسبات مع إرشاد واضح وفحص التوفر.',
      lead: 'تساعد عناية الأسر على ترتيب جليسات الأطفال للاحتياجات المؤقتة والمساء والمناسبات والمواعيد والروتين القصير داخل المنزل في الإمارات.',
      whatText: 'جليسة الأطفال مناسبة عندما تحتاج الأسرة رعاية مؤقتة بدلاً من مربية بدوام منتظم. توضح عناية التوقيت وعمر الطفل ونطاق الإشراف وتعليمات المنزل قبل تأكيد الخطوات التالية.',
      why: ['دعم مرن لطلبات رعاية الأطفال', 'توضيح التوقيت ونطاق الإشراف', 'مراجعة عمر الطفل وروتينه', 'دعم مؤقت أو عند الحاجة', 'وضوح تعليمات الوالدين', 'فحص التوفر في الإمارات'],
      included: ['إشراف مؤقت على الأطفال', 'لعب آمن ودعم الروتين', 'رعاية مسائية أو للمناسبات', 'تذكير أساسي بالوجبات والنظافة', 'تواصل مع الوالدين', 'تنسيق واضح للتوقيت والوصول'],
      faqs: [
        { title: 'متى أختار جليسة أطفال بدلاً من مربية؟', text: 'جليسة الأطفال مناسبة للدعم المؤقت أو عند الحاجة، بينما المربية أفضل للروتين المنتظم.' },
        { title: 'هل يمكن ترتيب جليسة أطفال في المساء؟', text: 'يمكن مناقشة الدعم المسائي حسب التوفر والمنطقة ومتطلبات الأسرة.' },
        { title: 'ما التفاصيل التي أرسلها أولاً؟', text: 'شارك عمر الطفل والتوقيت المطلوب والإمارة والمنطقة وأي ملاحظات مهمة عن الروتين أو السلامة.' },
        { title: 'هل يمكن توفير جليسة أطفال للمناسبات؟', text: 'يمكن مناقشة دعم المناسبات حسب التوقيت وعدد الأطفال والتوفر.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج جليسة أطفال مرنة؟',
      finalText: 'أرسل التوقيت والمنطقة وعمر الطفل إلى عناية لمعرفة التوفر.'
    }
  },
  'maid-visa': {
    en: {
      title: 'Maid Visa Assistance in UAE with Clear Document Guidance',
      meta: 'Maid visa assistance in UAE by INAYA. Get clear guidance for document checklist, application steps, renewal support and sponsorship responsibilities for UAE families.',
      lead: 'INAYA guides UAE families through maid visa assistance by explaining document requirements, process steps, responsibilities, renewal considerations and service options clearly.',
      whatText: 'Maid visa assistance helps families understand the documentation and steps required for sponsoring or processing a domestic worker in the UAE. INAYA focuses on clarity before any action is taken.',
      why: ['Document checklist guidance', 'Application and renewal step clarity', 'Sponsor responsibility explanation', 'Domestic worker process support', 'Transparent follow-up', 'UAE family guidance'],
      included: ['Initial requirement review', 'Document checklist explanation', 'Visa process step guidance', 'Renewal and timing discussion', 'Sponsorship responsibility clarity', 'Follow-up for next actions'],
      faqs: [
        { title: 'What documents are needed for a maid visa in UAE?', text: 'Requirements can vary by case. INAYA will explain the relevant checklist after reviewing your situation.' },
        { title: 'Can INAYA help with maid visa renewal?', text: 'The team can guide you on renewal-related steps and documents depending on the case.' },
        { title: 'Is visa assistance the same as recruitment?', text: 'No. Recruitment focuses on finding a worker, while visa assistance focuses on documents and process guidance.' },
        { title: 'Can you explain sponsor responsibilities?', text: 'Yes. INAYA helps families understand the practical responsibilities before moving forward.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need help understanding maid visa steps?',
      finalText: 'Speak with INAYA for clear document and process guidance in the UAE.'
    },
    ar: {
      title: 'مساعدة تأشيرة الخادمة في الإمارات مع إرشاد واضح للمستندات',
      meta: 'مساعدة تأشيرة الخادمة في الإمارات من عناية. احصل على إرشاد واضح لقائمة المستندات وخطوات الطلب والتجديد ومسؤوليات الكفالة.',
      lead: 'ترشد عناية الأسر في الإمارات خلال مساعدة تأشيرة الخادمة من خلال شرح المستندات والخطوات والمسؤوليات والتجديد وخيارات الخدمة بوضوح.',
      whatText: 'مساعدة تأشيرة الخادمة تساعد الأسرة على فهم المستندات والخطوات المطلوبة لكفالة أو معالجة إجراءات عاملة منزلية في الإمارات. تركز عناية على الوضوح قبل أي إجراء.',
      why: ['إرشاد قائمة المستندات', 'وضوح خطوات الطلب والتجديد', 'شرح مسؤوليات الكفيل', 'دعم إجراءات العمالة المنزلية', 'متابعة شفافة', 'إرشاد للأسر في الإمارات'],
      included: ['مراجعة أولية للاحتياج', 'شرح قائمة المستندات', 'إرشاد خطوات التأشيرة', 'مناقشة التجديد والتوقيت', 'توضيح مسؤوليات الكفالة', 'متابعة الخطوات التالية'],
      faqs: [
        { title: 'ما المستندات المطلوبة لتأشيرة الخادمة في الإمارات؟', text: 'قد تختلف المتطلبات حسب الحالة. تشرح عناية القائمة المناسبة بعد مراجعة وضعك.' },
        { title: 'هل تساعد عناية في تجديد تأشيرة الخادمة؟', text: 'يمكن للفريق إرشادك في خطوات ومستندات التجديد حسب الحالة.' },
        { title: 'هل مساعدة التأشيرة نفس خدمة التوظيف؟', text: 'لا. التوظيف يركز على العثور على العاملة، بينما مساعدة التأشيرة تركز على المستندات والإجراءات.' },
        { title: 'هل يمكن شرح مسؤوليات الكفيل؟', text: 'نعم، تساعد عناية الأسر على فهم المسؤوليات العملية قبل المتابعة.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج فهم خطوات تأشيرة الخادمة؟',
      finalText: 'تواصل مع عناية للحصول على إرشاد واضح للمستندات والإجراءات في الإمارات.'
    }
  },
  recruitment: {
    en: {
      title: 'Domestic Worker Recruitment in UAE with Profile Matching',
      meta: 'Domestic worker recruitment in UAE with INAYA. Guided profile matching for maids, nannies, cooks and caregivers with document support and family requirement review.',
      lead: 'INAYA supports domestic worker recruitment in UAE by reviewing family requirements, explaining profile options and guiding documents, duties, communication and next steps.',
      whatText: 'Recruitment is suitable when a family wants to select a domestic worker profile for a specific long-term role. INAYA helps compare profiles based on duties, experience, documents and household fit.',
      why: ['Family requirement review', 'Profile comparison guidance', 'Document and role clarity', 'Domestic worker matching', 'Interview coordination support', 'Clear next-step follow-up'],
      included: ['Role and duty discussion', 'Source country preference review', 'Profile and experience matching', 'Document checklist guidance', 'Interview and selection support', 'Placement step coordination'],
      faqs: [
        { title: 'What roles can recruitment cover?', text: 'Recruitment may cover maids, nannies, cooks, caregivers and other domestic worker roles depending on availability.' },
        { title: 'Can I request a specific nationality?', text: 'Yes, a preference can be shared, but final suitability depends on the individual profile and family needs.' },
        { title: 'How are profiles compared?', text: 'Profiles are reviewed by experience, duties, documents, communication and household expectations.' },
        { title: 'Does recruitment include visa guidance?', text: 'Visa or document guidance can be discussed when the selected recruitment path requires it.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need domestic worker recruitment support?',
      finalText: 'Tell INAYA the role, location, duties and preferred start date for guided profile matching.'
    },
    ar: {
      title: 'توظيف العمالة المنزلية في الإمارات مع مطابقة الملفات',
      meta: 'توظيف العمالة المنزلية في الإمارات مع عناية. مطابقة ملفات للخادمات والمربيات والطهاة ومقدمي الرعاية مع دعم المستندات ومراجعة احتياج الأسرة.',
      lead: 'تدعم عناية توظيف العمالة المنزلية في الإمارات من خلال مراجعة احتياج الأسرة وشرح خيارات الملفات وإرشاد المستندات والمهام والتواصل والخطوات التالية.',
      whatText: 'التوظيف مناسب عندما ترغب الأسرة في اختيار ملف عاملة منزلية لدور طويل المدى. تساعد عناية على مقارنة الملفات حسب المهام والخبرة والمستندات وملاءمة المنزل.',
      why: ['مراجعة احتياج الأسرة', 'إرشاد مقارنة الملفات', 'وضوح المستندات والدور', 'مطابقة العمالة المنزلية', 'دعم تنسيق المقابلة', 'متابعة واضحة للخطوات التالية'],
      included: ['مناقشة الدور والمهام', 'مراجعة تفضيل دولة المصدر', 'مطابقة الخبرة والملف', 'إرشاد قائمة المستندات', 'دعم المقابلة والاختيار', 'تنسيق خطوات التوظيف'],
      faqs: [
        { title: 'ما الأدوار التي يشملها التوظيف؟', text: 'قد يشمل التوظيف خادمات ومربيات وطهاة ومقدمي رعاية وأدوار عمالة منزلية أخرى حسب التوفر.' },
        { title: 'هل يمكن طلب جنسية محددة؟', text: 'نعم، يمكن مشاركة التفضيل، لكن الملاءمة النهائية تعتمد على الملف الفردي واحتياج الأسرة.' },
        { title: 'كيف تتم مقارنة الملفات؟', text: 'تتم مراجعة الملفات حسب الخبرة والمهام والمستندات والتواصل وتوقعات المنزل.' },
        { title: 'هل يشمل التوظيف إرشاد التأشيرة؟', text: 'يمكن مناقشة إرشاد التأشيرة أو المستندات عندما يتطلب مسار التوظيف ذلك.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج دعم توظيف العمالة المنزلية؟',
      finalText: 'أخبر عناية بالدور والمنطقة والمهام وتاريخ البدء للحصول على مطابقة موجهة.'
    }
  },
  'maid-replacement': {
    en: {
      title: 'Maid Replacement Services in UAE with Clear Follow-up',
      meta: 'Maid replacement services in UAE by INAYA. Get a clear review of concerns, policy guidance, replacement coordination and family support across UAE emirates.',
      lead: 'INAYA helps families understand maid replacement options by reviewing concerns, checking the applicable policy, clarifying next steps and coordinating suitable support.',
      whatText: 'A maid replacement process should be handled carefully. INAYA reviews the concern, service agreement, timing, household requirement and replacement scope before explaining the available path.',
      why: ['Concern review and documentation', 'Policy explanation', 'Replacement scope clarity', 'Family requirement reassessment', 'Follow-up coordination', 'UAE service support'],
      included: ['Issue and feedback review', 'Service policy explanation', 'Replacement requirement discussion', 'Profile or option coordination', 'Timeline guidance', 'Post-replacement follow-up'],
      faqs: [
        { title: 'When can a maid replacement be requested?', text: 'Replacement depends on the service package, policy and case details explained at the time of booking.' },
        { title: 'Will duties be reviewed again?', text: 'Yes. It is useful to review duties and expectations again so the next option fits better.' },
        { title: 'Is replacement immediate?', text: 'Timing depends on availability, policy, documents and the service type.' },
        { title: 'Can INAYA help avoid the same issue again?', text: 'The team can review feedback and household expectations to improve the next match.' }
      ],
      comparison: commonComparisonEn,
      finalTitle: 'Need maid replacement guidance?',
      finalText: 'Share your concern and INAYA will explain the possible next steps clearly.'
    },
    ar: {
      title: 'خدمات استبدال الخادمة في الإمارات مع متابعة واضحة',
      meta: 'خدمات استبدال الخادمة في الإمارات من عناية. مراجعة واضحة للملاحظات وإرشاد السياسة وتنسيق الاستبدال ودعم الأسرة في الإمارات.',
      lead: 'تساعد عناية الأسر على فهم خيارات استبدال الخادمة من خلال مراجعة الملاحظات والسياسة المعمول بها وتوضيح الخطوات وتنسيق الدعم المناسب.',
      whatText: 'يجب التعامل مع عملية استبدال الخادمة بعناية. تراجع عناية الملاحظة واتفاق الخدمة والتوقيت واحتياج المنزل ونطاق الاستبدال قبل شرح المسار المتاح.',
      why: ['مراجعة الملاحظة والتوثيق', 'شرح السياسة', 'توضيح نطاق الاستبدال', 'إعادة مراجعة احتياج الأسرة', 'تنسيق المتابعة', 'دعم الخدمة في الإمارات'],
      included: ['مراجعة المشكلة والملاحظات', 'شرح سياسة الخدمة', 'مناقشة احتياج الاستبدال', 'تنسيق الملف أو الخيار المناسب', 'إرشاد الجدول الزمني', 'متابعة بعد الاستبدال'],
      faqs: [
        { title: 'متى يمكن طلب استبدال الخادمة؟', text: 'يعتمد الاستبدال على باقة الخدمة والسياسة وتفاصيل الحالة الموضحة عند الحجز.' },
        { title: 'هل تتم مراجعة المهام مرة أخرى؟', text: 'نعم، من الأفضل مراجعة المهام والتوقعات مرة أخرى حتى يكون الخيار التالي أكثر ملاءمة.' },
        { title: 'هل الاستبدال فوري؟', text: 'يعتمد التوقيت على التوفر والسياسة والمستندات ونوع الخدمة.' },
        { title: 'هل تساعد عناية في تجنب نفس المشكلة؟', text: 'يمكن للفريق مراجعة الملاحظات وتوقعات المنزل لتحسين المطابقة التالية.' }
      ],
      comparison: commonComparisonAr,
      finalTitle: 'هل تحتاج إرشاد استبدال الخادمة؟',
      finalText: 'شارك الملاحظة مع عناية وسيتم شرح الخطوات الممكنة بوضوح.'
    }
  }
};
