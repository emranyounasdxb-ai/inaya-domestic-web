import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { services } from '@/lib/services';
import { siteConfig } from '@/lib/site-config';

type IconName = 'phone' | 'mail' | 'pin' | 'clock' | 'shield' | 'users' | 'refresh' | 'headset' | 'globe' | 'lock' | 'facebook' | 'instagram' | 'whatsapp' | 'linkedin';

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

  const serviceLinks = services.slice(0, 7).map((s) => ({ label: s.name[lang], href: `/${locale}/services/${s.slug}` }));

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

  const socials = [
    { icon: 'facebook' as IconName, label: 'Facebook', href: '#' },
    { icon: 'instagram' as IconName, label: 'Instagram', href: '#' },
    { icon: 'whatsapp' as IconName, label: 'WhatsApp', href: `https://wa.me/${siteConfig.phone.replace(/\D/g, '')}` },
    { icon: 'linkedin' as IconName, label: 'LinkedIn', href: '#' }
  ];

  return (
    <footer className="bg-[#f8f6f0] px-3 pb-3 pt-5 text-white lg:px-4 lg:pb-4 lg:pt-6">
      <div className="relative mx-auto max-w-[1510px] overflow-hidden rounded-[6px] border border-[#c9a55a]/45 bg-[radial-gradient(circle_at_12%_22%,rgba(191,164,106,0.10),transparent_25rem),linear-gradient(135deg,#071120_0%,#0b1728_48%,#07101d_100%)] shadow-[0_28px_90px_rgba(7,22,74,0.18)]">
        <div className="relative grid gap-7 px-7 py-8 sm:px-10 lg:grid-cols-[1.25fr_0.9fr_1fr_1.25fr] lg:px-12 lg:py-10 xl:px-16">
          <div>
            <img src={logoSrc} alt={logoAlt} className="h-20 w-auto max-w-[310px] object-contain brightness-0 invert sepia saturate-[4] hue-rotate-[350deg]" />
            <p className="mt-5 max-w-[330px] text-[0.98rem] leading-7 text-white/74">{t('about')}</p>
            <div className="mt-5 h-px w-12 bg-[#d2a84f]" />
            <div className="mt-5 space-y-3">
              {featureItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-[0.98rem] leading-tight text-white/88">
                  <span className="text-[#d2a84f]"><Icon name={item.icon} size={22} /></span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <FooterColumn title={t('quickLinks')} links={quickLinks} />
          <FooterColumn title={t('ourServices')} links={serviceLinks} />

          <div>
            <FooterTitle>{t('contactInfo')}</FooterTitle>
            <div className="mt-5 divide-y divide-white/10 text-[0.95rem]">
              <ContactItem icon="phone" title={siteConfig.phone} text={isArabic ? 'واتساب متاح' : 'WhatsApp Available'} href={phoneHref} />
              <ContactItem icon="mail" title={siteConfig.email} text="" href={`mailto:${siteConfig.email}`} />
              <ContactItem icon="pin" title={isArabic ? 'مكتب عناية' : 'INAYA Office'} text={contactAddress} />
              <ContactItem icon="clock" title="9:00 AM - 9:00 PM" text={isArabic ? 'كل الأيام' : 'All Days'} />
            </div>
            <div className="mt-6">
              <FooterTitle>{isArabic ? 'تابعنا' : 'Follow Us'}</FooterTitle>
              <div className="mt-4 flex gap-3">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} aria-label={social.label} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d2a84f]/70 text-[#d2a84f] transition hover:-translate-y-0.5 hover:bg-[#d2a84f] hover:text-[#071120]">
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-y border-white/10 px-7 py-5 sm:px-10 lg:px-16">
          <div className="grid gap-4 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`flex items-center justify-center gap-4 ${index > 0 ? 'lg:border-s lg:border-white/12' : ''}`}>
                <span className="text-[#d2a84f]"><Icon name={stat.icon} size={42} /></span>
                <div>
                  <p className="font-heading text-2xl font-bold leading-none text-white">{stat.value}</p>
                  <p className="mt-1 text-[0.9rem] leading-tight text-white/70">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-4 px-7 py-5 text-[0.88rem] text-white/68 sm:px-10 lg:flex-row lg:px-16">
          <p>© {year} INAYA Domestic Workers. {t('rights')}</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href={`/${locale}/privacy-policy`} className="transition hover:text-white">{t('privacy')}</Link>
            <Link href={`/${locale}/terms`} className="transition hover:text-white">{t('terms')}</Link>
            <Link href={`/${locale}/refund-policy`} className="transition hover:text-white">{t('refund')}</Link>
          </div>
          <div className="flex items-center gap-3 text-white/74">
            <span className="text-[#d2a84f]"><Icon name="lock" size={24} /></span>
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
      <h4 className="font-heading text-[1.05rem] font-bold uppercase tracking-[0.08em] text-white">{children}</h4>
      <div className="mt-3 h-[2px] w-14 bg-[#d2a84f]" />
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <FooterTitle>{title}</FooterTitle>
      <ul className="mt-5 space-y-3 text-[0.96rem] leading-tight text-white/82">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link href={link.href} className="group inline-flex items-center gap-3 transition hover:text-white">
              <span className="text-xl leading-none text-[#d2a84f] transition group-hover:translate-x-0.5">›</span>
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
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d2a84f]/70 text-[#d2a84f]"><Icon name={icon} size={20} /></span>
      <span>
        <span className="block font-medium leading-snug text-white">{title}</span>
        {text ? <span className="mt-0.5 block leading-snug text-white/64">{text}</span> : null}
      </span>
    </>
  );
  const className = "flex items-start gap-4 py-3 transition hover:-translate-y-0.5";
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
  if (name === 'facebook') return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M14 8.5V6.6c0-.7.5-.9 1-.9h2V2.2c-.4-.1-1.7-.2-3.1-.2-3.1 0-5.2 1.9-5.2 5.3v1.2H5.5V12h3.2v10H14V12h3.1l.5-3.5H14Z" /></svg>;
  if (name === 'instagram') return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
  if (name === 'whatsapp') return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2a9.86 9.86 0 0 0-8.45 14.95L2.3 22l5.18-1.36A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.1 8.1 0 0 1-4.14-1.13l-.3-.18-3.07.8.82-2.99-.2-.31a8.12 8.12 0 1 1 6.89 3.81Zm4.45-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" /></svg>;
  if (name === 'linkedin') return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.98H3.56V20h3.38V8.98ZM5.25 4a1.96 1.96 0 1 0 0 3.92A1.96 1.96 0 0 0 5.25 4ZM20.45 13.95c0-3.03-1.62-4.44-3.78-4.44-1.74 0-2.52.96-2.96 1.63h-.04V8.98h-3.24V20h3.37v-5.45c0-1.44.27-2.83 2.05-2.83 1.75 0 1.78 1.64 1.78 2.92V20H21v-6.05h-.55Z" /></svg>;
  return null;
}
