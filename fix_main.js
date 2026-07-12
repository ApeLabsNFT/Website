const fs = require('fs');
let c = fs.readFileSync('Home.dc.html', 'utf8');
const search = '<main id="main-content">\n<main id="main-content">';
const search2 = '<main id="main-content">\r\n<main id="main-content">';
if (c.includes(search)) {
  c = c.replace(search, '<main id="main-content">');
}
if (c.includes(search2)) {
  c = c.replace(search2, '<main id="main-content">');
}
fs.writeFileSync('Home.dc.html', c);
fs.writeFileSync('index.html', c);
