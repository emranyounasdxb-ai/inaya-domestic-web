import Link from 'next/link';

type IconName = 'chat' | 'search' | 'shield' | 'file' | 'check' | 'support' | 'arrow' | 'spark';

function LineIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    chat: <><path {...common} d="M5 6.8A3.8 3.8 0 0 1 8.8 3h6.4A3.8 3.8 0 0 1 19 6.8v3.8a3.8 3.8 0 0 1-3.8 3.8H10l-4.5 3.2.9-4A3.8 3.8 0 0 1 5 10.6V6.8Z" /></>,
    search: <><path {...common} d="m20 20-4.2-4.2" /><path {...common} d="M10.8 18a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" /></>,
    shield: <><path {...common} d="M12 3 19 6v5c0 4.6-3 7.7-7 10-4-2.3-7-5.4-7-10V6l7-3Z" /><path {...common} d="m9.2 11.8 1.9 1.9 3.8-4" /></>,
    file: <><path {...common} d="M7 3h7l4 4v14H7V3Z" /><path {...common} d="M14 3v5h4" /><path {...common} d="M9.5 13h5M9.5 16h5" /></>,
    check: <><path {...common} d="m5 12 4 4L19 6" /></>,
    support: <><path {...common} d="M4 12a8 8 0 1 1 16 0" /><path {...common} d="M4 12v3a2 2 0 0 0 2 2h1v-5H4ZM20 12v3a2 2 0 0 1-2 2h-1v-5h3Z" /><path {...common} d="M9 20h3a4 4 0 0 0 4-4" /></>,
    arrow: <><path {...common} d="M5 12h14" /><path {...common} d="m13 6 6 6-6 6" /></>,
    spark: <><path {...common} d="M12 3l1.5 5.1L19 10l-5.5 1.9L12 17l-1.5-5.1L5 10l5.5-1.9L12 3Z" /></>
  };

  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

