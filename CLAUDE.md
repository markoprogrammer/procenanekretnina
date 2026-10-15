# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page Serbian-language (`lang="sr"`) marketing site for a licensed real-estate appraiser (Jelena Olarević, Kragujevac), served at https://www.procenanekretnina.rs/. Vite + React 18 + TypeScript + Tailwind CSS 3, icons from `lucide-react`. No router, state management, backend, or tests.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — production build to `dist/` (Vercel runs this)
- `npm run lint` — ESLint (flat config in `eslint.config.js`)
- `npm run preview` — serve the built output

There is no test runner and no separate typecheck script (`tsc -p tsconfig.app.json --noEmit` works if needed).

## Architecture

- The entire UI lives in one component, `src/App.tsx`: fixed nav plus sections anchored by id (`#home`, `#services`, `#about`, `#contact`). Add new sections there and link them from the nav via hash anchors.
- SEO is handled in two places that must be kept consistent: static meta tags in `index.html` (title, description, OG tags), and a schema.org `ProfessionalService` JSON-LD object (`structuredData` at the top of `src/App.tsx`, rendered in a `<script>`). Contact details (phone, email, license no.) appear in both the JSON-LD and the page body.
- `public/` holds static assets (`og-image.svg`, `scale.svg`, `site.webmanifest`). Note the JSON-LD references `og-image.jpg` while the repo has `og-image.svg`.
- Deployment is Vercel (`vercel.json`): builds with Vite and rewrites all routes to `/index.html`.
- `dist/` is committed to git (not in `.gitignore`), so builds produce tracked changes in `dist/`.
- All user-facing copy is in Serbian (Latin script).
