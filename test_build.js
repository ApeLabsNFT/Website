const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        if (file === 'node_modules' || file.startsWith('.')) return;
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else {
            if (fullPath.endsWith('.html') && !fullPath.includes('.dc.')) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const htmlFiles = walk(__dirname);
let hasErrors = false;

htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const filename = path.relative(__dirname, file);
    
    // Check for bad strings
    const badStrings = [
        '{{',
        '}}',
        'waHref',
        'bookHref',
        'Rutvissage',
        '98765 43210',
        '<x-dc>',
        '</x-dc>',
        '<dc-import',
        '<script type="text/x-dc"',
        'Same expert every visit'
    ];
    
    badStrings.forEach(str => {
        if (content.includes(str)) {
            console.error(`ERROR: Found prohibited string "${str}" in ${filename}`);
            hasErrors = true;
        }
    });
    
    // Check document structure
    const htmlMatches = content.match(/<html/g) || [];
    const headMatches = content.match(/<head/g) || [];
    const bodyMatches = content.match(/<body/g) || [];
    
    if (htmlMatches.length !== 1) {
        console.error(`ERROR: Expected 1 <html> tag in ${filename}, found ${htmlMatches.length}`);
        hasErrors = true;
    }
    if (headMatches.length !== 1) {
        console.error(`ERROR: Expected 1 <head> tag in ${filename}, found ${headMatches.length}`);
        hasErrors = true;
    }
    if (bodyMatches.length !== 1) {
        console.error(`ERROR: Expected 1 <body> tag in ${filename}, found ${bodyMatches.length}`);
        hasErrors = true;
    }
});

if (hasErrors) {
    console.error('QA checks failed.');
    process.exit(1);
} else {
    console.log(`Passed QA checks on ${htmlFiles.length} generated files.`);
}
