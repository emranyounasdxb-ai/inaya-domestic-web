import Link from 'next/link';

type IconName = 'shield' | 'heart' | 'spark' | 'check' | 'lock' | 'search' | 'file' | 'arrow';

function LineIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    shield: <><path {...common} d="M12 3 19 6v5c0 4.6-3 7.7-7 10-4-2.3-7-5.4-7-10V6l7-3Z" /><path {...common} d="m9.2 11.8 1.9 1.9 3.8-4" /></>,
    heart: <path {...common} d="M20.4 6.6a4.6 4.6 0 0 0-6.5 0L12 8.5l-1.9-1.9a4.6 4.6 0 1 0-6.5 6.5L12 21l8.4-7.9a4.6 4.6 0 0 0 0-6.5Z" />,
    spark: <path {...common} d="M12 3l1.5 5.1L19 10l-5.5 1.9L12 17l-1.5-5.1L5 10l5.5-1.9L12 3Z" />,
    check: <path {...common} d="m5 12 4 4 10-10" />,
    lock: <><path {...common} d="M7 11V8a5 5 0 0 1 10 0v3" /><path {...common} d="M6 11h12v9H6v-9Z" /></>,
    search: <><path {...common} d="m20 20-4.2-4.2" /><path {...common} d="M10.8 18a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" /></>,
    file: <><path {...common} d="M7 3h7l4 4v14H7V3Z" /><path {...common} d="M14 3v5h4" /><path {...common} d="M9.5 13h5M9.5 16h5" /></>,
    arrow: <><path {...common} d="M5 12h14" /><path {...common} d="m13 6 6 6-6 6" /></>
  };

  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const heroImage = '/images/about/about-hero-domestic-service.webp';

  const copy = {
    eyebrow: isArabic ? 'إرث عناية' : 'The INAYA Legacy',
    title: isArabic ? 'تعريف التميز في خدمات العمالة المنزلية' : 'Defining Domestic Excellence',
    subtitle: isArabic
      ? 'إرث من الثقة والوضوح والجودة في خدمات العمالة المنزلية داخل الإمارات. نساعد العائلات على اختيار الدعم المنزلي بثقة.'
      : 'A legacy of trust, clarity, and uncompromising quality in the UAE’s most exclusive households. We are the silent architects of seamless living.',
    storyTitle: isArabic ? 'قصتنا' : 'Our Story',
    story: isArabic ? [
      'بدأت عناية برؤية واضحة: سد الفجوة بين العائلات في الإمارات واحتياجها إلى خدمات منزلية موثوقة ومنظمة. نحن ندرك أن اختيار الدعم المنزلي ليس مجرد حجز خدمة، بل قرار يرتبط براحة البيت وثقة العائلة.',
      'لذلك صممنا تجربة تركز على الوضوح من أول تواصل. نفهم الاحتياج، نراجع التوفر، نشرح الخطوات، ونبقى متاحين للمتابعة حتى يشعر العميل أن القرار مبني على معلومات واضحة.'
    ] : [
      'INAYA began with a focused vision: to bridge the gap between the demanding lifestyles of the UAE’s families and the profound need for truly reliable, sophisticated household management. We recognized that true luxury is not just found in objects, but in the seamless, silent operation of a well-staffed home.',
      'Over the years, we have evolved from understanding urgency into designing a service that is calm, structured and discreet. Our role is to make every household decision feel clear, supported and professionally managed.'
    ],
    principlesTitle: isArabic ? 'مبادئ التأسيس' : 'Founding Principles',
    principles: isArabic ? [
      'تواصل واضح قبل كل التزام.',
      'خدمة منظمة تناسب احتياج كل منزل.',
      'متابعة مسؤولة بعد تأكيد الخدمة.'
    ] : [
      'Clear communication before every commitment.',
      'Organized guidance around each household requirement.',
      'Responsible follow-up after every confirmation.'
    ],
    purposeTitle: isArabic ? 'الغاية والقيم' : 'Purpose & Values',
    purposeSub: isArabic ? 'الأسس التي تحدد خدمتنا وتوجه كل تواصل.' : 'The pillars that define our service and guide every interaction.',
    missionLabel: isArabic ? 'رسالتنا' : 'Our Mission',
    mission: isArabic
      ? 'رفع مستوى خدمات العمالة المنزلية من خلال تواصل واضح، تدريب مهني، وتجربة تمنح كل أسرة راحة وثقة.'
      : 'To elevate the standard of domestic care through rigorous vetting and professional guidance, ensuring absolute peace of mind for every family we serve.',
    visionLabel: isArabic ? 'رؤيتنا' : 'Our Vision',
    vision: isArabic
      ? 'أن نكون الاسم الأكثر ثقة للعائلات التي تبحث عن إدارة منزلية راقية وخدمات عمالة منزلية منظمة في الإمارات.'
      : 'To become the most trusted, indispensable name in elite household management across the UAE, setting the global benchmark for domestic excellence.',
    values: isArabic ? [
      { icon: 'lock' as IconName, title: 'الخصوصية', text: 'نتعامل مع تفاصيل الأسرة والمستندات بعناية ومسؤولية.' },
      { icon: 'shield' as IconName, title: 'الثقة', text: 'كل خطوة مصممة لتكون واضحة قبل المتابعة.' },
      { icon: 'spark' as IconName, title: 'الرقي', text: 'خدمة هادئة ومنظمة تعكس معايير عناية.' },
      { icon: 'heart' as IconName, title: 'الرعاية', text: 'كل طلب يعامل كاحتياج منزلي مهم.' }
    ] : [
      { icon: 'lock' as IconName, title: 'Discretion', text: 'A private gateway into refined and carefully managed home staffing.' },
      { icon: 'shield' as IconName, title: 'Excellence', text: 'Sustaining only the top tier of professionals who meet our exacting verification.' },
      { icon: 'spark' as IconName, title: 'Integrity', text: 'Fair, transparent ethics and responsible service at every point of care.' },
      { icon: 'heart' as IconName, title: 'Care', text: 'Putting the well-being and harmony of your family at the heart of every step.' }
    ],
    standardsEyebrow: isArabic ? 'معيار الاختيار' : 'The 2% Selection Rate',
    standardsTitle: isArabic ? 'معايير لا نتنازل عنها' : 'Uncompromising Standards',
    standardsText: isArabic
      ? 'تعتمد خدمتنا على خطوات عملية وواضحة تساعد العائلة على فهم الخيارات والتكلفة والتوفر قبل اتخاذ القرار.'
      : 'Our meticulous, step-by-step process is designed to identify only the absolute best, ensuring that every placement represents the pinnacle of domestic service.',
    standards: isArabic ? [
      { title: 'الفحص الأولي', text: 'مراجعة أولية دقيقة لنوع الخدمة، الخبرة، والملاءمة قبل أي ترشيح.' },
      { title: 'مقابلات متعددة', text: 'تواصل واضح لفهم التفاصيل، التوقعات، والاحتياج المنزلي قبل المتابعة.' },
      { title: 'مراجعة الخلفية', text: 'تدقيق منظم للمعلومات والالتزامات والمستندات المطلوبة.' },
      { title: 'تقييم المهارة', text: 'مراجعة عملية للخبرة والمهارات ومدى ملاءمتها للأسرة.' }
    ] : [
      { title: 'Initial Screening', text: 'A comprehensive review of experience, verified references, and initial suitability. Only 30% of applicants pass this stage.' },
      { title: 'Multi-stage Interviews', text: 'Rigorous behavioral and situational assessments conducted by our senior placement specialists to evaluate attitude, adaptability, and communication skills.' },
      { title: 'Global Background Checks', text: 'Extensive verification of history, personal records, and deeply vetted references to guarantee absolute security and trust.' },
      { title: 'Psychological & Skill Evaluation', text: 'On-site assessments to ensure temperament matches well with household expectations and professional standards.' }
    ],
    leadershipEyebrow: isArabic ? 'العنصر البشري' : 'The Human Element',
    leadershipTitle: isArabic ? 'التميز في القيادة' : 'Excellence in Leadership',
    leadershipText: isArabic
      ? 'يجمع فريق عناية بين الخبرة التشغيلية وفهم احتياجات البيوت الراقية في الإمارات، حتى تكون كل محادثة عملية وواضحة ومحترمة.'
      : 'Our executive team brings decades of experience in luxury hospitality and high-net-worth household management. We understand the nuances of elite living.',
    complianceTitle: isArabic ? 'التزام واضح' : 'Uncompromising Compliance',
    complianceText: isArabic
      ? 'نعمل ضمن أطر واضحة ومنظمة، ونوضح المستندات والسياسات والخطوات قبل كل حجز.'
      : 'We operate with total transparency. INAYA is fully licensed and actively regulated by the Ministry of Human Resources and Emiratisation, ensuring that every placement is legally secure and ethically sound.',
    differenceTitle: isArabic ? 'الفرق مع عناية' : 'The INAYA Difference',
    differenceText: isArabic
      ? 'بعيداً عن التوظيف التقليدي، نربط العائلات بمعايير خدمة راقية. نحن لا نبحث عن موظفين فقط، بل ننسق تجربة منزلية منظمة وواضحة ومناسبة.'
      : 'Beyond the rigorous vetting and the pristine standards lies the true essence of INAYA: the human element. We do not just place staff; we match personalities, fostering harmonious environments where families thrive and staff excel.',
    ctaPrimary: isArabic ? 'قابل فريقنا' : 'Meet Our Team',
    ctaSecondary: isArabic ? 'احجز استشارة' : 'Book a Consultation'
  };

  return (
    <div className="overflow-hidden bg-[#050505] text-white">
      <section className="px-6 py-20 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
          <div className="max-w-2xl text-start">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white/58">{copy.eyebrow}</p>
            <h1 className={`${isArabic ? 'font-arabic leading-[1.15]' : 'font-heading leading-[0.98]'} mt-5 text-[2.65rem] font-bold tracking-[-0.04em] sm:text-[4rem] lg:text-[4.6rem]`}>{copy.title}</h1>
            <p className="mt-7 max-w-xl text-[0.98rem] leading-7 text-white/58 sm:text-[1.05rem]">{copy.subtitle}</p>
          </div>

          <div className="mx-auto w-full max-w-[430px] lg:mx-0 lg:ms-auto">
            <div className="overflow-hidden rounded-[18px] border border-white/12 bg-white/6 p-1.5 shadow-[0_36px_90px_rgba(0,0,0,0.45)]">
              <img src={heroImage} alt={isArabic ? 'خدمات منزلية راقية من عناية' : 'Premium domestic service by INAYA'} className="h-[360px] w-full rounded-[14px] object-cover object-center sm:h-[430px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2rem] font-bold leading-tight tracking-[-0.03em] sm:text-[2.45rem]`}>{copy.storyTitle}</h2>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 text-[1rem] leading-8 text-white/62">
              {copy.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div>
              <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[1.35rem] font-bold`}>{copy.principlesTitle}</h3>
              <div className="mt-5 space-y-4 text-sm leading-6 text-white/60">
                {copy.principles.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/28 text-white/80">
                      <LineIcon name="check" className="h-3 w-3" />
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2f4] px-6 py-20 text-[#050505] sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2.15rem] font-bold tracking-[-0.04em] sm:text-[3rem]`}>{copy.purposeTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-black/52 sm:text-base">{copy.purposeSub}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[12px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-black/52">{copy.missionLabel}</p>
              <h3 className={`${isArabic ? 'font-arabic leading-snug' : 'font-heading leading-tight'} mt-5 text-[1.55rem] font-bold tracking-[-0.03em] sm:text-[2rem]`}>{copy.mission}</h3>
            </div>
            <div className="rounded-[12px] bg-black p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/55">{copy.visionLabel}</p>
              <h3 className={`${isArabic ? 'font-arabic leading-snug' : 'font-heading leading-tight'} mt-5 text-[1.55rem] font-bold tracking-[-0.03em] sm:text-[2rem]`}>{copy.vision}</h3>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.values.map((value) => (
              <div key={value.title} className="min-h-[190px] rounded-[10px] bg-white p-6 shadow-[0_18px_55px_rgba(0,0,0,0.045)]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/[0.03] text-black/72 ring-1 ring-black/10">
                  <LineIcon name={value.icon} className="h-4 w-4" />
                </div>
                <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-7 text-xl font-bold tracking-[-0.03em]`}>{value.title}</h3>
                <p className="mt-4 text-sm leading-6 text-black/55">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-6 py-20 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-white/45">{copy.standardsEyebrow}</p>
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-4 text-[2.1rem] font-bold tracking-[-0.04em] sm:text-[3rem]`}>{copy.standardsTitle}</h2>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-8 text-white/58">{copy.standardsText}</p>
          </div>

          <div className="relative mx-auto mt-20 max-w-4xl">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/28 md:block" />
            <div className="space-y-14">
              {copy.standards.map((step, index) => (
                <div key={step.title} className={`relative grid gap-8 md:grid-cols-2 ${index % 2 === 0 ? 'md:text-end' : 'md:[&>*:first-child]:col-start-2'}`}>
                  <div className="md:px-8">
                    <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[1.28rem] font-bold tracking-[-0.03em] text-white`}>{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/55">{step.text}</p>
                  </div>
                  <span className="absolute left-1/2 top-0 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-black text-xs font-bold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.65),0_0_0_8px_rgba(255,255,255,0.05)] md:flex">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-[#050505] sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-black/42">{copy.leadershipEyebrow}</p>
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-4 text-[2.15rem] font-bold tracking-[-0.04em] sm:text-[3rem]`}>{copy.leadershipTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-7 text-black/55">{copy.leadershipText}</p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[10px] bg-[#111820] p-1 shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
            <div className="relative min-h-[260px] overflow-hidden rounded-[8px] bg-[#111820]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_45%,rgba(191,164,106,0.65),transparent_10rem),radial-gradient(circle_at_72%_42%,rgba(52,152,219,0.55),transparent_15rem)]" />
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:70px_70px]" />
              <div className="relative flex min-h-[260px] items-center justify-center px-8 text-center text-white">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.32em] text-white/78">Leadership Profiles Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[12px] bg-white p-8 text-[#050505] shadow-[0_25px_70px_rgba(0,0,0,0.22)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.03] text-black/72 ring-1 ring-black/10">
              <LineIcon name="shield" className="h-5 w-5" />
            </div>
            <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-8 text-[1.55rem] font-bold tracking-[-0.04em]`}>{copy.complianceTitle}</h3>
            <p className="mt-5 text-sm leading-7 text-black/58">{copy.complianceText}</p>
            <div className="mt-8 flex flex-wrap gap-2 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-black/50">
              <span>MOHRE Licensed</span>
              <span>•</span>
              <span>UAE Certified</span>
            </div>
          </div>

          <div className="rounded-[12px] bg-black p-8 text-white shadow-[0_25px_70px_rgba(0,0,0,0.28)] sm:p-10">
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2rem] font-bold tracking-[-0.04em] sm:text-[2.7rem]`}>{copy.differenceTitle}</h2>
            <p className="mt-6 max-w-2xl text-[0.98rem] leading-8 text-white/62">{copy.differenceText}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-white/90">
                {copy.ctaPrimary}
              </Link>
              <Link href={`/${locale}/booking`} className="inline-flex items-center justify-center rounded-full border border-white/24 px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                {copy.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
