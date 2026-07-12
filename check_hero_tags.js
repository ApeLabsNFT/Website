const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n').slice(190, 337).join('\n'); // Hero section

const tags = ['div', 'section', 'main', 'a', 'span', 'svg', 'h1', 'h2', 'h3', 'p'];
for (const tag of tags) {
  const open = (lines.match(new RegExp(`<${tag}[>\\s]`, 'g')) || []).length;
  const close = (lines.match(new RegExp(`<\/${tag}>`, 'g')) || []).length;
  if (open !== close) {
    console.log(`HERO MISMATCH ${tag}: open=${open} close=${close}`);
  }
}
console.log('Hero check complete.');
