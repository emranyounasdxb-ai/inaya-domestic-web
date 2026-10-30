import type { Lang, Pair, ServiceCopy } from './service-page-copy';
import { monthlyPackageSummary, packageSections } from './package-content';

export const reviewedServiceSlugs = ['part-time-maid', 'monthly-maid-contract', 'nanny', 'live-in-maid', 'maid-visa'];

const pairs = (lang: Lang, rows: [string, string, string, string][]): Pair[] => rows.map(([en, enText, ar, arText]) => ({ title: lang === 'ar' ? ar : en, text: lang === 'ar' ? arText : enText }));

export const householdResponsibilities = {
  en: ['Agree the individual duties, work schedule, rest and a household contact.', 'Record accommodation and meals for the selected live-in or live-out arrangement.', 'Agree transport, safe access, cleaning products and equipment responsibilities in writing.', 'Give practical household instructions and raise changes or concerns through the agreed service plan.'],
  ar: ['الاتفاق على المهام الفردية وجدول العمل والراحة ومسؤول التواصل في المنزل.', 'تسجيل مسؤوليات السكن والطعام بحسب ترتيب الإقامة داخل المنزل أو خارجه.', 'تحديد مسؤوليات النقل والدخول الآمن ومواد التنظيف والمعدات كتابةً.', 'تقديم تعليمات المنزل العملية ومناقشة التغييرات والملاحظات عبر خطة الخدمة المتفق عليها.']
};

export const liveInChecklist = {
  en: ['Accommodation and privacy arrangements', 'Meals and who provides them', 'Agreed cleaning, laundry and kitchen duties', 'Daily working schedule and rest', 'Household contact and handover instructions', 'Childcare only if separately agreed for a suitable individual profile'],
  ar: ['ترتيبات السكن والخصوصية', 'الوجبات ومسؤولية توفيرها', 'مهام التنظيف والغسيل والمطبخ المتفق عليها', 'جدول العمل اليومي والراحة', 'مسؤول التواصل في المنزل وتعليمات التسليم', 'رعاية الأطفال فقط عند الاتفاق عليها بصورة مستقلة لملف فردي مناسب']
};

