import { packageSections } from '@/lib/package-content';
import Link from 'next/link';
import PageBreadcrumbs from "@/components/PageBreadcrumbs";

type IconName = 'chat' | 'search' | 'shield' | 'file' | 'support' | 'arrow' | 'spark';

function LineIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    chat: <><path {...common} d="M5 6.8A3.8 3.8 0 0 1 8.8 3h6.4A3.8 3.8 0 0 1 19 6.8v3.8a3.8 3.8 0 0 1-3.8 3.8H10l-4.5 3.2.9-4A3.8 3.8 0 0 1 5 10.6V6.8Z" /></>,
    search: <><path {...common} d="m20 20-4.2-4.2" /><path {...common} d="M10.8 18a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" /></>,
    shield: <><path {...common} d="M12 3 19 6v5c0 4.6-3 7.7-7 10-4-2.3-7-5.4-7-10V6l7-3Z" /><path {...common} d="m9.2 11.8 1.9 1.9 3.8-4" /></>,
    file: <><path {...common} d="M7 3h7l4 4v14H7V3Z" /><path {...common} d="M14 3v5h4" /><path {...common} d="M9.5 13h5M9.5 16h5" /></>,
    support: <><path {...common} d="M4 12a8 8 0 1 1 16 0" /><path {...common} d="M4 12v3a2 2 0 0 0 2 2h1v-5H4ZM20 12v3a2 2 0 0 1-2 2h-1v-5h3Z" /><path {...common} d="M9 20h3a4 4 0 0 0 4-4" /></>,
    arrow: <><path {...common} d="M5 12h14" /><path {...common} d="m13 6 6 6-6 6" /></>,
    spark: <><path {...common} d="M12 3l1.5 5.1L19 10l-5.5 1.9L12 17l-1.5-5.1L5 10l5.5-1.9L12 3Z" /></>
  };

  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

