import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate required fields
    const { name, email, brand, goal, consent } = body;
    if (!name || !email || !brand || !goal || !consent) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // INTEGRATION ADAPTER — awaiting configuration
    // ─────────────────────────────────────────────────────────────────────────
    // To activate: set the following environment variables in .env.local:
    //   FORM_ENDPOINT_URL   — webhook URL (e.g. Make/Zapier/n8n)
    //   NOTIFICATION_EMAIL  — email address to receive submissions
    //
    // Example integration (uncomment when ready):
    //
    // const response = await fetch(process.env.FORM_ENDPOINT_URL!, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     type: "growth_audit",
    //     name, email, brand,
    //     website: body.website,
    //     phone: body.phone,
    //     adSpend: body.adSpend,
    //     platforms: body.platforms,
    //     goal,
    //     challenge: body.challenge,
    //     submittedAt: new Date().toISOString(),
    //   }),
    // });
    // if (!response.ok) throw new Error("Webhook delivery failed");
    // ─────────────────────────────────────────────────────────────────────────

    console.log("[Growth Audit Submission]", { name, email, brand, goal });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Growth Audit Error]", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
