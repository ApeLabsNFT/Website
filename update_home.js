const fs = require('fs');

let home = fs.readFileSync('Home.dc.html', 'utf8');

// 1. Wrap in <main>
home = home.replace('<dc-import name="Header" hint-size="100%,66px"></dc-import>', '<dc-import name="Header" hint-size="100%,66px"></dc-import>\n<main id="main-content">');
home = home.replace('<dc-import name="Footer"></dc-import>', '</main>\n<dc-import name="Footer"></dc-import>');

// 2. Fix multiple H1s (Slide 2 and Slide 3 should use h2)
home = home.replace('<h1 style="font-family:\'Fraunces\',serif;font-weight:600;text-transform:uppercase;font-size:clamp(42px,8.6vw,98px);line-height:.95;letter-spacing:-.03em;color:#0E4F52;">THE SAME<br>EXPERT.<br>EVERY VISIT.</h1>', '<h2 style="font-family:\'Fraunces\',serif;font-weight:600;text-transform:uppercase;font-size:clamp(42px,8.6vw,98px);line-height:.95;letter-spacing:-.03em;color:#0E4F52;margin:0;">THE SAME<br>EXPERT.<br>EVERY VISIT.</h2>');
home = home.replace('<h1 style="font-family:\'Fraunces\',serif;font-weight:600;text-transform:uppercase;font-size:clamp(42px,8.6vw,98px);line-height:.95;letter-spacing:-.03em;color:#FDF8F5;">HEAL IN THE<br>COMFORT OF<br>HOME.</h1>', '<h2 style="font-family:\'Fraunces\',serif;font-weight:600;text-transform:uppercase;font-size:clamp(42px,8.6vw,98px);line-height:.95;letter-spacing:-.03em;color:#FDF8F5;margin:0;">HEAL IN THE<br>COMFORT OF<br>HOME.</h2>');

