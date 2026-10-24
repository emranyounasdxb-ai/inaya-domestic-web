export type ArticleVisualData = {
  kind: 'bars' | 'steps';
  title: string;
  caption: string;
  items: { label: string; detail: string; value?: number }[];
  unit?: string;
};

export type BilingualArticleVisual = Record<'en' | 'ar', ArticleVisualData>;

// Article visuals are editorial content, kept separate from the manuscripts.
export const customerArticleVisuals: Record<string, BilingualArticleVisual> = {
  "four-hour-eight-hour-maid-visit-plan": {
    "en": {
      "kind": "bars",
      "title": "Published visit-package prices",
      "caption": "INAYA’s approved package prices: AED 120 for four hours and AED 200 for eight hours. These are visit prices, not a separate hourly tariff.",
      "unit": "AED",
      "items": [
        {
          "label": "Four-hour half-day visit",
          "detail": "4-hour service period",
          "value": 120
        },
        {
          "label": "Eight-hour daily visit",
          "detail": "8-hour service period",
          "value": 200
        }
      ]
    },
    "ar": {
      "kind": "bars",
      "title": "أسعار باقات الزيارة المنشورة",
      "caption": "أسعار باقات عناية المعتمدة: 120 درهماً لأربع ساعات و200 درهم لثماني ساعات. هذه أسعار زيارات وليست تسعيرة مستقلة للساعة.",
      "unit": "درهم",
      "items": [
        {
          "label": "زيارة نصف يوم",
          "detail": "فترة خدمة أربع ساعات",
          "value": 120
        },
        {
          "label": "زيارة يومية",
          "detail": "فترة خدمة ثماني ساعات",
          "value": 200
        }
      ]
    }
  },
  "maid-visit-frequency-planner": {
    "en": {
      "kind": "steps",
      "title": "A practical frequency decision",
      "caption": "Original household-planning workflow: review actual work rather than adopting a universal visit count.",
      "items": [
        {
          "label": "Record the workload",
          "detail": "List the tasks that accumulate in a normal week."
        },
        {
          "label": "Separate timed duties",
          "detail": "Identify work tied to daily supervision or a particular day."
        },
        {
          "label": "Choose a visit pattern",
          "detail": "Discuss frequency and duration together with the coordinator."
        },
        {
          "label": "Review the result",
          "detail": "Use completed and carried-forward tasks to improve the next plan."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "خطوات عملية لاختيار تكرار الزيارات",
      "caption": "مسار أصلي لتخطيط أعمال الأسرة، يقوم على العمل الفعلي بدلاً من افتراض عدد موحد من الزيارات.",
      "items": [
        {
          "label": "سجل حجم العمل",
          "detail": "اكتب المهام التي تتراكم خلال أسبوع اعتيادي."
        },
        {
          "label": "ميز المهام المرتبطة بوقت",
          "detail": "حدد ما يحتاج إلى إشراف يومي أو موعد معين."
        },
        {
          "label": "اختر نمط الزيارات",
          "detail": "ناقش التكرار والمدة معاً مع المنسق."
        },
        {
          "label": "راجع النتيجة",
          "detail": "استفد من سجل المنجز والمؤجل لتحسين الخطة التالية."
        }
      ]
    }
  },
  "apartment-villa-maid-task-plan": {
    "en": {
      "kind": "steps",
      "title": "From floor plan to useful task plan",
      "caption": "Original planning workflow for apartments and villas. No room-to-hours or staffing ratio is implied.",
      "items": [
        {
          "label": "Map occupied zones",
          "detail": "List rooms in use, floors and restricted spaces."
        },
        {
          "label": "Choose the essentials",
          "detail": "Put everyday priorities before rotating details."
        },
        {
          "label": "Prepare access and tools",
          "detail": "Explain routes, surfaces and equipment."
        },
        {
          "label": "Record the handover",
          "detail": "Track finished zones and the next useful action."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "من توزيع المنزل إلى خطة عمل مفيدة",
      "caption": "مسار أصلي لتنظيم العمل في الشقق والفلل، دون افتراض نسبة ثابتة بين الغرف والساعات أو عدد العاملات.",
      "items": [
        {
          "label": "حدد المناطق المشغولة",
          "detail": "سجل الغرف والطوابق والأماكن المقيدة."
        },
        {
          "label": "اختر الأولويات",
          "detail": "قدم الاحتياجات الأساسية على التفاصيل الدورية."
        },
        {
          "label": "جهز الدخول والأدوات",
          "detail": "وضح المسارات والأسطح وتشغيل المعدات."
        },
        {
          "label": "سجل التسليم",
          "detail": "تابع المناطق المنجزة والخطوة المفيدة التالية."
        }
      ]
    }
  },
  "regular-maid-service-deep-move-in-cleaning": {
    "en": {
      "kind": "steps",
      "title": "Choose the service from the actual job",
      "caption": "Original scope-selection workflow. Specialist work needs its own assessment and written scope.",
      "items": [
        {
          "label": "Describe condition",
          "detail": "Occupied, empty, moving or affected by other work."
        },
        {
          "label": "Name the tasks",
          "detail": "List surfaces, priorities and access requirements."
        },
        {
          "label": "Separate specialist work",
          "detail": "Identify repairs, high access and specialist equipment."
        },
        {
          "label": "Agree the scope",
          "detail": "Record tasks, responsibilities, price and handover."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "اختر الخدمة انطلاقاً من العمل الفعلي",
      "caption": "خطوات أصلية لاختيار نطاق الخدمة. يحتاج العمل التخصصي إلى تقييمه ونطاقه المكتوب المستقل.",
      "items": [
        {
          "label": "صف حالة العقار",
          "detail": "مشغول أو فارغ أو عند الانتقال أو بعد أعمال أخرى."
        },
        {
          "label": "سم المهام",
          "detail": "حدد الأسطح والأولويات ومتطلبات الدخول."
        },
        {
          "label": "افصل العمل التخصصي",
          "detail": "وضح الإصلاحات والارتفاعات والمعدات الخاصة."
        },
        {
          "label": "اتفق على النطاق",
          "detail": "سجل المهام والمسؤوليات والسعر والتسليم."
        }
      ]
    }
  },
  "prepare-cleaning-supplies-maid-visit": {
    "en": {
      "kind": "steps",
      "title": "Prepare, explain, use and record",
      "caption": "Original preparation workflow. Product directions and the written service scope guide the selected tasks.",
      "items": [
        {
          "label": "Match tools to tasks",
          "detail": "List the products and equipment for the agreed work."
        },
        {
          "label": "Check condition and labels",
          "detail": "Prepare working items and readable care directions."
        },
        {
          "label": "Explain access and use",
          "detail": "Show storage, surfaces and unfamiliar controls."
        },
        {
          "label": "Record what changes",
          "detail": "Note shortages, faults and the next preparation needs."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "جهز واشرح واستخدم وسجل",
      "caption": "خطوات أصلية لتجهيز الزيارة، تستند المهام المختارة فيها إلى تعليمات المنتجات ونطاق الخدمة المكتوب.",
      "items": [
        {
          "label": "اربط الأدوات بالمهام",
          "detail": "حدد المنتجات والمعدات للعمل المتفق عليه."
        },
        {
          "label": "راجع الصلاحية والملصقات",
          "detail": "جهز أدوات صالحة وتعليمات عناية مقروءة."
        },
        {
          "label": "اشرح الدخول والتشغيل",
          "detail": "وضح التخزين والأسطح وأجهزة التشغيل غير المألوفة."
        },
        {
          "label": "سجل التغييرات",
          "detail": "دون النواقص والأعطال وتجهيزات الزيارة التالية."
        }
      ]
    }
  },
  "maid-laundry-ironing-task-checklist": {
    "en": {
      "kind": "steps",
      "title": "A clear laundry handover",
      "caption": "Original INAYA planning workflow: use the garment label and your appliance instructions at each stage.",
      "items": [
        {
          "label": "Prioritise",
          "detail": "List the garments and the time-sensitive items."
        },
        {
          "label": "Check",
          "detail": "Review labels, condition, products and equipment."
        },
        {
          "label": "Process",
          "detail": "Follow the agreed wash, dry or ironing sequence."
        },
        {
          "label": "Handover",
          "detail": "Record ready, drying and owner-decision items."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "تسليم واضح للغسيل والكي",
      "caption": "تسلسل أصلي من عناية لتنظيم العمل؛ يرجع في كل مرحلة إلى ملصق القطعة ودليل الجهاز.",
      "items": [
        {
          "label": "حدد الأولوية",
          "detail": "اكتب أنواع الملابس والقطع المطلوبة في موعد محدد."
        },
        {
          "label": "راجع التعليمات",
          "detail": "افحص الملصقات والحالة والمواد والأجهزة."
        },
        {
          "label": "نفذ التسلسل",
          "detail": "اتبع خطوات الغسيل أو التجفيف أو الكي المتفق عليها."
        },
        {
          "label": "سلم النتيجة",
          "detail": "ميز الجاهز عما يجف وما ينتظر قرار صاحبه."
        }
      ]
    }
  },
  "home-cooking-weekly-meal-prep-plan": {
    "en": {
      "kind": "steps",
      "title": "From weekly menu to clear food handover",
      "caption": "Original household planning sequence; food handling and storage follow dish-specific authoritative guidance.",
      "items": [
        {
          "label": "Brief",
          "detail": "Choose dishes, portions and household requirements."
        },
        {
          "label": "Prepare",
          "detail": "Assign shopping, equipment and cooking tasks."
        },
        {
          "label": "Organise",
          "detail": "Plan the meal schedule and appropriate storage."
        },
        {
          "label": "Review",
          "detail": "Record prepared food, kitchen reset and next changes."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "من قائمة الأسبوع إلى تسليم الطعام",
      "caption": "تسلسل أصلي لتنظيم المنزل؛ تتبع مناولة الطعام وتخزينه الإرشادات المناسبة لكل طبق.",
      "items": [
        {
          "label": "حدد المطلوب",
          "detail": "اختر الأطباق والحصص واحتياجات الأسرة."
        },
        {
          "label": "جهز العمل",
          "detail": "وزع المشتريات والأجهزة ومهام الطهي."
        },
        {
          "label": "نظم التسليم",
          "detail": "رتب مواعيد الوجبات والتخزين المناسب."
        },
        {
          "label": "راجع النتيجة",
          "detail": "سجل الطعام الجاهز وترتيب المطبخ والتعديلات التالية."
        }
      ]
    }
  },
  "new-maid-first-week-checklist": {
    "en": {
      "kind": "steps",
      "title": "The orientation loop",
      "caption": "Original practical example to use within agreed working days and rest arrangements.",
      "items": [
        {
          "label": "Explain",
          "detail": "Share the role, household routine and named contact."
        },
        {
          "label": "Demonstrate",
          "detail": "Show the equipment, method and expected result."
        },
        {
          "label": "Practise",
          "detail": "Check understanding and resolve conflicting priorities."
        },
        {
          "label": "Review",
          "detail": "Record feedback and adjust the next agreed routine."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "دورة التعريف بالمنزل",
      "caption": "نموذج عملي أصلي يطبق ضمن أيام العمل وترتيبات الراحة المتفق عليها.",
      "items": [
        {
          "label": "اشرح",
          "detail": "وضح الدور وروتين المنزل والشخص المسؤول."
        },
        {
          "label": "اعرض عملياً",
          "detail": "قدم الأجهزة والطريقة والنتيجة المطلوبة."
        },
        {
          "label": "طبق وراجع",
          "detail": "تحقق من الفهم واحسم تعارض الأولويات."
        },
        {
          "label": "عدل الروتين",
          "detail": "سجل الملاحظات وخطة العمل التالية المتفق عليها."
        }
      ]
    }
  },
  "nanny-school-routine-child-handover": {
    "en": {
      "kind": "steps",
      "title": "One chain of responsibility across the school day",
      "caption": "Original planning workflow; collection and transport use the actual school’s applicable procedures.",
      "items": [
        {
          "label": "Authorise",
          "detail": "Register the responsible adult through the school."
        },
        {
          "label": "Prepare",
          "detail": "Check the dated routine, bag and travel arrangement."
        },
        {
          "label": "Handover",
          "detail": "Follow the agreed school and home release process."
        },
        {
          "label": "Update",
          "detail": "Tell the parent what changed and what comes next."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "تسلسل واضح للمسؤولية خلال يوم المدرسة",
      "caption": "خطة أصلية للتنظيم؛ يتبع الاستلام والنقل إجراءات المدرسة الفعلية المنطبقة.",
      "items": [
        {
          "label": "اعتمد المسؤول",
          "detail": "سجل الشخص المخول وفق إجراء المدرسة."
        },
        {
          "label": "جهز اليوم",
          "detail": "راجع الروتين المؤرخ والحقيبة وترتيب النقل."
        },
        {
          "label": "سلم المسؤولية",
          "detail": "اتبع إجراء تسليم الطفل في المدرسة والمنزل."
        },
        {
          "label": "حدث الوالدين",
          "detail": "انقل التغييرات وما يحتاج إلى متابعة لاحقة."
        }
      ]
    }
  },
  "maid-household-with-pets": {
    "en": {
      "kind": "steps",
      "title": "A pet-aware household brief",
      "caption": "Original scope-planning sequence for the owner, worker and service discussion.",
      "items": [
        {
          "label": "Describe",
          "detail": "Explain the animals, home setup and requested duties."
        },
        {
          "label": "Match",
          "detail": "Discuss relevant experience and comfort with the role."
        },
        {
          "label": "Introduce",
          "detail": "Owner demonstrates access and the agreed routine."
        },
        {
          "label": "Handover",
          "detail": "Record completed tasks, concerns and the next responsible person."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "وصف منزلي يراعي الحيوانات الأليفة",
      "caption": "تسلسل أصلي لتحديد النطاق بين المالك والعاملة وعند مناقشة الخدمة.",
      "items": [
        {
          "label": "صف الاحتياج",
          "detail": "وضح الحيوانات وبيئة المنزل والمهام المطلوبة."
        },
        {
          "label": "ناقش الملاءمة",
          "detail": "راجع الخبرة والراحة تجاه الدور المقترح."
        },
        {
          "label": "قدم التعارف",
          "detail": "يعرض المالك الدخول والروتين المتفق عليه."
        },
        {
          "label": "سلم المسؤولية",
          "detail": "سجل الأعمال والملاحظات والمسؤول التالي."
        }
      ]
    }
  },
  "maid-home-access-keys-privacy": {
    "en": {
      "kind": "steps",
      "title": "A clear home-access handover",
      "caption": "An original household planning sequence, to adapt to the agreed service and building procedure.",
      "items": [
        {
          "label": "Define",
          "detail": "Name the work areas, restrictions and arrival contact."
        },
        {
          "label": "Record",
          "detail": "Log the key, card or limited access arrangement privately."
        },
        {
          "label": "Handover",
          "detail": "Review access changes at arrival and departure."
        },
        {
          "label": "Close",
          "detail": "Check returns and review permissions when the assignment ends."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "تسليم واضح لصلاحية دخول المنزل",
      "caption": "تسلسل تنظيمي من إعداد عناية يكيف مع نطاق الخدمة وإجراءات المبنى.",
      "items": [
        {
          "label": "حدد",
          "detail": "أماكن العمل وحدود الدخول ومسؤول الاستقبال."
        },
        {
          "label": "سجل",
          "detail": "المفتاح أو البطاقة أو صلاحية الدخول المحدودة بصورة خاصة."
        },
        {
          "label": "راجع",
          "detail": "تغييرات الدخول عند الوصول والمغادرة."
        },
        {
          "label": "أغلق",
          "detail": "سجل الإعادة وراجع الصلاحيات عند انتهاء المهمة."
        }
      ]
    }
  },
  "maid-help-family-guests-gathering": {
    "en": {
      "kind": "steps",
      "title": "Plan around the gathering, not a vague cleaning request",
      "caption": "An original planning flow for a private family gathering; it does not represent a fixed completion-time promise.",
      "items": [
        {
          "label": "Map",
          "detail": "Separate before, during and after-event duties."
        },
        {
          "label": "Prioritise",
          "detail": "Choose the rooms and tasks that matter first."
        },
        {
          "label": "Arrange",
          "detail": "Record the role, visit period, products and access."
        },
        {
          "label": "Handover",
          "detail": "Review completed work and the remaining reset."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "خطط حول التجمع بدلاً من طلب تنظيف عام",
      "caption": "مسار تنظيمي من إعداد عناية لتجمع عائلي خاص، ولا يمثل وعداً بمدة إنجاز ثابتة.",
      "items": [
        {
          "label": "قسم",
          "detail": "افصل مهام ما قبل التجمع وأثناءه وبعده."
        },
        {
          "label": "رتب",
          "detail": "اختر الغرف والمهام الأهم أولاً."
        },
        {
          "label": "اتفق",
          "detail": "سجل الدور والمدة والمنتجات وطريقة الدخول."
        },
        {
          "label": "سلم",
          "detail": "راجع المنجز وما تبقى لإعادة ترتيب المنزل."
        }
      ]
    }
  },
  "maid-duties-family-holiday": {
    "en": {
      "kind": "steps",
      "title": "A practical family-away home plan",
      "caption": "Original household-planning sequence for the family travelling while the worker remains in an agreed UAE arrangement.",
      "items": [
        {
          "label": "Separate",
          "detail": "Distinguish family travel, worker leave and service changes."
        },
        {
          "label": "Record",
          "detail": "Write duties, living arrangements, access and work/rest schedule."
        },
        {
          "label": "Connect",
          "detail": "Name a local decision-maker and update channel."
        },
        {
          "label": "Resume",
          "detail": "Complete the return handover and restore the normal routine."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "خطة عملية للمنزل أثناء سفر الأسرة",
      "caption": "تسلسل تنظيمي من إعداد عناية عندما تسافر الأسرة وتبقى العاملة ضمن ترتيب متفق عليه داخل الإمارات.",
      "items": [
        {
          "label": "افصل",
          "detail": "ميز بين سفر الأسرة وإجازة العاملة وتعديل الخدمة."
        },
        {
          "label": "سجل",
          "detail": "اكتب المهام والسكن والدخول وجدول العمل والراحة."
        },
        {
          "label": "اربط",
          "detail": "حدد صاحب قرار محلياً وقناة للتحديثات."
        },
        {
          "label": "استأنف",
          "detail": "أكمل تسليم العودة وارجع إلى الروتين المعتاد."
        }
      ]
    }
  },
  "domestic-worker-leave-travel-planning": {
    "en": {
      "kind": "steps",
      "title": "From leave dates to a clear return handover",
      "caption": "Original operational planning sequence; leave rights and commercial cover terms remain separate.",
      "items": [
        {
          "label": "Plan leave",
          "detail": "Keep the agreed dates and employment record together."
        },
        {
          "label": "Select essentials",
          "detail": "Choose the duties that need lawful temporary help."
        },
        {
          "label": "Arrange cover",
          "detail": "Record the person, service, scope, access and price."
        },
        {
          "label": "Close and resume",
          "detail": "Return access items and brief the regular worker on changes."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "من تواريخ الإجازة إلى تسليم العودة",
      "caption": "تسلسل تشغيلي من إعداد عناية؛ تبقى حقوق الإجازة وشروط الخدمة البديلة التجارية منفصلة.",
      "items": [
        {
          "label": "خطط للإجازة",
          "detail": "اجمع التواريخ المتفق عليها وسجل التوظيف."
        },
        {
          "label": "اختر الأساسيات",
          "detail": "حدد الأعمال التي تحتاج إلى مساعدة مؤقتة نظامية."
        },
        {
          "label": "رتب الخدمة",
          "detail": "سجل الشخص والنطاق والدخول والسعر."
        },
        {
          "label": "أغلق واستأنف",
          "detail": "أعد وسائل الدخول وأطلع العاملة الأساسية على التغييرات."
        }
      ]
    }
  },
  "moving-home-emirate-with-domestic-worker": {
    "en": {
      "kind": "steps",
      "title": "Review the move in three connected layers",
      "caption": "An original moving-house decision flow; the applicable official procedure follows the actual employer and file category.",
      "items": [
        {
          "label": "Identify",
          "detail": "Separate address relocation from a change of employer or service."
        },
        {
          "label": "Review records",
          "detail": "Use the relevant official channels for the actual file."
        },
        {
          "label": "Rewrite the scope",
          "detail": "Update living arrangements, access, duties and schedule."
        },
        {
          "label": "Handover",
          "detail": "Close old access and orient the worker to the new home."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "راجع الانتقال في طبقات مترابطة",
      "caption": "مسار تنظيمي من إعداد عناية للانتقال؛ يتبع الإجراء الرسمي صاحب العمل الفعلي وفئة الملف.",
      "items": [
        {
          "label": "حدد",
          "detail": "افصل تغيير العنوان عن تغيير صاحب العمل أو الخدمة."
        },
        {
          "label": "راجع السجلات",
          "detail": "استخدم القنوات الرسمية المعنية بالملف الفعلي."
        },
        {
          "label": "حدث النطاق",
          "detail": "راجع السكن والدخول والمهام والجدول."
        },
        {
          "label": "سلم",
          "detail": "أغلق صلاحيات المنزل القديم وعرف العاملة بالمنزل الجديد."
        }
      ]
    }
  },
  "domestic-worker-hiring-costs-uae": {
    "en": {
      "kind": "bars",
      "title": "Monthly package-price comparison",
      "caption": "Owner-approved INAYA price figures. The base package covers 30 days; commitment rates are per month for six or twelve months. This is a package-price comparison, not identical calendar-day coverage or a final bill.",
      "unit": "AED per month",
      "items": [
        {
          "label": "30-day package",
          "detail": "Published package price for 30 days",
          "value": 3500
        },
        {
          "label": "Six-month commitment",
          "detail": "AED 3,250 each month for the agreed six-month term",
          "value": 3250
        },
        {
          "label": "Twelve-month commitment",
          "detail": "AED 3,000 each month for the agreed twelve-month term",
          "value": 3000
        }
      ]
    },
    "ar": {
      "kind": "bars",
      "title": "مقارنة سعر الباقة الشهري",
      "caption": "أرقام أسعار عناية المعتمدة. تغطي الباقة الأساسية ثلاثين يوماً، وأسعار الالتزام شهرية لمدة ستة أو اثني عشر شهراً. هذه مقارنة لسعر الباقة وليست تغطية متطابقة بأيام التقويم أو فاتورة نهائية.",
      "unit": "درهم لكل شهر",
      "items": [
        {
          "label": "باقة ثلاثين يوماً",
          "detail": "سعر الباقة المنشور لمدة ثلاثين يوماً",
          "value": 3500
        },
        {
          "label": "التزام ستة أشهر",
          "detail": "3,250 درهماً كل شهر طوال الالتزام المتفق عليه",
          "value": 3250
        },
        {
          "label": "التزام اثني عشر شهراً",
          "detail": "3,000 درهم كل شهر طوال الالتزام المتفق عليه",
          "value": 3000
        }
      ]
    }
  },
  "one-maid-two-helpers-workload": {
    "en": {
      "kind": "steps",
      "title": "Decide from workload, then choose the role",
      "caption": "Original household planning workflow: solve task overlap without assigning invented staffing ratios.",
      "items": [
        {
          "label": "Map fixed duties",
          "detail": "List supervision and time-sensitive household responsibilities."
        },
        {
          "label": "Move flexible tasks",
          "detail": "Place cleaning, laundry and organisation around the fixed duties."
        },
        {
          "label": "Check remaining overlap",
          "detail": "Identify duties that still need attention in different places at once."
        },
        {
          "label": "Choose a clear arrangement",
          "detail": "Discuss role changes, visit timing or separate household help."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "ابدأ بعبء العمل ثم اختر الدور",
      "caption": "مسار أصلي لتخطيط احتياج المنزل ومعالجة تعارض المهام دون نسب مفترضة لعدد العاملات.",
      "items": [
        {
          "label": "حدد المهام الثابتة",
          "detail": "اكتب مسؤوليات الإشراف والأعمال المرتبطة بأوقات محددة."
        },
        {
          "label": "انقل الأعمال المرنة",
          "detail": "وزع التنظيف والغسيل والتنظيم حول المسؤوليات الثابتة."
        },
        {
          "label": "راجع التعارض المتبقي",
          "detail": "حدد المهام التي تحتاج إلى متابعة في مكانين في الوقت نفسه."
        },
        {
          "label": "اختر ترتيباً واضحاً",
          "detail": "ناقش تعديل الدور أو توقيت الزيارة أو المساعدة المنزلية المنفصلة."
        }
      ]
    }
  },
  "agreeing-domestic-worker-household-duties": {
    "en": {
      "kind": "steps",
      "title": "A clear route for changing household duties",
      "caption": "Original change-request workflow; any revised task remains within the applicable agreement and lawful role.",
      "items": [
        {
          "label": "Describe the request",
          "detail": "Name the task, frequency, timing and intended outcome."
        },
        {
          "label": "Review skills and overlap",
          "detail": "Check the role and the work that must move or be reduced."
        },
        {
          "label": "Record the revised scope",
          "detail": "Document responsibilities, resources and applicable service terms."
        },
        {
          "label": "Review the routine",
          "detail": "Discuss clear observations and adjust the plan respectfully."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "مسار واضح لتعديل المهام المنزلية",
      "caption": "خطة أصلية لمناقشة التغيير؛ تبقى المهمة المعدلة ضمن الاتفاق المطبق والدور القانوني المناسب.",
      "items": [
        {
          "label": "صف الطلب",
          "detail": "حدد المهمة وتكرارها وتوقيتها والنتيجة المطلوبة."
        },
        {
          "label": "راجع الخبرة والتعارض",
          "detail": "تحقق من الدور والعمل الذي ينقل أو يقلل."
        },
        {
          "label": "سجل النطاق المعدل",
          "detail": "وثق المسؤوليات والموارد وشروط الخدمة المنطبقة."
        },
        {
          "label": "راجع الروتين",
          "detail": "ناقش الملاحظات الواضحة وعدل الخطة باحترام."
        }
      ]
    }
  },
  "maid-daily-instructions-handover-template": {
    "en": {
      "kind": "steps",
      "title": "A practical daily communication cycle",
      "caption": "Original household handover workflow: a short cycle supports clear priorities without creating a new employment term.",
      "items": [
        {
          "label": "Set the priorities",
          "detail": "Identify essential tasks, flexible work and the contact for questions."
        },
        {
          "label": "Show the method",
          "detail": "Demonstrate equipment, locations and household preferences."
        },
        {
          "label": "Record the handover",
          "detail": "Note completed work, moved tasks and practical issues."
        },
        {
          "label": "Resolve and update",
          "detail": "Agree the next decision and revise the plan where needed."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "دورة عملية للتواصل اليومي",
      "caption": "مسار أصلي لتسليم مهام المنزل؛ تدعم الخطوات وضوح الأولويات دون إنشاء شرط توظيف جديد.",
      "items": [
        {
          "label": "حدد الأولويات",
          "detail": "وضح المهام الأساسية والأعمال المرنة وجهة الأسئلة."
        },
        {
          "label": "اشرح الطريقة",
          "detail": "اعرض الأدوات والمواقع وتفضيلات الأسرة عملياً."
        },
        {
          "label": "سجل التسليم",
          "detail": "دون العمل المكتمل والمهام المنقولة والمشكلات العملية."
        },
        {
          "label": "احسم وحدث",
          "detail": "اتفق على القرار التالي وعدل الخطة عند الحاجة."
        }
      ]
    }
  },
  "domestic-worker-contract-permit-residence-cancellation": {
    "en": {
      "kind": "steps",
      "title": "Keep the ending process clear",
      "caption": "Original record-management workflow. Official integrated services can link transactions; this is not a universal order of separate manual applications.",
      "items": [
        {
          "label": "Identify the arrangement",
          "detail": "Separate the service customer, legal employer and worker records."
        },
        {
          "label": "Select the official route",
          "detail": "Use the applicable domestic-worker and residence service."
        },
        {
          "label": "Prepare consistent records",
          "detail": "Check document details, payment records and application references."
        },
        {
          "label": "Retain the completed result",
          "detail": "Review the official status and instructions for the next lawful step."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "حافظ على وضوح إجراءات الإنهاء",
      "caption": "مسار أصلي لتنظيم السجلات. قد تربط الخدمات الرسمية المتكاملة بين المعاملات؛ وليس هذا ترتيباً موحداً لطلبات يدوية منفصلة.",
      "items": [
        {
          "label": "حدد الترتيب",
          "detail": "افصل بين عميل الخدمة وصاحب العمل القانوني وسجلات العاملة."
        },
        {
          "label": "اختر المسار الرسمي",
          "detail": "استخدم خدمة العامل المساعد والإقامة المطبقة على الحالة."
        },
        {
          "label": "جهز سجلات متسقة",
          "detail": "راجع بيانات المستندات والسداد ومراجع الطلبات."
        },
        {
          "label": "احتفظ بالنتيجة المكتملة",
          "detail": "راجع الوضع الرسمي وتعليمات الخطوة القانونية التالية."
        }
      ]
    }
  },
  "choosing-domestic-worker-agency-ajman": {
    "en": {
      "kind": "steps",
      "title": "Compare answers with a consistent evidence record",
      "caption": "An original enquiry-planning workflow. These steps do not grade a worker or establish an approval or booking.",
      "items": [
        {
          "label": "Write one household brief",
          "detail": "Keep the same duties, arrangement and location when comparing answers."
        },
        {
          "label": "Ask for the relevant answer",
          "detail": "Separate the role, candidate evidence, agreement and start conditions."
        },
        {
          "label": "Record what is established",
          "detail": "Mark supplied information and questions still needing clarification."
        },
        {
          "label": "Confirm the next action",
          "detail": "Keep a written recap with the quotation and service scope."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "قارن الإجابات بسجل واضح للمعلومات",
      "caption": "مسار أصلي لتخطيط الاستفسار. لا يمنح درجات للعاملة ولا يثبت الموافقة أو تأكيد الحجز.",
      "items": [
        {
          "label": "اكتب طلباً منزلياً واحداً",
          "detail": "استخدم المهام وترتيب العمل والمنطقة نفسها عند مقارنة الإجابات."
        },
        {
          "label": "اطلب الإجابة المناسبة",
          "detail": "افصل الدور ودليل الخبرة والاتفاق وشروط البدء."
        },
        {
          "label": "سجل ما اتضح",
          "detail": "ميز المعلومات المقدمة والأسئلة التي تحتاج إلى توضيح."
        },
        {
          "label": "أكد الخطوة التالية",
          "detail": "احتفظ بملخص مكتوب مع عرض السعر ونطاق الخدمة."
        }
      ]
    }
  },
  "domestic-worker-employer-eligibility-documents": {
    "en": {
      "kind": "steps",
      "title": "From a visa question to a case-specific document request",
      "caption": "An original preparation workflow. The applicable authority decides eligibility and the official outcome.",
      "items": [
        {
          "label": "Describe the intended transaction",
          "detail": "Explain the current arrangement and what needs to change."
        },
        {
          "label": "Confirm the applicant and record",
          "detail": "Identify the relevant official service before assuming a checklist."
        },
        {
          "label": "Request the case-specific list",
          "detail": "Clarify each requested item and a private delivery channel."
        },
        {
          "label": "Keep the transaction record",
          "detail": "Retain references, receipts and questions still under review."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "من سؤال عن التأشيرة إلى طلب وثائق يناسب الحالة",
      "caption": "مسار أصلي للاستعداد. تحدد الجهة المختصة الأهلية والنتيجة الرسمية.",
      "items": [
        {
          "label": "صف المعاملة المطلوبة",
          "detail": "وضح الترتيب الحالي وما ترغب في تغييره."
        },
        {
          "label": "أكد مقدم الطلب والسجل",
          "detail": "حدد الخدمة الرسمية قبل افتراض قائمة المستندات."
        },
        {
          "label": "اطلب قائمة الحالة",
          "detail": "وضح سبب كل وثيقة وقناة تسليمها الخاصة."
        },
        {
          "label": "احتفظ بسجل المعاملة",
          "detail": "احفظ المراجع والإيصالات والأسئلة التي لا تزال قيد المراجعة."
        }
      ]
    }
  },
  "domestic-worker-employment-arrangements-uae": {
    "en": {
      "kind": "steps",
      "title": "Prepare the home before the live-in handover",
      "caption": "An original household-planning workflow, with no fixed timetable or assumed unlimited duties.",
      "items": [
        {
          "label": "Describe the home routine",
          "detail": "Explain accommodation, priorities and the busiest periods."
        },
        {
          "label": "Resolve overlapping requests",
          "detail": "Agree task boundaries and who covers responsibilities that conflict."
        },
        {
          "label": "Prepare a clear handover",
          "detail": "Introduce the household contact, access and equipment instructions."
        },
        {
          "label": "Review instructions together",
          "detail": "Record agreed changes while keeping the arrangement and rest provisions clear."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "جهز المنزل قبل تسليم مهام الخدمة المقيمة",
      "caption": "مسار أصلي لتخطيط احتياج الأسرة، دون جدول ثابت أو افتراض مهام غير محدودة.",
      "items": [
        {
          "label": "صف روتين المنزل",
          "detail": "وضح السكن والأولويات والأوقات الأكثر ازدحاماً."
        },
        {
          "label": "نظم الطلبات المتداخلة",
          "detail": "اتفق على حدود المهام ومن يغطي المسؤوليات المتعارضة."
        },
        {
          "label": "جهز تسليماً واضحاً",
          "detail": "حدد جهة اتصال الأسرة وتعليمات الدخول والأجهزة."
        },
        {
          "label": "راجع التعليمات معاً",
          "detail": "سجل التعديلات مع إبقاء الترتيب وأحكام الراحة واضحة."
        }
      ]
    }
  },
  "domestic-worker-hiring-stages-timelines": {
    "en": {
      "kind": "steps",
      "title": "Follow recruitment through an evidence-based update",
      "caption": "An original coordination workflow. It does not assign a fixed duration or guarantee a candidate or official outcome.",
      "items": [
        {
          "label": "Identify the current milestone",
          "detail": "Keep the update tied to the actual candidate and arrangement."
        },
        {
          "label": "Record the supporting information",
          "detail": "Note what was confirmed, by whom and on which date."
        },
        {
          "label": "Name the outstanding action",
          "detail": "Clarify the responsible party and what still needs review."
        },
        {
          "label": "Review before moving forward",
          "detail": "Retain changes and confirm the next milestone on its own evidence."
        }
      ]
    },
    "ar": {
      "kind": "steps",
      "title": "تابع الاستقدام بتحديث يستند إلى معلومات واضحة",
      "caption": "مسار أصلي للتنسيق، لا يحدد مدة ثابتة ولا يضمن مرشحة أو نتيجة رسمية.",
      "items": [
        {
          "label": "حدد المرحلة الحالية",
          "detail": "اربط التحديث بالمرشحة والترتيب الفعليين."
        },
        {
          "label": "سجل المعلومات المؤيدة",
          "detail": "وضح ما تأكد ومن أكده وتاريخ التحديث."
        },
        {
          "label": "سم الإجراء المتبقي",
          "detail": "حدد الطرف المسؤول وما يحتاج إلى مراجعة."
        },
        {
          "label": "راجع قبل الانتقال",
          "detail": "احتفظ بالتغييرات وأكد المرحلة التالية بمعلوماتها الخاصة."
        }
      ]
    }
  }
};

export function getCustomerArticleVisual(slug: string, lang: 'en' | 'ar') {
  return customerArticleVisuals[slug]?.[lang];
}
