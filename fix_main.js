const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');
const home = fs.readFileSync('Home.dc.html', 'utf8');

const indexHead = index.substring(0, index.indexOf('<x-dc>'));
const indexTailStart = index.indexOf('<script defer src="/site-analytics.min.js">');
let indexTail = '';
if (indexTailStart !== -1) {
    indexTail = index.substring(indexTailStart);
} else {
    indexTail = '<script defer src="/site-analytics.min.js"></script>\n<script defer src="/google-reviews.min.js"></script>\n<script defer src="/site-i18n.min.js"></script>\n</body>\n</html>';
}

const homeBodyStart = home.indexOf('<x-dc>');
const homeBodyEnd = home.indexOf('</script>\n\n<script defer src="/site-analytics.min.js">') + '</script>\n'.length;

let homeBody = home.substring(homeBodyStart);
// if home has the analytics scripts, strip them off
const homeTail = homeBody.indexOf('\n<script defer src="/site-analytics.min.js">');
if (homeTail !== -1) {
    homeBody = homeBody.substring(0, homeTail);
}

fs.writeFileSync('index.html', indexHead + homeBody + '\n' + indexTail);
console.log('Done merging Home.dc.html into index.html');
