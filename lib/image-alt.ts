import { getServiceWithExtras } from './service-helpers';
import { getServiceImage, serviceFallbackImage } from './service-presentation';
import catalog from '../content/site-image-gallery.json';

const sceneDescribedRoles = new Set(['executive-nannies', 'private-chefs', 'house-managers']);

export function serviceImageAlt(locale: string, slug: string) {
  if (sceneDescribedRoles.has(slug)) {
    const image = catalog.images.find(image => image.src === getServiceImage(slug));
    if (!image) throw new Error(`Missing approved role image description: ${slug}`);
    return image.alt[locale === 'ar' ? 'ar' : 'en'];
  }
  if (getServiceImage(slug) === serviceFallbackImage) return locale === 'ar'
    ? 'مشهد توضيحي لعاملات منزليات يؤدين مهام مختلفة في المنزل بأزياء مخصصة لأدوارهن'
    : 'Illustrative household scene with domestic workers performing separate tasks in role-specific uniforms';
  const service = getServiceWithExtras(slug);
  return locale === 'ar' ? `خدمة ${service?.name.ar ?? 'العمالة المنزلية'}`
    : `Household service: ${service?.name.en ?? 'domestic worker support'}`;
}
