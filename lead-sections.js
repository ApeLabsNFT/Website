// Shared, server-rendered enquiry sections. No patient details are collected here.
const AREAS = ['Bhayander', 'Mira Road', 'Dahisar', 'Borivali', 'Kandivali', 'Malad', 'Goregaon', 'Jogeshwari', 'Andheri'];

function enquirySection(whatsapp, phone, calendly, standalone = false) {
  return `<section id="enquire" class="pbr-enquiry" aria-labelledby="enquiry-title" data-lead-location="enquiry">
    <div class="pbr-shell pbr-enquiry__grid">
      <div><p class="pbr-eyebrow">HOME VISIT ENQUIRIES</p>
        <${standalone ? 'h1' : 'h2'} id="enquiry-title">Check availability<br>in your area.</${standalone ? 'h1' : 'h2'}>
        <p>Ask about a home visit for yourself or a family member. Start with your suburb and preferred time.</p>
        <ol class="pbr-enquiry__steps"><li>Send your enquiry on WhatsApp.</li><li>Ask the care team about availability, the visit fee and the physiotherapist.</li><li>Confirm the details together before booking a home visit.</li></ol>
        <p class="pbr-small">Prefer to speak? <a href="${phone}">Call +91 88794 75065</a>, or <a href="${calendly}" target="_blank" rel="noopener">schedule a free 15-minute call</a>. The introductory call is separate from a home visit.</p>
      </div>
      <div class="pbr-enquiry__card" data-enquiry-builder>
        <${standalone ? 'h2' : 'h3'}>Ask about fees &amp; a home visit</${standalone ? 'h2' : 'h3'}>
        <p>Choose your preferences to prepare a message. Both are optional.</p>
        <div class="pbr-enquiry__fields" data-enquiry-fields hidden>
          <label for="enquiry-area">Your suburb</label>
          <select id="enquiry-area" data-enquiry-area><option value="">Choose your suburb</option>${AREAS.map(area => `<option>${area}</option>`).join('')}<option value="Other area">Another area (ask the team)</option></select>
          <label for="enquiry-time">Preferred time</label>
          <select id="enquiry-time" data-enquiry-time><option value="">I'm flexible</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select>
        </div>
        <a class="pbr-action pbr-action--primary" data-enquiry-link href="${whatsapp}" target="_blank" rel="noopener">Continue on WhatsApp</a>
        <p class="pbr-small">WhatsApp opens with a draft. Send it there to contact us; this website does not submit a booking.</p>
        <p class="pbr-small">No medical reports needed for this enquiry. <a href="/privacy-policy/">Privacy</a></p>
      </div>
    </div>
  </section>`;
}

function heroSection(whatsapp, phone) {
  return `<section class="pbr-lead-hero" aria-labelledby="home-title" data-lead-location="hero">
    <div class="pbr-shell pbr-lead-hero__grid">
      <div class="pbr-lead-hero__copy">
        <p class="pbr-eyebrow">MUMBAI'S WESTERN SUBURBS · BHAYANDER TO ANDHERI</p>
        <h1 id="home-title">Physiotherapy.<br><em>At your home.</em></h1>
        <p class="pbr-lead-hero__intro">Care for back &amp; neck pain, knee problems, recovery after surgery and senior mobility, without the journey to a clinic.</p>
        <div class="pbr-actions"><a class="pbr-action pbr-action--primary" href="${whatsapp}" target="_blank" rel="noopener">Ask about fees &amp; availability</a><a class="pbr-action pbr-action--secondary" href="${phone}">Call the care team</a></div>
        <p class="pbr-small">Enquiring for a parent or family member? You're welcome to contact us on their behalf.</p>
        <div class="pbr-lead-hero__trust"><strong>Led by Dr Rutvi K Gandhi (PT)</strong><span>MPT · Sports &amp; Musculoskeletal Physiotherapy</span><span>Home visits by a physiotherapist matched to your needs.</span><a href="#reviews">Read patient feedback</a></div>
      </div>
      <figure class="pbr-lead-hero__visual"><img src="/assets/img/hero-1.webp" width="1536" height="1024" fetchpriority="high" loading="eager" alt="Physiotherapy shoulder treatment in a home setting"><figcaption>One-on-one care. In a familiar space.</figcaption></figure>
    </div>
  </section>
  <section class="pbr-need-links" aria-label="Find care for your needs"><div class="pbr-shell"><p class="pbr-eyebrow">WHAT DO YOU NEED HELP WITH?</p><div>
    <a href="/conditions/back-neck-pain/">Back &amp; neck pain</a><a href="/conditions/knee-joint-pain/">Knee &amp; joint pain</a><a href="/services/post-operative-rehabilitation/">Recovery after surgery</a><a href="/services/senior-physiotherapy/">Care for a parent</a><a href="/conditions/">All conditions →</a>
  </div></div></section>`;
}

function bookingFaqs() {
  return `<section class="pbr-booking-faq"><div class="pbr-shell"><p class="pbr-eyebrow">BEFORE YOU BOOK</p><h2>A few useful answers.</h2>
    <details><summary>What does a home visit cost?</summary><p>Ask the care team for the fee for your location and care needs. Confirm the total visit fee and what it includes before agreeing to a booking.</p></details>
    <details><summary>Do you visit my area?</summary><p>We serve ${AREAS.join(', ')}. A visit depends on the location, timing and therapist availability. <a href="/contact/#enquire">Check your area with the care team</a>.</p></details>
    <details><summary>Will Dr Rutvi be my physiotherapist?</summary><p>Dr Rutvi is the Founder and Clinical Lead. Your visit may be with another suitably qualified physiotherapist matched to your needs and location. Ask the team who will attend before booking.</p></details>
    <details><summary>Is the free call a treatment session?</summary><p>No. The free 15-minute introductory call is a chance to discuss the service and next steps. Home assessment and treatment are separate appointments.</p></details>
  </div></section>`;
}

module.exports = { enquirySection, heroSection, bookingFaqs };
