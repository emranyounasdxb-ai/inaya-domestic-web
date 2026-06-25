import Link from 'next/link';

type IconName = 'shield' | 'heart' | 'spark' | 'check' | 'lock' | 'user' | 'search' | 'file' | 'arrow';

function LineIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    shield: <><path {...common} d="M12 3 19 6v5c0 4.6-3 7.7-7 10-4-2.3-7-5.4-7-10V6l7-3Z" /><path {...common} d="m9.2 11.8 1.9 1.9 3.8-4" /></>,
    heart: <path {...common} d="M20.4 6.6a4.6 4.6 0 0 0-6.5 0L12 8.5l-1.9-1.9a4.6 4.6 0 1 0-6.5 6.5L12 21l8.4-7.9a4.6 4.6 0 0 0 0-6.5Z" />,
    spark: <path {...common} d="M12 3l1.5 5.1L19 10l-5.5 1.9L12 17l-1.5-5.1L5 10l5.5-1.9L12 3Z" />,
    check: <path {...common} d="m5 12 4 4 10-10" />,
    lock: <><path {...common} d="M7 11V8a5 5 0 0 1 10 0v3" /><path {...common} d="M6 11h12v9H6v-9Z" /></>,
    user: <><path {...common} d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" /><path {...common} d="M4 21a8 8 0 0 1 16 0" /></>,
    search: <><path {...common} d="m20 20-4.2-4.2" /><path {...common} d="M10.8 18a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" /></>,
    file: <><path {...common} d="M7 3h7l4 4v14H7V3Z" /><path {...common} d="M14 3v5h4" /><path {...common} d="M9.5 13h5M9.5 16h5" /></>,
    arrow: <><path {...common} d="M5 12h14" /><path {...common} d="m13 6 6 6-6 6" /></>
  };

  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-[2.35rem] font-bold leading-[1.2] text-primary-900 sm:text-[2.85rem] lg:text-[3.2rem]'
    : 'font-heading text-[2.35rem] font-bold leading-[1.04] text-primary-900 sm:text-[2.85rem] lg:text-[3.2rem]';
  const sectionTitleClass = isArabic
    ? 'font-arabic text-[1.9rem] font-bold leading-[1.25] text-primary-900 sm:text-[2.25rem]'
    : 'font-heading text-[1.9rem] font-bold leading-tight text-primary-900 sm:text-[2.25rem]';

  const heroImage = '/images/about/about-hero-domestic-service.webp';
  const chairmanImage = '/images/about/CEO-Umed-khan.webp';

  const copy = {
    eyebrow: isArabic ? 'إرث عناية' : 'The INAYA Legacy',
    badge: isArabic ? 'عن عناية للعمالة المنزلية' : 'About INAYA Domestic Workers',
    title: isArabic ? 'نرتقي بمعايير الرعاية المنزلية في الإمارات' : 'Defining Domestic Excellence',
    subtitle: isArabic
      ? 'عناية للعمالة المنزلية تجمع بين الخدمة المنظمة، التواصل الواضح، والمتابعة الراقية لمساعدة العائلات في الإمارات على اختيار الدعم المنزلي المناسب.'
      : 'A legacy of trust, clarity and uncompromising quality in UAE domestic worker services. We help families choose home support with confidence.',
    storyTitle: isArabic ? 'قصتنا' : 'Our Story',
    story: isArabic ? [
      'بدأت عناية برؤية واضحة: سد الفجوة بين العائلات في الإمارات واحتياجها إلى خدمات منزلية موثوقة ومنظمة. نحن ندرك أن اختيار الدعم المنزلي ليس مجرد حجز خدمة، بل قرار يرتبط براحة البيت وثقة العائلة.',
      'لذلك صممنا تجربة تركز على الوضوح من أول تواصل: نفهم الاحتياج، نراجع التوفر، نشرح الخطوات، ونبقى متاحين للمتابعة حتى يشعر العميل أن القرار مبني على معلومات واضحة.'
    ] : [
      'INAYA began with a focused vision: to bridge the gap between UAE families and reliable, well-organized domestic worker services. We understand that choosing home support is not just a booking; it is a decision connected to trust, privacy and daily comfort.',
      'That is why our process is built around clarity from the first conversation. We understand the requirement, review availability, explain the steps and remain available for follow-up so every family can move forward with confidence.'
    ],
    principlesTitle: isArabic ? 'مبادئ التأسيس' : 'Founding Principles',
    principles: isArabic ? [
      'تواصل واضح قبل أي التزام أو خطوة نهائية.',
      'خدمة منظمة تناسب احتياج كل أسرة داخل الإمارات.'
    ] : [
      'Clear communication before every commitment or final step.',
      'Organized service guidance built around each household requirement.'
    ],
    chairmanEyebrow: isArabic ? 'رؤية القيادة' : 'Leadership Vision',
    chairmanTitle: isArabic ? 'رسالة من رئيس مجلس الإدارة' : 'A Message from Our Chairman',
    chairmanName: isArabic ? 'السيد أمّد خان' : 'Mr. Ummed Khan',
    chairmanRole: isArabic ? 'المؤسس ورئيس مجلس إدارة مجموعة ألياس' : 'Founder & Chairman, ALIYAS Group',
    chairmanQuote: isArabic ? 'تبدأ جودة الخدمة من الثقة والوضوح والمسؤولية.' : 'Service excellence begins with trust, clarity and responsibility.',
    chairmanText: isArabic ? [
      'تسترشد عناية للعمالة المنزلية برؤية السيد أمّد خان، المؤسس ورئيس مجلس إدارة مجموعة ألياس. تقوم هذه الرؤية على الثقة، والابتكار، والمسؤولية، والالتزام بتقديم خدمات متميزة داخل دولة الإمارات.',
      'وبصفتها جزءاً من مجموعة ألياس، تواصل عناية التزامها بتقديم خدمات عمالة منزلية منظمة، وتواصل واضح، ودعم موثوق للعائلات. ومع توسع المجموعة في قطاعات متعددة مثل العقارات، التوظيف، النقل، الأمن، التنظيف، والضيافة، يبقى تركيز عناية واضحاً: مساعدة العائلات على اختيار خدمات العمالة المنزلية بثقة وراحة.',
      'هدفنا أن تكون كل خطوة واضحة ومحترمة ومدارة باحتراف، من أول استفسار حتى تأكيد الخدمة والمتابعة.'
    ] : [
      'INAYA Domestic Workers is guided by the vision of Mr. Ummed Khan, Founder & Chairman of ALIYAS Group. His leadership is built on trust, innovation, responsibility and long-term service excellence across the UAE.',
      'As part of ALIYAS Group, INAYA carries forward a clear commitment to organized domestic worker services, transparent communication and dependable support for families. While the Group has grown across sectors such as real estate, employment services, transport, security, cleaning and hospitality, INAYA stays focused on one purpose: helping families choose reliable domestic worker services with confidence.',
      'Our goal is to make every step clear, respectful and professionally managed, from the first enquiry to service confirmation and follow-up.'
    ],
    purposeTitle: isArabic ? 'الغاية والقيم' : 'Purpose & Values',
    purposeSub: isArabic ? 'الأسس التي توجه خدمتنا في كل تواصل.' : 'The pillars that define our service and guide every interaction.',
    missionLabel: isArabic ? 'رسالتنا' : 'Our Mission',
    mission: isArabic
      ? 'رفع مستوى خدمات العمالة المنزلية من خلال تواصل واضح، متابعة مهنية، وتجربة أكثر هدوءاً لكل أسرة نخدمها.'
      : 'To elevate the standard of domestic care through clear guidance, organized service and a calm experience for every family we serve.',
    visionLabel: isArabic ? 'رؤيتنا' : 'Our Vision',
    vision: isArabic
      ? 'أن تكون عناية اسماً موثوقاً للعائلات التي تبحث عن خدمات عمالة منزلية راقية ومنظمة في دولة الإمارات.'
      : 'To become a trusted name for families seeking premium, organized domestic worker services across the UAE.',
    values: isArabic ? [
      { icon: 'lock' as IconName, title: 'الخصوصية', text: 'نتعامل مع تفاصيل الأسرة والمستندات بعناية ومسؤولية.' },
      { icon: 'shield' as IconName, title: 'الثقة', text: 'كل خطوة مصممة لتكون واضحة قبل المتابعة.' },
      { icon: 'spark' as IconName, title: 'الرقي', text: 'خدمة هادئة ومنظمة تعكس مستوى عناية.' },
      { icon: 'heart' as IconName, title: 'الرعاية', text: 'ننظر إلى كل طلب كاحتياج عائلي مهم.' }
    ] : [
      { icon: 'lock' as IconName, title: 'Discretion', text: 'Family details and documents are handled with care and responsibility.' },
      { icon: 'shield' as IconName, title: 'Trust', text: 'Every step is designed to be clear before moving forward.' },
      { icon: 'spark' as IconName, title: 'Refinement', text: 'A calm, organized service experience that reflects INAYA standards.' },
      { icon: 'heart' as IconName, title: 'Care', text: 'Every request is treated as an important household requirement.' }
    ],
    standardsEyebrow: isArabic ? 'أسلوب عملنا' : 'The INAYA Standard',
    standardsTitle: isArabic ? 'معايير واضحة لا نتنازل عنها' : 'Uncompromising Standards',
    standardsText: isArabic
      ? 'تعتمد خدمتنا على خطوات عملية وواضحة تساعد الأسرة على فهم الخيارات والتكلفة والتوفر قبل اتخاذ القرار.'
      : 'Our process is step-by-step, practical and clear, helping families understand options, cost and availability before making a decision.',
    standards: isArabic ? [
      { title: 'فهم الاحتياج أولاً', text: 'نبدأ بمعرفة نوع الخدمة، الإمارة، الوقت، وتفاصيل المنزل حتى يكون التوجيه مناسباً.' },
      { title: 'مراجعة التوفر', text: 'نراجع الخيارات المتاحة حسب الخدمة والمنطقة والمدة المطلوبة قبل تقديم أي تأكيد.' },
      { title: 'توضيح الخطوات', text: 'نشرح الأسعار، المستندات، والتزامات كل طرف قبل المتابعة.' },
      { title: 'متابعة منظمة', text: 'يبقى الفريق متاحاً بعد الحجز للرد على الأسئلة ومتابعة أي ملاحظة.' }
    ] : [
      { title: 'Initial Requirement Review', text: 'We start with the service type, emirate, timing and household details so guidance is relevant.' },
      { title: 'Availability Matching', text: 'Available options are reviewed by service, area and requested duration before confirmation.' },
      { title: 'Clear Step Explanation', text: 'Pricing, documents and responsibilities are explained before the family proceeds.' },
      { title: 'Organized Follow-up', text: 'The team remains available after booking to answer questions and review concerns.' }
    ],
    leadershipEyebrow: isArabic ? 'الفريق والإدارة' : 'The Human Element',
    leadershipTitle: isArabic ? 'قيادة تفهم احتياج العائلات' : 'Excellence in Leadership',
    leadershipText: isArabic
      ? 'يجمع فريق عناية بين الخبرة التشغيلية وفهم احتياجات البيوت في الإمارات، حتى تكون الخدمة عملية، واضحة، ومحترمة.'
      : 'Our team brings operational experience and an understanding of UAE households, ensuring every service conversation is practical, clear and respectful.',
    differenceTitle: isArabic ? 'ما الذي يميز عناية؟' : 'The INAYA Difference',
    differenceText: isArabic
      ? 'نحن لا نركز فقط على تقديم خدمة، بل على تجربة كاملة: فهم الاحتياج، توضيح الخيارات، تنظيم الخطوات، والمتابعة بعد الحجز.'
      : 'We focus on more than providing a service. We create a complete experience: understanding the need, explaining options, organizing steps and following up after booking.',
    ctaPrimary: isArabic ? 'ابدأ الآن' : 'Start Now',
    ctaSecondary: isArabic ? 'تواصل معنا' : 'Contact Us',
    complianceTitle: isArabic ? 'التزام واضح' : 'Clear Compliance',
    complianceText: isArabic
      ? 'نوضح الخطوات والمستندات والسياسات الأساسية قبل الحجز حتى يكون القرار واضحاً.'
      : 'We explain steps, documents and key policies before booking so each decision is clear.',
    quickLinks: isArabic ? ['خدمات عمالة منزلية', 'خدمة في جميع الإمارات', 'متابعة عبر واتساب'] : ['Domestic worker services', 'All UAE emirates', 'WhatsApp follow-up']
  };

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative overflow-hidden py-14 sm:py-16 lg:py-[4.75rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(191,164,106,0.22),transparent_28rem),radial-gradient(circle_at_10%_44%,rgba(7,22,74,0.08),transparent_25rem)]" />
        <div className="container-x relative">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.96fr_0.78fr] lg:gap-16">
            <div className="max-w-xl text-center lg:text-start">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-accent-700">{copy.eyebrow}</p>
              <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent-500/24 bg-white/72 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-xl sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-accent-500" />
                {copy.badge}
              </span>
              <h1 className={`mt-6 ${headingClass}`}>{copy.title}</h1>
              <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-ink/72 sm:text-[1.05rem] sm:leading-8">{copy.subtitle}</p>
              <div className="mt-7 h-px w-24 bg-gradient-to-r from-accent-500 via-accent-400 to-transparent" />
            </div>

            <div className="mx-auto w-full max-w-[430px] lg:ms-auto">
              <div className="relative rounded-[30px] border border-accent-500/24 bg-white/72 p-3 shadow-[0_28px_80px_rgba(7,22,74,0.13)] backdrop-blur-xl">
                <div className="absolute -inset-1 -z-10 rounded-[34px] bg-gradient-to-br from-accent-500/18 via-transparent to-primary-900/8" />
                <div className="overflow-hidden rounded-[23px] border border-white/80 bg-[#f7f2e8] shadow-inner">
                  <img src={heroImage} alt={isArabic ? 'فريق عناية للعمالة المنزلية' : 'INAYA domestic workers team'} className="h-[330px] w-full object-cover object-center sm:h-[390px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-12 sm:py-14 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.55fr_1.45fr] lg:items-start">
          <div className="max-w-xs">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">{isArabic ? 'بداية واضحة' : 'A clear beginning'}</p>
            <h2 className={`${sectionTitleClass} mt-3`}>{copy.storyTitle}</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="glass-panel rounded-[24px] border border-accent-500/14 p-6 text-[0.94rem] leading-7 text-ink/70 shadow-[0_16px_45px_rgba(7,22,74,0.045)] sm:p-7">
              <div className="mb-5 h-px w-20 bg-accent-500/60" />
              <div className="space-y-4">
                {copy.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <div className="glass-panel rounded-[24px] border border-accent-500/18 p-6 shadow-[0_18px_55px_rgba(7,22,74,0.06)] sm:p-7">
              <h3 className={`${isArabic ? 'font-arabic text-xl' : 'font-heading text-xl'} font-bold text-primary-900`}>{copy.principlesTitle}</h3>
              <div className="mt-5 space-y-4">
                {copy.principles.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-500/14 text-accent-700 ring-1 ring-accent-500/24">
                      <LineIcon name="check" className="h-4 w-4" />
                    </span>
                    <p className="text-sm leading-6 text-ink/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-12 sm:py-14 lg:py-16">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[28px] border border-accent-500/22 bg-white/68 shadow-[0_22px_70px_rgba(7,22,74,0.08)] backdrop-blur-xl lg:grid-cols-[0.78fr_1.22fr]">
          <div className="relative flex min-h-[390px] items-end justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_22%,rgba(191,164,106,0.26),transparent_15rem),linear-gradient(180deg,#fbf8f1_0%,#efe4d0_100%)] px-8 pt-8 sm:min-h-[430px]">
            <div className="absolute inset-x-12 bottom-0 h-24 rounded-t-[80px] bg-gradient-to-t from-accent-500/24 to-transparent" />
            <div className="absolute bottom-0 h-px w-3/4 bg-accent-500/50" />
            <img src={chairmanImage} alt={isArabic ? 'السيد أمّد خان رئيس مجلس إدارة مجموعة ألياس' : 'Mr. Ummed Khan Founder and Chairman of ALIYAS Group'} className="relative z-10 h-[365px] w-full max-w-[300px] object-contain object-bottom drop-shadow-[0_18px_26px_rgba(7,22,74,0.14)] sm:h-[405px]" />
          </div>

          <div className="flex flex-col justify-center px-7 py-8 sm:px-9 lg:px-11 lg:py-10">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">{copy.chairmanEyebrow}</p>
            <h2 className={`${isArabic ? 'font-arabic text-[1.9rem] leading-[1.25]' : 'font-heading text-[1.95rem] leading-[1.1]'} mt-3 max-w-xl font-bold text-primary-900 sm:text-[2.28rem]`}>{copy.chairmanTitle}</h2>
            <div className="mt-5 border-s-2 border-accent-500/55 ps-4">
              <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[1.28rem] font-bold leading-tight text-primary-900 sm:text-[1.45rem]`}>{copy.chairmanName}</h3>
              <p className="mt-1 text-sm font-semibold text-ink/56">{copy.chairmanRole}</p>
            </div>
            <div className="mt-5 max-w-[650px] space-y-3 text-[0.93rem] leading-7 text-ink/68">
              {copy.chairmanText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <blockquote className="mt-5 max-w-[620px] rounded-[18px] border border-accent-500/28 bg-accent-50/80 px-5 py-4 text-[0.98rem] font-bold leading-7 text-primary-900 shadow-sm">
              “{copy.chairmanQuote}”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-[#f2eee8] py-14 sm:py-16 lg:py-[4.5rem]">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">INAYA VALUES</p>
            <h2 className={`${sectionTitleClass} mt-3`}>{copy.purposeTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-ink/62 sm:text-base">{copy.purposeSub}</p>
          </div>

          <div className="mx-auto mt-9 grid max-w-6xl gap-5 lg:grid-cols-2">
            <div className="glass-panel flex min-h-[170px] flex-col justify-center rounded-[24px] border border-accent-500/18 p-7 shadow-[0_20px_60px_rgba(7,22,74,0.06)] sm:p-8">
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.22em] text-accent-700">{copy.missionLabel}</p>
              <h3 className={`${isArabic ? 'font-arabic leading-snug' : 'font-heading leading-tight'} mt-4 text-[1.45rem] font-bold text-primary-900 sm:text-[1.75rem]`}>{copy.mission}</h3>
            </div>
            <div className="flex min-h-[170px] flex-col justify-center rounded-[24px] border border-accent-500/24 bg-primary-900 p-7 text-white shadow-[0_24px_70px_rgba(7,22,74,0.2)] sm:p-8">
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.22em] text-accent-300">{copy.visionLabel}</p>
              <h3 className={`${isArabic ? 'font-arabic leading-snug' : 'font-heading leading-tight'} mt-4 text-[1.45rem] font-bold sm:text-[1.75rem]`}>{copy.vision}</h3>
            </div>
          </div>

          <div className="mx-auto mt-5 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.values.map((value) => (
              <div key={value.title} className="glass-panel group relative min-h-[205px] overflow-hidden rounded-[22px] border border-accent-500/16 p-6 shadow-[0_20px_55px_rgba(7,22,74,0.06)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-500/20 via-accent-500 to-accent-500/20" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/12 text-accent-700 shadow-sm ring-1 ring-accent-500/24 transition group-hover:bg-primary-900 group-hover:text-accent-200">
                  <LineIcon name={value.icon} className="h-6 w-6" />
                </div>
                <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-5 text-xl font-bold text-primary-900`}>{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/64">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-14 sm:py-16 lg:py-[4.5rem]">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-accent-700">{copy.standardsEyebrow}</p>
            <h2 className={`${sectionTitleClass} mt-3`}>{copy.standardsTitle}</h2>
            <p className="mt-4 max-w-xl text-[0.96rem] leading-7 text-ink/68">{copy.standardsText}</p>
          </div>

          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-accent-500/35 md:left-1/2 md:block" />
            <div className="space-y-7">
              {copy.standards.map((step, index) => (
                <div key={step.title} className={`relative grid gap-5 md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:[&>*:first-child]:col-start-2'}`}>
                  <div className={`glass-panel rounded-[22px] border border-accent-500/16 p-5 shadow-[0_18px_55px_rgba(7,22,74,0.06)] sm:p-6 ${index % 2 === 0 ? 'md:text-end' : ''}`}>
                    <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[1.25rem] font-bold text-primary-900`}>{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink/64">{step.text}</p>
                  </div>
                  <div className="absolute left-3 top-6 hidden h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-primary-900 shadow-glass ring-4 ring-ivory md:left-1/2 md:flex md:-translate-x-1/2">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ee] py-14 sm:py-16 lg:py-[4.5rem]">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-accent-700">{copy.leadershipEyebrow}</p>
            <h2 className={`${sectionTitleClass} mt-3`}>{copy.leadershipTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[0.96rem] leading-7 text-ink/68">{copy.leadershipText}</p>
          </div>

          <div className="glass-panel mx-auto mt-9 max-w-4xl overflow-hidden rounded-[26px] border border-accent-500/20 p-2 shadow-[0_20px_60px_rgba(7,22,74,0.08)]">
            <div className="relative min-h-[245px] overflow-hidden rounded-[22px] bg-primary-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(191,164,106,0.55),transparent_15rem),radial-gradient(circle_at_78%_42%,rgba(255,255,255,0.16),transparent_18rem)]" />
              <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:48px_48px]" />
              <div className="relative flex min-h-[245px] items-center justify-center px-8 text-center text-white">
                <div>
                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-accent-200">INAYA DOMESTIC WORKERS</p>
                  <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-4 text-2xl font-bold sm:text-3xl`}>{copy.leadershipTitle}</h3>
                  <div className="mx-auto mt-5 h-px w-24 bg-accent-300/70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-14 sm:py-16 lg:py-[4.5rem]">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-panel rounded-[26px] border border-accent-500/18 p-7 shadow-[0_20px_60px_rgba(7,22,74,0.06)] sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/12 text-accent-700 shadow-sm ring-1 ring-accent-500/24">
              <LineIcon name="shield" className="h-6 w-6" />
            </div>
            <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-6 text-2xl font-bold text-primary-900`}>{copy.complianceTitle}</h3>
            <p className="mt-4 leading-7 text-ink/68">{copy.complianceText}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {copy.quickLinks.map((item) => (
                <span key={item} className="rounded-full border border-accent-500/28 bg-accent-50/70 px-3 py-1.5 text-xs font-bold text-primary-900">{item}</span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[26px] border border-accent-500/24 bg-primary-900 p-7 text-white shadow-[0_24px_70px_rgba(7,22,74,0.22)] sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,rgba(191,164,106,0.36),transparent_22rem)]" />
            <div className="relative">
              <h2 className={`${isArabic ? 'font-arabic text-3xl leading-snug' : 'font-heading text-4xl leading-tight'} font-bold`}>{copy.differenceTitle}</h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/76">{copy.differenceText}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/${locale}/booking`} className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3 text-sm font-bold text-primary-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-accent-400">
                  {copy.ctaPrimary}
                  <LineIcon name="arrow" className="h-4 w-4" />
                </Link>
                <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-full border border-white/22 px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
