import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("navamesh_token")?.value;

  if (!token) {
    return NextResponse.json({ authenticated: false, user: null }, { status: 401 });
  }

  const user = await verifySession(token);

  if (!user) {
    return NextResponse.json({ authenticated: false, user: null }, { status: 401 });
  }

  return NextResponse.json({ authenticated: true, user });
}
