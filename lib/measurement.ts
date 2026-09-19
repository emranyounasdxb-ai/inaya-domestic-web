// Provider-independent boundary. No DOM text, field values, query strings,
// referrers, candidate attributes or arbitrary event parameters are accepted.
export const measurementEvents = ['page_view', 'contact_cta', 'phone_click', 'whatsapp_click', 'form_start', 'language_switch', 'service_enquiry'] as const;
export type MeasurementEvent = typeof measurementEvents[number];
export type MeasurementPayload = {
  event: MeasurementEvent;
  page_location: string;
  language: 'en' | 'ar';
  page_type: 'home' | 'service' | 'country' | 'location' | 'information';
  form_id?: 'contact' | 'booking' | 'careers';
  target_language?: 'en' | 'ar';
};

export function createMeasurement(options: {
  enabled: boolean;
  paths: readonly string[];
  origin: string;
  sink: (payload: MeasurementPayload) => void;
}) {
  const paths = new Set(options.paths);
  let consent = false;
  let lastPage: string | undefined;
  const interactions = new WeakSet<object>();
  const forms = new WeakSet<object>();
  function route(raw: string) {
    const pathname = raw.split(/[?#]/)[0];
    const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
    return paths.has(normalized) ? normalized : undefined;
  }
  function emit(event: MeasurementEvent, rawPath: string, token?: object, formId?: MeasurementPayload['form_id'], targetLanguage?: MeasurementPayload['target_language']) {
    if (!options.enabled || !consent || !measurementEvents.includes(event)) return false;
    const pathname = route(rawPath);
    if (!pathname || (token && interactions.has(token))) return false;
    if (event === 'page_view' && pathname === lastPage) return false;
    if (event === 'form_start' && (!token || forms.has(token) || !['contact', 'booking', 'careers'].includes(formId || ''))) return false;
    if (event === 'language_switch' && !['en', 'ar'].includes(targetLanguage || '')) return false;
    const language = pathname.split('/')[1];
    if (language !== 'en' && language !== 'ar') return false;
    const path = pathname.split('/').slice(2).filter(Boolean).join('/');
    const page_type = !path ? 'home' : path.startsWith('maid-source-countries/') ? 'country' : path.startsWith('maid-services-') ? 'location' : path.startsWith('services/') && path !== 'services/countries-we-source-from' ? 'service' : 'information';
    const payload: MeasurementPayload = { event, page_location: `${options.origin}${pathname}`, language, page_type };
    if (event === 'form_start') payload.form_id = formId;
    if (event === 'language_switch') payload.target_language = targetLanguage;
    try { options.sink(payload); } catch { return false; }
    if (event === 'page_view') lastPage = pathname;
    if (token) interactions.add(token);
    if (event === 'form_start' && token) forms.add(token);
    return true;
  }
  return { emit, route, setConsent(granted: boolean) { consent = granted === true; } };
}