// This presentation layer uses existing approved scope and package terms.
// It does not change prices, refund rules, availability or employment commitments.
export function improveServicePage(slug: string, lang: Lang, copy: ServiceCopy): ServiceCopy {
  if (!reviewedServiceSlugs.includes(slug)) return copy;
  const ar = lang === 'ar';
  const monthly = ['monthly-maid-contract', 'nanny', 'live-in-maid'].includes(slug);
  const result: ServiceCopy = { ...copy, related: [...new Set(copy.related)].filter(s => s !== slug) };
  if (monthly) {
    // Monthly employment benefits are displayed once in their own responsibility group.
    result.included = copy.included.filter(p => !packageSections.inclusions.points[lang].includes(p));
    result.includedTitle = ar ? 'المهام المتفق عليها للدور' : 'Agreed duties for the individual role';
    result.perfectTitle = ar ? 'مسؤوليات الأسرة' : 'Household responsibilities';
    result.perfect = householdResponsibilities[lang];
    result.pricingText = ar ? 'اختر مدة الالتزام أدناه. الأسعار المنشورة واحدة للخدمة المقيمة وغير المقيمة؛ وتسجل المهام والجدول والمسؤوليات والضريبة المنطبقة والمبلغ النهائي في الاتفاق.' : 'Choose the commitment below. Published live-in and live-out prices are the same; duties, schedule, responsibilities, applicable tax and the final amount are recorded in the agreement.';
    result.faqs = result.faqs.filter(f => !['What are the monthly payment and cancellation terms?', 'ما شروط السداد والإلغاء الشهري؟', 'What follow-up and replacement support are included?', 'ما المتابعة والاستبدال المشمولان؟'].includes(f.title));
  }
  if (slug === 'part-time-maid') {
    result.cards = pairs(lang, [
      ['Visit packages', '4 hours for AED 120 or 8 hours for AED 200. Confirm availability and the written task list before booking.', 'باقات الزيارة', '4 ساعات مقابل 120 درهماً أو 8 ساعات مقابل 200 درهم. أكد التوفر وقائمة المهام المكتوبة قبل الحجز.'],
      ['Rooms and priorities', 'Name the rooms and the tasks to do first. A visit duration does not guarantee a fixed room count.', 'الغرف والأولويات', 'حدد الغرف والمهام ذات الأولوية. لا تضمن مدة الزيارة إنجاز عدد ثابت من الغرف.'],
      ['Arrival preparation', 'Share the address, access instructions and preferred time window; agree who provides products, equipment and transport.', 'الاستعداد للوصول', 'شارك العنوان وتعليمات الدخول والفترة المفضلة؛ واتفق على مسؤولية المنتجات والمعدات والنقل.']
    ]);
    result.whyTitle = ar ? 'اختر ترتيب الزيارة' : 'Choose the visit arrangement';
    result.why = ar ? ['حدد زيارة واحدة أو جدول زيارات متكررة.', 'اختر 4 أو 8 ساعات وفق الأولويات؛ وناقش المدد الأخرى بعرض مستقل.', 'حدد وقت الوصول وطريقة تسليم التعليمات.', 'راجع النطاق المكتوب قبل تأكيد الموعد.'] : ['Choose a single visit or a recurring visit schedule.', 'Compare 4 or 8 hours against your priorities; other durations require a separate quotation.', 'Set the arrival window and instruction handover.', 'Review the written scope before confirming the date.'];
    result.countriesTitle = ar ? 'جهز خطة الزيارة' : 'Prepare the visit plan';
    result.countriesText = ar ? 'تساعد هذه التفاصيل على ترتيب المهام ضمن الوقت المتفق عليه.' : 'Use these details to fit the agreed work into the available visit time.';
    result.countries = pairs(lang, [
      ['Rooms and surfaces', 'List the rooms, accessible surfaces and delicate finishes. Set aside private belongings before the visit.', 'الغرف والأسطح', 'حدد الغرف والأسطح المتاحة والخامات الحساسة، وأبعد المتعلقات الخاصة قبل الزيارة.'],
      ['Laundry and ironing', 'Agree the priority items and care instructions, and make suitable working equipment available as agreed.', 'الغسيل والكي', 'اتفق على الملابس ذات الأولوية وتعليمات العناية، وجهز معدات صالحة وفق الاتفاق.'],
      ['Kitchen assistance', 'Name the agreed kitchen tasks and appliance instructions; do not assume specialist cooking or childcare is included.', 'المساعدة في المطبخ', 'حدد مهام المطبخ وتعليمات الأجهزة المتفق عليها؛ ولا تفترض شمول الطبخ المتخصص أو رعاية الأطفال.'],
      ['Time and changes', 'Confirm extra time, rescheduling and any resulting cost against the agreed terms before changing the visit.', 'الوقت والتغييرات', 'أكد الوقت الإضافي وتغيير الموعد وأي تكلفة مترتبة وفق الشروط المتفق عليها قبل تعديل الزيارة.'],
      ['Products and equipment', 'Confirm who supplies each item. Explain surface-specific products; no blanket inclusion is assumed.', 'المنتجات والمعدات', 'أكد من يوفر كل أداة أو منتج، واشرح متطلبات الأسطح؛ ولا يفترض شمول المستلزمات دائماً.'],
      ['Access and transport', 'Share entry instructions and the household contact. Record transport and arrival responsibilities in the written proposal.', 'الدخول والنقل', 'شارك تعليمات الدخول ومسؤول التواصل، وسجل مسؤوليات النقل والوصول في العرض المكتوب.']
    ]);
    result.faqs = result.faqs.filter(f => !['Which package and scope should I confirm?', 'ما الباقة والنطاق اللذان يجب تأكيدهما؟'].includes(f.title));
  }
  if (slug === 'monthly-maid-contract') {
    result.faqs = result.faqs.filter(f => !['payments', 'cancellation', 'followUp'].some(key => f.text.includes(packageSections[key].body[lang])));
    result.whatText = ar ? 'تغطي الخدمة الشهرية الدعم المنزلي وفق الدور والمهام المكتوبة، وراتب العاملة المتفق عليه وإدارته، والمزايا والإجراءات المنطبقة ضمن الاتفاق الشهري. تتولى عناية تنسيق الخدمة والمتابعة وإدارة طلبات الاستبدال المؤهلة؛ وتسجل مسؤوليات الأسرة والعناصر التي تحتاج تأكيداً في العرض بشكل منفصل.' : 'Monthly service covers household support within the written role, the worker’s agreed salary and its administration, and the applicable benefits and processing within the monthly agreement. INAYA coordinates service, follow-up and eligible replacement administration; household responsibilities and items requiring quotation confirmation are recorded separately.';
    result.cards = pairs(lang, [
      ['30-day service', 'AED 3,500 for a 30-day service period, with duties, hours and rest agreed in writing.', 'خدمة 30 يوماً', '3,500 درهم لفترة خدمة من 30 يوماً، مع الاتفاق كتابةً على المهام والساعات والراحة.'],
      ['Six-month commitment', 'AED 3,250 each month with a six-month service commitment; this is not the total for six months.', 'التزام 6 أشهر', '3,250 درهماً كل شهر مع الالتزام بالخدمة لمدة 6 أشهر؛ وليس إجمالي الأشهر الستة.'],
      ['Twelve-month commitment', 'AED 3,000 each month with a twelve-month service commitment; this is not the total for the year.', 'التزام 12 شهراً', '3,000 درهم كل شهر مع الالتزام بالخدمة لمدة 12 شهراً؛ وليس إجمالي السنة.']
    ]);
    result.whyTitle = ar ? 'تنسيق الخدمة لدى عناية' : 'INAYA service coordination';
    result.why = ar ? ['مراجعة الاحتياج والملف الفردي قبل تأكيد الخدمة.', 'تحديد الدور والمهام وخطة المتابعة كتابةً.', 'إدارة الراتب والمزايا المنطبقة ضمن الاتفاق الشهري.', 'مراجعة طلبات الاستبدال المؤهلة وفق الشروط المتفق عليها.'] : ['Requirement and individual profile review before service confirmation.', 'Written role, duties and follow-up plan.', 'Salary administration and applicable benefits within the monthly agreement.', 'Review of eligible replacement requests under the agreed conditions.'];
    result.countriesTitle = ar ? 'ما يحتاج تأكيداً في العرض' : 'What to confirm in the quotation';
    result.countriesText = ar ? 'افصل مزايا الاتفاق الشهري عن مسؤوليات المنزل والتفاصيل الخاصة بحالتك.' : 'Separate monthly agreement benefits from household responsibilities and case-specific details.';
    result.countries = pairs(lang, [
      ['Duties and schedule', 'Confirm the individual role, working hours, rest and household priorities.', 'المهام والجدول', 'أكد الدور الفردي وساعات العمل والراحة وأولويات المنزل.'],
      ['Residence and supplies', 'Record accommodation, meals, transport, products and equipment responsibilities.', 'الإقامة والمستلزمات', 'سجل مسؤوليات السكن والطعام والنقل والمنتجات والمعدات.'],
      ['Amount and service plan', 'Confirm applicable tax, the final payable amount, start arrangements and the follow-up contact.', 'المبلغ وخطة الخدمة', 'أكد الضريبة المنطبقة والمبلغ النهائي وترتيبات البدء ومسؤول المتابعة.']
    ]);
    result.faqs = result.faqs.map(f => ['What is the advertised standard monthly arrangement?', 'ما ترتيب الخدمة الشهرية القياسي المعلن؟'].includes(f.title) || /Half-day: AED 120|نصف يوم: 120/.test(f.text) ? { ...f, text: monthlyPackageSummary[lang] } : f);
    result.faqs.push({ title: ar ? 'ما الذي يبقى ضمن مسؤوليات الأسرة؟' : 'What remains the household’s responsibility?', text: householdResponsibilities[lang].join(' ') });
  }
  if (slug === 'nanny' || slug === 'live-in-maid') {
    const nanny = slug === 'nanny';
    result.cards = nanny ? pairs(lang, [
      ['Childcare duties', 'Supervision, play, meals, hygiene and school preparation follow parent instructions and the agreed role. Cleaning is a separate duty.', 'مهام رعاية الأطفال', 'تتبع المراقبة واللعب والوجبات والنظافة والاستعداد للمدرسة تعليمات الوالدين والدور المتفق عليه. التنظيف مهمة منفصلة.'],
      ['Relevant age-group experience', 'Review the individual’s experience with babies, toddlers or school-age children against your family’s actual needs.', 'الخبرة مع الفئة العمرية', 'راجع خبرة المرشحة الفردية مع الرضع أو الصغار أو أطفال المدرسة وفق احتياج أسرتك الفعلي.'],
      ['Residence and scheduling', 'Discuss live-in or live-out availability, required days and hours, parent handover and transport responsibilities.', 'الإقامة والجدول', 'ناقش توفر الإقامة داخل المنزل أو خارجه والأيام والساعات المطلوبة وتسليم الرعاية ومسؤوليات النقل.']
    ]) : pairs(lang, [
      ['Agreed household role', 'Cleaning, laundry and kitchen assistance follow the written duties; childcare is not automatically included.', 'الدور المنزلي المتفق عليه', 'يتبع التنظيف والغسيل والمساعدة في المطبخ المهام المكتوبة؛ ولا تشمل تلقائياً رعاية الأطفال.'],
      ['Residence and rest', 'Live-in describes accommodation, not continuous work. Agree meals, hours, rest and privacy before service starts.', 'السكن والراحة', 'تصف الإقامة السكن لا العمل المتواصل. اتفق على الطعام والساعات والراحة والخصوصية قبل البدء.'],
      ['Written service plan', 'INAYA reviews the household requirement and coordinates the individual profile, onboarding and agreed follow-up.', 'خطة خدمة مكتوبة', 'تراجع عناية احتياج المنزل وتنسق الملف الفردي والتهيئة والمتابعة المتفق عليها.']
    ]);
    result.countriesTitle = ar ? 'راجع ملاءمة الملف الفردي' : 'Review individual suitability';
    result.countriesText = ar ? 'الجنسية ليست دليلاً على المهارة. راجع الخبرة والتواصل والمراجع وأدلة التدريب المتاحة لكل مرشحة؛ ولا تفترض وجود شهادة لدى الجميع.' : 'Nationality does not establish competence. Review each person’s experience, communication, references and available training evidence; do not assume every candidate holds a certificate.';
    result.countries = pairs(lang, [
      [nanny ? 'Age-group experience' : 'Relevant household experience', nanny ? 'Discuss the ages previously supported, daily routines and the care tasks required for your child.' : 'Compare experience with the actual cleaning, laundry and kitchen duties in your home.', nanny ? 'الخبرة مع الأعمار' : 'الخبرة المنزلية المناسبة', nanny ? 'ناقش الأعمار التي سبق دعمها والروتين اليومي ومهام الرعاية المطلوبة لطفلك.' : 'قارن الخبرة بمهام التنظيف والغسيل والمطبخ المطلوبة فعلياً في منزلك.'],
      ['Communication', 'Check how instructions, changes and household updates will be understood and shared.', 'التواصل', 'راجع كيفية فهم التعليمات والتغييرات ومشاركة تحديثات المنزل.'],
      ['References and training evidence', 'Ask which individual references and training records can be reviewed. A job title is not proof of qualification.', 'المراجع وأدلة التدريب', 'اسأل عن المراجع وسجلات التدريب الفردية المتاحة للمراجعة. المسمى الوظيفي ليس إثباتاً للمؤهل.'],
      ['Handover and boundaries', nanny ? 'Agree parent instructions, supervision, meals, hygiene and handover; separate clinical care and general cleaning from childcare.' : 'Agree task priorities, household access and the contact person. Discuss childcare separately if required.', 'التسليم وحدود الدور', nanny ? 'اتفق على تعليمات الوالدين والمراقبة والوجبات والنظافة وتسليم الرعاية؛ وافصل الرعاية الطبية والتنظيف العام عن رعاية الأطفال.' : 'اتفق على الأولويات والدخول ومسؤول التواصل. ناقش رعاية الأطفال بشكل مستقل إذا لزمت.']
    ]);
    result.whyTitle = ar ? 'تنسيق الخدمة لدى عناية' : 'INAYA service coordination';
    result.why = ar ? ['مراجعة متطلبات الأسرة قبل اقتراح الملف.', 'تقييم المرشحة والتهيئة الأولية وفق الاتفاق المنطبق.', 'تأكيد الدور والمهام وترتيبات البدء كتابةً.', 'متابعة ملاحظات الأسرة وفق خطة الخدمة المتفق عليها.'] : ['Household requirement review before proposing a profile.', 'Candidate assessment and initial orientation under the applicable agreement.', 'Written role, duties and start arrangements.', 'Household feedback coordinated through the agreed service plan.'];
  }
  if (slug === 'maid-visa') {
    result.countriesTitle = ar ? 'حدد المعاملة المطلوبة' : 'Choose the requested transaction';
    result.countriesText = ar ? 'هذه مسارات استفسار مختلفة؛ تحدد المتطلبات والرسوم والخطوة التالية وفق الحالة والجهة المختصة.' : 'These are different enquiry routes; requirements, fees and the next step depend on the case and responsible authority.';
    result.countries = pairs(lang, [
      ['New application', 'State the emirate, requested domestic-worker arrangement, worker and sponsor situation, and whether preparation has started.', 'طلب جديد', 'حدد الإمارة وترتيب العمالة المنزلية المطلوب ووضع العاملة والكفيل وما إذا كان تجهيز الطلب قد بدأ.'],
      ['Renewal', 'Explain the current residence or permit stage and relevant expiry timing. Confirm the case-specific document checklist with the team.', 'تجديد', 'وضح مرحلة الإقامة أو التصريح الحالية وموعد الانتهاء ذي الصلة. أكد قائمة المستندات الخاصة بالحالة مع الفريق.'],
      ['Cancellation', 'Identify the arrangement to be closed and the current application stage. Confirm responsibilities and applicable steps before proceeding.', 'إلغاء', 'حدد الترتيب المطلوب إنهاؤه ومرحلة الطلب الحالية. أكد المسؤوليات والخطوات المنطبقة قبل المتابعة.'],
      ['Status follow-up', 'Explain the action already taken and whether an application reference or official update exists. Share documents only through a team-confirmed channel.', 'متابعة الحالة', 'وضح الإجراء المنفذ وما إذا كان هناك مرجع طلب أو تحديث رسمي. شارك المستندات عبر قناة يؤكدها الفريق فقط.']
    ]);
    result.pricing = pairs(lang, [
      ['Visa-only quotation', 'Separately contracted visa support is itemised for the actual case and agreed processing steps.', 'عرض خدمة التأشيرة فقط', 'تفصل خدمة التأشيرة المتعاقد عليها بصورة مستقلة بحسب الحالة وخطوات المعالجة المتفق عليها.'],
      ['Applicable monthly agreement', 'Relevant processing and government fees are included within the applicable managed monthly agreement; review its written scope rather than charging the same included item again.', 'الاتفاق الشهري المنطبق', 'تشمل الخدمة الشهرية المدارة المنطبقة الإجراءات والرسوم الحكومية ذات الصلة؛ راجع نطاقها المكتوب ولا تعاد مطالبة العميل بالعنصر المشمول نفسه.']
    ]).map(p => ({...p, points: ar ? ['تأكيد المتطلبات والمسؤوليات والمبلغ كتابةً', 'القرار الرسمي والتوقيت يعتمدان على الحالة والجهة المختصة'] : ['Confirm requirements, responsibilities and amount in writing', 'Official decisions and timing depend on the case and authority']}));
    result.whyTitle = ar ? 'حدود الإجراءات والقرارات' : 'Processing boundaries and decisions';
    result.perfectTitle = ar ? 'معلومات الاستفسار الأول' : 'Initial enquiry information';
    result.perfect = ar ? ['الإمارة والمعاملة المطلوبة.', 'وضع العاملة والكفيل ومرحلة الطلب الحالية.', 'موعد انتهاء ذي صلة أو تحديث رسمي، إن وجد.', 'بيانات التواصل دون مستندات هوية أو كلمات مرور أو رموز تحقق.'] : ['Emirate and requested transaction.', 'Current worker and sponsor situation and application stage.', 'Relevant expiry timing or official update, if applicable.', 'Contact details without identity documents, passwords or verification codes.'];
    result.journeyText = ar ? 'يرسل نموذج الموقع تفاصيل الاستفسار إلى المكتب للمتابعة، ولا يقدم طلباً حكومياً أو يثبت الحجز أو الموافقة. أكد قناة مشاركة المستندات مع الفريق قبل إرسالها.' : 'The website form sends enquiry details to the office for follow-up. It does not submit a government application or confirm a booking or approval. Confirm the document-sharing channel with the team before sending records.';
    result.finalText = result.journeyText;
  }
  return result;
}
