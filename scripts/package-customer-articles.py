"""Build a self-contained bilingual reading edition and editable article pack."""
from pathlib import Path
import csv
import html
import json
import re
import shutil
import textwrap
import zipfile

ROOT = Path(__file__).resolve().parents[1]
DATE = '2026-10-20'
OUT = ROOT.parent / 'output' / 'inaya-20-articles'
KIT = OUT / 'INAYA-20-Articles'
drafts = [json.loads(p.read_text()) for p in sorted((ROOT / f'content/drafts/{DATE}').glob('[0-9][0-9].json'))]
manifest = json.loads((ROOT / f'content/research/{DATE}/article-manifest.json').read_text())
assert len(drafts) == len(manifest) == 20, 'Expected twenty drafts and twenty manifest entries'
assert [d['id'] for d in drafts] == [f'{n:02}' for n in range(1, 21)], 'Draft IDs must cover 01 through 20 in order'
assert len({d['slug'] for d in drafts}) == 20, 'Draft slugs must be unique'
assert all((d['id'], d['slug']) == (m['id'], m['slug']) for d, m in zip(drafts, manifest)), 'Draft and manifest IDs/slugs must match in order'
source = (ROOT / 'lib/published-article-content.ts').read_text()
articles = json.JSONDecoder().raw_decode(source.split('export const publishedArticles: PublishedArticleContent[] = ')[1].lstrip())[0]
articles = {a['slug']: a for a in articles}
assert all(d['slug'] in articles for d in drafts), 'Each draft must have compiled article content'
OUT.mkdir(parents=True, exist_ok=True)
if KIT.exists():
    shutil.rmtree(KIT)
for part in ('articles-en', 'articles-ar', 'charts', 'research'):
    (KIT / part).mkdir(parents=True, exist_ok=True)
esc = html.escape


def inline(value):
    value = esc(value)
    value = re.sub(r'\[([^\]]+)\]\((https://[^)]+)\)', r'<a href="\2">\1</a>', value)
    return re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', value)


def markdown(body):
    lines, chunks, index = body.splitlines(), [], 0
    while index < len(lines):
        line = lines[index].strip()
        if not line:
            index += 1
            continue
        if line.startswith('## '):
            chunks.append('<h3>' + inline(line[3:]) + '</h3>')
            index += 1
        elif line.startswith('|'):
            cells = lambda row: row.strip().strip('|').split('|')
            columns = cells(line)
            index += 2
            rows = []
            while index < len(lines) and lines[index].strip().startswith('|'):
                rows.append(cells(lines[index])); index += 1
            chunks.append('<div class="table-scroll"><table><thead><tr>' + ''.join('<th scope="col">' + inline(c.strip()) + '</th>' for c in columns) + '</tr></thead><tbody>' + ''.join('<tr>' + ''.join(('<th scope="row">' if n == 0 else '<td>') + inline(c.strip()) + ('</th>' if n == 0 else '</td>') for n, c in enumerate(row)) + '</tr>' for row in rows) + '</tbody></table></div>')
        elif line.startswith('- '):
            items = []
            while index < len(lines) and lines[index].strip().startswith('- '):
                items.append(lines[index].strip()[2:]); index += 1
            chunks.append('<ul>' + ''.join('<li>' + inline(item) + '</li>' for item in items) + '</ul>')
        else:
            paragraph = [line]; index += 1
            while index < len(lines) and lines[index].strip() and not lines[index].strip().startswith(('## ', '- ', '|')):
                paragraph.append(lines[index].strip()); index += 1
            chunks.append('<p>' + inline(' '.join(paragraph)) + '</p>')
    return '\n'.join(chunks)


def chart_html(visual):
    if visual['kind'] == 'bars':
        maximum = max(item['value'] for item in visual['items']) or 1
        content = ''.join('<div class="chart-row"><div class="chart-label"><strong>' + esc(item['label']) + '</strong><bdi>' + f"{item['value']:,.0f} " + esc(visual.get('unit', '')) + '</bdi></div><div class="track"><span style="width:' + str(item['value'] / maximum * 100) + '%"></span></div><p>' + esc(item['detail']) + '</p></div>' for item in visual['items'])
    else:
        content = '<div class="steps">' + ''.join('<div class="step"><span class="number">' + str(n) + '</span><div><strong>' + esc(item['label']) + '</strong><p>' + esc(item['detail']) + '</p></div></div>' for n, item in enumerate(visual['items'], 1)) + '</div>'
    return '<figure><figcaption>' + esc(visual['title']) + '</figcaption>' + content + '<p class="caption">' + esc(visual['caption']) + '</p></figure>'


