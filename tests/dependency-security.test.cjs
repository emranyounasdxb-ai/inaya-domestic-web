const assert = require('node:assert/strict');
const { execFileSync, spawnSync } = require('node:child_process');
const test = require('node:test');
const postcss = require('postcss');
const nested = require('postcss-nested');
const braces = require('braces');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const semver = require('semver');

test('every locked copy of the patched dependency families meets the security baseline', () => {
  const lock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));
  const minimum = {
    next: '16.3.8', '@next/third-parties': '16.3.8', 'eslint-config-next': '16.3.8',
    sharp: '0.35.5', 'source-map-js': '1.2.2', 'postcss-selector-parser': '7.1.6'
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

test('braces rejects nested strings through public APIs and real glob callers without stack exhaustion', () => {
  const source = `
    const assert = require('node:assert/strict');
    const b = require('braces');
    const micromatch = require('micromatch');
    const glob = require('fast-glob');
    for (const input of [
      '{'.repeat(4000) + 'a' + '}'.repeat(4000),
      '('.repeat(4000) + 'a' + ')'.repeat(4000),
      '{'.repeat(4000) + 'a'
    ]) {
      for (const run of [b, b.create, b.parse, b.compile, b.expand, b.stringify]) {
        assert.throws(() => run(input), {name:'SyntaxError', message:'INAYA_BRACES_DEPTH_LIMIT'});
      }
    }
    const pattern = '{'.repeat(4000) + 'a,b' + '}'.repeat(4000);
    for (const run of [micromatch.braces, micromatch.braceExpand, glob.generateTasks]) {
      assert.throws(() => run(pattern), {name:'SyntaxError', message:'INAYA_BRACES_DEPTH_LIMIT'});
    }
    console.log('bounded rejection');
  `;
  const result = spawnSync(process.execPath, ['-e', source], { encoding: 'utf8', timeout: 5000 });
  assert.equal(result.error, undefined);
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /bounded rejection/);
});

test('braces AST entry points, internal walkers and cycles cannot bypass depth limits', () => {
  const source = `
    const assert = require('node:assert/strict');
    const b = require('braces');
    for (const api of ['compile', 'expand', 'stringify']) {
      for (const run of [b[api], require('braces/lib/' + api)]) {
        let ast = {type:'text', value:'a', nodes:[]};
        for (let i = 0; i < 4000; i++) {
          const parent = {type:'root', nodes:[ast]}; ast.parent=parent; ast=parent;
        }
        assert.throws(() => run(ast), {name:'SyntaxError', message:'INAYA_BRACES_DEPTH_LIMIT'});
        const cycle = {type:'root', nodes:[]}; cycle.nodes.push(cycle);
        assert.throws(() => run(cycle), {name:'SyntaxError', message:'INAYA_BRACES_DEPTH_LIMIT'});
      }
    }
    const badParent = {type:'paren',nodes:[]}; badParent.parent=badParent;
    assert.throws(() => b.expand(badParent), {name:'SyntaxError',message:'INAYA_BRACES_DEPTH_LIMIT'});
    let value = 'a'; for (let i=0; i<10000; i++) value=[value];
    for (const run of [b.expand, require('braces/lib/expand')]) {
      assert.throws(() => run({type:'root',nodes:[{type:'text',value}]}),
        {name:'SyntaxError',message:'INAYA_BRACES_INVALID_AST'});
    }
  `;
  const result = spawnSync(process.execPath, ['-e', source], { encoding: 'utf8', timeout: 5000 });
  assert.equal(result.error, undefined);
  assert.equal(result.status, 0, result.stderr);
});

test('normal project globs, ranges, nested alternatives, escapes and quotes retain their behavior', () => {
  assert.deepEqual(braces.expand('./app/**/*.{js,ts,jsx,tsx,mdx}'), [
    './app/**/*.js', './app/**/*.ts', './app/**/*.jsx', './app/**/*.tsx', './app/**/*.mdx'
  ]);
  assert.deepEqual(braces.expand('x/{a,{b,c}}/{1..3}'), [
    'x/a/1', 'x/a/2', 'x/a/3', 'x/b/1', 'x/b/2', 'x/b/3', 'x/c/1', 'x/c/2', 'x/c/3'
  ]);
  assert.equal(braces.compile('a/{b,c}/d'), 'a/(b|c)/d');
  const literal = '{'.repeat(1000) + 'a' + '}'.repeat(1000);
  assert.equal(braces.compile('"' + literal + '"'), literal);
  assert.equal(braces.compile('\\{a,b\\}'), '{a,b}');
});

test('patched selector parser preserves the existing nested-CSS output', () => {
  const css = '.card { color: red; & > .title, &:hover { color: blue; } @media (min-width: 40rem) { padding: 1rem; & .icon { display: block; } } }';
  assert.equal(postcss([nested]).process(css, { from: undefined }).css,
    '.card { color: red; } .card > .title, .card:hover { color: blue; } @media (min-width: 40rem) {.card { padding: 1rem } .card .icon { display: block; } }');
});

test('mitigation installation is idempotent and verifies every locked braces copy', () => {
  execFileSync(process.execPath, ['scripts/patch-braces.mjs'], { stdio: 'pipe' });
});

test('production-only omission is supported while missing development dependencies fail closed', t => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'inaya-dependency-security-'));
  assert.equal(path.dirname(directory), path.resolve(os.tmpdir()));
  assert.ok(path.basename(directory).startsWith('inaya-dependency-security-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  fs.mkdirSync(path.join(directory, 'scripts'));
  const script = path.join(directory, 'scripts/patch-braces.mjs');
  fs.copyFileSync('scripts/patch-braces.mjs', script);
  const lock = { packages: { 'node_modules/braces': { version: '3.0.3', dev: true } } };
  fs.writeFileSync(path.join(directory, 'package-lock.json'), JSON.stringify(lock));
  const env = { ...process.env, NODE_ENV: 'production', npm_config_omit: 'dev', npm_config_include: '' };
  const invoke = nextEnv => spawnSync(process.execPath, [script], { env: nextEnv, encoding: 'utf8' });
  assert.equal(invoke(env).status, 0);
  assert.notEqual(invoke({ ...env, NODE_ENV: 'development', npm_config_omit: '' }).status, 0);
  assert.notEqual(invoke({ ...env, npm_config_include: 'dev' }).status, 0);
  lock.packages['node_modules/braces'].dev = false;
  fs.writeFileSync(path.join(directory, 'package-lock.json'), JSON.stringify(lock));
  assert.notEqual(invoke(env).status, 0);
});
