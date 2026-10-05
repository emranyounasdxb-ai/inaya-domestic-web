const { approvedRemediation } = require('./seo-audit-remediation-expectations.cjs');
const assert = require('node:assert/strict');

// Exact reviewed corrections for 5 October; historical source guards still protect
// every line outside these changes, including carousel behavior and all form fields.
const patches = {
  "components/Navbar.tsx": [
    [
      "'use client';\n\nimport { useState } from 'react';\nimport Image from 'next/image';\nimport Link from 'next/link';\nimport { usePathname } from 'next/navigation';\nimport { useTranslations } from 'next-intl';\n\nexport default function Navbar({ locale }: { locale: string }) {\n  const t = useTranslations('nav');\n  const tc = useTranslations('common');\n  const pathname = usePathname();\n  const [open, setOpen] = useState(false);\n\n  const otherLocale = locale === 'en' ? 'ar' : 'en';\n  const switchedPath = pathname.replace(`/${locale}`, `/${otherLocale}`);\n  const logoSrc = locale === 'ar' ? '/brand/inaya-arabic-logo.webp' : '/brand/inaya-domestic-workers-logo.webp';\n  const logoAlt = locale === 'ar' ? 'عناية للعمالة المنزلية — الرئيسية' : 'INAYA Domestic Workers — Home';\n\n  const links = [\n    { href: `/${locale}`, label: t('home') },\n    { href: `/${locale}/about`, label: t('about') },\n    { href: `/${locale}/services`, label: t('services') },\n    { href: `/${locale}/pricing`, label: t('pricing') },\n    { href: `/${locale}/how-it-works`, label: t('howItWorks') },\n    { href: `/${locale}/service-areas`, label: t('serviceAreas') },\n    { href: `/${locale}/faq`, label: t('faq') },\n    { href: `/${locale}/blog/`, label: locale === 'ar' ? 'الأدلة' : 'Guides' },\n    { href: `/${locale}/contact`, label: t('contact') }\n  ];\n\n  return (\n    <header className=\"sticky top-0 z-50 border-b border-primary-700/10 bg-ivory/80 shadow-[0_1px_0_rgba(255,255,255,0.75)_inset] backdrop-blur-2xl\">\n      <nav className=\"container-x flex h-14 items-center justify-between gap-6\">\n        <Link href={`/${locale}`} className=\"flex shrink-0 items-center\" aria-label=\"INAYA Domestic Workers home\">\n          <Image\n            src={logoSrc}\n            alt={logoAlt}\n            width={156}\n            height={28}\n            className=\"h-7 w-auto max-w-[132px] object-contain sm:max-w-[156px]\"\n          />\n        </Link>\n\n        <div className=\"hidden flex-1 items-center justify-center gap-5 xl:gap-7 lg:flex\">",
      "'use client';\n\nimport { useState } from 'react';\nimport Link from 'next/link';\nimport { usePathname } from 'next/navigation';\n\nexport default function Navbar({ locale, labels, logo }: { locale: string; labels: Record<string, string>; logo: React.ReactNode }) {\n  const pathname = usePathname();\n  const [open, setOpen] = useState(false);\n\n  const otherLocale = locale === 'en' ? 'ar' : 'en';\n  const switchedPath = pathname.replace(`/${locale}`, `/${otherLocale}`);\n\n  const links = [\n    { href: `/${locale}`, label: labels.home },\n    { href: `/${locale}/about`, label: labels.about },\n    { href: `/${locale}/services`, label: labels.services },\n    { href: `/${locale}/pricing`, label: labels.pricing },\n    { href: `/${locale}/how-it-works`, label: labels.howItWorks },\n    { href: `/${locale}/service-areas`, label: labels.serviceAreas },\n    { href: `/${locale}/faq`, label: labels.faq },\n    { href: `/${locale}/blog/`, label: locale === 'ar' ? 'الأدلة' : 'Guides' },\n    { href: `/${locale}/contact`, label: labels.contact }\n  ];\n\n  return (\n    <header className=\"sticky top-0 z-50 border-b border-primary-700/10 bg-ivory/80 shadow-[0_1px_0_rgba(255,255,255,0.75)_inset] backdrop-blur-2xl\">\n      <nav className=\"container-x flex h-14 items-center justify-between gap-6\">\n        <Link href={`/${locale}`} className=\"flex shrink-0 items-center\" aria-label=\"INAYA Domestic Workers home\">\n          {logo}\n        </Link>\n\n        <div className=\"hidden flex-1 items-center justify-center gap-5 xl:gap-7 lg:flex\">"
    ],
    [
      "            href={switchedPath}\n            className=\"rounded-full border border-primary-700/10 bg-white/45 px-3 py-1.5 text-[12px] font-semibold leading-none text-primary-900 shadow-sm transition hover:border-accent-500 hover:bg-white/80\"\n          >\n            {tc('langSwitch')}\n          </Link>\n          <Link\n            href={`/${locale}/booking`}\n            className=\"hidden rounded-full bg-primary-900 px-4 py-2 text-[12px] font-semibold leading-none text-white shadow-glass transition hover:-translate-y-0.5 hover:bg-primary-800 sm:inline-flex\"\n          >\n            {t('bookNow')}\n          </Link>\n          <button\n            onClick={() => setOpen(!open)}",
      "            href={switchedPath}\n            className=\"rounded-full border border-primary-700/10 bg-white/45 px-3 py-1.5 text-[12px] font-semibold leading-none text-primary-900 shadow-sm transition hover:border-accent-500 hover:bg-white/80\"\n          >\n            {labels.langSwitch}\n          </Link>\n          <Link\n            href={`/${locale}/booking`}\n            className=\"hidden rounded-full bg-primary-900 px-4 py-2 text-[12px] font-semibold leading-none text-white shadow-glass transition hover:-translate-y-0.5 hover:bg-primary-800 sm:inline-flex\"\n          >\n            {labels.bookNow}\n          </Link>\n          <button\n            onClick={() => setOpen(!open)}"
    ],
    [
      "              onClick={() => setOpen(false)}\n              className=\"mt-2 rounded-full bg-primary-900 px-4 py-2.5 text-center text-sm font-semibold text-white\"\n            >\n              {t('bookNow')}\n            </Link>\n          </div>\n        </div>",
      "              onClick={() => setOpen(false)}\n              className=\"mt-2 rounded-full bg-primary-900 px-4 py-2.5 text-center text-sm font-semibold text-white\"\n            >\n              {labels.bookNow}\n            </Link>\n          </div>\n        </div>"
    ]
  ],
  "components/Footer.tsx": [
    [
      "import Image from 'next/image';\nimport Link from 'next/link';\nimport { useTranslations } from 'next-intl';\nimport { services } from '@/lib/services';",
      "import BrandLogo from './BrandLogo';\nimport Link from 'next/link';\nimport { useTranslations } from 'next-intl';\nimport { services } from '@/lib/services';"
    ],
    [
      "  const isArabic = locale === 'ar';\n  const lang = isArabic ? 'ar' : 'en';\n  const year = new Date().getFullYear();\n  const logoSrc = isArabic ? '/brand/inaya-arabic-logo.webp' : '/brand/inaya-domestic-workers-logo.webp';\n  const logoAlt = isArabic ? 'شعار عناية للعمالة المنزلية' : 'INAYA Domestic Workers logo';\n  const phoneHref = `tel:${siteConfig.phone.replace(/\\s/g, '')}`;\n  const contactAddress = isArabic",
      "  const isArabic = locale === 'ar';\n  const lang = isArabic ? 'ar' : 'en';\n  const year = new Date().getFullYear();\n  const logoAlt = isArabic ? 'شعار عناية للعمالة المنزلية' : 'INAYA Domestic Workers logo';\n  const phoneHref = `tel:${siteConfig.phone.replace(/\\s/g, '')}`;\n  const contactAddress = isArabic"
    ],
    [
      "      <div className=\"mx-auto max-w-[1500px] overflow-hidden rounded-[18px] border border-primary-900/8 bg-white/78 shadow-[0_24px_80px_rgba(7,22,74,0.08)] ring-1 ring-accent-500/10 backdrop-blur-xl\">\n        <div className=\"grid items-stretch gap-5 px-7 py-5 sm:px-10 lg:grid-cols-[1.18fr_0.92fr_1.04fr_1.23fr] lg:px-12 lg:py-6 xl:px-14\">\n          <div className=\"lg:flex lg:h-full lg:flex-col\">\n            <Image src={logoSrc} alt={logoAlt} width={280} height={64} className=\"h-16 w-auto max-w-[280px] object-contain\" />\n            <p className=\"mt-3 max-w-[310px] text-[0.9rem] leading-5 text-ink/72\">{isArabic ? t('about') : 'Trusted maid and domestic worker services for families across the UAE.'}</p>\n            <div className=\"mt-3 h-px w-12 bg-[#c98700]\" />\n            <div className=\"mt-3 space-y-2.5 lg:flex lg:flex-1 lg:flex-col lg:justify-between lg:space-y-0\">",
      "      <div className=\"mx-auto max-w-[1500px] overflow-hidden rounded-[18px] border border-primary-900/8 bg-white/78 shadow-[0_24px_80px_rgba(7,22,74,0.08)] ring-1 ring-accent-500/10 backdrop-blur-xl\">\n        <div className=\"grid items-stretch gap-5 px-7 py-5 sm:px-10 lg:grid-cols-[1.18fr_0.92fr_1.04fr_1.23fr] lg:px-12 lg:py-6 xl:px-14\">\n          <div className=\"lg:flex lg:h-full lg:flex-col\">\n            <BrandLogo locale={locale} alt={logoAlt} width={280} className=\"h-16 w-auto max-w-[280px] object-contain\" />\n            <p className=\"mt-3 max-w-[310px] text-[0.9rem] leading-5 text-ink/72\">{isArabic ? t('about') : 'Trusted maid and domestic worker services for families across the UAE.'}</p>\n            <div className=\"mt-3 h-px w-12 bg-[#c98700]\" />\n            <div className=\"mt-3 space-y-2.5 lg:flex lg:flex-1 lg:flex-col lg:justify-between lg:space-y-0\">"
    ],
    [
      "function FooterTitle({ children }: { children: React.ReactNode }) {\n  return (\n    <div>\n      <h4 className=\"font-heading text-[0.96rem] font-bold uppercase tracking-[0.08em] text-primary-900\">{children}</h4>\n      <div className=\"mt-2.5 h-[2px] w-14 bg-[#c98700]\" />\n    </div>\n  );",
      "function FooterTitle({ children }: { children: React.ReactNode }) {\n  return (\n    <div>\n      <h2 style={{ fontFamily: 'var(--font-heading), \"Plus Jakarta Sans\", Inter, system-ui, sans-serif' }} className=\"font-heading text-[0.96rem] font-bold uppercase tracking-[0.08em] text-primary-900\">{children}</h2>\n      <div className=\"mt-2.5 h-[2px] w-14 bg-[#c98700]\" />\n    </div>\n  );"
    ]
  ],
  "components/HomeGoogleReviewsShowcase.tsx": [
    [
      "\nfunction Stars({ label }: { label: string }) {\n  return (\n    <span className=\"google-review-stars\" aria-label={label}>\n      <span aria-hidden=\"true\">★★★★★</span>\n    </span>\n  );",
      "\nfunction Stars({ label }: { label: string }) {\n  return (\n    <span className=\"google-review-stars\" role=\"img\" aria-label={label}>\n      <span aria-hidden=\"true\">★★★★★</span>\n    </span>\n  );"
    ]
  ],
  "app/[locale]/layout.tsx": [
    [
      "import type { Metadata } from 'next';\nimport { IBM_Plex_Sans_Arabic, Inter, Noto_Sans_Arabic, Plus_Jakarta_Sans } from 'next/font/google';\nimport { NextIntlClientProvider } from 'next-intl';\nimport { getMessages, setRequestLocale } from 'next-intl/server';\nimport { notFound } from 'next/navigation';\nimport { locales } from '@/i18n';\nimport { siteConfig } from '@/lib/site-config';\nimport Navbar from '@/components/Navbar';\nimport Footer from '@/components/Footer';\nimport FloatingSocialBar from '@/components/FloatingSocialBar';\nimport SierraLeoneOfferControls from '@/components/SierraLeoneOfferControls';\nimport Measurement from '@/components/Measurement';\nimport sitemap from '@/app/sitemap';\nimport '../globals.css';\nimport '../home-country-availability.css';\nimport '../home-google-reviews.css';\nimport '../curated-discipline-images.css';\n\nconst inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });\nconst plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });",
      "import type { Metadata } from 'next';\nimport { IBM_Plex_Sans_Arabic, Inter, Noto_Sans_Arabic, Plus_Jakarta_Sans } from 'next/font/google';\nimport { getTranslations, setRequestLocale } from 'next-intl/server';\nimport { notFound } from 'next/navigation';\nimport { locales } from '@/i18n';\nimport { siteConfig } from '@/lib/site-config';\nimport Navbar from '@/components/Navbar';\nimport BrandLogo from '@/components/BrandLogo';\nimport Footer from '@/components/Footer';\nimport FloatingSocialBar from '@/components/FloatingSocialBar';\nimport SierraLeoneOfferControls from '@/components/SierraLeoneOfferControls';\nimport Measurement from '@/components/Measurement';\nimport sitemap from '@/app/sitemap';\nimport '../globals.css';\n\nconst inter = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });\nconst plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });"
    ],
    [
      "  const { locale } = await params;\n  if (!locales.includes(locale as (typeof locales)[number])) notFound();\n  setRequestLocale(locale);\n  const messages = await getMessages();\n  const dir = locale === 'ar' ? 'rtl' : 'ltr';\n  return (\n    <html lang={locale} dir={dir}>\n      <body className={`${inter.variable} ${plusJakarta.variable} ${notoSansArabic.variable} ${ibmPlexSansArabic.variable}`}>\n        <NextIntlClientProvider messages={messages}>\n          {process.env.NEXT_PUBLIC_MEASUREMENT_ENABLED === 'true' && <Measurement enabled paths={sitemap().map((entry) => new URL(entry.url).pathname)} origin={siteConfig.url} />}\n          <Navbar locale={locale} />\n          <FloatingSocialBar />\n          <SierraLeoneOfferControls locale={locale} />\n          <main>{children}</main>\n          <Footer locale={locale} />\n        </NextIntlClientProvider>\n      </body>\n    </html>\n  );",
      "  const { locale } = await params;\n  if (!locales.includes(locale as (typeof locales)[number])) notFound();\n  setRequestLocale(locale);\n  const nav = await getTranslations('nav');\n  const common = await getTranslations('common');\n  const labels = Object.fromEntries(['home', 'about', 'services', 'pricing', 'howItWorks', 'serviceAreas', 'faq', 'contact', 'bookNow'].map((key) => [key, nav(key)]));\n  labels.langSwitch = common('langSwitch');\n  const dir = locale === 'ar' ? 'rtl' : 'ltr';\n  return (\n    <html lang={locale} dir={dir}>\n      <body className={`${inter.variable} ${plusJakarta.variable} ${notoSansArabic.variable} ${ibmPlexSansArabic.variable}`}>\n          {process.env.NEXT_PUBLIC_MEASUREMENT_ENABLED === 'true' && <Measurement enabled paths={sitemap().map((entry) => new URL(entry.url).pathname)} origin={siteConfig.url} />}\n          <Navbar locale={locale} labels={labels} logo={<BrandLogo locale={locale} alt={locale === 'ar' ? 'عناية للعمالة المنزلية — الرئيسية' : 'INAYA Domestic Workers — Home'} width={156} className=\"h-7 w-auto max-w-[132px] object-contain sm:max-w-[156px]\" />} />\n          <FloatingSocialBar />\n          <SierraLeoneOfferControls locale={locale} />\n          <main>{children}</main>\n          <Footer locale={locale} />\n      </body>\n    </html>\n  );"
    ]
  ],
  "next.config.js": [
    [
      "const nextConfig = {\n  reactStrictMode: true,\n  trailingSlash: true,\n  // Reproduce the cPanel export locally without replacing configuration files.\n  ...(process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true' ? { output: 'export' } : {}),\n  allowedDevOrigins: ['127.0.0.1'],",
      "const nextConfig = {\n  reactStrictMode: true,\n  trailingSlash: true,\n  experimental: { inlineCss: process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true' },\n  // Reproduce the cPanel export locally without replacing configuration files.\n  ...(process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true' ? { output: 'export' } : {}),\n  allowedDevOrigins: ['127.0.0.1'],"
    ]
  ],
  "app/globals.css": [
    [
      ".field { @apply w-full rounded-2xl border border-primary-700/15 bg-white px-4 py-3 text-ink shadow-sm outline-none transition placeholder:text-primary-900/70 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30; }\n.label { @apply mb-1.5 block text-sm font-medium text-ink; }\n\n.footer-luxury-card::after {\n  content: '';\n  position: absolute;\n  inset: -35%;\n  background: linear-gradient(115deg, transparent 38%, rgba(255,255,255,.5) 50%, rgba(255,255,255,.12) 57%, transparent 68%);\n  transform: translateX(-125%) skewX(-18deg);\n  animation: footerReflection 8.5s ease-in-out infinite;\n  pointer-events: none;\n  mix-blend-mode: screen;\n}\n\n@keyframes footerReflection {\n  0%, 28% { transform: translateX(-125%) skewX(-18deg); opacity: 0; }\n  38% { opacity: .72; }\n  65%, 100% { transform: translateX(125%) skewX(-18deg); opacity: 0; }\n}\n\n/* Arabic home hero: keep the text panel away from the model side while preserving RTL text. */\n[dir='rtl'] main > div > section:first-of-type > div.relative.mx-auto.flex {\n  direction: ltr;",
      ".field { @apply w-full rounded-2xl border border-primary-700/15 bg-white px-4 py-3 text-ink shadow-sm outline-none transition placeholder:text-primary-900/70 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30; }\n.label { @apply mb-1.5 block text-sm font-medium text-ink; }\n\n/* Arabic home hero: keep the text panel away from the model side while preserving RTL text. */\n[dir='rtl'] main > div > section:first-of-type > div.relative.mx-auto.flex {\n  direction: ltr;"
    ]
  ],
  "lib/service-content-briefs.ts": [
    [
      "      { feature: 'Working arrangement', inaya: 'Describe the home routine', other: 'Review the schedule' },\n      { feature: 'Documents', inaya: 'Explain the current situation', other: 'Ask for a case checklist' }\n    ],\n    // Keep route titles, metadata, factual duty lists and pricing information intact.\n    faqs: [\n      { title: ar ? `ما الأدوار التي أقارنها عند مراجعة ${copy.title}؟` : `Which roles can I compare when reviewing ${copy.title}?`,\n        text: brief.related.map((value) => { const service = getService(value)!; return `${service.name[lang]}: ${service.short[lang]}`; }).join(ar ? '؛ ' : '; ') },\n      ...copy.faqs.filter((faq) => !/available|availability|prices fixed|متوفرة|الأسعار ثابتة/i.test(faq.title)).slice(0, 3)\n    ] };\n}",
      "      { feature: 'Working arrangement', inaya: 'Describe the home routine', other: 'Review the schedule' },\n      { feature: 'Documents', inaya: 'Explain the current situation', other: 'Ask for a case checklist' }\n    ],\n    // Related-role links remain in their own section; FAQs answer practical questions.\n    faqs: copy.faqs.filter((faq) => !/available|availability|prices fixed|متوفرة|الأسعار ثابتة/i.test(faq.title)).slice(0, 3) };\n}"
    ]
  ],
  "tests/e2e/home.spec.ts": [
    [
      "test('home page renders main sections', async ({ page }) => {\n  await page.goto('/en');\n\n  await expect(page.getByRole('heading', { name: /Elevating Domestic/i })).toBeVisible();\n  await expect(page.getByRole('heading', { name: 'Global Executive Concierge' })).toBeVisible();\n  await expect(page.getByRole('heading', { name: /Google Reviews/i })).toBeVisible();\n  await expect(page.locator('p.google-reviews-profile')).toHaveText('INAYA on Google');",
      "test('home page renders main sections', async ({ page }) => {\n  await page.goto('/en');\n\n  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Maid & Domestic Worker Services in Ajman and Across the UAE');\n  await expect(page.getByRole('heading', { name: 'Global Executive Concierge' })).toBeVisible();\n  await expect(page.getByRole('heading', { name: /Google Reviews/i })).toBeVisible();\n  await expect(page.locator('p.google-reviews-profile')).toHaveText('INAYA on Google');"
    ]
  ],
  "app/[locale]/booking/page.tsx": [
    [
      "import BookingForm from '@/components/BookingForm';\nimport PageBreadcrumbs from \"@/components/PageBreadcrumbs\";\n",
      "import FormTranslations from '@/components/FormTranslations';\nimport BookingForm from '@/components/BookingForm';\nimport PageBreadcrumbs from \"@/components/PageBreadcrumbs\";\n"
    ],
    [
      "            </div>\n          </div>\n          <div className=\"glass-panel rounded-[26px] p-5 sm:p-7\">\n            <BookingForm locale={locale} />\n          </div>\n        </div>\n      </section>",
      "            </div>\n          </div>\n          <div className=\"glass-panel rounded-[26px] p-5 sm:p-7\">\n            <FormTranslations namespaces={[\"booking\"]}><BookingForm locale={locale} /></FormTranslations>\n          </div>\n        </div>\n      </section>"
    ]
  ],
  "app/[locale]/contact/page.tsx": [
    [
      "import ContactForm from '@/components/ContactForm';\nimport PageBreadcrumbs from \"@/components/PageBreadcrumbs\";\nimport { siteConfig } from '@/lib/site-config';",
      "import FormTranslations from '@/components/FormTranslations';\nimport ContactForm from '@/components/ContactForm';\nimport PageBreadcrumbs from \"@/components/PageBreadcrumbs\";\nimport { siteConfig } from '@/lib/site-config';"
    ],
    [
      "            <h2 className={sectionTitleClass}>{copy.formTitle}</h2>\n            <p className=\"mt-3 text-sm leading-6 text-ink/70\">{copy.formText}</p>\n            <div className=\"mt-6\">\n              <ContactForm locale={locale} variant=\"floating\" />\n            </div>\n          </div>\n        </div>",
      "            <h2 className={sectionTitleClass}>{copy.formTitle}</h2>\n            <p className=\"mt-3 text-sm leading-6 text-ink/70\">{copy.formText}</p>\n            <div className=\"mt-6\">\n              <FormTranslations namespaces={['contact', 'booking']}><ContactForm locale={locale} variant=\"floating\" /></FormTranslations>\n            </div>\n          </div>\n        </div>"
    ]
  ]
};

function approvedSeoFixes(file, source) {
  for (const [before, after] of patches[file] ?? []) {
    assert.equal(source.split(before).length, 2, `${file}: exactly one reviewed source anchor`);
    source = source.replace(before, after);
  }
  return approvedRemediation(file, source);
}

module.exports = { approvedSeoFixes };