def svg_chart(visual, lang):
    rtl = lang == 'ar'
    width, x, anchor = 1100, (1036 if rtl else 64), 'start'
    elements = []
    y = 55
    def text(value, size=22, color='#07164A', weight='400'):
        nonlocal y
        for line in textwrap.wrap(value, 72 if size < 27 else 55, break_long_words=False) or ['']:
            elements.append(f'<text x="{x}" y="{y}" text-anchor="{anchor}" direction="{"rtl" if rtl else "ltr"}" unicode-bidi="plaintext" font-size="{size}" font-weight="{weight}" fill="{color}">{esc(line)}</text>')
            y += size * 1.6
    text(visual['title'], 30, weight='700'); y += 22
    maximum = max([i.get('value', 0) for i in visual['items']] + [1])
    for number, item in enumerate(visual['items'], 1):
        text((str(number) + '. ' if visual['kind'] == 'steps' else '') + item['label'], 24, weight='700')
        if visual['kind'] == 'bars':
            value = item['value']; bar = value / maximum * 900
            elements.append(f'<rect x="64" y="{y}" width="900" height="24" rx="5" fill="#ffffff"/><rect x="{964-bar if rtl else 64}" y="{y}" width="{bar}" height="24" rx="5" fill="#07164A"/>')
            y += 58; text(f"{value:,.0f} {visual.get('unit', '')}", 22, weight='700')
        text(item['detail'], 21, '#3f4962'); y += 22
    y += 15; text(visual['caption'], 20, '#5d533c')
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{int(y+40)}" viewBox="0 0 {width} {int(y+40)}" role="img" aria-label="{esc(visual["title"])}"><rect width="100%" height="100%" rx="24" fill="#FBF7EC"/><g font-family="Arial,Tahoma,sans-serif">' + ''.join(elements) + '</g></svg>'


