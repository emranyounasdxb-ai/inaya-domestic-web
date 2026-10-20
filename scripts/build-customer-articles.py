"""Compile the audited 20-question manuscript series without rewriting old copy."""
from pathlib import Path
import hashlib
import json
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
DATE = '2026-10-20'
# Published parent revision, reachable in fresh repository checkouts.
BASE = 'b7f236857a709677d712a955b0b6bada12d9e0f5'
ORIGIN = 'https://inayadomestic.ae'
LANGUAGES = ('en', 'ar')


def baseline(path):
    return subprocess.check_output(['git', 'show', f'{BASE}:{path}'], cwd=ROOT, text=True)


def literal_array(source, declaration):
    start = source.index(declaration) + len(declaration)
    return json.JSONDecoder().raw_decode(source[start:].lstrip())[0]


def links(body):
    return list(dict.fromkeys(re.findall(r'\[[^\]]+\]\((https://[^)]+)\)', body)))


def plain(value):
    return re.sub(r'\s+', ' ', re.sub(r'\[([^\]]+)\]\(https://[^)]+\)', r'\1', value).replace('**', '')).strip()


def dump(path, value):
    (ROOT / path).write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n')


drafts = [json.loads(path.read_text()) for path in sorted((ROOT / f'content/drafts/{DATE}').glob('[0-9][0-9].json'))]
assert [d['id'] for d in drafts] == [f'{n:02}' for n in range(1, 21)], 'Complete all twenty manuscripts before compiling'
assert len({d['slug'] for d in drafts}) == 20
assert sum(d['mode'] == 'new' for d in drafts) == 17
content_source = baseline('lib/published-article-content.ts')
content_declaration = 'export const publishedArticles: PublishedArticleContent[] = '
articles = literal_array(content_source, content_declaration)
old_articles = {article['slug']: article for article in articles}
metadata_source = baseline('lib/published-article-metadata.ts')
metadata_declaration = 'export const publishedArticleMetadata: PublishedArticleMetadata[] = '
metadata = literal_array(metadata_source, metadata_declaration)
metadata_by_slug = {article['slug']: article for article in metadata}
visuals, faqs, manifest = {}, {}, []

for draft in drafts:
    slug = draft['slug']
    update = draft['mode'] == 'update'
    assert (slug in old_articles) == update, f'{slug}: duplicate policy'
    article = old_articles[slug] if update else {'slug': slug, 'published': DATE, 'updated': DATE}
    article['updated'] = DATE
    if not update:
        articles.append(article)
    visuals[slug] = {lang: draft[lang]['visual'] for lang in LANGUAGES}
    faqs[slug] = {}
    entry = {'id': draft['id'], 'slug': slug, 'mode': draft['mode'], 'question': draft['question'], 'languages': {}}
    for lang in LANGUAGES:
        copy = draft[lang]
        assert len(copy['faqs']) == 4
        faqs[slug][lang] = [{'question': plain(q['question']), 'answer': plain(q['answer'])} for q in copy['faqs']]
        faq_body = '\n\n## ' + ('Customer questions and answers' if lang == 'en' else 'أسئلة العملاء وإجاباتها') + '\n\n'
        faq_body += '\n\n'.join(f"**{q['question']}**\n\n{q['answer']}" for q in copy['faqs'])
        supplement = copy['body'].strip() + faq_body
        separator = ('## Practical guide: ' if lang == 'en' else '## دليل عملي: ') + draft['question'][lang]
        if update:
            original_body = article[lang]['body']
            article[lang]['body'] = original_body + '\n\n' + separator + '\n\n' + supplement
            assert article[lang]['body'].startswith(original_body + '\n\n')
        else:
            article[lang] = {'title': copy['title'], 'description': copy['description'], 'body': supplement}
        entry['languages'][lang] = {
            'title': article[lang]['title'],
            'description': article[lang]['description'],
            'url': f'{ORIGIN}/{lang}/blog/{slug}/',
            'supplementSeparator': separator if update else None,
            'bodySha256': hashlib.sha256(article[lang]['body'].encode()).hexdigest(),
            'wordCount': len(plain(article[lang]['body']).split()),
            'newBodyWords': len(plain(copy['body']).split()),
            'faqCount': len(copy['faqs']),
            'internalLinks': [u for u in links(article[lang]['body']) if u.startswith(ORIGIN + '/')],
            'externalLinks': [u for u in links(article[lang]['body']) if not u.startswith(ORIGIN + '/')]
        }
    meta = metadata_by_slug.get(slug)
    if meta is None:
        meta = {'slug': slug, 'published': DATE, 'updated': DATE}
        metadata.append(meta)
    meta['updated'] = DATE
    for lang in LANGUAGES:
        meta[lang] = {key: article[lang][key] for key in ('title', 'description')}
        meta[lang]['citations'] = [url for url in links(article[lang]['body']) if not url.startswith(ORIGIN + '/')]
    manifest.append(entry)

assert len(articles) == 37 and len(metadata) == 37
(ROOT / 'lib/published-article-content.ts').write_text(content_source.split(content_declaration)[0] + content_declaration + json.dumps(articles, ensure_ascii=False, indent=2) + ';\n')
(ROOT / 'lib/published-article-metadata.ts').write_text(metadata_source.split(metadata_declaration)[0] + metadata_declaration + json.dumps(metadata, ensure_ascii=False, indent=2) + ';\n')
visual_source = (ROOT / 'lib/customer-article-visuals.ts').read_text()
visual_prefix = visual_source.split('export const customerArticleVisuals:')[0]
(ROOT / 'lib/customer-article-visuals.ts').write_text(visual_prefix + 'export const customerArticleVisuals: Record<string, BilingualArticleVisual> = ' + json.dumps(visuals, ensure_ascii=False, indent=2) + ';\n\nexport function getCustomerArticleVisual(slug: string, lang: \'en\' | \'ar\') {\n  return customerArticleVisuals[slug]?.[lang];\n}\n')
(ROOT / 'lib/customer-article-faqs.ts').write_text("type CustomerFaq = { question: string; answer: string };\n\n// The same four questions are rendered in each article and used by its schema.\nexport const customerArticleFaqs: Record<string, Record<'en' | 'ar', CustomerFaq[]>> = " + json.dumps(faqs, ensure_ascii=False, indent=2) + ';\n')
sitemap = baseline('app/sitemap.ts')
today_routes = ['blog'] + [f"blog/{draft['slug']}" for draft in drafts]
for route in today_routes:
    pattern = r'("' + re.escape(route) + r'":\s*)\x27[^\x27]+\x27'
    if re.search(pattern, sitemap):
        sitemap = re.sub(pattern, lambda m: m[1] + "'" + DATE + "'", sitemap)
    else:
        sitemap = sitemap.replace('const contentUpdatedAt: Record<string, string> = {', 'const contentUpdatedAt: Record<string, string> = {\n  ' + json.dumps(route) + ": '" + DATE + "',", 1)
(ROOT / 'app/sitemap.ts').write_text(sitemap)
dump(f'content/research/{DATE}/article-manifest.json', manifest)
dump(f'content/research/{DATE}/source-register.json', [{'id': d['id'], 'slug': d['slug'], 'sources': d['sources'], 'searchEvidence': d['searchEvidence']} for d in drafts])
print(json.dumps({'topics': len(drafts), 'new': 17, 'updated': 3, 'languageVersions': 40, 'publishedArticles':len(articles), 'allGuideTopics':44, 'canonicalUrls':228, 'updatedTodayUrls':42, 'totalArticleWords':sum(v['wordCount'] for e in manifest for v in e['languages'].values())}))
