const assert = require('node:assert/strict');
const test = require('node:test');
const { keywordArticleBlocks } = require('../.next/phase-02-unit/lib/keyword-article-markdown.js');
const { articleInline } = require('../.next/phase-02-unit/lib/article-markdown.js');

test('keyword parsing retains tables after visual boundaries and H3 FAQs with distinct section targets', () => {
  const body = 'Direct answer.\n\n## First section\n\n| Question | Answer |\n|---|---|\n| What? | Clear. |\n\n{{visual:process}}\n\n## Second section\n\n| Topic | Action |\n|---|---|\n| Next | Ask. |\n\n### Does this approve the case?\n\nNo.\n\n{{visual:relationships}}\n\n## Third section\n\nThe end.';
  const blocks = keywordArticleBlocks(body);
  const headings = blocks.filter(block => block.type === 'heading');
  assert.equal(headings.length, 3);
  assert.equal(new Set(headings.map(block => block.id)).size, 3);
  const tables = blocks.filter(block => block.type === 'table');
  assert.equal(tables.length, 2);
  assert.equal(tables[0].headingId, headings[0].id);
  assert.equal(tables[1].headingId, headings[1].id);
  assert.deepEqual(tables.map(block => block.rows), [[['What?', 'Clear.']], [['Next', 'Ask.']]]);
  const question = blocks.find(block => block.type === 'subheading');
  assert.equal(question.text, 'Does this approve the case?');
  assert.ok(!headings.some(block => block.id === question.id));
  assert.deepEqual(blocks.filter(block => block.type === 'visual').map(block => block.visualId), ['process', 'relationships']);
  assert.deepEqual(blocks.filter(block => block.type === 'paragraph').map(block => block.text), ['Direct answer.', 'No.', 'The end.']);
});

test('keyword Markdown remains a text parser and only accepts explicit safe visual placements', () => {
  const blocks = keywordArticleBlocks('## Heading\n\n<script>alert(1)</script>\n\n{{visual:process}}\n\n{{visual:bad id}}');
  assert.ok(blocks.some(block => block.type === 'paragraph' && block.text === '<script>alert(1)</script>'));
  assert.equal(blocks.filter(block => block.type === 'visual').length, 1);
  assert.ok(blocks.some(block => block.type === 'paragraph' && block.text === '{{visual:bad id}}'));
  const parts = articleInline('Safe [reference](https://u.ae/) and [unsafe](javascript:alert) **label**');
  assert.deepEqual(parts.filter(part => part.type === 'link').map(part => part.href), ['https://u.ae/']);
  assert.ok(parts.some(part => part.type === 'strong' && part.text === 'label'));
});
