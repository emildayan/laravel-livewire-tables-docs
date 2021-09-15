# Laravel Livewire Tables Docs

## Setup

Install dependencies:

```bash
yarn install
```

## Development

```bash
yarn dev
```

## Static Generation

This will create the `dist/` directory for publishing to static hosting:

```bash
yarn generate
```

To preview the static generated app, run `yarn start`

## Deployment to Github Pages

This will copy the `dist/` directory with static files to Github Pages branch and push it:

```bash
yarn run deploy
```

For detailed explanation on how things work, checkout [nuxt/content](https://content.nuxtjs.org) and [@nuxt/content theme docs](https://content.nuxtjs.org/themes-docs).
