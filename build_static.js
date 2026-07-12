const fs = require('fs');
const path = require('path');

const CALENDLY_URL = 'https://calendly.com/gandhirutvi13/30min';
const WA_URL = 'https://wa.me/918879475065';
const PHONE_URL = 'tel:+918879475065';
const PHONE_DISPLAY = '+91 88794 75065';

const HEADER_HTML = `
<header id="pbrHeader" style="position:sticky;top:0;z-index:70;background:#FDF8F5;border-bottom:1px solid rgba(27,32,33,0.06);">
  <div style="max-width:1220px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:16px clamp(20px,5vw,52px);">
    <a href="/" aria-label="PhysioByRutvi home" style="display:flex;align-items:center;gap:12px;text-decoration:none;">
      <img src="/assets/pbr-logo-mark-96.webp" alt="Logo" width="44" height="44" style="width:44px;height:44px;border-radius:12px;object-fit:contain;background:#fff;padding:4px;box-shadow:0 1px 4px rgba(0,0,0,0.1);">
      <span style="display:flex;flex-direction:column;justify-content:center;line-height:1;">
        <span style="font-family:'Fraunces',serif;font-weight:700;font-size:20px;letter-spacing:0.2em;color:#0E4F52;">PHYSIO</span>
        <span style="font-family:'Inter',sans-serif;font-weight:800;font-size:9px;letter-spacing:0.3em;color:#EE7B5B;margin-top:4px;">BY RUTVI</span>
      </span>
    </a>
    <nav class="desktop-nav" style="display:none; gap:24px; align-items:center;">
        <a href="/" style="text-decoration:none; color:#0E4F52; font-weight:600; font-size:14.5px;">Home</a>
        <a href="/conditions/" style="text-decoration:none; color:#0E4F52; font-weight:600; font-size:14.5px;">Conditions</a>
        <a href="/how-care-works/" style="text-decoration:none; color:#0E4F52; font-weight:600; font-size:14.5px;">How Care Works</a>
        <a href="/about/" style="text-decoration:none; color:#0E4F52; font-weight:600; font-size:14.5px;">About</a>
        <a href="/#reviews" style="text-decoration:none; color:#0E4F52; font-weight:600; font-size:14.5px;">Reviews</a>
        <a href="${CALENDLY_URL}" target="_blank" rel="noopener" style="text-decoration:none; color:#EE7B5B; font-weight:700; font-size:14.5px;">Book Consultation</a>
    </nav>
    <div style="display:flex;align-items:center;gap:12px;">
      <a href="${PHONE_URL}" aria-label="Call Dr Rutvi" style="width:44px;height:44px;border-radius:50%;border:1.5px solid #0E4F52;display:flex;align-items:center;justify-content:center;color:#0E4F52;text-decoration:none;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </a>
      <a href="${WA_URL}?text=Hi%20Dr%20Rutvi%2C%20I%20would%20like%20to%20ask%20about%20a%20home%20physiotherapy%20visit." target="_blank" rel="noopener" aria-label="Chat with Dr Rutvi on WhatsApp" style="display:inline-flex;align-items:center;gap:8px;background:#EE7B5B;color:#1B2021;text-decoration:none;font-weight:600;font-size:14px;padding:12px 20px;border-radius:100px;box-shadow:0 4px 12px rgba(238,123,91,0.3);">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.12c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.37-.14-.19-1.18-1.57-1.18-2.99s.75-2.12 1.01-2.41c.26-.29.57-.36.76-.36.19 0 .38.002.55.01.18.008.41-.067.64.49.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.19.69-.81.87-1.09.18-.28.36-.23.61-.14.25.09 1.58.75 1.85.88.28.14.46.21.53.33.07.12.07.68-.17 1.36z"/></svg>
        <span class="desktop-only" style="display:none;">Message Dr Rutvi</span>
      </a>
    </div>
  </div>
</header>
<style>
@media (min-width: 1024px) {
    .desktop-nav { display: flex !important; }
    .desktop-only { display: inline-block !important; }
}
</style>
`;

