import type { Lang, ServiceCopy } from './service-page-copy';
import { getService } from './services';

type Text = Record<Lang, string>;
type Brief = { overview: Text; prepare: Text; related: string[] };
// Editorial preparation guidance, grounded in services.ts and existing service copy.
// These are questions to clarify, not additional promised duties or requirements.
export const serviceContentBriefs: Record<string, Brief> = {
  'live-in-maid': {
    overview: { en: 'A live-in arrangement combines household duties with residence in the family home. Discuss the daily cleaning, laundry and meal-support routine alongside accommodation; living in and the scope of work are separate decisions.', ar: 'يجمع ترتيب الخادمة المقيمة بين المهام المنزلية والإقامة في منزل الأسرة. ناقش روتين التنظيف والغسيل ودعم الوجبات مع تفاصيل الإقامة؛ فالسكن ونطاق العمل قراران منفصلان.' },
    prepare: { en: 'Describe the accommodation available, the household routine and which daily tasks take priority. Compare live-out visits if accommodation is not part of your plan.', ar: 'وضح الإقامة المتاحة وروتين المنزل والمهام اليومية ذات الأولوية. قارن الزيارات غير المقيمة إذا لم تكن الإقامة ضمن خطتك.' }, related: ['live-out-maid', 'full-time-maid', 'housemaid']
  },
  'live-out-maid': {
    overview: { en: 'Live-out support is arranged around visits rather than residence in your home. The useful starting point is a visit plan: which rooms and tasks need attention, when access is possible and what can wait until another visit.', ar: 'يرتبط الدعم غير المقيم بالزيارات بدلاً من السكن في منزلك. تبدأ المقارنة بخطة للزيارة: الغرف والمهام المطلوبة، ومواعيد دخول المنزل، وما يمكن تأجيله لزيارة أخرى.' },
    prepare: { en: 'Share preferred visit days, access arrangements and the cleaning or laundry priorities. Part-time support describes hours, while live-out describes the accommodation arrangement.', ar: 'شارك أيام الزيارة المفضلة وترتيبات الدخول وأولويات التنظيف أو الغسيل. يصف الدوام الجزئي الساعات، بينما يصف العمل غير المقيم ترتيب الإقامة.' }, related: ['part-time-maid', 'live-in-maid', 'housekeeping']
  },
  housemaid: {
    overview: { en: 'Housemaid support focuses on everyday home tasks such as cleaning, laundry, ironing and room care. Separate those duties from childcare or cooking so that a broad household request does not hide a more specific role.', ar: 'يركز دعم عاملة المنزل على المهام اليومية مثل التنظيف والغسيل والكي والعناية بالغرف. افصل هذه المهام عن رعاية الأطفال أو الطبخ حتى لا يخفي الطلب المنزلي العام حاجة إلى دور محدد.' },
    prepare: { en: 'List the rooms, laundry routine and recurring household tasks. If childcare is the main need, review the nanny guide rather than assuming it is included in housemaid duties.', ar: 'حدد الغرف وروتين الغسيل والمهام المنزلية المتكررة. إذا كانت رعاية الأطفال هي الحاجة الأساسية، فراجع دليل المربية بدلاً من افتراض أنها مشمولة بمهام عاملة المنزل.' }, related: ['housekeeping', 'nanny', 'home-cooking']
  },
  housekeeping: {
    overview: { en: 'Housekeeping is a task-led cleaning and organization request. Bedrooms, living areas, laundry and kitchen organization can be discussed as a practical checklist rather than a general request for someone to manage every household activity.', ar: 'التنظيف وترتيب المنزل طلب يركز على مهام محددة. يمكن مناقشة غرف النوم والمعيشة والغسيل وتنظيم المطبخ ضمن قائمة عملية، بدلاً من طلب عام لإدارة جميع شؤون المنزل.' },
    prepare: { en: 'Identify the areas needing attention and the order in which cleaning tasks should be handled. Use the house-manager guide if your main need is coordination of people and household routines.', ar: 'حدد المناطق التي تحتاج عناية وترتيب أولويات التنظيف. راجع دليل مدير المنزل إذا كانت حاجتك الأساسية تنسيق العاملين وروتين المنزل.' }, related: ['housemaid', 'house-managers', 'part-time-maid']
  },
  'full-time-maid': {
    overview: { en: 'Full-time hiring addresses a continuing daily workload: cleaning, laundry and support around the family routine. It describes the working arrangement, not automatically where the worker lives; review live-in and live-out options separately.', ar: 'يعالج التوظيف بدوام كامل عبئاً يومياً مستمراً من التنظيف والغسيل ودعم روتين الأسرة. يصف ترتيب العمل ولا يحدد تلقائياً مكان إقامة العاملة؛ راجع خيارات الإقامة داخل المنزل أو خارجه بشكل منفصل.' },
    prepare: { en: 'Explain the recurring daily workload and which duties need consistent attention. Clarify accommodation separately before comparing full-time and part-time arrangements.', ar: 'وضح حجم العمل اليومي المتكرر والمهام التي تحتاج اهتماماً مستمراً. ناقش الإقامة بشكل منفصل قبل مقارنة الدوام الكامل والجزئي.' }, related: ['live-in-maid', 'live-out-maid', 'part-time-maid']
  },
  'part-time-maid': {
    overview: { en: 'Part-time help is useful when a defined set of cleaning, laundry or ironing tasks needs scheduled attention. A short task list makes the enquiry clearer than asking for the same scope as a full-time household role.', ar: 'تفيد المساعدة بدوام جزئي عندما تحتاج مهام محددة من التنظيف أو الغسيل أو الكي إلى وقت مجدول. تجعل قائمة مختصرة الطلب أوضح من طلب نطاق عمل مماثل لدور منزلي بدوام كامل.' },
    prepare: { en: 'State the preferred hours or visits and the tasks that matter most. Compare a monthly contract if the same work repeats regularly, without assuming either option is available on a particular date.', ar: 'حدد الساعات أو الزيارات المفضلة والمهام الأهم. قارن العقد الشهري إذا كان العمل نفسه يتكرر بانتظام، دون افتراض توفر أي خيار في تاريخ معين.' }, related: ['monthly-maid-contract', 'live-out-maid', 'on-demand-domestic-help']
  },
  'monthly-maid-contract': {
    overview: { en: 'A monthly maid enquiry concerns recurring visits and a defined household task plan. Compare the proposed schedule and duties with your actual routine; the word monthly alone does not explain the visit pattern or service scope.', ar: 'يتعلق طلب العقد الشهري بزيارات متكررة وخطة مهام منزلية محددة. قارن الجدول والمهام المقترحة بروتينك الفعلي؛ فكلمة شهري وحدها لا توضح نمط الزيارات أو نطاق الخدمة.' },
    prepare: { en: 'Bring a recurring cleaning checklist and preferred visit pattern. Review the confirmed agreement for included duties and support rather than treating this guide as a fixed package quotation.', ar: 'جهز قائمة التنظيف المتكرر ونمط الزيارات المفضل. راجع الاتفاق المؤكد لمعرفة المهام والدعم المشمول، ولا تعتبر هذا الدليل عرض سعر ثابتاً لباقة.' }, related: ['part-time-maid', 'housekeeping', 'full-time-maid']
  },
  'on-demand-domestic-help': {
    overview: { en: 'On-demand enquiries cover a particular household situation, such as guest preparation, moving-day tasks or short-term home support. Describe the occasion and task scope first; an urgent request is not confirmation of immediate availability.', ar: 'تغطي طلبات المساعدة عند الطلب حالة منزلية محددة، مثل تجهيز الضيوف أو مهام يوم الانتقال أو الدعم قصير المدى. وضح المناسبة ونطاق المهام أولاً؛ فالطلب العاجل لا يعني تأكيد التوفر الفوري.' },
    prepare: { en: 'Share the occasion, preferred date and the tasks you need help completing. Review relocation support for a move or event staffing for a gathering when that is the main purpose.', ar: 'شارك المناسبة والتاريخ المفضل والمهام التي تحتاج مساعدة لإنجازها. راجع دعم الانتقال أو فريق المناسبات عندما يكون الانتقال أو التجمع هو الغرض الأساسي.' }, related: ['part-time-maid', 'relocation-support', 'event-staffing']
  },
  nanny: {
    overview: { en: 'Nanny support centres on the child’s daily routine, supervision and communication with parents. Compare the requested childcare duties with the individual profile rather than treating childcare as an extra item on a general cleaning checklist.', ar: 'يركز دعم المربية على روتين الطفل اليومي والإشراف والتواصل مع الوالدين. قارن مهام رعاية الطفل المطلوبة بالملف الفردي بدلاً من اعتبارها بنداً إضافياً في قائمة التنظيف العامة.' },
    prepare: { en: 'Explain the children’s ages, daily routine and the childcare experience you want to review. Compare babysitting for occasional supervision and newborn care for an early-month routine.', ar: 'وضح أعمار الأطفال وروتينهم اليومي وخبرة الرعاية التي تريد مراجعتها. قارن جليسة الأطفال للإشراف المؤقت ورعاية المواليد لروتين الأشهر الأولى.' }, related: ['babysitting', 'newborn-care', 'executive-nannies']
  },
  'executive-nannies': {
    overview: { en: 'Executive nanny enquiries focus on structured childcare alongside a busy household’s learning routines, travel plans and privacy expectations. Discuss those responsibilities directly; the role title alone does not establish a candidate’s experience.', ar: 'تركز طلبات المربية التنفيذية على رعاية منظمة للأطفال مع روتين التعلم وخطط السفر وتوقعات الخصوصية في المنزل. ناقش المسؤوليات مباشرة؛ فالمسمى الوظيفي وحده لا يثبت خبرة المرشحة.' },
    prepare: { en: 'Outline the learning routine, family schedule and any travel-related expectations. Ask to review relevant individual experience before choosing between this role and regular nanny support.', ar: 'حدد روتين التعلم وجدول الأسرة وأي توقعات مرتبطة بالسفر. اطلب مراجعة الخبرة الفردية المناسبة قبل الاختيار بين هذا الدور ودعم المربية المعتاد.' }, related: ['nanny', 'newborn-care', 'house-managers']
  },
  babysitting: {
    overview: { en: 'Babysitting is an occasional childcare enquiry, often linked to an evening, weekend or specific event. Explain the supervision needed during that period and distinguish it from a continuing nanny arrangement.', ar: 'جليسة الأطفال طلب لرعاية مؤقتة، غالباً خلال مساء أو عطلة أسبوعية أو مناسبة محددة. وضح الإشراف المطلوب خلال تلك الفترة وميزه عن ترتيب مستمر مع مربية.' },
    prepare: { en: 'Share the children’s ages, occasion and supervision routine for the requested period. If the same childcare need continues every day, compare the nanny service instead.', ar: 'شارك أعمار الأطفال والمناسبة وروتين الإشراف خلال الفترة المطلوبة. إذا كانت الحاجة نفسها تتكرر يومياً، فقارن خدمة المربية بدلاً من ذلك.' }, related: ['nanny', 'newborn-care', 'event-staffing']
  },
  'newborn-care': {
    overview: { en: 'Newborn care enquiries concern practical support around feeding routines, hygiene and calm baby care in the early months. Review the individual carer’s experience and the family’s instructions; this guide is not a clinical care plan.', ar: 'تتعلق طلبات رعاية المواليد بالدعم العملي لروتين التغذية والنظافة والعناية الهادئة في الأشهر الأولى. راجع خبرة مقدمة الرعاية وتعليمات الأسرة؛ فهذا الدليل ليس خطة رعاية طبية.' },
    prepare: { en: 'Describe the baby’s routine and the practical support the parents need. Clarify the role and relevant experience rather than assuming a nanny and a newborn carer have identical responsibilities.', ar: 'وضح روتين الطفل والدعم العملي الذي يحتاجه الوالدان. حدد الدور والخبرة المناسبة بدلاً من افتراض تطابق مسؤوليات المربية ومقدمة رعاية المواليد.' }, related: ['nanny', 'executive-nannies', 'babysitting']
  },
  'home-cooking': {
    overview: { en: 'Home cooking support is built around everyday family meals, recipes, lunch boxes and kitchen routines. Start with the meals you actually prepare at home, not a restaurant-style menu or a broad housekeeping request.', ar: 'يرتبط الطبخ المنزلي بوجبات الأسرة اليومية والوصفات ووجبات المدرسة وروتين المطبخ. ابدأ بالوجبات التي تحضرها فعلاً في المنزل، لا بقائمة مطعم أو طلب تنظيف عام.' },
    prepare: { en: 'Share family recipes, meal preferences and the kitchen routine. Compare kitchen-helper support if preparation and cleaning are the main need rather than responsibility for cooking meals.', ar: 'شارك وصفات الأسرة وتفضيلات الوجبات وروتين المطبخ. قارن مساعد المطبخ إذا كانت الحاجة الأساسية التحضير والتنظيف بدلاً من مسؤولية طبخ الوجبات.' }, related: ['kitchen-helper', 'personal-chef', 'private-chefs']
  },
  'private-chefs': {
    overview: { en: 'Private chef enquiries may involve planned home dining, weekly menus or private gatherings. Explain the dining occasion and menu expectations so that culinary responsibilities are distinguished from routine kitchen assistance.', ar: 'قد تتعلق طلبات الشيف الخاص بطعام منزلي مخطط أو قوائم أسبوعية أو تجمعات خاصة. وضح المناسبة وتوقعات القائمة لتمييز مسؤوليات الطهي عن المساعدة المعتادة في المطبخ.' },
    prepare: { en: 'Describe the dining format, menu preferences and any household dietary instructions. Compare personal-chef hiring for continuing meal support and event staffing for non-cooking event tasks.', ar: 'صف شكل المناسبة وتفضيلات القائمة وأي تعليمات غذائية للأسرة. قارن توظيف الشيف الشخصي لدعم الوجبات المستمر وفريق المناسبات للمهام غير المتعلقة بالطبخ.' }, related: ['personal-chef', 'home-cooking', 'event-staffing']
  },
  'personal-chef': {
    overview: { en: 'Personal cook or chef hiring concerns a defined cooking role for daily meals or particular occasions. Review recipe experience and the kitchen duties required; a culinary title is not a substitute for matching the individual to your menu.', ar: 'يتعلق توظيف الطاهي أو الشيف الشخصي بدور طبخ محدد للوجبات اليومية أو المناسبات. راجع الخبرة بالوصفات ومهام المطبخ المطلوبة؛ فالمسمى لا يغني عن مطابقة الشخص مع قائمتك.' },
    prepare: { en: 'Explain whether you need everyday family meals or occasion-based cooking. Use the home-cooking and private-chef guides to compare those purposes before discussing candidate profiles.', ar: 'وضح هل تحتاج وجبات عائلية يومية أم طبخاً لمناسبة. استخدم دليلي الطبخ المنزلي والشيف الخاص لمقارنة الغرضين قبل مناقشة ملفات المرشحين.' }, related: ['home-cooking', 'private-chefs', 'kitchen-helper']
  },
  'kitchen-helper': {
    overview: { en: 'A kitchen helper assists with preparation, washing, storage and organization. This support role differs from taking responsibility for the family’s menu or cooking, so specify what help is needed alongside the person preparing meals.', ar: 'يساعد مساعد المطبخ في التحضير والغسيل والتخزين والتنظيم. يختلف هذا الدور عن تحمل مسؤولية قائمة الأسرة أو الطبخ، لذا حدد المساعدة المطلوبة بجانب من يحضر الوجبات.' },
    prepare: { en: 'List preparation, washing and storage tasks separately from cooking duties. Review home cooking if you need someone to prepare meals rather than assist with the kitchen routine.', ar: 'افصل مهام التحضير والغسيل والتخزين عن مهام الطبخ. راجع الطبخ المنزلي إذا كنت تحتاج من يعد الوجبات بدلاً من المساعدة في روتين المطبخ.' }, related: ['home-cooking', 'personal-chef', 'housekeeping']
  },
  'house-managers': {
    overview: { en: 'House management focuses on coordinating household routines, staff schedules, inventory and organization. It is a coordination enquiry rather than another name for cleaning; explain which activities need oversight and which are performed by other household staff.', ar: 'تركز إدارة المنزل على تنسيق الروتين وجداول العاملين والمخزون والتنظيم. هو طلب للتنسيق لا اسم آخر للتنظيف؛ وضح الأنشطة التي تحتاج متابعة وما ينفذه عاملون آخرون.' },
    prepare: { en: 'Describe the existing household roles, schedules and inventory responsibilities. Compare bespoke management if several kinds of home support need to be brought into one plan.', ar: 'صف الأدوار الحالية في المنزل والجداول ومسؤوليات المخزون. قارن الإدارة المنزلية المخصصة إذا كان المطلوب جمع أنواع متعددة من الدعم في خطة واحدة.' }, related: ['bespoke-household-management', 'housekeeping', 'executive-nannies']
  },
  'bespoke-household-management': {
    overview: { en: 'Bespoke household management brings several home-support needs into a coordinated enquiry. Begin with the responsibilities to be aligned, such as schedules and household organization, rather than assuming every specialist service is part of one arrangement.', ar: 'تجمع الإدارة المنزلية المخصصة احتياجات دعم متعددة في طلب منسق. ابدأ بالمسؤوليات التي تحتاج مواءمة مثل الجداول وتنظيم المنزل، ولا تفترض شمول كل خدمة متخصصة في ترتيب واحد.' },
    prepare: { en: 'Identify the separate household services you want to coordinate and the person responsible for each. Compare the house-manager role for daily oversight and individual guides for specialist duties.', ar: 'حدد الخدمات المنزلية التي تريد تنسيقها والمسؤول عن كل منها. قارن دور مدير المنزل للمتابعة اليومية والأدلة الفردية للمهام المتخصصة.' }, related: ['house-managers', 'private-chefs', 'relocation-support']
  },
  'elder-care': {
    overview: { en: 'Elder care support concerns daily assistance, companionship and comfort for an older family member. Discuss the person’s routine and practical mobility needs as individual requirements rather than assuming all older people need the same support.', ar: 'يتعلق دعم كبار السن بالمساعدة اليومية والمرافقة والراحة لفرد أكبر سناً في الأسرة. ناقش روتينه واحتياجات الحركة العملية كاحتياجات فردية، بدلاً من افتراض حاجة الجميع إلى الدعم نفسه.' },
    prepare: { en: 'Explain the daily routine, companionship needs and practical assistance to review. Compare companion care when company is the main purpose and patient care for a different daily-support enquiry.', ar: 'وضح الروتين اليومي والحاجة إلى الرفقة والمساعدة العملية المطلوب مراجعتها. قارن رعاية المرافقة عندما تكون الرفقة هي الغرض الأساسي ورعاية المرضى لاحتياج يومي مختلف.' }, related: ['companion-care', 'patient-care', 'housemaid']
  },
  'patient-care': {
    overview: { en: 'Home patient-support enquiries focus on practical daily living and hygiene assistance around the family’s instructions. The existing care category is non-clinical; this page does not promise nursing, treatment or a medical qualification.', ar: 'تركز طلبات دعم المرضى في المنزل على المساعدة العملية في الحياة اليومية والنظافة وفق تعليمات الأسرة. فئة الرعاية الحالية غير طبية؛ ولا تعد هذه الصفحة بالتمريض أو العلاج أو مؤهل طبي.' },
    prepare: { en: 'Specify the daily living tasks and family instructions that need practical support. Clarify the limits of the role before comparing patient support with elder care or companionship.', ar: 'حدد مهام الحياة اليومية وتعليمات الأسرة التي تحتاج دعماً عملياً. وضح حدود الدور قبل مقارنة دعم المرضى برعاية كبار السن أو المرافقة.' }, related: ['elder-care', 'companion-care', 'housemaid']
  },
  'companion-care': {
    overview: { en: 'Companion care centres on conversation, company and light routine help. Distinguish the wish for a regular friendly presence from a request for broader personal care or household cleaning duties.', ar: 'تركز رعاية المرافقة على الحديث والرفقة والمساعدة الروتينية الخفيفة. ميز الحاجة إلى حضور ودي منتظم عن طلب رعاية شخصية أوسع أو مهام تنظيف المنزل.' },
    prepare: { en: 'Describe when company is most useful and the light assistance expected. Review elder care or patient support separately if your enquiry includes more than companionship.', ar: 'وضح الأوقات التي تفيد فيها الرفقة والمساعدة الخفيفة المتوقعة. راجع رعاية كبار السن أو دعم المرضى بشكل منفصل إذا تجاوز الطلب المرافقة.' }, related: ['elder-care', 'patient-care', 'live-out-maid']
  },
  recruitment: {
    overview: { en: 'Recruitment guidance starts with defining the household role and reviewing individual worker profiles. A country preference can be discussed, but it cannot establish experience, language or suitability for the duties you need.', ar: 'يبدأ إرشاد التوظيف بتحديد الدور المنزلي ومراجعة الملفات الفردية. يمكن مناقشة تفضيل الدولة، لكنه لا يثبت الخبرة أو اللغة أو ملاءمة المهام المطلوبة.' },
    prepare: { en: 'Prepare the role, working arrangement, experience and language preferences. Use the source-country hub to organize a preference and the documents guide for case-specific preparation.', ar: 'جهز الدور وترتيب العمل وتفضيلات الخبرة واللغة. استخدم مركز دول المصدر لتنظيم التفضيل ودليل المستندات للاستعداد حسب الحالة.' }, related: ['experienced-maid', 'background-verification', 'maid-visa']
  },
  'maid-visa': {
    overview: { en: 'Maid visa assistance is a document-and-process guidance enquiry, not a promise of approval. Explain the current situation and the selected service path so that the team can clarify the checklist applicable to the case.', ar: 'مساعدة تأشيرة الخادمة طلب لإرشاد المستندات والإجراءات، وليست وعداً بالموافقة. وضح الوضع الحالي ومسار الخدمة المختار ليشرح الفريق القائمة المناسبة للحالة.' },
    prepare: { en: 'Share the emirate, current worker document status and whether the enquiry concerns a new arrangement or an existing one. Exact requirements are reviewed for the case rather than inferred from this page.', ar: 'شارك الإمارة وحالة مستندات العاملة الحالية وهل يخص الطلب ترتيباً جديداً أم قائماً. تراجع المتطلبات الدقيقة للحالة ولا تستنتج من هذه الصفحة.' }, related: ['sponsorship-transfer', 'recruitment', 'background-verification']
  },
  'maid-replacement': {
    overview: { en: 'Replacement support begins with the service concern and the confirmed agreement. Explain what is not working and which duties were agreed, so the review is tied to the existing arrangement rather than an assumed replacement entitlement.', ar: 'يبدأ دعم الاستبدال بالملاحظة على الخدمة والاتفاق المؤكد. وضح ما لا يسير كما توقعته والمهام المتفق عليها لتكون المراجعة مرتبطة بالترتيب القائم، لا بحق استبدال مفترض.' },
    prepare: { en: 'Bring the booking details, agreed duties and a clear description of the concern. Read the refund/replacement policy before treating an alternative profile as a confirmed outcome.', ar: 'جهز تفاصيل الحجز والمهام المتفق عليها ووصفاً واضحاً للملاحظة. اقرأ سياسة الاسترداد والاستبدال قبل اعتبار ملف بديل نتيجة مؤكدة.' }, related: ['experienced-maid', 'recruitment', 'sponsorship-transfer']
  },
  'sponsorship-transfer': {
    overview: { en: 'Sponsorship transfer guidance concerns an existing arrangement, the document status and responsibilities to clarify. Keep the transfer enquiry separate from choosing a new profile or assuming a visa outcome.', ar: 'يتعلق إرشاد نقل الكفالة بترتيب قائم وحالة المستندات والمسؤوليات المطلوب توضيحها. افصل طلب النقل عن اختيار ملف جديد أو افتراض نتيجة للتأشيرة.' },
    prepare: { en: 'Explain the current sponsorship situation and any previous agreement or transfer information. The documents guide is preparation, not a final legal checklist or a confirmation that transfer can proceed.', ar: 'وضح وضع الكفالة الحالي وأي اتفاق سابق أو معلومات نقل. دليل المستندات وسيلة للاستعداد، لا قائمة قانونية نهائية أو تأكيداً لإمكانية تنفيذ النقل.' }, related: ['maid-visa', 'recruitment', 'maid-replacement']
  },
  'experienced-maid': {
    overview: { en: 'An experienced-maid enquiry prioritizes relevant previous household work. Compare experience with the actual cleaning, cooking or childcare duties requested; years or a general title alone do not describe how a person fits the home.', ar: 'يعطي طلب الخادمة ذات الخبرة الأولوية للعمل المنزلي السابق المناسب. قارن الخبرة بمهام التنظيف أو الطبخ أو رعاية الأطفال المطلوبة؛ فالمدة أو المسمى العام وحدهما لا يوضحان ملاءمة الشخص للمنزل.' },
    prepare: { en: 'Identify which previous duties matter for your household and what communication you need. Review the recruitment and background-guidance pages for different parts of the profile-review process.', ar: 'حدد المهام السابقة المهمة لمنزلك وطريقة التواصل المطلوبة. راجع صفحتي التوظيف وإرشاد الخلفية للأجزاء المختلفة من مراجعة الملف.' }, related: ['recruitment', 'background-verification', 'housemaid']
  },
  'background-verification': {
    overview: { en: 'Background guidance reviews identity details, documents and experience notes relevant to a worker enquiry. It supports a discussion of available information; it is not a safety guarantee or a substitute for clarifying the scope of checks.', ar: 'يراجع إرشاد الخلفية بيانات الهوية والمستندات وملاحظات الخبرة المتعلقة بطلب العاملة. يساعد على مناقشة المعلومات المتاحة، لكنه ليس ضماناً للأمان أو بديلاً عن توضيح نطاق المراجعة.' },
    prepare: { en: 'Ask which identity details, documents and experience notes can be reviewed for the particular profile. Keep unanswered questions visible before making a recruitment decision.', ar: 'اسأل عن بيانات الهوية والمستندات وملاحظات الخبرة التي يمكن مراجعتها للملف المحدد. أبق الأسئلة غير المحسومة واضحة قبل قرار التوظيف.' }, related: ['recruitment', 'experienced-maid', 'maid-visa']
  },
  'floral-styling': {
    overview: { en: 'Floral styling is a home-detail enquiry centred on arrangements and presentation. Explain the space or occasion and distinguish styling from cleaning, cooking or the staffing needed to run a gathering.', ar: 'تنسيق الزهور طلب يتعلق بالتفاصيل الجمالية للمنزل وترتيبها وعرضها. وضح المساحة أو المناسبة وميز التنسيق عن التنظيف أو الطبخ أو فريق إدارة التجمع.' },
    prepare: { en: 'Describe the room or occasion and the presentation you want to discuss. Compare event staffing for gathering support and household management for wider home coordination.', ar: 'صف الغرفة أو المناسبة وشكل العرض الذي تريد مناقشته. قارن فريق المناسبات لدعم التجمع والإدارة المنزلية للتنسيق الأوسع.' }, related: ['event-staffing', 'bespoke-household-management', 'house-managers']
  },
  'relocation-support': {
    overview: { en: 'Relocation support concerns household help around moving and settling into a home. Define the tasks around the move rather than assuming a transport, packing or specialist moving service is included.', ar: 'يتعلق دعم الانتقال بالمساعدة المنزلية أثناء الانتقال والاستقرار في منزل. حدد مهام الانتقال بدلاً من افتراض شمول النقل أو التغليف أو خدمة نقل متخصصة.' },
    prepare: { en: 'Share the moving-day or settling-in tasks and the household areas needing help. Compare on-demand assistance for a single occasion and housekeeping for continuing cleaning after the move.', ar: 'شارك مهام يوم الانتقال أو الاستقرار والمناطق المنزلية التي تحتاج مساعدة. قارن الدعم عند الطلب لمناسبة واحدة والتنظيف للاستمرار بعد الانتقال.' }, related: ['on-demand-domestic-help', 'housekeeping', 'house-managers']
  },
  'pet-care-specialists': {
    overview: { en: 'Pet-care support should be discussed around the individual pet’s routine and the household instructions. Separate pet-related responsibilities from a general maid enquiry instead of assuming any household worker has matching pet-care experience.', ar: 'ينبغي مناقشة دعم الحيوانات الأليفة وفق روتين الحيوان وتعليمات المنزل. افصل مسؤولياته عن طلب الخادمة العام، ولا تفترض امتلاك أي عامل منزلي خبرة مناسبة في رعايته.' },
    prepare: { en: 'Explain the pet’s routine and the practical help to review with the team. Compare housemaid support separately if your main request is cleaning rather than pet-related duties.', ar: 'وضح روتين الحيوان والمساعدة العملية المطلوب مراجعتها مع الفريق. قارن دعم عاملة المنزل بشكل منفصل إذا كان الطلب الأساسي التنظيف لا مهام الحيوان.' }, related: ['housemaid', 'house-managers', 'bespoke-household-management']
  },
  'event-staffing': {
    overview: { en: 'Event staffing is a task-specific request for household gathering support. Explain the occasion, guest-related duties and coordination needs, keeping cooking and floral presentation separate where those require their own enquiry.', ar: 'فريق المناسبات طلب لمهام محددة لدعم تجمع منزلي. وضح المناسبة والمهام المتعلقة بالضيوف واحتياجات التنسيق، وافصل الطبخ وعرض الزهور إذا احتاجا طلباً خاصاً.' },
    prepare: { en: 'Describe the gathering and the household support roles to discuss. Review private-chef and floral-styling guides for those distinct tasks rather than assuming they are included in event staffing.', ar: 'صف التجمع وأدوار الدعم المنزلي المطلوب مناقشتها. راجع دليلي الشيف الخاص وتنسيق الزهور لهذه المهام المنفصلة، ولا تفترض شمولها في فريق المناسبات.' }, related: ['private-chefs', 'floral-styling', 'on-demand-domestic-help']
  }
};

