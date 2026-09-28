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

## Personal details still needed
- Email address and LinkedIn profile URL: add the real links to `src/components/Footer.astro` and `src/pages/about.astro` when available. They are currently omitted.
- Résumé PDF: place it at `public/resume.pdf` and rebuild. `src/data/site.ts` checks for the file at build time; navigation, About, and footer links appear only when it exists.

## Analytics and site metadata
The site URL is `https://www.pat-ploypairaoh.com`. `astro.config.mjs` drives canonical URLs, Open Graph URLs, and the sitemap. Keep `public/robots.txt` in sync if the domain changes. The existing `public/favicon.svg` and `public/og.png` are included in the build.

`public/og.png` is a 1200×630 Data Analyst social card. `public/og-source.svg` is an editable vector companion; font rendering may vary from the PNG. Keep the name, positioning, dimensions, and metadata description in sync when refreshing the image.

Analytics is off by default. To enable it, set `PUBLIC_GA_MEASUREMENT_ID` to your real GA4 measurement ID in the build environment, then rebuild. `src/layouts/Base.astro` emits the loader and configuration only for a correctly formatted ID; an unset, malformed, or dummy `G-XXXXXXXXXX` value emits neither script. The measurement ID is public, not a secret. Use your analytics account to confirm collection after deployment.

## Content and review
The NLP dataset size and reported held-out result follow the [project README](https://github.com/PloypairaohPat/fake-news-detection-nlp-classifier#readme). Its case study distinguishes same-aggregation evaluation from independent-source or time-based evaluation. SQL counts remain 19 models and 132 tests.

The [monitoring replay](https://github.com/PloypairaohPat/automated-model-monitoring-drift-detection#key-result) reports maximum feature PSI rising from 0.004 to 2.96 (740×), a Week 5 warning, and no F1 threshold breach during 12 weeks. It does not establish a two-week lead time to performance degradation. The [risk analysis](https://github.com/PloypairaohPat/financial-portfolio-risk-analysis#readme) separates its 25% diversification benefit from the recommended 70/30 allocation blend (Sharpe 0.725 → 0.823).

Ledger deliberately shows no personal banking screenshots. Its bank-connected workspace requires sign-in; public demonstrations should use synthetic data.

After changes, run `npm run build` and `npm run preview`. Check mobile navigation with Tab and Enter, filter buttons with Enter and Space, visible focus, and layouts at narrow widths. Navigation stays visible without JavaScript. External apps may require sign-in or wake from sleep; HTTP reachability alone does not verify their interactive behavior.
