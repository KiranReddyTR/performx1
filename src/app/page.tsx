import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { ProofBar } from "@/components/sections/ProofBar";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { AcquisitionSystem } from "@/components/sections/AcquisitionSystem";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { GrowthFramework } from "@/components/sections/GrowthFramework";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { WhyPerformX } from "@/components/sections/WhyPerformX";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "PerformX — Performance Marketing & Customer Acquisition Agency",
  description: "PerformX builds profitable customer acquisition systems — Meta Ads, Google Ads, Performance Creative, CRO, CRM & Automation. Up to 7.9X ROAS verified.",
  alternates: { canonical: "https://performx.agency" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeSection />
      <ProofBar />
      <ProblemSection />
      <AcquisitionSystem />
      <ServicesGrid />
      <GrowthFramework />
      <CaseStudiesPreview />
      <WhyPerformX />
      <IndustriesGrid />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
