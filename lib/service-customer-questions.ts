import type { Lang, Pair } from './service-page-copy';

// Questions about existing roles and records to review, not additional service benefits.
export const serviceCustomerQuestions: Record<string, Record<Lang, Pair[]>> = {
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
      { title: 'How do I define a housekeeping task list?', text: 'Identify bedrooms, living areas, laundry and kitchen organization, then state priorities and frequency. Describe difficult surfaces or specialist tasks before agreeing the scope; routine housekeeping is not proof that every cleaning method or task is included.' },
      { title: 'Who provides cleaning products and equipment?', text: 'Record responsibility for supplies and equipment in the proposal. Explain the surfaces, preferred products and safe-use instructions. Include the agreed supply responsibilities in the written scope and cost summary.' },
      { title: 'What if the requested tasks exceed the agreed time?', text: 'Agree priorities before the visit and discuss any proposed change to time or scope with INAYA. Record the revised duties, schedule and costs before agreeing; do not assume extra work or time is automatically included.' }
    ],
    ar: [
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
      { title: 'Is replacement only at the provider’s discretion?', text: 'Applicable statutory remedies remain in force. Recruitment-contract failures and specified recruitment-fee cases have legal conditions, while any extra package replacement benefit must be stated in the agreement. Do not assume a free or unlimited replacement for every service.' },
      { title: 'What if a replacement is unavailable?', text: 'Request the alternative remedy required by the applicable law and agreement, with the basis, amount or next action in writing. Availability alone does not remove a statutory refund obligation. Review the main refund policy and use the support process for unresolved concerns.' }
    ],
    ar: [
      { title: 'كيف أوضح ملاحظة تستدعي الاستبدال؟', text: 'صف المهام المتفق عليها والفرق الذي لاحظته مع تواريخ وأمثلة محددة. ميز تغيير التفضيلات عن عدم الوفاء بالاتفاق، وأرفق سجلات الملف والعقد والمدفوعات ذات الصلة مع الإجراء المطلوب.' },
      { title: 'هل الاستبدال متروك لاختيار مقدم الخدمة وحده؟', text: 'تبقى الحقوق القانونية المنطبقة سارية. للإخلال بعقد الاستقدام وحالات رد رسوم الاستقدام المحددة شروط قانونية، بينما يجب بيان أي ميزة إضافية للاستبدال ضمن الباقة في الاتفاق. لا تفترض استبدالاً مجانياً أو غير محدود لكل خدمة.' },
      { title: 'ماذا لو لم يتوفر بديل؟', text: 'اطلب الإجراء البديل المستحق وفق القانون والاتفاق المنطبقين، مع الأساس والمبلغ أو الإجراء التالي كتابةً. عدم التوفر وحده لا يلغي التزاماً قانونياً برد المبالغ. راجع سياسة الاسترداد الرئيسية وإجراءات الدعم للملاحظات غير المحسومة.' }
    ]
  }
};
