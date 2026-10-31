const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const semver = require('semver');

const lock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));

test('vulnerable braces chains are absent from every locked installation', () => {
  for (const [location, item] of Object.entries(lock.packages)) {
    assert.ok(!/(?:^|\/)node_modules\/(braces|micromatch|chokidar)$/.test(location), location);
    assert.ok(!item.dependencies?.braces, location);
  }
  assert.throws(() => require.resolve('braces'), {code:'MODULE_NOT_FOUND'});
  assert.equal(require('../package.json').scripts.postinstall, undefined);
});

test('retained dependency families meet the security baseline', () => {
  const minimum = {
    next: '16.4.2', '@next/third-parties': '16.4.2', 'eslint-config-next': '16.4.2',
    sharp: '0.35.5', 'source-map-js': '1.2.2', tailwindcss: '4.3.3', '@tailwindcss/postcss': '4.3.3',
    zod: '4.6.6' // GHSA-mrhx-c7xc-m3w5
  };
  for (const [location, item] of Object.entries(lock.packages)) {
    for (const [name, version] of Object.entries(minimum)) {
      if (location.endsWith('node_modules/' + name)) assert.ok(semver.gte(item.version, version), location);
    }
    if (location.endsWith('node_modules/brace-expansion')) {
      assert.ok(semver.satisfies(item.version, '>=1.1.21 <2 || >=5.0.12'), location);
    }
  }
});

test('all legacy matcher consumers use the patched upstream engine with callable and named APIs', async () => {
  const matcher = require('minimatch');
  const named = await import('minimatch');
  const adapter = lock.packages['node_modules/minimatch'];
  const engine = lock.packages['node_modules/minimatch-engine'];
  assert.equal(adapter.version, '11.0.3-inaya-compat.1');
  assert.equal(adapter.resolved, 'file:tooling/minimatch-legacy');
  assert.equal(engine.name, 'minimatch');
  assert.equal(engine.version, '11.0.3');
  assert.match(engine.integrity, /^sha512-/);
  assert.deepEqual(Object.keys(lock.packages).filter(p => /(?:^|\/)node_modules\/minimatch$/.test(p)), ['node_modules/minimatch']);
  assert.equal(typeof matcher, 'function');
  assert.equal(typeof named.default, 'function');
  assert.equal(typeof named.Minimatch, 'function');
  for (const match of [matcher, named.default, named.minimatch]) {
    assert.equal(match('app/en/page.tsx', '**/*.{ts,tsx}'), true);
    assert.equal(match('app/.private.ts', '**/*.ts'), false);
    assert.equal(match('app/.private.ts', '**/*.ts', {dot:true}), true);
    assert.equal(match('guide.md', '!*.tsx'), true);
    assert.equal(match('app/en/page.tsx', '**/*.js'), false);
  }
  assert.deepEqual(['x.ts', 'x.tsx', 'x.js'].filter(matcher.filter('*.{ts,tsx}')), ['x.ts', 'x.tsx']);
  assert.deepEqual(matcher.match(['a.ts','b.js'], '*.ts'), ['a.ts']);
  assert.equal(new matcher.Minimatch('**/*.tsx').match('app/en/page.tsx'), true);
  assert.equal(new named.Minimatch('**/*.tsx').match('app/en/page.tsx'), true);
  assert.equal(matcher.defaults({nocase:true})('PAGE.TSX', '*.tsx'), true);
});

test('patched matcher preserves real Next, React and accessibility lint reports', async () => {
  const { ESLint } = require('eslint');
  const eslint = new ESLint({overrideConfig:{rules:{'react/forbid-component-props':['error',{forbid:['style']}]}}});
  const [invalid] = await eslint.lintText('export default function Probe(){ return <div><img src="/x.webp"/><Panel style={{color:"red"}}/></div>; }', {filePath:'app/lint-compat-probe.tsx'});
  for (const rule of ['jsx-a11y/alt-text', 'react/forbid-component-props', '@next/next/no-img-element']) {
    assert.ok(invalid.messages.some(message => message.ruleId === rule), rule);
  }
  assert.ok(!invalid.messages.some(message => message.fatal), 'no plugin or glob API failure');
  const [valid] = await eslint.lintText('export default function Probe(){ return <p>Example</p>; }', {filePath:'app/lint-compat-probe.tsx'});
  assert.equal(valid.errorCount, 0);
});

test('Next lint root-directory discovery retains supported default, glob and Windows paths', t => {
  const pluginRoot = path.dirname(require.resolve('@next/eslint-plugin-next'));
  const {getRootDirs} = require(path.join(pluginRoot, 'utils/get-root-dirs.js'));
  const globPath = require.resolve('fast-glob', {paths:[pluginRoot]});
  const metadata = JSON.parse(fs.readFileSync(path.join(path.dirname(path.dirname(globPath)), 'package.json'), 'utf8'));
  assert.equal(metadata.name, 'tinyglobby');
  assert.equal(metadata.version, '0.2.17');
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'inaya-lint-glob-'));
  t.after(() => fs.rmSync(directory, {recursive:true, force:true}));
  for (const name of ['app-a', 'app-b', '.hidden']) fs.mkdirSync(path.join(directory, name));
  fs.writeFileSync(path.join(directory, 'app-file'), '');
  const context = rootDir => ({cwd:directory, settings:{next:{rootDir}}});
  const normalized = values => values.map(value => path.resolve(value)).sort();
  const expected = normalized(['app-a', 'app-b'].map(name => path.join(directory, name)));
  assert.deepEqual(getRootDirs(context(undefined)), [directory]);
  const pattern = directory.replace(/\\/g, '/') + '/app-*';
  assert.deepEqual(normalized(getRootDirs(context(pattern))), expected);
  assert.deepEqual(normalized(getRootDirs(context(pattern.replace(/\//g, '\\')))), expected);
  assert.deepEqual(normalized(getRootDirs(context([pattern, 123]))), expected);
  assert.deepEqual(normalized(getRootDirs(context(directory.replace(/\\/g, '/') + '/{app-a,app-b}'))), expected);
  assert.deepEqual(getRootDirs(context(pattern + '/missing')), []);
});
