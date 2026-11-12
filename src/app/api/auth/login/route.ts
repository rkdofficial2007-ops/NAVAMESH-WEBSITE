import { NextRequest, NextResponse } from "next/server";
import { signSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const expectedEmail = process.env.ADMIN_EMAIL || "navameshofficial@gmail.com";
    const expectedPassword = process.env.ADMIN_PASSWORD || "Navamesh@2026!Master";

    if (
      email?.trim().toLowerCase() === expectedEmail.toLowerCase() &&
      password === expectedPassword
    ) {
      const token = await signSession({
        id: "admin-1",
        email: expectedEmail,
        name: "Navamesh Admin",
        role: "admin",
      });

      const response = NextResponse.json({
        success: true,
        user: { email: expectedEmail, name: "Navamesh Admin", role: "admin" },
      });

      // Secure HTTP-Only Cookie
      response.cookies.set("navamesh_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: "Invalid email or master password." },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Authentication internal error." },
      { status: 500 }
    );
  }
}
