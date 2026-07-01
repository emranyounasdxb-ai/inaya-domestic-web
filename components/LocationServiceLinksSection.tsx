import Link from 'next/link';
import { locationServicePages, type Lang } from '@/lib/location-service-pages';

export default function LocationServiceLinksSection({ locale }: { locale: string }) {
  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const t = lang === 'ar'
    ? {
        eyebrow: 'صفحات خدمات حسب الإمارة',
        title: 'استكشف خدمات الخادمات في كل إمارة',
        lead: 'اختر الإمارة المناسبة لقراءة تفاصيل محلية عن خدمات الخادمات والمربيات والطهاة والرعاية والتأشيرة.',
        view: 'عرض الصفحة'
      }
    : {
        eyebrow: 'Emirate SEO Pages',
        title: 'Explore maid services by UAE emirate',
        lead: 'Choose your emirate to read local guidance for maid services, nannies, cooks, caregivers, recruitment and maid visa support.',
        view: 'View page'
      };

  return (
    <section className="bg-[#fbfaf7] px-6 py-14 text-primary-900 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-white/80 bg-white/78 p-7 shadow-[0_22px_65px_rgba(7,22,74,0.07)] ring-1 ring-accent-500/10 sm:p-9">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-accent-700">{t.eyebrow}</p>
          <h2 className={`${lang === 'ar' ? 'font-arabic leading-[1.3]' : 'font-heading leading-tight'} mt-4 text-[2rem] font-bold tracking-[-0.045em] sm:text-[2.8rem]`}>{t.title}</h2>
          <p className="mt-4 text-sm leading-7 text-primary-900/80">{t.lead}</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locationServicePages.map((location) => (
            <Link key={location.slug} href={`/${locale}/${location.slug}`} className="group rounded-[22px] border border-primary-900/8 bg-[#fbfaf7] p-5 transition hover:-translate-y-1 hover:border-accent-500/28 hover:bg-white hover:shadow-[0_18px_48px_rgba(7,22,74,0.08)]">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-accent-700">UAE</p>
              <h3 className="mt-3 font-heading text-xl font-bold tracking-[-0.03em] text-primary-900">{location.city[lang]}</h3>
              <p className="mt-3 text-xs leading-6 text-primary-900/75">{location.metaDescription[lang]}</p>
              <span className="mt-4 inline-flex text-xs font-bold uppercase tracking-[0.14em] text-accent-700 transition group-hover:translate-x-1">{t.view} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
