import type { Lang } from './service-page-copy';

type Benefit = { title: Record<Lang, string>; text: Record<Lang, string> };
const benefit = (enTitle: string, en: string, arTitle: string, ar: string): Benefit => ({ title: { en: enTitle, ar: arTitle }, text: { en, ar } });

// Service-specific summaries of the existing published duty and coordination
// scope. These do not extend package inclusions, qualifications or availability.
export const serviceSupportBenefits: Record<string, Benefit[]> = {
  'live-in-maid': [
    benefit('Residence planning', 'Discuss accommodation and privacy alongside the daily role, with working hours and rest agreed separately.', 'ترتيب الإقامة', 'ناقش السكن والخصوصية إلى جانب الدور اليومي، واتفق على ساعات العمل والراحة بصورة منفصلة.'),
    benefit('Individual household fit', 'Review the person’s relevant cleaning, laundry and kitchen experience against your actual household priorities.', 'ملاءمة فردية للمنزل', 'راجع خبرة المرشحة في التنظيف والغسيل والمطبخ وفق أولويات منزلك الفعلية.'),
    benefit('A clear home handover', 'Record household instructions, the family contact and agreed follow-up before the live-in arrangement starts.', 'تسليم واضح لتعليمات المنزل', 'سجل تعليمات المنزل ومسؤول التواصل والمتابعة المتفق عليها قبل بدء ترتيب الإقامة.')
  ],
  'live-out-maid': [
    benefit('A planned visit schedule', 'Coordinate arrival, departure and home access around the agreed visits, without requiring residence in your home.', 'جدول زيارات منظم', 'نسق الوصول والمغادرة والدخول إلى المنزل وفق الزيارات المتفق عليها، دون اشتراط الإقامة في منزلك.'),
    benefit('A practical task list', 'Define the rooms, cleaning, laundry or ironing priorities to fit the agreed working period.', 'قائمة مهام عملية', 'حدد الغرف وأولويات التنظيف والغسيل أو الكي بما يناسب فترة العمل المتفق عليها.'),
    benefit('Continuity between visits', 'Use a clear handover of completed work and next priorities; confirm supplies and transport responsibilities in writing.', 'تنسيق العمل بين الزيارات', 'وضح العمل المنجز وأولويات الزيارة التالية، وأكد مسؤوليات المستلزمات والنقل كتابةً.')
  ],
  housemaid: [
    benefit('The right everyday role', 'Match the enquiry to cleaning, laundry, ironing and room care rather than relying on a broad job title.', 'دور مناسب للعمل اليومي', 'حدد احتياجك من التنظيف والغسيل والكي وترتيب الغرف بدلاً من الاعتماد على مسمى وظيفي عام.'),
    benefit('Household priorities first', 'Discuss the workload and routine so the proposed duties and schedule reflect your home.', 'أولويات المنزل أولاً', 'ناقش حجم العمل والروتين لتناسب المهام والجدول المقترحان احتياجات منزلك.'),
    benefit('Separate specialist duties', 'Discuss cooking or childcare as specific responsibilities, with relevant individual experience and written scope.', 'تحديد المهام الخاصة', 'ناقش الطبخ أو رعاية الأطفال كمسؤوليات محددة، مع مراجعة الخبرة الفردية والنطاق المكتوب.')
  ],
  housekeeping: [
    benefit('Room-by-room priorities', 'Organise cleaning around named rooms and desired results, with the most important tasks agreed first.', 'أولويات كل غرفة', 'نظم التنظيف حسب الغرف والنتائج المطلوبة، واتفق على المهام الأهم أولاً.'),
    benefit('Surface and appliance instructions', 'Explain delicate finishes and equipment use before work; agree which products and tools will be supplied.', 'تعليمات الأسطح والأجهزة', 'وضح الخامات الحساسة واستخدام الأجهزة قبل العمل، واتفق على من يوفر المنتجات والأدوات.'),
    benefit('Laundry within the agreed visit', 'Add laundry or ironing when included in the task list; confirm time and scope without assuming specialist deep cleaning.', 'الغسيل ضمن نطاق الزيارة', 'أضف الغسيل أو الكي عند إدراجهما في المهام، وأكد الوقت والنطاق دون افتراض شمول التنظيف العميق المتخصص.')
  ],
  'full-time-maid': [
    benefit('A regular household workload', 'Discuss recurring cleaning, laundry and kitchen assistance to define a realistic full-time role.', 'عمل منزلي منتظم', 'ناقش التنظيف والغسيل والمساعدة في المطبخ بصورة منتظمة لتحديد دور واقعي بدوام كامل.'),
    benefit('Hours and residence clarified', 'Agree daily and weekly hours and rest, then confirm live-in or live-out residence separately.', 'توضيح الساعات والسكن', 'اتفق على الساعات اليومية والأسبوعية والراحة، ثم أكد الإقامة داخل المنزل أو خارجه بصورة منفصلة.'),
    benefit('Consistent task communication', 'Record priorities and family instructions so the worker and household understand the same routine.', 'تواصل واضح بشأن المهام', 'سجل الأولويات وتعليمات الأسرة ليكون الروتين مفهوماً لدى العاملة والأسرة معاً.')
  ],
  'part-time-maid': [
    benefit('A choice of visit length', 'Compare the published four-hour and eight-hour packages against the tasks you need; confirm availability before booking.', 'اختيار مدة الزيارة', 'قارن باقتي الأربع والثماني ساعات المنشورتين بالمهام المطلوبة، وأكد التوفر قبل الحجز.'),
    benefit('Priorities that fit the visit', 'Agree the rooms and cleaning, laundry or kitchen tasks to address first within the chosen time.', 'أولويات تناسب الزيارة', 'اتفق على الغرف ومهام التنظيف أو الغسيل أو المطبخ ذات الأولوية ضمن الوقت المختار.'),
    benefit('Arrival preparation', 'Coordinate the address, access and arrival window; record who provides products, equipment and transport.', 'الاستعداد للوصول', 'نسق العنوان والدخول وفترة الوصول، وسجل مسؤولية توفير المنتجات والمعدات والنقل.')
  ],
  'monthly-maid-contract': [
    benefit('Salary administration', 'The applicable managed monthly agreement includes the agreed worker salary and documented payment administration.', 'إدارة الراتب', 'يشمل الاتفاق الشهري المدار المنطبق راتب العاملة المتفق عليه وإدارة السداد الموثقة.'),
    benefit('Applicable employment processing', 'Review the published monthly employment, permit, residence and insurance benefits against your written agreement.', 'الإجراءات الوظيفية المنطبقة', 'راجع مزايا التوظيف والتصاريح والإقامة والتأمين الشهرية المنشورة وفق اتفاقك المكتوب.'),
    benefit('Service follow-up', 'INAYA coordinates agreed follow-up and administers eligible replacement requests under the monthly terms.', 'متابعة الخدمة', 'تنسق عناية المتابعة المتفق عليها وتدير طلبات الاستبدال المؤهلة وفق الشروط الشهرية.')
  ],
  'on-demand-domestic-help': [
    benefit('Support for a particular occasion', 'Explain guest preparation, moving-day household tasks or another short-term need so the request has a clear purpose.', 'دعم لمناسبة محددة', 'وضح تجهيز المنزل للضيوف أو المهام المنزلية يوم الانتقال أو احتياجاً مؤقتاً آخر ليكون الطلب محدداً.'),
    benefit('A defined short-term task list', 'Identify the work, location and time window rather than treating an occasional request as an ongoing role.', 'قائمة مهام مؤقتة محددة', 'حدد العمل والموقع والفترة المطلوبة بدلاً من اعتبار الطلب المؤقت دوراً مستمراً.'),
    benefit('Availability checked before confirmation', 'The team reviews the proposed timing and scope; an urgent enquiry does not reserve immediate support.', 'مراجعة التوفر قبل التأكيد', 'يراجع الفريق التوقيت والنطاق المقترحين، ولا يحجز الاستفسار العاجل دعماً فورياً.')
  ],
  nanny: [
    benefit('Childcare experience matched to your family', 'Discuss the children’s ages and individual care needs, then review relevant experience and available references.', 'خبرة رعاية تناسب الأسرة', 'ناقش أعمار الأطفال واحتياجاتهم الفردية، ثم راجع الخبرة المناسبة والمراجع المتاحة.'),
    benefit('Parent-led daily routines', 'Agree supervision, play, meals and hygiene according to parent instructions and the defined childcare role.', 'روتين يومي بتوجيه الوالدين', 'اتفق على الإشراف واللعب والوجبات والنظافة وفق تعليمات الوالدين ودور رعاية الأطفال المحدد.'),
    benefit('School preparation and updates', 'Discuss nursery or school routines, handovers and parent communication separately from general housekeeping duties.', 'الاستعداد للمدرسة والتحديثات', 'ناقش روتين الحضانة أو المدرسة وتسليم الرعاية والتواصل مع الوالدين بصورة منفصلة عن مهام التنظيف العامة.')
  ],
  'executive-nannies': [
    benefit('Structured childcare planning', 'Describe learning and daily childcare routines so individual experience can be considered against the actual role.', 'تخطيط منظم لرعاية الأطفال', 'وضح روتين التعلم والرعاية اليومية لمراجعة الخبرة الفردية وفق الدور الفعلي.'),
    benefit('Travel and schedule discussion', 'Explain planned travel and changing household schedules before agreeing the nanny’s responsibilities.', 'مناقشة السفر والجدول', 'وضح السفر المخطط له وتغيرات جدول الأسرة قبل الاتفاق على مسؤوليات المربية.'),
    benefit('Privacy and parent communication', 'Set household privacy expectations and handover instructions; the executive title alone does not establish qualifications.', 'الخصوصية والتواصل مع الوالدين', 'حدد توقعات الخصوصية وتعليمات تسليم الرعاية، فالمسمى التنفيذي وحده لا يثبت المؤهلات.')
  ],
  babysitting: [
    benefit('Care for a defined time window', 'Discuss an evening, weekend or event with clear supervision and arrival and departure times.', 'رعاية لفترة محددة', 'ناقش رعاية مسائية أو في عطلة أو مناسبة مع تحديد الإشراف وأوقات الوصول والمغادرة.'),
    benefit('Familiar parent instructions', 'Explain play, meals, hygiene reminders and the child’s routine before the agreed period begins.', 'تعليمات واضحة من الوالدين', 'وضح اللعب والوجبات والتذكير بالنظافة وروتين الطفل قبل بدء الفترة المتفق عليها.'),
    benefit('A clear care handover', 'Agree parent updates and contact arrangements, keeping occasional supervision distinct from continuing nanny duties.', 'تسليم واضح للرعاية', 'اتفق على تحديثات الوالدين ووسائل التواصل، مع فصل الإشراف المؤقت عن مهام المربية المستمرة.')
  ],
  'newborn-care': [
    benefit('Support around the baby’s routine', 'Discuss practical feeding and hygiene routines according to the parents’ instructions and agreed role.', 'دعم روتين المولود', 'ناقش المساعدة العملية في التغذية والنظافة وفق تعليمات الوالدين والدور المتفق عليه.'),
    benefit('Relevant individual experience', 'Ask about the proposed carer’s newborn experience and available training evidence rather than assuming a qualification.', 'خبرة فردية مناسبة', 'اسأل عن خبرة المرشحة مع المواليد وأدلة التدريب المتاحة بدلاً من افتراض مؤهل معين.'),
    benefit('Non-clinical care boundaries', 'Record family instructions and handovers; medical treatment and nursing require an appropriate healthcare provider.', 'حدود الرعاية غير الطبية', 'سجل تعليمات الأسرة وتسليم الرعاية، فالعلاج الطبي والتمريض يحتاجان إلى مقدم رعاية صحية مناسب.')
  ],
  'home-cooking': [
    benefit('Meals that reflect your household', 'Discuss familiar recipes, family preferences and lunch-box needs before agreeing the cooking role.', 'وجبات تناسب المنزل', 'ناقش الوصفات المعتادة وتفضيلات الأسرة ووجبات المدرسة قبل الاتفاق على دور الطبخ.'),
    benefit('A workable preparation routine', 'Plan cooking times, ingredients and meal priorities around the family’s actual daily schedule.', 'روتين عملي للتحضير', 'نظم أوقات الطبخ والمكونات وأولويات الوجبات وفق جدول الأسرة اليومي الفعلي.'),
    benefit('Clear kitchen responsibilities', 'Explain equipment, dietary concerns and agreed cleaning tasks; confirm responsibilities before meal preparation starts.', 'مسؤوليات واضحة في المطبخ', 'وضح الأجهزة والاعتبارات الغذائية ومهام التنظيف المتفق عليها، وأكد المسؤوليات قبل بدء التحضير.')
  ],
  'private-chefs': [
    benefit('A menu brief for your occasion', 'Describe the home dining plan, weekly menu or private gathering so culinary expectations are clear.', 'تصور قائمة يناسب المناسبة', 'وضح خطة الطعام المنزلي أو القائمة الأسبوعية أو التجمع الخاص لتحديد التوقعات في الطبخ.'),
    benefit('Experience relevant to the menu', 'Review the individual’s cooking experience against the dishes and presentation you want to discuss.', 'خبرة تناسب القائمة', 'راجع خبرة المرشح في الطبخ وفق الأطباق وطريقة التقديم المطلوب مناقشتهما.'),
    benefit('Cooking and event roles separated', 'Agree kitchen duties, timing and ingredients; discuss serving staff or other gathering support as separate responsibilities.', 'فصل الطبخ عن أدوار المناسبة', 'اتفق على مهام المطبخ والتوقيت والمكونات، وناقش طاقم التقديم أو دعم المناسبة كمسؤوليات منفصلة.')
  ],
  'personal-chef': [
    benefit('Recipe and taste matching', 'Discuss the meals you actually want and the proposed person’s relevant recipe experience.', 'ملاءمة الوصفات والذوق', 'ناقش الوجبات المطلوبة فعلياً وخبرة المرشح في الوصفات المناسبة.'),
    benefit('Dietary preferences discussed clearly', 'Explain allergies and dietary instructions before agreeing the menu; do not assume a clinical diet-planning service.', 'توضيح التفضيلات الغذائية', 'وضح الحساسية والتعليمات الغذائية قبل الاتفاق على القائمة، ولا تفترض وجود خدمة تخطيط غذائي طبي.'),
    benefit('Daily or occasion-based planning', 'Agree cooking times and kitchen responsibilities for regular meals or a particular occasion.', 'تخطيط يومي أو لمناسبة', 'اتفق على أوقات الطبخ ومسؤوليات المطبخ للوجبات المنتظمة أو لمناسبة محددة.')
  ],
  'kitchen-helper': [
    benefit('Preparation assistance', 'Define washing and preparation tasks alongside the person responsible for cooking and the menu.', 'المساعدة في التحضير', 'حدد مهام الغسل والتحضير بالتنسيق مع المسؤول عن الطبخ والقائمة.'),
    benefit('An organised kitchen workspace', 'Discuss dishwashing, counter care and storage organisation within the agreed helper role.', 'مساحة مطبخ منظمة', 'ناقش غسل الأواني والعناية بالأسطح وتنظيم التخزين ضمن دور المساعد المتفق عليه.'),
    benefit('Coordination around meals', 'Plan help before and after meals, distinguishing kitchen assistance from independent chef responsibilities.', 'تنسيق العمل حول الوجبات', 'نظم المساعدة قبل الوجبات وبعدها، مع فصل مساعدة المطبخ عن مسؤوليات الشيف المستقل.')
  ],
  'house-managers': [
    benefit('Household schedule coordination', 'Describe the staff schedules and recurring routines that need oversight rather than another cleaning role.', 'تنسيق جدول المنزل', 'وضح جداول العاملين والروتين المتكرر الذي يحتاج إلى إشراف بدلاً من دور تنظيف إضافي.'),
    benefit('Inventory and organisation', 'Discuss household inventory and organisation responsibilities with clear reporting and decision boundaries.', 'المخزون والتنظيم', 'ناقش مسؤوليات مخزون المنزل وتنظيمه مع توضيح التقارير وحدود اتخاذ القرار.'),
    benefit('A defined oversight role', 'Agree which activities are coordinated and which duties remain with other household staff.', 'دور إشرافي محدد', 'اتفق على الأنشطة التي يجري تنسيقها والمهام التي تبقى لدى بقية العاملين في المنزل.')
  ],
  'elder-care': [
    benefit('Support for the person’s routine', 'Discuss daily assistance, meals, comfort and practical mobility needs as individual household requirements.', 'دعم روتين الشخص', 'ناقش المساعدة اليومية والوجبات والراحة واحتياجات الحركة العملية كمتطلبات فردية للأسرة.'),
    benefit('Companionship and family updates', 'Agree a respectful daily presence, conversation and the way the family will receive routine updates.', 'المرافقة وتحديثات الأسرة', 'اتفق على حضور يومي يحترم الشخص والحديث معه وطريقة مشاركة التحديثات الروتينية مع الأسرة.'),
    benefit('Non-clinical responsibilities', 'Match practical duties to relevant experience; medical treatment, nursing and medication management are outside this role.', 'مسؤوليات غير طبية', 'طابق المهام العملية مع الخبرة المناسبة، فالعلاج والتمريض وإدارة الأدوية خارج هذا الدور.')
  ],
  'patient-care': [
    benefit('Practical daily living help', 'Discuss hygiene routines, meals, comfort and suitable household assistance according to the family’s instructions.', 'مساعدة عملية للحياة اليومية', 'ناقش روتين النظافة والوجبات والراحة والمساعدة المنزلية المناسبة وفق تعليمات الأسرة.'),
    benefit('A clearly agreed support plan', 'Describe the schedule, practical duties and family contact so the proposed non-clinical role is understood.', 'خطة دعم متفق عليها بوضوح', 'وضح الجدول والمهام العملية ومسؤول التواصل لتكون طبيعة الدور غير الطبي مفهومة.'),
    benefit('Healthcare kept with qualified providers', 'INAYA’s household support does not provide medical treatment, nursing or medication management.', 'إبقاء الرعاية الصحية لدى المختصين', 'لا يقدم الدعم المنزلي لدى عناية العلاج الطبي أو التمريض أو إدارة الأدوية.')
  ],
  'companion-care': [
    benefit('Conversation and company', 'Discuss when a regular friendly presence would be useful and the person’s preferred daily activities.', 'الحديث والرفقة', 'ناقش أوقات الحاجة إلى حضور ودي منتظم والأنشطة اليومية المفضلة للشخص.'),
    benefit('Light routine assistance', 'Identify agreed reminders and small everyday tasks, separately from broader personal care or cleaning.', 'مساعدة روتينية خفيفة', 'حدد التذكيرات والمهام اليومية البسيطة المتفق عليها بصورة منفصلة عن الرعاية الشخصية الأوسع أو التنظيف.'),
    benefit('Communication with the family', 'Agree timing, the household contact and routine updates so everyone understands the companionship role.', 'التواصل مع الأسرة', 'اتفق على الأوقات ومسؤول التواصل والتحديثات الروتينية ليكون دور المرافقة واضحاً للجميع.')
  ],
  recruitment: [
    benefit('A household role before a shortlist', 'Define duties, the working arrangement and language needs before considering proposed worker profiles.', 'تحديد الدور قبل قائمة المرشحات', 'حدد المهام وترتيب العمل والاحتياجات اللغوية قبل مراجعة ملفات العاملات المقترحة.'),
    benefit('Individual profile comparison', 'Discuss relevant experience and available information; a country preference does not establish skills or suitability.', 'مقارنة الملفات الفردية', 'ناقش الخبرة المناسبة والمعلومات المتاحة، فتفضيل الدولة لا يثبت المهارة أو الملاءمة.'),
    benefit('Interview and placement coordination', 'Review questions, documents and proposed placement steps, with costs and start conditions confirmed for the selected arrangement.', 'تنسيق المقابلة وخطوات البدء', 'راجع الأسئلة والمستندات وخطوات البدء المقترحة، مع تأكيد التكاليف وشروط البداية للترتيب المختار.')
  ],
  'maid-visa': [
    benefit('The correct transaction route', 'Separate a new application, renewal, cancellation or status follow-up before reviewing the case requirements.', 'مسار المعاملة المناسب', 'ميز بين الطلب الجديد والتجديد والإلغاء ومتابعة الحالة قبل مراجعة متطلبات المعاملة.'),
    benefit('Typing and document processing', 'INAYA supports domestic-worker application typing, document guidance and submission within the agreed case scope.', 'الطباعة ومعالجة المستندات', 'تدعم عناية طباعة طلبات العمالة المنزلية وإرشاد المستندات والتقديم ضمن نطاق الحالة المتفق عليه.'),
    benefit('Processing coordination and follow-up', 'Discuss applicable status, identity, medical-processing and insurance steps; official decisions and timing remain authority-dependent.', 'تنسيق الإجراءات والمتابعة', 'ناقش الخطوات المنطبقة للوضع والهوية وإجراءات الفحص والتأمين، فالقرارات والتوقيت يعتمدان على الجهات المختصة.')
  ],
  'maid-replacement': [
    benefit('Review of the actual service concern', 'Explain what is not working against the agreed duties and existing agreement, with relevant feedback.', 'مراجعة الملاحظة الفعلية على الخدمة', 'وضح ما لا يسير وفق المهام والاتفاق القائم، مع تقديم الملاحظات ذات الصلة.'),
    benefit('Eligibility explained against the terms', 'The team reviews the applicable replacement conditions rather than treating every request as an automatic entitlement.', 'توضيح الأهلية وفق الشروط', 'يراجع الفريق شروط الاستبدال المنطبقة بدلاً من اعتبار كل طلب استحقاقاً تلقائياً.'),
    benefit('Coordination of eligible next steps', 'Discuss revised requirements, available options and follow-up under the applicable service arrangement.', 'تنسيق الخطوات المؤهلة التالية', 'ناقش المتطلبات المعدلة والخيارات المتاحة والمتابعة وفق ترتيب الخدمة المنطبق.')
  ],
  'sponsorship-transfer': [
    benefit('Review of the existing arrangement', 'Start with the current worker and sponsor situation and the exact change requested.', 'مراجعة الترتيب القائم', 'ابدأ بوضع العاملة والكفيل الحالي والتغيير المطلوب تحديداً.'),
    benefit('A case-specific document discussion', 'Confirm eligibility questions and the current requirements for the proposed transfer before agreeing processing steps.', 'مناقشة مستندات الحالة', 'أكد أسئلة الأهلية والمتطلبات الحالية للنقل المقترح قبل الاتفاق على خطوات المعالجة.'),
    benefit('Applicable processing coordination', 'Discuss submission, status and follow-up responsibilities with written costs; the responsible authority decides approval.', 'تنسيق الإجراءات المنطبقة', 'ناقش مسؤوليات التقديم والوضع والمتابعة مع التكاليف المكتوبة، فالجهة المختصة تقرر الموافقة.')
  ],
  'experienced-maid': [
    benefit('Experience relevant to the duties', 'Compare previous household work with the cleaning, cooking or childcare responsibilities actually requested.', 'خبرة تناسب المهام', 'قارن العمل المنزلي السابق بمسؤوليات التنظيف أو الطبخ أو رعاية الأطفال المطلوبة فعلياً.'),
    benefit('Practical skill and communication discussion', 'Ask about specific tasks and the individual’s understanding of your instructions instead of relying on years alone.', 'مناقشة المهارة والتواصل عملياً', 'اسأل عن مهام محددة وفهم المرشحة لتعليماتك بدلاً من الاعتماد على عدد السنوات وحده.'),
    benefit('Household methods clarified', 'Identify appliance, recipe or routine instructions that still need explanation during the home handover.', 'توضيح أساليب العمل في المنزل', 'حدد تعليمات الأجهزة أو الوصفات أو الروتين التي لا تزال تحتاج إلى شرح عند تسليم العمل في المنزل.')
  ],
  'background-verification': [
    benefit('Profile information reviewed', 'Discuss identity details and experience notes relevant to the proposed household role.', 'مراجعة معلومات الملف', 'ناقش تفاصيل الهوية وملاحظات الخبرة ذات الصلة بالدور المنزلي المقترح.'),
    benefit('Available documents clarified', 'Ask which records can actually be reviewed and which information remains unconfirmed.', 'توضيح المستندات المتاحة', 'اسأل عن السجلات المتاحة للمراجعة فعلياً والمعلومات التي لا تزال غير مؤكدة.'),
    benefit('Specific household concerns addressed', 'Explain the concern and the scope of the review; this guidance is not a safety guarantee.', 'مناقشة مخاوف الأسرة المحددة', 'وضح الملاحظة ونطاق المراجعة، فهذا الإرشاد ليس ضماناً للسلامة.')
  ],
  'bespoke-household-management': [
    benefit('Several needs in one clear brief', 'Describe the household routines, organisation and responsibilities that need coordination.', 'احتياجات متعددة ضمن تصور واضح', 'وضح روتين المنزل وتنظيمه والمسؤوليات التي تحتاج إلى تنسيق.'),
    benefit('A coordinated household schedule', 'Discuss how the requested roles and daily priorities should fit together before confirming the arrangement.', 'جدول منزلي منسق', 'ناقش كيفية توافق الأدوار المطلوبة والأولويات اليومية قبل تأكيد الترتيب.'),
    benefit('Specialist scope identified separately', 'Clarify which services form the agreed plan; a tailored enquiry does not automatically include every specialist role.', 'تحديد نطاق الاختصاصات منفصلاً', 'وضح الخدمات الداخلة في الخطة المتفق عليها، فالطلب المخصص لا يشمل تلقائياً جميع الأدوار المتخصصة.')
  ],
  'floral-styling': [
    benefit('Styling for the actual space', 'Describe the room or household occasion and the floral presentation you want to discuss.', 'تنسيق يناسب المكان الفعلي', 'وضح الغرفة أو المناسبة المنزلية وطريقة عرض الزهور المطلوب مناقشتها.'),
    benefit('A clear presentation brief', 'Agree the arrangement requirements and timing before confirming the styling scope and costs.', 'تصور واضح للتنسيق', 'اتفق على متطلبات التنسيق والتوقيت قبل تأكيد نطاق الخدمة والتكاليف.'),
    benefit('Other gathering duties kept distinct', 'Discuss cleaning, cooking or serving support separately rather than assuming floral styling includes them.', 'فصل مهام المناسبة الأخرى', 'ناقش التنظيف أو الطبخ أو التقديم بصورة مستقلة بدلاً من افتراض شمولها مع تنسيق الزهور.')
  ],
  'relocation-support': [
    benefit('Household help around the move', 'Identify practical tasks before moving and while settling into the new home.', 'مساعدة منزلية حول الانتقال', 'حدد المهام العملية قبل الانتقال وأثناء الاستقرار في المنزل الجديد.'),
    benefit('New-home priorities organised', 'Describe the rooms, household routine and order of tasks needed for the agreed support.', 'تنظيم أولويات المنزل الجديد', 'وضح الغرف وروتين الأسرة وترتيب المهام المطلوبة للدعم المتفق عليه.'),
    benefit('Moving services confirmed separately', 'Clarify transport, packing and specialist moving requirements; these are not assumed household-support inclusions.', 'تأكيد خدمات النقل بصورة مستقلة', 'وضح احتياجات النقل والتغليف والانتقال المتخصص، فلا يفترض شمولها ضمن المساعدة المنزلية.')
  ],
  'pet-care-specialists': [
    benefit('The pet’s actual routine', 'Describe feeding, daily routine and the household instructions relevant to your pet-care enquiry.', 'روتين الحيوان الأليف الفعلي', 'وضح التغذية والروتين اليومي وتعليمات المنزل ذات الصلة بطلب رعاية الحيوان الأليف.'),
    benefit('Relevant individual experience', 'Discuss experience with the required pet-related duties instead of assuming a general household role is sufficient.', 'خبرة فردية مناسبة', 'ناقش الخبرة في المهام المطلوبة للحيوان الأليف بدلاً من افتراض كفاية الدور المنزلي العام.'),
    benefit('Clear household responsibility boundaries', 'Agree the specific pet-care role and schedule alongside any separate maid duties.', 'حدود واضحة لمسؤوليات المنزل', 'اتفق على دور رعاية الحيوان الأليف وجدوله إلى جانب أي مهام منفصلة للعاملة المنزلية.')
  ],
  'event-staffing': [
    benefit('A brief for your household gathering', 'Describe the occasion, guest-related tasks and practical coordination needed in the home.', 'تصور لتجمع الأسرة', 'وضح المناسبة والمهام المتعلقة بالضيوف والتنسيق العملي المطلوب في المنزل.'),
    benefit('Serving duties and timing agreed', 'Define the requested waiting and support duties, arrival time and household contact.', 'تحديد مهام التقديم والتوقيت', 'حدد مهام التقديم والمساعدة المطلوبة ووقت الوصول ومسؤول التواصل في المنزل.'),
    benefit('Other event services separated', 'Discuss cooking and floral presentation through their own scopes rather than assuming they form part of staffing.', 'فصل خدمات المناسبة الأخرى', 'ناقش الطبخ وتنسيق الزهور ضمن نطاق كل منهما بدلاً من افتراض شمولها ضمن توفير الطاقم.')
  ]
};
