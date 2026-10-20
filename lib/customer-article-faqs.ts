type CustomerFaq = { question: string; answer: string };

// The same four questions are rendered in each article and used by its schema.
export const customerArticleFaqs: Record<string, Record<'en' | 'ar', CustomerFaq[]>> = {
  "four-hour-eight-hour-maid-visit-plan": {
    "en": [
      {
        "question": "Does four hours guarantee that every room will be cleaned?",
        "answer": "The visit is planned around the agreed task list, property condition and access. Rank the essential outcomes and record any work carried forward at handover."
      },
      {
        "question": "What are INAYA’s four-hour and eight-hour prices?",
        "answer": "The published half-day package is AED 120 for four hours. The daily package is AED 200 for eight hours. Review the written scope, responsibilities and final price breakdown before booking."
      },
      {
        "question": "Can laundry or ironing be included in the visit?",
        "answer": "Include those duties in the proposed scope before booking and reserve time for them within the visit. Explain the load and care instructions so they can be prioritised alongside cleaning."
      },
      {
        "question": "Should I book eight hours for deep cleaning?",
        "answer": "Describe the exact work first. A longer household visit is not a substitute for a specialist assessment of high-access cleaning, heavy lifting, restoration or other work outside the agreed role."
      }
    ],
    "ar": [
      {
        "question": "هل تضمن الأربع ساعات تنظيف جميع الغرف؟",
        "answer": "تنظم الزيارة وفق قائمة المهام المتفق عليها وحالة المنزل وترتيبات الدخول. رتب النتائج الأساسية حسب الأولوية، وسجل ما ينتقل إلى الزيارة التالية عند التسليم."
      },
      {
        "question": "ما سعر الأربع والثماني ساعات لدى عناية؟",
        "answer": "سعر باقة نصف اليوم المنشور 120 درهماً لأربع ساعات، وسعر الباقة اليومية 200 درهم لثماني ساعات. راجع النطاق والمسؤوليات وتفصيل المبلغ النهائي في العرض المكتوب قبل الحجز."
      },
      {
        "question": "هل يمكن إضافة الغسيل أو الكي إلى الزيارة؟",
        "answer": "أدرج هذه الأعمال في النطاق المقترح قبل الحجز وخصص لها وقتاً داخل الزيارة. وضح كمية الملابس وتعليمات العناية لترتيبها مع أعمال التنظيف."
      },
      {
        "question": "هل أحجز ثماني ساعات للتنظيف العميق؟",
        "answer": "صف العمل المطلوب أولاً. الزيارة المنزلية الأطول لا تغني عن تقييم متخصص للأعمال المرتفعة أو نقل الأثاث الثقيل أو الترميم أو غيرها من الأعمال خارج الدور المتفق عليه."
      }
    ]
  },
  "maid-visit-frequency-planner": {
    "en": [
      {
        "question": "Is one maid visit per week enough?",
        "answer": "Use your task record to decide. List what the family maintains between visits and check whether important work repeatedly carries forward. There is no single visit count that fits every home."
      },
      {
        "question": "Is INAYA’s weekly package one visit per week?",
        "answer": "No. The published weekly package is AED 1,120 for a seven-day service period. The written agreement records its schedule, duties and rest; individual recurring visits are a separate scheduling discussion."
      },
      {
        "question": "Should I add another visit or choose a longer visit?",
        "answer": "Identify the cause of the backlog first. Tasks linked to different days favour a discussion about frequency; a larger task list on one day requires a discussion about visit duration and priorities."
      },
      {
        "question": "Does recurring booking guarantee the same worker?",
        "answer": "Record a preferred continuity arrangement with the coordinator and include the task handover and contact route. The selected agreement and available staffing determine the actual allocation."
      }
    ],
    "ar": [
      {
        "question": "هل تكفي زيارة عاملة منزلية واحدة أسبوعياً؟",
        "answer": "حدد ذلك من سجل المهام. اكتب ما تحافظ عليه الأسرة بين الزيارات، ثم راجع الأعمال المهمة التي تتأجل باستمرار. لا يوجد عدد واحد من الزيارات يناسب جميع المنازل."
      },
      {
        "question": "هل تعني باقة عناية الأسبوعية زيارة واحدة في الأسبوع؟",
        "answer": "لا. السعر المنشور للباقة الأسبوعية 1,120 درهماً لفترة خدمة من سبعة أيام. ويسجل الاتفاق المكتوب الجدول والمهام والراحة، بينما يناقش ترتيب الزيارات المتكررة بصورة مستقلة."
      },
      {
        "question": "هل أضيف زيارة أخرى أم أختار زيارة أطول؟",
        "answer": "حدد سبب التراكم أولاً. إذا ارتبطت المهام بأيام مختلفة، فناقش تكرار الزيارات. وإذا كانت قائمة العمل أكبر في يوم واحد، فناقش مدة الزيارة وترتيب الأولويات."
      },
      {
        "question": "هل يضمن الحجز المتكرر حضور العاملة نفسها؟",
        "answer": "سجل تفضيل استمرارية العاملة مع المنسق، وحدد طريقة تسليم المهام وقناة التواصل. يحدد الاتفاق المختار وترتيب العاملات المتاح التخصيص الفعلي للخدمة."
      }
    ]
  },
  "apartment-villa-maid-task-plan": {
    "en": [
      {
        "question": "Does a villa always need more cleaning hours than an apartment?",
        "answer": "Assess the actual occupied areas, condition, duties and access. Additional floors can change the sequence, while a heavily used apartment can also have a demanding workload."
      },
      {
        "question": "Are garden and pool jobs part of ordinary maid work?",
        "answer": "List those tasks separately for the relevant provider to assess. A villa address does not add garden maintenance, pool-system work, repairs or high-access cleaning to the agreed household role."
      },
      {
        "question": "How can I organise rooms that are rarely used?",
        "answer": "Create a rotating list for less-used areas and give the everyday priorities their own list. Record which comes first and how unfinished work will be carried forward."
      },
      {
        "question": "What details should I send when discussing the visit?",
        "answer": "Describe occupied rooms, used bathrooms, floors, delicate surfaces, access restrictions and the most important outcomes. Share the emirate, preferred timing and equipment arrangements as well."
      }
    ],
    "ar": [
      {
        "question": "هل تحتاج الفيلا دائماً إلى ساعات تنظيف أكثر من الشقة؟",
        "answer": "قيم المساحات المشغولة وحالتها والمهام وترتيبات الدخول. قد يغير تعدد الطوابق تسلسل العمل، كما أن الشقة كثيرة الاستخدام قد تتطلب عملاً كبيراً."
      },
      {
        "question": "هل تشمل الأعمال المنزلية المعتادة مهام الحديقة والمسبح؟",
        "answer": "أدرج هذه الأعمال بصورة مستقلة ليقيمها مقدم الخدمة المناسب. عنوان الفيلا لا يضيف صيانة الحديقة أو أنظمة المسبح أو الإصلاحات أو التنظيف المرتفع إلى الدور المتفق عليه."
      },
      {
        "question": "كيف أنظم الغرف قليلة الاستخدام؟",
        "answer": "جهز قائمة دورية لهذه المناطق وقائمة أخرى للأولويات اليومية. سجل أيهما تبدأ أولاً وكيف تنتقل الأعمال المتبقية إلى الزيارة التالية."
      },
      {
        "question": "ما المعلومات التي أرسلها عند مناقشة الزيارة؟",
        "answer": "وضح الغرف المشغولة والحمامات المستخدمة والطوابق والأسطح الحساسة وقيود الدخول والنتائج الأهم. وأضف الإمارة والموعد المفضل وترتيبات الأدوات والمعدات."
      }
    ]
  },
  "regular-maid-service-deep-move-in-cleaning": {
    "en": [
      {
        "question": "Is deep cleaning automatically included in a longer maid visit?",
        "answer": "The written task list determines the work. Extra visit time does not add specialist machinery, restoration, high-access tasks or other duties outside the agreed household role."
      },
      {
        "question": "What should I send for a move-in cleaning discussion?",
        "answer": "Describe whether the home is empty or furnished, the condition of surfaces, utilities, cupboards, appliances, access and any relevant inspection checklist. Identify repairs or contractor work separately."
      },
      {
        "question": "Does a cleaning booking determine the return of my tenancy deposit?",
        "answer": "Cleaning records show the agreed work performed. The tenancy agreement, property condition and the landlord or manager’s handover process govern the separate deposit discussion."
      },
      {
        "question": "What should I do about leaks or recurring damp areas?",
        "answer": "Report the underlying building or maintenance issue to the owner, manager or relevant specialist, then coordinate the appropriate cleaning around that work. Do not treat repeated cleaning as a repair."
      }
    ],
    "ar": [
      {
        "question": "هل يشمل حجز زيارة أطول التنظيف العميق تلقائياً؟",
        "answer": "تحدد قائمة المهام المكتوبة العمل المطلوب. زيادة الوقت لا تضيف معدات تخصصية أو ترميماً أو أعمالاً مرتفعة أو مسؤوليات أخرى خارج الدور المنزلي المتفق عليه."
      },
      {
        "question": "ماذا أرسل عند مناقشة تنظيف منزل قبل السكن؟",
        "answer": "وضح إن كان المنزل فارغاً أو مفروشاً وحالة الأسطح والمرافق والخزائن والأجهزة وترتيبات الدخول وقائمة الفحص ذات الصلة. وافصل الإصلاحات وأعمال المقاول عن طلب التنظيف."
      },
      {
        "question": "هل يحدد حجز التنظيف استرجاع تأمين الإيجار؟",
        "answer": "توضح سجلات التنظيف العمل المتفق عليه والمنفذ. أما مناقشة التأمين فتخضع بصورة مستقلة لاتفاق الإيجار وحالة العقار وإجراءات التسليم لدى المالك أو المدير."
      },
      {
        "question": "ماذا أفعل عند وجود تسرب أو رطوبة متكررة؟",
        "answer": "أبلغ المالك أو المدير أو المتخصص المناسب بالمشكلة الأصلية، ثم نسق التنظيف الملائم حول أعمال المعالجة. لا يعتبر تكرار التنظيف إصلاحاً للتسرب أو سبب الرطوبة."
      }
    ]
  },
  "prepare-cleaning-supplies-maid-visit": {
    "en": [
      {
        "question": "Does INAYA always supply cleaning products and equipment?",
        "answer": "The written agreement records who provides the products and equipment for the selected work. Review that list alongside the scope before preparing the home or buying supplies."
      },
      {
        "question": "Do I need every product in a cleaning checklist?",
        "answer": "Prepare items that match the agreed tasks and surface instructions. A focused visit benefits from suitable, clearly identified products rather than a large collection of unnecessary cleaners."
      },
      {
        "question": "Can different cleaning products be mixed for stronger results?",
        "answer": "Do not mix bleach or disinfectants with other cleaners. Follow the selected product’s instructions for its surface, use, protection and ventilation instead of combining chemicals."
      },
      {
        "question": "What should I do if the vacuum or another appliance is faulty?",
        "answer": "Address the fault before the appliance is used and tell the coordinator how it affects the planned tasks. Discuss a safe working alternative or a revised task sequence."
      }
    ],
    "ar": [
      {
        "question": "هل توفر عناية مواد التنظيف والمعدات دائماً؟",
        "answer": "يسجل الاتفاق المكتوب من يوفر المنتجات والمعدات للأعمال المختارة. راجع القائمة مع نطاق الخدمة قبل تجهيز المنزل أو شراء المستلزمات."
      },
      {
        "question": "هل أحتاج إلى كل المنتجات الواردة في قائمة التنظيف؟",
        "answer": "جهز ما يناسب المهام المتفق عليها وتعليمات الأسطح. تستفيد الزيارة المركزة من منتجات مناسبة وواضحة الاستخدام بدلاً من مجموعة كبيرة من المنظفات غير اللازمة."
      },
      {
        "question": "هل يمكن خلط المنظفات للحصول على نتيجة أقوى؟",
        "answer": "لا تخلط المبيضات أو المطهرات مع منظفات أخرى. اتبع تعليمات المنتج المختار للأسطح والاستخدام والوقاية والتهوية بدلاً من جمع المواد الكيميائية."
      },
      {
        "question": "ماذا أفعل إذا كانت المكنسة أو أي معدة أخرى معطلة؟",
        "answer": "عالج العطل قبل الاستخدام، وأبلغ المنسق بأثره على المهام المخططة. ناقش بديلاً صالحاً وآمناً أو عدل تسلسل العمل وفق الأدوات المتاحة."
      }
    ]
  },
  "maid-laundry-ironing-task-checklist": {
    "en": [
      {
        "question": "Can I request ironing without washing?",
        "answer": "Yes, describe ironing as the task you want to discuss, including clean dry garments, priority items and the finish required. Record the selected scope and schedule in the service agreement."
      },
      {
        "question": "How many garments can be ironed in one visit?",
        "answer": "Plan from garment type, condition, care instructions, equipment and the other agreed duties. Use a priority list and review the actual workload rather than a universal garment count."
      },
      {
        "question": "Should delicate clothes go into the normal laundry basket?",
        "answer": "Keep delicate, valuable and specialist-care items separately. Show their labels and owner instructions before a treatment is chosen."
      },
      {
        "question": "What if a load is still drying when the visit ends?",
        "answer": "Record where the load is drying and who will complete the next step. Agree this handover before the visit so wet items are not forgotten or treated twice."
      }
    ],
    "ar": [
      {
        "question": "هل يمكن طلب الكي من دون الغسيل؟",
        "answer": "اشرح أن المهمة المطلوبة هي الكي، مع تحديد القطع النظيفة والجافة والأولوية وطريقة التشطيب، ثم سجل النطاق والجدول ضمن اتفاق الخدمة."
      },
      {
        "question": "كم قطعة يمكن كيها خلال الزيارة؟",
        "answer": "يبنى التخطيط على نوع القطع وحالتها وتعليمات العناية والأجهزة والمهام الأخرى. استخدم قائمة أولوية وراجع حجم العمل الفعلي بدلاً من الاعتماد على عدد موحد."
      },
      {
        "question": "أين أضع الملابس الحساسة؟",
        "answer": "ضع القطع الحساسة والقيّمة والمخصصة للعناية المهنية بصورة منفصلة، مع إظهار الملصق وتعليمات صاحب القطعة قبل اختيار المعالجة."
      },
      {
        "question": "ماذا يحدث إذا لم يجف الغسيل قبل نهاية الزيارة؟",
        "answer": "سجل مكانه والخطوة التالية والمسؤول عن تنفيذها. اتفق على هذا التسليم مسبقاً حتى لا ينسى الغسيل أو يعالج مرتين."
      }
    ]
  },
  "home-cooking-weekly-meal-prep-plan": {
    "en": [
      {
        "question": "Can a domestic worker prepare meals for several days?",
        "answer": "Describe the dishes and preparation you need, then plan cooking, cooling and storage for each food using appropriate safety guidance. A weekly menu is not a single storage period for every dish."
      },
      {
        "question": "Does home cooking automatically include grocery shopping?",
        "answer": "Record shopping, purchase approval, receipts and ingredient responsibilities as part of the selected scope. Keep those duties separate from cooking and kitchen cleaning in your worksheet."
      },
      {
        "question": "Can I request a particular cuisine?",
        "answer": "Provide example dishes and discuss the individual worker’s relevant experience. Agree recipes, portions and preferences rather than using nationality as evidence of cooking skill."
      },
      {
        "question": "Can cooking be combined with childcare?",
        "answer": "Plan the two roles together and identify overlapping supervision and cooking demands. Assign a responsible person for childcare whenever cooking requires separate attention."
      }
    ],
    "ar": [
      {
        "question": "هل يمكن تحضير وجبات لعدة أيام؟",
        "answer": "حدد الأطباق المطلوبة، ثم خطط للطهي والتبريد والتخزين بحسب كل نوع من الطعام وإرشاداته. لا تمثل القائمة الأسبوعية مدة حفظ واحدة لكل الوجبات."
      },
      {
        "question": "هل يشمل الطهي شراء المواد الغذائية تلقائياً؟",
        "answer": "سجل مسؤولية الشراء والموافقة على المصروفات والإيصالات ضمن النطاق المختار. افصلها في الجدول عن الطهي وتنظيف المطبخ."
      },
      {
        "question": "هل أستطيع طلب مطبخ معين؟",
        "answer": "قدم أمثلة الأطباق وناقش خبرة الشخص فيها، ثم اتفق على الوصفات والحصص والتفضيلات. الجنسية ليست دليلاً على مهارة الطهي."
      },
      {
        "question": "هل يمكن الجمع بين الطهي ورعاية الأطفال؟",
        "answer": "ضع الدورين على جدول واحد وحدد أوقات التداخل. خصص مسؤولاً عن رعاية الطفل عندما يتطلب الطهي انتباهاً منفصلاً."
      }
    ]
  },
  "new-maid-first-week-checklist": {
    "en": [
      {
        "question": "Should a new maid know every household routine immediately?",
        "answer": "Explain and demonstrate the routines that are specific to your home. Begin with agreed priorities, invite questions and review the result before expanding the routine."
      },
      {
        "question": "Does a first-week plan mean a free trial?",
        "answer": "No. Orientation is the practical introduction to the home after the appropriate start arrangements. Any trial or probation has its own legal and contractual basis."
      },
      {
        "question": "Who should give daily instructions?",
        "answer": "Choose one family contact to coordinate priorities and approve changes. Other household members can pass requests through that contact to avoid conflicting instructions."
      },
      {
        "question": "What should the end-of-week review cover?",
        "answer": "Review clear instructions, tasks needing demonstration, the workload and the next changes. Record the agreed actions and give both the family and worker a chance to raise questions."
      }
    ],
    "ar": [
      {
        "question": "هل ينبغي أن تعرف العاملة كل روتين المنزل فوراً؟",
        "answer": "اشرح الروتين الخاص بمنزلك واعرضه عملياً. ابدأ بالأولويات المتفق عليها، وشجع الأسئلة، ثم راجع النتيجة قبل توسيع الروتين."
      },
      {
        "question": "هل تعني خطة الأسبوع الأول تجربة مجانية؟",
        "answer": "لا. التعريف هو تقديم المنزل وروتينه بعد ترتيبات البدء المناسبة. أما أي تجربة أو فترة اختبار فلها أساس قانوني وتعاقدي مستقل."
      },
      {
        "question": "من يعطي التعليمات اليومية؟",
        "answer": "حدد شخصاً من الأسرة لتنسيق الأولويات والموافقة على التغييرات، وتمرر بقية الطلبات من خلاله لتجنب التعارض."
      },
      {
        "question": "ماذا تشمل مراجعة نهاية الأسبوع؟",
        "answer": "تشمل وضوح التعليمات والمهام التي تحتاج إلى عرض عملي وحجم العمل والتعديلات المقبلة، مع تسجيل القرارات وإتاحة الأسئلة للطرفين."
      }
    ]
  },
  "nanny-school-routine-child-handover": {
    "en": [
      {
        "question": "Does hiring a nanny automatically include school collection?",
        "answer": "Record collection as an explicit duty and complete the school’s authorisation process. Agree the schedule and transport separately."
      },
      {
        "question": "Can the nanny also look after a younger child during collection?",
        "answer": "Map the overlap before deciding. A responsible adult must cover the child remaining at home while another adult handles collection."
      },
      {
        "question": "How should I communicate an early school finish?",
        "answer": "Send a dated change, obtain acknowledgement and identify who informs the school. Keep the normal standing routine separate from the day’s exception."
      },
      {
        "question": "What information should a school handover include?",
        "answer": "Include the designated adult, collection or arrival location, applicable school process and parent contact order. Share relevant school messages and belongings at the home handover."
      }
    ],
    "ar": [
      {
        "question": "هل يشمل توظيف المربية استلام الطفل من المدرسة تلقائياً؟",
        "answer": "سجل الاستلام بوصفه مهمة صريحة وأكمل تفويض المدرسة، ثم اتفق على الجدول ووسيلة النقل بصورة مستقلة."
      },
      {
        "question": "هل يمكن رعاية طفل أصغر أثناء استلام أخيه؟",
        "answer": "راجع التداخل الزمني مسبقاً. يجب أن يغطي بالغ مسؤول رعاية الطفل الباقي في المنزل بينما يتولى شخص آخر الاستلام."
      },
      {
        "question": "كيف أبلغ المربية بالانصراف المبكر؟",
        "answer": "أرسل تغييراً مؤرخاً واطلب الإقرار باستلامه وحدد من يبلغ المدرسة، مع فصل الاستثناء اليومي عن الروتين الثابت."
      },
      {
        "question": "ما المعلومات الأساسية في تسليم الطفل؟",
        "answer": "الشخص المسؤول ومكان الاستلام أو الوصول وإجراء المدرسة وتسلسل الاتصال بالوالدين، ثم رسائل المدرسة والأغراض المهمة عند التسليم في المنزل."
      }
    ]
  },
  "maid-household-with-pets": {
    "en": [
      {
        "question": "Does a maid package automatically include pet care?",
        "answer": "Record pet-related work as part of the selected scope. Cleaning a home with pets and taking responsibility for feeding, exercise or cover are different tasks."
      },
      {
        "question": "What should I explain before the first visit?",
        "answer": "Describe the animals, visitor response, access controls, usual routine and exact duties. Arrange an owner-led introduction and show the safe working areas."
      },
      {
        "question": "Can household help replace a vet or behaviour specialist?",
        "answer": "A household support role follows the agreed routine and reports concerns. Veterinary treatment and behaviour problems belong with the appropriate qualified professional."
      },
      {
        "question": "Can a visiting maid look after pets while I travel?",
        "answer": "Plan the animal’s whole care arrangement, including time between visits, the responsible person and backup. A cleaning visit by itself is not continuous supervision."
      }
    ],
    "ar": [
      {
        "question": "هل تشمل باقة العاملة رعاية الحيوانات تلقائياً؟",
        "answer": "سجل المهام المتعلقة بالحيوانات ضمن النطاق المختار. فتنظيف المنزل الذي يوجد فيه حيوان يختلف عن مسؤولية الطعام أو التمرين أو التغطية أثناء الغياب."
      },
      {
        "question": "ماذا أوضح قبل الزيارة الأولى؟",
        "answer": "أنواع الحيوانات واستجابتها للزوار وإجراءات الدخول والروتين والمهام المحددة، مع تعارف يقوده المالك وعرض أماكن العمل الآمنة."
      },
      {
        "question": "هل تغني المساعدة المنزلية عن البيطري أو مختص السلوك؟",
        "answer": "ينفذ الدعم المنزلي الروتين المتفق عليه ويبلغ عن الملاحظات. أما العلاج والمشكلات السلوكية فترجع إلى المختص المناسب."
      },
      {
        "question": "هل تكفي زيارة العاملة لرعاية الحيوان أثناء السفر؟",
        "answer": "خطط للرعاية طوال فترة الغياب، بما يشمل الوقت بين الزيارات والشخص المسؤول والبديل. زيارة التنظيف وحدها ليست إشرافاً مستمراً."
      }
    ]
  },
  "maid-home-access-keys-privacy": {
    "en": [
      {
        "question": "Should I give my maid a house key?",
        "answer": "Choose an access arrangement that fits the agreed work and your household routine. If a key or card is issued, record the item, recipient, date and return arrangement privately."
      },
      {
        "question": "What should I do if the worker cannot enter the building?",
        "answer": "Use the named family contact and building registration process. Resolve entry before asking the worker to wait or change the service schedule, and record any revised arrangement with the coordinator."
      },
      {
        "question": "Can I post identity documents in a family group to identify the worker?",
        "answer": "Use the agreed verification channel and share only what the authorised people need. Keep personal documents out of public posts and unnecessary group circulation."
      },
      {
        "question": "What happens to access when the service ends?",
        "answer": "Check the key/card return record, review temporary permissions and remove access no longer needed. Keep this separate from any employment, payment or official cancellation process."
      }
    ],
    "ar": [
      {
        "question": "هل أسلم العاملة مفتاح المنزل؟",
        "answer": "اختر وسيلة دخول تناسب المهام وروتين الأسرة. وعند تسليم مفتاح أو بطاقة، سجل القطعة والمستلم والتاريخ وطريقة الإعادة بصورة خاصة."
      },
      {
        "question": "ماذا أفعل إذا تعذر دخول العاملة إلى المبنى؟",
        "answer": "ارجع إلى مسؤول الأسرة وإجراء التسجيل في المبنى. عالج الدخول قبل تغيير الجدول أو مطالبة العاملة بالانتظار، وسجل أي ترتيب معدل مع منسق الخدمة."
      },
      {
        "question": "هل أنشر صورة الهوية في مجموعة الأسرة للتعريف بالعاملة؟",
        "answer": "استخدم قناة التحقق المتفق عليها، وشارك القدر اللازم فقط مع الأشخاص المخولين. أبعد المستندات الشخصية عن المنشورات العامة والتداول الجماعي غير الضروري."
      },
      {
        "question": "كيف أتعامل مع صلاحيات الدخول عند انتهاء الخدمة؟",
        "answer": "راجع سجل إعادة المفاتيح والبطاقات والصلاحيات المؤقتة، وأوقف الدخول الذي انتهت الحاجة إليه. افصل ذلك عن أي إجراء خاص بالتوظيف أو السداد أو الإلغاء الرسمي."
      }
    ]
  },
  "maid-help-family-guests-gathering": {
    "en": [
      {
        "question": "Can I book help only before guests arrive?",
        "answer": "Describe the preparation-only task list and required visit period. The proposed arrangement should identify the rooms, priorities, access and time window without adding hosting duties automatically."
      },
      {
        "question": "Does a maid booking include cooking or serving guests?",
        "answer": "Record cooking, food preparation and guest-related duties separately in the service scope. A general cleaning request does not itself assign those roles."
      },
      {
        "question": "Should I choose four hours or eight hours for a gathering?",
        "answer": "Start with the work required before, during and after the gathering. Compare the published packages, then select a service period against the agreed priorities rather than a fixed guest-count rule."
      },
      {
        "question": "What if the gathering runs longer than planned?",
        "answer": "Discuss any revised service period and duties with the coordinator. Keep the original finish arrangement clear and obtain the revised scope and price before adding work."
      }
    ],
    "ar": [
      {
        "question": "هل أرتب المساعدة قبل وصول الضيوف فقط؟",
        "answer": "حدد مهام التحضير وفترة الزيارة المطلوبة. ويسجل الترتيب المقترح الغرف والأولويات والدخول والتوقيت، من دون إضافة مهام الاستضافة تلقائياً."
      },
      {
        "question": "هل يشمل حجز العاملة الطهي أو تقديم الطعام للضيوف؟",
        "answer": "سجل الطهي وتحضير الطعام والمهام المرتبطة بالضيوف بصورة مستقلة في النطاق. فطلب التنظيف العام لا يسند هذه الأدوار تلقائياً."
      },
      {
        "question": "هل أختار أربع ساعات أم ثماني ساعات للتجمع؟",
        "answer": "ابدأ بالعمل المطلوب قبل التجمع وأثناءه وبعده. ثم قارن الباقتين المنشورتين واختر فترة الخدمة وفق الأولويات المتفق عليها، وليس وفق قاعدة ثابتة لعدد الضيوف."
      },
      {
        "question": "ماذا لو استمر التجمع أكثر من الوقت المخطط؟",
        "answer": "ناقش أي تعديل في المدة أو المهام مع المنسق. وأبق وقت الانتهاء الأصلي واضحاً، واحصل على النطاق والسعر المعدلين قبل إضافة العمل."
      }
    ]
  },
  "maid-duties-family-holiday": {
    "en": [
      {
        "question": "Is my family holiday automatically the maid’s annual leave?",
        "answer": "Keep the two calendars separate. Record whether the worker is taking annual leave, continuing agreed work locally or travelling with the family, then follow the applicable employment and service arrangements."
      },
      {
        "question": "Can the maid stay in our home while we travel?",
        "answer": "Settle the living arrangement with the legal employer or agency and record accommodation, meals, access, duties, work/rest schedule and the responsible local contact before departure."
      },
      {
        "question": "Can I send the worker to help a friend during our holiday?",
        "answer": "Treat work for another household as a separate employment or beneficiary arrangement. Discuss the proposed change with the provider and follow the applicable official route before assigning work."
      },
      {
        "question": "Should the worker supervise repairs while we are away?",
        "answer": "Do not assume maintenance supervision is part of routine household help. Name a family representative for contractor decisions and include only the specific, suitable tasks agreed in the worker’s scope."
      }
    ],
    "ar": [
      {
        "question": "هل تعد إجازة الأسرة تلقائياً إجازة سنوية للعاملة؟",
        "answer": "افصل الجدولين. سجل إن كانت العاملة تأخذ إجازتها أو تواصل العمل المتفق عليه محلياً أو تسافر مع الأسرة، ثم اتبع ترتيب التوظيف والخدمة المنطبق."
      },
      {
        "question": "هل تبقى العاملة في منزلنا أثناء السفر؟",
        "answer": "رتب المعيشة مع صاحب العمل القانوني أو المكتب، وسجل السكن والطعام والدخول والمهام وجدول العمل والراحة ومسؤول التواصل المحلي قبل المغادرة."
      },
      {
        "question": "هل أرسل العاملة إلى منزل صديق خلال إجازتنا؟",
        "answer": "تعامل مع العمل لمنزل آخر بوصفه ترتيب توظيف أو استخدام مستقلاً. ناقش التغيير المقترح مع مقدم الخدمة واتبع المسار الرسمي المنطبق قبل إسناد العمل."
      },
      {
        "question": "هل تشرف العاملة على الإصلاحات أثناء غيابنا؟",
        "answer": "لا تدرج الإشراف على الصيانة تلقائياً ضمن المساعدة المنزلية المعتادة. حدد ممثلاً للأسرة لقرارات المقاولين، واقتصر على المهام المحددة والملائمة المسجلة في النطاق."
      }
    ]
  },
  "domestic-worker-leave-travel-planning": {
    "en": [
      {
        "question": "Is annual-leave cover automatically free under a monthly package?",
        "answer": "Use the actual monthly agreement for the service terms and arrange any additional cover through a separate written scope and price. Employment leave rights and customer cover charges are different records."
      },
      {
        "question": "Can the worker keep answering daily work questions during annual leave?",
        "answer": "Prepare the task handover and decision contacts before leave begins. Direct everyday operational questions to the family contact or cover-service coordinator rather than relying on the worker throughout the leave."
      },
      {
        "question": "Is a temporary cover booking the same as a replacement request?",
        "answer": "No. Planned cover addresses a defined absence and task list. Replacement eligibility concerns the applicable employment/service conditions and should be reviewed through its own process."
      },
      {
        "question": "What should I prepare when the regular worker returns?",
        "answer": "Record the end of the cover service, keys and equipment returned, any household changes and the next priority list. Use a short return handover to resume the normal arrangement."
      }
    ],
    "ar": [
      {
        "question": "هل تكون المساعدة البديلة خلال الإجازة مجانية تلقائياً في الباقة الشهرية؟",
        "answer": "ارجع إلى اتفاق الخدمة الشهرية، ورتب أي مساعدة إضافية بنطاق وسعر مكتوبين بصورة مستقلة. فحقوق الإجازة الوظيفية ورسوم تغطية العميل مسألتان مختلفتان."
      },
      {
        "question": "هل تستمر العاملة بالإجابة عن أسئلة العمل اليومية أثناء إجازتها؟",
        "answer": "جهز تسليم المهام ومسؤولي القرارات قبل بدء الإجازة. ووجه الأسئلة التشغيلية اليومية إلى مسؤول الأسرة أو منسق الخدمة البديلة بدلاً من الاعتماد على العاملة طوال الإجازة."
      },
      {
        "question": "هل الحجز البديل المؤقت هو نفسه طلب الاستبدال؟",
        "answer": "لا. تعالج التغطية المخططة غياباً محدداً وقائمة مهام. أما أهلية الاستبدال، فترتبط بشروط التوظيف أو الخدمة المنطبقة وتراجع بمسارها المستقل."
      },
      {
        "question": "ماذا أجهز عند عودة العاملة الأساسية؟",
        "answer": "سجل انتهاء الخدمة البديلة وإعادة المفاتيح والمعدات والتغييرات المنزلية وقائمة الأولويات التالية. ويساعد التسليم المختصر على استئناف الترتيب المعتاد."
      }
    ]
  },
  "moving-home-emirate-with-domestic-worker": {
    "en": [
      {
        "question": "Does moving to another emirate automatically mean changing the maid’s employer?",
        "answer": "No. First identify whether the legal employer is actually changing. A household address move, an agency service change and a change of employer are separate matters to review against the documents."
      },
      {
        "question": "Which official record should I update after moving?",
        "answer": "Review the records attached to the actual arrangement. ICP's contact-data update covers address information. MOHRE's cited permit-details service concerns incorrect visa-application information, so it should not be treated as an automatic moving-house step."
      },
      {
        "question": "Can the maid do all the heavy moving work?",
        "answer": "Keep the worker’s duties, suitability and safety in view. Assign heavy lifting, installations and specialist work to the appropriate professionals, and record any agreed household packing or settling-in tasks separately."
      },
      {
        "question": "What should I send INAYA before changing the service address?",
        "answer": "Prepare the current service arrangement, new emirate and area, move date, accommodation or commute plan and any revised duties or schedule. Discuss the written changes before using the new routine."
      }
    ],
    "ar": [
      {
        "question": "هل الانتقال إلى إمارة أخرى يعني تلقائياً تغيير صاحب عمل العاملة؟",
        "answer": "لا. حدد أولاً إن كان صاحب العمل القانوني سيتغير فعلياً. فانتقال عنوان الأسرة وتعديل خدمة المكتب وتغيير صاحب العمل مسائل مستقلة تراجع وفق المستندات."
      },
      {
        "question": "ما السجل الرسمي الذي أحدثه بعد الانتقال؟",
        "answer": "راجع سجلات الترتيب الفعلي. تشمل خدمة تحديث بيانات التواصل لدى الهيئة العنوان. أما خدمة بيانات التصريح المذكورة لدى الوزارة، فتعالج معلومات طلب التأشيرة المسجلة خطأ، ولا تعامل كخطوة تلقائية للانتقال إلى بيت جديد."
      },
      {
        "question": "هل تتولى العاملة جميع أعمال النقل الثقيلة؟",
        "answer": "راع مهام العاملة وملاءمتها وسلامتها. أسند الحمل الثقيل والتركيب والأعمال المتخصصة إلى المختصين، وسجل ما تتفق عليه من تعبئة وتنظيم منزلي بصورة مستقلة."
      },
      {
        "question": "ماذا أرسل إلى عناية قبل تعديل عنوان الخدمة؟",
        "answer": "جهز الترتيب الحالي والإمارة والمنطقة الجديدتين وتاريخ الانتقال وخطة السكن أو التنقل وأي تعديل في المهام أو الجدول. ناقش التغييرات المكتوبة قبل بدء الروتين الجديد."
      }
    ]
  },
  "domestic-worker-hiring-costs-uae": {
    "en": [
      {
        "question": "Are the six-month and yearly prices total contract prices?",
        "answer": "No. The six-month rate is AED 3,250 per month and the twelve-month rate is AED 3,000 per month. Multiply the monthly rate by the stated commitment to compare package prices over that period."
      },
      {
        "question": "Do live-in and live-out arrangements have different INAYA package prices?",
        "answer": "The published package price is the same for live-in and live-out. The written scope records accommodation, meals, transport, supplies and other responsibilities for the selected arrangement."
      },
      {
        "question": "Should I compare an agency monthly fee with a worker’s salary alone?",
        "answer": "Compare the full arrangement. A salary alone and an agency-managed service charge are different figures; record employment responsibilities and the items included in each proposal."
      },
      {
        "question": "Does the package-price difference determine my final payable bill?",
        "answer": "The table compares the stated package rates arithmetically. The final quotation records applicable tax, separately priced services and the payment obligations for your selected agreement."
      }
    ],
    "ar": [
      {
        "question": "هل سعرا الستة أشهر والسنة إجماليان لكامل العقد؟",
        "answer": "لا. السعر هو 3,250 درهماً لكل شهر عند الالتزام بستة أشهر، و3,000 درهم لكل شهر عند الالتزام باثني عشر شهراً. تضرب القيمة الشهرية في مدة الالتزام عند مقارنة أسعار الباقات."
      },
      {
        "question": "هل تختلف أسعار عناية للمقيمة وغير المقيمة؟",
        "answer": "سعر الباقة المنشور واحد للمقيمة وغير المقيمة. ويسجل النطاق المكتوب مسؤوليات السكن والطعام والنقل والمستلزمات بحسب الترتيب المختار."
      },
      {
        "question": "هل أقارن رسم الوكالة الشهري براتب العاملة وحده؟",
        "answer": "قارن الترتيب كاملاً. فالراتب وحده ومبلغ الخدمة التي تديرها الوكالة رقمان مختلفان؛ سجل مسؤوليات التوظيف والبنود المشمولة في كل عرض."
      },
      {
        "question": "هل يحدد فرق سعر الباقة فاتورتي النهائية؟",
        "answer": "يقارن الجدول أسعار الباقات حسابياً. ويبين عرض السعر النهائي الضريبة المنطبقة والخدمات المسعرة بصورة منفصلة والتزامات السداد في اتفاقك."
      }
    ]
  },
  "one-maid-two-helpers-workload": {
    "en": [
      {
        "question": "Does a large villa automatically require two maids?",
        "answer": "Use the actual workload, layout, schedule and supervision needs to decide. A fixed bedroom-to-worker ratio cannot account for overlapping duties or the household’s priorities."
      },
      {
        "question": "Can one helper do childcare and cleaning?",
        "answer": "A combined role needs suitable experience and a realistic agreed schedule. Name the person supervising a child and move competing cleaning duties so both responsibilities are clear."
      },
      {
        "question": "Does a live-in arrangement provide overnight cover automatically?",
        "answer": "Residence and working schedule are separate. Record work, rest and any particular support needs in the applicable agreement; living in the home does not mean continuous work."
      },
      {
        "question": "What should I bring when discussing two household roles?",
        "answer": "Bring a daily routine, a list of fixed and flexible tasks, the periods when responsibilities overlap, and the relevant childcare or other experience required for each role."
      }
    ],
    "ar": [
      {
        "question": "هل تحتاج الفيلا الكبيرة تلقائياً إلى عاملتين؟",
        "answer": "يرتبط القرار بعبء العمل وتوزيع المنزل والجدول واحتياجات الإشراف. النسبة الثابتة بين عدد الغرف وعدد العاملات لا تعكس المهام المتزامنة أو أولويات الأسرة."
      },
      {
        "question": "هل تستطيع عاملة واحدة رعاية الأطفال والتنظيف؟",
        "answer": "يحتاج الدور المشترك إلى خبرة مناسبة وجدول واقعي متفق عليه. حدد الشخص المشرف على الطفل، وانقل أعمال التنظيف المتعارضة حتى تتضح المسؤوليتان."
      },
      {
        "question": "هل توفر العاملة المقيمة تغطية ليلية تلقائياً؟",
        "answer": "الإقامة وجدول العمل أمران منفصلان. يسجل الاتفاق العمل والراحة واحتياجات الدعم الخاصة؛ فالسكن في المنزل لا يعني العمل المتواصل."
      },
      {
        "question": "ماذا أحضر عند مناقشة دورين منزليين؟",
        "answer": "أحضر الروتين اليومي والمهام الثابتة والمرنة وأوقات تعارض المسؤوليات والخبرة المطلوبة لكل دور، بما في ذلك رعاية الأطفال أو أي مسؤولية أخرى."
      }
    ]
  },
  "agreeing-domestic-worker-household-duties": {
    "en": [
      {
        "question": "Can I add a new duty simply because it takes place inside the home?",
        "answer": "Review the existing role, contract, relevant skills and schedule first. Different household tasks can involve different responsibilities and cannot be treated as automatically interchangeable."
      },
      {
        "question": "What should happen when the new duty conflicts with cleaning time?",
        "answer": "Identify which flexible work moves, is reduced or is removed. Record the updated priorities rather than adding the new responsibility to an unchanged task list."
      },
      {
        "question": "Should I discuss a scope change with the agency?",
        "answer": "For an agency-managed service, share the proposed change with the service contact so role, schedule, resources and any revised commercial terms are recorded together."
      },
      {
        "question": "Does adding duties mean the worker must perform clinical care?",
        "answer": "No. Household assistance and licensed clinical care have different scopes. Use the appropriate licensed healthcare service for clinical needs."
      }
    ],
    "ar": [
      {
        "question": "هل أضيف أي مهمة لمجرد أنها داخل المنزل؟",
        "answer": "راجع الدور الحالي والعقد والخبرة والجدول أولاً. تختلف مسؤوليات الأعمال المنزلية، ولا تعد جميعها متبادلة تلقائياً."
      },
      {
        "question": "ماذا أفعل إذا تعارضت المهمة الجديدة مع التنظيف؟",
        "answer": "حدد العمل المرن الذي سينقل أو يقلل أو يلغى، وسجل الأولويات المعدلة بدلاً من إضافة المسؤولية إلى قائمة ثابتة دون تغيير."
      },
      {
        "question": "هل أناقش تعديل النطاق مع الوكالة؟",
        "answer": "في الخدمة التي تديرها الوكالة، شارك التغيير المقترح مع جهة التواصل لتوثيق الدور والجدول والموارد وأي شروط تجارية معدلة معاً."
      },
      {
        "question": "هل تعني إضافة المهام تكليف العاملة برعاية سريرية؟",
        "answer": "لا. يختلف نطاق المساعدة المنزلية عن نطاق الرعاية السريرية المرخصة. تستخدم الخدمة الصحية المرخصة المناسبة عند الحاجة إلى أعمال سريرية."
      }
    ]
  },
  "maid-daily-instructions-handover-template": {
    "en": [
      {
        "question": "Should I write every household task on the daily sheet?",
        "answer": "Write the agreed priorities for that day and separate flexible work. Keep the full household routine in a wider plan so the daily sheet remains usable."
      },
      {
        "question": "How can I check that an instruction is understood?",
        "answer": "Demonstrate the relevant method, then invite the worker to explain the next step or show the agreed approach. Use the written note as a reminder rather than relying on a long verbal list."
      },
      {
        "question": "What should be recorded when a task is not completed?",
        "answer": "Record the practical reason, such as a changed priority, missing supply or appliance issue, and identify who will make the next decision."
      },
      {
        "question": "Does a handover note authorise new duties?",
        "answer": "No. Keep instructions within the agreed role. Review any meaningful change of responsibility through the applicable service and employment arrangement."
      }
    ],
    "ar": [
      {
        "question": "هل أضع كل مهام المنزل في الورقة اليومية؟",
        "answer": "اكتب أولويات ذلك اليوم المتفق عليها، وافصل الأعمال المرنة. احتفظ بالروتين الكامل في خطة أوسع كي تبقى الورقة اليومية سهلة الاستخدام."
      },
      {
        "question": "كيف أتحقق من فهم التعليمات؟",
        "answer": "اشرح الطريقة عملياً، ثم اطلب من العاملة وصف الخطوة التالية أو عرض الأسلوب المتفق عليه. استخدم الملاحظة المكتوبة للتذكير بدلاً من الاعتماد على قائمة شفهية طويلة."
      },
      {
        "question": "ماذا يسجل عند عدم إكمال مهمة؟",
        "answer": "يسجل السبب العملي، مثل تغير الأولوية أو نقص المستلزمات أو عطل الجهاز، مع تحديد الشخص الذي سيتخذ القرار التالي."
      },
      {
        "question": "هل تسمح ورقة التسليم بإضافة مهام جديدة؟",
        "answer": "لا. تبقى التعليمات ضمن الدور المتفق عليه. وتراجع التغييرات الجوهرية في المسؤولية من خلال ترتيب الخدمة والتوظيف المطبق."
      }
    ]
  },
  "domestic-worker-contract-permit-residence-cancellation": {
    "en": [
      {
        "question": "Does cancelling my monthly maid service automatically cancel the worker’s residence?",
        "answer": "A service-ending request and an official residence-cancellation result are different records. Identify the employer and the official transaction applicable to the worker’s arrangement."
      },
      {
        "question": "Must every record be cancelled through a separate manual application?",
        "answer": "No universal manual sequence applies to every case. ICP directs domestic-worker residence cancellation through MOHRE or the Domestic Work Bundle, where linked processes can be handled through the applicable service."
      },
      {
        "question": "Can I use a company employee’s cancellation checklist for a domestic worker?",
        "answer": "Use the dedicated domestic-worker service and the relevant immigration instructions. Private-sector employee requirements should not automatically be applied to a domestic-worker case."
      },
      {
        "question": "What proves that the cancellation request has finished?",
        "answer": "Keep the official completed transaction result and check the resulting status and next-step instructions. An application receipt alone records submission, not completion."
      }
    ],
    "ar": [
      {
        "question": "هل يلغي إنهاء خدمة الخادمة الشهرية إقامة العاملة تلقائياً؟",
        "answer": "طلب إنهاء الخدمة ونتيجة إلغاء الإقامة الرسمية سجلان مختلفان. حدد صاحب العمل والمعاملة الرسمية المناسبة لترتيب العاملة."
      },
      {
        "question": "هل يلزم تقديم طلب يدوي منفصل لكل سجل؟",
        "answer": "لا يوجد تسلسل يدوي موحد لكل الحالات. توجه الهيئة إلغاء إقامة العامل المساعد عبر الوزارة أو باقة العمل المنزلي، حيث يمكن ربط الإجراءات ذات الصلة ضمن الخدمة المطبقة."
      },
      {
        "question": "هل أستخدم قائمة إلغاء موظف شركة للعامل المساعد؟",
        "answer": "استخدم خدمة العمالة المساعدة المخصصة وتعليمات الإقامة ذات الصلة. لا تطبق متطلبات موظف القطاع الخاص تلقائياً على حالة العامل المساعد."
      },
      {
        "question": "ما الذي يثبت اكتمال الإلغاء؟",
        "answer": "احتفظ بنتيجة المعاملة الرسمية المكتملة، وراجع الوضع الناتج وتعليمات الخطوة التالية. إيصال الطلب وحده يثبت التقديم ولا يثبت الاكتمال."
      }
    ]
  }
};
