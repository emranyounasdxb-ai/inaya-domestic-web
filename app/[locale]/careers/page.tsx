import CareersForm from '@/components/CareersForm';

export default function CareersPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl lg:text-6xl'
    : 'font-heading text-4xl font-bold leading-[1.05] text-primary-900 sm:text-5xl lg:text-6xl';
  const copy = {
    badge: isArabic ? 'انضم إلى شبكة عناية' : 'Join the INAYA network',
    title: isArabic ? 'قدّم للعمل في خدمات العمالة المنزلية' : 'Apply for domestic worker opportunities',
    subtitle: isArabic ? 'إذا كنت تبحث عن فرص عمل في مجال الخدمات المنزلية، أرسل بياناتك وسيتواصل معك الفريق عند توفر فرصة مناسبة.' : 'If you are looking for domestic service opportunities, share your details and our team will contact you when a suitable role is available.',
    sideTitle: isArabic ? 'ما نراجعه' : 'What we review',
    points: isArabic ? ['الخبرة السابقة', 'نوع الخدمة المناسبة', 'اللغة والتوفر', 'المستندات المطلوبة'] : ['Previous experience', 'Suitable service type', 'Language and availability', 'Required documents']
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
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="glass-panel rounded-[26px] p-6 sm:p-8">
            <h2 className={`${isArabic ? 'font-arabic text-2xl leading-snug' : 'font-heading text-3xl'} font-bold text-primary-900`}>{copy.sideTitle}</h2>
            <div className="mt-6 space-y-4">
              {copy.points.map((point) => <div key={point} className="rounded-2xl border border-primary-700/10 bg-white/60 p-4 text-sm font-semibold text-primary-900">{point}</div>)}
            </div>
          </div>
          <div className="glass-panel rounded-[26px] p-5 sm:p-7">
            <CareersForm locale={locale} />
          </div>
        </div>
      </section>
    </div>
  );
}
