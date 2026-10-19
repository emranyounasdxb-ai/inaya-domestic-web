import type { Lang, Pair } from './service-page-copy';

// Questions about existing roles and records to review, not additional service benefits.
export const serviceCustomerQuestions: Record<string, Record<Lang, Pair[]>> = {
  'part-time-maid': {
    en: [
      { title: 'How do I request a part-time or hourly maid in Ajman?', text: 'Contact INAYA’s Ajman office by telephone or WhatsApp with your address, rooms, priority tasks, preferred hours and visit frequency. The team reviews the proposed scope and schedule. Confirm availability, visit duration and the written quotation before treating the enquiry as a booking.' },
      { title: 'What determines the price of a part-time maid visit?', text: 'Scheduled part-time visits have a separate quotation for the agreed work, schedule, location and lawful arrangement. The full-time managed monthly starting price does not automatically cover these visits.' },
      { title: 'Is there a fixed hourly rate or minimum booking duration?', text: 'This page does not publish a fixed hourly rate or minimum visit duration. Share your preferred hours and task list with INAYA and request the applicable duration and price in writing. Availability and visit terms must be confirmed for the specific enquiry.' },
      { title: 'Are cleaning products, equipment and transport included?', text: 'Confirm responsibility for cleaning products, equipment, access and transport in the written proposal. Explain any surface-specific products or building access requirements before the visit. Do not assume these items or extra hours are included in the quoted amount.' },
      { title: 'Can I include laundry, ironing, kitchen help or childcare?', text: 'Cleaning, laundry, ironing and kitchen assistance can be discussed within an agreed task list and visit time. Childcare requires a separate discussion of duties and relevant individual experience. Specialist deep cleaning and moving services are not assumed to be included.' }
    ],
    ar: [
      { title: 'كيف أطلب خادمة بالساعة أو بدوام جزئي في عجمان؟', text: 'تواصل مع مكتب عناية في عجمان هاتفياً أو عبر واتساب، وحدد العنوان والغرف والمهام ذات الأولوية والساعات المفضلة وتكرار الزيارات. يراجع الفريق النطاق والجدول المقترحين. أكد التوفر ومدة الزيارة وعرض السعر المكتوب قبل اعتبار الاستفسار حجزاً.' },
      { title: 'كيف تحدد تكلفة زيارة الخادمة بدوام جزئي؟', text: 'للزيارات المجدولة بدوام جزئي عرض مستقل للعمل والجدول والموقع والترتيب النظامي المتفق عليها. ولا يغطي السعر الشهري المبدئي المدار للدوام الكامل هذه الزيارات تلقائياً.' },
      { title: 'هل يوجد سعر ثابت للساعة أو حد أدنى لمدة الحجز؟', text: 'لا تنشر هذه الصفحة سعراً ثابتاً للساعة أو حداً أدنى لمدة الزيارة. شارك الساعات المفضلة وقائمة المهام مع عناية، واطلب توضيح المدة والسعر المنطبقين كتابةً. يجب تأكيد التوفر وشروط الزيارة لكل طلب على حدة.' },
      { title: 'هل تشمل التكلفة مواد التنظيف والمعدات والنقل؟', text: 'أكد مسؤولية مواد التنظيف والمعدات والدخول والنقل في العرض المكتوب. وضح المواد المناسبة للأسطح أو متطلبات دخول المبنى قبل الزيارة. لا تفترض شمول هذه البنود أو الساعات الإضافية في المبلغ المعروض.' },
      { title: 'هل يمكن إضافة الغسيل والكي ومساعدة المطبخ أو رعاية الأطفال؟', text: 'يمكن مناقشة التنظيف والغسيل والكي ومساعدة المطبخ ضمن قائمة المهام ووقت الزيارة المتفق عليهما. تحتاج رعاية الأطفال إلى مناقشة منفصلة للمهام والخبرة الفردية المناسبة. لا يفترض شمول التنظيف العميق المتخصص أو خدمات النقل.' }
    ]
  },
  babysitting: {
    en: [
      { title: 'How do I request babysitting services in Ajman?', text: 'Contact INAYA’s Ajman office by telephone or WhatsApp with your home location, children’s ages, required date and hours, and supervision needs. The team reviews the request and availability. Confirm the individual profile, duties, timing and separate quotation before treating the enquiry as a booking.' },
      { title: 'Should I choose a babysitter or a nanny?', text: 'Babysitting concerns occasional childcare for a specific period, while nanny enquiries concern ongoing childcare routines. Describe meals, hygiene, play, parent instructions and handover requirements for the period you need. Review the individual’s relevant experience rather than assuming the two roles have identical duties.' },
      { title: 'Can I request evening or event babysitting in Ajman?', text: 'Evening and event childcare can be discussed with INAYA, subject to the requested timing, location, number of children and availability. Share the supervision routine and any important instructions. Scheduled or occasional babysitting is quoted separately and is not automatically included in a managed full-time monthly package.' }
    ],
    ar: [
      { title: 'كيف أطلب خدمات جليسة أطفال في عجمان؟', text: 'تواصل مع مكتب عناية في عجمان هاتفياً أو عبر واتساب، وحدد موقع المنزل وأعمار الأطفال والتاريخ والساعات المطلوبة واحتياجات الإشراف. يراجع الفريق الطلب والتوفر. أكد الملف الفردي والمهام والتوقيت وعرض السعر المنفصل قبل اعتبار الاستفسار حجزاً.' },
      { title: 'هل أختار جليسة أطفال أم مربية؟', text: 'تتعلق مجالسة الأطفال برعاية مؤقتة لفترة محددة، بينما تتعلق طلبات المربية بروتين رعاية مستمر. وضح الوجبات والنظافة واللعب وتعليمات الوالدين ومتطلبات تسليم الرعاية للفترة المطلوبة. راجع الخبرة الفردية المناسبة بدلاً من افتراض تطابق مهام الدورين.' },
      { title: 'هل يمكن طلب جليسة أطفال للمساء أو المناسبات في عجمان؟', text: 'يمكن مناقشة رعاية الأطفال للمساء والمناسبات مع عناية بحسب التوقيت والموقع وعدد الأطفال والتوفر. شارك روتين الإشراف وأي تعليمات مهمة. لمجالسة الأطفال المجدولة أو العرضية عرض سعر مستقل، ولا تشملها تلقائياً باقة الدوام الكامل الشهرية المدارة.' }
    ]
  },
  housemaid: {
    en: [
      { title: 'Which duties belong in a housemaid request?', text: 'Start with cleaning, laundry, ironing and room care, stating the rooms and priorities. Discuss cooking or childcare separately if needed; a general housemaid role does not establish either responsibility or the individual’s relevant experience.' },
      { title: 'How should I agree the workload and schedule?', text: 'List daily, weekly and occasional tasks, their order and the time required. Agree work and rest arrangements, access and supplies. Living in, working full-time and being paid under a monthly package describe different parts of the arrangement.' },
      { title: 'What should be ready before the first day?', text: 'Prepare an agreed duty brief, safe-use instructions, access arrangements and a household contact. Show the equipment and relevant private areas, explain the routine and agree how feedback or changes will be recorded.' }
    ],
    ar: [
      { title: 'ما المهام التي تندرج ضمن طلب عاملة المنزل؟', text: 'ابدأ بالتنظيف والغسيل والكي والعناية بالغرف، وحدد الغرف والأولويات. ناقش الطبخ أو رعاية الأطفال بصورة منفصلة عند الحاجة؛ فدور عاملة المنزل العام لا يثبت هاتين المسؤوليتين أو الخبرة الفردية المناسبة لهما.' },
      { title: 'كيف أتفق على عبء العمل والجدول؟', text: 'حدد المهام اليومية والأسبوعية والعرضية وترتيبها والوقت المطلوب لها. اتفق على العمل والراحة والدخول والمستلزمات. الإقامة والدوام الكامل وتسعير الباقة شهرياً تصف جوانب مختلفة من الترتيب.' },
      { title: 'ماذا أجهز قبل اليوم الأول؟', text: 'جهز وصف المهام المتفق عليه وتعليمات الاستخدام الآمن وترتيبات الدخول وشخصاً للتواصل في المنزل. وضح المعدات والمناطق الخاصة ذات الصلة والروتين، واتفق على طريقة توثيق الملاحظات أو التغييرات.' }
    ]
  },
  housekeeping: {
    en: [
      { title: 'How do I request hourly home cleaning in Ajman?', text: 'Contact INAYA’s Ajman team to discuss scheduled part-time household help. Share the rooms, cleaning priorities, preferred hours, visit frequency and address. Confirm the agreed tasks, visit duration, availability, responsibility for supplies and the separate quotation in writing. Specialist deep cleaning is not assumed to be included in routine housekeeping.' },
      { title: 'How do I define a housekeeping task list?', text: 'Identify bedrooms, living areas, laundry and kitchen organization, then state priorities and frequency. Describe difficult surfaces or specialist tasks before agreeing the scope; routine housekeeping is not proof that every cleaning method or task is included.' },
      { title: 'Who provides cleaning products and equipment?', text: 'Record responsibility for supplies and equipment in the proposal. Explain the surfaces, preferred products and safe-use instructions. Include the agreed supply responsibilities in the written scope and cost summary.' },
      { title: 'What if the requested tasks exceed the agreed time?', text: 'Agree priorities before the visit and discuss any proposed change to time or scope with INAYA. Record the revised duties, schedule and costs before agreeing; do not assume extra work or time is automatically included.' }
    ],
    ar: [
      { title: 'كيف أطلب تنظيف المنازل بالساعة في عجمان؟', text: 'تواصل مع فريق عناية في عجمان لمناقشة مساعدة منزلية مجدولة بدوام جزئي. حدد الغرف وأولويات التنظيف والساعات المفضلة وتكرار الزيارات والعنوان. أكد المهام ومدة الزيارة والتوفر ومسؤولية المستلزمات وعرض السعر المنفصل كتابةً. لا يفترض شمول التنظيف العميق المتخصص ضمن التنظيف المنزلي المعتاد.' },
      { title: 'كيف أحدد قائمة مهام تنظيف المنزل وترتيبه؟', text: 'حدد غرف النوم والمعيشة والغسيل وتنظيم المطبخ، ثم وضح الأولويات وتكرارها. صف الأسطح الصعبة أو المهام المتخصصة قبل الاتفاق على النطاق؛ فالتنظيف المعتاد لا يثبت شمول كل طريقة أو مهمة للتنظيف.' },
      { title: 'من يوفر مواد التنظيف والمعدات؟', text: 'سجل مسؤولية المستلزمات والمعدات في العرض. وضح الأسطح والمواد المفضلة وتعليمات الاستخدام الآمن. أدرج مسؤوليات المستلزمات المتفق عليها ضمن النطاق المكتوب وملخص التكلفة.' },
      { title: 'ماذا لو تجاوزت المهام المطلوبة الوقت المتفق عليه؟', text: 'اتفق على الأولويات قبل الزيارة وناقش أي تعديل مقترح للوقت أو النطاق مع عناية. وثق المهام والجدول والتكاليف المعدلة قبل الاتفاق؛ ولا تفترض شمول العمل أو الوقت الإضافيين تلقائياً.' }
    ]
  },
  recruitment: {
    en: [
      { title: 'How should I compare individual candidates?', text: 'Compare each profile against the duties, language needs and household routine. Ask for examples of relevant previous work and which documents or references support them. Nationality, years of experience or a role title alone do not establish suitability or a qualification.' },
      { title: 'Can I interview a candidate before selection?', text: 'Discuss profile-review or interview options before confirmation; they depend on the service and candidate availability. Prepare practical questions about your task list, communication, previous duties and handovers, and record points still needing evidence.' },
      { title: 'What agreements and costs should I review?', text: 'Identify the legal provider, employer, recruitment or service agreement and employment contract. Compare the agreed role, service period, worker wage, recruitment fee and applicable processing costs, with payment responsibilities and refund or replacement conditions in writing.' }
    ],
    ar: [
      { title: 'كيف أقارن المرشحات بصورة فردية؟', text: 'قارن كل ملف بالمهام واللغة المطلوبة وروتين المنزل. اطلب أمثلة على عمل سابق ذي صلة والمستندات أو المراجع التي تدعمه. الجنسية أو سنوات الخبرة أو المسمى الوظيفي وحدها لا تثبت الملاءمة أو المؤهل.' },
      { title: 'هل يمكن مقابلة المرشحة قبل الاختيار؟', text: 'ناقش خيارات مراجعة الملف أو المقابلة قبل التأكيد؛ فهي تعتمد على الخدمة وتوفر المرشحة. جهز أسئلة عملية عن قائمة المهام والتواصل والمهام السابقة وتسليم العمل، وسجل النقاط التي ما زالت تحتاج إثباتاً.' },
      { title: 'ما الاتفاقات والتكاليف التي أراجعها؟', text: 'حدد الجهة المقدمة قانوناً وصاحب العمل واتفاق الاستقدام أو الخدمة وعقد العمل. قارن الدور المتفق عليه والمدة وأجر العاملة ورسوم الاستقدام وتكاليف المعالجة المنطبقة، مع مسؤوليات الدفع وشروط الاسترداد أو الاستبدال كتابةً.' }
    ]
  },
  'background-verification': {
    en: [
      { title: 'What information should I review for a profile?', text: 'Ask which identity details, document status and relevant experience notes are available for the individual. Distinguish the person’s account from documentary evidence and from a check independently confirmed by its issuer. Record unanswered or inconsistent details before selection.' },
      { title: 'Does a profile prove criminal, medical or reference checks?', text: 'No. A profile or experience note alone does not establish a criminal-record check, medical clearance, reference verification or certified training. Ask which checks were actually performed, by whom, when and what evidence can be reviewed; do not infer a check from a role title.' },
      { title: 'What evidence and limitations should be explained?', text: 'Request a written account of the information reviewed, the source and date of any check, the evidence available and any limits or outstanding points. Available records vary by individual. Reviewing documents is not a safety guarantee or proof that every fact has been independently verified.' }
    ],
    ar: [
      { title: 'ما المعلومات التي أراجعها في الملف؟', text: 'اسأل عن بيانات الهوية وحالة المستندات وملاحظات الخبرة ذات الصلة المتاحة للفرد. ميز رواية الشخص عن الإثبات المستندي وعن فحص أكدته جهة الإصدار بصورة مستقلة. سجل التفاصيل غير المحسومة أو غير المتطابقة قبل الاختيار.' },
      { title: 'هل يثبت الملف إجراء فحوص جنائية أو طبية أو التحقق من المراجع؟', text: 'لا. الملف أو ملاحظة الخبرة وحدهما لا يثبتان فحص السجل الجنائي أو اللياقة الطبية أو التحقق من المراجع أو تدريباً معتمداً. اسأل عن الفحوص التي أجريت فعلياً ومن أجراها وتاريخها والإثبات المتاح؛ ولا تستنتج إجراء فحص من المسمى الوظيفي.' },
      { title: 'ما الإثباتات والحدود التي يجب توضيحها؟', text: 'اطلب بياناً مكتوباً بالمعلومات التي روجعت ومصدر أي فحص وتاريخه والإثبات المتاح وحدوده أو النقاط غير المحسومة. تختلف السجلات المتاحة بحسب الفرد. مراجعة المستندات ليست ضماناً للأمان أو إثباتاً للتحقق المستقل من كل معلومة.' }
    ]
  },
  'maid-replacement': {
    en: [
      { title: 'How do I explain a replacement concern?', text: 'Describe the agreed duties and the difference observed, using dates and specific examples. Separate a changed preference from failure to meet the agreement, and include relevant profile, contract and payment records with the remedy requested.' },
      { title: 'Is replacement only at the provider’s discretion?', text: "Every tier includes review and administration of eligible replacement requests. Eligibility is assessed against the agreed duties, applicable employment arrangement and relevant legal obligations. Essential provides standard matching coordination, Signature priority matching coordination, and INAYA Black role-specific coordination. The monthly charge covers eligible review, matching coordination and administration, while statutory remedies remain available." },
      { title: 'What if a replacement is unavailable?', text: "If a suitable replacement is unavailable, discuss available alternatives and effective cancellation; unused prepaid service is handled under the monthly refund terms. An unavailable replacement does not remove an applicable statutory remedy." }
    ],
    ar: [
      { title: 'كيف أوضح ملاحظة تستدعي الاستبدال؟', text: 'صف المهام المتفق عليها والفرق الذي لاحظته مع تواريخ وأمثلة محددة. ميز تغيير التفضيلات عن عدم الوفاء بالاتفاق، وأرفق سجلات الملف والعقد والمدفوعات ذات الصلة مع الإجراء المطلوب.' },
      { title: 'هل الاستبدال متروك لاختيار مقدم الخدمة وحده؟', text: "تشمل جميع الباقات مراجعة طلبات الاستبدال المؤهلة وإدارة إجراءاتها. تقيم الأهلية وفق المهام المتفق عليها وترتيب التوظيف المنطبق والالتزامات القانونية ذات الصلة. توفر Essential تنسيق المطابقة الاعتيادي، وSignature أولوية في تنسيق المطابقة، وINAYA Black تنسيقاً بحسب الدور. تغطي الرسوم الشهرية المراجعة المؤهلة وتنسيق المطابقة وإدارة الإجراءات، مع بقاء سبل الإنصاف القانونية متاحة." },
      { title: 'ماذا لو لم يتوفر بديل؟', text: "إذا لم يتوفر بديل مناسب، ناقش البدائل المتاحة وسريان الإلغاء؛ وتعالج الخدمة المدفوعة وغير المستخدمة وفق شروط الاسترداد الشهرية. عدم توفر بديل لا يلغي سبيلاً قانونياً منطبقاً للإنصاف." }
    ]
  }
};
