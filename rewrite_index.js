const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Home Physiotherapy in Mumbai | Dr Rutvi Gandhi</title>
<link rel="stylesheet" href="/styles.css">
<!-- PBR static SEO -->
<meta name="description" content="Doctor-led home physiotherapy by Dr Rutvi Gandhi for back pain, sports injury and rehab. Serving Bhayander, Mira Road, Dahisar, Borivali, Kandivali, Malad, Goregaon, Jogeshwari, and Andheri.">
<link rel="canonical" href="https://physiobyrutvi.in/">
<!-- /PBR static SEO -->
<script defer src="/vendor/react.production.min.js"></script>
<script defer src="/vendor/react-dom.production.min.js"></script>
<script defer src="/support.min.js"></script>
<style>
  .eyebrow {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--color-teal);
    margin-bottom: 16px;
  }
  .card {
    background: var(--color-white);
    border-radius: var(--radius-medium);
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
  .card-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: var(--radius-small);
    margin-bottom: 16px;
  }
  .bg-teal {
    background: var(--color-teal);
    color: var(--color-white);
  }
  .bg-teal h2, .bg-teal h3 {
    color: var(--color-white);
  }
  .text-center {
    text-align: center;
  }
</style>
</head>
<body>
<x-dc>
<dc-import name="Header"></dc-import>