const FOOTER_HTML = `
<footer style="background:#1B2021;color:#FDF8F5;padding:clamp(64px,9vw,100px) clamp(20px,5vw,52px) 40px;position:relative;">
  <div style="max-width:1120px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:48px;">
    <div>
      <a href="/" style="display:inline-flex;align-items:center;gap:12px;text-decoration:none;">
        <span style="display:flex;flex-direction:column;justify-content:center;line-height:1;">
          <span style="font-family:'Fraunces',serif;font-weight:700;font-size:20px;letter-spacing:0.2em;color:#CFE3D8;">PHYSIO</span>
          <span style="font-family:'Inter',sans-serif;font-weight:800;font-size:9px;letter-spacing:0.3em;color:#EE7B5B;margin-top:4px;">BY RUTVI</span>
        </span>
      </a>
      <p style="color:rgba(253,248,245,0.7);font-size:14.5px;line-height:1.6;margin-top:20px;max-width:32ch;">Movement, restored with clinically led home physiotherapy.</p>
    </div>
    
    <div>
      <h3 style="font-family:'Fraunces',serif;font-weight:600;font-size:18px;color:#CFE3D8;margin-bottom:16px;">Contact</h3>
      <div style="display:flex;flex-direction:column;gap:12px;color:rgba(253,248,245,0.8);font-size:14.5px;">
        <a href="${PHONE_URL}" style="text-decoration:none;">${PHONE_DISPLAY}</a>
        <a href="mailto:support@physiobyrutvi.in" style="text-decoration:none;">support@physiobyrutvi.in</a>
        <span>Mumbai, Maharashtra</span>
      </div>
    </div>
    
    <div>
      <h3 style="font-family:'Fraunces',serif;font-weight:600;font-size:18px;color:#CFE3D8;margin-bottom:16px;">Important Links</h3>
      <div style="display:flex;flex-direction:column;gap:12px;color:rgba(253,248,245,0.8);font-size:14.5px;">
        <a href="/conditions/" style="text-decoration:none;">Conditions Treated</a>
        <a href="/about/" style="text-decoration:none;">About Dr Rutvi</a>
        <a href="/privacy-policy/" style="text-decoration:none;">Privacy Policy</a>
        <a href="/terms/" style="text-decoration:none;">Terms of Service</a>
      </div>
    </div>
  </div>
  
  <div style="max-width:1120px;margin:50px auto 0;padding-top:30px;border-top:1px solid rgba(253,248,245,0.1);display:flex;flex-wrap:wrap;justify-content:space-between;gap:20px;color:rgba(253,248,245,0.5);font-size:13px;">
    <span>&copy; ${new Date().getFullYear()} PhysioByRutvi. All rights reserved.</span>
    <span>Clinical supervision by Dr Rutvi Gandhi, PT, MPT</span>
  </div>
</footer>
`;

const MOBILE_CTA_HTML = `
<div id="pbrBottomSpace" style="height:0px;transition:height 0.3s;width:100%;pointer-events:none;"></div>
<div style="position:fixed;bottom:0;left:0;width:100%;background:#FDF8F5;padding:12px 16px;box-shadow:0 -4px 20px rgba(14,79,82,0.08);border-top:1px solid rgba(27,32,33,0.06);z-index:80;display:flex;gap:10px;">
  <a href="${WA_URL}?text=Hi%20Dr%20Rutvi%2C%20I%20would%20like%20to%20ask%20about%20a%20home%20physiotherapy%20visit." target="_blank" rel="noopener" style="flex:1;display:flex;align-items:center;justify-content:center;gap:8px;background:#EE7B5B;color:#1B2021;text-decoration:none;font-weight:600;font-size:15px;padding:14px;border-radius:12px;box-shadow:0 4px 12px rgba(238,123,91,0.2);">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.12c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.37-.14-.19-1.18-1.57-1.18-2.99s.75-2.12 1.01-2.41c.26-.29.57-.36.76-.36.19 0 .38.002.55.01.18.008.41-.067.64.49.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.19.69-.81.87-1.09.18-.28.36-.23.61-.14.25.09 1.58.75 1.85.88.28.14.46.21.53.33.07.12.07.68-.17 1.36z"/></svg>
    WhatsApp
  </a>
  <a href="${CALENDLY_URL}" target="_blank" rel="noopener" style="flex:1;display:flex;align-items:center;justify-content:center;background:#0E4F52;color:#FDF8F5;text-decoration:none;font-weight:600;font-size:15px;padding:14px;border-radius:12px;">
    Book a Call
  </a>
</div>
<style>
@media (min-width: 720px) {
  #pbrBottomSpace { display: none !important; }
  div[style*="z-index:80"] { display: none !important; }
}
</style>
<script>
  (function(){
    if(window.matchMedia('(max-width: 719px)').matches) {
      document.getElementById('pbrBottomSpace').style.height = '72px';
    }
  })();
</script>
`;

