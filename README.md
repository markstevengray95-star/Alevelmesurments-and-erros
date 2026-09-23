# AQA A-level Measurements & Errors Learning Lab v6

Interactive teaching, simulation, practical/data-analysis and revision app for **AQA A-level Physics 7408 Section 3.1 Measurements and their errors**.

## v6 major upgrade

The app now combines the original guided course with a much broader practical-skills platform.

### 3D practical laboratory
- real WebGL/Three.js rendering
- rotate and zoom apparatus
- procedural metal/plastic materials, shadows and studio lighting
- interactive micrometer screw gauge
- interactive vernier caliper
- parallax simulator
- instrument-comparison scene
- zero-error and measurement controls
- full-screen classroom mode

### Expanded lesson teaching
- deeper explanations added to every lesson
- inline diagrams and visual summaries
- stretch questions
- examiner-language prompts
- expanded textbook support

### Skills Studio
- instrument-reading trainer
- virtual practical investigation mode
- experimental fault generator
- advanced graph laboratory with draggable best-fit line
- error bars and worst-acceptable-line comparison
- Data Detective mode
- uncertainty equation builder
- live random/systematic error visualiser
- generated Paper 3-style practical/data questions
- Examiner Mode
- practical-skills passport
- adaptive weakness recommendations

### Existing systems retained
- 8 sequenced lessons
- full textbook
- core simulation lab
- 16 formula/data tools
- practical/data benches
- 22-question mastery bank
- significant-figures trainer
- uncertainty challenge mode
- student data workspace
- personal progress/misconception dashboard
- timed 20-mark exam mode
- practical method planner
- progress CSV export

### Teacher Mode
- random classroom questions
- answer reveal
- classroom timer
- launch random simulations
- worksheet generator
- print-friendly output
- adaptive class-focus panel

## Deployment

The project is a static site and remains Netlify-ready. The publish directory is the repository root and no build command is required.

[Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/markstevengray95-star/Alevelmesurments-and-erros)

## Local run

Open `index.html` directly or serve the folder with any static server.

## 3D dependency

The v6 3D laboratory loads Three.js from jsDelivr. If that CDN is blocked, the rest of the app continues to work and the 3D view displays a clear fallback message.
