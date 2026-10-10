# PerformX Website

Performance marketing and customer acquisition agency website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom brand tokens
- **Fonts**: Poppins (Google Fonts)
- **Icons**: Lucide React
- **Animations**: CSS transitions + Intersection Observer (prefers-reduced-motion compliant)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```bash
cp .env.local.example .env.local
```

| Variable | Purpose |
|---|---|
| `FORM_ENDPOINT_URL` | Webhook for form submissions (Make/Zapier/n8n) |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 Measurement ID |
| `NEXT_PUBLIC_BOOKING_URL` | Calendly / Cal.com booking URL |
| `CRM_API_KEY` | HubSpot / Pipedrive / GoHighLevel API key |
| `EMAIL_API_KEY` | Klaviyo / Mailchimp API key |
| `NEXT_PUBLIC_WA_NUMBER` | WhatsApp Business number |

## Pages

| Route | Page |
|---|---|
| `/` | Homepage (11 sections) |
| `/about` | About PerformX |
| `/why-performx` | Why PerformX |
| `/who-we-work-with` | Ideal client profile |
| `/process` | 9-stage growth framework |
| `/services` | Services overview |
| `/services/[slug]` | 12 individual service pages |
| `/industries` | Industries overview |
| `/industries/[slug]` | 7 individual industry pages |
| `/case-studies` | Filterable case study index |
| `/case-studies/[slug]` | 12 individual case study pages |
| `/performance-creative` | Performance creative hub |
| `/cro-landing-pages` | CRO & landing pages hub |
| `/crm-automation` | CRM & automation hub |
| `/resources` | Resources & blog |
| `/pricing` | Engagement models |
| `/careers` | Careers |
| `/contact` | Contact |
| `/free-growth-audit` | Primary CTA — Growth Audit form |
| `/book-a-call` | Secondary CTA — booking |
| `/thank-you` | Post-submission confirmation |
| `/privacy-policy` | Privacy Policy |
| `/terms-of-service` | Terms of Service |

## API Routes

| Route | Purpose |
|---|---|
| `POST /api/growth-audit` | Growth Audit form submission |
| `POST /api/contact` | Contact form submission |
| `POST /api/newsletter` | Newsletter signup |
| `GET /robots.txt` | robots.txt (allows GPTBot, ClaudeBot, PerplexityBot) |
| `GET /sitemap.xml` | XML sitemap |
| `GET /llms.txt` | AI/LLM discoverability file |

## Brand Tokens

```
Gradient: #7415FD → #A838FD → #3D5BFD → #0A94FD → #36C2FE (left-to-right only)
Black: #010002
White: #FFFFFF
Font: Poppins
```

## Pending Integrations

- [ ] Form endpoint URL (webhook)
- [ ] Booking calendar URL (Calendly/Cal.com)
- [ ] CRM API credentials
- [ ] Google Analytics 4 ID
- [ ] Email service API key
- [ ] WhatsApp Business API

## Content Gaps

- [ ] Logo SVG files (6 variants from brand guide)
- [ ] Verified metrics for 6 remaining case studies
- [ ] Team/founder bios (if approved for About page)
- [ ] Office address
- [ ] Full social media profile URLs
- [ ] Partner/certification badges (if applicable)