function processTemplate(fileContent, pagePath) {
    // Extract <helmet> and <x-dc>
    const helmetMatch = fileContent.match(/<helmet>([\s\S]*?)<\/helmet>/);
    const xdcMatch = fileContent.match(/<x-dc>([\s\S]*?)<\/x-dc>/);
    
    if (!helmetMatch || !xdcMatch) return fileContent; // Return as is if not a template

    let headContent = helmetMatch[1];
    let bodyContent = xdcMatch[1];

    // Build the final static HTML
    let finalHtml = `<!DOCTYPE html>
<html lang="en-IN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
`;

    finalHtml += headContent + `\n<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://physiobyrutvi.in/about#dr-rutvi-gandhi",
      "name": "Dr Rutvi Gandhi",
      "honorificPrefix": "Dr",
      "jobTitle": "Physiotherapist",
      "description": "PT, MPT - Musculoskeletal and Sports Physiotherapy. Founder of PhysioByRutvi, a doctor-led home-visit physiotherapy practice serving Bhayander to Andheri.",
      "worksFor": {"@id": "https://physiobyrutvi.in/#business"},
      "url": "https://physiobyrutvi.in/about"
    },
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": "https://physiobyrutvi.in/#business",
      "name": "PhysioByRutvi",
      "url": "https://physiobyrutvi.in/",
      "telephone": "+918879475065",
      "email": "support@physiobyrutvi.in",
      "founder": {"@id": "https://physiobyrutvi.in/about#dr-rutvi-gandhi"},
      "medicalSpecialty": ["Physiotherapy", "Sports Medicine", "Musculoskeletal", "Post-operative rehabilitation"],
      "areaServed": [
        {"@type": "Place", "name": "Mumbai Western Suburbs"}
      ]
    }
  ]
}
</script>\n</head>\n<body>\n`;
    
    // Replace imports
    bodyContent = bodyContent.replace(/<dc-import name="Header"[^>]*><\/dc-import>/g, HEADER_HTML);
    bodyContent = bodyContent.replace(/<dc-import name="Footer"[^>]*><\/dc-import>/g, FOOTER_HTML);
    bodyContent = bodyContent.replace(/<dc-import name="MobileCTA"[^>]*><\/dc-import>/g, MOBILE_CTA_HTML);
    
    // Clean up variables
    bodyContent = bodyContent.replace(/{{ bookHref }}/g, CALENDLY_URL);
    bodyContent = bodyContent.replace(/{{ waHref }}/g, `${WA_URL}?text=Hi%20Dr%20Rutvi%2C%20I%20would%20like%20to%20ask%20about%20a%20home%20physiotherapy%20visit.`);
    
    finalHtml += bodyContent;
    
    // Extract support script from template
    const scriptMatch = fileContent.match(/<script type="text\/x-dc" data-dc-script>([\s\S]*?)<\/script>/);
    if (scriptMatch) {
      const scriptContent = scriptMatch[1];
      // We will inject a vanilla JS version of the support script instead of the DCLogic one
      finalHtml += `
<script>
document.addEventListener('DOMContentLoaded', () => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Reveal
    if (!reduce) {
        const els = Array.from(document.querySelectorAll('[data-reveal]'));
        els.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(18px)';
            el.style.transition = 'opacity .85s cubic-bezier(.2,.7,.2,1), transform .85s cubic-bezier(.2,.7,.2,1)';
        });
        const io = new IntersectionObserver((ents) => {
            ents.forEach((e) => {
                if (e.isIntersecting) {
                    const dl = parseFloat(e.target.getAttribute('data-delay') || '0');
                    e.target.style.transitionDelay = dl + 'ms';
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'none';
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
        els.forEach(el => io.observe(el));
    }
    
    // Parallax
    if (!reduce) {
        window.addEventListener('scroll', () => {
            const sy = window.scrollY || 0;
            document.querySelectorAll('[data-parallax]').forEach((el) => {
                const sp = parseFloat(el.getAttribute('data-parallax')) || 0.05;
                el.style.transform = 'translateX(-50%) translateY(' + (sy * sp).toFixed(1) + 'px)';
            });
        }, { passive: true });
    }
    
    // Counts
    if (!reduce) {
        const counts = Array.from(document.querySelectorAll('[data-count]'));
        const ioCount = new IntersectionObserver((ents) => {
            ents.forEach((e) => {
                if (e.isIntersecting) {
                    const el = e.target;
                    const to = parseFloat(el.getAttribute('data-count'));
                    const suf = el.getAttribute('data-suffix') || '';
                    const dur = 1500, t0 = performance.now();
                    const tick = (t) => {
                        const p = Math.min(1, (t - t0) / dur);
                        const ex = 1 - Math.pow(1 - p, 3);
                        el.textContent = Math.round(to * ex) + suf;
                        if (p < 1) requestAnimationFrame(tick);
                        else el.textContent = to + suf;
                    };
                    requestAnimationFrame(tick);
                    ioCount.unobserve(el);
                }
            });
        }, { threshold: 0.6 });
        counts.forEach(el => ioCount.observe(el));
    }
});
</script>
`;
    }

    finalHtml += `\n<script defer src="/site-analytics.min.js"></script>\n<script defer src="/google-reviews.min.js"></script>\n<script defer src="/voice-widget-loader.js"></script>\n</body>\n</html>`;
    
    // Fix duplicate google-reviews if already present
    finalHtml = finalHtml.replace(/<script defer src="\/google-reviews\.min\.js"><\/script>\s*<script defer src="\/google-reviews\.min\.js"><\/script>/g, '<script defer src="/google-reviews.min.js"></script>');
    
    return finalHtml;
}

