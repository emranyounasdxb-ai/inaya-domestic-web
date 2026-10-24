export type KeywordFlow = {
  id: string; kind: 'flow'; title: string; caption: string; steps: string[];
};
export type KeywordGraph = {
  id: string; kind: 'graph'; title: string; caption: string;
  nodes: { id: string; label: string }[];
  edges: { from: string; to: string; label: string }[];
};
export type KeywordBars = {
  id: string; kind: 'bars'; title: string; caption: string; unit: string;
  items: { label: string; value: number }[];
};
export type KeywordVisual = KeywordFlow | KeywordGraph | KeywordBars;
export type KeywordArticleCopy = {
  title: string; description: string; body: string; visuals: KeywordVisual[];
  references: { title: string; url: string }[];
};
export type KeywordArticle = {
  id: string; keyword: string; slug: string; published: string; updated: string;
  en: KeywordArticleCopy; ar: KeywordArticleCopy;
};
