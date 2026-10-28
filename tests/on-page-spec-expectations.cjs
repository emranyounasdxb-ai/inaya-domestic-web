const assert = require('node:assert/strict');

// Fixed reviewed release expectations. Before values came from the independent
// 28 October production crawl of main5b62244; after values were reviewed against
// the PDF and verified business facts. Tests do not import production selectors.
const metadata = {
  "en/": {
    "before": {
      "title": "Maid & Domestic Worker Services in UAE | INAYA",
      "description": "INAYA maid services: 4 hours AED 120, 8 hours AED 200, 7 days AED 1,120 or 30 days AED 3,500. Live-in and live-out at the same package price."
    },
    "after": {
      "title": "Maid Agency in Ajman & UAE | Housemaids & Nannies | INAYA",
      "description": "INAYA maid services in Ajman & UAE. 4 hours AED 120; AED 3,000/month with a 12-month commitment. Call 06 740 0128; WhatsApp 050 203 6767."
    }
  },
  "ar/": {
    "before": {
      "title": "خدمات الخادمات والعمالة المنزلية في الإمارات | عناية",
      "description": "خدمات عناية: 4 ساعات بـ120 درهماً، 8 ساعات بـ200، 7 أيام بـ1,120 أو 30 يوماً بـ3,500. الإقامة وعدم الإقامة بالسعر نفسه للباقة."
    },
    "after": {
      "title": "خادمات ومربيات في عجمان والإمارات | عناية",
      "description": "خدمات عناية للخادمات في عجمان والإمارات. 4 ساعات بـ120 درهماً، أو 3,000 درهم شهرياً بالتزام 12 شهراً. اتصل 06 740 0128 أو واتساب 050 203 6767."
    }
  },
  "en/about": {
    "before": {
      "title": "About INAYA Domestic Workers",
      "description": "Learn about INAYA Domestic Workers, its household service approach, consultation process and support for families across the UAE."
    },
    "after": {
      "title": "About INAYA | Domestic Worker Centre, Grand Mall Ajman",
      "description": "Meet INAYA’s MOHRE-listed domestic worker services centre at Grand Mall, Ajman. Facility No. 2637187. Maid, nanny and domestic-worker typing support."
    }
  },
  "ar/about": {
    "before": {
      "title": "عن عناية للعمالة المنزلية",
      "description": "تعرف على عناية للعمالة المنزلية ونهجها في الخدمات المنزلية والاستشارة ودعم الأسر في جميع أنحاء الإمارات."
    },
    "after": {
      "title": "عن عناية | مركز العمالة المنزلية في جراند مول عجمان",
      "description": "تعرف على مركز عناية لخدمات العمالة المنزلية المدرج لدى الوزارة في جراند مول عجمان، رقم المنشأة 2637187. خادمات ومربيات وطباعة معاملات العمالة المنزلية."
    }
  },
  "en/contact": {
    "before": {
      "title": "Contact INAYA Domestic Workers",
      "description": "Contact INAYA by phone, WhatsApp or email to discuss household services across the UAE, or arrange a visit to the Grand Mall office in Ajman."
    },
    "after": {
      "title": "Contact INAYA | Grand Mall Ajman | 06 740 0128",
      "description": "Visit INAYA at Grand Mall, Ground Floor, Al Rashidiya 3, Ajman. Sat–Thu 9am–9pm; Friday closed. Call 06 740 0128 or WhatsApp 050 203 6767."
    }
  },
  "ar/contact": {
    "before": {
      "title": "اتصل بعناية للعمالة المنزلية",
      "description": "تواصل مع عناية عبر الهاتف أو واتساب أو البريد لمناقشة الخدمات المنزلية في الإمارات أو ترتيب زيارة المكتب في جراند مول بعجمان."
    },
    "after": {
      "title": "تواصل مع عناية | جراند مول عجمان | 06 740 0128",
      "description": "زر عناية في جراند مول، الطابق الأرضي، الراشدية 3، عجمان. السبت–الخميس 9 صباحاً–9 مساءً؛ الجمعة مغلق. اتصل 06 740 0128 أو واتساب 050 203 6767."
    }
  },
  "en/services/housemaid": {
    "before": {
      "title": "Housemaid Services in UAE | INAYA",
      "description": "Discuss housemaid support in the UAE with INAYA for cleaning, laundry and daily home tasks. Confirm the duties and arrangement for your household."
    },
    "after": {
      "title": "Housemaid Services in Ajman & UAE | Live-in/Out | INAYA",
      "description": "Housemaid support in Ajman and across the UAE for cleaning, laundry and home routines. Live-in or live-out options. WhatsApp 050 203 6767."
    }
  },
  "ar/services/housemaid": {
    "before": {
      "title": "خدمات عاملات المنازل في الإمارات | عناية",
      "description": "خدمات عاملات المنازل في الإمارات من عناية مع استشارة واضحة، تنسيق موثوق، دعم مستندات ومتابعة منظمة للأسر في دبي وعجمان والشارقة وأبوظبي."
    },
    "after": {
      "title": "خدمات خادمات في عجمان والإمارات | مقيمة وغير مقيمة | عناية",
      "description": "دعم الخادمات للتنظيف والغسيل وروتين المنزل في عجمان وجميع الإمارات. خيارات مقيمة وغير مقيمة حسب احتياج الأسرة. واتساب 050 203 6767."
    }
  },
  "en/services/nanny": {
    "before": {
      "title": "Nanny Services in UAE for Childcare and Family Routines | INAYA",
      "description": "Discuss nanny services in the UAE with INAYA. Share your child’s age, routine and care needs, and review relevant individual experience."
    },
    "after": {
      "title": "Nanny Services in Ajman & UAE | Childcare Support | INAYA",
      "description": "Nanny and childcare support in Ajman and across the UAE. Match your child’s routine with individual experience. WhatsApp 050 203 6767."
    }
  },
  "ar/services/nanny": {
    "before": {
      "title": "خدمات المربيات في الإمارات لرعاية الأطفال وروتين الأسرة | عناية",
      "description": "احصل على خدمات مربيات في الإمارات مع عناية. إرشاد واضح لرعاية الأطفال والروتين اليومي والأنشطة والدوام المدرسي ومطابقة الأسرة."
    },
    "after": {
      "title": "خدمات مربيات في عجمان والإمارات | دعم رعاية الأطفال | عناية",
      "description": "دعم المربيات ورعاية الأطفال في عجمان وجميع الإمارات. حدد روتين طفلك واحتياجات الأسرة وراجع خبرة كل مرشحة. واتساب 050 203 6767."
    }
  },
  "en/services/part-time-maid": {
    "before": {
      "title": "Part-time Maid Services in UAE for Flexible Home Cleaning | INAYA",
      "description": "INAYA part-time maid visits in the UAE: 4 hours for AED 120 or 8 hours for AED 200. Confirm duties, timing, availability and written terms."
    },
    "after": {
      "title": "Part-Time Maid Ajman | 4 Hours AED 120 | INAYA",
      "description": "Part-time maid visits in Ajman and UAE: 4 hours AED 120 or 8 hours AED 200. Confirm tasks and availability. WhatsApp 050 203 6767."
    }
  },
  "ar/services/part-time-maid": {
    "before": {
      "title": "خدمات خادمة بدوام جزئي في الإمارات لتنظيف مرن | عناية",
      "description": "خدمات خادمة بدوام جزئي في الإمارات مع عناية. تنظيف وغسيل ومطبخ ودعم منزلي مرن حسب الجدول في دبي وعجمان والشارقة وباقي الإمارات."
    },
    "after": {
      "title": "خادمة بالساعة في عجمان | 4 ساعات بـ120 درهماً | عناية",
      "description": "زيارات خادمة بالساعة في عجمان والإمارات: 4 ساعات بـ120 درهماً أو 8 ساعات بـ200. أكد المهام والتوفر مع الفريق. واتساب 050 203 6767."
    }
  },
  "en/services/maid-visa": {
    "before": {
      "title": "Domestic Worker Visa Typing and Processing in Ajman | INAYA",
      "description": "INAYA domestic-worker visa typing in Ajman: applications, renewal, cancellation, status and contract-related processing. Confirm case requirements, scope and fees."
    },
    "after": {
      "title": "Maid Visa Typing in Ajman | Renewal & Cancellation | INAYA",
      "description": "Domestic-worker visa typing, renewal and cancellation support at INAYA, Grand Mall Ajman. Authority decisions apply. Call 06 740 0128."
    }
  },
  "ar/services/maid-visa": {
    "before": {
      "title": "طباعة وإجراءات تأشيرة العمالة المنزلية في عجمان | عناية",
      "description": "طباعة وإجراءات تأشيرة العمالة المنزلية في عجمان مع عناية: تقديم وتجديد وإلغاء وتعديل وضع ومعاملات العقد. أكد النطاق والرسوم لحالتك."
    },
    "after": {
      "title": "طباعة تأشيرة خادمة في عجمان | التجديد والإلغاء | عناية",
      "description": "دعم طباعة معاملات تأشيرة العمالة المنزلية والتجديد والإلغاء في عناية، جراند مول عجمان. القرارات للجهات المختصة. اتصل 06 740 0128."
    }
  },
  "en/services/executive-nannies": {
    "before": {
      "title": "Executive Nannies in UAE | INAYA",
      "description": "Explore executive nanny enquiries with INAYA in the UAE. Discuss childcare priorities, household coordination and individual experience."
    },
    "after": {
      "title": "Executive Nanny Services in Ajman & UAE | INAYA",
      "description": "Plan childcare routines and household coordination with INAYA’s executive nanny service in Ajman and UAE. Review individual experience. Call 06 740 0128."
    }
  },
  "ar/services/executive-nannies": {
    "before": {
      "title": "مربيات تنفيذيات في الإمارات | عناية",
      "description": "مربيات تنفيذيات في الإمارات من عناية مع استشارة واضحة، تنسيق موثوق، دعم مستندات ومتابعة منظمة للأسر في دبي وعجمان والشارقة وأبوظبي."
    },
    "after": {
      "title": "خدمات مربيات تنفيذيات في عجمان والإمارات | عناية",
      "description": "خطط لروتين رعاية الأطفال وتنسيق المنزل مع خدمة المربيات التنفيذيات من عناية في عجمان والإمارات. راجع الخبرة الفردية. اتصل 06 740 0128."
    }
  },
  "en/services": {
    "before": {
      "title": "Domestic Worker Services in UAE | INAYA",
      "description": "Compare INAYA maid, childcare, cooking, household management, care and administrative support services. Contact the team to discuss your requirements."
    },
    "after": {
      "title": "Domestic Worker Services in UAE | INAYA",
      "description": "Find maid, nanny, cooking and domestic-worker typing services with INAYA in Ajman & UAE. 4-hour visits AED 120. WhatsApp 050 203 6767."
    }
  },
  "ar/services": {
    "before": {
      "title": "خدمات العمالة المنزلية في الإمارات | عناية",
      "description": "قارن خدمات عناية للخادمات ورعاية الأطفال والطبخ وإدارة المنزل ودعم الرعاية والإجراءات. تواصل مع الفريق لمناقشة متطلباتك."
    },
    "after": {
      "title": "خدمات العمالة المنزلية في الإمارات | عناية",
      "description": "اختر خدمات الخادمات والمربيات والطبخ وطباعة معاملات العمالة المنزلية مع عناية في عجمان والإمارات. 4 ساعات بـ120 درهماً. واتساب 050 203 6767."
    }
  },
  "en/service-areas": {
    "before": {
      "title": "Domestic Service Areas in UAE | INAYA",
      "description": "Explore INAYA service guides for Ajman, Dubai, Sharjah, Abu Dhabi, Ras Al Khaimah, Fujairah and Umm Al Quwain, and discuss availability in your area."
    },
    "after": {
      "title": "Domestic Service Areas in UAE | INAYA",
      "description": "Explore INAYA maid and nanny service guides for Ajman and all seven emirates. Confirm local availability. Call 06 740 0128; WhatsApp 050 203 6767."
    }
  },
  "ar/service-areas": {
    "before": {
      "title": "مناطق الخدمات المنزلية في الإمارات | عناية",
      "description": "استكشف أدلة خدمات عناية لعجمان ودبي والشارقة وأبوظبي ورأس الخيمة والفجيرة وأم القيوين وناقش التوفر في منطقتك."
    },
    "after": {
      "title": "مناطق الخدمات المنزلية في الإمارات | عناية",
      "description": "استكشف أدلة خدمات عناية للخادمات والمربيات في عجمان والإمارات السبع. أكد التوفر في منطقتك. اتصل 06 740 0128 أو واتساب 050 203 6767."
    }
  }
};

