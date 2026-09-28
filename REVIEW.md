# Portfolio polish review

Branch: `polish/portfolio-review`. Final review: 2026-09-27. The earlier polish work was already present as uncommitted changes on this branch and was preserved. No applicable `AGENTS.md` was found. The reviewed source and assets are intended for a PR into `main`; merging and manual deployment remain for the owner. `portfolio-review.patch` and temporary verification files are excluded.

## Changed files

- `src/pages/about.astro`: factual education and analysis bio; removed writing instructions, photo placeholder, and fake contact links.
- `src/components/Nav.astro`, `src/components/Footer.astro`, `src/data/site.ts` (new): real GitHub retained; résumé links depend on `public/resume.pdf` being a file at build time; named navigation and current-page state.
- `src/pages/index.astro`: Data Analyst positioning, seven linked domain chips, pressed filter states, result announcements, and an empty-results message.
- `src/styles/global.css`: visible, wrapping mobile navigation; hidden-card behavior; narrow-layout spacing and wrapping; existing focus styling retained.
- `src/data/projects.ts`: static Risk chart label, reader-facing explanations for code-only/sign-in experiences, and limitations/next steps for all seven projects. NLP cites its README and distinguishes same-aggregation results from independent evaluation. SQL remains 19 models and 132 tests, flags Argentina's small sample, and removes the unsupported margin claim. Monitoring uses “more than a 700× increase” for 0.004 → 2.96 and distinguishes the Week 5 warning from the Week 6 critical alert; the unsupported two-week lead-time claim is removed. Risk now separates the 25% diversification comparison from the recommended 70/30 blend (Sharpe 0.725 → 0.823). Fraud costs are identified as projections, and compliance findings are scoped to the synthetic benchmark.
- `src/components/Card.astro`: Home badges and external links retain the project-specific dashboard/sign-in label instead of a generic “Live”.
- `src/pages/skills.astro`: Python and pandas/NumPy references identify the five relevant projects, excluding the SQL-only warehouse and TypeScript app; Airflow is labelled as a DAG deliverable.
- `src/pages/projects/[slug].astro`: semantic section headings, limitations, a next-case-study cycle, and correct rendering of existing HTML entities in chart headings.
- `astro.config.mjs`, `public/robots.txt`, `src/pages/sitemap.xml.ts`: custom domain; sitemap paths match canonical trailing slashes.
- `src/layouts/Base.astro`: GA scripts require a configured measurement ID with valid syntax and exclude the known dummy ID; Open Graph image dimensions and descriptive alt text are included.
- `public/og.png`, `public/og-source.svg`: refreshed 1200×630 Data Analyst social card and an editable vector companion in the existing lavender, purple, and pink style. No headshot or financial records were added.
- `README.md`: personal-detail setup, analytics configuration, content sources, and review guidance.
- `REVIEW.md` (new): this handoff.

## Verification

- `npm run build`: passed; 10 pages, including `/projects/risk/`, `/projects/sql/`, `/projects/nlp/`, `/projects/fraud/`, `/projects/compliance/`, `/projects/monitoring/`, and `/projects/ledger/`. The initial sandboxed attempt failed with Vite `spawn EPERM`; the build passed outside the sandbox.
- Generated HTML: no dead internal paths/fragments, fake contact links, missing résumé links, public writing instructions, duplicate IDs, missing image alt attributes, or missing iframe titles. Each page has one main landmark and one H1.
- Canonical URLs, `og:url`, and all 10 sitemap entries use `https://www.pat-ploypairaoh.com`.
- Headless Chrome: all 10 pages checked at 320, 375, 839, 840, and 1280px without horizontal overflow. Tab/Enter navigation, visible focus, Enter/Space filtering, pressed states, an induced empty-results case, restoring All, and navigation without JavaScript passed. No page JavaScript exceptions were observed.
- Analytics: the earlier review checked isolated builds with dummy, malformed, and valid-format test values. Those matrix checks were not repeated in the final pass; the ordinary unconfigured build has no analytics scripts.
- Public HTTP checks: GitHub profile and all seven repositories, all three chart PNGs, SQL dashboard, and Streamlit main/embed URLs returned 200. The NLP README fragment matches its limitations heading. Ledger's app could not be verified: PowerShell reported a TLS trust failure and Chrome returned `NET::ERR_CERT_AUTHORITY_INVALID`. No certificate bypass was used.
- Assets: `/og.png` returned HTTP 200 with `image/png` and dimensions 1200×630; the refreshed wording was visually inspected. The editable SVG is a companion, not a pixel-identical source for the generated PNG. `favicon.svg` remains included.
- Project numbers and scope were cross-checked against all seven public project READMEs. The portfolio corrects the monitoring README's arithmetic: 2.96 / 0.004 = 740. Monitoring's weekly table does not support a two-week lead time. The current risk README distinguishes allocation alternatives; the portfolio follows its recommended blend.
- `git diff --check`: passed.

## Needed and unverified

No professional email, LinkedIn URL, or résumé PDF was supplied. Corresponding links remain hidden. `src/data/site.ts` retains its build-time file check, and all built pages were checked for absent résumé links. A supplied-PDF/download flow could not be tested without a real PDF; no dummy was created. Optional: a real GA4 ID to enable analytics.

No safe Ledger screenshots exist in this portfolio repo. The case study uses an explanation and existing app/code links; no banking records were accessed or added. Recheck the app's certificate and public landing page before sharing its app link.

Browser access was available through local headless Chrome. Real-device/Safari/Firefox testing, assistive-technology testing, and a full contrast audit were not performed. External HTTP checks do not verify complete dashboard workflows; Ledger's authenticated functionality and actual GA collection were not tested. Custom-domain deployment, DNS, and search-engine indexing were outside this local patch.

## Social image provenance

The built-in imagegen tool refreshed the existing image, followed by resizing to 1200×630. Final prompt: preserve the pale lavender background, dark heading, muted subtitle, purple-to-pink rules, overlapping-dot mark, typography, and layout; retain “Ploypairaoh Pat”, “PLOYPAIRAOH PAT”, and “Seven projects · one URL”; replace the subtitle with “Data Analyst · Python, SQL & machine learning” and “Turning data into clearer business decisions.” Remove the old tagline and add no portraits, financial records, invented claims, or watermark. Final assets: `public/og.png` and editable companion `public/og-source.svg`.
