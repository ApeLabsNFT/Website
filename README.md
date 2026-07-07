# Physio by Rutvi Website

Static website for `physiobyrutvi.in`.

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

The homepage includes LocalBusiness/MedicalBusiness structured data for Dr Rutvi Gandhi and `robots.txt` points Google to `sitemap.xml`. Google Business Profile verification still has to be completed inside Google Business Profile or Search Console with the verification method Google provides.

The DNS panel already shows a Google verification TXT record. Keep that record while managing Netlify DNS. Add the Google Business Profile website URL as `https://physiobyrutvi.in/` inside Google Business Profile after Netlify is live.

## Analytics

Google tag `G-3CLP6GLVNE` is installed in the page heads. WhatsApp, call, and voice-agent clicks emit lead events when `gtag` is available.

## Voice Agent

The site embeds the ElevenLabs ConvAI widget with agent id `agent_4701kwskch1ker1v5s2mpjdabvwq`.

Use `voice-agent-knowledge.md` as the agent's knowledge/system prompt in ElevenLabs or a future Sarvam-backed voice agent. A true Sarvam implementation must keep `SARVAM_API_KEY` server-side in hosting environment variables; do not expose it in static frontend code.
