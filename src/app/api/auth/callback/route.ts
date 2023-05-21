import { NextRequest, NextResponse } from "next/server";

import { api } from "@lib/api";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const code = searchParams.get("code");

  const registerResponse = await api.post("/register", {
    code,
    Headers: {
      "Content-Type": "application/json",
    },
  });

  const { token } = registerResponse.data;

  const redirectUrl = new URL(
    req.cookies.get("redirectTo")?.value || "/",
    req.url
  ); 

  return NextResponse.redirect(redirectUrl, {
    headers: {
      "Set-Cookie": `token=${token}; Path=/; max-age=${60 * 60 * 24 * 30}`,
    },
  });
}
