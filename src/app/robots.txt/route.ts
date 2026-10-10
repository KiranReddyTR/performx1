import { NextResponse } from "next/server";

export function GET() {
  const body = `User-agent: *
Allow: /

# AI crawlers — allow for GEO/AEO indexing
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://performx.agency/sitemap.xml
`;
  return new NextResponse(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
