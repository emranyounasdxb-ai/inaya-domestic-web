// GHSA-vfj7-8cjw-p6xm has no upstream patched release. Apply a fail-closed,
// project-local depth guard to the exact locked upstream sources, including AST
// entry points. Do not change package versions or suppress registry advisories.
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const lock = JSON.parse(fs.readFileSync(path.join(root, 'package-lock.json'), 'utf8'));
const guard = "if (depth > 256) throw new SyntaxError('INAYA_BRACES_DEPTH_LIMIT');";
const files = {
  'parse.js': {
    sha: 'e572166565f15fa6ad9865ae49d678218e32aabfd1b3720f6d0d43d39800d310',
    pairs: [[
      '  const push = node => {',
      "  const push = node => {\n    if (node.nodes && stack.length >= 256) throw new SyntaxError('INAYA_BRACES_DEPTH_LIMIT');"
    ]]
  },
  'compile.js': {
    sha: 'dc98f22eee3d511785d92a00758d5f0d48efed5f5813bdecc2de430c529b5c9f',
    pairs: [
      ['  const walk = (node, parent = {}) => {', `  const walk = (node, parent = {}, depth = 0) => {\n    ${guard}`],
      ['output += walk(child, node);', 'output += walk(child, node, depth + 1);']
    ]
  },
  'expand.js': {
    sha: '41ccc196ebfa7b7781a634e721eb744e4e7bcb54cba427a7e3d6806a1b9e58f7',
    pairs: [
      ['const expand = (ast, options = {}) => {', `const expand = (ast, options = {}) => {
  const pending = [ast];
  const inspected = new WeakSet();
  while (pending.length) {
    const node = pending.pop();
    if (!node || typeof node !== 'object' || inspected.has(node)) continue;
    inspected.add(node);
    if (node.value !== null && typeof node.value === 'object') throw new SyntaxError('INAYA_BRACES_INVALID_AST');
    if (Array.isArray(node.nodes)) for (const child of node.nodes) pending.push(child);
  }`],
      ['  const walk = (node, parent = {}) => {', `  const walk = (node, parent = {}, depth = 0) => {\n    ${guard}`],
      ['walk(child, node);', 'walk(child, node, depth + 1);'],
      ["    while (p.type !== 'brace' && p.type !== 'root' && p.parent) {", "    let parentHops = 0;\n    while (p.type !== 'brace' && p.type !== 'root' && p.parent) {\n      if (++parentHops > 256) throw new SyntaxError('INAYA_BRACES_DEPTH_LIMIT');"],
      ["    while (block.type !== 'brace' && block.type !== 'root' && block.parent) {", "    let blockHops = 0;\n    while (block.type !== 'brace' && block.type !== 'root' && block.parent) {\n      if (++blockHops > 256) throw new SyntaxError('INAYA_BRACES_DEPTH_LIMIT');"]
    ]
  },
  'stringify.js': {
    sha: '379f22d77bfa1478341ccd49c5e4267464aabcbba03558bab332aac23fc6f23a',
    pairs: [
      ['  const stringify = (node, parent = {}) => {', `  const stringify = (node, parent = {}, depth = 0) => {\n    ${guard}`],
      ['output += stringify(child);', 'output += stringify(child, {}, depth + 1);']
    ]
  }
};

function replaceOnce(source, from, to) {
  if (source.split(from).length !== 2) throw new Error('Unexpected braces source; review the security patch before installing.');
  return source.replace(from, to);
}
const locations = Object.keys(lock.packages).filter(p => /(?:^|\/)node_modules\/braces$/.test(p));
if (!locations.length) throw new Error('Expected locked braces dependency is missing; review whether this mitigation can be retired.');
const changes = [];
const omit = (process.env.npm_config_omit || '').split(/\s+/);
const include = (process.env.npm_config_include || '').split(/\s+/);
const omitDev = !include.includes('dev') && (omit.includes('dev') || process.env.NODE_ENV === 'production');
let installed = 0;
for (const location of locations) {
  if (lock.packages[location].version !== '3.0.3') throw new Error('Review braces security patch for the new upstream version.');
  if (!fs.existsSync(path.resolve(root, location)) && lock.packages[location].dev === true && omitDev) continue;
  const directory = fs.realpathSync(path.resolve(root, location));
  installed++;
  if (!directory.startsWith(path.join(root, 'node_modules') + path.sep)) throw new Error('Refusing to patch outside this project.');
  for (const [name, patch] of Object.entries(files)) {
    const target = path.join(directory, 'lib', name);
    const stat = fs.lstatSync(target);
    if (!stat.isFile() || stat.nlink !== 1 || fs.realpathSync(target) !== target) {
      throw new Error('Refusing to patch linked files that could belong to another project.');
    }
    const current = fs.readFileSync(target, 'utf8');
    let original = current;
    if (current.includes('INAYA_BRACES_DEPTH_LIMIT')) {
      for (const [before, after] of [...patch.pairs].reverse()) {
        if (original.includes(after)) original = replaceOnce(original, after, before);
      }
    }
    if (createHash('sha256').update(original).digest('hex') !== patch.sha) throw new Error(`Unexpected ${location}/lib/${name}; refusing an unverified patch.`);
    let next = original;
    for (const [before, after] of patch.pairs) next = replaceOnce(next, before, after);
    if (next !== current) changes.push([target, next]);
  }
}
// Validate every copy before changing any file. Repeated npm installs are safe.
for (const [target, source] of changes) fs.writeFileSync(target, source);
console.log(`Verified braces depth mitigation in ${installed} project-local installation(s); ${locations.length - installed} explicitly omitted development installation(s).`);
