import { Marquee } from "@/components/ui/Marquee";

const items = [
  "Performance Marketing",
  "Meta Ads",
  "Google Ads",
  "Customer Acquisition",
  "Performance Creative",
  "CRO & Landing Pages",
  "CRM Automation",
  "TikTok Ads",
  "7.9X ROAS",
  "Paid Media Strategy",
  "WhatsApp Marketing",
  "D2C Growth",
];

export function MarqueeSection() {
  return (
    <div className="py-5 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#08080C" }}>
      <Marquee items={items} speed="normal" />
    </div>
  );
}