const roleImageAlts = {
  "en/services/executive-nannies": {
    "imagePath": "/images/services/executive-nannies.webp",
    "before": "Household service: Executive Nannies",
    "after": "Nanny helping a child pack a school bag at a table"
  },
  "ar/services/executive-nannies": {
    "imagePath": "/images/services/executive-nannies.webp",
    "before": "خدمة مربيات تنفيذيات",
    "after": "مربية تساعد طفلة على تجهيز حقيبتها المدرسية عند الطاولة"
  },
  "en/services/private-chefs": {
    "imagePath": "/images/services/private-chefs.webp",
    "before": "Household service: Private Chefs",
    "after": "Household cook serving chicken and vegetables in a home kitchen"
  },
  "ar/services/private-chefs": {
    "imagePath": "/images/services/private-chefs.webp",
    "before": "خدمة طهاة خاصون",
    "after": "طاهية منزلية تقدم الدجاج والخضروات في مطبخ المنزل"
  },
  "en/services/house-managers": {
    "imagePath": "/images/services/house-managers.webp",
    "before": "Household service: House Managers",
    "after": "Household supervisor coordinating cleaning tasks with a colleague in a living room"
  },
  "ar/services/house-managers": {
    "imagePath": "/images/services/house-managers.webp",
    "before": "خدمة مديرو المنازل",
    "after": "مشرفة منزلية تنسق مهام التنظيف مع زميلة في غرفة المعيشة"
  }
};

