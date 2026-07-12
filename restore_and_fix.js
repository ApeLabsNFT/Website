const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dir = 'c:\\Users\\Ravi Mohan Sharma\\Downloads\\PhysioByRutvi Website Design';

function fix() {
  const p = path.join(dir, 'Home.dc.html');
  execSync(`git restore "Home.dc.html"`, { cwd: dir });

  let content = fs.readFileSync(p, 'utf8');

  // Duplicate main
  content = content.replace(/<main id="main-content">(\r?\n)*<main id="main-content">/, '<main id="main-content">');
  
  // Missing </section> after bento grid
  content = content.replace(/<\/div>(\r?\n)<!-- ===================== YOUR PHYSIOTHERAPIST ===================== -->/g, '  </div>\n</section>\n<!-- ===================== YOUR PHYSIOTHERAPIST ===================== -->');

  // Missing </main> before footer
  content = content.replace(/<\/section>(\r?\n)<dc-import name="Footer"/g, '</section>\n</main>\n<dc-import name="MobileCTA"></dc-import>\n<dc-import name="Footer"');
  
  // Hero height
  content = content.replace('height:clamp(800px,100vh,960px)', 'height:clamp(550px, 100svh, 960px)');

  // Conditions card replacement (use split or regex)
  const bentoStart = content.indexOf('<div id="homeBento"');
  const cardStart = content.indexOf('<a href="/conditions/"', bentoStart);
  const nextCardStart = content.indexOf('<a href="/how-care-works/"', cardStart);
  
  if (cardStart > -1 && nextCardStart > -1) {
    const originalCard = content.substring(cardStart, nextCardStart);
    
    const newCard = `<a href="/conditions/" data-reveal aria-label="Conditions" style="position:relative;display:flex;flex-direction:column;justify-content:space-between;text-decoration:none;min-height:clamp(340px,42vw,480px);border-radius:26px;overflow:hidden;background:#0E4F52;padding:clamp(24px,3vw,36px);box-shadow:0 8px 24px rgba(14,79,82,.06);transition:box-shadow .5s,transform .5s cubic-bezier(.2,.7,.2,1);" style-hover="box-shadow:0 22px 50px rgba(14,79,82,.16);transform:translateY(-4px);">
      <div style="position:absolute;top:0;right:0;width:min(240px,70%);opacity:.15;pointer-events:none;"><svg viewBox="0 0 400 300" fill="none"><path d="M-20 280 C 120 20, 280 20, 420 280" stroke="#EE7B5B" stroke-width="4" stroke-linecap="round"/><path d="M40 286 C 140 100, 240 100, 360 286" stroke="#CFE3D8" stroke-width="3" stroke-linecap="round"/></svg></div>
      <div><span style="display:inline-block;font-size:11.5px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#0E4F52;background:#FDF8F5;padding:7px 13px;border-radius:100px;">Conditions We Treat</span></div>
      <div style="position:relative;z-index:2;">
        <h3 style="font-family:'Fraunces',serif;font-weight:600;text-transform:uppercase;color:#FDF8F5;font-size:clamp(30px,3.8vw,48px);line-height:.95;margin:0 0 16px;">Find The<br>Problem<br>That Sounds<br>Like You</h3>
        <div style="display:inline-flex;align-items:center;gap:9px;color:#EE7B5B;font-weight:600;font-size:14.5px;">Explore all conditions <span style="width:34px;height:34px;border-radius:50%;background:#EE7B5B;color:#1B2021;display:flex;align-items:center;justify-content:center;flex:0 0 auto;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div>
      </div>
    </a>\n    `;
    
    content = content.replace(originalCard, newCard);
    console.log("Card replaced.");
  } else {
    console.log("Could not locate cards.");
  }

  fs.writeFileSync(p, content);
  fs.writeFileSync(path.join(dir, 'index.html'), content);
}
fix();
