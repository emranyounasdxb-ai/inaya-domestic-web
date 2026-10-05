import type { Lang, Pair, ServiceCopy } from './service-page-copy';

type Guidance = {
  scope: string;
  arrangement: string;
  prepare: string;
  duties: string[];
  limits: string[];
  steps: Pair[];
  quote: string[];
  faqs: Pair[];
};

// Service scope already described by INAYA; these are questions to agree, not new contract benefits.
const guidance: Record<string, Record<Lang, Guidance>> = {
  'live-in-maid': {
    en: {
      scope: 'A live-in maid resides in the household and supports the agreed daily cleaning, laundry and household routine. Living in describes accommodation; the duties, working schedule and rest arrangements still need a separate agreement.',
      arrangement: 'Discuss accommodation and the daily work schedule separately. Living in does not mean continuous availability or an unlimited list of duties.',
      prepare: 'Prepare the home size, daily tasks, family routine, accommodation details, emirate and preferred start date. Separate essential duties from optional preferences.',
      duties: ['Room and surface cleaning agreed for the home', 'Laundry and ironing routine', 'Kitchen and meal preparation assistance where agreed', 'Daily task priorities and communication with the family'],
      limits: ['Do not assume childcare or specialist care is part of cleaning duties', 'Agree working hours, rest and accommodation responsibilities', 'Review the written price, document responsibilities and support terms', 'Confirm individual experience and current availability before agreeing'],
      steps: [
        { title: 'Describe the home', text: 'Share the rooms, household routine and duties that need daily support.' },
        { title: 'Discuss living arrangements', text: 'Explain accommodation and the work and rest schedule you want to discuss.' },
        { title: 'Review individual profiles', text: 'Ask about relevant cleaning, laundry and communication experience.' },
        { title: 'Review costs and documents', text: 'Request a written scope, quote and case-specific responsibilities.' },
        { title: 'Confirm the agreement', text: 'Confirm availability, timing and support terms before making an arrangement.' }
      ],
      quote: ['Home size and agreed daily duties', 'Work schedule and accommodation arrangement', 'Selected service scope and case-specific requirements'],
      faqs: [
        { title: 'Is live-in the same as full-time?', text: 'No. Live-in describes residence in the household; full-time describes the work schedule. Discuss both separately so accommodation does not replace an agreement about duties and hours.' },
        { title: 'Does a live-in maid also provide nanny care?', text: 'Do not assume it. If childcare is the main need, discuss nanny services and the individual profile’s childcare experience separately.' },
        { title: 'What should I review before hiring?', text: 'Review relevant experience and communication, the proposed duties, work and rest arrangements, costs, document responsibilities and written support terms. Ask what evidence is available for each profile.' }
      ]
    },
    ar: {
      scope: 'تقيم الخادمة المقيمة في منزل الأسرة وتساعد في التنظيف والغسيل والروتين اليومي المتفق عليه. الإقامة تصف السكن؛ وتحتاج المهام وجدول العمل والراحة إلى اتفاق مستقل.',
      arrangement: 'ناقش السكن وجدول العمل اليومي بشكل منفصل. الإقامة لا تعني التوفر الدائم أو مهاماً بلا حدود.',
      prepare: 'جهز حجم المنزل والمهام اليومية وروتين الأسرة وتفاصيل السكن والإمارة وموعد البدء المفضل. افصل المهام الأساسية عن التفضيلات الاختيارية.',
      duties: ['تنظيف الغرف والأسطح المتفق عليها', 'روتين الغسيل والكي', 'مساعدة المطبخ وتحضير الوجبات عند الاتفاق', 'أولويات المهام اليومية والتواصل مع الأسرة'],
      limits: ['لا تفترض شمول رعاية الأطفال أو الرعاية المتخصصة ضمن التنظيف', 'اتفق على ساعات العمل والراحة ومسؤوليات السكن', 'راجع السعر ومسؤوليات المستندات وشروط الدعم كتابةً', 'أكد الخبرة الفردية والتوفر الحالي قبل الاتفاق'],
      steps: [
        { title: 'صف المنزل', text: 'شارك الغرف وروتين الأسرة والمهام التي تحتاج دعماً يومياً.' },
        { title: 'ناقش السكن', text: 'وضح السكن وجدول العمل والراحة المطلوب مناقشته.' },
        { title: 'راجع الملفات الفردية', text: 'اسأل عن خبرة التنظيف والغسيل والتواصل المناسبة.' },
        { title: 'راجع التكاليف والمستندات', text: 'اطلب النطاق والسعر والمسؤوليات المناسبة للحالة كتابةً.' },
        { title: 'أكد الاتفاق', text: 'أكد التوفر والتوقيت وشروط الدعم قبل إتمام الترتيب.' }
      ],
      quote: ['حجم المنزل والمهام اليومية المتفق عليها', 'جدول العمل وترتيب السكن', 'نطاق الخدمة والمتطلبات الخاصة بالحالة'],
      faqs: [
        { title: 'هل الإقامة تعني الدوام الكامل؟', text: 'لا. الإقامة تصف السكن في منزل الأسرة، والدوام الكامل يصف جدول العمل. ناقش الاثنين بشكل منفصل كي لا يحل السكن محل الاتفاق على المهام والساعات.' },
        { title: 'هل الخادمة المقيمة تقوم أيضاً بدور المربية؟', text: 'لا تفترض ذلك. إذا كانت رعاية الأطفال هي الحاجة الأساسية، فناقش خدمة المربية وخبرة الملف الفردي في رعاية الأطفال بشكل منفصل.' },
        { title: 'ماذا أراجع قبل التوظيف؟', text: 'راجع الخبرة المناسبة والتواصل والمهام المقترحة والعمل والراحة والتكاليف ومسؤوليات المستندات وشروط الدعم المكتوبة. اسأل عن الأدلة التي يمكن مراجعتها لكل ملف.' }
      ]
    }
  },
  'full-time-maid': {
    en: {
      scope: 'Full-time maid enquiries concern regular household work on an agreed schedule: cleaning, laundry, ironing and kitchen assistance where agreed. Full-time does not by itself specify that the worker lives in your home.',
      arrangement: 'Define the daily and weekly schedule first, then discuss live-in or live-out arrangements separately. A monthly pricing period alone does not define the working arrangement.',
      prepare: 'Share the home size, recurring duties, required hours and days, emirate, preferred timing and any accommodation proposal.',
      duties: ['Regular room and surface cleaning', 'Laundry and ironing priorities', 'Kitchen assistance where agreed', 'An organized household task schedule'],
      limits: ['Agree hours, rest and which duties take priority', 'Do not assume a live-in residence or continuous availability', 'Discuss childcare, cooking or care roles separately if they are the main requirement', 'Confirm written costs, documents and support terms before agreeing'],
      steps: [
        { title: 'List recurring work', text: 'Describe the cleaning, laundry and household workload.' },
        { title: 'Define the schedule', text: 'Specify days and hours and discuss residence separately.' },
        { title: 'Compare experience', text: 'Review the individual profile against your required duties.' },
        { title: 'Request a written proposal', text: 'Clarify costs, responsibilities and service support conditions.' },
        { title: 'Confirm the arrangement', text: 'Agree the scope and timing after availability and terms are confirmed.' }
      ],
      quote: ['Recurring workload and home size', 'Required days, hours and working arrangement', 'Agreed service scope and any case-specific requirements'],
      faqs: [
        { title: 'Does full-time mean live-in?', text: 'No. Full-time concerns the work schedule. Live-in concerns accommodation. Confirm both parts of the proposed arrangement.' },
        { title: 'Does monthly pricing mean full-time work?', text: 'A full-time enquiry concerns a regular work schedule. Contact INAYA to confirm the working arrangement, duties, schedule and terms included in your selected package.' },
        { title: 'Can duties be changed later?', text: 'Discuss the proposed change with INAYA and review the agreement. Do not assume extra duties, hours or support are automatically included.' }
      ]
    },
    ar: {
      scope: 'تتعلق طلبات الخادمة بدوام كامل بالعمل المنزلي المنتظم وفق جدول متفق عليه: التنظيف والغسيل والكي ومساعدة المطبخ عند الاتفاق. الدوام الكامل لا يحدد وحده إقامة العاملة في المنزل.',
      arrangement: 'حدد الجدول اليومي والأسبوعي أولاً، ثم ناقش الإقامة أو عدم الإقامة بشكل منفصل. فترة التسعير الشهرية وحدها لا تحدد ترتيب العمل.',
      prepare: 'شارك حجم المنزل والمهام المتكررة والساعات والأيام المطلوبة والإمارة والتوقيت المفضل وأي اقتراح للسكن.',
      duties: ['تنظيف منتظم للغرف والأسطح', 'أولويات الغسيل والكي', 'مساعدة المطبخ عند الاتفاق', 'جدول منظم للمهام المنزلية'],
      limits: ['اتفق على الساعات والراحة وأولويات المهام', 'لا تفترض الإقامة أو التوفر الدائم', 'ناقش رعاية الأطفال أو الطبخ أو الرعاية بشكل منفصل إذا كانت الحاجة الأساسية', 'أكد التكاليف والمستندات وشروط الدعم كتابةً'],
      steps: [
        { title: 'حدد العمل المتكرر', text: 'صف عبء التنظيف والغسيل والمهام المنزلية.' },
        { title: 'حدد الجدول', text: 'وضح الأيام والساعات وناقش السكن بشكل منفصل.' },
        { title: 'قارن الخبرة', text: 'راجع الملف الفردي وفق المهام المطلوبة.' },
        { title: 'اطلب عرضاً مكتوباً', text: 'وضح التكاليف والمسؤوليات وشروط دعم الخدمة.' },
        { title: 'أكد الترتيب', text: 'اتفق على النطاق والتوقيت بعد تأكيد التوفر والشروط.' }
      ],
      quote: ['عبء العمل المتكرر وحجم المنزل', 'الأيام والساعات وترتيب العمل', 'نطاق الخدمة وأي متطلبات خاصة بالحالة'],
      faqs: [
        { title: 'هل الدوام الكامل يعني الإقامة؟', text: 'لا. الدوام الكامل يتعلق بجدول العمل، والإقامة تتعلق بالسكن. أكد الجزأين في الترتيب المقترح.' },
        { title: 'هل يعني السعر الشهري العمل بدوام كامل؟', text: 'يتعلق طلب الدوام الكامل بجدول عمل منتظم. تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها.' },
        { title: 'هل يمكن تغيير المهام لاحقاً؟', text: 'ناقش التغيير مع عناية وراجع الاتفاق. لا تفترض شمول المهام أو الساعات أو الدعم الإضافي تلقائياً.' }
      ]
    }
  },
  'part-time-maid': {
    en: {
      scope: 'Part-time maid support is organized around scheduled visits and a defined task list. Discuss room cleaning, laundry, ironing or kitchen assistance according to the time and scope agreed for each visit.',
      arrangement: 'State the preferred visit days, time window and priorities. Part-time visits do not imply a full-time worker or residence in your home.',
      prepare: 'Prepare the rooms to clean, priority tasks, visit frequency, preferred hours, address and building access details. Ask which supplies and equipment to prepare.',
      duties: ['Agreed rooms and surfaces', 'Laundry or ironing when included in the task list', 'Kitchen assistance when agreed', 'A priority list that fits the visit'],
      limits: ['Specialist deep cleaning or moving services are not assumed', 'Childcare requires a separate discussion of duties and experience', 'Confirm supplies, access and the time available for tasks', 'Discuss rescheduling, extra time and costs against the agreed terms'],
      steps: [
        { title: 'List the tasks', text: 'Identify rooms and the most important work for the visit.' },
        { title: 'Specify visit timing', text: 'Share frequency, preferred hours and the exact area.' },
        { title: 'Check practical details', text: 'Confirm access, supplies and any task limits with the team.' },
        { title: 'Review the quote', text: 'Request the visit scope, costs and scheduling conditions in writing.' },
        { title: 'Confirm the visit', text: 'Confirm availability and the agreed work before relying on a booking.' }
      ],
      quote: ['Visit frequency and agreed time', 'Home size and priority tasks', 'Address, access and agreed service scope'],
      faqs: [
        { title: 'How do I decide the visit scope?', text: 'List the rooms and tasks in priority order and discuss what can fit the agreed visit. Do not assume every household task is included.' },
        { title: 'Is part-time the same as a monthly plan?', text: 'Part-time describes scheduled, limited-time support. Contact INAYA to confirm the working arrangement, duties, schedule and terms included in your selected package.' },
        { title: 'Are supplies and extra hours included?', text: 'Confirm supplies, equipment, agreed hours and the treatment of extra tasks or time in the written proposal; no fixed inclusion is promised here.' }
      ]
    },
    ar: {
      scope: 'ينظم دعم الخادمة بدوام جزئي حول زيارات مجدولة وقائمة مهام محددة. ناقش تنظيف الغرف أو الغسيل أو الكي أو مساعدة المطبخ وفق الوقت والنطاق المتفق عليه لكل زيارة.',
      arrangement: 'حدد أيام الزيارة والفترة الزمنية والأولويات. الزيارات الجزئية لا تعني توفير عاملة بدوام كامل أو إقامة في المنزل.',
      prepare: 'جهز الغرف والمهام ذات الأولوية وتكرار الزيارات والساعات المفضلة والعنوان وتفاصيل الدخول. اسأل عن المستلزمات والمعدات التي يجب تجهيزها.',
      duties: ['الغرف والأسطح المتفق عليها', 'الغسيل أو الكي إذا شملتهما قائمة المهام', 'مساعدة المطبخ عند الاتفاق', 'أولويات تناسب وقت الزيارة'],
      limits: ['لا يفترض شمول التنظيف المتخصص أو خدمات النقل', 'تحتاج رعاية الأطفال إلى مناقشة مستقلة للمهام والخبرة', 'أكد المستلزمات والدخول والوقت المتاح للمهام', 'ناقش تغيير الموعد والوقت الإضافي والتكاليف وفق الشروط'],
      steps: [
        { title: 'حدد المهام', text: 'حدد الغرف والأعمال الأهم للزيارة.' },
        { title: 'حدد توقيت الزيارة', text: 'شارك التكرار والساعات المفضلة والمنطقة الدقيقة.' },
        { title: 'راجع التفاصيل العملية', text: 'أكد الدخول والمستلزمات وحدود المهام مع الفريق.' },
        { title: 'راجع عرض السعر', text: 'اطلب نطاق الزيارة والتكاليف وشروط الجدولة كتابةً.' },
        { title: 'أكد الزيارة', text: 'أكد التوفر والعمل المتفق عليه قبل الاعتماد على الحجز.' }
      ],
      quote: ['تكرار الزيارات والوقت المتفق عليه', 'حجم المنزل والمهام ذات الأولوية', 'العنوان والدخول ونطاق الخدمة المتفق عليه'],
      faqs: [
        { title: 'كيف أحدد نطاق الزيارة؟', text: 'رتب الغرف والمهام حسب الأولوية وناقش ما يناسب وقت الزيارة المتفق عليه. لا تفترض شمول جميع المهام المنزلية.' },
        { title: 'هل الدوام الجزئي هو الخطة الشهرية نفسها؟', text: 'يصف الدوام الجزئي دعماً مجدولاً ومحدود الوقت، تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها.' },
        { title: 'هل تشمل الخدمة المستلزمات والساعات الإضافية؟', text: 'أكد المستلزمات والمعدات والساعات وطريقة التعامل مع المهام أو الوقت الإضافي في العرض المكتوب؛ لا توجد بنود ثابتة موعودة هنا.' }
      ]
    }
  },
  'monthly-maid-contract': {
  "en": {
    "scope": "A monthly maid contract enquiry starts with your household needs and the service arrangement you want to discuss. Contact INAYA to confirm the working arrangement, duties, schedule and terms included in your selected package.",
    "arrangement": "Contact INAYA to confirm the working arrangement, duties, schedule and terms included in your selected package.",
    "prepare": "Describe your household, priority tasks, location and preferred period. Ask INAYA to confirm a proposed arrangement and written package terms.",
    "duties": [
      "Describe the household tasks you need",
      "Confirm the working arrangement",
      "Agree the schedule for your request",
      "Review the selected package terms"
    ],
    "limits": [
      "Confirm duties and individual inclusions",
      "Confirm the working schedule and accommodation arrangement",
      "Review the written package terms",
      "Ask about changes and support conditions before agreeing"
    ],
    "steps": [
      {
        "title": "Describe your needs",
        "text": "Share household tasks and priorities."
      },
      {
        "title": "Discuss the arrangement",
        "text": "Contact INAYA to confirm the working arrangement, duties, schedule and terms included in your selected package."
      },
      {
        "title": "Review the proposed scope",
        "text": "Ask for duties and schedule in writing."
      },
      {
        "title": "Compare published pricing",
        "text": "Review the published monthly starting prices, then request a written proposal for the package you want to discuss."
      },
      {
        "title": "Confirm the terms",
        "text": "Confirm the selected package and agreed terms before proceeding."
      }
    ],
    "quote": [
      "Selected package and working arrangement",
      "Agreed duties and schedule",
      "Written terms for your request"
    ],
    "faqs": [
      {
        "title": "Does monthly pricing specify live-in, live-out or full-time work?",
        "text": "Contact INAYA to confirm the working arrangement, duties, schedule and terms included in your selected package."
      },
      {
        "title": "What are the published monthly starting prices?",
        "text": "Essential starts at AED 1,500 per month, all-inclusive. Signature starts at AED 2,500 per month, all-inclusive. INAYA Black remains Custom Quote."
      },
      {
        "title": "Which duties, schedule and terms are included?",
        "text": "Contact INAYA to confirm the working arrangement, duties, schedule and terms included in your selected package."
      },
      {
        "title": "What if my requirements change?",
        "text": "Discuss the change with INAYA and review the proposed scope and written terms before agreeing."
      }
    ]
  },
  "ar": {
    "scope": "يبدأ استفسار عقد الخادمة الشهري باحتياجات المنزل وترتيب الخدمة المطلوب مناقشته. تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها.",
    "arrangement": "تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها.",
    "prepare": "صف المنزل والمهام ذات الأولوية والمنطقة والفترة المفضلة. اطلب من عناية تأكيد الترتيب المقترح وشروط الباقة كتابةً.",
    "duties": [
      "وضح المهام المنزلية المطلوبة",
      "أكد ترتيب العمل",
      "اتفق على جدول طلبك",
      "راجع شروط الباقة المختارة"
    ],
    "limits": [
      "أكد المهام والبنود الفردية المشمولة",
      "أكد جدول العمل وترتيب السكن",
      "راجع شروط الباقة المكتوبة",
      "اسأل عن شروط التغيير والدعم قبل الاتفاق"
    ],
    "steps": [
      {
        "title": "صف احتياجاتك",
        "text": "شارك المهام المنزلية والأولويات."
      },
      {
        "title": "ناقش الترتيب",
        "text": "تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها."
      },
      {
        "title": "راجع النطاق المقترح",
        "text": "اطلب المهام والجدول كتابةً."
      },
      {
        "title": "قارن الأسعار المنشورة",
        "text": "راجع الأسعار الشهرية الابتدائية المنشورة، ثم اطلب عرضاً مكتوباً للباقة المطلوب مناقشتها."
      },
      {
        "title": "أكد الشروط",
        "text": "أكد الباقة المختارة والشروط المتفق عليها قبل المتابعة."
      }
    ],
    "quote": [
      "الباقة المختارة وترتيب العمل",
      "المهام والجدول المتفق عليهما",
      "الشروط المكتوبة لطلبك"
    ],
    "faqs": [
      {
        "title": "هل يحدد السعر الشهري الإقامة أو عدم الإقامة أو الدوام الكامل؟",
        "text": "تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها."
      },
      {
        "title": "ما الأسعار الشهرية الابتدائية المنشورة؟",
        "text": "تبدأ Essential من 1,500 درهم شهرياً شاملة التكاليف. وتبدأ Signature من 2,500 درهم شهرياً شاملة التكاليف. وتبقى INAYA Black بعرض سعر مخصص."
      },
      {
        "title": "ما المهام والجدول والشروط المشمولة؟",
        "text": "تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها."
      },
      {
        "title": "ماذا لو تغيرت متطلباتي؟",
        "text": "ناقش التغيير مع عناية وراجع النطاق المقترح والشروط المكتوبة قبل الاتفاق."
      }
    ]
  }
},
  nanny: {
    en: {
      scope: 'Nanny enquiries focus on a child’s daily routine: supervision, play, meals, hygiene and school or nursery preparation according to parent instructions and the agreed role. Childcare should be defined separately from general housemaid duties.',
      arrangement: 'Discuss regular or scheduled childcare and whether you need a live-in or live-out arrangement. For occasional supervision, compare babysitting rather than assuming the same schedule.',
      prepare: 'Share the children’s ages, daily routine, required hours, language and communication needs, parent instructions and any essential experience requirements.',
      duties: ['Daily child routine support', 'Supervised play and activities', 'Meal and hygiene routine assistance', 'School or nursery preparation and parent updates'],
      limits: ['Agree childcare duties separately from general cleaning', 'Do not infer qualifications or experience from nationality', 'Discuss any specialist or medical needs separately; they are not promised', 'Confirm working hours, residence, costs and support terms in writing'],
      steps: [
        { title: 'Describe the children’s routine', text: 'Share ages, daily activities and parent instructions.' },
        { title: 'Specify the arrangement', text: 'Discuss required hours, residence and whether care is regular or occasional.' },
        { title: 'Review relevant experience', text: 'Ask what childcare experience and supporting references can be reviewed for the individual profile.' },
        { title: 'Agree family communication', text: 'Discuss handovers, updates, priorities and which duties are outside the role.' },
        { title: 'Review the proposal', text: 'Confirm availability, costs, documents and support conditions before agreeing.' }
      ],
      quote: ['Children’s ages and agreed childcare responsibilities', 'Required schedule and living arrangement', 'Individual experience requirements and proposed service scope'],
      faqs: [
        { title: 'How should I review nanny experience?', text: 'Ask about experience with your child’s age group, daily routines and communication needs. Ask which references or documents can be reviewed; a job title or nationality is not proof of a qualification.' },
        { title: 'Can I combine nanny care and housemaid duties?', text: 'Discuss the priorities and time required for each role. Do not assume general cleaning is included in childcare, or that a housemaid has the required nanny experience.' },
        { title: 'How do parents communicate requirements?', text: 'Prepare a routine and clear instructions for meals, hygiene, activities and handovers. Discuss how updates and changes will be communicated before agreeing.' },
        { title: 'How does nanny care differ from babysitting?', text: 'Nanny enquiries concern ongoing childcare routines. Babysitting concerns occasional supervision. Confirm hours, duties and the individual profile for the arrangement you need.' }
      ]
    },
    ar: {
      scope: 'تركز طلبات المربية على روتين الطفل اليومي: الإشراف واللعب والوجبات والنظافة والاستعداد للمدرسة أو الحضانة وفق تعليمات الوالدين والدور المتفق عليه. ينبغي تحديد رعاية الأطفال بشكل منفصل عن مهام عاملة المنزل العامة.',
      arrangement: 'ناقش الرعاية المنتظمة أو المجدولة والحاجة إلى الإقامة أو عدم الإقامة. قارن جليسة الأطفال للإشراف المؤقت بدلاً من افتراض الجدول نفسه.',
      prepare: 'شارك أعمار الأطفال وروتينهم اليومي والساعات المطلوبة واحتياجات اللغة والتواصل وتعليمات الوالدين ومتطلبات الخبرة الأساسية.',
      duties: ['دعم روتين الطفل اليومي', 'لعب وأنشطة تحت الإشراف', 'مساعدة في روتين الوجبات والنظافة', 'الاستعداد للمدرسة أو الحضانة وإبلاغ الوالدين'],
      limits: ['اتفق على رعاية الأطفال بشكل منفصل عن التنظيف العام', 'لا تستنتج المؤهلات أو الخبرة من الجنسية', 'ناقش الاحتياجات المتخصصة أو الطبية بشكل منفصل؛ ليست موعودة', 'أكد الساعات والسكن والتكاليف وشروط الدعم كتابةً'],
      steps: [
        { title: 'صف روتين الأطفال', text: 'شارك الأعمار والأنشطة اليومية وتعليمات الوالدين.' },
        { title: 'حدد الترتيب', text: 'ناقش الساعات والسكن وما إذا كانت الرعاية منتظمة أو مؤقتة.' },
        { title: 'راجع الخبرة المناسبة', text: 'اسأل عن خبرة رعاية الأطفال والمراجع التي يمكن مراجعتها للملف الفردي.' },
        { title: 'اتفق على التواصل', text: 'ناقش تسليم الرعاية والتحديثات والأولويات والمهام خارج الدور.' },
        { title: 'راجع العرض', text: 'أكد التوفر والتكاليف والمستندات وشروط الدعم قبل الاتفاق.' }
      ],
      quote: ['أعمار الأطفال ومسؤوليات الرعاية المتفق عليها', 'الجدول المطلوب وترتيب السكن', 'متطلبات الخبرة الفردية ونطاق الخدمة المقترح'],
      faqs: [
        { title: 'كيف أراجع خبرة المربية؟', text: 'اسأل عن الخبرة مع فئة عمر طفلك والروتين اليومي واحتياجات التواصل. اسأل عن المراجع أو المستندات التي يمكن مراجعتها؛ المسمى أو الجنسية ليسا دليلاً على المؤهل.' },
        { title: 'هل يمكن الجمع بين المربية ومهام عاملة المنزل؟', text: 'ناقش الأولويات والوقت اللازم لكل دور. لا تفترض شمول التنظيف العام ضمن الرعاية، أو امتلاك عاملة المنزل خبرة المربية المطلوبة.' },
        { title: 'كيف يوضح الوالدان المتطلبات؟', text: 'جهز الروتين وتعليمات واضحة للوجبات والنظافة والأنشطة وتسليم الرعاية. ناقش طريقة إرسال التحديثات والتغييرات قبل الاتفاق.' },
        { title: 'ما الفرق بين المربية وجليسة الأطفال؟', text: 'تتعلق طلبات المربية بروتين رعاية مستمر، وجليسة الأطفال بالإشراف المؤقت. أكد الساعات والمهام والملف الفردي للترتيب المطلوب.' }
      ]
    }
  },
  'sponsorship-transfer': {
  "en": {
    "scope": "Contact INAYA to confirm the support available for your case, applicable requirements and fees. Explain your current sponsorship situation before agreeing to any next step.",
    "arrangement": "Explain the current worker and sponsor situation. Ask what support INAYA can offer for your transfer enquiry and who is responsible for any proposed action.",
    "prepare": "Share your emirate, the current arrangement and the question you need answered. Confirm the appropriate contact channel before sharing documents.",
    "duties": [
      "Confirm the support available for your case",
      "Ask for applicable requirements",
      "Clarify responsibility for any proposed action",
      "Request the scope and fees in writing"
    ],
    "limits": [
      "Confirm case-specific support before proceeding",
      "Ask whether proposed support includes guidance or submission",
      "Confirm requirements and fees with the responsible parties",
      "Agree the next step after reviewing the proposed scope"
    ],
    "steps": [
      {
        "title": "Describe the case",
        "text": "Share the emirate and current worker and sponsor situation."
      },
      {
        "title": "Ask about support",
        "text": "Contact INAYA to confirm the support available for your case, applicable requirements and fees."
      },
      {
        "title": "Confirm requirements",
        "text": "Ask which requirements apply to your case before gathering documents."
      },
      {
        "title": "Review responsibilities and fees",
        "text": "Confirm who handles each proposed action and request fees in writing."
      },
      {
        "title": "Confirm the next step",
        "text": "Agree a next step only after the available support and requirements are clear."
      }
    ],
    "quote": [
      "Support available for your case",
      "Applicable requirements and responsibilities",
      "Written scope and fees"
    ],
    "faqs": [
      {
        "title": "What support can INAYA provide for a sponsorship transfer?",
        "text": "Contact INAYA to confirm the support available for your case, applicable requirements and fees."
      },
      {
        "title": "Will INAYA review documents or submit an application?",
        "text": "Ask INAYA which support is available for your particular case and who would handle each action. Confirm the proposed scope before proceeding."
      },
      {
        "title": "Which requirements, fees and timing apply?",
        "text": "Contact INAYA to confirm requirements and fees for your case. Ask the responsible authority about current official requirements and timing; an enquiry does not confirm approval."
      },
      {
        "title": "Is a transfer enquiry the same as recruitment?",
        "text": "A transfer enquiry concerns an existing sponsorship situation. Recruitment concerns selecting a worker profile. Discuss your current situation so the appropriate enquiry is clear."
      }
    ]
  },
  "ar": {
    "scope": "تواصل مع عناية للتأكد من الدعم المتاح لحالتك والمتطلبات والرسوم المطبقة. وضح وضع الكفالة الحالي قبل الاتفاق على أي خطوة تالية.",
    "arrangement": "وضح الوضع الحالي للعاملة والكفيل. اسأل عن الدعم الذي يمكن لعناية تقديمه لاستفسار نقل الكفالة وعن مسؤولية أي إجراء مقترح.",
    "prepare": "شارك الإمارة والترتيب الحالي والسؤال المطلوب توضيحه. أكد قناة التواصل المناسبة قبل مشاركة المستندات.",
    "duties": [
      "أكد الدعم المتاح لحالتك",
      "اسأل عن المتطلبات المطبقة",
      "وضح مسؤولية أي إجراء مقترح",
      "اطلب النطاق والرسوم كتابةً"
    ],
    "limits": [
      "أكد دعم الحالة قبل المتابعة",
      "اسأل ما إذا كان الدعم المقترح يشمل الإرشاد أو تقديم الطلب",
      "أكد المتطلبات والرسوم مع الأطراف المسؤولة",
      "اتفق على الخطوة التالية بعد مراجعة النطاق المقترح"
    ],
    "steps": [
      {
        "title": "صف الحالة",
        "text": "شارك الإمارة والوضع الحالي للعاملة والكفيل."
      },
      {
        "title": "اسأل عن الدعم",
        "text": "تواصل مع عناية للتأكد من الدعم المتاح لحالتك والمتطلبات والرسوم المطبقة."
      },
      {
        "title": "أكد المتطلبات",
        "text": "اسأل عن المتطلبات المطبقة على حالتك قبل جمع المستندات."
      },
      {
        "title": "راجع المسؤوليات والرسوم",
        "text": "أكد مسؤولية كل إجراء مقترح واطلب الرسوم كتابةً."
      },
      {
        "title": "أكد الخطوة التالية",
        "text": "اتفق على الخطوة التالية بعد توضيح الدعم المتاح والمتطلبات."
      }
    ],
    "quote": [
      "الدعم المتاح لحالتك",
      "المتطلبات والمسؤوليات المطبقة",
      "النطاق والرسوم المكتوبة"
    ],
    "faqs": [
      {
        "title": "ما الدعم الذي يمكن لعناية تقديمه لنقل الكفالة؟",
        "text": "تواصل مع عناية للتأكد من الدعم المتاح لحالتك والمتطلبات والرسوم المطبقة."
      },
      {
        "title": "هل ستراجع عناية المستندات أو تقدم الطلب؟",
        "text": "اسأل عناية عن الدعم المتاح لحالتك تحديداً وعن مسؤولية كل إجراء. أكد النطاق المقترح قبل المتابعة."
      },
      {
        "title": "ما المتطلبات والرسوم والتوقيت المطبق؟",
        "text": "تواصل مع عناية لتأكيد المتطلبات والرسوم لحالتك. اسأل الجهة المسؤولة عن المتطلبات الرسمية الحالية والتوقيت؛ الاستفسار لا يؤكد الموافقة."
      },
      {
        "title": "هل استفسار نقل الكفالة هو الاستقدام نفسه؟",
        "text": "يتعلق استفسار النقل بوضع كفالة قائم، بينما يتعلق الاستقدام باختيار ملف عاملة. وضح وضعك الحالي لتحديد الاستفسار المناسب."
      }
    ]
  }
},
  'maid-visa': {
    en: {
      scope: 'Contact INAYA to confirm the support available for your case, applicable requirements and fees. Describe your current situation before relying on a document checklist or proposed next step. Visa enquiries are separate from finding a household worker.',
      arrangement: 'Tell the team whether your enquiry concerns a new application, renewal or sponsorship transfer. The support available for each type of case, including any application submission, must be confirmed with INAYA.',
      prepare: 'Prepare your emirate, the current worker and sponsor situation, any existing document status and the question you need answered. This is enquiry preparation, not an official eligibility checklist; do not send sensitive documents before confirming the appropriate channel.',
      duties: ['Confirm the type of case and support available', 'Ask for the applicable requirements and document checklist', 'Clarify who is responsible for each step', 'Request the applicable fees and scope in writing'],
      limits: ['Confirm whether proposed support includes application submission', 'New application, renewal and transfer support must each be confirmed', 'No eligibility, approval or processing time is promised', 'Do not assume an enquiry transfers sponsorship or replaces an official decision'],
      steps: [
        { title: 'Describe the case', text: 'State the emirate and current worker and sponsor situation.' },
        { title: 'Confirm support', text: 'Ask what INAYA can support for this particular case.' },
        { title: 'Confirm requirements', text: 'Ask for the current applicable requirements before gathering documents.' },
        { title: 'Clarify responsibilities and fees', text: 'Confirm who handles each step and request the scope and costs in writing.' },
        { title: 'Agree the next step', text: 'Proceed only after the support and applicable requirements are confirmed.' }
      ],
      quote: ['Support available for the particular case', 'Applicable requirements and responsible parties', 'Confirmed fees and any proposed service scope'],
      faqs: [
        { title: 'Does INAYA handle new applications, renewals or sponsorship transfers?', text: 'Contact INAYA to confirm the support available for your case, applicable requirements and fees.' },
        { title: 'Will INAYA submit an application for me?', text: 'Ask INAYA whether support for your case includes guidance or submission, and confirm who is responsible for each step before proceeding.' },
        { title: 'Which documents, fees and processing time apply?', text: 'Confirm the current requirements and fees for your case before proceeding. This page does not publish an eligibility decision, fixed processing time or approval promise.' },
        { title: 'Is visa assistance the same as recruitment?', text: 'No. Recruitment concerns finding a suitable worker; a visa enquiry concerns the applicable document and process requirements. Confirm the scope of each separately.' }
      ]
    },
    ar: {
      scope: 'تواصل مع عناية لتأكيد الدعم المتاح لحالتك والمتطلبات والرسوم المنطبقة. وضح وضعك الحالي قبل الاعتماد على قائمة مستندات أو خطوة مقترحة. استفسارات التأشيرة منفصلة عن البحث عن عاملة منزلية.',
      arrangement: 'وضح للفريق ما إذا كان الاستفسار يتعلق بطلب جديد أو تجديد أو نقل كفالة. يجب تأكيد الدعم المتاح لكل نوع من الحالات، بما في ذلك تقديم أي طلب، مع عناية.',
      prepare: 'جهز الإمارة والوضع الحالي للعاملة والكفيل وحالة أي مستندات موجودة والسؤال المطلوب توضيحه. هذا تجهيز للاستفسار وليس قائمة أهلية رسمية؛ لا ترسل مستندات حساسة قبل تأكيد القناة المناسبة.',
      duties: ['أكد نوع الحالة والدعم المتاح', 'اسأل عن المتطلبات وقائمة المستندات المنطبقة', 'وضح مسؤولية كل خطوة', 'اطلب الرسوم والنطاق كتابةً'],
      limits: ['أكد ما إذا كان الدعم المقترح يشمل تقديم الطلب', 'يجب تأكيد دعم الطلب الجديد والتجديد والنقل لكل حالة', 'لا يوجد وعد بالأهلية أو الموافقة أو مدة المعالجة', 'لا تفترض أن الاستفسار ينقل الكفالة أو يحل محل القرار الرسمي'],
      steps: [
        { title: 'صف الحالة', text: 'حدد الإمارة والوضع الحالي للعاملة والكفيل.' },
        { title: 'أكد الدعم', text: 'اسأل عن الدعم الذي يمكن لعناية تقديمه لهذه الحالة.' },
        { title: 'أكد المتطلبات', text: 'اسأل عن المتطلبات الحالية المنطبقة قبل جمع المستندات.' },
        { title: 'وضح المسؤوليات والرسوم', text: 'أكد مسؤولية كل خطوة واطلب النطاق والتكاليف كتابةً.' },
        { title: 'اتفق على الخطوة التالية', text: 'تابع بعد تأكيد الدعم والمتطلبات المنطبقة فقط.' }
      ],
      quote: ['الدعم المتاح للحالة المحددة', 'المتطلبات المنطبقة والأطراف المسؤولة', 'الرسوم المؤكدة وأي نطاق خدمة مقترح'],
      faqs: [
        { title: 'هل تتولى عناية الطلبات الجديدة أو التجديد أو نقل الكفالة؟', text: 'تواصل مع عناية للتأكد من الدعم المتاح لحالتك والمتطلبات والرسوم المطبقة.' },
        { title: 'هل ستقدم عناية الطلب نيابةً عني؟', text: 'اسأل عناية ما إذا كان دعم حالتك يشمل الإرشاد أو تقديم الطلب، وأكد مسؤولية كل خطوة قبل المتابعة.' },
        { title: 'ما المستندات والرسوم ومدة المعالجة؟', text: 'أكد المتطلبات والرسوم الحالية لحالتك قبل المتابعة. لا تنشر هذه الصفحة قرار أهلية أو مدة ثابتة أو وعداً بالموافقة.' },
        { title: 'هل مساعدة التأشيرة هي الاستقدام نفسه؟', text: 'لا. يتعلق الاستقدام بالعثور على عاملة مناسبة، واستفسار التأشيرة بمتطلبات المستندات والإجراءات المنطبقة. أكد نطاق كل منهما بشكل منفصل.' }
      ]
    }
  }
};

