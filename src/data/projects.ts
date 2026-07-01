// Single source of truth for every project. Edit here; home cards and
// case-study pages both read from this file.
export const projects = [
  {
    "slug": "risk",
    "caseTitle": "Three ways to measure a $1M portfolio's worst day",
    "desc": "Historical, parametric, and Monte Carlo Value-at-Risk on an 8-asset portfolio, stress-tested through COVID and the 2022 rate shock.",
    "badgeLabel": "Quant Finance",
    "badgeClass": "finance",
    "live": null,
    "dek": "Historical, parametric, and Monte Carlo Value-at-Risk on an 8-asset portfolio &mdash; stress-tested through the COVID crash and the 2022 rate shock &mdash; ending in a concrete rebalancing call.",
    "stats": [
      {
        "v": "$29,146",
        "l": "1-day 99% VaR (historical)"
      },
      {
        "v": "$5,100",
        "l": "Tail risk parametric missed"
      },
      {
        "v": "&minus;25%",
        "l": "VaR cut by diversification"
      },
      {
        "v": "0.73 &rarr; 0.89",
        "l": "Sharpe after rebalancing"
      }
    ],
    "sections": {
      "problem": "A portfolio's volatility tells you about an average day. It says almost nothing about the day that actually hurts. For an equity-heavy book, the question a risk committee cares about isn't &lsquo;how much does this bounce around&rsquo; &mdash; it's &lsquo;how much could we lose on a genuinely bad day, and how much should we trust that number?&rsquo; This project pins down the worst-case day three different ways and shows exactly where the comfortable answer is wrong.",
      "data": "Five years of daily adjusted-close prices for an 8-asset portfolio, pulled from Yahoo Finance via <code>yfinance</code> &mdash; roughly 2019 through 2024, deliberately chosen to span the COVID crash and the 2022 rate-hike bear market so the tail estimates are built on real stress rather than a calm sample.",
      "method": "Three Value-at-Risk methodologies were implemented side by side: <strong>historical simulation</strong> (reading the loss straight from the 1st percentile of actual returns), <strong>parametric</strong> (assuming a normal distribution), and <strong>Monte Carlo</strong> (simulating thousands of correlated return paths via Cholesky decomposition). An efficient-frontier optimiser then swept thousands of weight combinations to map the risk/return trade-off.",
      "finding": [
        "At 99% confidence, the historical 1-day VaR on a $1M portfolio is <strong>$29,146</strong> &mdash; but the parametric model, trusting a normal distribution, put it roughly $5,100 lower.",
        "That gap is the fat tail the normal curve can't see: the &lsquo;safe&rsquo; assumption understates the worst day by about a sixth &mdash; precisely when the number matters most."
      ],
      "recommendation": "Trimming the technology concentration and adding uncorrelated exposure cut the 99% VaR by about 25% while lifting the Sharpe ratio from 0.73 to 0.89 &mdash; less downside and better risk-adjusted return at the same time. For an equity-heavy manager, adding uncorrelated diversifiers is the most efficient risk lever available, and parametric VaR should never be the only number on the page."
    },
    "chart": {
      "type": "img",
      "title": "The analysis, live",
      "eyebrow": "Interactive in the repo &middot; static here",
      "images": [
        {
          "src": "https://raw.githubusercontent.com/PloypairaohPat/financial-portfolio-risk-analysis/main/reports/figures/efficient_frontier.png",
          "alt": "Efficient frontier",
          "caption": "Efficient frontier &mdash; thousands of weight combinations, risk vs. return."
        },
        {
          "src": "https://raw.githubusercontent.com/PloypairaohPat/financial-portfolio-risk-analysis/main/reports/figures/return_distribution_var.png",
          "alt": "Return distribution with VaR cutoff",
          "caption": "Return distribution with the 99% VaR threshold marked."
        }
      ]
    },
    "code": "https://github.com/PloypairaohPat/financial-portfolio-risk-analysis",
    "liveUrl": null,
    "card": {
      "title": "Financial Portfolio Risk Analysis",
      "summary": "Three Value-at-Risk methodologies on an 8-asset portfolio, stress-tested through the COVID crash and the 2022 rate shock — ending in a concrete rebalancing recommendation.",
      "readout": "<b>$29,146</b> — 1-day 99% VaR on $1M · diversification cuts tail risk 25%",
      "tools": [
        "Python",
        "NumPy",
        "SciPy",
        "yfinance"
      ],
      "tags": [
        "python",
        "finance"
      ]
    }
  },
  {
    "slug": "sql",
    "caseTitle": "A warehouse where every number is tested",
    "desc": "A 5-layer dbt + DuckDB pipeline turning raw operational tables into a tested, business-facing metrics layer with a published lineage graph.",
    "badgeLabel": "Analytics Engineering",
    "badgeClass": "ae",
    "live": null,
    "dek": "A five-layer dbt + DuckDB pipeline that turns raw operational tables into a trustworthy, business-facing metrics layer &mdash; with automated tests on every model and a published lineage graph.",
    "stats": [
      {
        "v": "18",
        "l": "dbt models, 5 layers"
      },
      {
        "v": "127",
        "l": "automated tests"
      },
      {
        "v": "100%",
        "l": "test pass rate"
      },
      {
        "v": "$319K",
        "l": "LTV in top 3 customers"
      }
    ],
    "sections": {
      "problem": "Dashboards are only as trustworthy as the tables underneath them, and most analytics breaks quietly: a join fans out, a null slips in, a metric definition drifts between two reports. The goal here was a warehouse where a business question &mdash; who are our best customers, which products carry revenue, where is delivery slipping &mdash; is answered from a single tested source of truth, not a one-off query someone has to re-verify.",
      "data": "The Northwind dataset &mdash; a classic operational schema of orders, customers, products, and employees: 8 source tables, about 830 orders across 91 customers &mdash; loaded as raw seeds and modelled upward into analytics-ready marts.",
      "method": "A five-layer dbt project on DuckDB: raw seeds &rarr; staging (typed, renamed, cleaned) &rarr; intermediate (joins and business logic) &rarr; a dimensional layer of facts and dimensions in a <strong>star schema</strong> &rarr; reporting marts the business actually reads. Every model carries tests &mdash; uniqueness, not-null, referential integrity, accepted values &mdash; and the whole graph is documented with a published lineage DAG.",
      "finding": [
        "<strong>18 models, 127 automated tests, a 100% pass rate</strong> &mdash; and from that tested layer the business signal is immediate: the top 3 customers alone carry over <strong>$319K</strong> in lifetime value, a single product (Côte de Blaye) drives $141K, and Argentina shows the weakest on-time delivery at 81%.",
        "Because every figure traces back through tested models, none of it needs re-checking by hand."
      ],
      "recommendation": "Promote this tested layer to the single source for customer and revenue reporting, and wire the test suite into CI so a failing test blocks a bad merge before it reaches a dashboard. The regional on-time-delivery gap is the first operational thread worth pulling &mdash; it's a margin problem hiding inside a logistics metric."
    },
    "chart": {
      "type": "img",
      "title": "The lineage graph",
      "eyebrow": "Generated by dbt docs",
      "images": [
        {
          "src": "https://raw.githubusercontent.com/PloypairaohPat/sql-analytics-engineering-project/main/docs/lineage_dag.png",
          "alt": "dbt lineage DAG",
          "caption": "The full dbt lineage graph &mdash; raw seeds through staging, dimensions, and facts to the reporting marts."
        }
      ]
    },
    "code": "https://github.com/PloypairaohPat/sql-analytics-engineering-project",
    "liveUrl": null,
    "card": {
      "title": "SQL Analytics Engineering",
      "summary": "A 5-layer dbt + DuckDB warehouse turning raw seeds into a business-facing metrics layer, with automated testing baked into every model and a published lineage DAG.",
      "readout": "<b>18 models</b> · <b>127 tests</b> · 100% pass rate",
      "tools": [
        "dbt Core",
        "DuckDB",
        "SQL",
        "Star Schema"
      ],
      "tags": [
        "sql"
      ]
    }
  },
  {
    "slug": "nlp",
    "caseTitle": "Telling real news from fabricated, at 97% F1",
    "desc": "A TF-IDF + XGBoost pipeline that separates fabricated articles from real reporting, wrapped in a paste-an-article app for live inference.",
    "badgeLabel": "NLP / ML",
    "badgeClass": "nlp",
    "live": null,
    "dek": "A linguistic-feature + TF-IDF + XGBoost pipeline that separates fabricated articles from real reporting, wrapped in a paste-an-article app for live inference.",
    "stats": [
      {
        "v": "97%",
        "l": "macro F1 score"
      },
      {
        "v": "14.4K",
        "l": "held-out test articles"
      },
      {
        "v": "TF-IDF",
        "l": "text representation"
      },
      {
        "v": "XGBoost",
        "l": "top model vs. baselines"
      }
    ],
    "sections": {
      "problem": "Fabricated news spreads because it's cheap to produce and hard to screen at volume &mdash; no newsroom can fact-check the entire feed by hand. A useful first line of defence isn't a verdict on truth (that needs human judgement) but a fast triage signal: a model that flags which articles read like fabrication and deserve a closer look, so reviewers spend their time where it counts.",
      "data": "Tens of thousands of labelled news articles across real and fabricated classes, cleaned and preprocessed with spaCy, then split into training and a held-out test set of about 14,400 articles the model never saw during training.",
      "method": "Articles were vectorised with <strong>TF-IDF</strong> over the cleaned text, alongside engineered linguistic features, and fed to several classifiers &mdash; logistic regression and tree ensembles among them. <strong>XGBoost</strong> came out ahead. The model sits behind a Streamlit interface where you paste an article and get a real-or-fake call with the model's confidence.",
      "finding": [
        "The XGBoost model reaches a <strong>97% macro F1</strong> on roughly 14,400 held-out articles &mdash; strong precision and recall on <em>both</em> classes, not just the easy majority.",
        "Macro-averaging is the point: it proves the model catches fabricated articles, not that it's riding the base rate of real ones."
      ],
      "recommendation": "Deploy this as a triage layer that ranks incoming articles by fabrication probability and routes the high-risk tail to human reviewers &mdash; it doesn't replace editorial judgement, it focuses it. The logged next step is a DistilBERT baseline, to test whether contextual embeddings beat the TF-IDF features on the hardest, most adversarial examples."
    },
    "chart": {
      "type": "ph",
      "title": "The live classifier",
      "eyebrow": "Streamlit &middot; ready to deploy",
      "phTitle": "Paste-an-article classifier",
      "note": "The Streamlit app is built and runs locally. Deploy it to Streamlit Cloud and it embeds here as a live demo &mdash; paste any article, get a real-or-fake call.",
      "btnLabel": "View the app code",
      "btnUrl": "https://github.com/PloypairaohPat/fake-news-detection-nlp-classifier"
    },
    "code": "https://github.com/PloypairaohPat/fake-news-detection-nlp-classifier",
    "liveUrl": null,
    "card": {
      "title": "Fake News Detection Classifier",
      "summary": "A spaCy → TF-IDF → XGBoost pipeline that separates fabricated from real news articles, packaged as a paste-an-article web app for live inference.",
      "readout": "<b>97% macro F1</b> · 14.4k held-out articles",
      "tools": [
        "scikit-learn",
        "XGBoost",
        "spaCy",
        "Streamlit"
      ],
      "tags": [
        "python",
        "ml"
      ]
    }
  },
  {
    "slug": "fraud",
    "caseTitle": "Tuning a fraud model to dollars, not F1",
    "desc": "Five model-and-resampling combinations benchmarked on a 0.17%-fraud dataset, then a cost function that turns the threshold into dollars per day.",
    "badgeLabel": "Financial Crime / ML",
    "badgeClass": "fraud",
    "live": null,
    "dek": "Five model-and-resampling combinations benchmarked on a 0.17%-fraud dataset, then a cost function that turns the decision threshold into dollars per day.",
    "stats": [
      {
        "v": "0.859",
        "l": "PR-AUC (XGBoost + SMOTE)"
      },
      {
        "v": "0.17%",
        "l": "fraud base rate"
      },
      {
        "v": "$2,615",
        "l": "daily cost at best threshold"
      },
      {
        "v": "0.49",
        "l": "cost-optimal threshold"
      }
    ],
    "sections": {
      "problem": "Fraud is a needle-in-a-haystack problem &mdash; here, roughly 1 in 600 transactions. Accuracy is a trap: a model that approves everything is 99.8% accurate and catches zero fraud. The real questions are how well the model <em>ranks</em> fraud above legitimate activity, and where to set the cutoff &mdash; because every threshold trades missed fraud against false alarms, and both cost money.",
      "data": "A public dataset of about 284,000 real credit-card transactions with anonymised features, of which only <strong>0.17%</strong> are fraudulent &mdash; a severe class imbalance that mirrors production reality and makes naive accuracy meaningless.",
      "method": "Five combinations of model and resampling were benchmarked &mdash; logistic regression and tree ensembles, with and without SMOTE oversampling &mdash; and compared on <strong>precision-recall AUC</strong> rather than ROC, the right metric when the positive class is rare. SHAP values explain which features drive each flag, and a cost model assigns dollar values to false negatives and false positives to locate the economically optimal threshold.",
      "finding": [
        "XGBoost with SMOTE led at a <strong>PR-AUC of 0.859</strong>. But the sharper result is economic: instead of defaulting to a 0.5 cutoff, optimising the threshold against the cost function lands at <strong>0.49</strong> and a projected <strong>$2,615 per day</strong> in combined fraud-and-review cost.",
        "That's a number a manager can budget against &mdash; derived from the business cost, not assumed from a default."
      ],
      "recommendation": "Ship XGBoost + SMOTE at the cost-optimal threshold, and recompute that threshold on a schedule as fraud patterns and volume drift &mdash; the optimal cutoff is not static. Keep the SHAP explanations in the review queue so analysts see <em>why</em> each transaction was flagged, which speeds review and builds the audit trail a regulator will ask for."
    },
    "chart": {
      "type": "ph",
      "title": "PR curve &amp; SHAP summary",
      "eyebrow": "Plotly &middot; to be embedded",
      "phTitle": "Interactive PR-curve comparison",
      "note": "The PR curves for all five models and the SHAP feature-importance summary aren't committed yet. Regenerate them as interactive Plotly charts and they embed here &mdash; hover any model to compare precision-recall at every threshold.",
      "btnLabel": "View the modelling code",
      "btnUrl": "https://github.com/PloypairaohPat/fraud-detection-imbalanced-classification"
    },
    "code": "https://github.com/PloypairaohPat/fraud-detection-imbalanced-classification",
    "liveUrl": null,
    "card": {
      "title": "Fraud Detection on Imbalanced Data",
      "summary": "Five model/resampling combinations benchmarked on a 0.17%-fraud dataset by PR-AUC, then a business cost function that turns a decision threshold into dollars per day.",
      "readout": "<b>PR-AUC 0.859</b> · $2,615/day at the cost-optimal threshold",
      "tools": [
        "scikit-learn",
        "XGBoost",
        "imbalanced-learn",
        "SHAP"
      ],
      "tags": [
        "python",
        "ml",
        "finance"
      ]
    }
  },
  {
    "slug": "compliance",
    "caseTitle": "Proving a data audit catches what it claims",
    "desc": "A simulated GDPR/CCPA audit on 50,000 records, seeded with known violations so every detector can be graded against an answer key.",
    "badgeLabel": "Data Governance",
    "badgeClass": "gov",
    "live": null,
    "dek": "A simulated GDPR/CCPA audit on 50,000 records, deliberately seeded with violations so every detector, scanner, and masking rule can be proven against a known answer key.",
    "stats": [
      {
        "v": "50K",
        "l": "records audited"
      },
      {
        "v": "100%",
        "l": "of 4,447 violations caught"
      },
      {
        "v": "847",
        "l": "unmasked PII patterns"
      },
      {
        "v": "3.2ms",
        "l": "SAR lookup query"
      }
    ],
    "sections": {
      "problem": "Most data-governance tooling makes a claim no one verifies: that it finds the violations. But how do you <em>know</em> an audit caught everything, when you don't know what was there to begin with? This project flips the usual approach &mdash; it manufactures a dataset with a known number of planted violations, so the audit can be graded against an answer key instead of taken on faith.",
      "data": "50,000 synthetic customer records generated with Faker, deliberately seeded with <strong>4,447 known violations</strong> &mdash; retention-period breaches, unmasked PII, and consent gaps &mdash; spread across the dataset, giving an exact ground truth to measure detection against.",
      "method": "A layered audit: rule-based detectors for retention and consent violations, pattern scanners for unmasked PII (emails, card numbers, national IDs), and dbt models that apply and verify masking. <strong>Great Expectations</strong> enforces data-quality contracts, and a DuckDB query layer answers regulator-style requests &mdash; including a Subject Access Request lookup &mdash; on demand.",
      "finding": [
        "The audit caught <strong>100% of the 4,447 seeded violations</strong> &mdash; including 847 unmasked PII patterns and roughly 2,400 retention breaches &mdash; with zero known misses against the answer key.",
        "And a Subject Access Request, the query a regulator times you on, returns in <strong>3.2 milliseconds</strong>: compliance that's not just correct but operationally fast."
      ],
      "recommendation": "Run this audit on a schedule against production extracts and alert on any non-zero violation count, so governance shifts from an annual scramble to a continuous control. The seeded-ground-truth pattern is worth keeping as a permanent test harness &mdash; it's the only way to prove the audit still works after every schema change."
    },
    "chart": {
      "type": "ph",
      "title": "Great Expectations report",
      "eyebrow": "HTML report in the repo",
      "phTitle": "Interactive data-quality report",
      "note": "The full Great Expectations report (<code>ge_report.html</code>) is generated and committed to the repo. Host it alongside the site and it embeds here as an interactive, expandable data-quality report.",
      "btnLabel": "View the audit code",
      "btnUrl": "https://github.com/PloypairaohPat/regulatory-compliance-data-audit"
    },
    "code": "https://github.com/PloypairaohPat/regulatory-compliance-data-audit",
    "liveUrl": null,
    "card": {
      "title": "Regulatory Compliance Data Audit",
      "summary": "A simulated GDPR/CCPA audit on 50k records, deliberately seeded with violations so every detector, scanner, and dbt masking model can be proven to catch them.",
      "readout": "<b>100%</b> of 4,447 violations caught · SAR query in <b>3.2ms</b>",
      "tools": [
        "Python",
        "DuckDB",
        "dbt",
        "Great Expectations"
      ],
      "tags": [
        "python",
        "sql"
      ]
    }
  },
  {
    "slug": "monitoring",
    "caseTitle": "Catching model decay before the metrics move",
    "desc": "Drift detection for a production fraud model that flagged a distribution shift about two weeks before its F1 score showed any damage.",
    "badgeLabel": "MLOps",
    "badgeClass": "mlops",
    "live": "Live dashboard",
    "dek": "A drift-detection system for a production fraud model that flagged a distribution shift roughly two weeks before its F1 score showed any damage.",
    "stats": [
      {
        "v": "0.004 &rarr; 2.96",
        "l": "PSI on key feature"
      },
      {
        "v": "Week 5",
        "l": "Drift first flagged"
      },
      {
        "v": "0.91&ndash;1.00",
        "l": "F1 over same window"
      },
      {
        "v": "~2 wks",
        "l": "Lead time gained"
      }
    ],
    "sections": {
      "problem": "Fraud models decay silently. A classifier that scored a strong F1 in validation can keep reporting healthy accuracy for weeks after the behaviour underneath it has shifted &mdash; because the labels that let you measure performance arrive late. <strong>Performance is a lagging indicator.</strong> By the time the F1 score visibly drops, the losses are already booked. The question this project answers: can we detect that decay before it ever reaches a performance metric?",
      "data": "A production-style credit-card fraud model was scored against a streaming feature set, replayed week over week. Partway through the replay a deliberate distribution shift was injected &mdash; a known, datable event &mdash; so the monitor could be held to an objective test: did it catch the shift, and how early?",
      "method": "Each cycle computes a <strong>Population Stability Index (PSI)</strong> and a <strong>Kolmogorov&ndash;Smirnov</strong> test on every input feature, with Evidently generating the drift reports and MLflow logging every run so the history is queryable. An Airflow DAG orchestrates the loop on a schedule, and a Streamlit dashboard renders the drift timeline so a reviewer can read the model's health at a glance &mdash; no notebook required.",
      "finding": [
        "<strong>PSI on the key feature climbed from 0.004 to 2.96 &mdash; roughly an 800&times; jump, far past the 0.2 line that conventionally marks significant drift &mdash; and the monitor flagged it at Week 5.</strong>",
        "Over that same window the model's F1 never moved: it held between 0.91 and 1.00. The drift signal led the performance signal by about two weeks &mdash; early warning while accuracy still looks fine. That gap is the entire value of the system."
      ],
      "recommendation": "Promote a PSI breach above 0.2 to an automated retrain trigger and an on-call page, rather than waiting on the weekly performance review. For a fraud model, two weeks of lead time is the difference between a controlled retrain and a quarter of mislabelled transactions. Keep the KS tests and Evidently reports as the diagnostic layer an engineer opens <em>after</em> the alert."
    },
    "chart": {
      "type": "iframe",
      "title": "The live dashboard",
      "eyebrow": "Interactive &middot; Streamlit Cloud",
      "src": "https://fraud-drift-monitor.streamlit.app/?embed=true",
      "caption": "Embedded live &mdash; drift timeline, PSI by feature, and per-cycle status.",
      "openUrl": "https://fraud-drift-monitor.streamlit.app/"
    },
    "code": "https://github.com/PloypairaohPat/automated-model-monitoring-drift-detection",
    "liveUrl": "https://fraud-drift-monitor.streamlit.app/",
    "card": {
      "title": "Automated Model Monitoring",
      "summary": "A drift-detection pipeline that caught a distribution shift weeks before any performance metric moved — PSI + KS tests, an Airflow loop, and a live Streamlit dashboard.",
      "readout": "PSI <b>0.004 → 2.96</b> · drift caught at Week 5 while F1 stayed flat",
      "tools": [
        "Evidently",
        "MLflow",
        "Airflow",
        "Streamlit"
      ],
      "tags": [
        "python",
        "ml"
      ]
    }
  },
  {
    "slug": "ledger",
    "caseTitle": "A personal-finance platform, built to production standards",
    "desc": "A full-stack finance app on Plaid Production: a TypeScript pipeline cleaning real bank feeds, a 7-detector alerts engine, and an explainable 0-100 health score.",
    "badgeLabel": "Engineering",
    "badgeClass": "eng",
    "live": "Live (sign-in)",
    "dek": "A full-stack finance app on Plaid Production: a TypeScript data pipeline that cleans real bank feeds, a seven-detector alerts engine, and an explainable 0&ndash;100 financial health score.",
    "stats": [
      {
        "v": "Plaid",
        "l": "production bank data"
      },
      {
        "v": "7",
        "l": "alert detectors"
      },
      {
        "v": "0&ndash;100",
        "l": "financial health score"
      },
      {
        "v": "Daily",
        "l": "automated sync (cron)"
      }
    ],
    "sections": {
      "problem": "Most budgeting apps stop at showing you a list of transactions. The harder, more useful problem is turning a messy, real-time bank feed into something that tells you when to pay attention &mdash; a missed paycheck, a subscription that quietly went up, a budget about to blow &mdash; plus one honest read on whether your finances are improving. That's an engineering problem as much as a finance one.",
      "data": "Live transaction, balance, and account data from real financial institutions via <strong>Plaid's Production environment</strong>, synced on a schedule and normalised through a TypeScript cleaning pipeline that resolves pending transactions, deduplicates, and maps merchants before anything reaches the UI.",
      "method": "A React + TypeScript front end over an Express + Prisma API, with Clerk handling authentication and a <code>node-cron</code> job pulling fresh data daily. The core logic is a <strong>seven-detector alerts engine</strong> (large transactions, budget pace, low balance, missed paycheck, subscription price hikes, and more) and a transparent <strong>0&ndash;100 financial-health score</strong> that weights distinct signals so the number is explainable, not a black box.",
      "finding": [
        "The result is a working product, not a prototype: real bank data flowing through a daily pipeline into seven live alert detectors and an explainable health score.",
        "The engineering signal is the point &mdash; authentication, a typed data pipeline, scheduled jobs, and a real third-party financial integration, end to end."
      ],
      "recommendation": "This is the project to point to when a role wants full-stack range alongside data work &mdash; it proves the ability to ship a real, secure, integrated application, not just analyse a static dataset. The next step on its own roadmap is hardening for multi-user scale: a custom domain and a managed VPS deployment."
    },
    "chart": {
      "type": "ph",
      "title": "The live app",
      "eyebrow": "Plaid Production &middot; auth-gated",
      "phTitle": "Screenshots needed here",
      "note": "The app is live, but it's gated behind sign-in because it handles real bank data &mdash; so most viewers can't see it. Add 2&ndash;3 screenshots of the dashboard, the alerts feed, and the health score; they're the single highest-impact addition to this case study.",
      "btnLabel": "Open the live app",
      "btnUrl": "https://finance-dashboard-tau-two.vercel.app"
    },
    "code": "https://github.com/PloypairaohPat/finance-dashboard",
    "liveUrl": "https://finance-dashboard-tau-two.vercel.app",
    "card": {
      "title": "Ledger — Personal Finance Platform",
      "summary": "A full-stack finance app on Plaid Production: a TypeScript cleaning pipeline, a 7-detector alerts engine, and an explainable 0–100 financial health score, synced daily.",
      "readout": "Plaid Production · <b>7</b> alert detectors · <b>0–100</b> health score",
      "tools": [
        "React",
        "TypeScript",
        "Node",
        "Prisma",
        "Plaid"
      ],
      "tags": [
        "fullstack"
      ]
    }
  }
] as const;

export type Project = (typeof projects)[number];
