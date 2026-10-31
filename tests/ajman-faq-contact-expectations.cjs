const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const sha = value => createHash('sha256').update(value).digest('hex');

const wording = [
  ['Contact the team on ${siteConfig.phone}', 'Call the office on ${siteConfig.phone} or WhatsApp ${siteConfig.whatsappDisplay}'],
  ['Contact INAYA’s Ajman team on ${siteConfig.phone}', 'Call INAYA’s Ajman office on ${siteConfig.phone} or WhatsApp ${siteConfig.whatsappDisplay}'],
  ['تواصل مع الفريق على ${siteConfig.phone}', 'اتصل بالمكتب على ${siteConfig.phone} أو راسلنا عبر واتساب ${siteConfig.whatsappDisplay}'],
  ['تواصل مع فريق عناية في عجمان على ${siteConfig.phone}', 'اتصل بمكتب عناية في عجمان على ${siteConfig.phone} أو راسل الفريق عبر واتساب ${siteConfig.whatsappDisplay}'],
];
const sourcePins = {
  'app/[locale]/[locationSlug]/page.tsx': {
    before: '14f1f34d9465c6b5f0e59c44db8b0783ac60377014d7a2a3b85b7165323dacd4',
    after: 'f02af6076b9c9ce451c103f0ed4672030aaedc0084812cd986308a1f2a33333a',
    changes: [
      ['', "import InlineContactAnswer from '@/components/InlineContactAnswer';\n"],
      ['{faq.answer[lang]}', "{locationSlug === 'maid-services-ajman' ? <InlineContactAnswer answer={faq.answer[lang]} locale={locale} /> : faq.answer[lang]}"],
    ],
  },
  'lib/ajman-customer-questions.ts': {
    before: '9aa9b8f8e990d401fe0068c3bf167951ffcf0a453ce1149e323ce1c8c6e4cd54',
    after: '4d481a1cd50eac5e72e2d32131bf9883ac5cabcc9d1a47e7de340002d89a9445',
    changes: wording,
  },
};

// Only this complete contact amendment projects to the immutable prior release.
// Do not refresh whole-page checkpoints or exempt unrelated copy/markup.
function historicalSource(file, source) {
  source = source.replace(/\r\n/g, '\n');
  const pin = sourcePins[file];
  if (!pin || sha(source) === pin.before) return source;
  assert.equal(sha(source), pin.after, `${file}: exact reviewed Ajman FAQ contact amendment`);
  for (const [before, after] of pin.changes) source = source.replace(after, before);
  assert.equal(sha(source), pin.before, `${file}: unchanged source outside the contact amendment`);
  return source;
}

const renderedPins = {
  en: { before: '670fe426da06778963b8b5be6c89380aef1627b671a87f78fe406bd083a198f4', after: 'bc14a9ed9122ff75603b98f5ad750e266729329da3846effcc2d96aefd12250b' },
  ar: { before: '26fdb62329a70e6910ce9cd7c698fe9d0f97c8774f3d667891d4b7fee00f680b', after: '7839ad5b2fb003c80dc9b8f03b6f8ca9706429766e9691e406a69250183efead' },
};
const expand = value => value.replaceAll('${siteConfig.phone}', '+971 6 740 0128').replaceAll('${siteConfig.whatsappDisplay}', '+971 50 203 6767');
function historicalPage(page) {
  const lang = ['en', 'ar'].find(lang => page.url === `https://inayadomestic.ae/${lang}/maid-services-ajman/`);
  if (!lang || sha(page.mainText) === renderedPins[lang].before) return page;
  const pin = renderedPins[lang];
  assert.equal(sha(page.mainText), pin.after, `${page.url}: exact reviewed Ajman contact output`);
  let mainText = page.mainText;
  for (const [before, after] of wording) mainText = mainText.replace(expand(after), expand(before));
  assert.equal(sha(mainText), pin.before, `${page.url}: complete previous copy preserved`);
  const tokens = value => (value.toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu) ?? []).join(' ');
  const paragraphs = page.paragraphs?.map(paragraph => {
    for (const [before, after] of wording) paragraph = paragraph.replace(tokens(expand(after)), tokens(expand(before)));
    return paragraph;
  });
  return { ...page, mainText, ...(paragraphs ? { paragraphs } : {}) };
}

module.exports = { sourcePins, historicalSource, historicalPage };
