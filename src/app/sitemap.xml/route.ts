import { NextResponse } from "next/server";
import { caseStudies } from "@/data/case-studies";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

const BASE = "https://performx.agency";

function url(path: string, priority: string, changefreq: string) {
  return `
  <url>
    <loc>${BASE}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export function GET() {
  const staticRoutes = [
    url("/", "1.0", "weekly"),
    url("/about", "0.8", "monthly"),
    url("/why-performx", "0.8", "monthly"),
    url("/who-we-work-with", "0.7", "monthly"),
    url("/process", "0.8", "monthly"),
    url("/services", "0.9", "weekly"),
    url("/case-studies", "0.9", "weekly"),
    url("/industries", "0.8", "monthly"),
    url("/resources", "0.7", "weekly"),
    url("/pricing", "0.7", "monthly"),
    url("/careers", "0.5", "monthly"),
    url("/contact", "0.8", "monthly"),
    url("/free-growth-audit", "0.9", "weekly"),
    url("/book-a-call", "0.8", "monthly"),
    url("/privacy-policy", "0.3", "yearly"),
    url("/terms-of-service", "0.3", "yearly"),
  ];

  const serviceRoutes = services.map((s) => url(`/services/${s.slug}`, "0.8", "monthly"));
  const industryRoutes = industries.map((i) => url(`/industries/${i.slug}`, "0.7", "monthly"));
  const caseStudyRoutes = caseStudies.map((cs) => url(`/case-studies/${cs.slug}`, "0.8", "monthly"));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticRoutes, ...serviceRoutes, ...industryRoutes, ...caseStudyRoutes].join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