function processConditions(templateContent) {
    const conditions = [
        { id: "back-neck-pain", name: "Back & Neck Pain", image: "cond-back.webp", intro: "Targeted physiotherapy for cervical spondylosis, lumbar disc issues, and postural aches. We assess your spine's mobility and strength to create a program that reduces pain and restores function safely at home." },
        { id: "sports-injury", name: "Sports Injuries", image: "cond-sports.webp", intro: "Expert rehabilitation for sprains, strains, and tears. We guide your return to sport safely with progressive loading, functional movement assessments, and sport-specific training to prevent future injury." },
        { id: "post-surgery-rehabilitation", name: "Post-Surgery Rehab", image: "cond-surgery.webp", intro: "Critical early-stage recovery following joint replacements (TKR, THR), ligament reconstructions (ACL), and fracture fixations. We ensure safe, progressive milestones to regain your independence." },
        { id: "knee-joint-pain", name: "Knee & Joint Pain", image: "cond-knee.webp", intro: "Comprehensive care for osteoarthritis, meniscus issues, and patellofemoral pain. We focus on joint mobilization, pain relief, and strengthening the surrounding muscles to improve joint stability." },
        { id: "sciatica", name: "Sciatica & Nerve Pain", image: "cond-sciatica.webp", intro: "Specialized treatment for radiating nerve pain. We utilize neurodynamic mobilizations, targeted stretches, and core stabilization to relieve pressure on the sciatic nerve and reduce symptom flare-ups." },
        { id: "posture-and-workstation", name: "Posture & Workstation", image: "cond-posture.webp", intro: "Correction of postural imbalances caused by long hours at a desk. We assess your home setup, provide ergonomic advice, and teach exercises to counteract sustained sitting." },
        { id: "frozen-shoulder", name: "Frozen Shoulder", image: "cond-shoulder.webp", intro: "Gentle, progressive therapy for adhesive capsulitis. We use specific manual techniques and stretching protocols to reduce pain, increase range of motion, and restore overhead function." },
        { id: "senior-mobility", name: "Senior Mobility & Balance", image: "cond-senior.webp", intro: "Dedicated care for older adults focusing on fall prevention, arthritis management, and functional independence. We build confidence through balance training and safe strengthening exercises." }
    ];

    conditions.forEach(cond => {
        let content = templateContent;
        content = content.replace(/{{ title }}/g, cond.name);
        content = content.replace(/{{ desc }}/g, cond.intro);
        content = content.replace(/{{ img }}/g, cond.image);
        content = content.replace(/{{ id }}/g, cond.id);
        
        let html = processTemplate(content, `/conditions/${cond.id}/index.html`);
        
        const dir = path.join(__dirname, 'conditions', cond.id);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        
        fs.writeFileSync(path.join(dir, 'index.html'), html);
        console.log(`Generated /conditions/${cond.id}/index.html`);
    });
}

