import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceWithExtras } from '@/lib/service-helpers';
import { servicePageCopies, type Lang, type Pair, type ServiceCopy } from '@/lib/service-page-copy-all';
import { countryProfiles, serviceImageBySlug, usesCountryMatching } from '@/lib/service-presentation';
import { siteConfig } from '@/lib/site-config';
import ServiceSeoBlock from './ServiceSeoBlock';
import ServiceIcon from './ServiceIcon';

type TemplateProps = {
  locale: string;
  slug: string;
};

type SectionTitleProps = {
  title: string;
  text?: string;
  lang: Lang;
  align?: 'start' | 'center';
};

const sectionPadding = 'px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20';
const surface = 'rounded-lg border border-primary-900/10 bg-white shadow-[0_14px_38px_rgba(7,22,74,0.07)]';

function headingFont(lang: Lang) {
  return lang === 'ar' ? 'font-arabic leading-[1.45]' : 'font-heading';
}

function CheckIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CrossIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 7l10 10M17 7 7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function ServiceDetailTemplate({ locale, slug }: TemplateProps) {
  const service = getServiceWithExtras(slug);
  if (!service) notFound();

  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const copy = servicePageCopies[slug]?.[lang];
  if (!copy) notFound();

  const whatsappText = encodeURIComponent(
    lang === 'ar'
      ? `مرحباً عناية، أود الاستفسار عن ${service.name.ar}.`
      : `Hello INAYA, I would like to ask about ${service.name.en}.`
  );

  return (
    <div className="overflow-hidden bg-white text-primary-900">
      <ServiceHero
        copy={copy}
        image={serviceImageBySlug[slug]}
        lang={lang}
        locale={locale}
        slug={slug}
        whatsappHref={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappText}`}
      />

      <section className={`${sectionPadding} border-y border-primary-900/8 bg-white`}>
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {copy.cards.map((item, index) => (
            <TrustCard key={item.title} item={item} index={index + 1} lang={lang} />
          ))}
        </div>
      </section>

      <section className={`${sectionPadding} bg-[#fffdf8]`}>
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <SectionTitle title={copy.whatTitle} lang={lang} />
            <p className="max-w-2xl text-[0.98rem] leading-8 text-primary-900/80">{copy.whatText}</p>
          </div>
          <ServiceFactsPanel copy={copy} lang={lang} />
        </div>
      </section>

      <section className={`${sectionPadding} bg-white`}>
        <div className="mx-auto max-w-6xl">
          <SectionTitle title={copy.whyTitle} lang={lang} align="center" />
          <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.why.map((item) => (
              <FeatureLine key={item} text={item} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionPadding} border-y border-primary-900/8 bg-[#f7f8fb]`}>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <FeatureList title={copy.includedTitle} items={copy.included} lang={lang} />
          <FeatureList title={copy.perfectTitle} items={copy.perfect} lang={lang} />
        </div>
      </section>

      <ProcessSection copy={copy} lang={lang} />
      <MatchingCards copy={copy} lang={lang} locale={locale} slug={slug} />
      <PricingCards copy={copy} lang={lang} locale={locale} slug={slug} />
      <FAQSection copy={copy} lang={lang} />
      <RelatedServices copy={copy} lang={lang} locale={locale} />
      <ComparisonSection copy={copy} lang={lang} />
      <ServiceSeoBlock locale={locale} slug={slug} />
      <FinalCta copy={copy} lang={lang} locale={locale} slug={slug} />
    </div>
  );
}

function ServiceHero({
  copy,
  image,
  lang,
  locale,
  slug,
  whatsappHref
}: {
  copy: ServiceCopy;
  image?: string;
  lang: Lang;
  locale: string;
  slug: string;
  whatsappHref: string;
}) {
  return (
    <section className="border-b border-primary-900/8 bg-[#fffdf8] px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[1fr_0.88fr] lg:items-center">
        <div className="ps-8 sm:ps-6 lg:ps-4 rtl:ps-0">
          <p className="text-sm font-bold text-accent-700">{copy.badge}</p>
          <h1 className={`${headingFont(lang)} mt-4 max-w-3xl font-bold text-primary-900`}>{copy.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-primary-900/80 sm:text-[1.05rem]">{copy.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/booking?service=${slug}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary-900 px-7 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(7,22,74,0.18)] transition hover:-translate-y-0.5 hover:bg-primary-800"
            >
              {copy.book}
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-accent-500/40 bg-white px-7 py-3 text-sm font-bold text-primary-900 transition hover:-translate-y-0.5 hover:border-accent-500 hover:bg-accent-50"
            >
              {copy.whatsapp}
            </a>
          </div>
        </div>
        {image ? (
          <div className="relative aspect-[4/3] min-h-[330px] overflow-hidden rounded-lg border border-primary-900/10 bg-white shadow-[0_24px_60px_rgba(7,22,74,0.12)]">
            <Image src={image} alt={copy.title} fill priority sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
          </div>
        ) : (
          <EditorialPanel copy={copy} lang={lang} />
        )}
      </div>
    </section>
  );
}

function EditorialPanel({ copy, lang }: { copy: ServiceCopy; lang: Lang }) {
  return (
    <div className="min-h-[330px] rounded-lg border border-primary-900/10 bg-primary-900 p-7 text-white shadow-[0_24px_60px_rgba(7,22,74,0.16)] sm:p-9">
      <p className="text-sm font-bold text-accent-300">{lang === 'ar' ? 'نطاق الخدمة' : 'Service at a glance'}</p>
      <h2 className={`${headingFont(lang)} mt-3 text-2xl font-bold text-white`}>
        {lang === 'ar' ? 'ترتيب واضح يبدأ من احتياج منزلك' : 'Clear coordination built around your household'}
      </h2>
      <div className="mt-7 divide-y divide-white/15">
        {copy.cards.map((item, index) => (
          <div key={item.title} className="grid grid-cols-[2rem_1fr] gap-3 py-4 first:pt-0">
            <span className="font-heading text-lg font-bold text-accent-300">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3 className={`${headingFont(lang)} text-base font-bold text-white`}>{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-white/75">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrustCard({ item, index, lang }: { item: Pair; index: number; lang: Lang }) {
  return (
    <article className={`${surface} h-full p-5 sm:p-6`}>
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-500/35 bg-accent-50 text-xs font-bold text-accent-700">
          {String(index).padStart(2, '0')}
        </span>
        <div>
          <h2 className={`${headingFont(lang)} text-lg font-bold leading-snug text-primary-900`}>{item.title}</h2>
          <p className="mt-2 text-sm leading-6 text-primary-900/76">{item.text}</p>
        </div>
      </div>
    </article>
  );
}

function SectionTitle({ title, text, lang, align = 'start' }: SectionTitleProps) {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <h2 className={`${headingFont(lang)} font-bold text-primary-900`}>{title}</h2>
      {text ? <p className="mt-4 text-[0.95rem] leading-7 text-primary-900/76">{text}</p> : null}
      <div className={`${centered ? 'mx-auto' : ''} mt-4 h-0.5 w-14 bg-accent-500`} />
    </div>
  );
}

function ServiceFactsPanel({ copy, lang }: { copy: ServiceCopy; lang: Lang }) {
  return (
    <div className={`${surface} p-5 sm:p-6`}>
      <div className="grid gap-3 sm:grid-cols-2">
        {copy.vetting.slice(0, 4).map((item, index) => (
          <article key={item.title} className="border-b border-primary-900/10 pb-4 sm:border-b-0 sm:border-s sm:pb-0 sm:ps-4">
            <span className="text-xs font-bold text-accent-700">{item.icon || String(index + 1).padStart(2, '0')}</span>
            <h3 className={`${headingFont(lang)} mt-2 text-base font-bold text-primary-900`}>{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-primary-900/74">{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function FeatureLine({ text }: { text: string }) {
  return (
    <div className="flex min-h-12 items-center gap-3 border-b border-primary-900/10 py-3 text-sm font-semibold leading-6 text-primary-900">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-700">
        <CheckIcon />
      </span>
      <span>{text}</span>
    </div>
  );
}

function FeatureList({ title, items, lang }: { title: string; items: string[]; lang: Lang }) {
  return (
    <div>
      <h2 className={`${headingFont(lang)} text-2xl font-bold text-primary-900`}>{title}</h2>
      <div className="mt-6 grid gap-x-6 sm:grid-cols-2">
        {items.map((item) => (
          <FeatureLine key={item} text={item} />
        ))}
      </div>
    </div>
  );
}

function ProcessSection({ copy, lang }: { copy: ServiceCopy; lang: Lang }) {
  return (
    <section className={`${sectionPadding} bg-white`}>
      <div className="mx-auto max-w-6xl">
        <SectionTitle title={copy.journeyTitle} text={copy.journeyText} lang={lang} align="center" />
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {copy.journey.map((item, index) => (
            <article key={item.title} className={`${surface} relative min-h-[190px] p-5`}>
              <span className="font-heading text-3xl font-bold text-accent-500/45">{String(index + 1).padStart(2, '0')}</span>
              <h3 className={`${headingFont(lang)} mt-5 text-lg font-bold text-primary-900`}>{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-primary-900/74">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MatchingCards({
  copy,
  lang,
  locale,
  slug
}: {
  copy: ServiceCopy;
  lang: Lang;
  locale: string;
  slug: string;
}) {
  const countryBased = usesCountryMatching(slug);
  const requestLabel = lang === 'ar' ? 'اطلب المطابقة' : 'Request Matching';

  return (
    <section className={`${sectionPadding} border-y border-primary-900/8 bg-[#fffdf8]`}>
      <div className="mx-auto max-w-6xl">
        <SectionTitle title={copy.countriesTitle} text={copy.countriesText} lang={lang} align="center" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {copy.countries.slice(0, 6).map((item, index) => {
            const profile = countryProfiles[index];
            return (
              <article key={item.title} className={`${surface} flex h-full ${countryBased ? 'min-h-[410px]' : 'min-h-[300px]'} flex-col overflow-hidden`}>
                {countryBased ? (
                  <div className="relative h-[205px] border-b border-primary-900/8 bg-[#eef2f8]">
                    <Image
                      src={profile.image}
                      alt={profile.title[lang]}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain object-bottom px-5 pt-3"
                    />
                  </div>
                ) : (
                  <div className="flex h-[104px] items-center gap-4 border-b border-primary-900/8 bg-[#f7f8fb] px-5 py-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent-500/35 bg-white text-accent-700">
                      <ServiceIcon slug={slug} className="h-6 w-6" />
                    </span>
                    <div>
                      <span className="text-xs font-bold text-accent-700">{String(index + 1).padStart(2, '0')}</span>
                      <p className={`${headingFont(lang)} mt-1 text-base font-bold text-primary-900`}>
                        {lang === 'ar' ? 'خطوة تنسيق واضحة' : 'Clear coordination step'}
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className={`${headingFont(lang)} text-xl font-bold text-primary-900`}>{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-primary-900/75">{item.text}</p>
                  {countryBased ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {profile.tags[lang].map((tag) => (
                        <span key={tag} className="rounded-full border border-accent-500/25 bg-accent-50 px-3 py-1 text-xs font-semibold text-primary-900">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <Link
                    href={`/${locale}/booking?service=${slug}`}
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-primary-900 transition hover:text-accent-700"
                  >
                    {requestLabel}
                    <span className={lang === 'ar' ? 'rotate-180' : ''}><ArrowIcon /></span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingCards({
  copy,
  lang,
  locale,
  slug
}: {
  copy: ServiceCopy;
  lang: Lang;
  locale: string;
  slug: string;
}) {
  const note = lang === 'ar' ? 'إرشاد فقط، وليس سعراً ثابتاً' : 'Guidance only, not a fixed quote';
  return (
    <section className={`${sectionPadding} bg-white`}>
      <div className="mx-auto max-w-6xl">
        <SectionTitle title={copy.pricingTitle} text={copy.pricingText} lang={lang} align="center" />
        <p className="mx-auto mt-5 w-fit border-b border-accent-500/40 pb-1 text-sm font-bold text-accent-700">{note}</p>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {copy.pricing.map((item, index) => (
            <article key={item.title} className={`${surface} flex h-full flex-col p-6`}>
              <span className="text-xs font-bold text-accent-700">{String(index + 1).padStart(2, '0')}</span>
              <h3 className={`${headingFont(lang)} mt-3 text-xl font-bold text-primary-900`}>{item.title}</h3>
              <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-primary-900/75">{item.text}</p>
              <div className="mt-5 flex-1 divide-y divide-primary-900/10 border-y border-primary-900/10">
                {item.points.map((point) => (
                  <div key={point} className="flex items-center gap-3 py-3 text-sm font-semibold text-primary-900">
                    <CheckIcon className="h-4 w-4 shrink-0 text-accent-700" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <Link
                href={`/${locale}/booking?service=${slug}`}
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-800"
              >
                {copy.book}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ copy, lang }: { copy: ServiceCopy; lang: Lang }) {
  return (
    <section className={`${sectionPadding} border-y border-primary-900/8 bg-[#f7f8fb]`}>
      <div className="mx-auto max-w-5xl">
        <SectionTitle title={copy.faqTitle} lang={lang} align="center" />
        <div className="mt-9 grid gap-3 md:grid-cols-2">
          {copy.faqs.map((item) => (
            <details key={item.title} className="group rounded-lg border border-primary-900/10 bg-white px-5 py-4 open:border-accent-500/40">
              <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold leading-6 text-primary-900">
                <span>{item.title}</span>
                <span className="shrink-0 text-accent-700 transition group-open:rotate-45"><PlusIcon /></span>
              </summary>
              <p className="mt-3 border-t border-primary-900/8 pt-3 text-sm leading-7 text-primary-900/75">{item.text}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedServices({ copy, lang, locale }: { copy: ServiceCopy; lang: Lang; locale: string }) {
  return (
    <section className={`${sectionPadding} bg-white`}>
      <div className="mx-auto max-w-6xl">
        <SectionTitle title={copy.relatedTitle} lang={lang} />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {copy.related.map((relatedSlug) => {
            const service = getServiceWithExtras(relatedSlug);
            if (!service) return null;
            return (
              <Link
                key={relatedSlug}
                href={`/${locale}/services/${relatedSlug}`}
                className="group flex min-h-20 items-center gap-4 rounded-lg border border-primary-900/10 bg-[#fffdf8] px-4 py-3 transition hover:-translate-y-0.5 hover:border-accent-500/40 hover:bg-white hover:shadow-[0_12px_30px_rgba(7,22,74,0.08)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent-500/30 bg-white text-accent-700">
                  <ServiceIcon slug={relatedSlug} className="h-5 w-5" />
                </span>
                <span className={`${headingFont(lang)} flex-1 text-base font-bold leading-snug text-primary-900`}>{service.name[lang]}</span>
                <span className={`${lang === 'ar' ? 'rotate-180' : ''} text-accent-700 transition group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5`}>
                  <ArrowIcon />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection({ copy, lang }: { copy: ServiceCopy; lang: Lang }) {
  const labels = lang === 'ar'
    ? { offer: 'ما نقدمه', inaya: 'عناية', others: 'شركات أخرى', promise: 'وضوح. مسؤولية. متابعة.' }
    : { offer: 'What We Offer', inaya: 'INAYA', others: 'Other Companies', promise: 'Clarity. Responsibility. Follow-up.' };

  return (
    <section className={`${sectionPadding} border-y border-primary-900/8 bg-[#fffdf8]`}>
      <div className="mx-auto max-w-6xl">
        <SectionTitle title={copy.compareTitle} text={copy.compareText} lang={lang} align="center" />
        <div className="mt-9 overflow-x-auto rounded-lg border border-primary-900/10 bg-white shadow-[0_14px_38px_rgba(7,22,74,0.07)]">
          <div className="min-w-[780px]">
            <div className="grid grid-cols-[1.45fr_1fr_1fr] text-sm font-bold text-primary-900">
              <div className="bg-[#f7f8fb] px-5 py-4 text-start">{labels.offer}</div>
              <div className="bg-accent-500 px-5 py-4 text-center text-primary-900">{labels.inaya}</div>
              <div className="bg-[#f7f8fb] px-5 py-4 text-center">{labels.others}</div>
            </div>
            {copy.comparison.map((row) => (
              <div key={row.feature} className="grid min-h-16 grid-cols-[1.45fr_1fr_1fr] border-t border-primary-900/10 text-sm leading-6 text-primary-900">
                <div className="flex items-center px-5 py-4 font-semibold">{row.feature}</div>
                <div className="flex items-center justify-center gap-3 border-x border-primary-900/10 bg-accent-50/40 px-4 py-4 text-center font-semibold">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-900 text-white"><CheckIcon /></span>
                  <span>{row.inaya}</span>
                </div>
                <div className="flex items-center justify-center gap-3 px-4 py-4 text-center text-primary-900/72">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary-900/20 text-primary-900/55"><CrossIcon /></span>
                  <span>{row.other}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-5 text-center text-sm font-bold text-primary-900">{labels.promise}</p>
      </div>
    </section>
  );
}

function FinalCta({ copy, lang, locale, slug }: { copy: ServiceCopy; lang: Lang; locale: string; slug: string }) {
  return (
    <section className="bg-primary-900 px-5 py-14 text-white sm:px-6 sm:py-16 lg:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className={`${headingFont(lang)} font-bold text-white`}>{copy.finalTitle}</h2>
          <p className="mt-4 text-base leading-7 text-white/78">{copy.finalText}</p>
        </div>
        <Link
          href={`/${locale}/booking?service=${slug}`}
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-accent-500 px-7 py-3 text-sm font-bold text-primary-900 transition hover:-translate-y-0.5 hover:bg-accent-300"
        >
          {copy.book}
        </Link>
      </div>
    </section>
  );
}