// 3. Fix Contrast (change #EE7B5B to #C75B3B where it's used as text on light background)
home = home.replace(/color:#EE7B5B;/g, 'color:#D15B3A;');
// For the star rating which is fine, but maybe change the text "★★★★★"
home = home.replace('<span style="color:#EE7B5B;letter-spacing:1px;font-size:10px;">&#9733;&#9733;&#9733;&#9733;&#9733;</span>', '<span style="color:#D15B3A;letter-spacing:1px;font-size:10px;" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span><span class="sr-only" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0;">5 out of 5 stars</span>');

// 4. Update Hero Slide 1 (New Content)
home = home.replace('DOCTOR-LED HOME PHYSIOTHERAPY', 'CLINICALLY LED HOME PHYSIOTHERAPY');
home = home.replace('PHYSIOTHERAPY<br>THAT COMES<br>TO YOU.', 'THE RIGHT<br>PHYSIOTHERAPIST.<br>AT YOUR HOME.');
home = home.replace('Expert, one-on-one care from Dr Rutvi Gandhi, in your own home, across Mumbai\'s western suburbs.', 'PhysioByRutvi matches you with a qualified physiotherapist for your condition, locality and preferred time-with care standards led by Dr Rutvi Gandhi, PT, MPT.');
home = home.replace('Chat on WhatsApp', 'Check Availability');

// Update Slide 1 trust line
home = home.replace('5.0 &middot; MPT Sports &amp; Musculoskeletal &middot; Same expert, every visit', 'Qualified physiotherapists &middot; In-home assessment &middot; Continuity wherever possible');

// 5. Update Slide 2 (New Content) -> FROM FIRST MESSAGE TO FIRST VISIT
home = home.replace('WHY PATIENTS SWITCH TO HER', 'FROM FIRST MESSAGE TO FIRST VISIT');
home = home.replace('THE SAME<br>EXPERT.<br>EVERY VISIT.</h2>', 'A CLEARER<br>WAY TO<br>BEGIN.</h2>'); // Keeping the same visual weight
home = home.replace('Unlike aggregator platforms that dispatch different therapists, Dr Rutvi handles your assessment and your entire recovery journey personally.', 'Tell us what is happening, we check suitability, assign a matched physiotherapist, and begin with an assessment.');
home = home.replace('href="#how"', 'href="/how-care-works/"');
home = home.replace('How it works', 'How Care Works');

// Update Slide 2 trust line
home = home.replace('No rotating staff &middot; Direct communication &middot; Personalised progression', 'Clear explanations &middot; Progress checkpoints &middot; Appropriate escalation');

// 6. Update Slide 3 (New Content) -> WHY HOME CAN BE CLINICALLY USEFUL
home = home.replace('WHY IN-HOME CARE?', 'WHY HOME CAN BE CLINICALLY USEFUL');
home = home.replace('HEAL IN THE<br>COMFORT OF<br>HOME.</h2>', 'RECOVERY<br>WHERE LIFE<br>HAPPENS.</h2>');
home = home.replace('Skip the painful commute. Receive treatment in the environment where your daily movements actually happen.', 'At home, the physiotherapist can see the chair that aggravates your back or the stairs you climb, making the plan more practical.');
home = home.replace('href="#conditions"', 'href="/conditions/"');

// Update Slide 3 trust line
home = home.replace('Safe environment &middot; Practical exercises &middot; Family involvement', 'No difficult commute &middot; Real-world assessment &middot; Practical home programme');

// 7. Update "What we treat" section
home = home.replace('Conditions Treated', 'What we help with');
home = home.replace('From acute sports injuries to age-related mobility issues, Dr Rutvi brings specialised clinical expertise to a wide range of musculoskeletal conditions.', 'Pain and stiffness &middot; Sports injuries &middot; Post-surgery rehabilitation &middot; Joint recovery &middot; Senior mobility &middot; Strength and return to activity');
home = home.replace('You do not need to have a clinical diagnosis before you call. Part of the first session is assessing your movement to understand exactly what is wrong.', 'You do not need to know the diagnosis before you contact us. Tell us what has changed: sleeping, walking, lifting, or recovering after surgery.');

// Update condition links and titles
// Back & Neck
home = home.replace('Back &amp; Neck Pain', 'Back and neck pain');
home = home.replace('For slipped discs, sciatica, cervical spondylosis and acute postural stiffness from desk work.', 'For pain, stiffness or discomfort affecting work, sleep, lifting and everyday movement.');
home = home.replace('href="/condition/#back-neck"', 'href="/conditions/back-and-neck-pain/"');

// Sports Injury
home = home.replace('Sports Injuries', 'Sports injuries');
home = home.replace('For sprains, strains, ligament tears (ACL/MCL) and safe return-to-sport programming.', 'For sprains, strains, recurring injuries and a planned return to running, the gym or sport.');
home = home.replace('href="/condition/#sports-injury"', 'href="/conditions/sports-injuries/"');

// Post-Surgery
home = home.replace('Post-Surgery Rehab', 'Post-surgery rehabilitation');
home = home.replace('For total knee/hip replacements, spinal surgeries and fracture recovery in a safe home environment.', 'For guided recovery after knee, hip, ACL, shoulder, fracture or spine procedures, in coordination with medical advice.');
home = home.replace('href="/condition/#post-surgery"', 'href="/conditions/post-surgery-rehabilitation/"');

// Knee & Joint
home = home.replace('Knee &amp; Joint Pain', 'Knee and joint pain');
home = home.replace('For osteoarthritis, rheumatoid flare-ups, meniscus issues and general age-related joint stiffness.', 'For stiffness, swelling and difficulty with walking, stairs, standing or daily activity.');
home = home.replace('href="/condition/#knee-joint"', 'href="/conditions/knee-and-joint-pain/"');

// Sciatica
home = home.replace('Sciatica', 'Sciatica and nerve-related leg pain');
home = home.replace('For sharp, shooting pain traveling down the leg, often accompanied by numbness or tingling.', 'For pain, tingling or numbness travelling from the lower back into the leg.');
home = home.replace('href="/condition/#sciatica"', 'href="/conditions/sciatica/"');

// Geriatric Mobility
home = home.replace('Geriatric Mobility', 'Senior mobility');
home = home.replace('For fall prevention, balance training, generalized weakness and restoring independent movement in older adults.', 'For balance, strength, walking confidence and safer movement within the home.');
home = home.replace('href="/condition/#geriatric"', 'href="/conditions/senior-mobility/"');

// 8. Update "How it works" -> "Who will visit?"
home = home.replace('HOW IT WORKS', 'YOUR PHYSIOTHERAPIST');
home = home.replace('The process of starting care.', 'Matched for your need-not assigned at random.');
home = home.replace('Dr Rutvi handles every step personally to ensure nothing is lost in translation between assessment and ongoing treatment.', 'The physiotherapist visiting you may be Dr Rutvi or another qualified member of the PhysioByRutvi care team. Matching considers the nature of the concern, therapist experience, location, language and availability.');

// Remove the old steps from Home.dc.html and just link to the new page.
// We'll replace the steps grid with a simpler message and a CTA.
const stepsGridRegex = /<div style="display:grid;grid-template-columns:repeat\(auto-fit,minmax\(min\(100%,300px\),1fr\)\);gap:clamp\(32px,5vw,48px\);margin-top:56px;">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
const newWhoWillVisit = `<div style="display:grid;grid-template-columns:1fr;gap:32px;margin-top:40px;max-width:800px;">
  <p style="font-size:18px; color:#4A4F4B; line-height:1.6;">Once care begins, we aim to maintain continuity with the assigned physiotherapist. If a change becomes necessary, it is communicated clearly and the relevant case information is handed over.</p>
  <a href="/our-physiotherapists/" style="display:inline-flex;align-items:center;gap:6px;color:#D15B3A;font-weight:600;font-size:16px;text-decoration:none;">Meet the Care Team <span>&#8594;</span></a>
</div></div></section>`;
home = home.replace(stepsGridRegex, newWhoWillVisit);

// 9. Update "The Clinician" -> "Founder"
home = home.replace('THE CLINICIAN', 'FOUNDED AND CLINICALLY LED BY');
home = home.replace('Dr Rutvi Gandhi<br><span style="font-size:clamp(20px,3vw,28px);color:#EE7B5B;font-weight:600;letter-spacing:0;text-transform:none;">PT, MPT (Sports &amp; Musculoskeletal)</span>', 'Dr Rutvi Gandhi<br><span style="font-size:clamp(20px,3vw,28px);color:#D15B3A;font-weight:600;letter-spacing:0;text-transform:none;">PT, MPT</span>');
home = home.replace('With a Master of Physiotherapy (MPT) specializing in Musculoskeletal and Sports rehabilitation, Dr Rutvi brings advanced diagnostic and manual therapy skills directly to the patient\'s home.', 'Dr Rutvi Gandhi specialises in musculoskeletal and sports physiotherapy. She founded PhysioByRutvi to build a home-care experience that remains personal as the team grows: thoughtful matching, clear assessment, practical plans and honest escalation when physiotherapy is not enough.');
home = home.replace('She focuses on evidence-based treatment-combining hands-on manual therapy for immediate pain relief with targeted exercise prescription for long-term strength and injury prevention.', 'Credentials: MPT, Musculoskeletal and Sports Physiotherapy &middot; BPT &middot; Training across manual therapy, sports rehabilitation and therapeutic exercise.');

// Update image width and height attributes in Home.dc.html
home = home.replace('<img src="/assets/dr-rutvi-profile.webp" alt="Dr Rutvi Gandhi" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;">', '<img src="/assets/dr-rutvi-profile.webp" alt="Dr Rutvi Gandhi" width="800" height="1000" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;">');

// 10. Update Coverage Area
home = home.replace('HOME VISITS ACROSS', 'HOME VISITS ACROSS WESTERN MUMBAI');
home = home.replace('MUMBAI\'S WESTERN SUBURBS', 'Check availability in your suburb.');
home = home.replace('Currently serving patients in the corridor between <strong>Bhayander</strong> and <strong>Andheri</strong>.', 'Bhayander &middot; Mira Road &middot; Dahisar &middot; Borivali &middot; Kandivali &middot; Malad &middot; Goregaon &middot; Jogeshwari &middot; Andheri');
home = home.replace('Home visits are scheduled by appointment only. Travel feasibility depends on the requested time slot and current clinical caseload.', 'Availability depends on the therapist, condition, travel time and requested slot.');

// Fix preconnects in <helmet> (only need them once in the head of index.html, not in helmet)
home = home.replace('<link rel="preconnect" href="https://fonts.googleapis.com">\n', '');
home = home.replace('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n', '');

fs.writeFileSync('Home.dc.html', home);
console.log("Updated Home.dc.html");

// Now let's fix index.html
let index = fs.readFileSync('index.html', 'utf8');

// Copy everything inside <x-dc> from Home.dc.html to index.html
const startTag = '<x-dc>';
const endTag = '</x-dc>';
const homeContent = home.substring(home.indexOf(startTag) + startTag.length, home.lastIndexOf(endTag));
const indexBefore = index.substring(0, index.indexOf(startTag) + startTag.length);
const indexAfter = index.substring(index.lastIndexOf(endTag));
index = indexBefore + homeContent + indexAfter;

// Fix preconnects in index.html <head>
// Keep one for fonts.googleapis.com and fonts.gstatic.com
// Just leave them as is, they are fine, but ensure they don't duplicate.
index = index.replace('<meta property="og:image" content="https://physiobyrutvi.in/assets/social-share.png">', '<meta property="og:image" content="https://physiobyrutvi.in/assets/pbr-app-icon.png">');
index = index.replace('<meta name="twitter:image" content="https://physiobyrutvi.in/assets/social-share.png">', '<meta name="twitter:image" content="https://physiobyrutvi.in/assets/pbr-app-icon.png">');

// Update SEO tags in index.html to reflect the new team-based messaging
index = index.replace('Doctor-led home physiotherapy by Dr Rutvi Gandhi, PT, MPT, for back pain, sports injury, post-surgery rehab and senior mobility across Bhayander to Andheri.', 'Book qualified physiotherapists for home visits across Bhayander to Andheri. Assessment-led care for pain, injury, post-surgery recovery and mobility needs.');
// Also replace it inside the helmet string if present
index = index.replace(/Doctor-led home physiotherapy by Dr Rutvi Gandhi, PT, MPT, for back pain, sports injury, post-surgery rehab and senior mobility across Bhayander to Andheri./g, 'Book qualified physiotherapists for home visits across Bhayander to Andheri. Assessment-led care for pain, injury, post-surgery recovery and mobility needs.');

fs.writeFileSync('index.html', index);
console.log("Updated index.html");
