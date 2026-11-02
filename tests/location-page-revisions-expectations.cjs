const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');

const sha = value => createHash('sha256').update(value).digest('hex');
const pageFile = 'app/[locale]/[locationSlug]/page.tsx';
const currentSha256 = '97365c828e2f062a9976131df5e80ff1ef41d1abd024801de966d94fbcd9d1f4';
const contactCheckpointSha256 = 'f02af6076b9c9ce451c103f0ed4672030aaedc0084812cd986308a1f2a33333a';
const priorCheckpointSha256 = '14f1f34d9465c6b5f0e59c44db8b0783ac60377014d7a2a3b85b7165323dacd4';
const currentRenderedPins = {
  'https://inayadomestic.ae/en/maid-services-ajman/': 'f2b0f3cf27cf8f3ce812769a336f84fdd85b453040c2a1f9f8cc84772041e7ba',
  'https://inayadomestic.ae/ar/maid-services-ajman/': '06fbb1e3412c6dd7ca531cac0d4cb66f297a823404e03f0f15e14095aa6a9f74',
  'https://inayadomestic.ae/en/maid-services-dubai/': '74c93c6f8a1ce9a2dc97b0cf7185c07e1e36df4ac1af40d23b20bf502bf7b327',
  'https://inayadomestic.ae/ar/maid-services-dubai/': '7744f33ec351a065dc27f389ea52ff9a7376430392a3344459c6e1a11533ca09',
  'https://inayadomestic.ae/en/maid-services-sharjah/': 'd169f257e2cf4d6ce37d20699678d6c30630bef32c3a9a135c41e5c3d6679fe6',
  'https://inayadomestic.ae/ar/maid-services-sharjah/': '151f80a884be1d14740ba64703616c3b8140392dec76e9475b754f5ad2fa566b',
  'https://inayadomestic.ae/en/maid-services-abu-dhabi/': '02b45eadf5be4442f497c310f4c36dd0e162e7c52fc11018ef28ebc1d490cdbc',
  'https://inayadomestic.ae/ar/maid-services-abu-dhabi/': '61e08a53b5d87ddf4837d1c1be1a53d898891d8ffca41f7ba8e0bb3b47c05458',
  'https://inayadomestic.ae/en/maid-services-ras-al-khaimah/': 'fb7dbf60bd2795615a685a91a7d833ff924a1406001dad4cb6527e2bc6a24412',
  'https://inayadomestic.ae/ar/maid-services-ras-al-khaimah/': '2ec97480ffc22b4ed96c18ae016ea45c806811d88cce06370f536dc42af59dc6',
  'https://inayadomestic.ae/en/maid-services-fujairah/': 'a1ab1f66152ee5366fa749311d1938d5b4ce56ff065d3fc0872585a33e9f0da2',
  'https://inayadomestic.ae/ar/maid-services-fujairah/': 'e33663db637292c9c10179ee643257305a7aae5277fa38ff08303e860eaecc80',
  'https://inayadomestic.ae/en/maid-services-umm-al-quwain/': 'fb7102411d28a729154e406d6bf247d7bff4173ca67951cd85383a785a0ea2fe',
  'https://inayadomestic.ae/ar/maid-services-umm-al-quwain/': 'c5d348d715320fd3d7a078c783a4f1e2077c179f157df8542abba6890520279a',
};

const reviewedChanges = [
  {
    label: 'shared city pricing and comparison imports',
    current: "import { siteConfig } from '@/lib/site-config';\nimport NationalityContractPricingSection from '@/components/NationalityContractPricingSection';\nimport AjmanQuickPackages from '@/components/AjmanQuickPackages';\n",
    checkpoint: '',
  },
  {
    label: 'localized WhatsApp enquiry message',
    current: "  const locationWhatsAppMessage = lang === 'ar'\n    ? `مرحباً عناية، أرغب في الاستفسار عن خدمات الخادمات في ${location.city.ar}. يرجى توضيح الخيارات والتوفر والتكاليف المكتوبة.`\n    : `Hello INAYA, I am enquiring about maid services in ${location.city.en}. Please share suitable options, availability and written costs.`;\n",
    checkpoint: '',
  },
  {
    label: 'single main landmark wrapper',
    current: '    <div className="overflow-hidden bg-[#fbfaf7] text-primary-900">',
    checkpoint: '    <main className="overflow-hidden bg-[#fbfaf7] text-primary-900">',
  },
  {
    label: 'localized city contact actions',
    current: "              <a href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(locationWhatsAppMessage)}`} target=\"_blank\" rel=\"noreferrer\" className=\"rounded-full border border-accent-500/28 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-900\">\n                {lang === 'ar' ? 'استفسر عبر واتساب' : 'Ask on WhatsApp'}\n              </a>\n              {locationSlug === 'maid-services-ajman' ? <a href={`tel:${siteConfig.phone.replace(/[^+\\d]/g, '')}`} className=\"rounded-full border border-accent-500/28 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-900\">\n                {lang === 'ar' ? <>اتصل بعناية <bdi dir=\"ltr\">{siteConfig.phone}</bdi></> : <>Call INAYA <bdi dir=\"ltr\">{siteConfig.phone}</bdi></>}\n              </a> : null}",
    checkpoint: "              <Link href={`/${locale}/services/countries-we-source-from`} className=\"rounded-full border border-accent-500/28 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-900\">{t.countries}</Link>",
  },
  {
    label: 'early Ajman arrangement comparison',
    current: "      {locationSlug === 'maid-services-ajman' ? <AjmanQuickPackages locale={locale} /> : null}\n",
    checkpoint: '',
  },
  {
    label: 'shared nationality contract fee section',
    current: '\n      <NationalityContractPricingSection locale={locale} city={location.city[lang]} />\n',
    checkpoint: '',
  },
  {
    label: 'single main landmark closing tag',
    current: '\n    </div>\n  );\n}',
    checkpoint: '\n    </main>\n  );\n}',
  },
];

function historicalSource(file, source) {
  source = source.replace(/\r\n/g, '\n');
  if (file !== pageFile || sha(source) === contactCheckpointSha256 || sha(source) === priorCheckpointSha256) return source;
  assert.equal(sha(source), currentSha256, `${file}: exact reviewed shared city-page revisions`);
  for (const change of reviewedChanges) {
    assert.equal(source.split(change.current).length, 2, `${file}: one exact ${change.label} change`);
    source = source.replace(change.current, change.checkpoint);
  }
  assert.equal(sha(source), contactCheckpointSha256, `${file}: exact previous Ajman contact checkpoint`);
  return source;
}

function isCurrentRenderedPage(page) {
  const pin = currentRenderedPins[page.url];
  return Boolean(pin && sha(page.mainText) === pin);
}

module.exports = { pageFile, currentSha256, contactCheckpointSha256, priorCheckpointSha256, currentRenderedPins, reviewedChanges, historicalSource, isCurrentRenderedPage, sha };
