import Image from 'next/image';
import { getBlogImage } from '@/lib/blog-images';

export default function BlogImage({ slug, locale, hero = false, className = '', variant = 'card' }: {
  slug: string;
  locale: string;
  hero?: boolean;
  className?: string;
  variant?: 'card' | 'sidebar';
}) {
  const image = getBlogImage(slug);
  if (!image) return null;
  const fullFrame = Boolean(image.width && image.height);

  return (
    <div data-blog-image={hero ? 'hero' : variant} className={`${hero ? (fullFrame ? '' : 'aspect-video') : 'aspect-[16/10] bg-ivory'} overflow-hidden ${className}`} style={hero && fullFrame ? { aspectRatio: `${image.width} / ${image.height}` } : undefined}>
      <Image
        src={image.cacheVersion ? `${image.src}?v=${image.cacheVersion}` : image.src}
        alt={image.alt[locale === 'ar' ? 'ar' : 'en']}
        width={image.width ?? 1600}
        height={image.height ?? 900}
        unoptimized
        loading={hero ? 'eager' : 'lazy'}
        fetchPriority={hero ? 'high' : undefined}
        sizes={hero ? '(min-width: 1024px) 896px, 100vw' : variant === 'sidebar' ? '56px' : '(min-width: 768px) 33vw, 100vw'}
        className={hero ? (fullFrame ? 'h-auto w-full' : 'h-full w-full object-cover object-center') : 'h-full w-full object-cover object-center'}
      />
    </div>
  );
}
