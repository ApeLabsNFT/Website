# Physio by Rutvi Website

Static website for `physiobyrutvi.in`.

## Build and verify

`node build_static.js` generates the public HTML from `Home.dc.html`, `Conditions.dc.html`, the page builder and `lead-sections.js`. Edit those sources instead of generated HTML. The builder also synchronises `site-analytics.min.js` with its readable source; this entry is intentionally dependency-free and not separately minified.

Run `node test_static.js` and `node test_leads.js` before publishing. Preview with a static HTTP server; root-relative links require serving the project root.

## Deploy

This project is deployed on **GitHub Pages**. The website is automatically published when changes are pushed to the `main` branch.

- Repository: `https://github.com/ApeLabsNFT/Website`
- Production branch: `main`
- Published at: `https://physiobyrutvi.in/`

To deploy:
1. Make changes and commit to the repository
2. Push to `main` branch
3. GitHub Pages automatically deploys within seconds

## Domain

The live domain points to GitHub Pages:

- `physiobyrutvi.in`
- `www.physiobyrutvi.in`

GitHub Pages is configured as the primary host for the domain.

## Google Business

The website includes business structured data, and `robots.txt` points to `sitemap.xml`. The current Google Business Profile verification status must be checked in the owner's account; a DNS verification record alone does not establish Business Profile verification. See `google-business-profile-copy.md` for consistent service copy and tagged website links.

## Analytics

Google tag `G-3CLP6GLVNE` loads from `site-analytics.min.js` on the production domain only. `click_whatsapp`, `click_call`, `click_calendly` and `click_email` describe contact intent, not confirmed enquiries or appointments. Events include `contact_method` and `cta_location`; custom events exclude WhatsApp draft contents and selected preferences. Register these custom dimensions in GA4 to compare placements. Preview traffic is excluded. Inspect the GA4 stream's enhanced-measurement settings separately; this local change does not alter account-level settings.

The enquiry helper prepares a WhatsApp draft using optional suburb/time choices. It has no database or form endpoint. The visitor must send the message in WhatsApp. Direct WhatsApp/call links remain available without JavaScript.

## Voice Agent

The ElevenLabs ConvAI widget (`agent_4701kwskch1ker1v5s2mpjdabvwq`) loads only after the visitor opens the voice assistant near the footer, keeping the booking bar clear on arrival. Updating the local voice knowledge file does not update the hosted agent; publish that copy separately through the platform.

Use `voice-agent-knowledge.md` as the agent's knowledge/system prompt in ElevenLabs or a future Sarvam-backed voice agent. A true Sarvam implementation must keep `SARVAM_API_KEY` server-side in hosting environment variables; do not expose it in static frontend code.
