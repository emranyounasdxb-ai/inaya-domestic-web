'use client';

import { useEffect, useRef, useState } from 'react';
import { sendGAEvent } from '@next/third-parties/google';
import { createAcceptedFormMeasurement, isAcceptedFormDelivery } from '@/lib/form-delivery-measurement';

export function useFormDelivery(kind: 'contact' | 'booking' | 'careers', locale: string) {
  const arabic = locale === 'ar';
  const locked = useRef(false);
  const requestId = useRef<string | null>(null);
  const lastPayload = useRef('');
  const startedAt = useRef(0);
  const acceptedMeasurement = useRef<ReturnType<typeof createAcceptedFormMeasurement> | null>(null);
  useEffect(() => { startedAt.current = Date.now(); }, []);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [reference, setReference] = useState('');

  async function send(data: FormData) {
    if (locked.current) return false;
    locked.current = true;
    setPending(true);
    setError('');
    const fields = Object.fromEntries(data.entries());
    const payloadKey = JSON.stringify(fields);
    if (!requestId.current || lastPayload.current !== payloadKey) {
      requestId.current = crypto.randomUUID();
      lastPayload.current = payloadKey;
    }
    try {
      const response = await fetch('/inaya-enquiry.php', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind, locale: arabic ? 'ar' : 'en',
          requestId: requestId.current, startedAt: startedAt.current,
          fields
        })
      });
      const result = await response.json();
      if (response.status === 422) {
        if (result.code === 'form_time' && typeof result.serverTime === 'number') {
          startedAt.current = result.serverTime - 2000;
          setError(arabic ? 'يرجى إعادة إرسال النموذج الآن. بياناتك ما زالت محفوظة.' : 'Please submit the form again now. Your details are still in the form.');
        } else {
          const field = typeof result.field === 'string' ? result.field : '';
          const labels: Record<string, string> = arabic
            ? { name: 'الاسم', phone: 'رقم الهاتف', email: 'البريد الإلكتروني', service: 'الخدمة', message: 'الرسالة' }
            : { name: 'name', phone: 'phone number', email: 'email address', service: 'service', message: 'message' };
          setError(arabic
            ? `يرجى مراجعة ${labels[field] || 'بيانات النموذج'} وتصحيحها ثم الإرسال مجدداً. بياناتك ما زالت محفوظة.`
            : `Please check and correct your ${labels[field] || 'form details'}, then submit again. Your details are still in the form.`);
        }
        return false;
      }
      if (!isAcceptedFormDelivery(response.ok, result)) {
        throw new Error('Delivery was not accepted');
      }
      setReference(result.reference);
      acceptedMeasurement.current ??= createAcceptedFormMeasurement({
        // The active consent component owns this flag; an absent flag is denied.
        hasConsent: () => window['ga-disable-G-986STCSR37'] === false && Array.isArray(window.dataLayer),
        sendEvent: (event, parameters) => sendGAEvent('event', event, parameters),
      });
      acceptedMeasurement.current(kind, arabic ? 'ar' : 'en', requestId.current, response.ok, result);
      return true;
    } catch {
      setError(arabic
        ? 'لم يتم تأكيد إرسال الاستفسار. يرجى المحاولة مرة أخرى أو التواصل معنا على 06 740 0128. بياناتك ما زالت في النموذج.'
        : 'Your enquiry could not be confirmed. Please try again or call 06 740 0128. Your details are still in the form.');
      return false;
    } finally {
      locked.current = false;
      setPending(false);
    }
  }

  const confirmation = arabic
    ? `تم إرسال استفسارك إلى عناية. الرقم المرجعي: ${reference}. سيتولى الفريق مراجعته؛ لا يؤكد هذا الإرسال حجزاً أو وظيفة أو مقابلة.`
    : `Your enquiry has been submitted to INAYA. Reference: ${reference}. The team will review it; this does not confirm a booking, job or interview.`;

  return {
    send, pending, error, confirmation,
    submitLabel: pending ? (arabic ? 'جارٍ الإرسال…' : 'Sending…') : (arabic ? 'إرسال الاستفسار' : 'Send Enquiry'),
    privacy: arabic
      ? 'يرسل هذا النموذج بيانات الاستفسار إلى info@inayadomestic.ae للمتابعة. يرجى عدم إدخال وثائق هوية أو معلومات حساسة.'
      : 'This form sends your enquiry details to info@inayadomestic.ae for follow-up. Do not include identity documents or sensitive information.'
  };
}

export function DeliveryFeedback({ error }: { error: string }) {
  return <>{error && <p role="alert" className="sm:col-span-2 text-sm text-red-700">{error}</p>}</>;
}
