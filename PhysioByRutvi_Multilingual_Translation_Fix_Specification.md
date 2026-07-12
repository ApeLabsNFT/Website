# PhysioByRutvi — Multilingual Translation and Language-Switch Fix Specification

## Version 1.0 | 12 July 2026

This specification explains why the current Marathi and Gujarati versions fail, what Google can and cannot translate for the website, and the recommended implementation for English, Marathi and Gujarati.

---

# 1. Executive Decision

## Recommended solution

Use **Google Cloud Translation at build time**, not Google Translate in the visitor's browser and not the current JavaScript text-replacement system.

The workflow should be:

1. English remains the single source of truth.
2. A build script sends changed English content to Google Cloud Translation.
3. Translations are saved as Marathi and Gujarati locale files.
4. High-risk medical, safety, pricing and consent text is reviewed by a human.
5. The build generates complete static pages at `/mr/...` and `/gu/...`.
6. The language switcher navigates to the equivalent localized URL.

This gives PhysioByRutvi Google-assisted translation without manually recreating every page, while keeping the website fast, indexable and controllable.

## Core rule

> Google may generate the first translation, but the translated result must be stored, reviewed and published as page content. Do not translate the live DOM by searching and replacing English sentences.

---

# 2. Live Website Findings

## Route status

The following routes currently return HTTP 200:

- `/mr/`
- `/gu/`
- `/mr/conditions/`
- `/gu/conditions/`
- `/mr/condition/`
- `/gu/condition/`
- `/mr/about/`
- `/gu/about/`

The routes therefore exist, but this does not mean the language implementation is working.

## What is localized at source

- The `<html lang>` attribute.
- Page title.
- Meta description.
- Canonical URL.
- `hreflang` links.

## What is not reliably localized at source

The main page content is still English in the delivered HTML. Marathi and Gujarati depend on `site-i18n.min.js` running after the page loads.

## Why the current JavaScript fails

The current script:

- Searches text nodes for exact English sentences.
- Replaces a sentence only when it exactly matches an entry in an old dictionary.
- Contains translations for the previous website copy, not the new team-based content.
- Contains old promises such as “same expert every visit” and language implying Dr Rutvi personally conducts every session.
- Mutates metadata and structured data after page load.
- Re-runs through a broad `MutationObserver`, increasing fragility.
- Cannot translate new text until every new English sentence is manually added to the dictionary.

## Structural HTML defect

The current homepage response contains duplicated document structures:

- Two `<html>` openings on the English homepage.
- Multiple `<head>` and `<body>` structures.
- Only one final closing structure.

This malformed HTML must be corrected before further multilingual work. Browsers may attempt recovery differently, which can make the language switch appear inconsistent across devices.

## SEO consequence

A URL marked as Marathi or Gujarati should have its main visible content in that language. Translating only metadata, navigation or a few labels is not sufficient. Google advises using distinct URLs for language versions and making the page language obvious through the primary content.

---

# 3. What Google Can and Cannot Do

## Google Chrome page translation

Chrome can offer visitors a browser-level translation. This is controlled by the browser and the user's language settings.

### Limitation

The website cannot reliably force Chrome's native Translate panel to open from a custom Marathi or Gujarati button. Safari, Firefox, in-app browsers and older devices behave differently. Browser translation is useful as a fallback, not a website language system.

## Old Google Website Translator widget

Do not build around the legacy Google Website Translator element or unofficial widget scripts. It is not a dependable general-purpose production solution for a new commercial website.

## Google Translate proxy URL

A link can theoretically send the visitor through a translated Google proxy. This is not recommended because:

- JavaScript and navigation may behave differently.
- URLs and analytics become confusing.
- The translated version is not a controlled site experience.
- It does not create clean localized pages for search.
- Medical wording can change without review.

## Google Cloud Translation API

Google Cloud Translation is the supported programmable service. It can translate English text into Marathi and Gujarati and supports glossaries in its advanced workflow.

