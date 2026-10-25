import approval from '../content/research/2026-10-25/home-about-owner-approved-images.json';
import { withServiceImageVersion } from './service-image-versions';

export type HomeAboutImageSlot = 'homeHero' | 'homeFollowUp' | 'aboutStory' | 'aboutMission' | 'aboutVision' | 'aboutLeadership';
export const homeAboutImages = Object.fromEntries(approval.images.map(image => [image.slot, image])) as Record<HomeAboutImageSlot, (typeof approval.images)[number]>;
const versions = new Map(approval.images.map(image => [image.src, image.cacheVersion]));

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
  const widths = src.startsWith('/images/home/') ? [480, 768, 960, 1200, 1400] : [480, 768, 960, 1200];
  return widths.map(width => `${withPageImageVersion(`/optimized/${base}-${width}.webp`, src)} ${width}w`).join(', ');
}
