import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';

type IconName = 'phone' | 'mail' | 'pin' | 'clock' | 'shield' | 'users' | 'refresh' | 'headset' | 'globe' | 'lock';

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const isArabic = locale === 'ar';
  const lang = isArabic ? 'ar' : 'en';
  const year = new Date().getFullYear();
  const logoSrc = isArabic ? '/brand/inaya-arabic-logo.png' : '/brand/inaya-domestic-workers-logo.png';
  const logoAlt = isArabic ? 'INAYA Arabic logo' : 'INAYA Domestic Workers';
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, '')}`;
  const contactAddress = isArabic
    ? 'جراند مول - الطابق الأرضي - شارع الشيخ خليفة بن زايد - الراشدية 3 - عجمان'
    : siteConfig.address;

  const quickLinks = [
    { label: tn('home'), href: `/${locale}` },
    { label: tn('about'), href: `/${locale}/about` },
    { label: tn('services'), href: `/${locale}/services` },
    { label: isArabic ? 'آلية العمل' : 'How It Works', href: `/${locale}/how-it-works` },
    { label: isArabic ? 'الدول التي نوفر منها' : 'Countries We Source From', href: `/${locale}/services/live-in-maid#countries` },
    { label: tn('faq'), href: `/${locale}/faq` },
    { label: tn('contact'), href: `/${locale}/contact` }
  ];

  const serviceLinks = services.slice(0, 6).map((s) => ({ label: s.name[lang], href: `/${locale}/services/${s.slug}` }));

  const featureItems = [
    { icon: 'shield' as IconName, label: isArabic ? 'عاملات موثوقات ومتحقق منهن' : 'Verified & Trusted Workers' },
    { icon: 'users' as IconName, label: isArabic ? 'مدربات وذوات خبرة' : 'Trained & Experienced' },
    { icon: 'refresh' as IconName, label: isArabic ? 'عملية سهلة ومنظمة' : 'Hassle-Free Process' },
    { icon: 'headset' as IconName, label: isArabic ? 'دعم مخصص' : 'Dedicated Support' }
  ];

  const stats = [
    { icon: 'shield' as IconName, value: '100%', label: isArabic ? 'عاملات موثوقات' : 'Verified Workers' },
    { icon: 'users' as IconName, value: '10,000+', label: isArabic ? 'أسر سعيدة' : 'Happy Families' },
    { icon: 'globe' as IconName, value: '6+', label: isArabic ? 'دول توريد' : 'Countries' },
    { icon: 'headset' as IconName, value: '24/7', label: isArabic ? 'دعم العملاء' : 'Customer Support' }
  ];

  return (
    <footer className="bg-[#f8f6f0] px-3 py-4 text-primary-900 lg:px-5">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[18px] border border-primary-900/8 bg-white/78 shadow-[0_24px_80px_rgba(7,22,74,0.08)] ring-1 ring-accent-500/10 backdrop-blur-xl">
        <div className="grid items-stretch gap-5 px-7 py-5 sm:px-10 lg:grid-cols-[1.18fr_0.92fr_1.04fr_1.23fr] lg:px-12 lg:py-6 xl:px-14">
          <div className="lg:flex lg:h-full lg:flex-col">
            <img src={logoSrc} alt={logoAlt} className="h-16 w-auto max-w-[280px] object-contain" />
            <p className="mt-3 max-w-[310px] text-[0.9rem] leading-5 text-ink/72">{isArabic ? t('about') : 'Trusted maid and domestic worker services for families across the UAE.'}</p>
            <div className="mt-3 h-px w-12 bg-[#c98700]" />
            <div className="mt-3 space-y-2.5 lg:flex lg:flex-1 lg:flex-col lg:justify-between lg:space-y-0">
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

          <div className="lg:flex lg:h-full lg:flex-col">
            <FooterTitle>{t('contactInfo')}</FooterTitle>
            <div className="mt-4 divide-y divide-primary-900/10 text-[0.8rem] lg:grid lg:flex-1 lg:grid-rows-4">
              <ContactItem icon="phone" title={siteConfig.phone} text={isArabic ? 'واتساب متاح' : 'WhatsApp Available'} href={phoneHref} />
              <ContactItem icon="mail" title={siteConfig.email} text="" href={`mailto:${siteConfig.email}`} />
              <ContactItem icon="pin" title={isArabic ? 'مكتب عناية' : 'INAYA Office'} text={contactAddress} />
              <ContactItem icon="clock" title="9:00 AM - 9:00 PM" text={isArabic ? 'كل الأيام' : 'All Days'} />
            </div>
          </div>
        </div>

        <div className="border-y border-primary-900/8 bg-[#fbfaf7]/70 px-7 py-3 sm:px-10 lg:px-14">
          <div className="grid gap-3 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`flex items-center justify-center gap-4 ${index > 0 ? 'lg:border-s lg:border-primary-900/10' : ''}`}>
                <span className="text-[#c98700]"><Icon name={stat.icon} size={34} /></span>
                <div>
                  <p className="font-heading text-[1.45rem] font-bold leading-none tracking-[-0.04em] text-primary-900">{stat.value}</p>
                  <p className="mt-0.5 text-[0.82rem] leading-tight text-ink/62">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 px-7 py-3.5 text-[0.8rem] text-ink/64 sm:px-10 lg:flex-row lg:px-14">
          <p>© {year} INAYA Domestic Workers. {t('rights')}</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link href={`/${locale}/privacy-policy`} className="transition hover:text-primary-900">{t('privacy')}</Link>
            <span className="text-primary-900/25">|</span>
            <Link href={`/${locale}/terms`} className="transition hover:text-primary-900">{t('terms')}</Link>
            <span className="text-primary-900/25">|</span>
            <Link href={`/${locale}/refund-policy`} className="transition hover:text-primary-900">{t('refund')}</Link>
          </div>
          <div className="flex items-center gap-3 text-ink/68">
            <span className="text-[#c98700]"><Icon name="lock" size={20} /></span>
            <span>{isArabic ? 'مرخص ومعتمد من الجهات الحكومية في الإمارات' : 'Licensed & Approved by UAE Government Authorities'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-heading text-[0.96rem] font-bold uppercase tracking-[0.08em] text-primary-900">{children}</h4>
      <div className="mt-2.5 h-[2px] w-14 bg-[#c98700]" />
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="lg:flex lg:h-full lg:flex-col">
      <FooterTitle>{title}</FooterTitle>
      <ul className="mt-4 space-y-2.5 text-[0.88rem] leading-tight text-ink/75 lg:flex lg:flex-1 lg:flex-col lg:justify-between lg:space-y-0">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link href={link.href} className="group inline-flex items-center gap-3 transition hover:text-primary-900">
              <span className="text-lg leading-none text-[#c98700] transition group-hover:translate-x-0.5">›</span>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({ icon, title, text, href }: { icon: IconName; title: React.ReactNode; text: string; href?: string }) {
  const content = (
    <>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#c98700]/55 text-[#c98700]"><Icon name={icon} size={15} /></span>
      <span>
        <span className="block font-semibold leading-tight text-primary-900">{title}</span>
        {text ? <span className="mt-0.5 block leading-tight text-ink/62">{text}</span> : null}
      </span>
    </>
  );
  const className = 'flex h-full items-center gap-2.5 py-1.5 transition hover:-translate-y-0.5';
  return href ? <a href={href} dir="ltr" className={className}>{content}</a> : <div className={className}>{content}</div>;
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
