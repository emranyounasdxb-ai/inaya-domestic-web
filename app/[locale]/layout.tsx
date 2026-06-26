import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic, Inter, Noto_Sans_Arabic, Plus_Jakarta_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocialBar from '@/components/FloatingSocialBar';
import TrustTextGsap from '@/components/TrustTextGsap';
import HomeStandardsSpotlight from '@/components/HomeStandardsSpotlight';
import '../globals.css';
import '../service-area-images.css';
import '../type-scale.css';
import '../home-hero-image.css';
import '../trust-text-gsap.css';
import '../home-standards-spotlight.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });
const notoSansArabic = Noto_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'], variable: '--font-arabic-body', display: 'swap' });
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600', '700'], variable: '--font-arabic-heading', display: 'swap' });

export const dynamic = 'force-dynamic';
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: { default: t('defaultTitle'), template: `%s | ${t('siteName')}` },
    description: t('defaultDescription'),
    metadataBase: new URL('https://inayadomestic.ae'),
    alternates: {
      languages: { en: '/en', ar: '/ar' }
    },
    openGraph: {
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      type: 'website',
      locale
    }
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  setRequestLocale(locale);

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body className={`${inter.variable} ${plusJakarta.variable} ${notoSansArabic.variable} ${ibmPlexSansArabic.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <TrustTextGsap />
          <HomeStandardsSpotlight />
          <Navbar locale={locale} />
          <FloatingSocialBar />
          <main>{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
