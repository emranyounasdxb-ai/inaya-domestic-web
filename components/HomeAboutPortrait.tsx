import { homeAboutImages, portraitSrcSet, withPageImageVersion, type HomeAboutImageSlot } from '@/lib/home-about-images';

/** Full group portraits keep their native aspect ratio at every breakpoint. */
export default function HomeAboutPortrait({ slot, isArabic, priority = false, sizes = '(max-width: 1024px) 100vw, 42vw', className = '' }: {
  slot: HomeAboutImageSlot;
  isArabic: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const image = homeAboutImages[slot];
  return (
    <picture className={`block overflow-hidden rounded-[22px] bg-[#f7f8fb] ${className}`}>
      {process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true' ? <source type="image/webp" srcSet={portraitSrcSet(image.src)} sizes={sizes} /> : null}
      <img
        src={withPageImageVersion(image.src)}
        alt={image.alt[isArabic ? 'ar' : 'en']}
        width={image.width}
        height={image.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding={priority ? 'sync' : 'async'}
        className="block h-auto w-full object-contain"
      />
    </picture>
  );
}
