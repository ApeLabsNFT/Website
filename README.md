# Physio by Rutvi Website

Static website for `physiobyrutvi.in`.

## Deploy

This project is ready for Vercel static hosting. Push the repository to GitHub and let the connected Vercel project deploy from the default branch.

## Domain

Point the Hostinger DNS records to Vercel after the Vercel project is deployed:

- `A` record for `@` -> `76.76.21.21`
- `CNAME` record for `www` -> `cname.vercel-dns.com`

Remove old Hostinger website records that point `@` or `www` to Hostinger hosting before switching live traffic.

## Google Business

The homepage includes LocalBusiness/MedicalBusiness structured data for Dr Rutvi Gandhi and `robots.txt` points Google to `sitemap.xml`. Google Business Profile verification still has to be completed inside Google Business Profile or Search Console with the verification method Google provides.

The DNS panel already shows a Google verification TXT record. Keep that record when changing Hostinger DNS to Vercel. Add the Google Business Profile website URL as `https://physiobyrutvi.in/` inside Google Business Profile after Vercel is live.

## Analytics

Google tag `G-3CLP6GLVNE` is installed in the page heads. WhatsApp, call, and voice-agent clicks emit lead events when `gtag` is available.

## Voice Agent

The site embeds the ElevenLabs ConvAI widget with agent id `agent_4701kwskch1ker1v5s2mpjdabvwq`.

Use `voice-agent-knowledge.md` as the agent's knowledge/system prompt in ElevenLabs or a future Sarvam-backed voice agent. A true Sarvam implementation must keep `SARVAM_API_KEY` server-side in Vercel environment variables; do not expose it in static frontend code.
