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
- **Layout, nav, footer, analytics, meta tags**: `src/layouts/Base.astro` and `src/components/`.

## Before launch (fill these in)
- Add `public/resume.pdf`, then restore the résumé links in the nav, footer, and About page.
- Confirm work-authorization wording with GMU's international student office before publishing it.
- Enable Vercel Web Analytics in the Vercel project dashboard after deploying.
