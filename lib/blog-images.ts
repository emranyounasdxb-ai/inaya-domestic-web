type BlogImage = {
  src: string;
  alt: { en: string; ar: string };
};

// Topic-specific artwork is shared by English and Arabic pages with localized descriptions.
const blogImages: Record<string, BlogImage> = {
  'domestic-worker-contract-permit-residence-cancellation': {
    src: "/images/blogs/domestic-worker-contract-permit-residence-cancellation-20261020.webp",
    alt: {
      en: "A service adviser, householder and domestic worker review separate administrative records.",
      ar: "مستشارة خدمات وصاحبة منزل وعاملة منزلية يراجعن ملفات إدارية منفصلة."
    }
  },
  'maid-daily-instructions-handover-template': {
    src: "/images/blogs/maid-daily-instructions-handover-template-20261020.webp",
    alt: {
      en: "A domestic worker and householder review completed tasks in a daily handover notebook.",
      ar: "عاملة منزلية وصاحبة المنزل تراجعان المهام المنجزة في دفتر التسليم اليومي."
    }
  },
  'one-maid-two-helpers-workload': {
    src: "/images/blogs/one-maid-two-helpers-workload-20261020.webp",
    alt: {
      en: "A householder and two domestic helpers review a shared household workload planner.",
      ar: "صاحبة منزل ومساعدتان منزليتان يراجعن جدولاً لتوزيع أعمال المنزل."
    }
  },
  'moving-home-emirate-with-domestic-worker': {
    src: "/images/blogs/moving-home-emirate-with-domestic-worker-20261020.webp",
    alt: {
      en: "A householder and domestic worker review a room plan and new-home keys among moving boxes.",
      ar: "صاحبة المنزل وعاملة منزلية تراجعان مخطط الغرف ومفاتيح المنزل الجديد بين صناديق الانتقال."
    }
  },
  'maid-duties-family-holiday': {
    src: "/images/blogs/maid-duties-family-holiday-20261020.webp",
    alt: {
      en: "A domestic worker waters a houseplant beside a household checklist while caring for an occupied home.",
      ar: "عاملة منزلية تسقي نباتاً داخلياً بجوار قائمة مهام أثناء العناية بمنزل تواصل الإقامة فيه."
    }
  },
  'maid-help-family-guests-gathering': {
    src: "/images/blogs/maid-help-family-guests-gathering-20261020.webp",
    alt: {
      en: "A householder and domestic worker prepare a dining table for a private family gathering.",
      ar: "صاحبة المنزل وعاملة منزلية تجهزان طاولة الطعام لاستقبال تجمع عائلي خاص."
    }
  },
  'maid-home-access-keys-privacy': {
    src: "/images/blogs/maid-home-access-keys-privacy-20261020.webp",
    alt: {
      en: "Homeowner hands a single home key to a domestic worker at a secure indoor entrance.",
      ar: "صاحبة المنزل تسلّم مفتاح المنزل لعاملة منزلية عند مدخل داخلي آمن."
    }
  },
  'maid-household-with-pets': {
    src: "/images/blogs/maid-household-with-pets-20261020.webp",
    alt: {
      en: "Homeowner explains household routines to a domestic worker while a calm dog rests on its mat.",
      ar: "صاحبة المنزل تشرح الروتين المنزلي لعاملة منزلية بينما يستريح كلب هادئ على فراشه."
    }
  },
  'nanny-school-routine-child-handover': {
    src: "/images/blogs/nanny-school-routine-child-handover-20261020.webp",
    alt: {
      en: "Mother hands a school backpack to the nanny while her child stands beside her inside the home.",
      ar: "أم تسلّم الحقيبة المدرسية للمربية وطفلها يقف بجانبها داخل المنزل."
    }
  },
  'new-maid-first-week-checklist': {
    src: "/images/blogs/new-maid-first-week-checklist-20261020.webp",
    alt: {
      en: "Homeowner shows a new domestic worker how to use the washing machine during household orientation.",
      ar: "صاحبة المنزل تشرح للعاملة المنزلية الجديدة كيفية استخدام الغسالة خلال التعريف بالمنزل."
    }
  },
  'home-cooking-weekly-meal-prep-plan': {
    src: "/images/blogs/home-cooking-weekly-meal-prep-plan-20261020.webp",
    alt: {
      en: "Domestic worker and homeowner plan balanced weekly meals in a bright home kitchen.",
      ar: "عاملة منزلية وصاحبة المنزل تخططان لوجبات أسبوعية متوازنة في مطبخ مضيء."
    }
  },
  'maid-laundry-ironing-task-checklist': {
    src: "/images/blogs/maid-laundry-ironing-task-checklist-20261020.webp",
    alt: {
      en: "Domestic worker checks a shirt care label beside sorted laundry and a safely positioned iron.",
      ar: "عاملة منزلية تقرأ ملصق العناية بقميص بجانب غسيل مفروز ومكواة موضوعة بأمان."
    }
  },
  'prepare-cleaning-supplies-maid-visit': {
    src: "/images/blogs/prepare-cleaning-supplies-maid-visit-20261020.webp",
    alt: {
      en: "Domestic worker checks a mop beside organised cloths, gloves, bottles and cleaning equipment.",
      ar: "عاملة منزلية تفحص ممسحة بجانب أقمشة وقفازات وعبوات وأدوات تنظيف مرتبة."
    }
  },
  'regular-maid-service-deep-move-in-cleaning': {
    src: "/images/blogs/regular-maid-service-deep-move-in-cleaning-20261020.webp",
    alt: {
      en: "Domestic worker and household coordinator review kitchen surfaces in an apartment prepared for moving in.",
      ar: "عاملة منزلية ومنسقة منزل تراجعان أسطح المطبخ في شقة يجري تجهيزها للسكن."
    }
  },
  'apartment-villa-maid-task-plan': {
    src: "/images/blogs/apartment-villa-maid-task-plan-20261020.webp",
    alt: {
      en: "Household coordinator and domestic worker review a villa floor plan and the rooms across its floors.",
      ar: "منسقة منزل وعاملة منزلية تراجعان مخطط فيلا والغرف في طوابقها."
    }
  },
  'maid-visit-frequency-planner': {
    src: "/images/blogs/maid-visit-frequency-planner-20261020.webp",
    alt: {
      en: "Household coordinator and domestic worker plan recurring visits using coloured calendar markers.",
      ar: "منسقة منزل وعاملة منزلية تخططان للزيارات الدورية باستخدام علامات ملونة على جدول."
    }
  },
  'four-hour-eight-hour-maid-visit-plan': {
    src: "/images/blogs/four-hour-eight-hour-maid-visit-plan-20261020.webp",
    alt: {
      en: "A householder and domestic worker plan cleaning priorities beside a clock and cleaning supplies.",
      ar: "صاحبة منزل وعاملة منزلية تخططان لأولويات التنظيف بجوار ساعة ومستلزمات التنظيف."
    }
  },
  'uae-domestic-worker-hiring-process': {
    src: '/images/blogs/questions-to-ask-before-hiring-a-domestic-worker-in-the-uae.webp',
    alt: {
      en: 'Family discussing domestic worker hiring questions with an adviser.',
      ar: 'أسرة تناقش أسئلة توظيف عامل مساعد مع مستشارة.'
    }
  },
  'domestic-worker-package-pricing-factors': {
    src: '/images/blogs/domestic-worker-costs-package-prices-wages-and-fees.webp',
    alt: {
      en: 'Woman reviewing household service costs with documents and a calculator.',
      ar: 'امرأة تراجع تكاليف الخدمات المنزلية باستخدام مستندات وآلة حاسبة.'
    }
  },
  'documents-for-domestic-worker-enquiry': {
    src: '/images/blogs/documents-to-prepare-for-a-domestic-worker-enquiry.webp',
    alt: {
      en: 'Woman organising paperwork and a passport for a domestic worker enquiry.',
      ar: 'امرأة ترتب المستندات وجواز سفر استعداداً للاستفسار عن توظيف عامل مساعد.'
    }
  },
  'live-in-live-out-part-time-maid-uae': {
    src: '/images/blogs/live-in-live-out-or-part-time-maid-comparing-arrangements.webp',
    alt: {
      en: 'Domestic worker carrying a bag and discussing household arrangements with a woman.',
      ar: 'عاملة منزلية تحمل حقيبة وتناقش ترتيبات العمل المنزلي مع امرأة.'
    }
  },
  'monthly-maid-package-inclusions-checklist': {
    src: '/images/blogs/what-is-included-in-a-monthly-maid-package.webp',
    alt: {
      en: 'Domestic worker and a woman reviewing a household task checklist in a kitchen.',
      ar: 'عاملة منزلية وامرأة تراجعان قائمة المهام المنزلية في المطبخ.'
    }
  },
  'maid-nanny-babysitter-differences': {
    src: '/images/blogs/maid-nanny-or-babysitter-choosing-the-right-role.webp',
    alt: {
      en: 'Childcare worker helping a child with a wooden puzzle while a parent watches.',
      ar: 'مربية تساعد طفلة في تركيب أحجية خشبية بينما تتابعها والدتها.'
    }
  },
  'domestic-worker-visa-sponsorship-support': {
    src: '/images/blogs/preparing-a-domestic-worker-visa-or-sponsorship-case.webp',
    alt: {
      en: 'Couple reviewing sponsorship paperwork and a passport at a desk.',
      ar: 'زوجان يراجعان مستندات الكفالة وجواز سفر على مكتب.'
    }
  },
  'choosing-domestic-worker-agency-ajman': {
    src: '/images/blogs/how-to-choose-a-domestic-worker-agency-in-ajman.webp',
    alt: {
      en: 'Woman reviewing a domestic worker profile folder with an agency adviser.',
      ar: 'امرأة تراجع ملف عامل مساعد مع مستشارة في مكتب استقدام.'
    }
  },
  'domestic-worker-hiring-costs-uae': {
    src: "/images/blogs/domestic-worker-hiring-costs-uae-20261020.webp",
    alt: {
      en: "A couple and adviser compare domestic-worker quotations using a calculator and monthly planning calendar.",
      ar: "زوجان ومستشارة يقارنون عروض توظيف عاملة منزلية باستخدام آلة حاسبة وتقويم للتخطيط الشهري."
    }
  },
  'domestic-worker-employment-arrangements-uae': {
    src: '/images/blogs/live-in-live-out-or-temporary-domestic-help-which-arrangement-fits-your-household.webp',
    alt: {
      en: 'Domestic worker arriving with a bag and being greeted at a home entrance.',
      ar: 'عاملة منزلية تصل وهي تحمل حقيبة وتتلقى الترحيب عند مدخل المنزل.'
    }
  },
  'all-inclusive-domestic-worker-packages': {
    src: '/images/blogs/what-should-an-all-inclusive-domestic-worker-package-include-in-writing.webp',
    alt: {
      en: 'Two women reviewing the written terms of a domestic worker service package.',
      ar: 'امرأتان تراجعان الشروط المكتوبة لباقة خدمات العمالة المساعدة.'
    }
  },
  'domestic-worker-sponsorship-responsibilities': {
    src: '/images/blogs/who-is-responsible-for-a-domestic-workers-sponsorship-and-employment.webp',
    alt: {
      en: 'Domestic worker, employer and adviser reviewing employment paperwork together.',
      ar: 'عاملة منزلية وصاحبة عمل ومستشارة يراجعن مستندات التوظيف معاً.'
    }
  },
  'domestic-worker-employer-eligibility-documents': {
    src: '/images/blogs/who-can-apply-for-a-domestic-worker-permit-and-which-documents-are-needed.webp',
    alt: {
      en: 'Man and adviser reviewing permit application documents with a passport on the desk.',
      ar: 'رجل ومستشارة يراجعان مستندات طلب التصريح مع وجود جواز سفر على المكتب.'
    }
  },
  'domestic-worker-hiring-stages-timelines': {
    src: '/images/blogs/what-happens-during-domestic-worker-hiring-and-how-long-does-it-take.webp',
    alt: {
      en: 'Adviser explaining domestic worker hiring stages to a couple beside a desk calendar.',
      ar: 'مستشارة تشرح مراحل توظيف عامل مساعد لزوجين بجوار تقويم مكتبي.'
    }
  },
  'domestic-worker-skills-language-assessment': {
    src: '/images/blogs/how-to-select-a-domestic-workers-skills-and-language-for-your-household.webp',
    alt: {
      en: 'Woman and domestic worker discussing household skills using a notebook in the kitchen.',
      ar: 'امرأة وعاملة منزلية تناقشان المهارات المنزلية باستخدام دفتر في المطبخ.'
    }
  },
  'choosing-nanny-newborn-support': {
    src: '/images/blogs/how-to-assess-a-nanny-for-a-baby-or-newborn.webp',
    alt: {
      en: 'Parent discussing infant care with a nanny beside a sleeping baby in a bassinet.',
      ar: 'والدة تناقش رعاية الرضيع مع مربية بجوار طفل نائم في سرير الرضع.'
    }
  },
  'caregiver-versus-licensed-nurse': {
    src: '/images/blogs/caregiver-or-licensed-nurse-which-kind-of-home-support-do-you-need.webp',
    alt: {
      en: 'Care professional discussing home support with an older woman and a family member.',
      ar: 'مختصة رعاية تناقش الدعم المنزلي مع امرأة مسنة وامرأة من أسرتها.'
    }
  },
  'agreeing-domestic-worker-household-duties': {
    src: "/images/blogs/agreeing-domestic-worker-household-duties-20261020.webp",
    alt: {
      en: "A householder and domestic worker discuss household duties while a parent supervises a child nearby.",
      ar: "صاحبة منزل وعاملة منزلية تناقشان المهام بينما يشرف الأب على طفله بالقرب منهما."
    }
  },
  'domestic-worker-verification-checks': {
    src: '/images/blogs/what-should-verified-domestic-worker-mean.webp',
    alt: {
      en: 'Woman and domestic worker reviewing a folder of profile documents.',
      ar: 'امرأة وعاملة منزلية تراجعان ملفاً يحتوي على مستندات التعريف بالعامل.'
    }
  },
  'domestic-worker-interview-trial-probation': {
    src: '/images/blogs/interview-trial-and-probation-what-is-the-difference-when-hiring-a-domestic-worker.webp',
    alt: {
      en: 'Couple interviewing a domestic worker in a living room.',
      ar: 'زوجان يجريان مقابلة مع عاملة منزلية في غرفة المعيشة.'
    }
  },
  'domestic-worker-replacement-eligibility': {
    src: '/images/blogs/when-can-you-request-a-replacement-domestic-worker.webp',
    alt: {
      en: 'Woman discussing a domestic worker replacement request with an adviser over paperwork.',
      ar: 'امرأة تناقش طلب استبدال عاملة منزلية مع مستشارة أثناء مراجعة المستندات.'
    }
  },
  'domestic-worker-recruitment-refund-rules': {
    src: '/images/blogs/when-are-domestic-worker-recruitment-fees-refundable.webp',
    alt: {
      en: 'Two women reviewing recruitment fee paperwork together at a desk.',
      ar: 'امرأتان تراجعان مستندات رسوم الاستقدام معاً على مكتب.'
    }
  },
  'domestic-worker-contracts-renewal': {
    src: '/images/blogs/which-domestic-worker-contracts-should-you-read-and-how-does-renewal-work.webp',
    alt: {
      en: 'Woman signing employment paperwork with an adviser and a desk calendar nearby.',
      ar: 'امرأة توقع مستندات التوظيف بحضور مستشارة وبجوار تقويم مكتبي.'
    }
  },
  'domestic-worker-wages-rest-leave': {
    src: '/images/blogs/domestic-worker-wages-rest-and-leave-what-must-an-employer-plan-for.webp',
    alt: {
      en: 'Domestic worker resting in an armchair with a cup beside a calendar and notebook.',
      ar: 'عاملة منزلية تستريح على كرسي بذراعين وتحمل كوباً بجوار تقويم ودفتر.'
    }
  },
  'own-visa-part-time-domestic-work': {
    src: '/images/blogs/can-you-hire-a-domestic-worker-who-has-their-own-visa-or-works-part-time.webp',
    alt: {
      en: 'Adviser and domestic worker reviewing a passport and employment documents.',
      ar: 'مستشارة وعاملة منزلية تراجعان جواز سفر ومستندات التوظيف.'
    }
  },
  'domestic-worker-leave-travel-planning': {
    src: "/images/blogs/domestic-worker-leave-travel-planning-20261020.webp",
    alt: {
      en: "A domestic worker keeps her own passport beside her suitcase while discussing annual-leave dates with a householder.",
      ar: "عاملة منزلية تحتفظ بجواز سفرها بجوار حقيبتها أثناء مناقشة مواعيد إجازتها السنوية مع صاحبة المنزل."
    }
  },
  'domestic-worker-complaints-disputes': {
    src: '/images/blogs/how-do-domestic-worker-complaints-and-recruitment-agency-disputes-proceed.webp',
    alt: {
      en: 'Domestic worker and a woman discussing a concern with an adviser taking notes.',
      ar: 'عاملة منزلية وامرأة تناقشان مشكلة مع مستشارة تدون الملاحظات.'
    }
  }
};

export function getBlogImage(slug: string): BlogImage | undefined {
  return blogImages[slug];
}
