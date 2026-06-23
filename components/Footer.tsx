import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const lang = locale === 'ar' ? 'ar' : 'en';
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-gray-200">
      <div className="container-x grid grid-cols-1 gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xl font-bold text-white">
            <span>🏡</span> Inaya Domestic
          </div>
          <p className="text-sm leading-relaxed text-gray-300">{t('about')}</p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">{t('quickLinks')}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href={`/${locale}/about`} className="hover:text-white">{tn('about')}</Link></li>
            <li><Link href={`/${locale}/booking`} className="hover:text-white">{tn('booking')}</Link></li>
            <li><Link href={`/${locale}/pricing`} className="hover:text-white">{tn('pricing')}</Link></li>
            <li><Link href={`/${locale}/faq`} className="hover:text-white">{tn('faq')}</Link></li>
            <li><Link href={`/${locale}/careers`} className="hover:text-white">{tn('careers')}</Link></li>
            <li><Link href={`/${locale}/blog`} className="hover:text-white">{tn('blog')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">{t('ourServices')}</h4>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/${locale}/services/${s.slug}`} className="hover:text-white">{s.name[lang]}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">{t('contactInfo')}</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📍 {siteConfig.address}</li>
            <li>📞 {siteConfig.phone}</li>
            <li>✉️ {siteConfig.email}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-gray-400 sm:flex-row">
          <p>© {year} Inaya Domestic. {t('rights')}</p>
          <div className="flex gap-4">
            <Link href={`/${locale}/privacy-policy`} className="hover:text-white">{t('privacy')}</Link>
            <Link href={`/${locale}/terms`} className="hover:text-white">{t('terms')}</Link>
            <Link href={`/${locale}/refund-policy`} className="hover:text-white">{t('refund')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
