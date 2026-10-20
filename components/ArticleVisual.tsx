import type { ArticleVisualData } from '@/lib/customer-article-visuals';

export default function ArticleVisual({ visual, lang, id }: {
  visual: ArticleVisualData;
  lang: 'en' | 'ar';
  id: string;
}) {
  const isArabic = lang === 'ar';
  const number = new Intl.NumberFormat(isArabic ? 'ar-AE' : 'en-AE', { maximumFractionDigits: 2 });
  const valueLabel = (value: number) => `${number.format(value)}${visual.unit ? ` ${visual.unit}` : ''}`;
  const values = visual.kind === 'bars' ? visual.items.map((item) => {
    if (typeof item.value !== 'number' || !Number.isFinite(item.value) || item.value < 0) {
      throw new Error(`Article bar chart requires a finite non-negative value: ${id}`);
    }
    return item.value;
  }) : [];
  const maximum = Math.max(...values, 0);
  const scaleMaximum = maximum || 1;

  return (
    <figure data-article-visual={visual.kind} className="my-8 min-w-0 rounded-2xl border border-accent-500/40 bg-accent-50 p-5 sm:p-6" dir={isArabic ? 'rtl' : 'ltr'} aria-labelledby={`${id}-title`} aria-describedby={`${id}-caption`}>
      <figcaption id={`${id}-title`} className={`text-xl font-bold leading-8 text-primary-900 ${isArabic ? 'font-arabic' : 'font-heading'}`}>{visual.title}</figcaption>
      {visual.kind === 'bars' ? (
        <div className="mt-6 space-y-5">
          {visual.items.map((item, index) => (
            <div key={index} className="min-w-0">
              <div className="mb-2 flex flex-wrap items-start justify-between gap-x-4 gap-y-1 text-sm font-semibold leading-7 text-primary-900">
                <span>{item.label}</span>
                <bdi>{valueLabel(values[index])}</bdi>
              </div>
              <div aria-hidden="true" className="h-5 overflow-hidden rounded-md border border-primary-900/15 bg-white">
                <div className="h-full bg-primary-700" style={{ width: `${values[index] / scaleMaximum * 100}%` }} />
              </div>
              <p className="mt-2 text-sm leading-7 text-primary-900/80">{item.detail}</p>
            </div>
          ))}
          <div aria-hidden="true" className="flex justify-between border-t border-primary-900/20 pt-2 text-xs font-semibold leading-6 text-primary-900/70"><bdi>{valueLabel(0)}</bdi><bdi>{valueLabel(maximum)}</bdi></div>
        </div>
      ) : (
        <div role="list" className="mt-5 grid gap-3 sm:grid-cols-2">
          {visual.items.map((item, index) => (
            <div role="listitem" key={index} className="flex min-w-0 items-start gap-3 rounded-xl border border-primary-900/10 bg-white p-4">
              <span aria-hidden="true" className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">{number.format(index + 1)}</span>
              <div className="min-w-0">
                <p className="text-sm font-bold leading-7 text-primary-900">{item.label}</p>
                <p className="mt-1 text-sm leading-7 text-primary-900/80">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <p id={`${id}-caption`} className="mt-5 border-t border-accent-500/30 pt-4 text-sm leading-7 text-primary-900/80">{visual.caption}</p>
    </figure>
  );
}