<main id="main-content">
  <!-- HERO SECTION -->
  <section class="section-padding">
    <div class="site-container grid-50-50">
      <div>
        <p class="eyebrow">HOME PHYSIOTHERAPY ACROSS MUMBAI’S WESTERN SUBURBS</p>
        <h1>The right physiotherapist, at home.</h1>
        <p>Assessment-led home physiotherapy from Bhayander to Andheri. Our clinically led care team matches your concern, location and goals with a suitable physiotherapist.</p>
        <div style="display:flex; gap:16px; margin-top:32px; flex-wrap:wrap;">
           <a href="#calendly-popup" class="btn-primary">Book a Free 15-Minute Call</a>
           <a href="https://wa.me/918879475065?text=Hi%20Rutvi%2C%20I'd%20like%20to%20ask%20about%20a%20home%20physiotherapy%20session." class="btn-secondary" target="_blank" rel="noopener">Chat on WhatsApp</a>
        </div>
        <p style="margin-top:24px; font-size:13px; color:#5A5F5B;">MPT-led care · Therapist matched to your needs · Appointment-based home visits</p>
      </div>
      <div>
         <img src="/assets/img/hero-1.webp" alt="Physiotherapist treating a patient" style="border-radius:var(--radius-medium); width:100%;">
      </div>
    </div>
  </section>

  <!-- INTRO / ABOUT SECTION -->
  <section class="section-padding" style="background:var(--color-white);">
    <div class="site-container grid-50-50">
      <div>
         <img src="/assets/img/hero-2.webp" alt="Dr Rutvi Gandhi with a patient" style="border-radius:var(--radius-medium); width:100%;">
      </div>
      <div>
        <p class="eyebrow">Meet the clinical lead behind the care standards.</p>
        <h2>Dr Rutvi Gandhi</h2>
        <p><strong>Founder and Clinical Lead (PT, MPT)</strong></p>
        <p>With a master's in Sports and Musculoskeletal Physiotherapy, I ensure every patient receives an accurate diagnosis and a customized recovery plan. My focus is on providing high-quality, assessment-led care that delivers real results.</p>
      </div>
    </div>
  </section>

  <!-- STATISTICS -->
  <section class="section-padding">
    <div class="site-container grid-stats text-center">
      <div>
        <h2 style="font-size:clamp(40px, 5vw, 56px); margin-bottom:8px;">5.0</h2>
        <p style="margin:0 auto;">Google Rating</p>
      </div>
      <div>
        <h2 style="font-size:clamp(40px, 5vw, 56px); margin-bottom:8px;">8+</h2>
        <p style="margin:0 auto;">Years of Clinical Experience</p>
      </div>
      <div>
        <h2 style="font-size:clamp(40px, 5vw, 56px); margin-bottom:8px;">MPT</h2>
        <p style="margin:0 auto;">Qualified Professionals</p>
      </div>
      <div>
        <h2 style="font-size:clamp(40px, 5vw, 56px); margin-bottom:8px;">Home</h2>
        <p style="margin:0 auto;">Visit Convenience</p>
      </div>
    </div>
  </section>

  <!-- CONDITIONS / FEATURE CARDS -->
  <section class="section-padding" style="background:var(--color-white);">
    <div class="site-container">
      <h2 class="text-center" style="margin-bottom:48px;">How We Can Help</h2>
      <div class="grid-cards">
        <a href="/conditions/back-neck-pain/" style="text-decoration:none; color:inherit;">
          <div class="card">
            <img src="/assets/img/cond-1.webp" alt="Back and Neck Pain" class="card-img">
            <h3>Back &amp; Neck Pain</h3>
            <p>Relief for acute spasms, slipped discs, sciatica, and chronic postural stiffness.</p>
          </div>
        </a>
        <a href="/conditions/sports-injury/" style="text-decoration:none; color:inherit;">
          <div class="card">
            <img src="/assets/img/cond-2.webp" alt="Sports Injuries" class="card-img">
            <h3>Sports Injuries</h3>
            <p>Rehabilitation for ligament tears, muscle strains, and joint sprains.</p>
          </div>
        </a>
        <a href="/conditions/post-surgery-rehabilitation/" style="text-decoration:none; color:inherit;">
          <div class="card">
            <img src="/assets/img/cond-3.webp" alt="Post-Surgery Rehabilitation" class="card-img">
            <h3>Post-Surgery Rehab</h3>
            <p>Guided recovery after joint replacements, ligament repairs, and fractures.</p>
          </div>
        </a>
        <a href="/conditions/senior-mobility/" style="text-decoration:none; color:inherit;">
          <div class="card">
            <img src="/assets/img/cond-4.webp" alt="Senior Mobility" class="card-img">
            <h3>Senior Mobility</h3>
            <p>Improving balance, strength, and confidence to prevent falls and restore independence.</p>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS -->
  <section class="section-padding bg-teal">
    <div class="site-container">
      <h2 class="text-center" style="margin-bottom:48px;">How Care Works</h2>
      <div class="grid-cards">
        <div>
          <h3 style="color:var(--color-coral);">1. Book a free 15-minute call</h3>
          <p style="color:var(--color-white);">Discuss your condition directly with our clinical lead to ensure home physiotherapy is right for you.</p>
        </div>
        <div>
          <h3 style="color:var(--color-coral);">2. Share your concern and location</h3>
          <p style="color:var(--color-white);">Provide your details so we can assign the most appropriate therapist based on your specific needs and area.</p>
        </div>
        <div>
          <h3 style="color:var(--color-coral);">3. Get matched with a suitable physiotherapist</h3>
          <p style="color:var(--color-white);">Our clinically led care team matches you with a highly qualified practitioner.</p>
        </div>
        <div>
          <h3 style="color:var(--color-coral);">4. Begin with an assessment-led home visit</h3>
          <p style="color:var(--color-white);">Your assigned physiotherapist will arrive at your home, conduct a thorough assessment, and begin treatment immediately.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- REVIEWS -->
  <section class="section-padding">
    <div class="site-container text-center">
      <h2 style="margin-bottom:48px;">Patient Success Stories</h2>
      <div class="grid-cards" style="text-align:left;">
        <div class="card">
          <p>"Dr. Rutvi is an excellent physiotherapist. Her knowledge and expertise helped me recover from my shoulder pain completely. Highly recommend her home visit services!"</p>
          <p><strong>- Shreya S.</strong></p>
        </div>
        <div class="card">
          <p>"Very professional and punctual. The convenience of getting quality physiotherapy at home is unmatched. My mother's knee pain has improved significantly."</p>
          <p><strong>- Amit M.</strong></p>
        </div>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="section-padding bg-teal text-center">
    <div class="site-container">
      <h2 style="font-size:clamp(40px, 6vw, 64px); margin-bottom:24px;">Let's get you moving again.</h2>
      <a href="#calendly-popup" class="btn-primary" style="margin-top:24px;">Book a Free 15-Minute Call</a>
    </div>
  </section>

</main>

<dc-import name="Footer"></dc-import>
<div id="pbrVoiceAgent" style="position:relative;z-index:90;">
  <elevenlabs-convai agent-id="agent_4701kwskch1ker1v5s2mpjdabvwq"></elevenlabs-convai>
</div>
</x-dc>

<script type="text/x-dc" data-dc-script>
class Component extends DCLogic {
  componentDidMount(){
    // Lightweight setup if needed
  }
}
</script>
<script defer src="/site-analytics.min.js"></script>
<script defer src="/voice-widget-loader.js"></script>
</body>
</html>
`;

fs.writeFileSync('index.html', html);
console.log('Done rewriting index.html');
