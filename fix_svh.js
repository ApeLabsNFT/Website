const fs = require('fs');
const path = require('path');

const p = 'c:\\Users\\Ravi Mohan Sharma\\Downloads\\PhysioByRutvi Website Design\\Home.dc.html';
const p2 = 'c:\\Users\\Ravi Mohan Sharma\\Downloads\\PhysioByRutvi Website Design\\index.html';

let content = fs.readFileSync(p, 'utf8');

// The issue is likely that 100svh is causing an invalid CSS property in their browser, 
// causing the hero height to collapse. We will use a min-height instead.
content = content.replace('height:clamp(550px, 100svh, 960px)', 'height:100vh;min-height:550px;max-height:960px');

fs.writeFileSync(p, content);
fs.writeFileSync(p2, content);
console.log("Hero height reverted to vh fallback.");
