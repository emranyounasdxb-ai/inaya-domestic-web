const assert = require('node:assert/strict');

// The approved exceptions permit label wiring, focus/scroll presentation and
// exact booking-service URL preselection and the approved six-package selector.
// Local validation, existing service options, fields and styling stay exact.
function assertFormPreserved(current, previous, file) {
  const handler = source => source.match(/  function handleSubmit\([\s\S]*?\n  }/)[0];
  assert.equal(handler(current), handler(previous), `${file}: exact local validation logic`);
  const fields = source => [...source.matchAll(/<(input|select|textarea)\b[^>]*name="([^"]+)"[^>]*>/g)]
    .map(m => {
      const field = m[0].replace(/ \{\.\.\.fieldA11y\('[^']+'\)\}/g, '').replace(/ id=\{fieldId\('[^']+'\)\}/g, '');
      return file === 'components/BookingForm.tsx' && m[2] === 'service'
        ? field.replace(/ ref=\{serviceRef\}/, '').replace(/ value=\{selectedService\} onChange=\{handleServiceChange\}/, '')
        : field;
    });
  assert.deepEqual(fields(current), fields(previous), `${file}: original field attributes and order`);
  if (file === 'components/BookingForm.tsx') {
    assert.match(current, /<select \{\.\.\.fieldA11y\('service'\)\} ref=\{serviceRef\} name="service" className="field" value=\{selectedService\} onChange=\{handleServiceChange\}>/);
    assert.match(current, /setSelectedService\(serviceRef\.current\?\.value \?\? services\[0\]\.slug\)/, 'hydration adopts the actual user selection');
  }
  const options = source => [...source.matchAll(/<option\b[\s\S]*?<\/option>/g)].map(m => m[0]);
  const expectedOptions = options(previous);
  if (file === 'components/BookingForm.tsx') {
    const oldPlans = ['planHourly', 'planPartTime', 'planFullTime', 'planMonthly', 'planLiveIn'].map(key => `<option>{t('${key}')}</option>`);
    const start = expectedOptions.indexOf(oldPlans[0]);
    assert.ok(start >= 0, 'original plan selector exists');
    assert.deepEqual(expectedOptions.slice(start, start + oldPlans.length), oldPlans, 'only the five original package options are replaced');
    const approvedPlans = [
      '<option value="Half day — 4 hours">{t(\'planHalfDay\')}</option>',
      '<option value="Daily — 8 hours">{t(\'planDaily\')}</option>',
      '<option value="Weekly — 7 days">{t(\'planWeekly\')}</option>',
      '<option value="Monthly — 30 days">{t(\'planMonthly\')}</option>',
      '<option value="6-month contract">{t(\'planSixMonth\')}</option>',
      '<option value="12-month contract">{t(\'planYearly\')}</option>',
      '<option value="Discuss requirements">{t(\'planDiscuss\')}</option>'
    ];
    expectedOptions.splice(start, oldPlans.length, ...approvedPlans);
  }
  assert.deepEqual(options(current), expectedOptions, `${file}: unchanged non-package options and exact approved package choices`);
  const styles = source => [...source.matchAll(/className=("[^"]*"|\{[^\n]*\})/g)].map(m => m[0]);
  const confirmationStyles = /className="(?:rounded-2xl border border-green-200 bg-green-50 p-8 text-center text-green-800|mb-2 text-4xl|font-medium)"/;
  assert.deepEqual(styles(current), styles(previous).filter(s => !confirmationStyles.test(s)), `${file}: original form styling`);
  assert.doesNotMatch(current, /fetch\(|XMLHttpRequest|sendBeacon|trackEvent/);
}
module.exports = { assertFormPreserved };
