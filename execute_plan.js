const fs = require('fs');
const path = require('path');

const calendlyLink = 'https://calendly.com/gandhirutvi13/30min';
const newMetaDesc = '<meta name="description" content="Doctor-led home physiotherapy by Dr Rutvi Gandhi for back pain, sports injury and rehab. Serving Bhayander, Mira Road, Dahisar, Borivali, Kandivali, Malad, Goregaon, Jogeshwari, and Andheri.">';

const jsonLdSchema = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "PhysioByRutvi",
  "url": "https://physiobyrutvi.in",
  "logo": "https://physiobyrutvi.in/assets/pbr-logo-mark-96.webp",
  "image": "https://physiobyrutvi.in/assets/pbr-logo-mark-96.webp",
  "description": "Doctor-led home physiotherapy by Dr Rutvi Gandhi, PT, MPT.",
  "telephone": "+918879475065",
  "areaServed": [
    {"@type": "City", "name": "Bhayander"},
    {"@type": "City", "name": "Mira Road"},
    {"@type": "City", "name": "Dahisar"},
    {"@type": "City", "name": "Borivali"},
    {"@type": "City", "name": "Kandivali"},
    {"@type": "City", "name": "Malad"},
    {"@type": "City", "name": "Goregaon"},
    {"@type": "City", "name": "Jogeshwari"},
    {"@type": "City", "name": "Andheri"}
  ]
}
</script>
</head>
`;

// Helper to replace links
function replaceLinks(content) {
  // Replace WhatsApp hrefs with Calendly
  content = content.replace(/href="https:\/\/wa\.me\/918879475065[^"]*"/g, `href="${calendlyLink}"`);
  // Replace "Message Dr Rutvi" or "Talk to Dr Rutvi" -> "Book a Consultation" (where it makes sense)
  content = content.replace(/>\s*(?:Message Dr Rutvi|Chat with Dr Rutvi on WhatsApp)\s*<\/a>/g, '>Book a Consultation</a>');
  // Specifically update the script variables
  content = content.replace(/wa = "https:\/\/wa\.me\/918879475065[^;]+;/g, `wa = "${calendlyLink}";`);
  content = content.replace(/book = "https:\/\/wa\.me\/918879475065[^;]+;/g, `book = "${calendlyLink}";`);
  return content;
}

const files = [
  'Header.dc.html',
  'Footer.dc.html',
  'MobileCTA.dc.html',
  'Home.dc.html',
  'About Dr Rutvi.dc.html',
  'Conditions.dc.html',
  'Condition.dc.html',
  'index.html',
  '404.html' // Also do 404 just in case
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let c = fs.readFileSync(f, 'utf8');

  // 1. Meta Description
  c = c.replace(/<meta name="description" content="[^"]+">/g, newMetaDesc);

  // 2. Links
  c = replaceLinks(c);

  // 3. Header specific tasks
  if (f === 'Header.dc.html') {
    // Remove language switcher elements
    c = c.replace(/<nav id="pbrLangSwitch".*?<\/nav>\s*/gs, '');
    c = c.replace(/<div id="pbrLangSwitchMenu".*?<\/div>\s*/gs, '');
    c = c.replace(/#pbrLangSwitch a,#pbrLangSwitchMenu a\{[^\}]+\}\s*/g, '');
    c = c.replace(/@media \([^)]+\)\{#pbrLangSwitch\{display:none!important;\}#pbrLangSwitchMenu\{display:flex!important;\}\}\s*/g, '');
    
    // Remove language script logic
    c = c.replace(/currentLang\(\)\{[^}]+\}\s*/g, '');
    c = c.replace(/cleanPath\(\)\{[^}]+\}\s*/g, '');
    c = c.replace(/langHref\([^)]*\)\{[^}]+\}\s*/g, '');
    c = c.replace(/paintLanguage = \(\) => \{[^}]+(?:\}\);)?\s*\};\s*/g, '');
    c = c.replace(/this\.paintLanguage\(\);\s*/g, '');
    c = c.replace(/waLink\(\)\{[^}]+\}\s*/g, '');
    c = c.replace(/wa = this\.waLink\(\);\s*/g, `wa = "${calendlyLink}";\n`);
  }

  // 4. Schema (add to index.html and Home.dc.html)
  if (f === 'index.html' || f === 'Home.dc.html') {
    if (!c.includes('application/ld+json')) {
      c = c.replace('</head>', jsonLdSchema);
    }
  }

  fs.writeFileSync(f, c);
  console.log('Processed', f);
});

// Remove actual directories if they exist (mr, gu) to clean up
['mr', 'gu'].forEach(d => {
  if (fs.existsSync(d)) {
    fs.rmSync(d, { recursive: true, force: true });
    console.log('Removed directory:', d);
  }
});
