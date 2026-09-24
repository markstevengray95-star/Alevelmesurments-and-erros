const fs=require('fs');
const files=['index.html','styles.css','me-content.js','me-assessment-data.js','me-sim-data.js','me-ui.js','me-formula-practical.js','me-assessment.js','me-v3.js','me-v4.js','three-lab.js','me-v6.js','v6.css','v7.css','me-v7.js','sw.js','README.md','manifest.webmanifest','physics-icon.svg','netlify.toml','models/micrometer.gltf','models/vernier.gltf','models/analogue-meter.gltf'];
for(const f of files)if(!fs.existsSync(f))throw new Error(`Missing ${f}`);
const html=fs.readFileSync('index.html','utf8');
for(const term of ['me-v7.js?v=7','v7.css?v=7','GLTFLoader.js','me-v6.js?v=7'])if(!html.includes(term))throw new Error(`Missing loader ${term}`);
const v7=fs.readFileSync('me-v7.js','utf8');
for(const term of ['Advanced Virtual Laboratory','Spaced Retrieval','Full Paper 3 Simulation','Web Serial','Voice Viva','Skills Passport','Exam Paper Builder','Cross-topic Practical Links','BroadcastChannel','serviceWorker'])if(!v7.includes(term))throw new Error(`Missing v7 feature ${term}`);
console.log('smoke-ok-v7');
