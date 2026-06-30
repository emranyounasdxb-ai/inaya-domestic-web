import type { Metadata } from 'next';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return locale === 'ar'
    ? {
        title: 'مناطق خدمة عناية في الإمارات | خدمات خادمات حسب الإمارة',
        description: 'استكشف مناطق خدمة عناية للعمالة المنزلية في الإمارات: عجمان، دبي، الشارقة، أبوظبي، رأس الخيمة، الفجيرة وأم القيوين.'
      }
    : {
        title: 'INAYA Service Areas in UAE | Maid Services by Emirate',
        description: 'Explore INAYA Domestic Workers service areas across the UAE, including Ajman, Dubai, Sharjah, Abu Dhabi, Ras Al Khaimah, Fujairah and Umm Al Quwain.'
      };
}

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
