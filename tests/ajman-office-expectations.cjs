const assert = require('node:assert/strict');
const changes = require('./fixtures/ajman-office-approved-copy.json');

// Owner-confirmed office access and transport, plus the approved AI-labelled Ajman visual.
// Preserve the historical source protection around these exact changes.
function approvedAjmanOfficeCopy(file, source) {
  for (const [before, after] of changes[file] || []) {
    assert.equal(source.split(before).length, 2, `${file}: one approved office-copy anchor`);
    source = source.replace(before, after);
  }
  return source;
}

const metadata = {
  'en/pricing': {
    title: 'Domestic Worker Packages & Pricing | INAYA',
    description: 'Compare INAYA maid packages: 4 hours AED 120, 8 hours AED 200 and monthly options from AED 3,000 with a 12-month commitment. Review inclusions and terms.'
  },
  'ar/pricing': {
    title: 'باقات وأسعار العمالة المنزلية | عناية',
    description: 'قارن باقات عناية: 4 ساعات مقابل 120 درهماً و8 ساعات مقابل 200 درهم، وباقات شهرية من 3,000 درهم مع التزام 12 شهراً. راجع المشمول والشروط.'
  }
};

module.exports = { approvedAjmanOfficeCopy, metadata };
