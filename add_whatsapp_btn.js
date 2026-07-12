const fs = require('fs');

const waIconSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.062-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`;

const waButtonHtml = `\n<a href="https://wa.me/918879475065?text=Hi%20Dr%20Rutvi%2C%20I%20would%20like%20to%20ask%20about%20a%20home%20physiotherapy%20visit." target="_blank" rel="noopener" aria-label="Message on WhatsApp" style="display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;background:#25D366;color:#fff;border-radius:50%;text-decoration:none;flex-shrink:0;box-shadow:0 8px 24px rgba(37,211,102,.25);transition:transform .3s cubic-bezier(.2,.7,.2,1);margin-left:8px;vertical-align:middle;" style-hover="transform:translateY(-2px);box-shadow:0 12px 30px rgba(37,211,102,.35);">${waIconSvg}</a>`;

const files = [
  'Header.dc.html',
  'Footer.dc.html',
  'MobileCTA.dc.html',
  'Home.dc.html',
  'About Dr Rutvi.dc.html',
  'Conditions.dc.html',
  'Condition.dc.html',
  'index.html',
  '404.html'
];

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  let c = fs.readFileSync(f, 'utf8');
  let original = c;

  // Regex to match the full Calendly anchor block, including anything inside it.
  // We use a replacer function to analyze the anchor.
  const regex = /<a[^>]*href="https:\/\/calendly\.com[^>]*>[\s\S]*?<\/a>/g;
  
  c = c.replace(regex, (match) => {
    // If it already has the new waButtonHtml right after it, we shouldn't append again, but the regex only matches <a>...</a>.
    // We'll handle appending later.
    
    // First, remove the old WhatsApp SVG path if it's inside the Calendly link
    let newMatch = match.replace(/<svg[^>]*>.*?M12\.04 2C6\.58.*?<\/svg>\s*/, '');
    
    // Check if the Calendly button has the "Book a Consultation" text, if it was empty from the SVG removal
    if (!newMatch.includes('Book a Consultation') && !newMatch.includes('Talk to Dr Rutvi') && !newMatch.includes('Book')) {
        // Just in case it's completely empty
        // Actually it will still have "Book a Consultation" because we appended it before.
    }

    return newMatch + waButtonHtml;
  });

  // Make sure we don't accidentally double-add if run multiple times
  // A simple hack: replace double waButtonHtml with single
  c = c.split(waButtonHtml + waButtonHtml).join(waButtonHtml);

  if (c !== original) {
    fs.writeFileSync(f, c);
    console.log('Processed', f);
  }
});
