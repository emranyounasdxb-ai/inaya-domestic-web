import Image from 'next/image';
import Link from 'next/link';

type PageProps = {
  params: {
    locale: string;
  };
};

const aboutImages = {
  hero: '/images/about/about-hero-domestic-service.webp',
  support: '/images/home/home-concierge-support.webp',
  family: '/images/home/inaya-home-hero-family.webp'
};

export default function AboutPage({ params: { locale } }: PageProps) {
  const isArabic = locale === 'ar';
  const headingClass = isArabic ? 'font-arabic leading-[1.35]' : 'font-heading leading-[1.05]';

  const copy = isArabic
    ? {
        badge: 'حول عناية للعمالة المنزلية',
        title: 'تعريف التميز في خدمات العمالة المنزلية',
        subtitle: 'تساعد عناية الأسر في دولة الإمارات على اختيار دعم منزلي موثوق من خلال تنسيق محترم، متابعة واضحة، وخدمة تناسب احتياج كل منزل.',
        contact: 'تواصل معنا',
        services: 'استكشف الخدمات',
        storyTitle: 'قصة عناية',
        story: [
          'تأسست عناية لتجعل طلب خدمات العمالة المنزلية أكثر سهولة وطمأنينة للأسر في الإمارات. نحن نبدأ بفهم احتياج المنزل قبل اقتراح أي خدمة.',
          'يجمع فريقنا تفاصيل الخدمة، الإمارة، التوقيت، ومتطلبات الأسرة، ثم يوضح الخيارات المتاحة بطريقة عملية ومحترمة.'
        ],
        principlesTitle: 'مبادئنا',
        principles: ['احترام خصوصية الأسرة في كل تواصل.', 'اقتراح خدمات مرتبطة فعلاً بالاحتياج.', 'تأكيد الخطوات قبل الانتقال إلى الحجز.'],
        missionLabel: 'رسالتنا',
        mission: 'رفع مستوى خدمات العمالة المنزلية من خلال تجربة هادئة، مهنية، وسهلة الفهم للعائلات في الإمارات.',
        visionLabel: 'رؤيتنا',
        vision: 'أن تكون عناية اسماً موثوقاً للأسر التي تبحث عن خدمات منزلية منظمة وراقية في جميع أنحاء الإمارات.',
        valuesTitle: 'قيم تقود كل خدمة',
        valuesSub: 'القيم التي توجه طريقة تعاملنا مع كل أسرة.',
        values: [
          { icon: '◇', title: 'الخصوصية', text: 'نحافظ على معلومات الأسرة والمستندات بعناية ومسؤولية.' },
          { icon: '✓', title: 'الموثوقية', text: 'نراجع تفاصيل الطلب قبل مشاركة الخيارات المناسبة.' },
          { icon: '✦', title: 'الرقي', text: 'نهتم بتجربة خدمة هادئة تعكس معايير عناية.' },
          { icon: '♡', title: 'الاهتمام', text: 'نتعامل مع كل منزل كحالة خاصة لها احتياجها.' }
        ],
        standardsTitle: 'خطوات عملية قبل القرار',
        standardsText: 'نرتب الطلب في مراحل بسيطة حتى تعرف الأسرة ماذا يحدث، وما المطلوب، وما هي الخيارات المناسبة.',
        standards: [
          { title: 'مراجعة الطلب', text: 'نحدد نوع الخدمة، الإمارة، الجدول، وتفاصيل المنزل الأساسية.' },
          { title: 'فحص التوفر', text: 'نراجع الخيارات المتاحة حسب نوع الخدمة والمنطقة والمدة المطلوبة.' },
          { title: 'شرح المتطلبات', text: 'نوضح المستندات، الرسوم، والمسؤوليات قبل أي تأكيد.' },
          { title: 'متابعة بعد الحجز', text: 'يبقى الفريق متاحاً للرد على الأسئلة ومراجعة أي ملاحظات.' }
        ],
        leadershipTitle: 'قيادة تركز على جودة التجربة',
        leadershipText: 'تعتمد عناية على تنسيق تشغيلي منظم وفهم لطبيعة الأسر في الإمارات، حتى تكون كل تجربة خدمة أكثر وضوحاً واحتراماً.',
        highlights: [
          { title: 'إشراف تشغيلي', text: 'متابعة الطلبات بناءً على متطلبات موثقة وواضحة.' },
          { title: 'فهم الأسرة', text: 'مراعاة خصوصية المنزل وروتين الأسرة قبل اقتراح الخدمة.' },
          { title: 'تحسين مستمر', text: 'استخدام ملاحظات العملاء لتطوير طريقة التنسيق والمتابعة.' }
        ],
        differenceTitle: 'الفرق مع عناية',
        differenceText: 'تجمع عناية بين فهم احتياج المنزل، اختيار الخدمة المناسبة، والمتابعة المسؤولة، لتتمكن الأسرة من اتخاذ القرار براحة.',
        finalCta: 'احجز استشارة'
      }
    : {
        badge: 'About INAYA Domestic Workers',
        title: 'Defining Domestic Excellence',
        subtitle: 'INAYA helps UAE families choose dependable home support through respectful coordination, practical guidance and service coverage across the UAE.',
        contact: 'Contact Us',
        services: 'Explore Services',
        storyTitle: 'Our Story',
        story: [
          'INAYA was created to make domestic worker enquiries easier and more reassuring for UAE households. We start by understanding the home requirement before suggesting a service.',
          'Our team reviews the service type, emirate, schedule and household expectations, then explains suitable options in a practical and respectful way.'
        ],
        principlesTitle: 'Founding Principles',
        principles: ['Respect for family privacy in every conversation.', 'Service options matched to the actual requirement.', 'Next steps confirmed before moving to booking.'],
        missionLabel: 'Our Mission',
        mission: 'To raise the standard of domestic worker services through a calm, professional and easy-to-understand experience for UAE families.',
        visionLabel: 'Our Vision',
        vision: 'To become a trusted UAE name for families seeking organized, premium and reliable domestic worker services.',
        valuesTitle: 'Values Behind Every Service',
        valuesSub: 'The values that shape how we support every household.',
        values: [
          { icon: '◇', title: 'Discretion', text: 'Family information and documents are handled with care and responsibility.' },
          { icon: '✓', title: 'Reliability', text: 'Every request is reviewed before suitable options are shared.' },
          { icon: '✦', title: 'Refinement', text: 'We maintain a calm service experience that reflects INAYA standards.' },
          { icon: '♡', title: 'Care', text: 'Each household is treated as a unique requirement, not a generic request.' }
        ],
        standardsTitle: 'Practical Steps Before You Decide',
        standardsText: 'We keep the enquiry process simple, so families understand what happens next, what is required and which option fits best.',
        standards: [
          { title: 'Requirement Review', text: 'We confirm the service type, emirate, schedule and key household details.' },
          { title: 'Availability Check', text: 'Suitable options are reviewed by service category, area and requested duration.' },
          { title: 'Guidance & Documents', text: 'Documents, fees and responsibilities are explained before confirmation.' },
          { title: 'After-booking Support', text: 'The team remains available for questions and service-related feedback.' }
        ],
        leadershipTitle: 'Leadership Focused on Service Quality',
        leadershipText: 'INAYA is guided by operational discipline and an understanding of UAE households, helping every service conversation remain focused, respectful and useful.',
        highlights: [
          { title: 'Operational Oversight', text: 'Requests are managed against documented household requirements.' },
          { title: 'Household Understanding', text: 'Family routines and privacy expectations guide our recommendations.' },
          { title: 'Continuous Improvement', text: 'Client feedback helps refine our coordination and follow-up process.' }
        ],
        differenceTitle: 'The INAYA Difference',
        differenceText: 'INAYA combines household understanding, relevant service guidance and responsible follow-up so families can move forward with confidence.',
        finalCta: 'Book a Consultation'
      };

  return (
    <div className="overflow-hidden bg-white text-primary-900">
      <section className="relative border-b border-primary-900/10 bg-[#fffdf8] px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(191,164,106,0.16),transparent_24rem),radial-gradient(circle_at_88%_18%,rgba(7,22,74,0.05),transparent_28rem)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="ps-8 sm:ps-6 lg:ps-4 rtl:ps-0">
            <p className="text-sm font-bold text-accent-700">{copy.badge}</p>
            <h1 className={`${headingClass} mt-4 max-w-3xl text-[2.6rem] font-bold tracking-[-0.045em] text-primary-900 sm:text-[3.6rem] lg:text-[4.2rem]`}>
              {copy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-primary-900/85 sm:text-[1.06rem]">{copy.subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={`/${locale}/contact`} className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary-900 px-7 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(7,22,74,0.20)] transition hover:-translate-y-0.5 hover:bg-primary-800">
                {copy.contact}
              </Link>
              <Link href={`/${locale}/services`} className="inline-flex min-h-12 items-center justify-center rounded-full border border-accent-500/50 bg-white px-7 py-3 text-sm font-bold text-primary-900 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-600 hover:bg-accent-50">
                {copy.services}
              </Link>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[30px] border border-primary-900/10 bg-white shadow-[0_28px_78px_rgba(7,22,74,0.15)]">
            <Image src={aboutImages.hero} alt={copy.title} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-primary-900/10 bg-[#f7f8fb] shadow-[0_22px_60px_rgba(7,22,74,0.10)]">
            <Image src={aboutImages.family} alt={copy.storyTitle} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
          </div>
          <div>
            <h2 className={`${headingClass} text-[2.2rem] font-bold tracking-[-0.035em] text-primary-900 sm:text-[3rem]`}>{copy.storyTitle}</h2>
            <div className="mt-6 space-y-5 text-[1rem] leading-8 text-primary-900/85">
              {copy.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 rounded-[24px] border border-accent-500/22 bg-[#fffdf8] p-6 shadow-[0_16px_42px_rgba(7,22,74,0.07)]">
              <h3 className={`${headingClass} text-xl font-bold text-primary-900`}>{copy.principlesTitle}</h3>
              <div className="mt-5 grid gap-4">
                {copy.principles.map((item) => (
                  <div key={item} className="flex gap-3 text-sm font-semibold leading-6 text-primary-900/85">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-primary-900">✓</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-primary-900/8 bg-[#fffdf8] px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className={`${headingClass} text-[2.2rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.valuesTitle}</h2>
            <p className="mt-4 text-base leading-8 text-primary-900/80">{copy.valuesSub}</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[26px] border border-primary-900/10 bg-white p-8 shadow-[0_18px_50px_rgba(7,22,74,0.08)]">
              <p className="text-sm font-bold text-accent-700">{copy.missionLabel}</p>
              <h3 className={`${headingClass} mt-5 text-[1.6rem] font-bold tracking-[-0.03em] text-primary-900 sm:text-[2rem]`}>{copy.mission}</h3>
            </div>
            <div className="rounded-[26px] border border-primary-900/10 bg-white p-8 shadow-[0_18px_50px_rgba(7,22,74,0.08)]">
              <p className="text-sm font-bold text-accent-700">{copy.visionLabel}</p>
              <h3 className={`${headingClass} mt-5 text-[1.6rem] font-bold tracking-[-0.03em] text-primary-900 sm:text-[2rem]`}>{copy.vision}</h3>
            </div>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.values.map((value) => (
              <article key={value.title} className="rounded-[24px] border border-primary-900/10 bg-white p-6 shadow-[0_16px_44px_rgba(7,22,74,0.07)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-500/16 text-lg font-bold text-accent-700 ring-1 ring-accent-500/30">{value.icon}</div>
                <h3 className={`${headingClass} mt-7 text-xl font-bold tracking-[-0.03em] text-primary-900`}>{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-primary-900/80">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <h2 className={`${headingClass} text-[2.1rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[2.8rem]`}>{copy.standardsTitle}</h2>
            <p className="mt-5 text-base leading-8 text-primary-900/82">{copy.standardsText}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {copy.standards.map((step, index) => (
              <article key={step.title} className="rounded-[24px] border border-primary-900/10 bg-[#fffdf8] p-6 shadow-[0_16px_44px_rgba(7,22,74,0.07)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-primary-900">{String(index + 1).padStart(2, '0')}</span>
                <h3 className={`${headingClass} mt-6 text-xl font-bold tracking-[-0.03em] text-primary-900`}>{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-primary-900/80">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-primary-900/8 bg-[#f7f8fb] px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h2 className={`${headingClass} text-[2.15rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.leadershipTitle}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-primary-900/82">{copy.leadershipText}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {copy.highlights.map((item) => (
                <article key={item.title} className="rounded-[20px] border border-primary-900/10 bg-white p-5 shadow-[0_14px_36px_rgba(7,22,74,0.07)]">
                  <h3 className={`${headingClass} text-lg font-bold text-primary-900`}>{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-primary-900/80">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-[28px] border border-primary-900/10 bg-white shadow-[0_22px_60px_rgba(7,22,74,0.10)]">
            <Image src={aboutImages.support} alt={copy.leadershipTitle} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-primary-900 px-5 py-14 text-white sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-center">
          <div>
            <h2 className={`${headingClass} text-[2.1rem] font-bold tracking-[-0.04em] text-white sm:text-[3rem]`}>{copy.differenceTitle}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/85">{copy.differenceText}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href={`/${locale}/booking`} className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent-500 px-7 py-3 text-sm font-bold text-primary-900 shadow-[0_16px_36px_rgba(191,164,106,0.24)] transition hover:-translate-y-0.5 hover:bg-accent-300">{copy.finalCta}</Link>
            <Link href={`/${locale}/services`} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 bg-white px-7 py-3 text-sm font-bold text-primary-900 transition hover:-translate-y-0.5 hover:bg-accent-50">{copy.services}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
