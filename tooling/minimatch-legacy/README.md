# Build-tool compatibility for patched minimatch

This private package is a callable API adapter, not an upstream minimatch release.
It contains no matching algorithm. CommonJS callers receive the upstream
`minimatch` function with its named exports attached; ESM callers can use either
the default function or named exports. Every operation runs on the exact
`minimatch@11.0.3` npm engine, including its expansion bounds.

The existing ESLint9, React, accessibility and import plugins expect the old
callable CommonJS shape. Replacing that shape with an object breaks checks.
The adapter retains those checks while removing all older matcher installations.

The root override references the direct local dependency. `.npmrc` packs local
file dependencies so clean installs include their dependencies rather than using
unresolved links. The lockfile pins the published engine and its integrity.
No install script or runtime website bundle changes are needed.

Remove this adapter when all installed consumers support the upstream named API.
The dependency tests check both module formats, glob behavior, and actual ESLint
rule reports; full CI remains mandatory.

References:

- [Upstream advisory and patched version](https://github.com/advisories/GHSA-g3hv-75wg-m249)
- [Upstream11 API](https://github.com/isaacs/minimatch/tree/v11.0.3)
- [npm local package installation](https://docs.npmjs.com/cli/v10/commands/npm-install/#install-links)
