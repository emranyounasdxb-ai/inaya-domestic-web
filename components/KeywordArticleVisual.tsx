import type { KeywordVisual } from '@/lib/keyword-article-types';

export default function KeywordArticleVisual({ visual, id, lang }: { visual: KeywordVisual; id: string; lang: 'en' | 'ar' }) {
  const titleId = `${id}-title`;
  const captionId = `${id}-caption`;
  const arabic = lang === 'ar';
  return <figure data-keyword-visual={visual.kind} aria-labelledby={titleId} aria-describedby={captionId} className="my-8 rounded-2xl border border-accent-500/30 bg-ivory/60 p-4 sm:p-6">
    <figcaption id={titleId} className="text-lg font-bold leading-8 text-primary-900">{visual.title}</figcaption>
    {visual.kind === 'flow' ? <ol className="mt-5 grid gap-3 sm:grid-cols-2">{visual.steps.map((step,index) => <li key={step} className="flex gap-3 rounded-xl bg-white p-4 text-sm leading-7 text-primary-900"><span aria-hidden="true" className="font-bold text-accent-700">{index+1}.</span><span>{step}</span></li>)}</ol> : null}
    {visual.kind === 'bars' ? <div className="mt-6 space-y-5">{visual.items.map(item => <div key={item.label}>
      <div className="mb-2 flex flex-wrap justify-between gap-2 text-sm leading-7"><span>{item.label}</span><strong><bdi>{new Intl.NumberFormat(arabic?'ar-AE':'en-AE').format(item.value)} {visual.unit}</bdi></strong></div>
      <div aria-hidden="true" className="h-5 overflow-hidden rounded bg-primary-900/5"><div className="h-full bg-accent-600" style={{width:`${100*item.value/Math.max(...visual.items.map(entry=>entry.value))}%`}} /></div>
    </div>)}</div> : null}
    {visual.kind === 'graph' ? (() => {
      const labels = Object.fromEntries(visual.nodes.map(node=>[node.id,node.label]));
      return <ol data-keyword-relationship-rows="true" className="mt-6 space-y-4">
        {visual.edges.map((edge,index)=><li key={index} data-keyword-relationship="true" className="rounded-xl border border-primary-900/10 bg-white p-4 sm:p-5">
          <div className="grid min-w-0 items-center gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)_minmax(0,1fr)] sm:gap-5">
            <div className="min-w-0"><span className="block text-xs font-medium leading-6 text-primary-900/60">{arabic?'من':'From'}</span><strong data-relationship-from="true" className="mt-1 block break-words text-base font-semibold leading-7">{labels[edge.from]}</strong></div>
            <div className="min-w-0 rounded-lg bg-ivory px-4 py-3 text-center">
              <span aria-hidden="true" className="block text-xl leading-7 text-accent-700 sm:hidden">↓</span>
              <span data-relationship-label="true" className="block break-words text-sm font-medium leading-7">{edge.label}</span>
              <span aria-hidden="true" className="mt-1 hidden text-2xl leading-7 text-accent-700 sm:block">{arabic?'←':'→'}</span>
              <span aria-hidden="true" className="block text-xl leading-7 text-accent-700 sm:hidden">↓</span>
            </div>
            <div className="min-w-0"><span className="block text-xs font-medium leading-6 text-primary-900/60">{arabic?'إلى':'To'}</span><strong data-relationship-to="true" className="mt-1 block break-words text-base font-semibold leading-7">{labels[edge.to]}</strong></div>
          </div>
        </li>)}
      </ol>;
    })() : null}
    <p id={captionId} className="mt-5 text-sm leading-7 text-primary-900/75">{visual.caption}</p>
  </figure>;
}
