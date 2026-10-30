import type { LocationServicePage } from './location-service-pages';

const notes = {
  'maid-services-ajman': {
    en: [
      ['live-in-maid', 'Live-in maid in Ajman', 'For a maid living in your Ajman home, describe the accommodation as well as cleaning, laundry and daily priorities. Agree work and rest arrangements separately from residence.'],
      ['full-time-maid', 'Full-time housemaid in Ajman', 'List the regular workload, days and hours needed in your home. A full-time schedule does not automatically include accommodation; discuss live-in or live-out arrangements separately.'],
      ['part-time-maid', 'Part-time maid visits in Ajman', 'Share the rooms, priority tasks and preferred visit times. Include the exact residential area and access details so the team can review the proposed visit.'],
      ['nanny', 'Nanny enquiries in Ajman', 'Prepare the children’s ages, nursery or school routine and parent instructions. Ask about the individual profile’s relevant childcare experience and how updates will be shared.'],
      ['monthly-maid-contract', 'Monthly maid contract enquiries in Ajman', 'For a monthly contract enquiry from Ajman, describe your household needs. Contact INAYA to confirm the working arrangement, duties, schedule and terms included in your selected package.'],
      ['maid-visa', 'Maid visa enquiries in Ajman', 'Explain the current worker and sponsor situation. Contact INAYA to confirm the support available for your case, applicable requirements and fees.']
    ],
    ar: [
      ['live-in-maid', 'خادمة مقيمة في عجمان', 'إذا كنت تحتاج خادمة تقيم في منزلك بعجمان، وضح السكن والتنظيف والغسيل والأولويات اليومية. اتفق على العمل والراحة بشكل منفصل عن الإقامة.'],
      ['full-time-maid', 'عاملة منزل بدوام كامل في عجمان', 'حدد العمل المنتظم والأيام والساعات المطلوبة في المنزل. جدول الدوام الكامل لا يشمل السكن تلقائياً؛ ناقش الإقامة أو عدم الإقامة بشكل منفصل.'],
      ['part-time-maid', 'زيارات خادمة بدوام جزئي في عجمان', 'شارك الغرف والمهام ذات الأولوية وأوقات الزيارات المفضلة. أضف المنطقة السكنية الدقيقة وتفاصيل الدخول لمراجعة الزيارة المقترحة.'],
      ['nanny', 'طلبات المربيات في عجمان', 'جهز أعمار الأطفال وروتين الحضانة أو المدرسة وتعليمات الوالدين. اسأل عن خبرة الملف الفردي المناسبة وطريقة مشاركة التحديثات.'],
      ['monthly-maid-contract', 'طلبات عقد خادمة شهري في عجمان', 'لطلب عقد شهري في عجمان، صف احتياجات المنزل. تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها.'],
      ['maid-visa', 'استفسارات تأشيرة الخادمة في عجمان', 'وضح الوضع الحالي للعاملة والكفيل. تواصل مع عناية لتأكيد الدعم المتاح لحالتك والمتطلبات والرسوم المنطبقة.']
    ]
  },
  'maid-services-dubai': {
    en: [
      ['live-in-maid', 'Live-in maid for a Dubai household', 'Explain the household routine and accommodation proposal alongside the duties. Residence alone does not define the work schedule; review both before comparing a live-in option.'],
      ['full-time-maid', 'Full-time maid enquiries in Dubai', 'For a villa or apartment, describe the rooms, regular laundry and daily workload. Confirm the days, hours and live-in or live-out model rather than choosing on the job title alone.'],
      ['part-time-maid', 'Scheduled maid visits in Dubai', 'Prioritize tasks for each visit and specify your area, building access and preferred time window. Ask what supplies and equipment should be ready.'],
      ['nanny', 'Nanny services for Dubai families', 'Working parents can describe childcare hours, school or nursery preparation and handovers. Review relevant individual experience and distinguish ongoing nanny care from occasional babysitting.'],
      ['monthly-maid-contract', 'Monthly contract enquiries in Dubai', 'Share your Dubai area, building access and household priorities for a monthly contract enquiry. Contact INAYA to confirm the working arrangement, duties, schedule and terms included in your selected package.'],
      ['maid-visa', 'Maid visa enquiries from Dubai', 'State the current case and ask what support INAYA can provide. Confirm applicable requirements, responsible parties and fees before relying on a checklist or proposed next step.']
    ],
    ar: [
      ['live-in-maid', 'خادمة مقيمة لأسرة في دبي', 'وضح روتين المنزل واقتراح السكن إلى جانب المهام. الإقامة وحدها لا تحدد جدول العمل؛ راجع الاثنين قبل مقارنة الخيار.'],
      ['full-time-maid', 'طلبات خادمة بدوام كامل في دبي', 'صف الغرف والغسيل المنتظم والعمل اليومي في الفيلا أو الشقة. أكد الأيام والساعات والإقامة أو عدمها بدلاً من الاختيار بالمسمى وحده.'],
      ['part-time-maid', 'زيارات خادمة مجدولة في دبي', 'رتب مهام كل زيارة وحدد المنطقة والدخول إلى المبنى والفترة الزمنية المفضلة. اسأل عن المستلزمات والمعدات المطلوب تجهيزها.'],
      ['nanny', 'خدمات المربيات لأسر دبي', 'يمكن للوالدين العاملين توضيح ساعات الرعاية والاستعداد للمدرسة أو الحضانة وتسليم الرعاية. راجع الخبرة الفردية وميز الرعاية المستمرة عن جليسة الأطفال المؤقتة.'],
      ['monthly-maid-contract', 'طلبات عقد خادمة شهري في دبي', 'شارك منطقة المنزل في دبي وتفاصيل الدخول والأولويات لطلب العقد الشهري. تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها.'],
      ['maid-visa', 'استفسارات تأشيرة الخادمة من دبي', 'حدد الحالة الحالية واسأل عن الدعم الذي يمكن لعناية تقديمه. أكد المتطلبات والأطراف المسؤولة والرسوم قبل الاعتماد على قائمة أو خطوة مقترحة.']
    ]
  },
  'maid-services-sharjah': {
    en: [
      ['live-in-maid', 'Live-in maid enquiries in Sharjah', 'Describe the family’s daily routine, cleaning priorities and accommodation. Agree the hours and rest arrangements; living in is not a promise of uninterrupted support.'],
      ['full-time-maid', 'Full-time maid for a Sharjah home', 'List regular household tasks and how they fit your family and school schedule. Compare the work schedule separately from whether the worker lives in the home.'],
      ['part-time-maid', 'Part-time maid visits in Sharjah', 'Specify the rooms and tasks that matter most, preferred days and the exact area. Discuss visit length and practical access before confirming a scheduled visit.'],
      ['nanny', 'Nanny enquiries for Sharjah families', 'Separate child supervision, meals and school preparation from household cleaning. Share ages and parent instructions and ask about suitable individual experience and communication.'],
      ['monthly-maid-contract', 'Monthly household contract enquiries in Sharjah', 'Describe your Sharjah family routine and the recurring household work you want to discuss. Contact INAYA to confirm the working arrangement, duties, schedule and terms included in your selected package.'],
      ['maid-visa', 'Maid visa enquiries from Sharjah', 'Prepare the current worker and sponsor situation and your question. Contact INAYA to confirm available case support, applicable requirements and fees; no submission or approval is promised here.']
    ],
    ar: [
      ['live-in-maid', 'طلبات خادمة مقيمة في الشارقة', 'صف روتين الأسرة وأولويات التنظيف والسكن. اتفق على الساعات والراحة؛ الإقامة ليست وعداً بدعم متواصل بلا توقف.'],
      ['full-time-maid', 'خادمة بدوام كامل لمنزل في الشارقة', 'حدد المهام المنتظمة وملاءمتها لجدول الأسرة والمدرسة. قارن جدول العمل بشكل منفصل عن إقامة العاملة في المنزل.'],
      ['part-time-maid', 'زيارات خادمة بدوام جزئي في الشارقة', 'حدد الغرف والمهام الأهم والأيام المفضلة والمنطقة الدقيقة. ناقش مدة الزيارة والدخول قبل تأكيد الموعد.'],
      ['nanny', 'طلبات المربيات لأسر الشارقة', 'افصل الإشراف على الأطفال والوجبات والاستعداد للمدرسة عن التنظيف. شارك الأعمار وتعليمات الوالدين واسأل عن الخبرة الفردية والتواصل المناسبين.'],
      ['monthly-maid-contract', 'طلبات عقد خادمة شهري في الشارقة', 'صف روتين الأسرة في الشارقة والعمل المنزلي المتكرر المطلوب مناقشته. تواصل مع عناية لتأكيد ترتيب العمل والمهام والجدول والشروط المشمولة في الباقة التي تختارها.'],
      ['maid-visa', 'استفسارات تأشيرة الخادمة من الشارقة', 'جهز الوضع الحالي للعاملة والكفيل وسؤالك. تواصل مع عناية لتأكيد دعم الحالة والمتطلبات والرسوم؛ لا يوجد وعد بتقديم الطلب أو الموافقة هنا.']
    ]
  }
};

