import Link from 'next/link';

export default function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl lg:text-6xl'
    : 'font-heading text-4xl font-bold leading-[1.05] text-primary-900 sm:text-5xl lg:text-6xl';
  const copy = {
    badge: isArabic ? 'دليل العائلات' : 'Family guide',
    title: isArabic ? 'نصائح لاختيار الدعم المنزلي المناسب' : 'Guides for choosing the right home support',
    subtitle: isArabic ? 'مقالات قصيرة تساعد العائلات على فهم الخدمات، الأسئلة المهمة، والخطوات قبل الحجز.' : 'Short guides to help families understand services, key questions and steps before booking.',
    read: isArabic ? 'اقرأ قريباً' : 'Coming Soon',
    posts: isArabic ? [
      ['كيف تختار الخدمة المنزلية المناسبة؟', 'نقاط عملية قبل التواصل مع شركة العمالة المنزلية.'],
      ['أسئلة يجب طرحها قبل الحجز', 'ما الذي يجب تأكيده حول التوفر، المدة، والتكلفة.'],
      ['الفرق بين الخادمة والمربية والرعاية المنزلية', 'فهم أنواع الخدمات يساعدك على اختيار أفضل.']
    ] : [
      ['How to choose the right domestic service', 'Practical points before contacting a domestic worker company.'],
      ['Questions to ask before booking', 'What to confirm about availability, duration and cost.'],
      ['Maid, nanny or caregiver: what is the difference?', 'Understanding service types helps you choose better.']
    ]
  };

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_10%_48%,rgba(7,22,74,0.10),transparent_26rem)]" />
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/65 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-xl sm:text-sm"><span className="h-2 w-2 rounded-full bg-accent-500" />{copy.badge}</span>
            <h1 className={`mx-auto mt-6 max-w-4xl ${headingClass}`}>{copy.title}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">{copy.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {copy.posts.map(([title, text]) => (
            <article key={title} className="glass-panel flex min-h-[240px] flex-col rounded-[24px] p-6 transition hover:-translate-y-1 hover:border-accent-500/40">
              <div className="mb-5 h-24 rounded-[18px] bg-[radial-gradient(circle_at_30%_30%,rgba(191,164,106,0.25),transparent_34%),linear-gradient(135deg,rgba(7,22,74,0.08)_1px,transparent_1px)] bg-[length:100%_100%,28px_28px]" />
              <h2 className={`${isArabic ? 'font-arabic text-xl leading-snug' : 'font-heading text-2xl'} font-bold text-primary-900`}>{title}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-primary-900/80">{text}</p>
              <Link href={`/${locale}/contact`} className="mt-5 text-sm font-bold text-primary-900">{copy.read}</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
