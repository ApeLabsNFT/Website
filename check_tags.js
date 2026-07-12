const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');

const tags = ['div', 'section', 'main', 'a', 'span', 'svg', 'h1', 'h2', 'h3', 'p', 'header', 'footer', 'nav'];
for (const tag of tags) {
  const open = (content.match(new RegExp(`<${tag}[>\\s]`, 'g')) || []).length;
  const close = (content.match(new RegExp(`<\/${tag}>`, 'g')) || []).length;
  if (open !== close) {
    console.log(`MISMATCH ${tag}: open=${open} close=${close}`);
  }
}
console.log('Check complete.');