### Correct use for PhysioByRutvi

Use the API during deployment or content publishing. Save the output into locale files, review it, and then generate the localized static pages.

### Incorrect use

Do not expose a Google Cloud API key in frontend JavaScript and translate the entire page on every visit.

---

# 4. Final Language Architecture

## URL model

English:

- `/`
- `/conditions/`
- `/conditions/back-neck-pain/`
- `/how-care-works/`
- `/our-physiotherapists/`
- `/about/`
- `/service-areas/`
- `/faqs/`
- `/book/`

Marathi:

- `/mr/`
- `/mr/conditions/`
- `/mr/conditions/back-neck-pain/`
- `/mr/how-care-works/`
- `/mr/our-physiotherapists/`
- `/mr/about/`
- `/mr/service-areas/`
- `/mr/faqs/`
- `/mr/book/`

Gujarati:

- `/gu/`
- `/gu/conditions/`
- `/gu/conditions/back-neck-pain/`
- `/gu/how-care-works/`
- `/gu/our-physiotherapists/`
- `/gu/about/`
- `/gu/service-areas/`
- `/gu/faqs/`
- `/gu/book/`

Every English page must have an equivalent route or deliberately fall back to English without claiming a false localized version.

## Language switch behaviour

If the visitor is on:

`/conditions/back-neck-pain/`

Selecting Marathi should open:

`/mr/conditions/back-neck-pain/`

Selecting Gujarati should open:

`/gu/conditions/back-neck-pain/`

Selecting English should return to:

`/conditions/back-neck-pain/`

Do not send every language choice back to the homepage.

## No forced redirection

Do not automatically redirect users based only on browser language or IP. Show a dismissible suggestion:

> ही वेबसाइट मराठीत पाहायची आहे का? — मराठीमध्ये पहा

or:

> શું તમે આ વેબસાઇટ ગુજરાતીમાં જોવા માંગો છો? — ગુજરાતી જુઓ

The user must remain able to choose English.

---

# 5. Content Storage Model

## Do not use full English sentences as lookup keys

The current system breaks whenever copy changes. Use stable semantic identifiers.

### Recommended JSON structure

```json
{
  "home.hero.eyebrow": {
    "en": "CLINICALLY LED HOME PHYSIOTHERAPY",
    "mr": "क्लिनिकल मार्गदर्शनाखाली घरपोच फिजिओथेरपी",
    "gu": "ક્લિનિકલ માર્ગદર્શન હેઠળ ઘરઆંગણે ફિઝિયોથેરાપી"
  },
  "home.hero.title": {
    "en": "The right physiotherapist. At your home.",
    "mr": "योग्य फिजिओथेरपिस्ट. तुमच्या घरी.",
    "gu": "યોગ્ય ફિઝિયોથેરાપિસ્ટ. તમારા ઘરે."
  },
  "home.hero.body": {
    "en": "PhysioByRutvi matches you with a qualified physiotherapist for your condition, locality and preferred time—with care standards led by Dr Rutvi Gandhi, PT, MPT.",
    "mr": "तुमची समस्या, परिसर आणि पसंतीची वेळ लक्षात घेऊन PhysioByRutvi योग्य पात्र फिजिओथेरपिस्टची निवड करते. सेवेची काळजीची मानके डॉ. रुत्वी गांधी, PT, MPT यांच्या मार्गदर्शनाखाली ठरवली जातात.",
    "gu": "તમારી તકલીફ, વિસ્તાર અને પસંદગીના સમયને આધારે PhysioByRutvi યોગ્ય લાયકાત ધરાવતા ફિઝિયોથેરાપિસ્ટ સાથે તમારી મુલાકાત ગોઠવે છે. સેવાના કેર સ્ટાન્ડર્ડ્સ ડૉ. રુત્વી ગાંધી, PT, MPTના માર્ગદર્શન હેઠળ નક્કી થાય છે."
  }
}
```

