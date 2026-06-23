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
    description: { en: 'Professional maids who come to your home on a fixed schedule and return after completing their work, ideal for flexible needs.', ar: 'خادمات محترفات يأتين إلى منزلك وفق جدول ثابت ويعدن بعد إنهاء عملهن، مثالية للاحتياجات المرنة.' }
  },
  {
    slug: 'full-time-maid',
    icon: '⏰',
    name: { en: 'Full-time Maid Hiring', ar: 'توظيف خادمة بدوام كامل' },
    short: { en: 'Dedicated full-time household help.', ar: 'مساعدة منزلية متفرغة.' },
    description: { en: 'Hire a dedicated full-time maid for complete daily household management and cleaning.', ar: 'وظّف خادمة بدوام كامل لإدارة المنزل والتنظيف اليومي الكامل.' }
  },
  {
    slug: 'part-time-maid',
    icon: '🕒',
    name: { en: 'Part-time Maid Hiring', ar: 'توظيف خادمة بدوام جزئي' },
    short: { en: 'Flexible hourly maid help.', ar: 'مساعدة مرنة بالساعة.' },
    description: { en: 'Flexible part-time maids available by the hour for cleaning and household tasks whenever you need them.', ar: 'خادمات بدوام جزئي مرنات متاحات بالساعة للتنظيف والمهام المنزلية عندما تحتاجها.' }
  },
  {
    slug: 'monthly-maid-contract',
    icon: '📅',
    name: { en: 'Monthly Maid Contract', ar: 'عقد خادمة شهري' },
    short: { en: 'Cost-effective monthly plans.', ar: 'خطط شهرية اقتصادية.' },
    description: { en: 'Affordable monthly maid contracts with regular scheduled cleaning visits and priority support.', ar: 'عقود خادمة شهرية بأسعار معقولة مع زيارات تنظيف منتظمة ودعم ذي أولوية.' }
  },
  {
    slug: 'nanny',
    icon: '👶',
    name: { en: 'Nanny Services', ar: 'خدمات المربيات' },
    short: { en: 'Caring nannies for your children.', ar: 'مربيات حنونات لأطفالك.' },
    description: { en: 'Experienced and caring nannies to look after your children with love, safety and attention.', ar: 'مربيات ذوات خبرة وحنان لرعاية أطفالك بحب وأمان واهتمام.' }
  },
  {
    slug: 'babysitting',
    icon: '🧸',
    name: { en: 'Babysitting Services', ar: 'خدمات رعاية الأطفال' },
    short: { en: 'Trusted babysitters on demand.', ar: 'جليسات أطفال موثوقات عند الطلب.' },
    description: { en: 'Reliable babysitters available on demand for short-term and occasional childcare needs.', ar: 'جليسات أطفال موثوقات متاحات عند الطلب لاحتياجات رعاية الأطفال قصيرة المدى والعرضية.' }
  },
  {
    slug: 'newborn-care',
    icon: '🍼',
    name: { en: 'Newborn Care Services', ar: 'خدمات رعاية المواليد' },
    short: { en: 'Specialist newborn care.', ar: 'رعاية متخصصة للمواليد.' },
    description: { en: 'Specialist carers trained in newborn care to support new parents during the early months.', ar: 'مقدمات رعاية متخصصات مدربات على رعاية المواليد لدعم الآباء الجدد خلال الأشهر الأولى.' }
  },
  {
    slug: 'home-cooking',
    icon: '🍲',
    name: { en: 'Home Cooking Services', ar: 'خدمات الطبخ المنزلي' },
    short: { en: 'Delicious home-cooked meals.', ar: 'وجبات منزلية لذيذة.' },
    description: { en: 'Skilled cooks preparing fresh, delicious home-cooked meals tailored to your family taste.', ar: 'طهاة ماهرون يعدون وجبات منزلية طازجة ولذيذة تناسب ذوق عائلتك.' }
  },
  {
    slug: 'personal-chef',
    icon: '👨‍🍳',
    name: { en: 'Cook / Personal Chef Hiring', ar: 'توظيف طاهٍ / شيف خاص' },
    short: { en: 'Private chefs for your home.', ar: 'طهاة خاصون لمنزلك.' },
    description: { en: 'Hire a private cook or personal chef for daily meals, special occasions and dietary needs.', ar: 'وظّف طاهياً خاصاً أو شيف شخصي للوجبات اليومية والمناسبات الخاصة والاحتياجات الغذائية.' }
  },
  {
    slug: 'kitchen-helper',
    icon: '🥘',
    name: { en: 'Kitchen Helper Services', ar: 'خدمات مساعد المطبخ' },
    short: { en: 'Extra hands in the kitchen.', ar: 'أيدٍ إضافية في المطبخ.' },
    description: { en: 'Reliable kitchen helpers to assist with food preparation, cleaning and kitchen organization.', ar: 'مساعدو مطبخ موثوقون للمساعدة في تحضير الطعام والتنظيف وتنظيم المطبخ.' }
  },
  {
    slug: 'elder-care',
    icon: '👵',
    name: { en: 'Elder Care Services', ar: 'خدمات رعاية المسنين' },
    short: { en: 'Compassionate elderly care.', ar: 'رعاية رحيمة للمسنين.' },
    description: { en: 'Compassionate and trained caregivers providing daily support and companionship for elderly family members.', ar: 'مقدمو رعاية مدربون ورحيمون يقدمون الدعم اليومي والرفقة لأفراد العائلة المسنين.' }
  },
  {
    slug: 'patient-care',
    icon: '🏥',
    name: { en: 'Home Care / Patient Care Services', ar: 'خدمات الرعاية المنزلية / رعاية المرضى' },
    short: { en: 'Professional patient care at home.', ar: 'رعاية احترافية للمرضى في المنزل.' },
    description: { en: 'Trained caregivers offering professional home-based patient care and daily living support.', ar: 'مقدمو رعاية مدربون يقدمون رعاية احترافية للمرضى في المنزل ودعم الحياة اليومية.' }
  },
  {
    slug: 'companion-care',
    icon: '🤝',
    name: { en: 'Companion Care Services', ar: 'خدمات رعاية المرافقة' },
    short: { en: 'Friendly companionship support.', ar: 'دعم الرفقة الودودة.' },
    description: { en: 'Friendly companions providing emotional support, conversation and assistance for those who need company.', ar: 'مرافقون ودودون يقدمون الدعم العاطفي والمحادثة والمساعدة لمن يحتاج رفقة.' }
  },
  {
    slug: 'recruitment',
    icon: '📋',
    name: { en: 'Domestic Worker Recruitment', ar: 'توظيف العمالة المنزلية' },
    short: { en: 'End-to-end recruitment.', ar: 'توظيف شامل.' },
    description: { en: 'Complete domestic worker recruitment service from sourcing and screening to placement.', ar: 'خدمة توظيف عمالة منزلية كاملة من البحث والفرز إلى التوظيف.' }
  },
  {
    slug: 'maid-visa',
    icon: '📄',
    name: { en: 'Maid Visa Assistance', ar: 'المساعدة في تأشيرة الخادمة' },
    short: { en: 'Hassle-free visa processing.', ar: 'معالجة تأشيرة دون عناء.' },
    description: { en: 'Full assistance with maid visa application, renewal and documentation as per UAE regulations.', ar: 'مساعدة كاملة في تقديم تأشيرة الخادمة والتجديد والمستندات وفقاً للوائح الإماراتية.' }
  },
  {
    slug: 'maid-replacement',
    icon: '🔄',
    name: { en: 'Maid Replacement Services', ar: 'خدمات استبدال الخادمة' },
    short: { en: 'Free replacement guarantee.', ar: 'ضمان استبدال مجاني.' },
    description: { en: 'If you are not satisfied with your maid, we provide a quick and free replacement as per policy.', ar: 'إذا لم تكن راضياً عن خادمتك، نوفر استبدالاً سريعاً ومجانياً وفقاً للسياسة.' }
  },
  {
    slug: 'sponsorship-transfer',
    icon: '📝',
    name: { en: 'Maid Transfer / Sponsorship Change', ar: 'نقل الخادمة / تغيير الكفالة' },
    short: { en: 'Easy sponsorship transfer.', ar: 'نقل كفالة سهل.' },
    description: { en: 'Smooth maid transfer and sponsorship change services handled with full legal compliance.', ar: 'خدمات نقل الخادمة وتغيير الكفالة بسلاسة وبامتثال قانوني كامل.' }
  },
  {
    slug: 'experienced-maid',
    icon: '⭐',
    name: { en: 'Experienced / Trained Maid Hiring', ar: 'توظيف خادمة ذات خبرة / مدربة' },
    short: { en: 'Highly skilled trained maids.', ar: 'خادمات مدربات ذوات مهارة عالية.' },
    description: { en: 'Hire experienced, professionally trained maids skilled in cleaning, cooking and childcare.', ar: 'وظّف خادمات ذوات خبرة ومدربات احترافياً وماهرات في التنظيف والطبخ ورعاية الأطفال.' }
  },
  {
    slug: 'background-verification',
    icon: '🔍',
    name: { en: 'Background Verification Services', ar: 'خدمات التحقق من الخلفية' },
    short: { en: 'Thorough staff verification.', ar: 'تحقق شامل من العمالة.' },
    description: { en: 'Thorough background verification of every worker to ensure safety, trust and reliability.', ar: 'تحقق شامل من خلفية كل عامل لضمان السلامة والثقة والموثوقية.' }
  }
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
