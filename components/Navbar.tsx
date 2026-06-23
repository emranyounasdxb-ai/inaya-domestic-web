'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/lib/site-config';

const iconClass = 'h-4 w-4';

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.7 21.4 2.6 13.3 2.6 3.4c0-.7.5-1.2 1.2-1.2h3.5c.7 0 1.2.5 1.2 1.2 0 1.4.2 2.8.6 4 .1.4 0 .9-.3 1.2l-2.2 2.2Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <path fill="currentColor" d="M3.8 5h16.4c1 0 1.8.8 1.8 1.8v10.4c0 1-.8 1.8-1.8 1.8H3.8c-1 0-1.8-.8-1.8-1.8V6.8C2 5.8 2.8 5 3.8 5Zm8.2 7.1 7.7-5.3H4.3l7.7 5.3Zm0 2.3L4 8.9v8.3h16V8.9l-8 5.5Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <path fill="#25D366" d="M12 2.2A9.6 9.6 0 0 0 3.8 16.8L2.6 21.4l4.7-1.2A9.6 9.6 0 1 0 12 2.2Z" />
      <path fill="#fff" d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2.1-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.1.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.2-.2-.5-.3-.8-.5Z" />
    </svg>
  );
}

function SnapchatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <circle cx="12" cy="12" r="10" fill="#FFFC00" />
      <path fill="#fff" stroke="#111" strokeWidth=".9" d="M12 5.2c-2.3 0-3.7 1.6-3.7 4.1v2.1c0 .4-.3.7-.8.7-.3 0-.6-.1-.8-.2-.4-.1-.7.4-.4.7.5.5 1.2.9 2 1.1-.2.8-.8 1.4-1.7 1.8-.4.2-.3.8.1.9 1 .3 1.9.5 2.6 1.1.8.6 1.4 1.3 2.7 1.3s1.9-.7 2.7-1.3c.7-.6 1.6-.8 2.6-1.1.4-.1.5-.7.1-.9-.9-.4-1.5-1-1.7-1.8.8-.2 1.5-.6 2-1.1.3-.3 0-.8-.4-.7-.2.1-.5.2-.8.2-.5 0-.8-.3-.8-.7V9.3c0-2.5-1.4-4.1-3.7-4.1Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <rect width="20" height="20" x="2" y="2" rx="4" fill="#0A66C2" />
      <path fill="#fff" d="M7 10h3v8H7v-8Zm1.5-4A1.7 1.7 0 1 1 8.5 9 1.7 1.7 0 0 1 8.5 6ZM11.5 10h2.9v1.1c.4-.7 1.2-1.3 2.6-1.3 2.7 0 3.2 1.8 3.2 4.1V18h-3v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2V18h-3.1v-8Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <path fill="#25F4EE" d="M10.3 9.3v7.1a2.1 2.1 0 1 1-1.7-2.1v-3.1a5.1 5.1 0 1 0 4.8 5.1V8.7a6.1 6.1 0 0 0 3.6 1.1V6.7a3.2 3.2 0 0 1-3.6-3h-3.1v5.6Z" />
      <path fill="#FE2C55" d="M11.4 8.4v7.1a2.1 2.1 0 1 1-1.7-2.1v-3.1a5.1 5.1 0 1 0 4.8 5.1V7.8a6.1 6.1 0 0 0 3.6 1.1V5.8a3.2 3.2 0 0 1-3.6-3h-3.1v5.6Z" opacity=".9" />
      <path fill="#111" d="M10.9 8.8v7.1a2.1 2.1 0 1 1-1.7-2.1v-3.1a5.1 5.1 0 1 0 4.8 5.1V8.2a6.1 6.1 0 0 0 3.6 1.1V6.2a3.2 3.2 0 0 1-3.6-3h-3.1v5.6Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <path fill="#FF0000" d="M21.6 7.1a2.8 2.8 0 0 0-2-2C17.9 4.6 12 4.6 12 4.6s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2A29.4 29.4 0 0 0 2 12a29.4 29.4 0 0 0 .4 4.9 2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2A29.4 29.4 0 0 0 22 12a29.4 29.4 0 0 0-.4-4.9Z" />
      <path fill="#fff" d="m10 15.4 5.2-3.4L10 8.6v6.8Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <defs>
        <linearGradient id="instagramGradient" x1="3" y1="21" x2="21" y2="3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEDA75" />
          <stop offset=".28" stopColor="#FA7E1E" />
          <stop offset=".52" stopColor="#D62976" />
          <stop offset=".75" stopColor="#962FBF" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
      <rect width="20" height="20" x="2" y="2" rx="6" fill="url(#instagramGradient)" />
      <path fill="#fff" d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3Zm0 7.7A3 3 0 1 1 12 9a3 3 0 0 1 0 6Zm5.1-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
    </svg>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      title={label}
      className="inline-flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-black/[0.04]"
    >
      {children}
    </a>
  );
}

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const tc = useTranslations('common');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const otherLocale = locale === 'en' ? 'ar' : 'en';
  const switchedPath = pathname.replace(`/${locale}`, `/${otherLocale}`);
  const logoSrc = locale === 'ar' ? '/brand/inaya-arabic-logo.png' : '/brand/inaya-domestic-workers-logo.png';
  const logoAlt = locale === 'ar' ? 'INAYA Arabic logo' : 'INAYA Domestic Workers';
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, '')}`;
  const emailHref = `mailto:${siteConfig.email}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}`;

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/pricing`, label: t('pricing') },
    { href: `/${locale}/how-it-works`, label: t('howItWorks') },
    { href: `/${locale}/service-areas`, label: t('serviceAreas') },
    { href: `/${locale}/contact`, label: t('contact') }
  ];

  const actionLinks = [
    { href: phoneHref, label: 'Call INAYA Domestic Workers', icon: <PhoneIcon /> },
    { href: whatsappHref, label: 'WhatsApp INAYA Domestic Workers', icon: <WhatsAppIcon /> },
    { href: emailHref, label: 'Email INAYA Domestic Workers', icon: <EmailIcon /> }
  ];

  const socialLinks = [
    { href: 'https://www.snapchat.com/@inayadomestic', label: 'Snapchat', icon: <SnapchatIcon /> },
    { href: 'https://www.linkedin.com/company/inaya-domestic-workers-ajman/', label: 'LinkedIn', icon: <LinkedInIcon /> },
    { href: 'https://www.tiktok.com/@inayadomesticworkers', label: 'TikTok', icon: <TikTokIcon /> },
    { href: 'https://www.youtube.com/@inayadomesticworker', label: 'YouTube', icon: <YouTubeIcon /> },
    { href: 'https://www.instagram.com/inaya_domestic', label: 'Instagram', icon: <InstagramIcon /> }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/75 shadow-[0_1px_0_rgba(255,255,255,0.65)_inset] backdrop-blur-xl">
      <nav className="container-x flex h-11 items-center justify-between gap-4">
        <Link href={`/${locale}`} className="flex shrink-0 items-center" aria-label="INAYA Domestic Workers home">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="h-6 w-auto max-w-[118px] object-contain sm:max-w-[138px]"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-5 xl:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[12px] font-medium leading-none text-gray-700 transition-colors hover:text-gray-950"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={switchedPath}
            className="rounded-full px-2.5 py-1 text-[12px] font-medium leading-none text-gray-700 transition hover:bg-black/[0.04] hover:text-gray-950"
          >
            {tc('langSwitch')}
          </Link>
          <Link
            href={`/${locale}/booking`}
            className="hidden rounded-full bg-gray-950 px-3.5 py-1.5 text-[12px] font-semibold leading-none text-white transition hover:bg-gray-800 sm:inline-flex"
          >
            {t('bookNow')}
          </Link>
          <div className="hidden items-center gap-0.5 xl:flex">
            {actionLinks.map((item) => (
              <IconLink key={item.label} href={item.href} label={item.label}>
                <span className="text-gray-800">{item.icon}</span>
              </IconLink>
            ))}
            <span className="mx-1 h-4 w-px bg-black/10" aria-hidden="true" />
            {socialLinks.map((item) => (
              <IconLink key={item.label} href={item.href} label={item.label}>
                {item.icon}
              </IconLink>
            ))}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full px-2.5 py-1 text-[12px] font-medium text-gray-800 transition hover:bg-black/[0.04] xl:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            Menu
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/[0.06] bg-white/90 backdrop-blur-xl xl:hidden">
          <div className="container-x flex flex-col py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/[0.04] py-3 text-sm font-medium text-gray-800 last:border-b-0 hover:text-gray-950"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/booking`}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gray-950 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              {t('bookNow')}
            </Link>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 border-t border-black/[0.06] pt-3">
              {[...actionLinks, ...socialLinks].map((item) => (
                <IconLink key={item.label} href={item.href} label={item.label}>
                  {item.icon}
                </IconLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
