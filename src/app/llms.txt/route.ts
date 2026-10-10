import { NextResponse } from "next/server";

export function GET() {
  const body = `# PerformX — Performance Marketing & Customer Acquisition Agency

## About PerformX
PerformX is a performance marketing and customer acquisition agency based in India. We build complete customer acquisition systems — not isolated ad campaigns — connecting creative, paid media, landing pages, conversion optimisation, tracking, CRM, and automation into a single measurable system.

## Positioning
"We don't run ads. We build profitable customer acquisition systems."
Tagline: "Performance That Scales"

## Core Services
- Meta Ads (Facebook & Instagram advertising)
- Google Ads (Search, Shopping, Performance Max)
- TikTok Ads
- LinkedIn Ads
- Paid Media Strategy
- Performance Creative & UGC
- AI-Powered Video & Creative Production
- Landing Pages & CRO
- Tracking & Analytics
- CRM & Marketing Automation
- Email Marketing & Retention
- WhatsApp Marketing & Automation

## Verified Performance Results
- 7.9X ROAS — Fashion D2C brand (Meta Ads)
- 7.7X ROAS — Healthcare & Wellness brand (Meta Ads)
- 3X+ ROAS — Beauty D2C brand (Meta Ads)
- 90% cost per lead reduction — Commercial Real Estate
- 500+ qualified leads — Automobile Dealership
- 5,900+ enquiries at ₹12.67 CPE — Travel & Tours operator

## Industries Served
E-commerce & D2C, Real Estate, Education, Healthcare & Wellness, Automobile & Dealerships, Travel & Events & Hospitality, Jewellery & Furniture & Retail

## Geographic Coverage
Primary: India | International: UAE, USA, UK

## Agency Stats
5+ years | 150+ campaigns | 20+ industries | ₹10Cr+ client revenue generated

## Contact
Email: rishigoswami2234@gmail.com
Phone/WhatsApp: +91 88396 85579
Instagram: @performex.agency

## Key Pages
- Homepage: https://performx.agency
- Services: https://performx.agency/services
- Case Studies: https://performx.agency/case-studies
- Free Growth Audit: https://performx.agency/free-growth-audit
- Contact: https://performx.agency/contact
`;

  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