export default function HowItWorksPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl lg:text-6xl'
    : 'font-heading text-4xl font-bold leading-[1.05] text-primary-900 sm:text-5xl lg:text-6xl';
  const sectionTitleClass = isArabic
    ? 'font-arabic text-3xl font-bold leading-[1.35] text-primary-900 sm:text-4xl'
    : 'font-heading text-3xl font-bold leading-tight text-primary-900 sm:text-4xl';

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
    navTitle: isArabic ? 'مراحل الخدمة' : 'Process sections',
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
      desc: isArabic ? 'أخبرنا بنوع الخدمة، الإمارة، الوقت المناسب، وأي تفضيلات مهمة للعائلة.' : 'Tell us the service type, emirate, timing and any important household preferences.'
    },
    {
      icon: 'search' as IconName,
      title: isArabic ? 'نراجع الخيارات' : 'We review suitable options',
      desc: isArabic ? 'نراجع التفاصيل ونوضح ما هو متاح حسب الخدمة والمنطقة والمتطلبات.' : 'We review the details and explain what is available by service, area and requirement.'
    },
    {
      icon: 'shield' as IconName,
      title: isArabic ? 'تأكيد التفاصيل' : 'Confirm the details',
      desc: isArabic ? 'نؤكد الرسوم، الخطوات، المستندات المطلوبة، وأي ملاحظات قبل المتابعة.' : 'We confirm fees, next steps, required documents and notes before you proceed.'
    },
    {
      icon: 'support' as IconName,
      title: isArabic ? 'متابعة بعد الحجز' : 'Follow-up after booking',
      desc: isArabic ? 'يبقى الفريق معك للمتابعة، الدعم، وتوضيح أي خطوة لاحقة.' : 'Our team stays available for follow-up, support and any next-step guidance.'
    }
  ];

  const sections = [
    {
      id: 'consultation',
      icon: 'chat' as IconName,
      title: isArabic ? 'الاستشارة الأولى' : 'Initial Consultation',
      items: [
        {
          q: isArabic ? 'ما الذي نحتاجه في أول تواصل؟' : 'What do you need from me first?',
          a: isArabic ? 'نحتاج نوع الخدمة المطلوبة، الإمارة أو المنطقة، وقت البداية المناسب، وعدد أفراد الأسرة أو طبيعة الاحتياج.' : 'We need the service type, emirate or area, preferred start time and a short summary of your household requirement.'
        },
        {
          q: isArabic ? 'هل يمكن التواصل عبر واتساب؟' : 'Can I contact you on WhatsApp?',
          a: isArabic ? 'نعم، واتساب هو أسرع طريقة لإرسال التفاصيل والمستندات الأولية ومتابعة التوفر.' : 'Yes. WhatsApp is the fastest way to share details, initial documents and availability questions.'
        }
      ]
    },
    {
      id: 'matching',
      icon: 'search' as IconName,
      title: isArabic ? 'اختيار الخدمة المناسبة' : 'Service Matching',
      items: [
        {
          q: isArabic ? 'كيف يتم اقتراح الخدمة المناسبة؟' : 'How do you suggest the right service?',
          a: isArabic ? 'نطابق احتياج الأسرة مع نوع الخدمة المناسب مثل خادمة منزلية، مربية أطفال، رعاية منزلية، طباخة، أو دعم بدوام جزئي.' : 'We match your family requirement with the right service type, such as house maid, nanny, caregiver, cook or part-time help.'
        },
        {
          q: isArabic ? 'هل الخدمة متوفرة في كل الإمارات؟' : 'Do you serve all UAE emirates?',
          a: isArabic ? 'نخدم جميع إمارات الدولة، ويتم تأكيد التوفر حسب المنطقة ونوع الخدمة والوقت المطلوب.' : 'We serve all UAE emirates, with availability confirmed by area, service type and requested timing.'
        }
      ]
    },
    {
      id: 'confirmation',
      icon: 'file' as IconName,
      title: isArabic ? 'التأكيد والإجراءات' : 'Confirmation & Process',
      items: [
        {
          q: isArabic ? 'متى يتم تأكيد الحجز؟' : 'When is the booking confirmed?',
          a: isArabic ? 'يتم تأكيد الحجز بعد مراجعة التفاصيل، توضيح الخطوات، والتأكد من توفر الخدمة المناسبة.' : 'The booking is confirmed after the details are reviewed, the steps are explained and suitable availability is confirmed.'
        },
        {
          q: isArabic ? 'هل يتم شرح الرسوم والخطوات قبل الدفع؟' : 'Are fees and steps explained before payment?',
          a: isArabic ? 'نعم، يتم توضيح الرسوم والخطوات والمستندات المطلوبة قبل أي إجراء نهائي.' : 'Yes. Fees, steps and required documents are explained before any final action.'
        }
      ]
    },
    {
      id: 'support',
      icon: 'support' as IconName,
      title: isArabic ? 'الدعم والمتابعة' : 'Support & Follow-up',
      items: [
        {
          q: isArabic ? 'هل توجد متابعة بعد بدء الخدمة؟' : 'Do you provide follow-up after service starts?',
          a: isArabic ? 'نعم، يتابع فريق عناية معك للتأكد من وضوح الخطوات ومعالجة أي استفسار.' : 'Yes. The INAYA team follows up to keep the process clear and answer any questions.'
        },
        {
          q: isArabic ? 'ما أسرع طريقة للتواصل؟' : 'What is the fastest way to reach you?',
          a: isArabic ? 'واتساب هو الأسرع للمتابعة اليومية، ويمكنك أيضاً الاتصال أو إرسال بريد إلكتروني عند الحاجة.' : 'WhatsApp is fastest for daily follow-up. You can also call or email when needed.'
        }
      ]
    }
  ];

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_12%_44%,rgba(7,22,74,0.10),transparent_25rem)]" />
        <div className="container-x relative">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
            <div className="text-center lg:text-start">
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/65 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-xl lg:mx-0 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-accent-500" />
                {copy.badge}
              </span>
              <h1 className={`mx-auto mt-6 max-w-4xl lg:mx-0 ${headingClass}`}>{copy.title}</h1>
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

            <div className="glass-panel relative overflow-hidden rounded-[28px] p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(191,164,106,0.18),transparent_18rem)]" />
              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-700">INAYA</p>
                <h2 className={`${isArabic ? 'font-arabic text-2xl leading-snug' : 'font-heading text-3xl'} mt-3 font-bold text-primary-900`}>{copy.overviewTitle}</h2>
                <p className="mt-4 leading-7 text-ink/70">{copy.overviewText}</p>
                <div className="mt-7 grid gap-3">
                  {steps.map((step, index) => (
                    <div key={step.title} className="flex items-start gap-4 rounded-2xl border border-primary-700/10 bg-white/62 p-4 shadow-sm backdrop-blur-xl">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-900 text-white shadow-glass">
                        <span className="text-sm font-bold">0{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-primary-900">{step.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-ink/65">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="glass-panel sticky top-28 rounded-[22px] p-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-ink/50">{copy.navTitle}</p>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold text-primary-900 transition hover:bg-accent-50">
                    <LineIcon name={section.icon} className="h-5 w-5 text-accent-600" />
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/70 text-accent-600 shadow-sm ring-1 ring-primary-700/10">
                    <LineIcon name={section.icon} className="h-6 w-6" />
                  </div>
                  <h2 className={sectionTitleClass}>{section.title}</h2>
                </div>

                <div className="space-y-3">
                  {section.items.map((item, index) => (
                    <details key={item.q} className="group glass-panel rounded-[20px] p-0 transition hover:border-accent-500/35" open={index === 0}>
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
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-20">
        <div className="relative overflow-hidden rounded-[28px] bg-primary-900 p-7 text-white shadow-glass sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(191,164,106,0.28),transparent_22rem)]" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className={`${isArabic ? 'font-arabic text-3xl leading-snug' : 'font-heading text-4xl'} font-bold`}>{copy.ctaTitle}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/78">{copy.ctaText}</p>
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
