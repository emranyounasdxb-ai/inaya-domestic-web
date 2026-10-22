type FormKind = 'contact' | 'booking' | 'careers';
type FormLanguage = 'en' | 'ar';
type AcceptedFormEvent = 'generate_lead' | 'career_enquiry_submitted';
type AcceptedFormParameters = {
  form_id: FormKind;
  language: FormLanguage;
  page_location: string;
  page_referrer: '';
};

export function isAcceptedFormDelivery(httpOk: boolean, result: unknown): result is { ok: true; reference: string } {
  if (httpOk !== true || !result || typeof result !== 'object') return false;
  const receipt = result as { ok?: unknown; reference?: unknown };
  return receipt.ok === true && typeof receipt.reference === 'string'
    && receipt.reference.length <= 80 && /^INAYA-[A-Z0-9]+(?:-[A-Z0-9]+)*$/.test(receipt.reference);
}

// One instance per mounted form. Identifiers stay here only; they never reach GA.
export function createAcceptedFormMeasurement(options: {
  hasConsent: () => boolean;
  sendEvent: (event: AcceptedFormEvent, parameters: AcceptedFormParameters) => void;
}) {
  const acceptedRequests = new Set<string>();
  return (kind: unknown, language: unknown, requestId: unknown, httpOk: boolean, result: unknown) => {
    if ((kind !== 'contact' && kind !== 'booking' && kind !== 'careers')
      || (language !== 'en' && language !== 'ar')
      || typeof requestId !== 'string' || !/^[a-zA-Z0-9-]{16,80}$/.test(requestId)
      || !isAcceptedFormDelivery(httpOk, result) || acceptedRequests.has(requestId)) return false;

    // Consume even when denied/unavailable: a later consent choice cannot replay it.
    acceptedRequests.add(requestId);
    try {
      if (options.hasConsent() !== true) return false;
      options.sendEvent(kind === 'careers' ? 'career_enquiry_submitted' : 'generate_lead', {
        form_id: kind,
        language,
        page_location: `https://inayadomestic.ae/${language}/${kind}/`,
        page_referrer: '',
      });
      return true;
    } catch {
      // Measurement failure must never turn an accepted enquiry into a failure.
      return false;
    }
  };
}
