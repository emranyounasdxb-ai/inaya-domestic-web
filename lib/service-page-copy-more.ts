import type { CompareRow, Lang, ServiceCopy } from './service-page-copy';

const comparisonEn: CompareRow[] = [
  { feature: 'Requirement review', inaya: 'Included', other: 'Often limited' },
  { feature: 'Clear service scope', inaya: 'Transparent', other: 'Sometimes unclear' },
  { feature: 'Family matching', inaya: 'Personalized', other: 'Basic matching' },
  { feature: 'Follow-up support', inaya: 'Included', other: 'Often missing' }
];

const comparisonAr: CompareRow[] = [
  { feature: 'مراجعة الاحتياج', inaya: 'متوفرة', other: 'غالباً محدودة' },
  { feature: 'وضوح نطاق الخدمة', inaya: 'شفاف', other: 'غير واضح أحياناً' },
  { feature: 'مطابقة حسب الأسرة', inaya: 'مخصصة', other: 'مطابقة محدودة' },
  { feature: 'متابعة الدعم', inaya: 'متوفرة', other: 'غالباً غير موجودة' }
];

type PartialCopy = Pick<ServiceCopy, 'title' | 'meta' | 'badge' | 'lead' | 'whatTitle' | 'whatText' | 'finalTitle' | 'finalText' | 'cards' | 'why' | 'included' | 'perfect' | 'journey' | 'vetting' | 'countries' | 'pricing' | 'faqs' | 'related'> & { ar?: boolean };

function makeCopy(data: PartialCopy): ServiceCopy {
  const ar = Boolean(data.ar);
  return {
    ...data,
    book: ar ? 'احجز استشارة' : 'Book Consultation',
    whatsapp: ar ? 'استفسار واتساب' : 'WhatsApp Inquiry',
    whyTitle: ar ? 'لماذا تختار الأسر عناية؟' : 'Why Families Choose INAYA',
    includedTitle: ar ? 'ما الذي تشمل الخدمة؟' : 'What is Included',
    perfectTitle: ar ? 'مناسبة لـ' : 'Perfect For',
    journeyTitle: ar ? 'خطوات الخدمة' : 'Service Process',
    journeyText: ar ? 'عملية واضحة لمراجعة الاحتياج ومطابقة الخدمة المناسبة.' : 'A clear process to review requirements and match the right service.',
    vettingTitle: ar ? 'فحص الخدمة في عناية' : 'INAYA Service Check',
    vettingText: ar ? 'نراجع المهام والجدول والتوقعات قبل التأكيد.' : 'We review duties, schedule and expectations before confirmation.',
    countriesTitle: ar ? 'إرشاد المطابقة' : 'Matching Guidance',
    countriesText: ar ? 'تتم المطابقة حسب الخبرة واللغة والمهام والتوفر.' : 'Matching is guided by experience, language, duties and availability.',
    pricingTitle: ar ? 'إرشاد الأسعار' : 'Pricing Guidance',
    pricingText: ar ? 'يعتمد السعر على نوع الخدمة والجدول والمهام والمتطلبات.' : 'Pricing depends on service type, schedule, duties and requirements.',
    faqTitle: ar ? 'أسئلة شائعة' : 'Frequently Asked Questions',
    relatedTitle: ar ? 'خدمات ذات صلة' : 'Related Services',
    compareTitle: ar ? 'لماذا عناية؟' : 'Why INAYA?',
    compareText: ar ? 'تجربة خدمة واضحة مع متابعة منظمة.' : 'A clear service experience with organized follow-up.',
    comparison: ar ? comparisonAr : comparisonEn
  };
}