style = '''*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#f5f2eb;color:#17223a;font:16px/1.85 Arial,Tahoma,sans-serif}a{color:#0c326c;text-underline-offset:4px}header{background:#07164a;color:white;padding:48px max(5vw,24px)}header h1{font-size:clamp(30px,5vw,52px);line-height:1.15;max-width:1000px;margin:0 0 16px}.gold{color:#e0c98f}.wrap{max-width:1160px;margin:auto;padding:30px 24px}.summary{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:24px 0}.stat{background:white;border:1px solid #e0d5bd;border-radius:16px;padding:20px}.stat b{display:block;font-size:30px;color:#07164a}.paper{background:white;border:1px solid #dedaca;border-radius:22px;padding:clamp(22px,5vw,60px);margin:35px 0}.paper h2{font-size:clamp(27px,3vw,38px);line-height:1.45;color:#07164a;margin:16px 0}.paper h3{font-size:24px;line-height:1.6;margin-top:38px;border-top:1px solid #d3be8e;padding-top:22px}.kicker{color:#7a612b;font-size:13px;font-weight:bold;letter-spacing:.07em}.meta{color:#637086;font-size:13px}.paper p{max-width:80ch}.table-scroll{overflow-x:auto;margin:24px 0;border:1px solid #d9cfb8;border-radius:12px}table{border-collapse:collapse;width:100%;min-width:620px;font-size:14px;line-height:1.8}th,td{border-bottom:1px solid #e4e0d6;padding:14px 16px;vertical-align:top;text-align:start}thead{background:#eef0f6}tbody tr:nth-child(even){background:#fbfaf7}th{color:#07164a}figure{margin:30px 0;padding:26px;border:1px solid #d3be8e;border-radius:18px;background:#fbf7ec}figcaption{font-size:23px;font-weight:bold;color:#07164a;line-height:1.5;margin-bottom:24px}.steps{display:grid;grid-template-columns:1fr 1fr;gap:16px}.step{display:flex;gap:14px;background:white;border:1px solid #ddd7c9;border-radius:12px;padding:18px}.number{flex-shrink:0;background:#07164a;color:#fff;width:32px;height:32px;line-height:32px;text-align:center;border-radius:50%;font-weight:bold}.step p,.chart-row p{font-size:14px;margin:6px 0;line-height:1.8}.caption{border-top:1px solid #d3be8e;padding-top:18px;font-size:13px}.chart-row{margin:20px 0}.chart-label{display:flex;justify-content:space-between;gap:18px}.track{height:22px;background:white;border:1px solid #c8c4b8;border-radius:5px;overflow:hidden;margin:8px 0}.track span{display:block;background:#07164a;height:100%}.switch{display:flex;gap:18px;flex-wrap:wrap;font-size:14px}.plan{font-size:13px}.note{background:#fff9eb;border-inline-start:4px solid #bfa46a;padding:18px 22px}.top{display:inline-block;margin-top:28px;font-size:14px}[lang=ar]{font-family:Tahoma,Arial,sans-serif}[lang=ar] .kicker{letter-spacing:0}@media(max-width:700px){.summary{grid-template-columns:1fr 1fr}.steps{grid-template-columns:1fr}.wrap{padding:18px 12px}figure{padding:20px}.paper{margin:20px 0}}@media print{body{background:white;font-size:11pt}.paper{border:0;padding:0;break-before:page}.wrap{padding:0}.switch,.top{display:none}header{padding:24px}h2,h3,figcaption{break-after:avoid}figure,tr{break-inside:avoid}.table-scroll{overflow:visible}table{min-width:0}.steps{grid-template-columns:1fr 1fr}}'''
parts = ['<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>INAYA — 20 Customer Questions | 20 سؤالاً للعملاء</title><style>' + style + '</style></head><body><header id="top"><div class="kicker gold">INAYA DOMESTIC WORKERS · 20 OCTOBER 2026</div><h1>20 customer questions.<br><span class="gold">Practical answers in two languages.</span></h1><p lang="ar" dir="rtl">20 سؤالاً للعملاء — إجابات عملية بالإنجليزية والعربية</p></header><main class="wrap"><div class="summary"><div class="stat"><b>20</b>Article topics / موضوعاً</div><div class="stat"><b>40</b>Language versions / نسخة لغوية</div><div class="stat"><b>17 + 3</b>New + existing improvements</div><div class="stat"><b>80 × 2</b>Customer Q&A pairs</div></div><h2>Article plan · خطة المقالات</h2><p class="note">The existing 27 bilingual topics were audited first. Seventeen new practical guides fill distinct gaps; three existing articles receive substantial additions at their current URLs. Questions are prioritised using current English/Arabic search results and customer decision value. The order is an editorial priority list, not a measured keyword-volume ranking.</p><p class="note" lang="ar" dir="rtl">رُوجعت الموضوعات الـ27 الموجودة أولاً. تملأ 17 دليلاً جديداً فجوات عملية مختلفة، وتُضاف تحسينات موسعة إلى ثلاثة مقالات في روابطها الحالية. اختيرت الأسئلة استناداً إلى نتائج البحث بالإنجليزية والعربية وأهميتها في قرار العميل؛ ويعكس ترتيبها أولوية تحريرية، وليس ترتيباً عددياً لحجم البحث.</p><div class="table-scroll"><table class="plan"><thead><tr><th>#</th><th>English question</th><th lang="ar" dir="rtl">السؤال بالعربية</th><th>Action</th></tr></thead><tbody>']
csv_rows = []
for draft, item in zip(drafts, manifest):
    ident = draft['id']
    parts.append('<tr><th scope="row">' + ident + '</th><td><a href="#article-' + ident + '-en">' + esc(draft['question']['en']) + '</a></td><td dir="rtl" lang="ar"><a href="#article-' + ident + '-ar">' + esc(draft['question']['ar']) + '</a></td><td>' + ('New guide / دليل جديد' if draft['mode'] == 'new' else 'Existing update / تحديث مقال قائم') + '</td></tr>')
    csv_rows.append({'id':ident,'question_en':draft['question']['en'],'question_ar':draft['question']['ar'],'action':draft['mode'],'existing_matches':'; '.join(draft['existingMatches']),'gap':draft['gap'],'url_en':item['languages']['en']['url'],'url_ar':item['languages']['ar']['url'],'words_en':item['languages']['en']['wordCount'],'words_ar':item['languages']['ar']['wordCount'],'chart':draft['en']['visual']['kind'],'qa_per_language':4,'sources':'; '.join(s['url'] for s in draft['sources']),'search_evidence':'; '.join(s['url'] for s in draft['searchEvidence'])})
