export type ArticleBlock =
  | { type: 'heading'; text: string; id: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; columns: string[]; rows: string[][]; headingId: string };

export type ArticleInline =
  | { type: 'text' | 'strong'; text: string }
  | { type: 'link'; text: string; href: string };

// Only the Markdown features used by the approved articles are accepted.
// React renders text nodes; manuscript HTML is never injected into the page.
export function articleInline(value: string): ArticleInline[] {
  const pattern = /\[([^\]]+)\]\((https:\/\/[^)]+)\)|\*\*([^*]+)\*\*/g;
  const result: ArticleInline[] = [];
  let offset = 0;
  for (const match of value.matchAll(pattern)) {
    if (match.index! > offset) result.push({ type: 'text', text: value.slice(offset, match.index) });
    if (match[1]) result.push({ type: 'link', text: match[1], href: match[2] });
    else result.push({ type: 'strong', text: match[3] });
    offset = match.index! + match[0].length;
  }
  if (offset < value.length) result.push({ type: 'text', text: value.slice(offset) });
  return result;
}

export function articleLinks(body: string): string[] {
  return [...new Set([...body.matchAll(/\[[^\]]+\]\((https:\/\/[^)]+)\)/g)].map((match) => match[1]))];
}

export function articleBlocks(body: string): ArticleBlock[] {
  const lines = body.split(/\r?\n/);
  const blocks: ArticleBlock[] = [];
  let headingId = '';
  let headingCount = 0;
  let index = 0;
  const cells = (line: string) => line.trim().slice(1, -1).split('|').map((cell) => cell.trim());
  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) { index++; continue; }
    if (line.startsWith('## ')) {
      headingId = `article-section-${++headingCount}`;
      blocks.push({ type: 'heading', text: line.slice(3), id: headingId });
      index++;
    } else if (line.startsWith('- ')) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith('- ')) items.push(lines[index++].trim().slice(2));
      blocks.push({ type: 'list', items });
    } else if (line.startsWith('|')) {
      const columns = cells(line);
      index++;
      if (!lines[index] || !cells(lines[index]).every((cell) => /^:?-+:?$/.test(cell))) throw new Error('Article table requires a header separator');
      index++;
      const rows: string[][] = [];
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        const row = cells(lines[index++]);
        if (row.length !== columns.length) throw new Error('Article table column count differs');
        rows.push(row);
      }
      if (!headingId) throw new Error('Article table requires a descriptive section heading');
      blocks.push({ type: 'table', columns, rows, headingId });
    } else {
      const paragraph = [line];
      index++;
      while (index < lines.length && lines[index].trim() && !/^(## |- |\|)/.test(lines[index].trim())) paragraph.push(lines[index++].trim());
      blocks.push({ type: 'paragraph', text: paragraph.join(' ') });
    }
  }
  return blocks;
}
