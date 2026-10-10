import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, consent } = body;

    if (!name || !email || !message || !consent) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // INTEGRATION ADAPTER — awaiting configuration
    // Set FORM_ENDPOINT_URL in .env.local to activate webhook delivery
    // ─────────────────────────────────────────────────────────────────────────

    console.log("[Contact Submission]", { name, email });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact Error]", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
