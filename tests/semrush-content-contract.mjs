import { attrs, text, tokens } from '../scripts/seo-content-audit.mjs';

// Same visible-text rules as auditExport; head, links, images and JSON-LD are
// independent fields so a copy amendment cannot conceal a structural change.
export function extractContract(html) {
  const body = html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, '');
  const main = body.slice(body.indexOf('<main'), body.lastIndexOf('</main>') + 7).replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/g, '');
  const meta = [...html.matchAll(/<meta\b([^>]*)>/g)].map(match => attrs(match[1]));
  const links = [...html.matchAll(/<link\b([^>]*)>/g)].map(match => attrs(match[1]));
  const root = attrs(html.match(/<html\b([^>]*)>/)[1]);
  return {
    title: text(html.match(/<title>([\s\S]*?)<\/title>/)[1]),
    description: meta.find(item => item.name === 'description')?.content,
    sharing: meta.filter(item => item.name?.startsWith('twitter:') || item.property?.startsWith('og:')),
    canonical: links.filter(item => item.rel === 'canonical').map(item => item.href),
    alternates: links.filter(item => item.rel === 'alternate'),
    robots: meta.filter(item => item.name === 'robots'), lang: root.lang, dir: root.dir,
    h1: [...main.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map(match => text(match[1])),
    headings: [...main.matchAll(/<(h[23])\b[^>]*>([\s\S]*?)<\/\1>/g)].map(match => [match[1], text(match[2])]),
    mainText: text(main),
    mainLinks: [...main.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].map(match => ({ href: attrs(match[1]).href, text: text(match[2]) })),
    images: [...main.matchAll(/<img\b([^>]*)>/g)].map(match => {
      const image = attrs(match[1]); return { src: image.src, alt: image.alt };
    }),
    graph: [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter(match => attrs(match[1]).type === 'application/ld+json').map(match => JSON.parse(match[2]))
  };
}
export function auditParagraphs(html) {
  const body = html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, '');
  const main = body.slice(body.indexOf('<main'), body.lastIndexOf('</main>') + 7).replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/g, '');
  return [...main.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].map(match => tokens(text(match[1])).join(' ')).filter(value => value.length >= 60 && tokens(value).length >= 8);
}
