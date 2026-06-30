# AGENTS.md

## Cursor Cloud specific instructions

This repo is the static marketing/landing website for **四谷ラボ (Yotsuya Lab)**, built with **Astro 5** (TypeScript). It is a single product — no backend, database, or auth.

### Services
- **Astro dev server** is the only service. Start it with `npm run dev` (script in `package.json`); it serves the whole site at `http://localhost:4321/`.
- Other commands: `npm run build` (outputs static site to `dist/`), `npm run preview` (serve the built `dist/`).

### Non-obvious notes
- **No lint setup.** There is no `lint` script and no ESLint config. `npx astro check` is NOT usable out of the box — it requires the un-installed `@astrojs/check` package and will hang on an interactive install prompt with no TTY. Use `npm run build` as the type/content validation step instead.
- The "最新情報 / News" section fetches a live RSS feed from `https://blog.428lab.net/rss` in the browser. It needs outbound internet to populate; if unreachable it fails gracefully and does not break the rest of the page.
- `.nvmrc` pins Node 20, but `engines` only requires `>=18.20.8`; the environment's default Node 22 works fine for dev and build.
- Deploy target is Firebase Hosting (`firebase.json` serves `dist/`); not needed for local development.
