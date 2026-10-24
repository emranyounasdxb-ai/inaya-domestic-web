import { siteConfig } from './site-config';

export const organizationId = `${siteConfig.url}/#organization`;

// The same business identity is reused by HTML pages and the public facts record.
export function organizationEntity(locale: string) {
  return {
    '@type': ['Organization', 'LocalBusiness'],
    '@id': organizationId,
    name: locale === 'ar' ? siteConfig.nameAr : siteConfig.name,
    legalName: siteConfig.legalName,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: siteConfig.officeHours.openDays,
        opens: siteConfig.officeHours.opens,
        closes: siteConfig.officeHours.closes
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: siteConfig.officeHours.closedDays,
        opens: '00:00', closes: '00:00'
      }
    ],
    url: `${siteConfig.url}/en/`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'WhatsApp enquiries',
      telephone: siteConfig.whatsappDisplay,
      url: `https://wa.me/${siteConfig.whatsapp}`
    },
    sameAs: ['https://www.linkedin.com/company/inaya-domestic-workers-ajman/'],
    logo: `${siteConfig.url}/brand/inaya-domestic-workers-logo.webp`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address,
      addressLocality: 'Ajman',
      addressCountry: 'AE'
    }
  };
}
