// Single source of truth for every project. Edit here; home cards and
// case-study pages both read from this file.
export const projects = [
  {
    "slug": "risk",
    "caseTitle": "Three ways to estimate a $1M portfolio's downside risk",
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
        "v": "0.725 &rarr; 0.823",
        "l": "Sharpe with 70/30 blended tilt"
      }
    ],
    "sections": {
      "limitations": "These estimates depend on the historical window, portfolio weights, and distribution assumptions. VaR is a loss threshold, not a maximum possible loss. Next steps are to backtest exceedances on later periods, compare expected shortfall, and include transaction costs in the rebalancing analysis.",
      "problem": "A portfolio's volatility tells you about an average day. It says almost nothing about the day that actually hurts. For an equity-heavy book, the question a risk committee cares about isn't &lsquo;how much does this bounce around&rsquo; &mdash; it's &lsquo;how much could we lose on a genuinely bad day, and how much should we trust that number?&rsquo; This project compares three estimates of a downside loss threshold and examines how their assumptions affect the result.",
      "data": "1,508 trading days of daily returns for an 8-asset portfolio, using adjusted-close prices from Yahoo Finance via <code>yfinance</code> over 2019&ndash;2024. The window spans the COVID crash and the 2022 rate-hike bear market.",
      "method": "Three Value-at-Risk methodologies were implemented side by side: <strong>historical simulation</strong> (reading the loss straight from the 1st percentile of actual returns), <strong>parametric</strong> (assuming a normal distribution), and <strong>Monte Carlo</strong> (simulating thousands of correlated return paths via Cholesky decomposition). An efficient-frontier optimiser then swept thousands of weight combinations to map the risk/return trade-off.",
      "finding": [
        "At 99% confidence, the historical 1-day VaR on a $1M portfolio is <strong>$29,146</strong> &mdash; but the parametric model, trusting a normal distribution, put it roughly $5,100 lower.",
        "That gap is the fat tail the normal curve can't see: the &lsquo;safe&rsquo; assumption estimates the loss threshold about a sixth lower &mdash; precisely when the number matters most."
      ],
      "recommendation": "The project recommends a 70/30 blend of the equal-weight portfolio and the maximum-Sharpe allocation: Sharpe rises from 0.725 to 0.823 while 99% VaR remains essentially flat. In a separate comparison, adding gold and Treasury exposure to the six-equity portfolio reduces 99% VaR by about 25%, with lower annualised return. Evaluate these trade-offs across market regimes and after transaction costs before using either allocation."
    },
    "chart": {
      "type": "img",
      "title": "Key charts",
      "eyebrow": "Static figures from the analysis",
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
    "live": "Dashboard",
    "dek": "A five-layer dbt + DuckDB pipeline that turns raw operational tables into a trustworthy, business-facing metrics layer &mdash; with automated tests on every model and a published lineage graph.",
    "stats": [
      {
        "v": "19",
        "l": "dbt models, 5 layers"
      },
      {
        "v": "132",
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
      "limitations": "Northwind is a small sample dataset; its customer and delivery patterns do not establish results for a current business. The 19 models and 132 tests cover defined checks, not every possible data issue. Next steps are freshness checks, changing-source scenarios, and reconciliation of metric definitions with business requirements.",
      "method": "A five-layer dbt project on DuckDB: raw seeds &rarr; staging (typed, renamed, cleaned) &rarr; intermediate (joins and business logic) &rarr; a dimensional layer of facts and dimensions in a <strong>star schema</strong> &rarr; reporting marts the business actually reads. Every model carries tests &mdash; uniqueness, not-null, referential integrity, accepted values &mdash; and the whole graph is documented with a published lineage DAG.",
      "finding": [
        "<strong>19 models, 132 automated tests, a 100% pass rate</strong> &mdash; and from that tested layer the business signal is immediate: the top 3 customers alone carry over <strong>$319K</strong> in lifetime value, a single product (Côte de Blaye) drives $141K, and Argentina shows the lowest on-time delivery rate at 81%. Argentina has a small sample of orders, so this difference needs further investigation.",
        "The model lineage and tests make each figure easier to trace and review; business definitions still need validation."
      ],
      "recommendation": "Promote this tested layer to the single source for customer and revenue reporting, and wire the test suite into CI so a failing test blocks a bad merge before it reaches a dashboard. Investigate the regional on-time-delivery gap by checking sample sizes, order mix, and shipping patterns before recommending operational changes. These results do not establish an effect on margins."
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
    "liveUrl": "https://northwind-analytics-pat.netlify.app",
    "card": {
      "title": "SQL Analytics Engineering",
      "summary": "A 5-layer dbt + DuckDB warehouse turning raw seeds into a business-facing metrics layer, with automated testing baked into every model and a published lineage DAG.",
      "readout": "<b>19 models</b> · <b>132 tests</b> · 100% pass rate",
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
    "caseTitle": "Classifying WELFake articles at 97% macro F1",
    "desc": "A TF-IDF + XGBoost classifier reporting 97% macro F1 on a held-out WELFake split, with evaluation notebooks and Streamlit app code.",
    "badgeLabel": "NLP / ML",
    "badgeClass": "nlp",
    "live": null,
    "dek": "A TF-IDF + XGBoost pipeline evaluated on WELFake articles, with notebooks and a Streamlit interface for exploring single-article predictions.",
    "stats": [
      {
        "v": "97%",
        "l": "macro F1 score"
      },
      {
        "v": "14,419",
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
      "data": "WELFake contains <strong>72,134 articles</strong> aggregated from four public sources. The project uses a stratified split: 57,715 training articles and <strong>14,419 held-out articles from the same aggregation</strong>.",
      "method": "Title and article text are combined, cleaned with spaCy, and encoded with <strong>TF-IDF</strong> for an <strong>XGBoost</strong> classifier. The repository includes the training notebooks and a Streamlit interface for single-article predictions.",
      "finding": [
        "The project reports <strong>97% macro F1</strong> on the 14,419-article held-out WELFake split.",
        "Macro F1 gives both classes equal weight; this result does not establish accuracy on independent news sources."
      ],
      "recommendation": "Treat the classifier as a benchmark experiment. Evaluate it on independent sources and later articles before considering a human-reviewed triage use case.",
      "limitations": "Source and formatting artifacts may correlate with labels, allowing the model to learn shortcuts rather than evidence of misinformation. Their contribution to the score was not measured here. Next steps are independent-source or time-based evaluation and checks for boilerplate and duplicate articles. See the <a href=\"https://github.com/PloypairaohPat/fake-news-detection-nlp-classifier#limitations--generalization\">project README</a> for the reported evaluation scope."
    },
    "chart": {
      "type": "ph",
      "title": "Explore the classifier",
      "eyebrow": "Notebooks and app code",
      "phTitle": "Paste-an-article classifier",
      "note": "View the evaluation notebooks and Streamlit source on GitHub. The README includes instructions for running the classifier locally.",
      "btnLabel": "View the app code",
      "btnUrl": "https://github.com/PloypairaohPat/fake-news-detection-nlp-classifier"
    },
    "code": "https://github.com/PloypairaohPat/fake-news-detection-nlp-classifier",
    "liveUrl": null,
    "card": {
      "title": "Fake News Detection Classifier",
      "summary": "A spaCy → TF-IDF → XGBoost pipeline evaluated on WELFake articles, with notebooks and Streamlit app code for exploring single-article predictions.",
      "readout": "<b>97% macro F1</b> · 14,419 held-out WELFake articles",
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
        "l": "projected daily cost"
      },
      {
        "v": "0.49",
        "l": "cost-optimal threshold"
      }
    ],
    "sections": {
      "problem": "Fraud is a needle-in-a-haystack problem &mdash; here, roughly 1 in 600 transactions. Accuracy is a trap: a model that approves everything is 99.8% accurate and catches zero fraud. The real questions are how well the model <em>ranks</em> fraud above legitimate activity, and where to set the cutoff &mdash; because every threshold trades missed fraud against false alarms, and both cost money.",
      "data": "A public dataset of about 284,000 real credit-card transactions with anonymised features, of which only <strong>0.17%</strong> are fraudulent &mdash; a severe class imbalance that makes naive accuracy meaningless.",
      "limitations": "The reported daily cost is a projection under the project's cost and volume assumptions, not measured savings. Anonymised features also limit business interpretation. Next steps are time-based validation, sensitivity analysis for review and fraud costs, and threshold evaluation on new transaction data.",
      "method": "Five combinations of model and resampling were benchmarked &mdash; logistic regression and tree ensembles, with and without SMOTE oversampling &mdash; and compared on <strong>precision-recall AUC</strong> rather than ROC, the right metric when the positive class is rare. SHAP values explain which features drive each flag, and a cost model assigns dollar values to false negatives and false positives to locate the economically optimal threshold.",
      "finding": [
        "XGBoost with SMOTE led at a <strong>PR-AUC of 0.859</strong>. But the sharper result is economic: instead of defaulting to a 0.5 cutoff, optimising the threshold against the cost function lands at <strong>0.49</strong> and a projected <strong>$2,615 per day</strong> in combined fraud-and-review cost.",
        "This is a cost-model projection to evaluate against realistic review costs and transaction volumes before using it for planning."
      ],
      "recommendation": "Evaluate XGBoost + SMOTE and the selected threshold on later data under realistic cost assumptions before deployment. Revisit the threshold as fraud patterns and volume change, and assess whether SHAP explanations help analysts review flagged transactions."
    },
    "chart": {
      "type": "ph",
      "title": "PR curve &amp; SHAP summary",
      "eyebrow": "Modelling code on GitHub",
      "phTitle": "Explore the model comparison",
      "note": "The modelling repository is available for reviewing the precision-recall comparison and SHAP workflow. Charts are not embedded on this page.",
      "btnLabel": "View the modelling code",
      "btnUrl": "https://github.com/PloypairaohPat/fraud-detection-imbalanced-classification"
    },
    "code": "https://github.com/PloypairaohPat/fraud-detection-imbalanced-classification",
    "liveUrl": null,
    "card": {
      "title": "Fraud Detection on Imbalanced Data",
      "summary": "Five model/resampling combinations benchmarked on a 0.17%-fraud dataset by PR-AUC, then a business cost function that turns a decision threshold into dollars per day.",
      "readout": "<b>PR-AUC 0.859</b> · $2,615/day projected at the selected threshold",
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
      "limitations": "Detection is measured against seeded violations in synthetic records. It does not establish coverage of unknown patterns or certify regulatory compliance. Next steps are testing unseen formats and false positives, checking larger workloads, and reviewing rules against the requirements of a specific data system.",
      "method": "A layered audit: rule-based detectors for retention and consent violations, pattern scanners for unmasked PII (emails, card numbers, national IDs), and dbt models that apply and verify masking. <strong>Great Expectations</strong> enforces data-quality contracts, and a DuckDB query layer answers regulator-style requests &mdash; including a Subject Access Request lookup &mdash; on demand.",
      "finding": [
        "The audit caught <strong>100% of the 4,447 seeded violations</strong> &mdash; including 847 unmasked PII patterns and roughly 2,400 retention breaches &mdash; with zero known misses against the answer key.",
        "The Subject Access Request lookup query took <strong>3.2 milliseconds</strong> in the project benchmark; this measures one query, not the complete request-handling process."
      ],
      "recommendation": "Validate the audit rules against the target system before scheduling checks and alerts. Retain seeded violations as regression fixtures after schema changes, and supplement them with tests for unseen formats and false positives."
    },
    "chart": {
      "type": "ph",
      "title": "Great Expectations report",
      "eyebrow": "Audit code on GitHub",
      "phTitle": "Explore the audit workflow",
      "note": "Review the audit rules, masking logic, and data-quality checks in the repository. An interactive report is not embedded on this page.",
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
    "caseTitle": "Flagging feature drift while F1 stays above its alert threshold",
    "desc": "A fraud-model monitoring experiment using replayed data and an injected distribution shift to compare drift signals with F1 over time.",
    "badgeLabel": "MLOps",
    "badgeClass": "mlops",
    "live": "Experiment dashboard",
    "dek": "A 12-week fraud-model replay that flagged injected feature drift at Week 5 while F1 remained above its alert threshold throughout the experiment.",
    "stats": [
      {
        "v": "0.004 &rarr; 2.96",
        "l": "Maximum feature PSI"
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
        "v": "12 weeks",
        "l": "simulated replay"
      }
    ],
    "sections": {
      "problem": "Input distributions can change while a model's performance metrics remain above their alert thresholds. This experiment asks whether feature-level monitoring detects a deliberately injected shift that an F1-only alert would miss.",
      "data": "A credit-card fraud model was scored against features replayed week over week. Partway through the replay a deliberate distribution shift was injected &mdash; a known, datable event &mdash; so the monitor could be evaluated on whether and when it caught the shift.",
      "method": "Each cycle computes a <strong>Population Stability Index (PSI)</strong> and a <strong>Kolmogorov&ndash;Smirnov</strong> test on input features, with Evidently generating drift reports and MLflow logging the runs. A Streamlit dashboard shows the replay results. The repository also includes an Airflow DAG for scheduled orchestration; running it requires Linux, WSL, or Docker.",
      "finding": [
        "<strong>Maximum feature PSI climbed from 0.004 to 2.96 &mdash; more than a 700&times; increase across the replay.</strong> The first warning fired at Week 5 (PSI 0.106, warning threshold 0.10), followed by a critical alert at Week 6 (PSI 0.201, critical threshold 0.20).",
        "F1 remained between 0.91 and 1.00 over all 12 weeks and never crossed the 0.80 alert threshold. This demonstrates a difference between feature-drift and performance alerts; it does not establish a measured lead time to performance degradation."
      ],
      "recommendation": "Use a PSI breach as a prompt to investigate feature changes alongside KS tests and Evidently reports. Validate alert thresholds and model performance before deciding whether retraining is warranted.",
      "limitations": "These results come from replayed data with injected feature shifts. Feature drift alone does not prove performance degradation. Next steps are testing other shift patterns and seasonality, measuring false alerts, and validating thresholds with delayed labels before automating responses."
    },
    "chart": {
      "type": "iframe",
      "title": "Explore the monitoring experiment",
      "eyebrow": "Interactive &middot; Streamlit Cloud",
      "src": "https://fraud-drift-monitor.streamlit.app/?embed=true",
      "caption": "Interactive replay results &mdash; drift timeline, PSI by feature, and per-cycle status. The hosted app may need time to wake up.",
      "openUrl": "https://fraud-drift-monitor.streamlit.app/"
    },
    "code": "https://github.com/PloypairaohPat/automated-model-monitoring-drift-detection",
    "liveUrl": "https://fraud-drift-monitor.streamlit.app/",
    "card": {
      "title": "Automated Model Monitoring",
      "summary": "A monitoring experiment with replayed data and an injected shift — PSI + KS tests, an Airflow loop, and a Streamlit dashboard for reviewing drift signals.",
      "readout": "PSI <b>0.004 → 2.96</b> · drift flagged at Week 5 · F1 0.91–1.00",
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
    "caseTitle": "Turning bank feeds into explainable financial signals",
    "desc": "A full-stack finance app on Plaid Production: a TypeScript pipeline cleaning real bank feeds, a 7-detector alerts engine, and an explainable 0-100 health score.",
    "badgeLabel": "Engineering",
    "badgeClass": "eng",
    "live": "App (sign-in)",
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
        "The app connects real bank data through a daily pipeline to seven alert detectors and an explainable health score.",
        "The engineering signal is the point &mdash; authentication, a typed data pipeline, scheduled jobs, and a real third-party financial integration, end to end."
      ],
      "recommendation": "Make each alert and score component traceable to its underlying transactions so users can understand the signal and review categorisation errors. Prioritise sync reliability and access-control testing as the app grows.",
      "limitations": "The health score reflects designed rules rather than a validated predictor of financial outcomes. Bank-feed delays and categorisation errors can affect alerts. Next steps are testing sync failures and account isolation, and validating demonstrations with synthetic transactions so they can be reviewed without personal banking data."
    },
    "chart": {
      "type": "ph",
      "title": "Explore Ledger",
      "eyebrow": "Plaid Production &middot; auth-gated",
      "phTitle": "A private financial workspace",
      "note": "The bank-connected workspace requires sign-in because it handles personal financial data. This case study describes the pipeline, alerts, and score without displaying banking records. Explore the app's sign-in page or review the code linked below.",
      "btnLabel": "Open the app (sign-in)",
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
