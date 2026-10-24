import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('the preserved 44-topic cohort retains its complete original daily publication schedule', async () => {
  const schedule = JSON.parse(await readFile('content/article-publication-schedule.json', 'utf8'));
  const metadataSource = await readFile('lib/published-article-metadata.ts', 'utf8');
  const metadata = JSON.parse(metadataSource.split('export const publishedArticleMetadata: PublishedArticleMetadata[] = ')[1].trim().replace(/;$/, ''));
  const contentSource = await readFile('lib/published-article-content.ts', 'utf8');
  const articles = JSON.parse(contentSource.split('export const publishedArticles: PublishedArticleContent[] = ')[1].trim().replace(/;$/, ''));
  const guideSource = await readFile('lib/domestic-worker-guides.ts', 'utf8');
  const guideArray = guideSource.split('export const domesticWorkerGuides: DomesticWorkerGuide[] = ')[1].split('\n  ...publishedArticleGuides')[0].trim().replace(/,$/, '') + '\n]';
  const guides = JSON.parse(guideArray);
  const topics = [...guides, ...metadata];

  assert.equal(topics.length, 44);
  assert.equal(Object.keys(schedule).length, 44);
  assert.deepEqual(Object.keys(schedule).sort(), topics.map(({ slug }) => slug).sort(), 'every live topic has exactly one scheduled date');
  const firstDay = Date.UTC(2026, 8, 1);
  const expectedDates = Array.from({ length: 44 }, (_, index) => new Date(firstDay + index * 86400000).toISOString().slice(0, 10));
  assert.deepEqual(Object.values(schedule).sort(), expectedDates, 'one publication per day, with no gaps or duplicate dates');

  for (const topic of topics) {
    assert.equal(topic.published, schedule[topic.slug], `${topic.slug}: schedule matches the shared EN/AR metadata`);
    assert.ok(topic.published <= topic.updated, `${topic.slug}: Updated does not precede Published`);
  }
  assert.equal(articles.length, metadata.length);
  for (const article of articles) {
    const meta = metadata.find(({ slug }) => slug === article.slug);
    assert.ok(meta, `${article.slug}: metadata exists`);
    assert.equal(article.published, meta.published, `${article.slug}: full content and metadata publication dates agree`);
    assert.equal(article.updated, meta.updated, `${article.slug}: full content and metadata Updated dates agree`);
  }
});

test('the separately reviewed 21-topic batch adds 42 copies dated 24 October without rewriting the historical schedule', async () => {
  const schedule = JSON.parse(await readFile('content/article-publication-schedule.json', 'utf8'));
  const batch = JSON.parse(await readFile('content/keyword-articles-20261024.json', 'utf8'));
  assert.equal(Object.keys(schedule).length, 44);
  assert.equal(batch.length, 21);
  assert.equal(Object.keys(schedule).length + batch.length, 65);
  for (const article of batch) {
    assert.equal(article.published, '2026-10-24');
    assert.equal(article.updated, '2026-10-24');
    assert.ok(!Object.hasOwn(schedule, article.slug), `${article.slug}: the new batch does not impersonate the historical daily schedule`);
    assert.ok(article.en.body?.trim() && article.ar.body?.trim(), `${article.slug}: both complete copies exist`);
  }
});
