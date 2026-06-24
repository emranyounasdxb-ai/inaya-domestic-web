import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/services';

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl lg:text-6xl'
    : 'font-heading text-4xl font-bold leading-[1.05] text-primary-900 sm:text-5xl lg:text-6xl';
  const copy = {
    badge: isArabic ? 'خدمات منزلية موثوقة في الإمارات' : 'Trusted domestic services across the UAE',
    title: isArabic ? 'خدمات عمالة منزلية للعائلات في الإمارات' : 'Domestic worker services for UAE families',
    subtitle: isArabic ? 'اختر الخدمة المناسبة لاحتياج منزلك من خادمات، مربيات، رعاية منزلية، طهاة، ومساعدة بدوام جزئي.' : 'Choose the right home support for your household, from maids and nannies to caregivers, cooks and part-time help.',
    category: isArabic ? 'الخدمات المتاحة' : 'Available services',
    learnMore: isArabic ? 'اعرف المزيد' : 'Learn More'
  };

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_10%_48%,rgba(7,22,74,0.10),transparent_26rem)]" />
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/65 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-xl sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-accent-500" />
              {copy.badge}
            </span>
            <h1 className={`mx-auto mt-6 max-w-4xl ${headingClass}`}>{copy.title}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">{copy.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex items-end justify-between gap-4">
            <h2 className={`${isArabic ? 'font-arabic text-3xl leading-snug' : 'font-heading text-3xl'} font-bold text-primary-900`}>{copy.category}</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} locale={locale} cta={copy.learnMore} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
