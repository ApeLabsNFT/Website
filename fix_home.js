const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('Home.dc.html', 'utf8');

// 1. Fix hero 100svh -> 100vh
content = content.replace('height:100svh;', 'height:100vh;');

// 2. Fix duplicate <main id="main-content">
if (content.split('<main id="main-content">').length > 2) {
  content = content.replace('<main id="main-content">\n<main id="main-content">', '<main id="main-content">');
}

// 3. Fix missing </section>, missing </main>, and missing MobileCTA
// Find the last section
if (content.includes('</section>\n<dc-import name="Footer"')) {
  content = content.replace(/<\/section>(\r?\n)<dc-import name="Footer"/g, '</section>\n</main>\n<dc-import name="MobileCTA"></dc-import>\n<dc-import name="Footer"');
} else if (content.includes('</section>\n</x-dc>')) {
  content = content.replace(/<\/section>(\r?\n)<\/x-dc>/g, '</section>\n</main>\n<dc-import name="MobileCTA"></dc-import>\n<dc-import name="Footer" hint-size="100%,520px"></dc-import>\n</x-dc>');
} else if (content.includes('<dc-import name="Footer"')) {
  // If no </section> before Footer, add it
  content = content.replace(/(.*)<dc-import name="Footer"/g, '$1</section>\n</main>\n<dc-import name="MobileCTA"></dc-import>\n<dc-import name="Footer"');
}

// 4. Remove opacity hiding to guarantee visibility
content = content.replace(/els\.forEach\(\(el\) => \{ el\.style\.opacity = '0'; [^\}]+ \}\);/g, '/* removed opacity hiding */');

fs.writeFileSync('Home.dc.html', content);
fs.writeFileSync('index.html', content);
console.log('Fixed Home.dc.html and index.html');
