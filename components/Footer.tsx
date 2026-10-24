import BrandLogo from './BrandLogo';
import { CookieSettingsButton } from './GoogleAnalyticsConsent';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';
import styles from './Footer.module.css';

type IconName = 'phone' | 'mail' | 'pin' | 'clock' | 'shield' | 'users' | 'refresh' | 'headset' | 'globe' | 'lock';

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const isArabic = locale === 'ar';
  const lang = isArabic ? 'ar' : 'en';
  const year = new Date().getFullYear();
  const logoAlt = isArabic ? 'شعار عناية للعمالة المنزلية' : 'INAYA Domestic Workers logo';
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, '')}`;
  const contactAddress = isArabic
    ? siteConfig.addressAr
    : siteConfig.address;

  const quickLinks = [
    { label: tn('home'), href: `/${locale}` },
    { label: tn('about'), href: `/${locale}/about` },
    { label: tn('services'), href: `/${locale}/services` },
    { label: isArabic ? 'آلية العمل' : 'How It Works', href: `/${locale}/how-it-works` },
    { label: isArabic ? 'الدول التي نوفر منها' : 'Countries We Source From', href: `/${locale}/services/countries-we-source-from` },
    { label: tn('faq'), href: `/${locale}/faq` },
    { label: isArabic ? 'الأدلة' : 'Guides', href: `/${locale}/blog/` },
    { label: isArabic ? 'معرض الصور' : 'Photo gallery', href: `/${locale}/gallery/` },
    { label: tn('contact'), href: `/${locale}/contact` }
  ];

  const serviceLinks = services.slice(0, 6).map((s) => ({ label: s.name[lang], href: `/${locale}/services/${s.slug}` }));

  const featureItems = [
    { icon: 'shield' as IconName, label: isArabic ? 'مناقشة المستندات' : 'Document Discussion' },
    { icon: 'users' as IconName, label: isArabic ? 'مقارنة الملفات الفردية' : 'Individual Profile Comparison' },
    { icon: 'refresh' as IconName, label: isArabic ? 'مراجعة خطوات الطلب' : 'Enquiry Process Review' },
    { icon: 'headset' as IconName, label: isArabic ? 'دعم مخصص' : 'Dedicated Support' }
  ];

  const stats = [
    { icon: 'shield' as IconName, value: isArabic ? 'المستندات' : 'Documents', label: isArabic ? 'ناقش متطلبات حالتك' : 'Discuss your case requirements' },
    { icon: 'users' as IconName, value: isArabic ? 'الملفات' : 'Profiles', label: isArabic ? 'راجع الخبرة والمهام' : 'Review experience and duties' },
    { icon: 'globe' as IconName, value: isArabic ? 'الإمارات' : 'UAE', label: isArabic ? 'أكد خيارات منطقتك' : 'Confirm options for your area' },
    { icon: 'headset' as IconName, value: isArabic ? 'الاستفسار' : 'Enquiry', label: isArabic ? 'اسأل عن الخطوة التالية' : 'Ask about the next step' }
  ];

  return (
    <footer className="bg-[#f8f6f0] px-3 py-4 text-primary-900 lg:px-5">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[18px] border border-primary-900/8 bg-white/78 shadow-[0_24px_80px_rgba(7,22,74,0.08)] ring-1 ring-accent-500/10 backdrop-blur-xl">
        <div className={styles.columns}>
          <div className={styles.brand}>
            <BrandLogo locale={locale} alt={logoAlt} width={280} className={styles.logo} />
            <p className="mt-3 max-w-[310px] text-[0.9rem] leading-5 text-ink/72">{isArabic ? t('about') : 'Trusted maid and domestic worker services for families across the UAE.'}</p>
            <div className="mt-3 h-px w-12 bg-[#c98700]" />
            <div className={styles.features}>
              {featureItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-[0.9rem] leading-tight text-primary-900/88">
                  <span className="text-[#c98700]"><Icon name={item.icon} size={19} /></span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <FooterColumn title={t('quickLinks')} links={quickLinks} />
          <FooterColumn title={t('ourServices')} links={serviceLinks} />

          <div className={styles.contact}>
            <FooterTitle>{t('contactInfo')}</FooterTitle>
            <div className={styles.contactItems}>
              <ContactItem icon="phone" title={siteConfig.phone} text={isArabic ? 'هاتف المكتب' : 'Office telephone'} href={phoneHref} isArabic={isArabic} titleDirection="ltr" />
              <ContactItem icon="mail" title={siteConfig.email} text="" href={`mailto:${siteConfig.email}`} isArabic={isArabic} titleDirection="ltr" />
              <ContactItem icon="pin" title={isArabic ? 'مكتب عناية' : 'INAYA Office'} text={contactAddress} isArabic={isArabic} />
              <ContactItem icon="clock" title={isArabic ? 'ساعات العمل' : 'Office hours'} text={siteConfig.hours[lang]} isArabic={isArabic} />
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statIcon}><Icon name={stat.icon} size={30} /></span>
              <div className="min-w-0">
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>© {year} {isArabic ? 'عناية للعمالة المنزلية.' : 'INAYA Domestic Workers.'} {t('rights')}</p>
          <div className={styles.legal}>
            <Link href={`/${locale}/privacy-policy`} className="transition hover:text-primary-900">{t('privacy')}</Link>
            <Link href={`/${locale}/terms`} className="transition hover:text-primary-900">{t('terms')}</Link>
            <Link href={`/${locale}/refund-policy`} className="transition hover:text-primary-900">{t('refund')}</Link>
            <Link href={`/${locale}/company-information/`} className="transition hover:text-primary-900">{isArabic ? 'معلومات الشركة' : 'Company information'}</Link>
            <CookieSettingsButton locale={locale} />
          </div>
          <div className={styles.note}>
            <span className="text-[#c98700]"><Icon name="lock" size={20} /></span>
            <span>{isArabic ? 'ناقش التفاصيل قبل تأكيد الخدمة' : 'Discuss details before confirming a service'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className={styles.title}>{children}</h2>
      <div className="mt-2.5 h-[2px] w-14 bg-[#c98700]" />
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className={styles.linkColumn}>
      <FooterTitle>{title}</FooterTitle>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link href={link.href} className="group inline-flex items-start gap-2 py-1 transition hover:text-primary-900">
              <span aria-hidden="true" className="shrink-0 text-lg leading-none text-[#c98700] transition group-hover:translate-x-0.5 rtl:rotate-180">›</span>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({
  icon,
  title,
  text,
  href,
  isArabic,
  titleDirection
}: {
  icon: IconName;
  title: React.ReactNode;
  text: string;
  href?: string;
  isArabic: boolean;
  titleDirection?: 'ltr' | 'rtl';
}) {
  const content = (
    <>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#c98700]/55 text-[#c98700]"><Icon name={icon} size={15} /></span>
      <span className={`min-w-0 flex-1 ${isArabic ? 'text-right' : 'text-left'}`}>
        <span dir={titleDirection} className="block font-semibold leading-tight text-primary-900 [overflow-wrap:anywhere]">{title}</span>
        {text ? <span className="mt-0.5 block leading-tight text-primary-900/75">{text}</span> : null}
      </span>
    </>
  );
  const className = 'flex h-full items-center gap-2.5 py-1.5 transition hover:-translate-y-0.5';
  return href ? <a href={href} className={className}>{content}</a> : <div className={className}>{content}</div>;
}

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (name === 'phone') return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L8 9.7a16 16 0 0 0 6.3 6.3l1.27-1.27a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92Z" /></svg>;
  if (name === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
  if (name === 'pin') return <svg {...common}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
  if (name === 'clock') return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
  if (name === 'shield') return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></svg>;
  if (name === 'users') return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
  if (name === 'refresh') return <svg {...common}><path d="M21 12a9 9 0 0 1-9 9 9.7 9.7 0 0 1-6.74-2.74L3 16" /><path d="M3 21v-5h5" /><path d="M3 12a9 9 0 0 1 9-9 9.7 9.7 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></svg>;
  if (name === 'headset') return <svg {...common}><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1" /><path d="M7 18h-.5A2.5 2.5 0 0 1 4 15.5v-1A2.5 2.5 0 0 1 6.5 12H7v6Z" /><path d="M17 18h.5a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-2.5-2.5H17v6Z" /><path d="M13 21h-2" /></svg>;
  if (name === 'globe') return <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 0 20" /><path d="M12 2a15.3 15.3 0 0 0 0 20" /></svg>;
  if (name === 'lock') return <svg {...common}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>;
  return null;
}
