import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const isArabic = locale === 'ar';
  const lang = isArabic ? 'ar' : 'en';
  const year = new Date().getFullYear();
  const logoSrc = isArabic ? '/brand/inaya-arabic-logo.png' : '/brand/inaya-domestic-workers-logo.png';
  const logoAlt = isArabic ? 'INAYA Arabic logo' : 'INAYA Domestic Workers';
  const contactAddress = isArabic
    ? 'جراند مول - الطابق الأرضي - شارع الشيخ خليفة بن زايد - الراشدية 3 - عجمان'
    : siteConfig.address;
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, '')}`;
  const phoneDisplay = isArabic ? (
    <><span>+</span><span>٩٧١٦</span><span>٧٤٠</span><span>٠١٢٨</span></>
  ) : siteConfig.phone;

  const quickLinks = [
    { label: tn('home'), href: `/${locale}` },
    { label: tn('about'), href: `/${locale}/about` },
    { label: tn('booking'), href: `/${locale}/booking` },
    { label: tn('pricing'), href: `/${locale}/pricing` },
    { label: tn('faq'), href: `/${locale}/faq` },
    { label: tn('contact'), href: `/${locale}/contact` }
  ];

  const employerLinks = [
    { label: isArabic ? 'آلية العمل' : 'Our Process', href: `/${locale}/how-it-works` },
    { label: isArabic ? 'معايير الخدمة' : 'Service Standards', href: `/${locale}/about` },
    { label: isArabic ? 'التحقق والفحص' : 'Vetting & Screening', href: `/${locale}/about` },
    { label: isArabic ? 'المستندات' : 'Documentation', href: `/${locale}/faq` },
    { label: isArabic ? 'رحلة التوظيف' : 'Hiring Journey', href: `/${locale}/how-it-works` }
  ];

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfaf7_0%,#f6f0e8_100%)] px-5 py-8 text-primary-900 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(191,164,106,0.13),transparent_24rem),radial-gradient(circle_at_86%_42%,rgba(7,22,74,0.055),transparent_26rem)]" />
      <div className="footer-luxury-card relative mx-auto max-w-[1500px] overflow-hidden rounded-[34px] border border-white/80 bg-white/55 shadow-[0_30px_100px_rgba(7,22,74,0.10)] ring-1 ring-accent-500/10 backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.70)_0%,rgba(255,255,255,0.18)_55%,rgba(191,164,106,0.08)_100%)]" />
        <div className="relative grid gap-10 px-7 py-12 lg:grid-cols-[1.25fr_1fr_1fr_1fr_1.35fr] lg:px-12 lg:py-16">
          <div className="lg:border-e lg:border-accent-500/16 lg:pe-10">
            <div className="mb-7 inline-flex rounded-xl bg-white/75 px-4 py-3 shadow-[0_14px_35px_rgba(7,22,74,0.06)] ring-1 ring-accent-500/12">
              <img src={logoSrc} alt={logoAlt} className="h-16 w-auto max-w-[260px] object-contain" />
            </div>
            <p className="max-w-sm text-base leading-8 text-ink/68">{t('about')}</p>
            <div className="mt-8 h-px w-16 bg-accent-500" />
            <Link href={`/${locale}/contact`} className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-accent-500/35 bg-white/55 px-6 py-4 text-sm font-bold text-primary-900 shadow-[0_16px_42px_rgba(7,22,74,0.07)] transition hover:-translate-y-0.5 hover:border-accent-500/65 hover:bg-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-500/12 text-accent-700 ring-1 ring-accent-500/22">☎</span>
              {isArabic ? 'احجز استشارة' : 'Book a Consultation'}
              <span>›</span>
            </Link>
          </div>

          <FooterColumn title={t('quickLinks')} links={quickLinks} />
          <FooterColumn title={t('ourServices')} links={services.slice(0, 7).map((s) => ({ label: s.name[lang], href: `/${locale}/services/${s.slug}` }))} />
          <FooterColumn title={isArabic ? 'لأصحاب المنازل' : 'For Employers'} links={employerLinks} />

          <div className="lg:border-s lg:border-accent-500/16 lg:ps-10">
            <FooterTitle>{t('contactInfo')}</FooterTitle>
            <div className="mt-8 space-y-6 text-sm">
              <ContactItem icon="☎" title={phoneDisplay} text={isArabic ? 'الأحد - الخميس، 9 صباحاً - 6 مساءً' : 'Mon - Sat: 9AM - 6PM'} href={phoneHref} />
              <ContactItem icon="✉" title={siteConfig.email} text={isArabic ? 'نرد خلال 24 ساعة' : 'We reply within 24 hours'} href={`mailto:${siteConfig.email}`} />
              <ContactItem icon="⌖" title={isArabic ? 'مكتب عناية' : 'INAYA Office'} text={contactAddress} />
              <ContactItem icon="◷" title={isArabic ? 'ساعات العمل' : 'Working Hours'} text={isArabic ? 'الأحد - الخميس، 9:00 - 6:00' : 'Sunday - Thursday, 9:00 AM - 6:00 PM'} />
            </div>
          </div>
        </div>

        <div className="relative mx-7 mb-8 rounded-[24px] border border-white/75 bg-white/52 p-6 shadow-[0_20px_70px_rgba(7,22,74,0.07)] ring-1 ring-accent-500/10 backdrop-blur-xl lg:mx-12 lg:p-7">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_repeat(4,1fr)_1.2fr] lg:items-center">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent-500/35 bg-white/70 text-3xl text-accent-700 shadow-sm">◇</div>
              <div>
                <p className="font-heading text-lg font-bold leading-snug text-primary-900">{isArabic ? 'موثوق من الأسر في الإمارات' : 'Trusted by Families Across the UAE'}</p>
                <p className="mt-1 text-sm text-ink/58">{isArabic ? 'خدمة منظمة منذ اليوم الأول.' : 'Delivering excellence since day one.'}</p>
              </div>
            </div>
            <FooterStat value="10K+" label={isArabic ? 'أسر سعيدة' : 'Happy Families'} />
            <FooterStat value="25K+" label={isArabic ? 'عاملات تم تنسيقهن' : 'Workers Deployed'} />
            <FooterStat value="15+" label={isArabic ? 'دول توريد' : 'Countries Sourced'} />
            <FooterStat value="98%" label={isArabic ? 'رضا العملاء' : 'Client Satisfaction'} />
            <div className="text-center lg:text-end">
              <p className="mb-4 font-heading font-bold text-primary-900">{isArabic ? 'تابع عناية' : 'Follow Inaya'}</p>
              <div className="flex justify-center gap-3 lg:justify-end">
                {['f', 'ig', 'in', 'yt'].map((item) => <span key={item} className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-500/16 bg-white/70 text-xs font-bold text-primary-900 shadow-sm">{item}</span>)}
              </div>
            </div>
          </div>
          <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
        </div>

        <div className="relative flex flex-col items-center justify-between gap-4 border-t border-accent-500/12 bg-white/30 px-7 py-7 text-sm text-ink/58 lg:flex-row lg:px-12">
          <p>© {year} INAYA Domestic Workers. {t('rights')}</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href={`/${locale}/privacy-policy`} className="hover:text-primary-900">{t('privacy')}</Link>
            <Link href={`/${locale}/terms`} className="hover:text-primary-900">{t('terms')}</Link>
            <Link href={`/${locale}/refund-policy`} className="hover:text-primary-900">{t('refund')}</Link>
          </div>
          <p>{isArabic ? 'صنع بعناية في الإمارات' : 'Made with ♡ in UAE'}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-heading text-xl font-bold text-primary-900">{children}</h4>
      <div className="mt-4 h-px w-12 bg-accent-500" />
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <FooterTitle>{title}</FooterTitle>
      <ul className="mt-8 space-y-4 text-sm text-ink/70">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link href={link.href} className="group inline-flex items-center gap-3 transition hover:text-primary-900">
              <span className="text-accent-700 transition group-hover:translate-x-0.5">›</span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({ icon, title, text, href }: { icon: string; title: React.ReactNode; text: string; href?: string }) {
  const content = (
    <>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent-500/18 bg-white/70 text-lg text-accent-700 shadow-sm">{icon}</span>
      <span>
        <span className="block font-bold text-primary-900">{title}</span>
        <span className="mt-1 block leading-6 text-ink/58">{text}</span>
      </span>
    </>
  );

  return href ? <a href={href} dir="ltr" className="flex items-start gap-4 transition hover:-translate-y-0.5">{content}</a> : <div className="flex items-start gap-4">{content}</div>;
}

function FooterStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-accent-500/12 text-center lg:border-s lg:px-4">
      <p className="font-heading text-3xl font-bold tracking-[-0.04em] text-primary-900">{value}</p>
      <p className="mt-1 text-sm text-ink/58">{label}</p>
    </div>
  );
}
