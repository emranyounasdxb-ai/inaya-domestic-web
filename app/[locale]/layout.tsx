import type { Metadata } from 'next';
import { preload } from 'react-dom';
import { IBM_Plex_Sans_Arabic, Inter, Noto_Sans_Arabic, Plus_Jakarta_Sans } from 'next/font/google';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { siteConfig } from '@/lib/site-config';
import Navbar from '@/components/Navbar';
import BrandLogo from '@/components/BrandLogo';
import Footer from '@/components/Footer';
import FloatingSocialBar from '@/components/FloatingSocialBar';
import SierraLeoneOfferControls from '@/components/SierraLeoneOfferControls';
import Measurement from '@/components/Measurement';
import sitemap from '@/app/sitemap';
import '../globals.css';
import '../arabic-body-font.css';
import '../arabic-heading-font.css';

// Inline font CSS discovers the faces used by this locale without preloading unused languages or weights.
const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap', preload: false });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading', display: 'swap', preload: false });
const notoSansArabic = Noto_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'], variable: '--font-arabic-body', display: 'swap', preload: false });
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'], variable: '--font-arabic-heading', display: 'swap', preload: false });

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ar' ? 'عناية للعمالة المنزلية' : siteConfig.name,
    metadataBase: new URL(siteConfig.url)
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as (typeof locales)[number])) notFound();
  setRequestLocale(locale);
  const nav = await getTranslations('nav');
  const common = await getTranslations('common');
  const labels = Object.fromEntries(['home', 'about', 'services', 'pricing', 'howItWorks', 'serviceAreas', 'faq', 'contact', 'bookNow'].map((key) => [key, nav(key)]));
  labels.langSwitch = common('langSwitch');
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  if (locale === 'ar') {
    preload('/fonts/inaya-arabic-body-core-eb3aa9ff2a7a.woff2', { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });
    preload('/fonts/inaya-arabic-body-latin.woff2', { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });
    preload('/fonts/inaya-arabic-heading-700.woff2', { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });
  }
  return (
    <html lang={locale} dir={dir}>
      <body className={`${inter.variable} ${plusJakarta.variable} ${notoSansArabic.variable} ${ibmPlexSansArabic.variable}`} style={locale === 'ar' ? { '--font-arabic-body': `"INAYA Arabic Body", ${notoSansArabic.style.fontFamily}`, '--font-arabic-heading': `"INAYA Arabic Heading", ${ibmPlexSansArabic.style.fontFamily}` } as React.CSSProperties : undefined}>
          {process.env.NEXT_PUBLIC_MEASUREMENT_ENABLED === 'true' && <Measurement enabled paths={sitemap().map((entry) => new URL(entry.url).pathname)} origin={siteConfig.url} />}
          <Navbar locale={locale} labels={labels} logo={<BrandLogo locale={locale} alt={locale === 'ar' ? 'عناية للعمالة المنزلية — الرئيسية' : 'INAYA Domestic Workers — Home'} width={156} className="h-7 w-auto max-w-[132px] object-contain sm:max-w-[156px]" />} />
          <FloatingSocialBar />
          <SierraLeoneOfferControls locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
      </body>
    </html>
  );
}