## File structure

Recommended:

```text
/content
  /en
    home.json
    conditions.json
    care.json
    team.json
    about.json
    faq.json
    booking.json
  /mr
    home.json
    conditions.json
    care.json
    team.json
    about.json
    faq.json
    booking.json
  /gu
    home.json
    conditions.json
    care.json
    team.json
    about.json
    faq.json
    booking.json
```

The page template should consume the locale file directly. It should not load English HTML and then search the rendered DOM for sentences to replace.

---

# 6. Build-Time Google Translation Workflow

## Step 1: English content approval

English content must be approved before translation. Unapproved English changes should not immediately overwrite reviewed Marathi or Gujarati content.

## Step 2: Detect changed keys

Store a checksum for each English key. During the build, send only new or changed English values for translation.

## Step 3: Translate through a secure backend or CI process

Call Google Cloud Translation from a server-side build script, CI pipeline or protected admin service. Credentials must remain outside the browser.

Target language codes:

- Marathi: `mr`
- Gujarati: `gu`

## Step 4: Apply glossary rules

Use a glossary or post-processing rules for protected terms.

## Step 5: Save draft translations

Generated values should be marked:

```json
{
  "value": "...",
  "status": "machine_draft",
  "source_hash": "...",
  "reviewed_by": null,
  "reviewed_at": null
}
```

## Step 6: Review high-risk content

Human review is mandatory for:

- Emergency and red-flag guidance.
- Consent and privacy text.
- Pricing, cancellation and refund terms.
- Post-surgery instructions.
- Medical claims and outcome language.
- Therapist qualification and supervision claims.
- WhatsApp messages collecting patient information.

## Step 7: Generate static HTML

Generate full localized HTML including:

- Visible body copy.
- Navigation.
- CTA labels.
- Forms and validation messages.
- `<title>` and meta description.
- Open Graph and social text.
- Structured data.
- Canonical and `hreflang` links.

## Step 8: Deploy and verify

No localized page should ship if its primary content still resolves to English.

---

# 7. Translation Glossary

## Keep unchanged

- PhysioByRutvi
- Dr Rutvi Gandhi
- PT
- BPT
- MPT
- WhatsApp
- Google
- Instagram
- URLs, phone numbers and email addresses

## Place names

Use consistent local-script transliteration, not semantic translation:

| English | Marathi | Gujarati |
| --- | --- | --- |
| Bhayander | भायंदर | ભાઈંદર |
| Mira Road | मीरा रोड | મીરા રોડ |
| Dahisar | दहिसर | દહિસર |
| Borivali | बोरिवली | બોરીવલી |
| Kandivali | कांदिवली | કાંદિવલી |
| Malad | मालाड | માલાડ |
| Goregaon | गोरेगाव | ગોરેગાંવ |
| Jogeshwari | जोगेश्वरी | જોગેશ્વરી |
| Andheri | अंधेरी | અંધેરી |

## Core service terms

| English | Marathi | Gujarati |
| --- | --- | --- |
| Home physiotherapy | घरपोच फिजिओथेरपी | ઘરઆંગણે ફિઝિયોથેરાપી |
| Physiotherapist | फिजिओथेरपिस्ट | ફિઝિયોથેરાપિસ્ટ |
| Home visit | घरभेट | ઘર મુલાકાત |
| Assessment | तपासणी / मूल्यांकन | મૂલ્યાંકન |
| Treatment plan | उपचार योजना | સારવાર યોજના |
| Recovery | पुनर्वसन / रिकव्हरी | પુનર્વસન / રિકવરી |
| Post-surgery rehabilitation | शस्त्रक्रियेनंतरचे पुनर्वसन | સર્જરી પછીનું પુનર્વસન |
| Sports injury | खेळातील दुखापत | રમતગમતની ઇજા |
| Back and neck pain | पाठ आणि मानदुखी | પીઠ અને ગરદનનો દુખાવો |
| Knee and joint pain | गुडघा आणि सांधेदुखी | ઘૂંટણ અને સાંધાનો દુખાવો |
| Senior mobility | ज्येष्ठांची हालचाल आणि संतुलन | વરિષ્ઠોની હલનચલન અને સંતુલન |
| Check availability | उपलब्धता तपासा | ઉપલબ્ધતા તપાસો |
| Book a home visit | घरभेटीसाठी विनंती करा | ઘર મુલાકાત માટે વિનંતી કરો |

