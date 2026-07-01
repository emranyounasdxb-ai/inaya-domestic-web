import type { Metadata } from 'next';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const canonical = `/${locale}/services`;
  const alternates = {
    canonical,
    languages: {
      en: '/en/services',
      ar: '/ar/services'
    }
  };

  if (locale === 'ar') {
    return {
      title: 'خدمات عناية للعمالة المنزلية في الإمارات',
      description: 'استكشف خدمات عناية في الإمارات: خادمات، مربيات، جليسات أطفال، طهاة، رعاية منزلية، توظيف، تأشيرة خادمة ونقل كفالة.',
      alternates
    };
  }

  return {
    title: 'INAYA Domestic Worker Services in UAE',
    description: 'Explore INAYA services in the UAE: maids, nannies, babysitters, cooks, home care, recruitment, maid visa support and sponsorship transfer.',
    alternates
  };
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
