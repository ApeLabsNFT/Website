const fs = require('fs');
const path = require('path');

const DIR = __dirname;
let hasErrors = false;

// List of strings that must NEVER appear in the static output
const BANNED_STRINGS = [
  '{{', '}}',
  'waHref', 'bookHref',
  'Rutvissage',
  'Dr Rutvi Gandhi',
  'Dr. Rutvi Gandhi',
  '+91 98765 43210',
  'wa.me/919876543210',
  'Home.dc.html', 'About.dc.html', 'Conditions.dc.html', 'Condition.dc.html',
  'x-dc', 'dc-import', 'data-dc-script',
  'Same expert every visit', 'No rotating therapists', 'One specialist every visit'
];

function checkDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (
      fullPath.includes('node_modules') || 
      fullPath.includes('.git') || 
      fullPath.includes('temp_extracted') ||
      fullPath.includes('hostinger_deploy') ||
      fullPath.includes('src_design') ||
      file.endsWith('.png') || 
      file.endsWith('.jpg') || 
      file.endsWith('.webp') ||
      file === 'privacy-policy.html' ||
      file === 'terms-of-service.html'
    ) {
      continue;
    }

    if (stat.isDirectory()) {
      checkDirectory(fullPath);
    } else if (file.endsWith('.html')) {
      checkHtmlFile(fullPath);
    }
  }
}

function checkHtmlFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(DIR, filePath);
  
  // 1. Check Banned Strings
  for (const banned of BANNED_STRINGS) {
    // Exception for the canonical names in schema, but for safety, we strictly enforce it everywhere outside of JSON-LD
    // Actually, Dr Rutvi Gandhi shouldn't be in JSON-LD either, it should be Dr Rutvi K Gandhi (PT).
    if (content.includes(banned)) {
      console.error(`❌ BANNED STRING FOUND: "${banned}" in ${relPath}`);
      hasErrors = true;
    }
  }

  // 2. Check for Hreflang
  if (!content.includes('hreflang="en-IN"') || !content.includes('hreflang="mr-IN"') || !content.includes('hreflang="gu-IN"')) {
    console.error(`❌ MISSING HREFLANG: Required tags missing in ${relPath}`);
    hasErrors = true;
  }

  // 3. Check for English fallbacks in localized routes
  if (relPath.startsWith('mr') || relPath.startsWith('gu')) {
    // If it's a localized file, it should not contain massive english body content silently
    // Our generator outputs [MR DRAFT: ...] which we allow. But if it output raw English, it's a failure.
    // For this simple test, we ensure it has the correct language tag
    const isMr = relPath.startsWith('mr');
    const expectedLang = isMr ? 'mr-IN' : 'gu-IN';
    if (!content.includes(`lang="${expectedLang}"`)) {
      console.error(`❌ WRONG HTML LANG: Expected ${expectedLang} in ${relPath}`);
      hasErrors = true;
    }
  }
}

console.log('Running Automated Failure Search...');
checkDirectory(DIR);

if (hasErrors) {
  console.error('\\n🚨 BUILD FAILED: Automated checks caught disallowed patterns.');
  process.exit(1);
} else {
  console.log('✅ Automated checks passed. No banned strings or structural defects found.');
}
