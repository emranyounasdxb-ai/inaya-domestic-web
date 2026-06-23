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
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="container-x flex h-14 items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center" aria-label="INAYA Domestic Workers home">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="h-8 w-auto max-w-[145px] object-contain sm:max-w-[170px]"
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-primary-700">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href={switchedPath} className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium hover:bg-gray-50">
            {tc('langSwitch')}
          </Link>
          <Link href={`/${locale}/booking`} className="hidden btn-accent !px-4 !py-2 !text-sm sm:inline-flex">
            {t('bookNow')}
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="container-x flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                {l.label}
              </Link>
            ))}
            <Link href={`/${locale}/booking`} onClick={() => setOpen(false)} className="btn-accent mt-2 !py-2 !text-sm">
              {t('bookNow')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