function updateHomeText(content) {
    // Hero Text
    content = content.replace(/Physiotherapy<br><span style="color:#0E4F52;">That Comes<\/span><br>To You\./g, "THE RIGHT<br><span style=\"color:#0E4F52;\">PHYSIOTHERAPIST,<\/span><br>AT HOME.");
    content = content.replace(/The Same<br><span style="color:#0E4F52;">Expert\.<\/span><br>Every Visit\./g, "CLINICALLY<br><span style=\"color:#0E4F52;\">LED CARE,<\/span><br>AT HOME.");
    content = content.replace(/Same expert, every visit/g, "");
    
    // Intro & Trust Chips
    content = content.replace(/<span data-count="500" data-suffix="\+">500\+<\/span><\/div><div style="color:#717470;font-size:13\.5px;margin-top:8px;">Patients treated at home<\/div>/g, '<span data-count="1" data-suffix=" on 1">1 on 1</span></div><div style="color:#717470;font-size:13.5px;margin-top:8px;">Personalized home care</div>');
    content = content.replace(/5\.0 · 500\+ patients treated at home/g, "5.0 · Personalized care across western suburbs");
    
    // How Care Works (Change 3 steps to 4 steps)
    content = content.replace(/Three steps to feeling better\./g, "Four steps to feeling better.");
    content = content.replace(/1<\/div>/g, "1</div>"); // dummy replace
    content = content.replace(/Message on WhatsApp/g, "Book Call");
    content = content.replace(/Quick chat to book/g, "Get Clarity");
    content = content.replace(/Rutvi visits your home/g, "Get Matched");
    
    // Append step 4
    content = content.replace(/The same specialist arrives with everything needed, assessment, hands-on treatment, and a plan you can follow\.<\/p>\s*<\/div>\s*<\/div>\s*<\/div>/, `The same specialist arrives with everything needed, assessment, hands-on treatment, and a plan you can follow.</p>
        </div>
      </div>

      <div data-hownode style="display:flex;gap:clamp(18px,3vw,32px);align-items:flex-start;padding:clamp(14px,2vw,22px) 0;">
        <div data-honcircle style="flex:0 0 56px;width:56px;height:56px;border-radius:50%;border:1.5px solid rgba(246,242,236,.3);background:rgba(253,248,245,.08);color:#FDF8F5;font-family:'Fraunces',serif;font-weight:600;font-size:24px;display:flex;align-items:center;justify-content:center;z-index:1;transition:background .5s,color .5s,border-color .5s;">4</div>
        <div data-hontext style="padding-top:6px;transition:opacity .5s;opacity:.62;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EE7B5B" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            <h3 style="font-family:'Fraunces',serif;font-weight:600;font-size:clamp(22px,2.6vw,30px);color:#FDF8F5;">Begin Assessment</h3>
          </div>
          <p style="color:rgba(246,242,236,.72);font-size:clamp(15px,1.7vw,17px);line-height:1.6;max-width:46ch;">Your assigned physiotherapist arrives for the comprehensive initial assessment and treatment.</p>
        </div>
      </div>
    </div>`);

    // Founder 
    content = content.replace(/The Person Who<br><span style="color:#0E4F52;">Assesses You<\/span><br>Guides Recovery\./g, "Meet<br><span style=\"color:#0E4F52;\">Dr Rutvi<\/span><br>Gandhi.");
    content = content.replace(/The person who assesses you continues to guide your plan/g, "Our clinical lead ensures care standards are maintained");

    return content;
}

function processAll() {
    console.log('Starting static build...');
    
    // 1. Process Home
    let homeSrc = fs.readFileSync(path.join(__dirname, 'Home.dc (1).html'), 'utf8');
    homeSrc = updateHomeText(homeSrc);
    const homeHtml = processTemplate(homeSrc, '/index.html');

    fs.writeFileSync(path.join(__dirname, 'index.html'), homeHtml);
    console.log('Generated index.html');
    
    // 2. Process About
    const aboutSrc = fs.readFileSync(path.join(__dirname, 'About Dr Rutvi.dc.html'), 'utf8');
    const aboutHtml = processTemplate(aboutSrc, '/about/index.html');
    if (!fs.existsSync(path.join(__dirname, 'about'))) fs.mkdirSync(path.join(__dirname, 'about'));
    fs.writeFileSync(path.join(__dirname, 'about', 'index.html'), aboutHtml);
    console.log('Generated about/index.html');
    
    // 3. Process Conditions Listing
    const condsSrc = fs.readFileSync(path.join(__dirname, 'Conditions.dc.html'), 'utf8');
    const condsHtml = processTemplate(condsSrc, '/conditions/index.html');
    if (!fs.existsSync(path.join(__dirname, 'conditions'))) fs.mkdirSync(path.join(__dirname, 'conditions'));
    fs.writeFileSync(path.join(__dirname, 'conditions', 'index.html'), condsHtml);
    console.log('Generated conditions/index.html');
    
    // 4. Process Individual Condition Pages
    const condSrc = fs.readFileSync(path.join(__dirname, 'Condition.dc.html'), 'utf8');
    processConditions(condSrc);
    
    console.log('Build completed!');
}

processAll();
