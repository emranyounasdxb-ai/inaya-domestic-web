export type Service = {
  slug: string;
  icon: string;
  name: { en: string; ar: string };
  short: { en: string; ar: string };
  description: { en: string; ar: string };
};

export const services: Service[] = [
  {
    slug: 'live-in-maid',
    icon: '🏠',
    name: { en: 'Live-in Maid Services', ar: 'خدمات الخادمات المقيمات' },
    short: { en: 'Full-time maids living at your home.', ar: 'خادمات بدوام كامل يقمن في منزلك.' },
    description: { en: 'Reliable live-in maids who stay at your home and handle daily cleaning, cooking and household tasks with care and professionalism.', ar: 'خادمات مقيمات موثوقات يقمن في منزلك ويتولين التنظيف اليومي والطبخ والمهام المنزلية بعناية واحترافية.' }
  },
  {
    slug: 'live-out-maid',
    icon: '🧹',
    name: { en: 'Live-out Maid Services', ar: 'خدمات الخادمات غير المقيمات' },
    short: { en: 'Maids who visit on a schedule.', ar: 'خادمات يزرن وفق جدول.' },
    description: { en: 'Professional maids who come to your home on a fixed schedule and return after completing their work, ideal for flexible household needs.', ar: 'خادمات محترفات يأتين إلى منزلك وفق جدول ثابت ويعدن بعد إنهاء عملهن، مثالية للاحتياجات المنزلية المرنة.' }
  },
  {
    slug: 'housemaid',
    icon: '✨',
    name: { en: 'Housemaid Services', ar: 'خدمات عاملات المنازل' },
    short: { en: 'Everyday home support for families.', ar: 'دعم منزلي يومي للأسر.' },
    description: { en: 'Professional housemaids for cleaning, laundry, ironing, room care and practical household routines across UAE homes.', ar: 'عاملات منازل محترفات للتنظيف والغسيل والكي وترتيب الغرف والمهام المنزلية العملية في منازل الإمارات.' }
  },
  {
    slug: 'housekeeping',
    icon: '🧺',
    name: { en: 'Cleaning & Housekeeping Services', ar: 'خدمات التنظيف وترتيب المنزل' },
    short: { en: 'Organized cleaning and housekeeping help.', ar: 'مساعدة منظمة للتنظيف وترتيب المنزل.' },
    description: { en: 'Detailed housekeeping services for tidy bedrooms, clean living areas, laundry routines, kitchen organization and a well-maintained home.', ar: 'خدمات ترتيب وتنظيف منزلية تشمل الغرف ومناطق المعيشة والغسيل وتنظيم المطبخ والحفاظ على منزل مرتب.' }
  },
  {
    slug: 'full-time-maid',
    icon: '⏰',
    name: { en: 'Full-time Maid Hiring', ar: 'توظيف خادمة بدوام كامل' },
    short: { en: 'Dedicated full-time household help.', ar: 'مساعدة منزلية متفرغة.' },
    description: { en: 'Hire a dedicated full-time maid for complete daily household management, cleaning, laundry and family routine support.', ar: 'وظّف خادمة بدوام كامل لإدارة المنزل والتنظيف والغسيل ودعم روتين الأسرة اليومي.' }
  },
  {
    slug: 'part-time-maid',
    icon: '🕒',
    name: { en: 'Part-time Maid Hiring', ar: 'توظيف خادمة بدوام جزئي' },
    short: { en: 'Flexible hourly maid help.', ar: 'مساعدة مرنة بالساعة.' },
    description: { en: 'Flexible part-time maids available by the hour for cleaning, laundry, ironing and household tasks whenever you need them.', ar: 'خادمات بدوام جزئي متاحات بالساعة للتنظيف والغسيل والكي والمهام المنزلية عند الحاجة.' }
  },
  {
    slug: 'monthly-maid-contract',
    icon: '📅',
    name: { en: 'Monthly Maid Contract', ar: 'عقد خادمة شهري' },
    short: { en: 'Cost-effective monthly plans.', ar: 'خطط شهرية اقتصادية.' },
    description: { en: 'Affordable monthly maid contracts with regular scheduled cleaning visits, defined duties and priority household support.', ar: 'عقود خادمة شهرية بأسعار مناسبة مع زيارات تنظيف منتظمة ومهام واضحة ودعم منزلي ذي أولوية.' }
  },
  {
    slug: 'on-demand-domestic-help',
    icon: '⚡',
    name: { en: 'On-demand Domestic Help', ar: 'مساعدة منزلية عند الطلب' },
    short: { en: 'Domestic support when you need it.', ar: 'دعم منزلي عند الحاجة.' },
    description: { en: 'On-demand domestic help for urgent cleaning, short-term home support, guest preparation, moving days and busy family schedules.', ar: 'مساعدة منزلية عند الطلب للتنظيف العاجل والدعم قصير المدى وتجهيز الضيوف وأيام الانتقال والجداول العائلية المزدحمة.' }
  },
  {
    slug: 'nanny',
    icon: '👶',
    name: { en: 'Nanny Services', ar: 'خدمات المربيات' },
    short: { en: 'Caring nannies for your children.', ar: 'مربيات حنونات لأطفالك.' },
    description: { en: 'Experienced and caring nannies to look after your children with love, safety, structure and daily attention.', ar: 'مربيات ذوات خبرة وحنان لرعاية أطفالك بحب وأمان وتنظيم واهتمام يومي.' }
  },
  {
    slug: 'executive-nannies',
    icon: '🛡️',
    name: { en: 'Executive Nannies', ar: 'مربيات تنفيذيات' },
    short: { en: 'Premium childcare for executive households.', ar: 'رعاية أطفال راقية للمنازل التنفيذية.' },
    description: { en: 'Premium executive nannies for structured childcare, learning routines, travel support and discreet assistance for busy families.', ar: 'مربيات تنفيذيات بخبرة راقية لرعاية الأطفال وتنظيم الروتين التعليمي ودعم السفر والمساعدة بسرية للأسر المشغولة.' }
  },
  {
    slug: 'babysitting',
    icon: '🧸',
    name: { en: 'Babysitting Services', ar: 'خدمات جليسات الأطفال' },
    short: { en: 'Trusted babysitters on demand.', ar: 'جليسات أطفال موثوقات عند الطلب.' },
    description: { en: 'Reliable babysitters available on demand for short-term, evening, weekend and occasional childcare needs.', ar: 'جليسات أطفال موثوقات عند الطلب لاحتياجات رعاية الأطفال القصيرة والمسائية وعطلة نهاية الأسبوع والمناسبات الخاصة.' }
  },
  {
    slug: 'newborn-care',
    icon: '🍼',
    name: { en: 'Newborn Care Services', ar: 'خدمات رعاية المواليد' },
    short: { en: 'Specialist newborn care.', ar: 'رعاية متخصصة للمواليد.' },
    description: { en: 'Specialist carers trained in newborn care to support new parents during the early months with feeding routines, hygiene and calm baby care.', ar: 'مقدمات رعاية متخصصات مدربات على رعاية المواليد لدعم الوالدين خلال الأشهر الأولى في الروتين والنظافة والعناية الهادئة بالطفل.' }
  },
  {
    slug: 'home-cooking',
    icon: '🍲',
    name: { en: 'Home Cooking Services', ar: 'خدمات الطبخ المنزلي' },
    short: { en: 'Delicious home-cooked meals.', ar: 'وجبات منزلية لذيذة.' },
    description: { en: 'Skilled home cooks preparing fresh daily meals, family recipes, lunch boxes and kitchen routines tailored to your taste.', ar: 'طهاة منزليون ماهرون لإعداد وجبات يومية طازجة ووصفات عائلية ووجبات مدرسية وروتين مطبخ يناسب ذوقك.' }
  },
  {
    slug: 'private-chefs',
    icon: '🍽️',
    name: { en: 'Private Chefs', ar: 'طهاة خاصون' },
    short: { en: 'Premium private chef support at home.', ar: 'دعم شيف خاص راقٍ في المنزل.' },
    description: { en: 'Private chefs for luxury home dining, weekly menus, dietary preferences, family meals and private gatherings in UAE homes.', ar: 'طهاة خاصون لتجربة طعام منزلية راقية وقوائم أسبوعية واحتياجات غذائية ووجبات عائلية ومناسبات خاصة في منازل الإمارات.' }
  },
  {
    slug: 'personal-chef',
    icon: '👨‍🍳',
    name: { en: 'Cook / Personal Chef Hiring', ar: 'توظيف طاهٍ / شيف خاص' },
    short: { en: 'Private cooks for your home.', ar: 'طهاة خاصون لمنزلك.' },
    description: { en: 'Hire a private cook or personal chef for daily meals, special occasions, dietary needs and kitchen support.', ar: 'وظّف طاهياً خاصاً أو شيف شخصي للوجبات اليومية والمناسبات الخاصة والاحتياجات الغذائية ودعم المطبخ.' }
  },
  {
    slug: 'kitchen-helper',
    icon: '🥘',
    name: { en: 'Kitchen Helper Services', ar: 'خدمات مساعد المطبخ' },
    short: { en: 'Extra hands in the kitchen.', ar: 'أيدٍ إضافية في المطبخ.' },
    description: { en: 'Reliable kitchen helpers to assist with food preparation, cleaning, washing, storage and kitchen organization.', ar: 'مساعدو مطبخ موثوقون للمساعدة في تحضير الطعام والتنظيف والغسيل والتخزين وتنظيم المطبخ.' }
  },
  {
    slug: 'house-managers',
    icon: '📋',
    name: { en: 'House Managers', ar: 'مديرو المنازل' },
    short: { en: 'Executive household coordination.', ar: 'تنسيق تنفيذي لشؤون المنزل.' },
    description: { en: 'Professional house managers for wardrobe checks, housekeeping coordination, staff schedules, household inventory and daily home organization.', ar: 'مديرو منازل محترفون لمتابعة الخزائن وتنسيق التدبير المنزلي وجداول العاملين والمخزون وتنظيم المنزل اليومي.' }
  },
  {
    slug: 'elder-care',
    icon: '👵',
    name: { en: 'Elder Care Services', ar: 'خدمات رعاية المسنين' },
    short: { en: 'Compassionate elderly care.', ar: 'رعاية رحيمة للمسنين.' },
    description: { en: 'Compassionate and trained caregivers providing daily support, companionship, mobility assistance and comfort for elderly family members.', ar: 'مقدمو رعاية مدربون ورحيمون يقدمون الدعم اليومي والرفقة والمساعدة في الحركة والراحة لكبار السن من أفراد العائلة.' }
  },
  {
    slug: 'patient-care',
    icon: '🏥',
    name: { en: 'Home Care / Patient Care Services', ar: 'خدمات الرعاية المنزلية / رعاية المرضى' },
    short: { en: 'Professional patient care at home.', ar: 'رعاية احترافية للمرضى في المنزل.' },
    description: { en: 'Trained caregivers offering professional home-based patient care, daily living support, hygiene assistance and family relief.', ar: 'مقدمو رعاية مدربون يقدمون رعاية منزلية للمرضى ودعم الحياة اليومية والمساعدة في النظافة وتخفيف العبء عن الأسرة.' }
  },
  {
    slug: 'companion-care',
    icon: '🤝',
    name: { en: 'Companion Care Services', ar: 'خدمات رعاية المرافقة' },
    short: { en: 'Friendly companionship support.', ar: 'دعم الرفقة الودودة.' },
    description: { en: 'Friendly companions providing emotional support, conversation, light assistance and daily presence for those who need company.', ar: 'مرافقون ودودون يقدمون الدعم العاطفي والمحادثة والمساعدة الخفيفة والحضور اليومي لمن يحتاج إلى رفقة.' }
  },
  {
    slug: 'recruitment',
    icon: '📌',
    name: { en: 'Domestic Worker Recruitment', ar: 'توظيف العمالة المنزلية' },
    short: { en: 'End-to-end recruitment.', ar: 'توظيف شامل.' },
    description: { en: 'Complete domestic worker recruitment service from requirement review, sourcing and screening to profile selection and placement support.', ar: 'خدمة توظيف عمالة منزلية كاملة من مراجعة الاحتياج والبحث والفرز إلى اختيار الملفات ودعم التوظيف.' }
  },
  {
    slug: 'maid-visa',
    icon: '📄',
    name: { en: 'Maid Visa Assistance', ar: 'المساعدة في تأشيرة الخادمة' },
    short: { en: 'Hassle-free visa processing.', ar: 'معالجة تأشيرة دون عناء.' },
    description: { en: 'Full assistance with maid visa application, renewal, sponsorship steps and documentation guidance as per UAE regulations.', ar: 'مساعدة كاملة في تقديم وتأشيرة الخادمة والتجديد وخطوات الكفالة وإرشاد المستندات وفق لوائح الإمارات.' }
  },
  {
    slug: 'maid-replacement',
    icon: '🔄',
    name: { en: 'Maid Replacement Services', ar: 'خدمات استبدال الخادمة' },
    short: { en: 'Replacement support as per policy.', ar: 'دعم الاستبدال حسب السياسة.' },
    description: { en: 'Organized maid replacement support with clear communication, eligibility review and next-step coordination as per service policy.', ar: 'دعم منظم لاستبدال الخادمة مع تواصل واضح ومراجعة الأهلية وتنسيق الخطوات التالية حسب سياسة الخدمة.' }
  },
  {
    slug: 'sponsorship-transfer',
    icon: '📝',
    name: { en: 'Maid Transfer / Sponsorship Change', ar: 'نقل الخادمة / تغيير الكفالة' },
    short: { en: 'Easy sponsorship transfer.', ar: 'نقل كفالة سهل.' },
    description: { en: 'Smooth maid transfer and sponsorship change services handled with clear documentation guidance and UAE process support.', ar: 'خدمات نقل الخادمة وتغيير الكفالة بسلاسة مع إرشاد واضح للمستندات ودعم إجراءات الإمارات.' }
  },
  {
    slug: 'experienced-maid',
    icon: '⭐',
    name: { en: 'Experienced / Trained Maid Hiring', ar: 'توظيف خادمة ذات خبرة / مدربة' },
    short: { en: 'Highly skilled trained maids.', ar: 'خادمات مدربات ذوات مهارة عالية.' },
    description: { en: 'Hire experienced, professionally trained maids skilled in cleaning, cooking, childcare, laundry and family routines.', ar: 'وظّف خادمات ذوات خبرة ومدربات احترافياً وماهرات في التنظيف والطبخ ورعاية الأطفال والغسيل وروتين الأسرة.' }
  },
  {
    slug: 'background-verification',
    icon: '🔍',
    name: { en: 'Background Verification Services', ar: 'خدمات التحقق من الخلفية' },
    short: { en: 'Thorough staff verification.', ar: 'تحقق شامل من العمالة.' },
    description: { en: 'Thorough background verification support designed to improve trust, safety and reliability before domestic worker placement.', ar: 'دعم شامل للتحقق من الخلفية بهدف تعزيز الثقة والسلامة والموثوقية قبل توظيف العمالة المنزلية.' }
  },
  {
    slug: 'bespoke-household-management',
    icon: '🏛️',
    name: { en: 'Bespoke Household Management', ar: 'إدارة منزلية مخصصة' },
    short: { en: 'Tailored household support packages.', ar: 'باقات دعم منزلي مخصصة.' },
    description: { en: 'Bespoke household management packages coordinating maids, nannies, chefs, house managers and support services around your lifestyle.', ar: 'باقات إدارة منزلية مخصصة تنسق الخادمات والمربيات والطهاة ومديري المنازل وخدمات الدعم حسب أسلوب حياتك.' }
  },
  {
    slug: 'floral-styling',
    icon: '🌸',
    name: { en: 'Floral Styling', ar: 'تنسيق الزهور' },
    short: { en: 'Fresh floral styling for homes.', ar: 'تنسيق زهور منعش للمنازل.' },
    description: { en: 'Floral styling support for fresh weekly arrangements, home presentation, majlis styling, dining settings and private family events.', ar: 'دعم تنسيق الزهور للترتيبات الأسبوعية وعرض المنزل وتنسيق المجلس وطاولات الطعام والمناسبات العائلية الخاصة.' }
  },
  {
    slug: 'relocation-support',
    icon: '📦',
    name: { en: 'Relocation Support', ar: 'دعم الانتقال' },
    short: { en: 'Organized moving assistance.', ar: 'مساعدة منظمة أثناء الانتقال.' },
    description: { en: 'Relocation support for packing coordination, home setup, unpacking routines, cleaning preparation and settling into a new UAE home.', ar: 'دعم الانتقال لتنسيق التعبئة وتجهيز المنزل وفك الأغراض وتحضير التنظيف والاستقرار في منزل جديد داخل الإمارات.' }
  },
  {
    slug: 'pet-care-specialists',
    icon: '🐾',
    name: { en: 'Pet Care Specialists', ar: 'متخصصو رعاية الحيوانات الأليفة' },
    short: { en: 'Pet wellbeing support at home.', ar: 'دعم رفاهية الحيوانات الأليفة في المنزل.' },
    description: { en: 'Pet care specialists for feeding routines, light grooming coordination, walking support and home care around cats, dogs and family pets.', ar: 'متخصصو رعاية الحيوانات الأليفة لروتين التغذية وتنسيق العناية الخفيفة والمشي والرعاية المنزلية للقطط والكلاب وحيوانات الأسرة.' }
  },
  {
    slug: 'event-staffing',
    icon: '🥂',
    name: { en: 'Event Staffing', ar: 'طاقم للمناسبات' },
    short: { en: 'Waitstaff for private parties.', ar: 'طاقم خدمة للمناسبات الخاصة.' },
    description: { en: 'Event staffing for private home gatherings, serving support, guest assistance, setup help and post-event household organization.', ar: 'طاقم مناسبات للتجمعات المنزلية الخاصة ودعم التقديم ومساعدة الضيوف والتجهيز وترتيب المنزل بعد المناسبة.' }
  }
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
