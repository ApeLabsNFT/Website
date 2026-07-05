# Physio by Rutvi Website

Static website for `physiobyrutvi.in`.

## Deploy

This project is a static site. On Netlify, use:

- Build command: leave empty
- Publish directory: `.`
- Production branch: `main`

Pushes to `main` should publish the latest files only after the Netlify site is connected to this GitHub repository.

## Domain

The live domain is intended to point to Netlify:

- `physiobyrutvi.in`
- `www.physiobyrutvi.in`

Keep DNS on one provider at a time. If Netlify is the production host, do not switch the Hostinger DNS back to Vercel records.

## Google Business

The homepage includes LocalBusiness/MedicalBusiness structured data for Dr Rutvi Gandhi and `robots.txt` points Google to `sitemap.xml`. Google Business Profile verification still has to be completed inside Google Business Profile or Search Console with the verification method Google provides.

The DNS panel already shows a Google verification TXT record. Keep that record while managing Netlify DNS. Add the Google Business Profile website URL as `https://physiobyrutvi.in/` inside Google Business Profile after Netlify is live.

## Analytics

Google tag `G-3CLP6GLVNE` is installed in the page heads. WhatsApp, call, and voice-agent clicks emit lead events when `gtag` is available.

## Voice Agent

The site embeds the ElevenLabs ConvAI widget with agent id `agent_4701kwskch1ker1v5s2mpjdabvwq`.

Use `voice-agent-knowledge.md` as the agent's knowledge/system prompt in ElevenLabs or a future Sarvam-backed voice agent. A true Sarvam implementation must keep `SARVAM_API_KEY` server-side in hosting environment variables; do not expose it in static frontend code.
