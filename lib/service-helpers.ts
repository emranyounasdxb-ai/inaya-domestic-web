import { services, type Service } from './services';
import { domesticServiceSummaries } from './domestic-service-content';

export const extraServices: Service[] = [
  {
    slug: 'countries-we-source-from',
    icon: '🌍',
    name: { en: 'Countries We Source From', ar: 'الدول التي نوفر منها العمالة' },
    short: { en: 'Domestic worker source countries.', ar: 'الدول التي نوفر منها العمالة المنزلية.' },
    description: { en: 'Explore domestic worker profiles by country, experience, language and family needs.', ar: 'تعرّف على ملفات العمالة المنزلية حسب الدولة والخبرة واللغة واحتياج الأسرة.' }
  }
];

export const allServices = [...services, ...extraServices].map((service) => (
  domesticServiceSummaries[service.slug]
    ? { ...service, description: domesticServiceSummaries[service.slug] }
    : service
));

export function getServiceWithExtras(slug: string) {
  return allServices.find((service) => service.slug === slug);
}
