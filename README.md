# @mjsz-vbr-elements/nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt module for Data visualization from MJSZ VBR

A használathoz hozzá kell adni két alap csomagot (`@mjsz-vbr-elements/nuxt` `@mjsz-vbr-elements/core`) és a kivánt elemenket (`@mjsz-vbr-elements/elements`):

```bash
# Using npm
npm install @mjsz-vbr-elements/nuxt @mjsz-vbr-elements/core @mjsz-vbr-elements/elements

# Using pnpm
pnpm add @mjsz-vbr-elements/nuxt @mjsz-vbr-elements/core @mjsz-vbr-elements/elements
```

A további elérhető csomagokat [itt](#elérhető-package-ek) találod. Ha újabb csomagot szeretnél hozzáadni csak telepítened kell és máris eléehető lesz az alkalmazásban.

```ts [nuxt.config.ts]
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ["@mjsz-vbr-elements/nuxt"],

  mjszVbrElements: {
    apiKey: process.env.NUXT_VBR_API_KEY,
  },
});
```

## Elérhető package-ek:

| Típus      | Link                                                                                         |
| ---------- | -------------------------------------------------------------------------------------------- |
| Core       | [@mjsz-vbr-elements/core](https://www.npmjs.com/package/@mjsz-vbr-elements/core)             |
| Elements   | [@mjsz-vbr-elements/elements](https://www.npmjs.com/package/@mjsz-vbr-elements/elements)     |
| Extended   | [@mjsz-vbr-elements/extended](https://www.npmjs.com/package/@mjsz-vbr-elements/extended)     |
| Liga       | [@mjsz-vbr-elements/liga](https://www.npmjs.com/package/@mjsz-vbr-elements/liga)             |
| GameCenter | [@mjsz-vbr-elements/gamecenter](https://www.npmjs.com/package/@mjsz-vbr-elements/gamecenter) |

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v@mjsz-vbr-elements/nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@mjsz-vbr-elements/nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/@mjsz-vbr-elements/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@mjsz-vbr-elements/nuxt
[license-src]: https://img.shields.io/npm/l/@mjsz-vbr-elements/nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@mjsz-vbr-elements/nuxt
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
