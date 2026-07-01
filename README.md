# data-portfolio-website

Astro portfolio. Seven projects, one URL.

## Run
```
npm install
npm run dev      # local dev at http://localhost:4321
npm run build    # static output to dist/
```

## Where to edit
- **All project content** lives in `src/data/projects.ts` — one object per project drives both the home card and the case-study page. Add a project by adding an object.
- **Theme / colours / fonts**: `src/styles/global.css` (CSS variables at the top).
- **Layout, nav, footer, GA4, meta tags**: `src/layouts/Base.astro` and `src/components/`.

## Before launch (fill these in)
- Replace `G-XXXXXXXXXX` in `src/layouts/Base.astro` with your GA4 Measurement ID.
- Set your real domain in `astro.config.mjs`.
- Add `public/resume.pdf`, `public/og.png`, and update email / LinkedIn in `src/components/Footer.astro` and `src/pages/about.astro`.
- Fill the two bracketed bio lines in `src/pages/about.astro`.
