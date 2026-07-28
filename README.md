# Infinios

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                 | Description                             |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start the dev server                    |
| `npm run build`        | Production build                        |
| `npm run start`        | Serve the production build              |
| `npm run lint`         | ESLint (`next/core-web-vitals` + TS)    |
| `npm run lint:fix`     | ESLint with autofix                     |
| `npm run typecheck`    | TypeScript, no emit                     |
| `npm run format`       | Prettier write (Tailwind class sorting) |
| `npm run format:check` | Prettier check — use this in CI         |

## Structure

```
src/
  app/            App Router routes, layouts, error & not-found boundaries
  components/     Shared React components
    ui/           Primitive, presentational building blocks
  config/         Static app configuration (site metadata, constants)
  hooks/          Reusable client hooks
  lib/            Framework-agnostic helpers (cn, clients, adapters)
  types/          Shared TypeScript types
public/           Static assets served at the site root
```

Imports use the `@/*` alias, mapped to `src/*`.

## Conventions

- Components are Server Components by default; add `"use client"` only where
  interactivity or browser APIs are needed.
- Compose Tailwind classes with `cn()` from `@/lib/utils` so `className`
  overrides win over base classes.
- Site name, description, and base URL live in `src/config/site.ts` and feed
  the root `metadata` export.
- Environment variables are documented in `.env.example`; `.env.local` is
  git-ignored.
