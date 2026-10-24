import { articleBlocks, type ArticleBlock } from './article-markdown';

export type KeywordArticleBlock = ArticleBlock
  | { type: 'subheading'; text: string; id: string }
  | { type: 'visual'; visualId: string };

// The new series adds only explicit visual placements and H3 question headings.
// All ordinary text continues through the existing safe Markdown parser.
export function keywordArticleBlocks(body: string): KeywordArticleBlock[] {
  const result: KeywordArticleBlock[] = [];
  let buffer: string[] = [];
  let headingCount = 0;
  const flush = () => {
    if (!buffer.length) return;
    for (const block of articleBlocks(buffer.join('\n'))) {
      if (block.type === 'heading') {
        const originalId = block.id;
        const id = `keyword-section-${++headingCount}`;
        result.push({ ...block, id });
        for (const remaining of result) {
          if (remaining.type === 'table' && remaining.headingId === originalId) remaining.headingId = id;
        }
      } else if (block.type === 'table') {
        const heading = [...result].reverse().find(entry => entry.type === 'heading');
        result.push({ ...block, headingId: heading?.id ?? `keyword-section-${headingCount}` });
      } else result.push(block);
    }
    buffer = [];
  };
  for (const line of body.split(/\r?\n/)) {
    const visual = line.trim().match(/^\{\{visual:([a-z0-9_-]+)\}\}$/);
    if (visual) {
      flush();
      result.push({ type: 'visual', visualId: visual[1] });
    } else if (line.startsWith('### ')) {
      flush();
      result.push({ type: 'subheading', text: line.slice(4), id: `keyword-question-${++headingCount}` });
    } else buffer.push(line);
  }
  flush();
  return result;
}