const headings = {
  "en/services/housemaid": "Housemaid Services in Ajman & Across the UAE",
  "ar/services/housemaid": "خدمات الخادمات في عجمان وجميع أنحاء الإمارات",
  "en/services/nanny": "Nanny Services in Ajman & UAE",
  "ar/services/nanny": "خدمات المربيات في عجمان والإمارات",
  "en/services/part-time-maid": "Part-Time Maid Services in Ajman & UAE",
  "ar/services/part-time-maid": "خدمات الخادمات بالساعة في عجمان والإمارات",
  "en/services/maid-visa": "Domestic-Worker Visa Typing in Ajman",
  "ar/services/maid-visa": "طباعة معاملات تأشيرة العمالة المنزلية في عجمان"
};

const homeFaqAnswers = {
  "en": [
    "Half-day: AED 120 for 4 hours. Daily: AED 200 for 8 hours. Weekly: AED 1,120 for 7 days. Monthly: AED 3,500 for 30 days. A 6-month commitment is AED 3,250 per month; a 12-month commitment is AED 3,000 per month. These published package prices are the same for live-in and live-out arrangements.",
    "Domestic-worker applications, renewal, cancellation, status and contract-related requests, with Emirates ID, medical coordination and insurance processing as applicable. Confirm the requirements, fees and scope for the case; decisions remain with the responsible authority.",
    "The managed monthly agreement includes review and administration of eligible replacement requests. Eligibility is assessed against the agreed duties, applicable employment arrangement and relevant legal obligations. Matching coordination and follow-up follow the agreed service plan.",
    "Start with the household role, duties, location and preferred timing. INAYA reviews availability and individual suitability, provides the written scope and quote, and confirms the selected candidate and start arrangements. Service starts after selection, required lawful authorisation and written confirmation. Review the individual profile against agreed duties and communication needs, rather than nationality-based assumptions.",
    "Live-in and live-out arrangements have the same published package price. Record accommodation, meals, transport, cleaning products and equipment responsibilities in the written agreement. The half-day package covers 4 hours and the daily package 8 hours; agree the schedule, duties and rest for weekly, monthly and longer commitments. A 7-day or 30-day package describes the service period, not continuous work.",
    "INAYA is listed in MOHRE’s Approved Services Centres directory for Ajman under Facility No. 2637187. Use the official MOHRE record linked on this page to check the listing."
  ],
  "ar": [
    "نصف يوم: 120 درهماً مقابل 4 ساعات. يومي: 200 درهم مقابل 8 ساعات. أسبوعي: 1,120 درهماً لمدة 7 أيام. شهري: 3,500 درهم لمدة 30 يوماً. الالتزام لمدة 6 أشهر بسعر 3,250 درهماً شهرياً؛ والالتزام لمدة 12 شهراً بسعر 3,000 درهم شهرياً. أسعار الباقات المنشورة واحدة للخدمة المقيمة وغير المقيمة.",
    "طلبات العمالة المنزلية والتجديد والإلغاء وتعديل الوضع ومعاملات العقد، مع إجراءات الهوية وتنسيق الفحص الطبي والتأمين بحسب الحالة. أكد المتطلبات والرسوم والنطاق المناسب للحالة؛ ويبقى القرار للجهة المختصة.",
    "يشمل اتفاق الخدمة الشهرية المدارة مراجعة طلبات الاستبدال المؤهلة وإدارة إجراءاتها. تقيم الأهلية وفق المهام المتفق عليها وترتيب التوظيف المنطبق والالتزامات القانونية ذات الصلة. يتبع تنسيق المطابقة والمتابعة خطة الخدمة المتفق عليها.",
    "ابدأ بتحديد الدور المنزلي والمهام والموقع والتوقيت المفضل. تراجع عناية التوفر والملاءمة الفردية، وتقدم النطاق والعرض المكتوبين، ثم تؤكد المرشحة المختارة وترتيبات البدء. تبدأ الخدمة بعد الاختيار والحصول على التصاريح النظامية المطلوبة والتأكيد المكتوب. راجع الملف الفردي وفق المهام المتفق عليها واحتياجات التواصل، دون افتراضات مبنية على الجنسية.",
    "سعر الباقة المنشور واحد للخدمة المقيمة وغير المقيمة. تسجل مسؤوليات السكن والطعام والنقل ومواد التنظيف والمعدات في الاتفاق المكتوب. تغطي باقة نصف اليوم 4 ساعات والباقة اليومية 8 ساعات؛ ويتفق على الجدول والمهام والراحة للباقات الأسبوعية والشهرية والالتزامات الأطول. تصف باقة 7 أيام أو 30 يوماً فترة الخدمة، ولا تعني العمل المتواصل.",
    "عناية مدرجة في دليل مراكز الخدمات المعتمدة لدى وزارة الموارد البشرية والتوطين في عجمان برقم المنشأة 2637187. استخدم رابط السجل الرسمي لدى الوزارة الوارد في هذه الصفحة للتحقق من الإدراج."
  ]
};

