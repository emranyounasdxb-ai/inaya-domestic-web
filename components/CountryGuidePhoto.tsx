import Image from 'next/image';
import { getCountrySourceImage } from '@/lib/country-source-images';
import type { Lang } from '@/lib/country-source-pages';

export default function CountryGuidePhoto({ lang, code = '', className = '' }: { lang: Lang; code?: string; className?: string }) {
  const image = getCountrySourceImage(code);
  return (
    <figure className={className}>
      <Image
        src={`${image.src}?v=${image.cacheVersion}`}
        alt={image.alt[lang]}
        width={image.width}
        height={image.height}
        unoptimized
        loading="lazy"
        className="h-auto w-full rounded-[20px]"
      />
      <figcaption className="mt-3 text-xs leading-6 text-primary-900/65">
        {lang === 'ar'
          ? 'صورة توضيحية. يُراجع التوفر والخبرة لكل ملف فردي.'
          : 'Illustrative image. Availability and experience are reviewed for each individual profile.'}
      </figcaption>
    </figure>
  );
}
