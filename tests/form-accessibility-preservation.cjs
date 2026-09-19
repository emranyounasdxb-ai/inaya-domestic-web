const assert = require('node:assert/strict');

// The approved exceptions permit label wiring, focus/scroll presentation and
// exact booking-service URL preselection, not changes to local validation,
// service options, other fields or visual styling.
function assertFormPreserved(current, previous, file) {
  const handler = source => source.match(/  function handleSubmit\([\s\S]*?\n  }/)[0];
  assert.equal(handler(current), handler(previous), `${file}: exact local validation logic`);
  const fields = source => [...source.matchAll(/<(input|select|textarea)\b[^>]*name="([^"]+)"[^>]*>/g)]
    .map(m => {
      const field = m[0].replace(/ \{\.\.\.fieldA11y\('[^']+'\)\}/g, '').replace(/ id=\{fieldId\('[^']+'\)\}/g, '');
      return file === 'components/BookingForm.tsx' && m[2] === 'service'
        ? field.replace(/ value=\{selectedService\} onChange=\{handleServiceChange\}/, '')
        : field;
    });
  assert.deepEqual(fields(current), fields(previous), `${file}: original field attributes and order`);
  if (file === 'components/BookingForm.tsx') {
    assert.match(current, /<select \{\.\.\.fieldA11y\('service'\)\} name="service" className="field" value=\{selectedService\} onChange=\{handleServiceChange\}>/);
  }
  const options = source => [...source.matchAll(/<option\b[\s\S]*?<\/option>/g)].map(m => m[0]);
  assert.deepEqual(options(current), options(previous), `${file}: original options`);
  const styles = source => [...source.matchAll(/className=("[^"]*"|\{[^\n]*\})/g)].map(m => m[0]);
  const confirmationStyles = /className="(?:rounded-2xl border border-green-200 bg-green-50 p-8 text-center text-green-800|mb-2 text-4xl|font-medium)"/;
  assert.deepEqual(styles(current), styles(previous).filter(s => !confirmationStyles.test(s)), `${file}: original form styling`);
  assert.doesNotMatch(current, /fetch\(|XMLHttpRequest|sendBeacon|trackEvent/);
}
module.exports = { assertFormPreserved };
