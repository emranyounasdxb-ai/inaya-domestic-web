import { keywordArticleImages } from './keyword-article-images';

type BlogImage = {
  src: string;
  alt: { en: string; ar: string };
  // Refresh display requests after same-filename artwork replacements.
  cacheVersion?: string;
  width?: number;
  height?: number;
};

// Topic-specific artwork is shared by English and Arabic pages with localized descriptions.
const blogImages: Record<string, BlogImage> = {
  'domestic-worker-contract-permit-residence-cancellation': {
    src: "/images/blogs/domestic-worker-contract-permit-residence-cancellation-20261020.webp",
    cacheVersion: "272a6833baca",
    alt: {
      en: "Hands sort separate closed administrative folders into different office trays.",
      ar: "يدان ترتبان ملفات إدارية مغلقة ومنفصلة في صوان مختلفة بالمكتب."
    }
  },
  'maid-daily-instructions-handover-template': {
    src: "/images/blogs/maid-daily-instructions-handover-template-20261020.webp",
    cacheVersion: "cea625ff4a16",
    alt: {
      en: "A housemaid and householder review a simple household handover notebook.",
      ar: "عاملة منزلية وأحد أفراد الأسرة يراجعان دفتراً بسيطاً لتسليم مهام المنزل."
    }
  },
  'one-maid-two-helpers-workload': {
    src: "/images/blogs/one-maid-two-helpers-workload-20261020.webp",
    cacheVersion: "119f45bcef19",
    alt: {
      en: "A cleaner in blue and a cook in pink handle separate tasks in different home areas.",
      ar: "عاملة تنظيف بزي أزرق وعاملة طهي بزي وردي تنجزان مهام منفصلة في منطقتين بالمنزل."
    }
  },
  'moving-home-emirate-with-domestic-worker': {
    src: "/images/blogs/moving-home-emirate-with-domestic-worker-20261020.webp",
    cacheVersion: "5f9729a731a2",
    alt: {
      en: "A housemaid unpacks clean towels beside sealed moving boxes in a new home.",
      ar: "عاملة منزلية ترتب مناشف نظيفة بجوار صناديق انتقال مغلقة في المنزل الجديد."
    }
  },
  'maid-duties-family-holiday': {
    src: "/images/blogs/maid-duties-family-holiday-20261020.webp",
    cacheVersion: "812269a885f3",
    alt: {
      en: "A housemaid in pink waters an indoor plant in an occupied home.",
      ar: "عاملة منزلية بزي وردي تسقي نباتاً داخلياً في منزل مأهول."
    }
  },
  'maid-help-family-guests-gathering': {
    src: "/images/blogs/maid-help-family-guests-gathering-20261020.webp",
    cacheVersion: "5da09ab09fd9",
    alt: {
      en: "A housemaid in pink and a householder prepare a family dining table before guests arrive.",
      ar: "عاملة منزلية بزي وردي وصاحبة المنزل تجهزان طاولة عائلية قبل وصول الضيوف."
    }
  },
  'maid-home-access-keys-privacy': {
    src: "/images/blogs/maid-home-access-keys-privacy-20261020.webp",
    cacheVersion: "3fd05df09619",
    alt: {
      en: "A householder hands a single home key to a housemaid in pink at an indoor entrance.",
      ar: "صاحبة المنزل تسلم مفتاحاً واحداً لعاملة منزلية بزي وردي عند المدخل الداخلي."
    }
  },
  'maid-household-with-pets': {
    src: "/images/blogs/maid-household-with-pets-20261020.webp",
    cacheVersion: "cf19f838b47a",
    alt: {
      en: "A householder explains the pet area while a housemaid observes a calm dog from a distance.",
      ar: "صاحب المنزل يشرح منطقة الحيوان الأليف بينما تراقب العاملة كلباً هادئاً من مسافة مناسبة."
    }
  },
  'nanny-school-routine-child-handover': {
    src: "/images/blogs/nanny-school-routine-child-handover-20261020.webp",
    cacheVersion: "271a32adf0e4",
    alt: {
      en: "A parent hands a school backpack to a nanny in beige inside the home.",
      ar: "أحد الوالدين يسلم حقيبة مدرسية لمربية بزي بيج داخل المنزل."
    }
  },
  'new-maid-first-week-checklist': {
    src: "/images/blogs/new-maid-first-week-checklist-20261020.webp",
    cacheVersion: "55e30495275d",
    alt: {
      en: "A householder shows a new housemaid how to use the washing-machine controls.",
      ar: "صاحبة المنزل تشرح للعاملة الجديدة استخدام أدوات التحكم في الغسالة."
    }
  },
  'home-cooking-weekly-meal-prep-plan': {
    src: "/images/blogs/home-cooking-weekly-meal-prep-plan-20261020.webp",
    cacheVersion: "c4dc3a064105",
    alt: {
      en: "A cook in pink prepares an everyday vegetable meal in a home kitchen.",
      ar: "عاملة طهي بزي وردي تجهز وجبة خضار يومية في مطبخ منزلي."
    }
  },
  'maid-laundry-ironing-task-checklist': {
    src: "/images/blogs/maid-laundry-ironing-task-checklist-20261020.webp",
    cacheVersion: "2e9a3ac8200b",
    alt: {
      en: "A housemaid checks a garment-care label beside sorted laundry and an upright iron.",
      ar: "عاملة منزلية تراجع ملصق العناية بقطعة ملابس بجوار غسيل مفروز ومكواة قائمة بأمان."
    }
  },
  'prepare-cleaning-supplies-maid-visit': {
    src: "/images/blogs/prepare-cleaning-supplies-maid-visit-20261020.webp",
    cacheVersion: "9d83da67cdcf",
    alt: {
      en: "Cleaning cloths, gloves and closed bottles are organised beside a mop fitting.",
      ar: "أقمشة تنظيف وقفازات وعبوات مغلقة مرتبة بجوار جزء الممسحة."
    }
  },
  'regular-maid-service-deep-move-in-cleaning': {
    src: "/images/blogs/regular-maid-service-deep-move-in-cleaning-20261020.webp",
    cacheVersion: "2163a2cdacad",
    alt: {
      en: "An INAYA cleaner in royal blue wipes an empty kitchen cupboard in a home prepared for moving in.",
      ar: "عاملة تنظيف من عناية بزي أزرق ملكي تمسح خزانة مطبخ فارغة في منزل يُجهز للانتقال إليه."
    }
  },
  'apartment-villa-maid-task-plan': {
    src: "/images/blogs/apartment-villa-maid-task-plan-20261020.webp",
    cacheVersion: "c7bedbb0f03e",
    alt: {
      en: "An INAYA cleaner in royal blue mops a villa entrance with stairs and multiple rooms.",
      ar: "عاملة تنظيف من عناية بزي أزرق ملكي تنظف مدخل فيلا بالممسحة بجوار درج وغرف متعددة."
    }
  },
  'maid-visit-frequency-planner': {
    src: "/images/blogs/maid-visit-frequency-planner-20261020.webp",
    cacheVersion: "55234e2e01b1",
    alt: {
      en: "Household coordinator and domestic worker plan recurring visits using coloured calendar markers.",
      ar: "منسقة منزل وعاملة منزلية تخططان للزيارات الدورية باستخدام علامات ملونة على جدول."
    }
  },
  'four-hour-eight-hour-maid-visit-plan': {
    src: "/images/blogs/four-hour-eight-hour-maid-visit-plan-20261020.webp",
    cacheVersion: "ee43b05a725f",
    alt: {
      en: "A householder and domestic worker plan cleaning priorities beside a clock and cleaning supplies.",
      ar: "صاحبة منزل وعاملة منزلية تخططان لأولويات التنظيف بجوار ساعة ومستلزمات التنظيف."
    }
  },
  'uae-domestic-worker-hiring-process': {
    src: '/images/blogs/questions-to-ask-before-hiring-a-domestic-worker-in-the-uae.webp',
    cacheVersion: "f07f29f54cc4",
    alt: {
      en: "A visitor uses a notebook while speaking with an adviser at a numbered blue-and-white INAYA counter.",
      ar: "زائرة تستخدم دفتراً أثناء الحديث مع مستشارة عند منضدة عناية المرقمة باللونين الأزرق والأبيض."
    }
  },
  'domestic-worker-package-pricing-factors': {
    src: '/images/blogs/domestic-worker-costs-package-prices-wages-and-fees.webp',
    cacheVersion: "698028a75cfc",
    alt: {
      en: "Hands compare blank cards beside a notebook and calculator on a kitchen counter.",
      ar: "أيدٍ تقارن بطاقات خالية من الكتابة بجوار دفتر وآلة حاسبة على سطح مطبخ."
    }
  },
  'documents-for-domestic-worker-enquiry': {
    src: '/images/blogs/documents-to-prepare-for-a-domestic-worker-enquiry.webp',
    cacheVersion: "9741c0f01abb",
    alt: {
      en: "An adult sorts papers into a folder beside a closed document wallet on an entryway console.",
      ar: "شخص بالغ يرتب أوراقاً في ملف بجوار محفظة وثائق مغلقة على طاولة عند المدخل."
    }
  },
  'live-in-live-out-part-time-maid-uae': {
    src: '/images/blogs/live-in-live-out-or-part-time-maid-comparing-arrangements.webp',
    cacheVersion: "9186988d215f",
    alt: {
      en: "A woman in a pink INAYA uniform carries a tote as a householder welcomes her beside a shoe rack.",
      ar: "امرأة بزي عناية الوردي تحمل حقيبة قماشية، بينما ترحب بها صاحبة المنزل بجوار رف أحذية."
    }
  },
  'monthly-maid-package-inclusions-checklist': {
    src: '/images/blogs/what-is-included-in-a-monthly-maid-package.webp',
    cacheVersion: "7d1c7b4dd9b3",
    alt: {
      en: "A woman in a pink INAYA uniform checks a blank task sheet while placing a folded towel on a cupboard shelf.",
      ar: "امرأة بزي عناية الوردي تراجع ورقة مهام خالية من الكتابة أثناء وضع منشفة مطوية على رف خزانة."
    }
  },
  'maid-nanny-babysitter-differences': {
    src: '/images/blogs/maid-nanny-or-babysitter-choosing-the-right-role.webp',
    cacheVersion: "c5da96110fdf",
    alt: {
      en: "A woman in a beige INAYA uniform shares a picture book with a back-facing child while another woman sits nearby.",
      ar: "امرأة بزي عناية البيج تشارك طفلاً يظهر من الخلف قراءة كتاب مصور، وإلى جانبهما امرأة تحمل كتاباً آخر."
    }
  },
  'domestic-worker-visa-sponsorship-support': {
    src: '/images/blogs/preparing-a-domestic-worker-visa-or-sponsorship-case.webp',
    cacheVersion: "641be7efb52b",
    alt: {
      en: "Hands place blank papers in document trays beside a closed wallet and phone at a service counter.",
      ar: "يدان تضعان أوراقاً خالية من الكتابة في صواني مستندات بجوار محفظة مغلقة وهاتف على منضدة خدمة."
    }
  },
  'choosing-domestic-worker-agency-ajman': {
    src: '/images/blogs/how-to-choose-a-domestic-worker-agency-in-ajman.webp',
    cacheVersion: "820fff43cbe8",
    alt: {
      en: "A visitor checks her visit details inside the office reception.",
      ar: "زائرة تتحقق من تفاصيل زيارتها داخل منطقة الاستقبال بالمكتب."
    }
  },
  'domestic-worker-hiring-costs-uae': {
    src: "/images/blogs/domestic-worker-hiring-costs-uae-20261020.webp",
    cacheVersion: "29ae37bf6625",
    alt: {
      en: "Hands compare two quotations with a household budget notebook and calculator.",
      ar: "يدان تقارنان عرضين باستخدام دفتر ميزانية الأسرة وآلة حاسبة."
    }
  },
  'domestic-worker-employment-arrangements-uae': {
    src: '/images/blogs/live-in-live-out-or-temporary-domestic-help-which-arrangement-fits-your-household.webp',
    cacheVersion: "abdc3a1c75a4",
    alt: {
      en: "A prepared private room with a single bed, a plain timetable and a key.",
      ar: "غرفة خاصة مجهزة بسرير مفرد، وبجوارها ورقة جدول ومفتاح."
    }
  },
  'all-inclusive-domestic-worker-packages': {
    src: '/images/blogs/what-should-an-all-inclusive-domestic-worker-package-include-in-writing.webp',
    cacheVersion: "d5a6c92ced6b",
    alt: {
      en: "Hands review separate papers in a binder of household-service terms.",
      ar: "يدان تراجعان أوراقاً منفصلة في ملف لشروط الخدمة المنزلية."
    }
  },
  'domestic-worker-sponsorship-responsibilities': {
    src: '/images/blogs/who-is-responsible-for-a-domestic-workers-sponsorship-and-employment.webp',
    cacheVersion: "324228648823",
    alt: {
      en: "An adviser and householder discuss separate folders at the office counter.",
      ar: "مستشارة وأحد أفراد الأسرة يناقشان ملفات منفصلة عند منضدة المكتب."
    }
  },
  'domestic-worker-employer-eligibility-documents': {
    src: '/images/blogs/who-can-apply-for-a-domestic-worker-permit-and-which-documents-are-needed.webp',
    cacheVersion: "6ba759bb5e4a",
    alt: {
      en: "A householder places closed document folders into a fabric organiser.",
      ar: "أحد أفراد الأسرة يضع ملفات مستندات مغلقة في حافظة قماشية."
    }
  },
  'domestic-worker-hiring-stages-timelines': {
    src: '/images/blogs/what-happens-during-domestic-worker-hiring-and-how-long-does-it-take.webp',
    cacheVersion: "d94bf706349a",
    alt: {
      en: "An adviser follows up a case beside a calendar and closed folder.",
      ar: "مستشارة تتابع معاملة بجوار تقويم وملف مغلق."
    }
  },
  'domestic-worker-skills-language-assessment': {
    src: '/images/blogs/how-to-select-a-domestic-workers-skills-and-language-for-your-household.webp',
    cacheVersion: "d36c4d3638a8",
    alt: {
      en: "A housemaid in pink explains a practical linen-folding task to a householder.",
      ar: "عاملة منزلية بزي وردي تشرح طريقة طي الأغطية لصاحبة المنزل."
    }
  },
  'choosing-nanny-newborn-support': {
    src: '/images/blogs/how-to-assess-a-nanny-for-a-baby-or-newborn.webp',
    cacheVersion: "204a49a039dc",
    alt: {
      en: "A nanny in beige and a parent discuss an empty bassinet in a nursery.",
      ar: "مربية بزي بيج وأحد الوالدين يناقشان تجهيز سرير رضيع فارغ."
    }
  },
  'caregiver-versus-licensed-nurse': {
    src: '/images/blogs/caregiver-or-licensed-nurse-which-kind-of-home-support-do-you-need.webp',
    cacheVersion: "091bc02e0bdf",
    alt: {
      en: "A caregiver in maroon and an older woman share a quiet conversation at home.",
      ar: "مقدمة رعاية بزي خمري وامرأة مسنة تتحادثان بهدوء في المنزل."
    }
  },
  'agreeing-domestic-worker-household-duties': {
    src: "/images/blogs/agreeing-domestic-worker-household-duties-20261020.webp",
    cacheVersion: "589c2248ff7e",
    alt: {
      en: "A housemaid in pink prepares ingredients while a parent supervises the child nearby.",
      ar: "عاملة منزلية بزي وردي تجهز المكونات بينما يشرف أحد الوالدين على الطفل بالقرب منها."
    }
  },
  'domestic-worker-verification-checks': {
    src: '/images/blogs/what-should-verified-domestic-worker-mean.webp',
    cacheVersion: "1205b474ac41",
    alt: {
      en: "A blank checklist card and closed folders support an evidence-review discussion.",
      ar: "بطاقة مراجعة خالية من البيانات وملفات مغلقة لتوضيح مناقشة المستندات."
    }
  },
  'domestic-worker-interview-trial-probation': {
    src: '/images/blogs/interview-trial-and-probation-what-is-the-difference-when-hiring-a-domestic-worker.webp',
    cacheVersion: "5c0f56f2dc9f",
    alt: {
      en: "A housemaid candidate and householder speak with an adviser in an office seating area.",
      ar: "مرشحة للعمل المنزلي وصاحبة منزل تتحدثان مع مستشارة في منطقة جلوس بالمكتب."
    }
  },
  'domestic-worker-replacement-eligibility': {
    src: '/images/blogs/when-can-you-request-a-replacement-domestic-worker.webp',
    cacheVersion: "686d4ca8fabe",
    alt: {
      en: "A visitor discusses notes in an open folder with an adviser in INAYA’s waiting area.",
      ar: "زائر يناقش ملاحظات في ملف مفتوح مع مستشارة في منطقة الانتظار لدى عناية."
    }
  },
  'domestic-worker-recruitment-refund-rules': {
    src: '/images/blogs/when-are-domestic-worker-recruitment-fees-refundable.webp',
    cacheVersion: "494fd1bcb028",
    alt: {
      en: "Hands arrange paperwork beside a pen, calculator and water glass on a home table.",
      ar: "يدان ترتبان أوراقاً بجوار قلم وآلة حاسبة وكوب ماء على طاولة منزلية."
    }
  },
  'domestic-worker-contracts-renewal': {
    src: '/images/blogs/which-domestic-worker-contracts-should-you-read-and-how-does-renewal-work.webp',
    cacheVersion: "cb63ddac4eb8",
    alt: {
      en: "A woman reviews papers beside a closed folder in a glass-partitioned office.",
      ar: "امرأة تراجع أوراقاً بجوار ملف مغلق داخل مكتب ذي فواصل زجاجية."
    }
  },
  'domestic-worker-wages-rest-leave': {
    src: '/images/blogs/domestic-worker-wages-rest-and-leave-what-must-an-employer-plan-for.webp',
    cacheVersion: "4cf74c0250d9",
    alt: {
      en: "A woman in a pink INAYA uniform rests in an armchair holding a cup.",
      ar: "امرأة بزي عناية الوردي تستريح على كرسي بذراعين وهي تحمل كوباً."
    }
  },
  'own-visa-part-time-domestic-work': {
    src: '/images/blogs/can-you-hire-a-domestic-worker-who-has-their-own-visa-or-works-part-time.webp',
    cacheVersion: "860c80a3720f",
    alt: {
      en: "A hand points to a blank card between a closed document wallet and a folder at a service counter.",
      ar: "يد تشير إلى بطاقة خالية من الكتابة بين محفظة وثائق مغلقة وملف أوراق على منضدة خدمة."
    }
  },
  'domestic-worker-leave-travel-planning': {
    src: "/images/blogs/domestic-worker-leave-travel-planning-20261020.webp",
    cacheVersion: "a1edfc17c8cd",
    alt: {
      en: "A woman in a pink INAYA uniform holds a closed wallet while packing a suitcase beside a woman with a notebook.",
      ar: "امرأة بزي عناية الوردي تحمل محفظة مغلقة أثناء ترتيب حقيبة سفر، وبجانبها امرأة تحمل دفتراً."
    }
  },
  'domestic-worker-complaints-disputes': {
    src: '/images/blogs/how-do-domestic-worker-complaints-and-recruitment-agency-disputes-proceed.webp',
    cacheVersion: "0c62ff4db942",
    alt: {
      en: "A woman in a pink INAYA uniform speaks with two men around a table in a glass-partitioned office.",
      ar: "امرأة بزي عناية الوردي تتحدث مع رجلين حول طاولة داخل مكتب ذي فواصل زجاجية."
    }
  }
};

// These new guides reuse relevant owner-approved illustrations with their exact
// original descriptions and frames; the existing 111 source assets stay intact.
const newArticleImageAliases: Record<string, string> = {
  'uae-domestic-worker-rights-employer-duties': 'domestic-worker-contracts-renewal',
  'domestic-worker-centre-reviews-checklist': 'maid-agency-ajman-quote-comparison-workbook',
  'domestic-workers-meaning-roles-uae': 'domestic-workers-ajman-household-role-design-canvas',
  'choosing-domestic-worker-centre-across-emirates': 'maid-agency-sharjah-ajman-office-logistics',
  'inaya-office-staff-careers-ajman': 'domestic-worker-contracts-renewal',
};

export function getBlogImage(slug: string): BlogImage | undefined {
  const imageSlug = newArticleImageAliases[slug] ?? slug;
  return keywordArticleImages[imageSlug] ?? blogImages[imageSlug];
}
