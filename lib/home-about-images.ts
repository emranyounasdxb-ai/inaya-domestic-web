import approval from '../content/research/2026-10-25/home-about-owner-approved-images.json';
import { withServiceImageVersion } from './service-image-versions';

export type HomeAboutImageSlot = 'homeHero' | 'homeFollowUp' | 'aboutStory' | 'aboutMission' | 'aboutVision' | 'aboutLeadership';
export const homeAboutImages = Object.fromEntries(approval.images.map(image => [image.slot, image])) as Record<HomeAboutImageSlot, (typeof approval.images)[number]>;
/** Retained byte-for-byte from the approved studio hero before desktop art direction. */
export const mobileHeroImage = {
  src: '/images/home/inaya-home-hero-mobile.webp',
  width: 1536,
  height: 1024,
  webpSha256: 'afbe41a72b02e21259a3decfade48dbc1915d051210a97d40affc1c4482feb6b',
  cacheVersion: 'afbe41a72b02',
};
const versions = new Map([...approval.images.map(image => [image.src, image.cacheVersion] as const), [mobileHeroImage.src, mobileHeroImage.cacheVersion] as const]);

/** Keep canonical filenames stable; version only rendered original/derived requests. */
export function withPageImageVersion(displaySrc: string, originalSrc = displaySrc) {
  const version = versions.get(originalSrc.split(/[?#]/)[0]);
  if (!version) return withServiceImageVersion(displaySrc, originalSrc);
  const [url, fragment] = displaySrc.split('#', 2);
  const [pathname, query = ''] = url.split('?', 2);
  const params = new URLSearchParams(query);
  params.set('v', version);
  return `${pathname}?${params}${fragment === undefined ? '' : `#${fragment}`}`;
}

export function portraitSrcSet(src: string) {
  const base = src.replace(/^\//, '').replace(/\.[^.]+$/i, '');
  const widths = src === '/images/home/inaya-home-hero-family.webp'
    ? [480, 768, 960, 1200, 1400, 1672]
    : src.startsWith('/images/home/') ? [480, 768, 960, 1200, 1400] : [480, 768, 960, 1200];
  return widths.map(width => `${withPageImageVersion(`/optimized/${base}-${width}.webp`, src)} ${width}w`).join(', ');
}
