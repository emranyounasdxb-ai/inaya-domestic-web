'use client';

import { useState } from 'react';
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
    { href: `/${locale}/contact`, label: t('contact') }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/75 shadow-[0_1px_0_rgba(255,255,255,0.65)_inset] backdrop-blur-xl">
      <nav className="container-x flex h-11 items-center justify-between gap-6">
        <Link href={`/${locale}`} className="flex shrink-0 items-center" aria-label="INAYA Domestic Workers home">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="h-6 w-auto max-w-[118px] object-contain sm:max-w-[138px]"
          />
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-7 lg:flex">
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

        <div className="flex shrink-0 items-center gap-2.5">
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
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full px-2.5 py-1 text-[12px] font-medium text-gray-800 transition hover:bg-black/[0.04] lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            Menu
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/[0.06] bg-white/90 backdrop-blur-xl lg:hidden">
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
          </div>
        </div>
      )}
    </header>
  );
}