parts.append('</tbody></table></div>')
for draft, item in zip(drafts, manifest):
    article = articles[draft['slug']]
    for lang in ('en', 'ar'):
        copy, ident = article[lang], draft['id']
        reading = markdown(copy['body'])
        first = reading.find('</p>') + 4
        reading = reading[:first] + chart_html(draft[lang]['visual']) + reading[first:]
        parts.append('<section class="paper" id="article-' + ident + '-' + lang + '" lang="' + lang + '" dir="' + ('rtl' if lang == 'ar' else 'ltr') + '"><div class="kicker">' + ident + ' / 20 · ' + ('ENGLISH' if lang == 'en' else 'العربية') + '</div><h2>' + esc(copy['title']) + '</h2><div class="switch"><a href="#article-' + ident + '-' + ('ar' if lang == 'en' else 'en') + '">' + ('العربية' if lang == 'en' else 'English') + '</a><a href="' + item['languages'][lang]['url'] + '">' + ('Website article' if lang == 'en' else 'المقال على الموقع') + '</a></div><p class="meta">' + ('INAYA Domestic Workers Editorial Team · Updated ' if lang == 'en' else 'فريق تحرير عناية للعمالة المنزلية · آخر تحديث ') + DATE + '</p>' + reading + '<a class="top" href="#top">' + ('Back to article plan' if lang == 'en' else 'العودة إلى خطة المقالات') + '</a></section>')
        chart_name = ident + '-' + lang + '.svg'
        (KIT / 'charts' / chart_name).write_text(svg_chart(draft[lang]['visual'], lang))
        manuscript = '# ' + copy['title'] + '\n\n' + copy['description'] + '\n\n![' + draft[lang]['visual']['title'] + '](../charts/' + chart_name + ')\n\n' + copy['body'] + '\n'
        (KIT / ('articles-' + lang) / (ident + '-' + draft['slug'] + '.md')).write_text(manuscript)
parts.append('</main></body></html>')
book = OUT / 'INAYA-20-Customer-Articles-EN-AR.html'
book.write_text('\n'.join(parts))
(KIT / book.name).write_bytes(book.read_bytes())
with (KIT / 'INAYA-20-Question-Article-Plan.csv').open('w', encoding='utf-8-sig', newline='') as handle:
    writer = csv.DictWriter(handle, fieldnames=csv_rows[0].keys()); writer.writeheader(); writer.writerows(csv_rows)
for name in ('editorial-brief.json', 'article-manifest.json', 'source-register.json'):
    (KIT / 'research' / name).write_bytes((ROOT / f'content/research/{DATE}' / name).read_bytes())
(KIT / 'README.txt').write_text('INAYA — 20 customer-question articles, English and Arabic\n\nOpen INAYA-20-Customer-Articles-EN-AR.html for the full reading edition with all tables and charts.\narticles-en and articles-ar contain40 complete editable Markdown manuscripts. charts contains40 matching standalone SVG diagrams/charts. The CSV gives the20-question plan, duplicate audit decisions, URLs, counts and references.\n\n17 new topics and3 substantive updates preserve existing URL identity. The updated versions include the original text and additional practical guidance.\n\nResearch uses current public English/Arabic search-result evidence and primary references. Topic numbering reflects editorial decision value; no keyword-volume or ranking guarantee is asserted. Operational examples are labelled as planning examples; approved package prices are distinct from final invoice responsibilities.\n')
archive = OUT / 'INAYA-20-Articles-English-Arabic.zip'
with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED) as package:
    for file in sorted(KIT.rglob('*')):
        if file.is_file(): package.write(file, file.relative_to(OUT))
print(json.dumps({'html':str(book),'zip':str(archive),'manuscripts':40,'charts':40,'csvRows':len(csv_rows),'zipBytes':archive.stat().st_size}))
