# Developer Portfolio

A clean, modern single-page portfolio built with React + Vite. Dark/light theme toggle, scroll reveals, and a git-log-style experience timeline. All content lives in one file.

## Quick start

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm run build      # production build into /dist
```

## Customize (5 minutes)

1. **Edit `src/data.js`** — name, tagline, socials, skills, projects, and experience all live here. Nothing else needs to change.
2. **Resume** — drop your `resume.pdf` into `/public`, or set `resumeUrl: ""` in `data.js` to hide the button.
3. **Title & meta** — update `<title>` and the meta description in `index.html`.
4. **Colors (optional)** — theme tokens are CSS variables at the top of `src/styles.css` under `:root[data-theme="dark"]` and `:root[data-theme="light"]`. Change `--accent` to re-skin the whole site.

## Deploy to Vercel (recommended)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel auto-detects Vite. Click **Deploy**. Done — every push to `main` redeploys automatically.

## Deploy to GitHub Pages (alternative)

1. In `vite.config.js`, set `base: "/<your-repo-name>/"`.
2. Build and publish `/dist` (easiest via the `gh-pages` package or a GitHub Action).

Note: Vercel is the smoother path — no base-path changes and free HTTPS on a `*.vercel.app` domain, with custom domain support.

## Stack

- React 18 + Vite 5 — no UI framework, no CSS framework
- Plain CSS with theme variables (easy to re-skin)
- Fonts: Bricolage Grotesque, Instrument Sans, JetBrains Mono (Google Fonts)
- Accessible: keyboard focus styles, `prefers-reduced-motion` respected, no-flash theme bootstrap
