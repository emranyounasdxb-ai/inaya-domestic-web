import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Hero({ locale }: { locale: string }) {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white">
      <div className="container-x relative grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
        <div className="fade-up">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium">
            {t('badge')}
          </span>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{t('title')}</h1>
          <p className="mt-5 max-w-xl text-lg text-primary-100">{t('subtitle')}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/${locale}/booking`} className="btn-accent">{t('ctaPrimary')}</Link>
            <Link href={`/${locale}/services`} className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              {t('ctaSecondary')}
            </Link>
          </div>
          <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
            <div><div className="text-3xl font-bold">500+</div><div className="text-sm text-primary-200">{t('stat1')}</div></div>
            <div><div className="text-3xl font-bold">2000+</div><div className="text-sm text-primary-200">{t('stat2')}</div></div>
            <div><div className="text-3xl font-bold">10+</div><div className="text-sm text-primary-200">{t('stat3')}</div></div>
          </div>
        </div>
        <div className="hidden justify-center lg:flex">
          <div className="flex h-80 w-80 items-center justify-center rounded-3xl bg-white/10 text-9xl backdrop-blur">🏡</div>
        </div>
      </div>
    </section>
  );
}
