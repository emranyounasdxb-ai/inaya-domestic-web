import { readFile } from 'node:fs/promises';

export const originalReviews = JSON.parse(await readFile(new URL('./fixtures/locale-original-reviews-20261024.json', import.meta.url), 'utf8')).reviews;
const quoted = new Set(originalReviews.map(review => review.text));
const reviewerNames = new Set(originalReviews.map(review => review.name));
const escape = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const normalize = value => value.replace(/\s+/g, ' ').trim();
const decode = value => normalize(value
  .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&quot;/g, '"').replace(/&apos;|&#x27;|&#39;/g, "'").replace(/&nbsp;/g, ' ')
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'));

// These are finite proper names, products and document-format acronyms. An
// adjacent English verb or ordinary phrase is still checked, not exempted.
const properTerms = ['Microsoft Clarity', 'Google Analytics', 'MOHRE UAE', 'UAE Pass', 'Google', 'Clarity', 'Ahrefs', 'LinkedIn', 'Snapchat', 'TikTok', 'YouTube', 'Instagram', 'JSON', 'Excel', 'PDF', 'CDC', 'GINETEX', 'MOHRE', 'INAYA'];
const removeTerm = (value, term) => value.replace(new RegExp(`(?<![\\p{L}\\p{N}])${escape(term)}(?![\\p{L}\\p{N}])`, 'gu'), '');

export function authoredSegments(html) {
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
  // Raw program/configuration data is not rendered prose. Do not omit main,
  // navigation, footer, mobile/hidden controls or screen-reader-only content.
  const markup = body.replace(/<(script|style|template)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
  const segments = [];
  const stack = [];
  const context = () => ({ tag: stack.at(-1)?.tag, lang: stack.findLast(node => node.attributes.lang)?.attributes.lang,
    closedOriginalReview: stack.some(node => node.tag === 'details' && node.attributes['data-original-review'] === 'true' && !node.open) });
  for (const match of markup.matchAll(/<!--[\s\S]*?-->|<[^>]+>|[^<]+/g)) {
    const token = match[0];
    if (token.startsWith('<!--')) continue;
    if (!token.startsWith('<')) {
      const value = decode(token);
      if (value) segments.push({ kind: 'text', value, ...context() });
      continue;
    }
    if (/^<\//.test(token)) {
      const tag = token.match(/^<\/([\w-]+)/)?.[1].toLowerCase();
      const index = stack.findLastIndex(node => node.tag === tag);
      if (index >= 0) stack.splice(index);
      continue;
    }
    const tag = token.match(/^<([\w-]+)/)?.[1].toLowerCase();
    const attributes = Object.fromEntries([...token.matchAll(/([\w-]+)="([^"]*)"/g)].map(row => [row[1].toLowerCase(), decode(row[2])]));
    for (const key of ['aria-label', 'aria-description', 'alt', 'title', 'placeholder', 'label', 'aria-roledescription', 'aria-valuetext']) {
      if (attributes[key]) segments.push({ kind: key, value: attributes[key] });
    }
    if (/^<input\b/i.test(token) && /^(?:submit|reset|button)$/.test(attributes.type) && attributes.value) segments.push({ kind: 'value', value: attributes.value });
    if (tag && !/^(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/.test(tag) && !/\/\s*>$/.test(token)) stack.push({ tag, attributes, open: /(?:\s)open(?:[\s=>])/.test(token) });
  }
  return segments;
}

export function localeViolations(html, locale, route) {
  const violations = [];
  for (const segment of authoredSegments(html)) {
    if (locale === 'en') {
      if (/\p{Script=Arabic}/u.test(segment.value)) violations.push(segment);
      continue;
    }
    let value = segment.value;
    if (route === '/ar/' && segment.kind === 'text' && quoted.has(value) && segment.tag === 'blockquote' && segment.lang === 'en' && segment.closedOriginalReview) continue;
    if (route === '/ar/' && segment.kind === 'text' && segment.tag === 'h4' && reviewerNames.has(value)) continue;
    // Original reviewers' names may occur only in the homepage's translated
    // image/selector labels. This cannot exempt any surrounding English prose.
    if (route === '/ar/' && segment.kind !== 'text') for (const review of originalReviews) value = removeTerm(value, review.name);
    if (['/ar/about/', '/ar/company-information/'].includes(route)) value = removeTerm(value, 'INAYA DOMESTIC WORKERS SERVICES (S.P.S - L.L.C)');
    if (route === '/ar/contact/') value = removeTerm(value, 'INAYA Domestic Workers');
    if (route === '/ar/company-information/') value = removeTerm(value, 'Asia/Dubai');
    // Only this site's real public address/domain, not arbitrary Latin URLs.
    for (const term of ['info@inayadomestic.ae', 'https://inayadomestic.ae', 'inayadomestic.ae']) value = removeTerm(value, term);
    for (const term of properTerms) value = removeTerm(value, term);
    if (/\p{Script=Latin}/u.test(value)) violations.push({ ...segment, unapproved: normalize(value) });
  }
  return violations;
}