export function addLocalGuidance(location: LocationServicePage): LocationServicePage {
  const local = notes[location.slug as keyof typeof notes];
  if (!local) return location;
  const visitContext = {
    'maid-services-ajman': { en: 'Before an Ajman office visit, prepare your household duties and the working arrangement you want to discuss.', ar: 'قبل زيارة المكتب في عجمان، جهز المهام المنزلية وترتيب العمل المطلوب مناقشته.' },
    'maid-services-dubai': { en: 'Dubai families can start by sharing the residential area, building access and preferred schedule; confirm visit timing before travelling to the office.', ar: 'يمكن لأسر دبي البدء بمشاركة المنطقة السكنية وتفاصيل الدخول والجدول المفضل؛ أكد موعد الزيارة قبل التوجه إلى المكتب.' },
    'maid-services-sharjah': { en: 'For a Sharjah enquiry, share the family and school routine and required hours so the discussion concerns the actual household need.', ar: 'لاستفسار من الشارقة، شارك روتين الأسرة والمدرسة والساعات المطلوبة كي تركز المناقشة على احتياج المنزل الفعلي.' }
  }[location.slug as keyof typeof notes];
  const comparison = {
    'maid-services-ajman': {
      pricing: { en: 'For an Ajman office discussion, choose visit length or a monthly commitment from the pricing comparison before requesting a written quotation. Published live-in and live-out prices are equal. Ask the team to record household duties, transport, supplies and applicable tax.', ar: 'لمناقشة الطلب في مكتب عجمان، اختر مدة الزيارة أو الالتزام الشهري من مقارنة الأسعار قبل طلب العرض المكتوب. السعر المنشور واحد للمقيمة وغير المقيمة. اطلب تسجيل المهام والنقل والمستلزمات والضريبة المنطبقة.' },
      review: { en: 'Bring an Ajman household task list to the agency discussion and compare it with the proposed individual profile. Ask which experience, references and documents can be reviewed, then check written costs and support terms. Read genuine reviews in context; neither a review nor nationality guarantees suitability.', ar: 'جهز قائمة مهام منزلك في عجمان وقارنها بالملف الفردي المقترح أثناء المناقشة. اسأل عن الخبرة والمراجع والمستندات المتاحة للمراجعة، ثم تحقق من التكاليف وشروط الدعم المكتوبة. اقرأ التقييمات الحقيقية ضمن سياقها؛ فلا يضمن التقييم أو الجنسية الملاءمة.' }
    },
    'maid-services-dubai': {
      pricing: { en: 'When comparing a Dubai cleaning visit with monthly support, use the pricing page for the published duration and commitment. Live-in and live-out rates are the same. Include the actual Dubai address, arrival window and transport responsibilities in the quotation, alongside supplies, duties and applicable tax.', ar: 'عند مقارنة زيارة تنظيف في دبي بالدعم الشهري، راجع مدة الباقة والالتزام في صفحة الأسعار. أسعار المقيمة وغير المقيمة واحدة. أدرج العنوان الفعلي في دبي وفترة الوصول ومسؤوليات النقل في العرض، مع المستلزمات والمهام والضريبة المنطبقة.' },
      review: { en: 'For a Dubai enquiry, compare providers against your actual childcare or household role and required schedule. Check the proposed person’s relevant experience and available references, rather than inferring ability from nationality or selected reviews. Read genuine feedback with its date and service context, and obtain written costs and support conditions.', ar: 'لطلب من دبي، قارن الجهات وفق دور الرعاية أو العمل المنزلي والجدول المطلوب فعلياً. افحص خبرة المرشحة والمراجع المتاحة بدلاً من استنتاج المهارة من الجنسية أو تقييم مختار. اقرأ الملاحظات الحقيقية مع تاريخها ونوع خدمتها، واحصل على التكاليف وشروط الدعم كتابةً.' }
    },
    'maid-services-sharjah': {
      pricing: { en: 'Sharjah households can compare short visits and longer commitments on the pricing page, then discuss how the plan fits school times and home access. The published price is equal for live-in and live-out. Confirm the final duties, schedule, transport, supplies and applicable tax in writing.', ar: 'يمكن لأسر الشارقة مقارنة الزيارات والالتزامات الأطول في صفحة الأسعار، ثم مناقشة ملاءمة الخطة لأوقات المدرسة والدخول إلى المنزل. السعر المنشور واحد للمقيمة وغير المقيمة. أكد المهام والجدول والنقل والمستلزمات والضريبة المنطبقة كتابةً.' },
      review: { en: 'Use your Sharjah family routine to assess the proposed worker’s task experience and communication. Ask which references and documents are available to check. Compare written scope, costs and follow-up conditions alongside genuine dated reviews; a nationality label or positive review does not establish an individual match.', ar: 'استخدم روتين أسرتك في الشارقة لتقييم خبرة المرشحة في المهام والتواصل. اسأل عن المراجع والمستندات المتاحة للتحقق. قارن النطاق والتكاليف والمتابعة المكتوبة مع التقييمات الحقيقية المؤرخة؛ فالجنسية أو التقييم الإيجابي لا يثبتان الملاءمة الفردية.' }
    }
  }[location.slug as keyof typeof notes];
  return {
    ...location,
    ...(location.slug === 'maid-services-ajman' ? {
      lead: {
        en: 'INAYA Tadbeer centre at Grand Mall, Ajman, supports domestic-worker recruitment, home cleaning and related visa typing and document processing. Describe your household or existing-worker case so the team can confirm the appropriate service.',
        ar: 'يدعم مركز عناية تدبير في جراند مول بعجمان استقدام العمالة المنزلية وتنظيف المنازل والطباعة ومعالجة المستندات المرتبطة بها. صف احتياج المنزل أو حالة العاملة الموجودة ليؤكد الفريق الخدمة المناسبة.'
      },
      intro: {
        en: 'Choose the request before comparing offers: recruitment begins with the role and individual profile, cleaning with tasks and visit length, and domestic-worker typing with the application and sponsor situation. INAYA confirms availability, responsibilities, case requirements and costs in the written scope; an enquiry does not confirm a booking or government approval.',
        ar: 'حدد الطلب قبل مقارنة العروض: يبدأ الاستقدام بالدور والملف الفردي، والتنظيف بالمهام ومدة الزيارة، وطباعة معاملات العمالة المنزلية بنوع الطلب ووضع الكفيل. تؤكد عناية التوفر والمسؤوليات ومتطلبات الحالة والتكاليف في النطاق المكتوب؛ فالاستفسار لا يثبت الحجز أو الموافقة الرسمية.'
      },
      metaDescription: {
        en: 'INAYA Tadbeer centre in Ajman for domestic-worker recruitment, cleaning visits and related visa typing. Confirm duties, availability and case-specific written scope.',
        ar: 'مركز عناية تدبير في عجمان للاستقدام والتنظيف وطباعة معاملات العمالة المنزلية. أكد المهام والتوفر والنطاق المكتوب المناسب لحالتك.'
      }
    } : {}),
    serviceNotes: local.en.map(([slug, title, description], index) => ({
      slug,
      title: { en: title, ar: local.ar[index][1] },
      description: {
        en: description,
        ar: local.ar[index][2]
      }
    })),
    popularServices: [...location.popularServices, { slug: 'full-time-maid', title: { en: 'Full-time maid', ar: 'خادمة بدوام كامل' } }, { slug: 'monthly-maid-contract', title: { en: 'Monthly maid contract enquiries', ar: 'طلبات عقد خادمة شهري' } }],
    faqs: [...location.faqs.map((faq) => location.slug !== 'maid-services-ajman' && /visa/i.test(faq.question.en) ? { ...faq, answer: {
      en: 'Contact INAYA to confirm the support available for your case, applicable requirements and fees.',
      ar: 'تواصل مع عناية لتأكيد الدعم المتاح لحالتك والمتطلبات والرسوم المنطبقة.'
    } } : faq), {
      question: { en: 'What package prices apply, and are live-in and live-out priced differently?', ar: 'ما أسعار الباقات وهل تختلف بين الخدمة المقيمة وغير المقيمة؟' },
      answer: comparison.pricing, links: [{ route: 'pricing', label: { en: 'Compare current package prices and commitments', ar: 'قارن أسعار الباقات والتزاماتها الحالية' } }]
    }, {
      question: { en: 'Where is the office, and does coverage confirm availability?', ar: 'أين المكتب وهل التغطية تؤكد التوفر؟' },
      answer: { en: `${visitContext.en} INAYA’s office is at Grand Mall, ground floor, Al Rashidiya 3, Ajman. Dubai and Sharjah are service enquiry areas, not additional office locations. Share the exact address and schedule so the team can confirm current options. Walk-ins can collect a counter token during office hours, or request an appointment online for the team to confirm.`, ar: `${visitContext.ar} مكتب عناية في جراند مول، الطابق الأرضي، الراشدية 3، عجمان. دبي والشارقة منطقتان لاستفسارات الخدمة وليستا موقعين لمكاتب إضافية. شارك العنوان والجدول لتأكيد الخيارات الحالية. يمكن الزيارة المباشرة وأخذ تذكرة انتظار من الكاونتر خلال ساعات العمل، أو طلب موعد عبر الإنترنت ليؤكده الفريق.` }
    }, {
      question: { en: 'How can I compare an agency and a proposed worker?', ar: 'كيف أقارن الجهة والمرشحة المقترحة؟' },
      answer: comparison.review
    }]
  };
}
