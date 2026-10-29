import { articleInline, type ArticleInline } from '@/lib/article-markdown';

export default function BlogInlineText({ text, parse = articleInline }: { text: string; parse?: (text: string) => ArticleInline[] }) {
  return parse(text).map((part, index) => part.type === 'link'
    ? <a key={index} href={part.href} data-contextual-blog-link={'contextual' in part && part.contextual ? 'true' : undefined} className="blog-inline-link font-semibold text-primary-900 underline decoration-accent-700 decoration-2 underline-offset-4 transition hover:text-accent-700 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700">{part.text}</a>
    : part.type === 'strong' ? <strong key={index} className="font-semibold text-primary-900">{part.text}</strong> : part.text);
}