Final terminology should be reviewed for natural local usage. Avoid translating every English clinical term literally when patients commonly use a transliterated form.

---

# 8. Core Interface Translation Pack

These translations are suitable as the first reviewed UI layer. They should still receive native-language review before healthcare publication.

## Navigation

| English | Marathi | Gujarati |
| --- | --- | --- |
| Home | मुख्यपृष्ठ | હોમ |
| Conditions | समस्या आणि उपचार | તકલીફો અને સારવાર |
| How Care Works | सेवा कशी चालते | સેવા કેવી રીતે ચાલે છે |
| Our Physiotherapists | आमचे फिजिओथेरपिस्ट | અમારા ફિઝિયોથેરાપિસ્ટ |
| About Dr Rutvi | डॉ. रुत्वी यांच्याबद्दल | ડૉ. રુત્વી વિશે |
| Service Areas | सेवा क्षेत्र | સેવા વિસ્તાર |
| FAQs | नेहमी विचारले जाणारे प्रश्न | વારંવાર પૂછાતા પ્રશ્નો |
| Check Availability | उपलब्धता तपासा | ઉપલબ્ધતા તપાસો |

## Homepage hero

**English eyebrow:** CLINICALLY LED HOME PHYSIOTHERAPY

**Marathi:** क्लिनिकल मार्गदर्शनाखाली घरपोच फिजिओथेरपी

**Gujarati:** ક્લિનિકલ માર્ગદર્શન હેઠળ ઘરઆંગણે ફિઝિયોથેરાપી

**English headline:** The right physiotherapist. At your home.

**Marathi:** योग्य फिजिओथेरपिस्ट. तुमच्या घरी.

**Gujarati:** યોગ્ય ફિઝિયોથેરાપિસ્ટ. તમારા ઘરે.

**English body:** PhysioByRutvi matches you with a qualified physiotherapist for your condition, locality and preferred time—with care standards led by Dr Rutvi Gandhi, PT, MPT.

**Marathi:** तुमची समस्या, परिसर आणि पसंतीची वेळ लक्षात घेऊन PhysioByRutvi योग्य पात्र फिजिओथेरपिस्टची निवड करते. सेवेची काळजीची मानके डॉ. रुत्वी गांधी, PT, MPT यांच्या मार्गदर्शनाखाली ठरवली जातात.

**Gujarati:** તમારી તકલીફ, વિસ્તાર અને પસંદગીના સમયને આધારે PhysioByRutvi યોગ્ય લાયકાત ધરાવતા ફિઝિયોથેરાપિસ્ટ સાથે તમારી મુલાકાત ગોઠવે છે. સેવાના કેર સ્ટાન્ડર્ડ્સ ડૉ. રુત્વી ગાંધી, PT, MPTના માર્ગદર્શન હેઠળ નક્કી થાય છે.

**English primary CTA:** Check Home-Visit Availability

**Marathi:** घरभेटीची उपलब्धता तपासा

**Gujarati:** ઘર મુલાકાતની ઉપલબ્ધતા તપાસો

**English secondary CTA:** Explore Conditions

**Marathi:** समस्या आणि उपचार पहा

**Gujarati:** તકલીફો અને સારવાર જુઓ

## Assignment explanation

**English:** The physiotherapist visiting you may be Dr Rutvi or another qualified member of the PhysioByRutvi care team. Matching considers the nature of the concern, therapist experience, location, language and availability.

