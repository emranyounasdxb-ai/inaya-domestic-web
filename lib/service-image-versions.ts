import approval from '../content/research/2026-10-25/service-owner-approved-images.json';

const versions = new Map(approval.images.map(({ src, cacheVersion }) => [src, cacheVersion]));

/** Version display requests only; canonical image paths and filenames stay stable. */
export function withServiceImageVersion(displaySrc: string, originalSrc = displaySrc) {
  const version = versions.get(originalSrc.split(/[?#]/)[0]);
  if (!version) return displaySrc;
  const [url, fragment] = displaySrc.split('#', 2);
  const [pathname, query = ''] = url.split('?', 2);
  const params = new URLSearchParams(query);
  params.set('v', version);
  return `${pathname}?${params}${fragment === undefined ? '' : `#${fragment}`}`;
}
