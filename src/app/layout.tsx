import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/Analytics";
import { AnimationProvider } from "@/components/motion/AnimationProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://performx.agency"),
  title: {
    default: "PerformX — Performance Marketing & Customer Acquisition Agency",
    template: "%s | PerformX",
  },
  description:
    "PerformX builds profitable customer acquisition systems — Meta Ads, Google Ads, Performance Creative, CRO, CRM & Automation. Up to 7.9X ROAS verified.",
  keywords: [
    "performance marketing agency India",
    "customer acquisition agency",
    "Meta Ads agency",
    "Google Ads agency",
    "D2C performance marketing",
    "paid media agency India",
    "CRO agency",
    "marketing automation",
    "performance creative agency",
    "ROAS optimization",
    "digital marketing agency UAE",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "PerformX",
    title: "PerformX — Performance Marketing & Customer Acquisition Agency",
    description: "We build profitable customer acquisition systems — Meta Ads, Google Ads, Performance Creative, CRO, CRM & Automation.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "PerformX — Performance That Scales" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PerformX — Performance That Scales",
    description: "We build profitable customer acquisition systems.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://performx.agency" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "PerformX",
              "description": "Performance marketing and customer acquisition agency. We build profitable customer acquisition systems.",
              "url": "https://performx.agency",
              "telephone": "+91-88396-85579",
              "email": "rishigoswami2234@gmail.com",
              "sameAs": ["https://instagram.com/performex.agency"],
              "areaServed": ["IN", "AE", "US", "GB"],
              "serviceType": ["Performance Marketing", "Customer Acquisition", "Meta Ads", "Google Ads", "CRO", "CRM Automation"],
              "slogan": "Performance That Scales",
            }),
          }}
        />
      </head>
      <body className="bg-[#010002] text-white antialiased overflow-x-hidden" style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}>
        <Analytics />
        {/* Skip to main */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium focus:text-white" style={{ background: "linear-gradient(135deg,#7415FD,#3D5BFD)" }}>
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          <AnimationProvider>
            {children}
          </AnimationProvider>
        </main>
        <Footer />

        {/* WhatsApp floating CTA */}
        <a
          href="https://wa.me/918839685579?text=Hi%20PerformX%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
          style={{ background: "#25D366", boxShadow: "0 4px 24px rgba(37,211,102,0.4)" }}
          aria-label="Chat with PerformX on WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
