import Image from 'next/image';
import { getBlogImage } from '@/lib/blog-images';

export default function BlogImage({ slug, locale, hero = false, className = '' }: {
  slug: string;
  locale: string;
  hero?: boolean;
  className?: string;
}) {
  const image = getBlogImage(slug);
  if (!image) return null;

  return (
    <div className={`aspect-video overflow-hidden ${className}`}>
      <Image
        src={image.src}
        alt={image.alt[locale === 'ar' ? 'ar' : 'en']}
        width={1600}
        height={900}
        unoptimized
        loading={hero ? 'eager' : 'lazy'}
        fetchPriority={hero ? 'high' : undefined}
        sizes={hero ? '(min-width: 1024px) 896px, 100vw' : '(min-width: 768px) 33vw, 100vw'}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}
