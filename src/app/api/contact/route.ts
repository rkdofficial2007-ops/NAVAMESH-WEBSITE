import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // In production, server-side secret API keys (e.g., RESEND_API_KEY) are used here safely:
    // const res = await fetch("https://api.resend.com/emails", { ... headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` } });
    console.log("[INCOMING CONTACT SUBMISSION]", {
      name,
      email,
      subject: subject || "No Subject",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out to Team NAVAMESH! Your message has been received.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to process message." },
      { status: 500 }
    );
  }
}