export function strengthenServiceCopy(slug: string, lang: Lang, copy: ServiceCopy): ServiceCopy {
  const brief = serviceContentBriefs[slug];
  if (!brief) return copy;
  const ar = lang === 'ar';
  return { ...copy, whatText: brief.overview[lang], journeyText: brief.prepare[lang], related: brief.related,
    compareText: '',
    comparison: ar ? [
      { feature: 'نطاق المهام', inaya: 'حدد العمل المطلوب', other: 'وضح المهام المتفق عليها' },
      { feature: 'ترتيب العمل', inaya: 'صف روتين المنزل', other: 'راجع الجدول المناسب' },
      { feature: 'المستندات', inaya: 'وضح الوضع الحالي', other: 'اطلب قائمة حسب الحالة' }
    ] : [
      { feature: 'Duty scope', inaya: 'List the work needed', other: 'Clarify agreed duties' },
      { feature: 'Working arrangement', inaya: 'Describe the home routine', other: 'Review the schedule' },
      { feature: 'Documents', inaya: 'Explain the current situation', other: 'Ask for a case checklist' }
    ],
    // Keep route titles, metadata, factual duty lists and pricing information intact.
    faqs: [
      { title: ar ? `ما الأدوار التي أقارنها عند مراجعة ${copy.title}؟` : `Which roles can I compare when reviewing ${copy.title}?`,
        text: brief.related.map((value) => { const service = getService(value)!; return `${service.name[lang]}: ${service.short[lang]}`; }).join(ar ? '؛ ' : '; ') },
      ...copy.faqs.filter((faq) => !/available|availability|prices fixed|متوفرة|الأسعار ثابتة/i.test(faq.title)).slice(0, 3)
    ] };
}
