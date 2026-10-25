import { getServiceWithExtras } from './service-helpers';
import { getServiceImage, serviceFallbackImage } from './service-presentation';

export function serviceImageAlt(locale: string, slug: string) {
  if (getServiceImage(slug) === serviceFallbackImage) return locale === 'ar'
    ? 'مشهد توضيحي لعاملات منزليات يؤدين مهام مختلفة في المنزل بأزياء مخصصة لأدوارهن'
    : 'Illustrative household scene with domestic workers performing separate tasks in role-specific uniforms';
  const service = getServiceWithExtras(slug);
  return locale === 'ar' ? `خدمة ${service?.name.ar ?? 'العمالة المنزلية'}`
    : `Household service: ${service?.name.en ?? 'domestic worker support'}`;
}
