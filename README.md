# AQA A-level Measurements & Errors Learning Lab

Interactive teaching, simulation, practical/data-analysis and revision app for **AQA A-level Physics 7408 Section 3.1 Measurements and their errors**.

## Layout and workflow

The project mirrors the classroom workflow of the `alevel-electricity` app:
- sticky dark top bar and progress panel
- guided lesson sequence + lesson workspace
- detailed textbook section
- interactive simulation laboratory
- formula/calculation coach
- practical and data-analysis workspace
- mastery quiz + extended-response automarking
- AQA specification map
- responsive mobile/tablet layout
- safe local progress saving
- clickable equation/method breakdowns

## AQA 3.1 coverage

### 3.1.1 Use of SI units and their prefixes
- required base units and derived units
- prefixes T, G, M, k, c, m, μ, n, p, f
- standard form and prefix conversion
- squared/cubed unit conversion traps
- J ↔ eV and J ↔ kW h conversions

### 3.1.2 Limitation of physical measurements
- random and systematic errors
- accuracy, precision, repeatability, reproducibility and resolution
- absolute, fractional and percentage uncertainty
- significant figures linked to uncertainty
- uncertainty propagation for sums/differences, products/quotients and powers
- error bars
- maximum/minimum gradients
- uncertainty in both gradient and intercept

### 3.1.3 Estimation of physical quantities
- orders of magnitude
- approximate values
- derived/Fermi-style estimates

## v4 feature set

- 8 sequenced lessons
- retrieval starters, objectives and vocabulary
- lesson exit-question auto-checking + model answers
- detailed mini-textbook explanations
- worked calculations and clickable relationship breakdowns
- 6 interactive models
- 16 formula/data tools, including eV/J, kW h/J, significant figures and intercept uncertainty
- 5 practical/data benches: timing, micrometer, graph uncertainty, instrument choice and a student data workspace
- 22 original AQA-style mastery questions
- Significant Figures Trainer
- Uncertainty Challenge mode
- personal progress + misconception dashboard
- CSV export from the student data workspace
- AQA-style best-fit vs worst-acceptable-line gradient/intercept uncertainty
- 4 extended-response questions with transparent mark-point matching
- safe local progress tracking with fallback where browser storage is blocked
- full AQA 3.1 coverage map
- timed 20-mark Paper 3-style mini assessment
- adaptive revision recommendations based on latest weak areas
- practical method and uncertainty planner
- exportable student progress CSV
- v3 analytics/significant-figures/data-workspace layer now explicitly loaded
- installable static-app manifest
- Netlify-ready static configuration

## Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/markstevengray95-star/Alevelmesurments-and-erros)

The app is static: no build command is required and the publish directory is the repository root.

## Run locally

Open `index.html` directly or serve the folder with any static server.

## Educational note

The simulations are teaching models. They support, rather than replace, real practical work and teacher judgement about realistic uncertainties.
