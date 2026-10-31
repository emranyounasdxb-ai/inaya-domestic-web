// ESLint9 and its plugins expect require('minimatch') to be callable. Delegate
// every operation to the patched upstream engine; retain no legacy matcher.
const engine = require('minimatch-engine');
module.exports = Object.assign(engine.minimatch, engine);