export function applyPracticalGuidance(slug: string, lang: Lang, copy: ServiceCopy): ServiceCopy {
  const item = guidance[slug]?.[lang];
  if (!item) return copy;
  const ar = lang === 'ar';
  const visa = slug === 'maid-visa';
  const transfer = slug === 'sponsorship-transfer';
  const titles = ar ? ['النطاق', 'ترتيب العمل', 'تفاصيل الاستفسار'] : ['Scope', 'Working arrangement', 'Enquiry details'];
  const pricingTitles = ar ? ['نطاق الطلب', 'الترتيب المقترح', 'التأكيد المكتوب'] : ['Request scope', 'Proposed arrangement', 'Written confirmation'];
  const next: ServiceCopy = {
    ...copy,
    whatText: item.scope,
    cards: [item.scope, item.arrangement, item.prepare].map((text, index) => ({ title: titles[index], text })),
    whyTitle: ar ? 'اختر الترتيب المناسب لطلبك' : 'Choose the arrangement for your request',
    why: item.limits,
    includedTitle: ar ? 'النطاق المطلوب الاتفاق عليه' : 'Scope to agree',
    included: item.duties,
    perfectTitle: ar ? 'الحدود والمسؤوليات المطلوب توضيحها' : 'Limits and responsibilities to clarify',
    perfect: item.limits,
    journeyTitle: ar ? 'من الاستفسار إلى التأكيد' : 'From enquiry to confirmation',
    journeyText: item.prepare,
    journey: item.steps,
    pricingText: ar ? `ناقش العوامل المناسبة لطلبك: ${item.quote.join('؛ ')}. اطلب النطاق والتكاليف والشروط كتابةً قبل الاتفاق، ولا تفترض بنوداً غير مؤكدة.` : `Discuss the factors for your request: ${item.quote.join('; ')}. Request the scope, costs and terms in writing before agreeing; do not assume unconfirmed benefits.`,
    pricing: item.quote.map((text, index) => ({ title: pricingTitles[index], text, points: ar ? ['أكد النطاق المقترح', 'راجع المبلغ والشروط قبل الاتفاق'] : ['Confirm the proposed scope', 'Review the amount and terms before agreeing'] })),
    faqs: item.faqs
  };
  if (visa || transfer) {
    next.title = transfer ? (ar ? 'استفسارات نقل كفالة الخادمة في الإمارات' : 'Maid Sponsorship Transfer Enquiries in UAE') : (ar ? 'استفسارات تأشيرة الخادمة في الإمارات' : 'Maid Visa Enquiries in UAE');
    next.badge = next.title;
    next.whatTitle = ar ? 'ما الذي يجب تأكيده لحالتك؟' : 'What should you confirm for your case?';
    next.meta = ar ? 'استفسر عن تأشيرة الخادمة في الإمارات مع عناية. تواصل لتأكيد الدعم المتاح لحالتك والمتطلبات والرسوم قبل الاتفاق على أي خطوة.' : 'Ask INAYA about a maid visa enquiry in the UAE. Confirm the support available for your case, applicable requirements and fees before agreeing a next step.';
    if (transfer) next.meta = ar ? 'استفسر من عناية عن نقل كفالة الخادمة في الإمارات. أكد الدعم المتاح لحالتك والمتطلبات والرسوم قبل المتابعة.' : 'Ask INAYA about a maid sponsorship transfer enquiry in the UAE. Confirm available case support, applicable requirements and fees before proceeding.';
    next.lead = item.scope;
    next.book = ar ? 'جهز استفسارك' : 'Prepare your enquiry';
    next.countriesTitle = ar ? 'المستندات والإجراءات: ما الذي يجب تأكيده؟' : 'Documents and process: what to confirm';
    next.countriesText = item.arrangement;
    next.countries = [
      { title: ar ? 'نوع الحالة' : 'Case type', text: item.arrangement },
      { title: ar ? 'الوضع الحالي' : 'Current situation', text: item.prepare },
      { title: ar ? 'الدعم المتاح' : 'Support available', text: item.scope },
      { title: ar ? 'المتطلبات' : 'Requirements', text: item.steps[2].text },
      { title: ar ? 'الرسوم والمسؤوليات' : 'Fees and responsibilities', text: item.steps[3].text },
      { title: ar ? 'الخطوة التالية' : 'Next step', text: item.steps[4].text }
    ];
    next.compareTitle = ar ? 'أسئلة قبل المتابعة' : 'Questions before proceeding';
    next.comparison = ar ? [
      { feature: 'الدعم', inaya: 'أكد ما هو متاح لحالتك', other: 'وضح الإرشاد أو تقديم الطلب' },
      { feature: 'المتطلبات', inaya: 'اطلب المتطلبات المنطبقة', other: 'راجع الوضع الحالي' },
      { feature: 'التكاليف', inaya: 'اطلب الرسوم كتابةً', other: 'أكد مسؤولية كل خطوة' }
    ] : [
      { feature: 'Support', inaya: 'Confirm what is available for your case', other: 'Clarify guidance or submission' },
      { feature: 'Requirements', inaya: 'Ask what applies', other: 'Review the current situation' },
      { feature: 'Costs', inaya: 'Request fees in writing', other: 'Confirm responsibility for each step' }
    ];
    next.finalTitle = transfer ? (ar ? 'هل لديك استفسار نقل كفالة؟' : 'Have a sponsorship transfer enquiry?') : (ar ? 'هل لديك استفسار تأشيرة خادمة؟' : 'Have a maid visa enquiry?');
    next.finalText = item.scope;
  }
  if (slug === 'monthly-maid-contract') {
    next.title = ar ? 'عقود خادمة شهرية في الإمارات' : 'Monthly Maid Contracts in UAE';
    next.meta = ar ? 'ناقش عقد خادمة شهري في الإمارات مع عناية. أكد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة المختارة.' : 'Discuss a monthly maid contract in the UAE with INAYA. Confirm the working arrangement, duties, schedule and terms of your selected package.';
    next.badge = next.title;
    next.lead = item.scope;
    next.countriesTitle = ar ? 'ما الذي يجب مناقشته لباقة شهرية؟' : 'What should you discuss for a monthly package?';
    next.countriesText = item.arrangement;
    next.countries = item.steps.map((step) => ({ ...step }));
    next.finalText = item.arrangement;
  }
  return next;
}
