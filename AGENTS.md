# AGENTS.md

## Cursor Cloud specific instructions

This repo is the **428lab / 四谷ラボ** static website built with **Astro 5** (static output). It deploys to Firebase Hosting (`dist/` → see `firebase.json`).

### Services
There is a single service: the Astro site. Standard scripts are in `package.json`.

- Dev server: `npm run dev` (defaults to `http://localhost:4321/`).
- Build: `npm run build` (outputs static files to `dist/`).
- Preview built output: `npm run preview`.

### Notes / gotchas
- Node is managed via `nvm`; `.nvmrc` pins Node 20, but `package.json` engines only require `>=18.20.8` and the site builds/runs fine on the Node 22 already present in the VM. No need to install Node 20.
- There is **no lint or test script** configured (no `lint`/`test` in `package.json`, no test framework). `npm run build` is the de-facto correctness check since it type-checks/transforms via Vite/Astro.
- The 最新情報 (News) section in `src/components/NewsFeed.astro` fetches a live RSS feed from `https://blog.428lab.net/rss` at runtime in the browser. It requires outbound network access to populate; without it the section shows "読み込みに失敗しました" but the rest of the page still renders.
- `src/config/loadLinks.ts` reads `src/config/links.yaml` at build time using `process.cwd()`, so run Astro commands from the repo root.