**Marathi:** तुमच्या घरभेटीसाठी डॉ. रुत्वी किंवा PhysioByRutvi केअर टीममधील दुसरे पात्र फिजिओथेरपिस्ट येऊ शकतात. निवड करताना समस्या, संबंधित अनुभव, परिसर, भाषा आणि उपलब्धता विचारात घेतली जाते.

**Gujarati:** તમારી ઘર મુલાકાત માટે ડૉ. રુત્વી અથવા PhysioByRutvi કેર ટીમના અન્ય લાયકાત ધરાવતા ફિઝિયોથેરાપિસ્ટ આવી શકે છે. પસંદગી વખતે તકલીફનો પ્રકાર, સંબંધિત અનુભવ, વિસ્તાર, ભાષા અને ઉપલબ્ધતા ધ્યાનમાં લેવામાં આવે છે.

## Continuity explanation

**English:** Once care begins, we aim to maintain continuity with the assigned physiotherapist. If a change becomes necessary, it is communicated clearly and the relevant case information is handed over.

**Marathi:** उपचार सुरू झाल्यानंतर शक्यतो तेच नियुक्त फिजिओथेरपिस्ट पुढील भेटी घेत राहतील. बदल आवश्यक झाल्यास तो स्पष्टपणे कळवला जाईल आणि आवश्यक माहिती पुढील फिजिओथेरपिस्टकडे सुरक्षितपणे दिली जाईल.

**Gujarati:** સારવાર શરૂ થયા પછી શક્ય હોય ત્યાં સુધી એ જ નિમણૂક કરાયેલા ફિઝિયોથેરાપિસ્ટ આગળની મુલાકાતો ચાલુ રાખશે. ફેરફાર જરૂરી બને તો તે સ્પષ્ટ રીતે જણાવવામાં આવશે અને જરૂરી કેસ માહિતી સુરક્ષિત રીતે નવા ફિઝિયોથેરાપિસ્ટને આપવામાં આવશે.

## Standard safety message

**English:** PhysioByRutvi is not an emergency service. Sudden severe symptoms, new weakness, loss of bladder or bowel control, severe trauma, chest pain or difficulty breathing require urgent medical attention.

**Marathi draft:** PhysioByRutvi ही आपत्कालीन सेवा नाही. अचानक तीव्र लक्षणे, नवीन अशक्तपणा, लघवी किंवा शौचावरील नियंत्रण कमी होणे, गंभीर दुखापत, छातीत दुखणे किंवा श्वास घेण्यास त्रास झाल्यास तातडीने वैद्यकीय मदत घ्या.

**Gujarati draft:** PhysioByRutvi ઇમરજન્સી સેવા નથી. અચાનક ગંભીર લક્ષણો, નવું નબળાઈ અનુભવવું, મૂત્ર અથવા મળ પરનો કાબૂ ગુમાવવો, ગંભીર ઇજા, છાતીમાં દુખાવો અથવા શ્વાસ લેવામાં તકલીફ થાય તો તાત્કાલિક તબીબી મદદ લો.

This safety message requires clinical and native-language review before publication.

---

# 9. SEO Implementation

## Server/static HTML requirement

The translated title, description and main content must exist in the HTML response. Do not depend on JavaScript to create the language after loading.

## Canonical URLs

Each language page should canonicalize to itself:

- English page canonical → English URL.
- Marathi page canonical → Marathi URL.
- Gujarati page canonical → Gujarati URL.

## `hreflang`

Every equivalent page should include:

```html
<link rel="alternate" hreflang="en-IN" href="https://physiobyrutvi.in/conditions/back-neck-pain/">
<link rel="alternate" hreflang="mr-IN" href="https://physiobyrutvi.in/mr/conditions/back-neck-pain/">
<link rel="alternate" hreflang="gu-IN" href="https://physiobyrutvi.in/gu/conditions/back-neck-pain/">
<link rel="alternate" hreflang="x-default" href="https://physiobyrutvi.in/conditions/back-neck-pain/">
```