const onPageUpdatedRoutes = ['', 'about', 'contact', 'maid-services-ajman', 'company-information', 'blog', 'services/housemaid', 'services/nanny', 'services/maid-visa', 'services/part-time-maid'];
const archiveRoutes = [2,3,4,5,6].map(page => `blog/page/${page}`);
// Reviewed shared entity facts and archive navigation copy are classified only
// at these18 exact main-content placements; they are not editorial articles.
const onPageUiCopy = {
  identity: {
    en: 'MOHRE-listed domestic worker services centre — Facility No. 2637187. Official MOHRE record',
    ar: 'مركز خدمات عمالة منزلية مدرج لدى وزارة الموارد البشرية والتوطين — رقم المنشأة 2637187. السجل الرسمي لدى الوزارة'
  },
  archive: {
    en: 'Continue browsing practical guides to hiring, package pricing and documents for UAE households.',
    ar: 'تابع تصفح الأدلة العملية حول الاستقدام والأسعار والمستندات للأسر في الإمارات.'
  }
};
const sharedOnPageUiPlacements = Object.entries(onPageUiCopy).flatMap(([kind, copy]) =>
  (kind === 'identity' ? ['', 'about', 'contact', 'company-information'] : archiveRoutes)
    .flatMap(route => ['en', 'ar'].map(locale => ({ kind, route, locale, text: copy[locale] }))));