export const servicePageCopiesMore: Record<string, Record<Lang, ServiceCopy>> = {
  'monthly-maid-contract': {
    en: makeCopy({
      title: 'Monthly Maid Contract in UAE',
      meta: 'Monthly maid contract in UAE for regular cleaning, laundry, ironing, kitchen assistance and household support with INAYA.',
      badge: 'Monthly Maid Contract Services in UAE',
      lead: 'Choose a monthly maid contract with INAYA for regular household support, planned cleaning visits, laundry assistance, kitchen help and organized home care.',
      whatTitle: 'What is a Monthly Maid Contract?',
      whatText: 'A monthly maid contract gives your home scheduled domestic support for a fixed monthly period. Families can plan regular maid support based on home size, preferred days, required tasks and monthly routine.',
      finalTitle: 'Need regular maid support every month?',
      finalText: 'Speak with INAYA today and choose a monthly maid contract that fits your home, family and routine.',
      cards: [
        { title: 'Regular Monthly Support', text: 'Planned visits for cleaning, laundry, ironing and home organization.' },
        { title: 'Predictable Home Routine', text: 'A clear monthly structure keeps your home clean and organized.' },
        { title: 'Flexible Visit Planning', text: 'Visit frequency and duties are discussed before confirmation.' }
      ],
      why: ['Clear monthly service planning', 'Flexible visit frequency', 'Suitable for apartments and villas', 'Cleaning, laundry and ironing support', 'Kitchen assistance where required', 'Organized follow-up and coordination'],
      included: ['Regular home cleaning', 'Bathroom and kitchen cleaning', 'Bedroom and living area cleaning', 'Laundry and ironing support', 'Dusting, floor care and organizing', 'Light kitchen assistance'],
      perfect: ['Busy families', 'Working professionals', 'Apartments and villas', 'Families needing weekly support', 'Homes needing routine cleaning', 'Clients who prefer predictable monthly service'],
      journey: [
        { title: 'Review', text: 'We review your home size, location, visit frequency and required tasks.' },
        { title: 'Plan', text: 'A monthly service structure is suggested around your family routine.' },
        { title: 'Duties', text: 'Cleaning, laundry, ironing and kitchen help are discussed clearly.' },
        { title: 'Schedule', text: 'Visit timing, contact details and location notes are aligned.' },
        { title: 'Follow-up', text: 'INAYA follows up to keep the monthly arrangement organized.' }
      ],
      vetting: [
        { title: 'Visit Frequency', text: 'Weekly, biweekly or custom monthly needs are reviewed.', icon: '01' },
        { title: 'Task Planning', text: 'Recurring tasks are defined for a smoother monthly routine.', icon: '02' },
        { title: 'Home Size', text: 'Apartment or villa size is considered before planning hours.', icon: '03' },
        { title: 'Schedule Fit', text: 'Preferred days and timing are matched with availability.', icon: '04' },
        { title: 'Follow-up', text: 'Feedback helps keep the monthly plan consistent.', icon: '05' }
      ],
      countries: [
        { title: 'Cleaning Standards', text: 'Routine cleaning and organization needs are reviewed.' },
        { title: 'Laundry Support', text: 'Laundry and ironing can be included in the monthly plan.' },
        { title: 'Kitchen Help', text: 'Light kitchen assistance can be discussed.' },
        { title: 'Language Needs', text: 'Communication preferences are considered where available.' },
        { title: 'Home Routine', text: 'Family routine and home size guide the schedule.' },
        { title: 'Monthly Frequency', text: 'Visits are planned around household needs.' }
      ],
      pricing: [
        { title: 'Basic Monthly Plan', text: 'For light recurring cleaning needs.', points: ['Regular visits', 'Basic cleaning', 'Clear monthly scope'] },
        { title: 'Standard Monthly Plan', text: 'For cleaning plus laundry support.', points: ['Cleaning routine', 'Laundry option', 'Follow-up support'] },
        { title: 'Custom Monthly Plan', text: 'For larger homes or wider duties.', points: ['Visit planning', 'Task coordination', 'Priority guidance'] }
      ],
      faqs: [
        { title: 'Can I choose how many visits I need per month?', text: 'Yes. Visit frequency can be discussed based on your household needs and availability.' },
        { title: 'Is laundry and ironing included?', text: 'Laundry and ironing can be included when confirmed before starting the monthly plan.' },
        { title: 'Can I request the same maid every month?', text: 'Where possible, INAYA tries to maintain consistency, depending on schedule and availability.' },
        { title: 'Is a monthly contract better than one-time booking?', text: 'Yes, if your home needs regular cleaning and a predictable service routine.' },
        { title: 'Do you provide monthly contracts in Dubai and Ajman?', text: 'Yes, INAYA supports families across the UAE subject to availability.' },
        { title: 'How is pricing calculated?', text: 'Pricing depends on visits, hours, home size, location and task scope.' }
      ],
      related: ['live-out-maid', 'part-time-maid', 'full-time-maid', 'live-in-maid', 'home-cooking', 'kitchen-helper']
    }),
    ar: makeCopy({
      ar: true,
      title: 'عقد خادمة شهري في الإمارات',
      meta: 'عقد خادمة شهري في الإمارات للتنظيف المنتظم والغسيل والكي والمساعدة في المطبخ وتنظيم المنزل مع عناية.',
      badge: 'خدمات عقد خادمة شهري في الإمارات',
      lead: 'اختر عقد خادمة شهري مع عناية للحصول على دعم منزلي منتظم يشمل زيارات تنظيف مجدولة والغسيل والكي والمساعدة في المطبخ وتنظيم المنزل.',
      whatTitle: 'ما هو عقد الخادمة الشهري؟',
      whatText: 'عقد الخادمة الشهري يمنح منزلك دعماً منزلياً مجدولاً لمدة شهرية ثابتة حسب حجم المنزل والأيام المفضلة والمهام المطلوبة وروتين الأسرة.',
      finalTitle: 'هل تحتاج إلى دعم منزلي منتظم كل شهر؟',
      finalText: 'تواصل مع عناية اليوم واختر عقد خادمة شهري يناسب منزلك وروتين أسرتك.',
      cards: [
        { title: 'دعم شهري منتظم', text: 'زيارات مخططة للتنظيف والغسيل والكي وتنظيم المنزل.' },
        { title: 'روتين منزلي واضح', text: 'هيكل شهري يساعد المنزل على البقاء نظيفاً ومنظماً.' },
        { title: 'تخطيط مرن للزيارات', text: 'تتم مناقشة عدد الزيارات والمهام قبل التأكيد.' }
      ],
      why: ['تخطيط واضح للخدمة الشهرية', 'مرونة في عدد الزيارات', 'مناسب للشقق والفلل', 'دعم التنظيف والغسيل والكي', 'مساعدة في المطبخ عند الحاجة', 'تنسيق ومتابعة منظمة'],
      included: ['تنظيف منزلي منتظم', 'تنظيف الحمامات والمطبخ', 'تنظيف غرف النوم والمعيشة', 'دعم الغسيل والكي', 'إزالة الغبار وتنظيف الأرضيات', 'مساعدة خفيفة في المطبخ'],
      perfect: ['الأسر المشغولة', 'الموظفون والمهنيون', 'الشقق والفلل', 'الأسر التي تحتاج دعماً أسبوعياً', 'منازل تحتاج تنظيفاً منتظماً', 'خدمة شهرية واضحة'],
      journey: [
        { title: 'مراجعة', text: 'نراجع حجم المنزل والموقع وعدد الزيارات والمهام.' },
        { title: 'خطة', text: 'نقترح هيكل خدمة شهري يناسب روتين الأسرة.' },
        { title: 'مهام', text: 'يتم توضيح التنظيف والغسيل والكي والمطبخ قبل التأكيد.' },
        { title: 'جدول', text: 'يتم ترتيب التوقيت وبيانات التواصل وتعليمات الموقع.' },
        { title: 'متابعة', text: 'تتابع عناية لضمان استمرار الخدمة بشكل منظم.' }
      ],
      vetting: [
        { title: 'عدد الزيارات', text: 'نراجع الاحتياج الأسبوعي أو الشهري حسب الأسرة.', icon: '01' },
        { title: 'تخطيط المهام', text: 'يتم تحديد المهام المتكررة لروتين شهري أسهل.', icon: '02' },
        { title: 'حجم المنزل', text: 'يتم اعتبار الشقة أو الفيلا قبل تحديد الساعات.', icon: '03' },
        { title: 'ملاءمة الجدول', text: 'تتم مطابقة الأيام والتوقيت حسب التوفر.', icon: '04' },
        { title: 'متابعة الخدمة', text: 'تساعد الملاحظات على الحفاظ على الخطة الشهرية.', icon: '05' }
      ],
      countries: [
        { title: 'معايير التنظيف', text: 'تتم المطابقة حسب احتياج التنظيف والتنظيم.' },
        { title: 'دعم الغسيل', text: 'يمكن إضافة الغسيل والكي ضمن الخطة الشهرية.' },
        { title: 'مساعدة المطبخ', text: 'يمكن مناقشة الدعم الخفيف في المطبخ قبل التأكيد.' },
        { title: 'احتياج اللغة', text: 'تتم مراعاة تفضيل التواصل عند التوفر.' },
        { title: 'روتين المنزل', text: 'يوجه روتين الأسرة وحجم المنزل جدول الخدمة.' },
        { title: 'عدد الزيارات', text: 'يتم تخطيط عدد الزيارات حسب احتياج المنزل.' }
      ],
      pricing: [
        { title: 'خطة شهرية أساسية', text: 'لاحتياج التنظيف الخفيف المتكرر.', points: ['زيارات منتظمة', 'تنظيف أساسي', 'نطاق شهري واضح'] },
        { title: 'خطة شهرية قياسية', text: 'للأسر التي تحتاج تنظيفاً مع دعم الغسيل.', points: ['روتين تنظيف', 'خيار الغسيل', 'متابعة الدعم'] },
        { title: 'خطة شهرية مخصصة', text: 'للمنازل الكبيرة أو المهام الأوسع.', points: ['تخطيط الزيارات', 'تنسيق المهام', 'إرشاد أولوية'] }
      ],
      faqs: [
        { title: 'هل يمكن اختيار عدد الزيارات شهرياً؟', text: 'نعم، يمكن مناقشة عدد الزيارات حسب احتياج المنزل والتوفر.' },
        { title: 'هل يشمل العقد الغسيل والكي؟', text: 'يمكن إضافة الغسيل والكي عند توضيح ذلك قبل بدء الخطة الشهرية.' },
        { title: 'هل يمكن طلب نفس الخادمة كل شهر؟', text: 'تحاول عناية الحفاظ على الاستمرارية قدر الإمكان حسب الجدول والتوفر.' },
        { title: 'هل العقد الشهري أفضل من الحجز الفردي؟', text: 'نعم، إذا كان منزلك يحتاج تنظيفاً منتظماً وروتين خدمة واضحاً.' },
        { title: 'هل تقدمون عقوداً شهرية في دبي وعجمان؟', text: 'نعم، تدعم عناية الأسر في جميع إمارات الدولة حسب التوفر.' },
        { title: 'كيف يتم حساب السعر؟', text: 'يعتمد السعر على الزيارات والساعات وحجم المنزل والموقع ونطاق المهام.' }
      ],
      related: ['live-out-maid', 'part-time-maid', 'full-time-maid', 'live-in-maid', 'home-cooking', 'kitchen-helper']
    })
  },
  nanny: {
    en: makeCopy({
      title: 'Nanny Services in UAE',
      meta: 'Trusted nanny services in UAE for childcare support, daily routines, playtime supervision, school preparation and family assistance.',
      badge: 'Trusted Nanny Services in UAE',
      lead: 'Find a caring nanny through INAYA for childcare support, daily routines, school preparation, playtime supervision and family assistance.',
      whatTitle: 'What are Nanny Services?',
      whatText: 'Nanny services provide dedicated childcare support inside the home. A nanny may assist with daily routines, supervised playtime, meal support, school preparation and basic child-related organization.',
      finalTitle: 'Looking for a caring nanny for your family?',
      finalText: 'Speak with INAYA today and get guidance for nanny support that fits your child’s routine and household needs.',
      cards: [
        { title: 'Childcare Routine Support', text: 'Support for daily routines, school preparation and play supervision.' },
        { title: 'Family-focused Matching', text: 'Child age, routine, language and expectations are reviewed.' },
        { title: 'Flexible Arrangements', text: 'Live-in, live-out, full-time or part-time options can be discussed.' }
      ],
      why: ['Family-focused childcare matching', 'Clear discussion of child age and routine', 'Full-time, part-time or live-in options', 'Language and experience preferences considered', 'Documentation and process guidance', 'Organized communication and follow-up'],
      included: ['Child supervision during agreed hours', 'Daily routine assistance', 'School bag and uniform preparation', 'Feeding support where suitable', 'Playtime and activity supervision', 'Light child-related organization'],
      perfect: ['Working parents', 'Families with toddlers or young children', 'School-going children', 'New families in the UAE', 'Homes needing daily childcare support', 'Families requiring live-in or live-out nanny options'],
      journey: [
        { title: 'Requirement', text: 'We understand child age, routine, timing and language preference.' },
        { title: 'Experience', text: 'Childcare exposure and home experience are reviewed.' },
        { title: 'Duties', text: 'Feeding, play supervision and school routine are discussed.' },
        { title: 'Arrangement', text: 'Live-in, live-out, full-time or part-time options are reviewed.' },
        { title: 'Follow-up', text: 'INAYA stays connected to support a smoother family arrangement.' }
      ],
      vetting: [
        { title: 'Child Age Review', text: 'The child age and routine are considered before matching.', icon: '01' },
        { title: 'Experience Fit', text: 'Relevant childcare exposure and family experience are reviewed.', icon: '02' },
        { title: 'Routine Planning', text: 'School, meals, play and rest routines are discussed clearly.', icon: '03' },
        { title: 'Language Preference', text: 'Communication needs are considered where available.', icon: '04' },
        { title: 'Family Support', text: 'Follow-up helps keep the arrangement smooth and comfortable.', icon: '05' }
      ],
      countries: [
        { title: 'Philippines', text: 'Often requested for English communication and childcare exposure.' },
        { title: 'Indonesia', text: 'Family care, calm routines and household support.' },
        { title: 'Nepal', text: 'Reliable home support and routine assistance.' },
        { title: 'Sri Lanka', text: 'Household experience and family assistance.' },
        { title: 'India', text: 'Language flexibility, family support and meal assistance.' },
        { title: 'Kenya / Uganda', text: 'English communication, childcare exposure and home support.' }
      ],
      pricing: [
        { title: 'Nanny Consultation', text: 'For families exploring childcare options.', points: ['Child age review', 'Routine discussion', 'Profile direction'] },
        { title: 'Nanny Matching', text: 'For families ready to proceed.', points: ['Experience matching', 'Schedule planning', 'Family coordination'] },
        { title: 'Arrangement Guidance', text: 'For live-in or live-out comparison.', points: ['Service model review', 'Document guidance', 'Follow-up support'] }
      ],
      faqs: [
        { title: 'Can I hire a nanny in Dubai or Ajman?', text: 'Yes, INAYA supports families across the UAE subject to availability.' },
        { title: 'Can I request childcare experience?', text: 'Yes. You can discuss child age, routine, language preference and previous childcare exposure.' },
        { title: 'Can a nanny help with school preparation?', text: 'Yes, school preparation support can be included if agreed before confirmation.' },
        { title: 'Can I choose live-in or live-out nanny service?', text: 'Yes, both options can be discussed depending on requirements and availability.' },
        { title: 'Is a nanny the same as a babysitter?', text: 'A nanny usually supports regular childcare routines, while babysitting is often short-term support.' },
        { title: 'Does a nanny provide medical care?', text: 'Nanny service is childcare support. Medical care should be arranged through qualified healthcare professionals.' }
      ],
      related: ['babysitting', 'newborn-care', 'live-in-maid', 'full-time-maid', 'part-time-maid', 'elder-care']
    }),
    ar: makeCopy({
      ar: true,
      title: 'خدمات مربية أطفال في الإمارات',
      meta: 'خدمات مربية أطفال موثوقة في الإمارات لدعم روتين الأطفال اليومي والتحضير للمدرسة والإشراف على اللعب.',
      badge: 'خدمات مربية أطفال موثوقة في الإمارات',
      lead: 'ابحث عن مربية أطفال مناسبة من خلال عناية لدعم رعاية الأطفال والروتين اليومي والتحضير للمدرسة والإشراف على اللعب ومساعدة الأسرة.',
      whatTitle: 'ما هي خدمات المربية؟',
      whatText: 'خدمات المربية توفر دعماً مخصصاً لرعاية الأطفال داخل المنزل، وتشمل المساعدة في الروتين اليومي والإشراف على اللعب ودعم الوجبات والتحضير للمدرسة حسب نطاق المهام.',
      finalTitle: 'هل تبحث عن مربية مناسبة لطفلك؟',
      finalText: 'تواصل مع عناية اليوم للحصول على إرشاد يناسب روتين طفلك واحتياج منزلك.',
      cards: [
        { title: 'دعم روتين الأطفال', text: 'دعم روتين الأطفال والتحضير للمدرسة والإشراف على اللعب.' },
        { title: 'مطابقة حسب الأسرة', text: 'تتم مراجعة عمر الطفل وروتينه واللغة وتوقعات المنزل.' },
        { title: 'ترتيبات مرنة', text: 'يمكن مناقشة مربية مقيمة أو غير مقيمة أو بدوام كامل أو جزئي.' }
      ],
      why: ['مطابقة حسب احتياج الأسرة والأطفال', 'مناقشة واضحة لعمر الطفل وروتينه', 'خيارات بدوام كامل أو جزئي أو إقامة داخلية', 'مراعاة اللغة والخبرة عند التوفر', 'إرشاد المستندات والإجراءات', 'تواصل ومتابعة منظمة'],
      included: ['الإشراف على الأطفال خلال الساعات المتفق عليها', 'المساعدة في الروتين اليومي', 'تجهيز الحقيبة والزي المدرسي', 'دعم الوجبات عند المناسبة', 'الإشراف على اللعب والأنشطة', 'تنظيم بسيط متعلق بالأطفال'],
      perfect: ['الآباء العاملون', 'الأسر التي لديها أطفال صغار', 'الأطفال في عمر المدرسة', 'الأسر الجديدة في الإمارات', 'المنازل التي تحتاج دعماً يومياً للأطفال', 'الأسر التي تحتاج مربية مقيمة أو غير مقيمة'],
      journey: [
        { title: 'الاحتياج', text: 'نفهم عمر الطفل وروتينه والتوقيت واللغة المفضلة.' },
        { title: 'الخبرة', text: 'نراجع خبرة رعاية الأطفال والخبرة المنزلية.' },
        { title: 'المهام', text: 'يتم توضيح الوجبات والإشراف وروتين المدرسة.' },
        { title: 'الترتيب', text: 'تتم مناقشة المقيمة أو غير المقيمة أو الدوام الكامل أو الجزئي.' },
        { title: 'المتابعة', text: 'تتابع عناية لدعم ترتيب أكثر سلاسة للأسرة.' }
      ],
      vetting: [
        { title: 'عمر الطفل', text: 'تتم مراعاة عمر الطفل وروتينه قبل المطابقة.', icon: '01' },
        { title: 'ملاءمة الخبرة', text: 'تتم مراجعة خبرة رعاية الأطفال والأسرة.', icon: '02' },
        { title: 'تخطيط الروتين', text: 'تتم مناقشة المدرسة والوجبات واللعب والراحة.', icon: '03' },
        { title: 'تفضيل اللغة', text: 'تتم مراعاة احتياج التواصل عند التوفر.', icon: '04' },
        { title: 'دعم الأسرة', text: 'تساعد المتابعة على ترتيب مريح وسلس.', icon: '05' }
      ],
      countries: [
        { title: 'الفلبين', text: 'غالباً مطلوبة للتواصل بالإنجليزية وخبرة الأطفال.' },
        { title: 'إندونيسيا', text: 'رعاية أسرية وروتين هادئ ودعم منزلي.' },
        { title: 'نيبال', text: 'دعم منزلي موثوق ومساعدة في الروتين.' },
        { title: 'سريلانكا', text: 'خبرة منزلية ومساعدة أسرية.' },
        { title: 'الهند', text: 'مرونة لغوية ودعم أسري ومساعدة في الوجبات.' },
        { title: 'كينيا / أوغندا', text: 'تواصل إنجليزي وخبرة حول الأطفال ودعم منزلي.' }
      ],
      pricing: [
        { title: 'استشارة المربية', text: 'للأسر التي تدرس خيارات رعاية الأطفال.', points: ['مراجعة عمر الطفل', 'مناقشة الروتين', 'توجيه الملف'] },
        { title: 'مطابقة المربية', text: 'للأسر الجاهزة للمتابعة.', points: ['مطابقة الخبرة', 'تخطيط الجدول', 'تنسيق الأسرة'] },
        { title: 'إرشاد الترتيب', text: 'للمقارنة بين المقيمة وغير المقيمة.', points: ['مراجعة نموذج الخدمة', 'إرشاد المستندات', 'متابعة الدعم'] }
      ],
      faqs: [
        { title: 'هل يمكن توظيف مربية في دبي أو عجمان؟', text: 'نعم، تدعم عناية الأسر في جميع إمارات الدولة حسب التوفر.' },
        { title: 'هل يمكن طلب خبرة في رعاية الأطفال؟', text: 'نعم، يمكن مناقشة عمر الطفل وروتينه واللغة والخبرة السابقة.' },
        { title: 'هل تساعد المربية في التحضير للمدرسة؟', text: 'نعم، يمكن إضافة دعم التحضير للمدرسة إذا تم الاتفاق عليه قبل التأكيد.' },
        { title: 'هل يمكن اختيار مربية مقيمة أو غير مقيمة؟', text: 'نعم، يمكن مناقشة الخيارين حسب احتياج الأسرة والتوفر.' },
        { title: 'هل المربية مثل جليسة الأطفال؟', text: 'المربية عادة تدعم روتين الأطفال بشكل منتظم، بينما جليسة الأطفال غالباً للدعم المؤقت.' },
        { title: 'هل تقدم المربية رعاية طبية؟', text: 'خدمة المربية دعم رعاية أطفال، والرعاية الطبية يجب أن تتم عبر مختصين مؤهلين.' }
      ],
      related: ['babysitting', 'newborn-care', 'live-in-maid', 'full-time-maid', 'part-time-maid', 'elder-care']
    })
  }
};