Links must be reciprocal across all three pages.

## Sitemap

Only add a localized URL to the sitemap after the body content is genuinely localized and the page passes QA.

## Structured data

Do not inject a duplicate business schema through JavaScript. Generate one valid structured-data graph per page. Localize page name, description and language while keeping business identity consistent.

---

# 10. Immediate Repair Plan

## Phase 0 — Emergency cleanup

1. Fix duplicated `<html>`, `<head>` and `<body>` markup.
2. Remove the old `site-i18n.min.js` DOM translation system.
3. Remove old solo-practitioner translations and claims.
4. Stop mutating titles, canonical links and schema after page load.
5. Verify that the English site renders correctly without the translation script.

## Phase 1 — Safe temporary state

Until localized content is generated:

- Keep the website in English.
- Hide Marathi and Gujarati routes from navigation and sitemap, or label them “translation in progress.”
- Do not present English-body pages as completed Marathi/Gujarati pages.
- Optionally show instructions that Chrome users can use browser translation, but do not treat it as the official experience.

## Phase 2 — Locale data and build system

1. Move all English content into stable-key JSON or CMS fields.
2. Add Google Cloud Translation to the build workflow.
3. Create glossary and protected-term rules.
4. Generate Marathi and Gujarati draft files.
5. Review safety, consent, pricing and medical language.

## Phase 3 — Publish complete routes

1. Build actual localized HTML.
2. Connect equivalent language routes.
3. Add canonical and `hreflang` tags.
4. Add localized URLs to the sitemap.
5. Test navigation, forms, WhatsApp, analytics and structured data in every language.

---

# 11. Acceptance Tests

## HTML

- Exactly one `<!DOCTYPE html>`.
- Exactly one `<html>`, `<head>` and `<body>` structure.
- Correct `lang` value in initial HTML.
- Main body contains the selected language before JavaScript runs.

## Language switcher

- Preserves the equivalent page path.
- Preserves query parameters only when safe and necessary.
- Marks the active language.
- Works with JavaScript disabled.
- Does not depend on DOM text matching.

## Translation quality

- No old “Dr Rutvi every visit” claim.
- No untranslated English paragraphs except protected terms.
- No mixed-language buttons or form errors.
- Medical safety text reviewed.
- Place names consistent.
- Phone numbers, links and brand name unchanged.

## SEO

- Self-canonical on every localized page.
- Reciprocal `hreflang` set.
- Localized title and description in initial HTML.
- Localized primary body content.
- Correct localized URL in sitemap.
- One structured-data graph without conflicting duplicates.

## Analytics

Track:

- `language_switch`
- `page_language`
- `translation_fallback_shown`
- `click_whatsapp`
- `click_call`
- `booking_request`

Include the selected language as an event parameter.

---

# 12. Final Recommendation

Do not choose between “manual language pages” and “Google translation” as if they are opposites.

Use Google to generate and update translations, but publish the output as real Marathi and Gujarati pages. This gives the convenience of machine translation and the reliability of static localized pages.

The correct final model is:

> English source content → Google Cloud translation draft → glossary and human review → stored locale files → static localized routes → language switcher.

This is the most reliable approach for a healthcare website hosted as a static site and intended to gain local search visibility.

---

# 13. Official References

- Google Search Central — Managing multilingual sites: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- Google Search Central — Localized page versions and `hreflang`: https://developers.google.com/search/docs/specialty/international/localized-versions
- Google Search Central — Locale-adaptive page crawling limitations: https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages
- Google Cloud — Translation API overview: https://docs.cloud.google.com/translate/docs/api-overview
- Google Cloud — Translation setup and authentication: https://docs.cloud.google.com/translate/docs/setup
- Google Chrome Help — Browser page translation: https://support.google.com/chrome/answer/173424