export default async function HowItWorksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl lg:text-6xl'
    : 'font-heading text-4xl font-bold leading-[1.05] text-primary-900 sm:text-5xl lg:text-6xl';
  const sectionTitleClass = isArabic
    ? 'font-arabic text-2xl font-bold leading-[1.35] text-primary-900 sm:text-3xl'
    : 'font-heading text-2xl font-bold leading-tight text-primary-900 sm:text-3xl';

  const copy = {
    badge: isArabic ? 'عملية واضحة ومتابعة منظمة' : 'Clear process, guided support',
    title: isArabic ? 'كيف تعمل عناية للعمالة المنزلية' : 'How INAYA Domestic Workers works',
    subtitle: isArabic
      ? 'نساعد العائلات في الإمارات على اختيار الخدمة المناسبة بخطوات واضحة، متابعة ودية، وتأكيد التفاصيل قبل الحجز.'
      : 'We help UAE families choose the right domestic worker service with clear steps, friendly follow-up and confirmed details before booking.',
    primaryCta: isArabic ? 'ابدأ الطلب' : 'Start Your Request',
    whatsapp: isArabic ? 'تواصل عبر واتساب' : 'WhatsApp Us',
    overviewTitle: isArabic ? 'رحلة الخدمة من أول تواصل حتى المتابعة' : 'Your service journey from first contact to follow-up',
    overviewText: isArabic
      ? 'نرتب احتياجك حسب نوع الخدمة، الإمارة، الوقت المطلوب، والتفاصيل العائلية حتى تكون الخطوة التالية واضحة.'
      : 'We organize your requirement by service type, emirate, timing and household details, so the next step is clear.',
    processTitle: isArabic ? 'مراحل الخدمة' : 'Process sections',
    ctaTitle: isArabic ? 'هل تريد البدء الآن؟' : 'Ready to start?',
    ctaText: isArabic
      ? 'أرسل لنا احتياجك وسيتواصل معك فريق عناية لتأكيد التفاصيل والتوفر والخطوة المناسبة.'
      : 'Share your requirement and the INAYA team will confirm the details, availability and the right next step.',
    ctaButton: isArabic ? 'احجز استشارة' : 'Book Consultation'
  };

  const steps = [
    {
      icon: 'chat' as IconName,
      title: isArabic ? 'شارك احتياجك' : 'Share your requirement',
      desc: isArabic ? "شارك الدور المنزلي والمهام والإمارة والتوقيت المفضل؛ فالعرض الشهري القياسي مقيم." : "Share the household role, agreed duties, emirate and preferred timing; the standard monthly offer is live-in."
    },
    {
      icon: 'search' as IconName,
      title: isArabic ? 'نراجع الخيارات' : 'We review suitable options',
      desc: isArabic ? "راجع التوفر والخبرة الفردية والتواصل وفق الدور المختار." : "Review availability and individual experience and communication against the selected role."
    },
    {
      icon: 'shield' as IconName,
      title: isArabic ? 'تأكيد التفاصيل' : 'Confirm the details',
      desc: isArabic ? "تسلم النطاق وتفصيل السعر ومستندات السداد؛ يسدد الشهر الأول مقدماً دون رسم تجهيز منفصل أو تأمين نقدي للعرض القياسي." : "Receive the written scope, price breakdown and payment documents; the first month is prepaid with no separate setup fee or deposit for the standard offer."
    },
    {
      icon: 'support' as IconName,
      title: isArabic ? 'متابعة بعد الحجز' : 'Follow-up after booking',
      desc: isArabic ? "أكد المرشحة وابدأ بعد التصاريح النظامية المطلوبة؛ جهز تسليم احتياجات المنزل واتبع جدول متابعة الباقة." : "Confirm the candidate and start after required lawful authorisation; prepare the handover and follow the package review schedule."
    }
  ];

  const sections = [
    {
      id: 'consultation',
      icon: 'chat' as IconName,
      title: isArabic ? 'الاستشارة الأولى' : 'Initial Consultation',
      text: isArabic ? 'نبدأ بفهم احتياج الأسرة والمنطقة والوقت المناسب.' : 'We start by understanding the household need, area and preferred timing.',
      items: [
        {
          q: isArabic ? 'ما الذي نحتاجه في أول تواصل؟' : 'What do you need from me first?',
          a: isArabic ? 'نحتاج نوع الخدمة المطلوبة، الإمارة أو المنطقة، وقت البداية المناسب، وعدد أفراد الأسرة أو طبيعة الاحتياج.' : 'We need the service type, emirate or area, preferred start time and a short summary of your household requirement.'
        },
        {
          q: isArabic ? 'هل يمكن التواصل عبر واتساب؟' : 'Can I contact you on WhatsApp?',
          a: isArabic ? 'نعم. شارك نوع الخدمة والإمارة والمهام والتوقيت المفضل عبر واتساب. اسأل عن المستندات المطلوبة قبل إرسال نسخ حساسة؛ ولا يؤكد الاستفسار التوفر أو الحجز.' : 'Yes. Share the service type, emirate, duties and preferred timing through WhatsApp. Ask which documents are required before sending sensitive copies; an enquiry does not confirm availability or a booking.'
        }
      ]
    },
    {
      id: 'matching',
      icon: 'search' as IconName,
      title: isArabic ? 'اختيار الخدمة المناسبة' : 'Service Matching',
      text: isArabic ? 'نقارن نوع الخدمة مع احتياجك الفعلي قبل اقتراح الخطوة التالية.' : 'We compare the service type with your actual requirement before suggesting the next step.',
      items: [
        {
          q: isArabic ? 'كيف يتم اقتراح الخدمة المناسبة؟' : 'How do you suggest the right service?',
          a: isArabic ? "نطابق المهام المنزلية المتفق عليها مع الملفات الفردية. تقدم Essential الدعم المنزلي الاعتيادي، وتضيف Signature تقييماً للخبرة والتواصل لمتطلبات العاملة المنزلية أو المربية أو مقدمة الرعاية غير السريرية، وتخطط Black للأدوار المخصصة أو المعقدة. تحدد المهام والتوفر الاختيار." : "We match agreed household duties to individual profiles. Essential provides routine household support; Signature adds assessment of relevant experience and communication for maid, nanny or non-clinical caregiver requirements; Black plans bespoke or complex roles. Duties and availability govern the selection."
        },
        {
          q: isArabic ? 'هل الخدمة متوفرة في كل الإمارات؟' : 'Do you serve all UAE emirates?',
          a: isArabic ? 'نخدم جميع إمارات الدولة، ويتم تأكيد التوفر حسب المنطقة ونوع الخدمة والوقت المطلوب.' : 'We serve all UAE emirates, with availability confirmed by area, service type and requested timing.'
        },
        {
          q: isArabic ? 'كيف أقارن المرشحات أو أجهز مقابلة؟' : 'How do I compare candidates or prepare an interview?',
          a: isArabic ? 'ناقش خيارات مراجعة الملف أو المقابلة المتاحة قبل الاختيار. جهز أسئلة عن المهام الفعلية والخبرة المناسبة وروتين المنزل واللغة والتواصل. اطلب أمثلة على أعمال سابقة ذات صلة، وميز ما تصفه المرشحة عما تدعمه مستندات أو مراجع مؤكدة. المسمى أو الجنسية لا يثبتان مؤهلاً أو ملاءمة.' : 'Discuss available profile-review or interview options before selection. Prepare questions about the actual duties, relevant experience, household routine, language and communication. Ask for examples of relevant previous work, distinguishing the candidate’s account from documented or confirmed references. A role title or nationality does not establish a qualification or suitability.'
        }
      ]
    },
    {
      id: 'confirmation',
      icon: 'file' as IconName,
      title: isArabic ? 'التأكيد والإجراءات' : 'Confirmation & Process',
      text: isArabic ? "في العرض الشهري القياسي المدار، يسدد الشهر الأول مقدماً، ثم تتبع الدفعات اللاحقة تاريخ الفوترة الشهري المتفق عليه. لا توجد رسوم استقدام أو تجهيز منفصلة مقدماً، ولا تأمين نقدي. وتكون لخدمات الاستقدام أو التأشيرة المتعاقد عليها منفصلة عروضها وشروطها الخاصة." : "For the standard managed monthly offer, the first service month is paid in advance and later payments follow the agreed monthly billing date. There is no separate upfront recruitment/setup fee and no security deposit. Separately contracted recruitment and visa-only services have their own quotation and terms.",
      items: [
        {
          q: isArabic ? 'متى يتم تأكيد الحجز؟' : 'When is the booking confirmed?',
          a: isArabic ? "ابدأ بتحديد الدور المنزلي والمهام والموقع والتوقيت المفضل. تراجع عناية التوفر والملاءمة الفردية، وتقدم النطاق والعرض المكتوبين، ثم تؤكد المرشحة المختارة وترتيبات البدء. تبدأ الخدمة بعد الاختيار والحصول على التصاريح النظامية المطلوبة والتأكيد المكتوب. إذا اقترحت مرشحة مختلفة، يقدم الملف المعدل وتؤخذ موافقة العميل. تسجل التغييرات الجوهرية والبدائل كتابةً." : "Start with the household role, duties, location and preferred timing. INAYA reviews availability and individual suitability, provides the written scope and quote, and confirms the selected candidate and start arrangements. Service starts after selection, required lawful authorisation and written confirmation. If a different candidate is proposed, the revised profile is provided and customer consent obtained. Material changes and alternatives are recorded in writing."
        },
        {
          q: isArabic ? 'هل يتم شرح الرسوم والخطوات قبل الدفع؟' : 'Are fees and steps explained before payment?',
          a: isArabic ? "في العرض الشهري القياسي المدار، يسدد الشهر الأول مقدماً، ثم تتبع الدفعات اللاحقة تاريخ الفوترة الشهري المتفق عليه. لا توجد رسوم استقدام أو تجهيز منفصلة مقدماً، ولا تأمين نقدي. وتكون لخدمات الاستقدام أو التأشيرة المتعاقد عليها منفصلة عروضها وشروطها الخاصة." : "For the standard managed monthly offer, the first service month is paid in advance and later payments follow the agreed monthly billing date. There is no separate upfront recruitment/setup fee and no security deposit. Separately contracted recruitment and visa-only services have their own quotation and terms."
        },
        {
          q: isArabic ? 'ما الذي يجب أن أحصل عليه كتابةً؟' : 'What should I receive in writing?',
          a: isArabic ? "تسلم نطاق الخدمة وتفصيل السعر ومستندات السداد المنطبقة قبل التأكيد. سجل الوكالة صاحبة العمل والكفيل والمرشحة المختارة والمهام الفردية والساعات والراحة ومسؤوليات المنزل وتاريخ الفوترة وبدء الخدمة وترتيبات التجديد. تطبق شروط الإلغاء الشهري والاستبدال المؤهل المنشورة دون إلغاء الحقوق القانونية." : "Receive the service scope, price breakdown and applicable payment documentation before confirmation. Record the agency employer and sponsor, selected candidate, individual duties, hours/rest, household responsibilities, billing date, service start and renewal arrangements. The published monthly cancellation and eligible replacement terms apply without replacing statutory rights."
        }
      ]
    },
    {
      id: 'support',
      icon: 'support' as IconName,
      title: isArabic ? 'الدعم والمتابعة' : 'Support & Follow-up',
      text: isArabic ? "تشمل Essential متابعة في الأسبوع الأول ثم متابعة شهرية. وتشمل Signature متابعة في الأسبوع الأول ثم كل أسبوعين. وتلتزم INAYA Black بجدول المراجعة المتفق عليه مع تنسيق شخصي ومتابعة خاصة من الفريق." : "Essential includes a first-week follow-up followed by monthly follow-up. Signature includes a first-week follow-up followed by fortnightly follow-up. INAYA Black follows the agreed review schedule with personalised coordination and private team follow-up.",
      items: [
        {
          q: isArabic ? 'هل توجد متابعة بعد بدء الخدمة؟' : 'Do you provide follow-up after service starts?',
          a: isArabic ? "تشمل Essential متابعة في الأسبوع الأول ثم متابعة شهرية. وتشمل Signature متابعة في الأسبوع الأول ثم كل أسبوعين. وتلتزم INAYA Black بجدول المراجعة المتفق عليه مع تنسيق شخصي ومتابعة خاصة من الفريق. ساعات الدعم البشري من السبت إلى الخميس، من 9 صباحاً إلى 9 مساءً؛ الجمعة مغلق. يمكن استقبال الرسائل خارج تلك الساعات دون وعد برد بشري على مدار الساعة." : "Essential includes a first-week follow-up followed by monthly follow-up. Signature includes a first-week follow-up followed by fortnightly follow-up. INAYA Black follows the agreed review schedule with personalised coordination and private team follow-up. Human support is Saturday–Thursday, 9 AM–9 PM; Friday closed. Messages may be received outside those hours without a 24/7 human-response promise."
        },
        {
          q: isArabic ? 'كيف أتابع ملاحظة على خدمة قائمة؟' : 'How do I follow up on an existing-service concern?',
          a: isArabic ? 'تواصل بالهاتف أو واتساب أو البريد الإلكتروني مع الاتفاق والتواريخ ووصف الملاحظة والإجراء المطلوب. احتفظ بسجل مكتوب واطلب تأكيد الاستلام والنتيجة والخطوة التالية. تبقى الحقوق القانونية المنطبقة سارية؛ وتشرح إجراءات الدعم وسائل التواصل ومسار الشكوى الرسمي.' : 'Contact the team by phone, WhatsApp or email with the agreement, dates, concern and remedy requested. Keep a written record and ask for acknowledgement, the outcome and next action. Applicable statutory rights remain in force; Support Process explains contact channels and official escalation.'
        }
      ]
    }
  ];

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative overflow-hidden pt-10 pb-10 sm:pt-14 sm:pb-12 lg:pt-16 lg:pb-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_12%_44%,rgba(7,22,74,0.10),transparent_25rem)]" />
        <div className="container-x relative">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="flex flex-col justify-center text-center lg:text-start">
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/65 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-xl lg:mx-0 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-accent-500" />
                {copy.badge}
              </span>
              <h1 className={`mx-auto mt-6 max-w-3xl lg:mx-0 ${headingClass}`}>{copy.title}</h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/75 lg:mx-0 sm:text-lg sm:leading-8">{copy.subtitle}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
                <Link href={`/${locale}/booking`} className="btn-primary w-full gap-2 sm:w-auto">
                  {copy.primaryCta}
                  <LineIcon name="arrow" className="h-5 w-5" />
                </Link>
                <a href="https://wa.me/971502036767" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent-500/60 bg-white/65 px-7 py-3 font-semibold text-primary-900 shadow-glass backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-accent-50 sm:w-auto">
                  <LineIcon name="chat" className="h-5 w-5 text-accent-600" />
                  {copy.whatsapp}
                </a>
              </div>
            </div>

            <div className="glass-panel relative overflow-hidden rounded-[28px] p-5 sm:p-7 lg:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(191,164,106,0.18),transparent_18rem)]" />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-700">INAYA</p>
                <h2 className={`${isArabic ? 'font-arabic text-2xl leading-snug' : 'font-heading text-3xl'} mt-3 max-w-xl font-bold text-primary-900`}>{copy.overviewTitle}</h2>
                <p className="mt-4 max-w-2xl leading-7 text-ink/70">{copy.overviewText}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {steps.map((step, index) => (
                    <div key={step.title} className="rounded-2xl border border-primary-700/10 bg-white/62 p-4 shadow-sm backdrop-blur-xl">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-900 text-white shadow-glass">
                          <span className="text-xs font-bold">0{index + 1}</span>
                        </div>
                        <h3 className="font-bold leading-snug text-primary-900">{step.title}</h3>
                      </div>
                      <p className="text-sm leading-6 text-primary-900/80">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageBreadcrumbs locale={locale} route="how-it-works" />

      <section className="container-x py-8 sm:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-col gap-2 text-center sm:text-start">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-700">{copy.processTitle}</p>
          </div>
          <div className="space-y-5">
            {sections.map((section, sectionIndex) => (
              <section key={section.id} id={section.id} className="glass-panel scroll-mt-28 rounded-[26px] p-5 sm:p-6 lg:p-7">
                <div className="grid gap-5 lg:grid-cols-[280px_1fr] lg:items-start">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/70 text-accent-600 shadow-sm ring-1 ring-primary-700/10">
                        <LineIcon name={section.icon} className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-accent-700">0{sectionIndex + 1}</span>
                    </div>
                    <h2 className={`mt-4 ${sectionTitleClass}`}>{section.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-primary-900/80">{section.text}</p>
                  </div>

                  <div className="space-y-3">
                    {section.items.map((item, index) => (
                      <details key={item.q} className="group rounded-[18px] border border-primary-700/10 bg-white/72 p-0 shadow-sm backdrop-blur-xl transition hover:border-accent-500/35" open={index === 0}>
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-start sm:px-6">
                          <span className="font-semibold text-primary-900 sm:text-lg">{item.q}</span>
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ivory-100 text-accent-700 transition group-open:rotate-180">
                            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                        </summary>
                        <div className="border-t border-primary-700/10 px-5 pb-5 pt-4 sm:px-6">
                          <p className="leading-7 text-ink/70">{item.a}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-primary-900 p-7 text-white shadow-glass sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(191,164,106,0.28),transparent_22rem)]" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className={`${isArabic ? 'font-arabic text-3xl leading-snug' : 'font-heading text-4xl'} font-bold`}>{copy.ctaTitle}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/85">{copy.ctaText}</p>
              <p className="mt-3 max-w-2xl leading-7 text-white/85">{isArabic ? 'يمكنك أيضاً قراءة ' : 'You can also read our '}<Link className="underline underline-offset-4" href={`/${locale}/blog/`}>{isArabic ? 'أدلة الخدمات المنزلية' : 'domestic service guides'}</Link>{isArabic ? ' قبل التواصل مع عناية.' : ' before contacting INAYA.'}</p>
            </div>
            <Link href={`/${locale}/booking`} className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3 font-bold text-primary-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-accent-400 md:w-auto">
              {copy.ctaButton}
              <LineIcon name="spark" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