const sharedOnPageUiCounts = { paragraphs: 18, tokens: 236 };
const originalCanonicalCount = 274;
const titleUpdatedRoutes = ['', 'about', 'contact', 'services/housemaid', 'services/nanny', 'services/part-time-maid', 'services/maid-visa', 'services/executive-nannies'];
const descriptionOnlyRoutes = ['services', 'service-areas'];
const canonicalCount = 284;

function replaceOnce(source, before, after, label) {
  assert.equal(source.split(before).length, 2, label + ': exactly one reviewed source anchor');
  return source.replace(before, after);
}

function approvedOnPageSource(file, source) {
  if (file === 'next.config.js') {
    source = replaceOnce(source, "  experimental: { inlineCss: process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true' },", '  experimental: { inlineCss: false },', file + ': cached external CSS');
    source = replaceOnce(source, "      { protocol: 'https', hostname: 'images.unsplash.com' },\n      { protocol: 'https', hostname: 'flagcdn.com' }", "      { protocol: 'https', hostname: 'images.unsplash.com' }", file + ': public-domain local flags');
  }
  if (file === 'components/Footer.tsx') {
    source = replaceOnce(source, "import { siteConfig } from '@/lib/site-config';\n", "import { siteConfig } from '@/lib/site-config';\nimport BusinessIdentityLine from './BusinessIdentityLine';\n", file + ': facility import');
  }
  return source;
}

module.exports = { metadata, roleImageAlts, headings, homeFaqAnswers, sharedOnPageUiPlacements, sharedOnPageUiCounts, titleUpdatedRoutes, descriptionOnlyRoutes, onPageUpdatedRoutes, archiveRoutes, originalCanonicalCount, canonicalCount, approvedOnPageSource };
