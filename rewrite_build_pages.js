const fs = require('fs');

const mjs = `import fs from 'fs';
import path from 'path';

const TEMPLATE = \`<!DOCTYPE html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0E4F52">
<title>__TITLE__</title>
<meta name="description" content="__DESC__">
<link rel="canonical" href="https://physiobyrutvi.in__PATH__">
<meta property="og:title" content="__TITLE__">
<meta property="og:description" content="__DESC__">
<meta property="og:url" content="https://physiobyrutvi.in__PATH__">
<meta property="og:image" content="https://physiobyrutvi.in/assets/social-share.png">
<link rel="stylesheet" href="/styles.css">
<script defer src="/vendor/react.production.min.js"></script>
<script defer src="/vendor/react-dom.production.min.js"></script>
<script defer src="/support.min.js"></script>
</head>
<body>
<x-dc>
<dc-import name="Header"></dc-import>

<main id="main-content" class="section-padding" style="background:var(--color-cream); min-height:80vh;">
  <div class="site-container">
    __CONTENT__
  </div>
</main>

<dc-import name="Footer"></dc-import>
</x-dc>
<script type="text/x-dc" data-dc-script>
class Component extends DCLogic {}
</script>
<script defer src="/site-analytics.min.js"></script>
</body>
</html>\`;

const pages = [
  {
    path: 'privacy-policy/index.html',
    title: 'Privacy Policy | PhysioByRutvi',
    desc: 'Privacy Policy for PhysioByRutvi.',
    content: \`
      <div style="max-width:800px; margin:0 auto;">
        <h1 style="margin-bottom:40px;">Privacy Policy</h1>
        <div style="font-size:17px; color:var(--color-ink); line-height:1.6;">
          <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a booking with PhysioByRutvi.</p>
          <h2 style="margin:32px 0 16px;">Information We Collect</h2>
          <p>When you contact us via WhatsApp or phone, we collect the personal information you provide, such as your name, contact number, location, and details about your medical condition for the purpose of assigning appropriate care.</p>
          <h2 style="margin:32px 0 16px;">How We Use Your Information</h2>
          <p>We use the information we collect to communicate with you, schedule appointments, and ensure our clinical team has the necessary context to provide safe and effective physiotherapy treatment. We do not sell your personal or medical information to third parties.</p>
          <h2 style="margin:32px 0 16px;">Contact Us</h2>
          <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at support@physiobyrutvi.in.</p>
        </div>
      </div>
    \`
  },
  {
    path: 'terms/index.html',
    title: 'Terms of Service | PhysioByRutvi',
    desc: 'Terms of Service for PhysioByRutvi.',
    content: \`
      <div style="max-width:800px; margin:0 auto;">
        <h1 style="margin-bottom:40px;">Terms of Service</h1>
        <div style="font-size:17px; color:var(--color-ink); line-height:1.6;">
          <h2 style="margin:32px 0 16px;">1. Medical Disclaimer</h2>
          <p>The information provided on this website is for educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
          <h2 style="margin:32px 0 16px;">2. Services</h2>
          <p>PhysioByRutvi provides in-home physiotherapy assessments and treatments. By scheduling an appointment, you consent to receive care from our qualified practitioners in your home environment.</p>
          <h2 style="margin:32px 0 16px;">3. Cancellations</h2>
          <p>We kindly request at least 24 hours' notice for cancellations. This allows us to reallocate the practitioner's travel time to other patients in need of care.</p>
          <h2 style="margin:32px 0 16px;">4. Contact</h2>
          <p>Questions about the Terms of Service should be sent to us at support@physiobyrutvi.in.</p>
        </div>
      </div>
    \`
  }
];

const conditions = [
    { slug: 'back-neck-pain', name: 'Back & Neck Pain', desc: 'Relief for acute spasms, slipped discs, sciatica, and chronic postural stiffness.', img: 'cond-1.webp' },
    { slug: 'sports-injury', name: 'Sports Injuries', desc: 'Rehabilitation for ligament tears, muscle strains, and joint sprains.', img: 'cond-2.webp' },
    { slug: 'post-surgery-rehabilitation', name: 'Post-Surgery Rehabilitation', desc: 'Guided recovery after joint replacements, ligament repairs, and fractures.', img: 'cond-3.webp' },
    { slug: 'knee-joint-pain', name: 'Knee & Joint Pain', desc: 'Treatment for arthritis, runner\\'s knee, meniscus tears, and general joint stiffness.', img: 'cond-1.webp' },
    { slug: 'sciatica', name: 'Sciatica', desc: 'Specialized therapy to relieve nerve pain radiating down the leg.', img: 'cond-1.webp' },
    { slug: 'posture', name: 'Posture & Work-Related Discomfort', desc: 'Corrective exercises for text neck, rounded shoulders, and desk-job stiffness.', img: 'cond-1.webp' },
    { slug: 'frozen-shoulder', name: 'Frozen Shoulder', desc: 'Progressive mobilization to restore full range of motion and reduce pain.', img: 'cond-2.webp' },
    { slug: 'senior-mobility', name: 'Senior Mobility', desc: 'Improving balance, strength, and confidence to prevent falls and restore independence.', img: 'cond-4.webp' }
];

conditions.forEach(c => {
    pages.push({
        path: \`conditions/\${c.slug}/index.html\`,
        title: \`\${c.name} Physiotherapy at Home - Mumbai | PhysioByRutvi\`,
        desc: c.desc,
        content: \`
            <div style="max-width:800px; margin:0 auto; text-align:center;">
                <p class="eyebrow" style="font-size:12px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:var(--color-teal);margin-bottom:16px;">Condition Guide</p>
                <h1 style="margin-bottom:24px;">\${c.name} Physiotherapy</h1>
                <p style="font-size:18px; line-height:1.6; margin-bottom:48px;">\${c.desc}</p>
                <img src="/assets/img/\${c.img}" alt="\${c.name}" style="width:100%; height:auto; border-radius:var(--radius-medium); margin-bottom:48px;">
                <h2 style="margin-bottom:24px;">Get Assessment-Led Care at Home</h2>
                <p style="margin-bottom:32px;">Our clinical team matches your condition with a highly qualified practitioner who will visit you at home.</p>
                <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
                    <a href="#calendly-popup" class="btn-primary">Book a Free 15-Minute Call</a>
                    <a href="https://wa.me/918879475065?text=Hi%20Rutvi%2C%20I'd%20like%20to%20ask%20about%20home%20physiotherapy%20for%20\${encodeURIComponent(c.name.toLowerCase())}." class="btn-secondary" target="_blank" rel="noopener">Chat on WhatsApp</a>
                </div>
            </div>
        \`
    });
});

// Ensure directories exist
['privacy-policy', 'terms', 'conditions'].forEach(dir => {
  const fullDir = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullDir)) {
    fs.mkdirSync(fullDir, { recursive: true });
  }
});

conditions.forEach(c => {
    const fullDir = path.join(process.cwd(), 'conditions', c.slug);
    if (!fs.existsSync(fullDir)) {
        fs.mkdirSync(fullDir, { recursive: true });
    }
});

pages.forEach(p => {
  let out = TEMPLATE
    .replace(/__TITLE__/g, p.title)
    .replace(/__DESC__/g, p.desc)
    .replace(/__PATH__/g, '/' + p.path.replace('index.html',''))
    .replace('__CONTENT__', p.content);
  
  const fullPath = path.join(process.cwd(), p.path);
  fs.writeFileSync(fullPath, out);
  console.log('Wrote', p.path);
});

console.log('Done generating static pages.');
`;
fs.writeFileSync('build_pages.mjs', mjs);
