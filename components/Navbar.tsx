'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const tc = useTranslations('common');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const otherLocale = locale === 'en' ? 'ar' : 'en';
  const switchedPath = pathname.replace(`/${locale}`, `/${otherLocale}`);
  const logoSrc = locale === 'ar' ? '/brand/inaya-arabic-logo.png' : '/brand/inaya-domestic-workers-logo.png';
  const logoAlt = locale === 'ar' ? 'INAYA Arabic logo' : 'INAYA Domestic Workers';

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/pricing`, label: t('pricing') },
    { href: `/${locale}/how-it-works`, label: t('howItWorks') },
    { href: `/${locale}/service-areas`, label: t('serviceAreas') },
    { href: `/${locale}/faq`, label: t('faq') },
    { href: `/${locale}/contact`, label: t('contact') }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-primary-700/10 bg-ivory/80 shadow-[0_1px_0_rgba(255,255,255,0.75)_inset] backdrop-blur-2xl">
      <nav className="container-x flex h-14 items-center justify-between gap-6">
        <Link href={`/${locale}`} className="flex shrink-0 items-center" aria-label="INAYA Domestic Workers home">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={156}
            height={28}
            className="h-7 w-auto max-w-[132px] object-contain sm:max-w-[156px]"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-5 xl:gap-7 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-[11px] font-semibold leading-none transition-colors xl:text-[12px] ${active ? 'text-primary-900' : 'text-ink/70 hover:text-primary-900'}`}
              >
                {l.label}
                {active && <span className="absolute -bottom-2 left-0 h-px w-full bg-accent-500" />}
              </Link>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-2.5">
          <Link
            href={switchedPath}
            className="rounded-full border border-primary-700/10 bg-white/45 px-3 py-1.5 text-[12px] font-semibold leading-none text-primary-900 shadow-sm transition hover:border-accent-500 hover:bg-white/80"
          >
            {tc('langSwitch')}
          </Link>
          <Link
            href={`/${locale}/booking`}
            className="hidden rounded-full bg-primary-900 px-4 py-2 text-[12px] font-semibold leading-none text-white shadow-glass transition hover:-translate-y-0.5 hover:bg-primary-800 sm:inline-flex"
          >
            {t('bookNow')}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-primary-700/10 bg-white/45 px-3 py-1.5 text-[12px] font-semibold text-primary-900 transition hover:bg-white/80 lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            Menu
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-primary-700/10 bg-ivory/95 backdrop-blur-2xl lg:hidden">
          <div className="container-x flex flex-col py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-primary-700/10 py-3 text-sm font-semibold text-primary-900 last:border-b-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/booking`}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary-900 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              {t('bookNow')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
