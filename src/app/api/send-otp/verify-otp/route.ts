// app/api/verify-otp/route.ts

import { NextResponse } from "next/server";

// ⚠️ temporary user store (replace with DB later)
const users: any[] = [];

export async function POST(req: Request) {

  const { mobile, otp } = await req.json();

  const response = await fetch("https://control.msg91.com/api/v5/otp/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authkey: process.env.MSG91_AUTH_KEY as string,
    },
    body: JSON.stringify({
      mobile: "91" + mobile,
      otp,
    }),
  });

  const data = await response.json();

  if (data.type !== "success") {
    return NextResponse.json({ success: false });
  }

  // ✅ check user exists
  const user = users.find((u) => u.mobile === mobile);

  if (user) {
    return NextResponse.json({
      success: true,
      user,
      isNewUser: false,
    });
  }

  // 🆕 new user
  return NextResponse.json({
    success: true,
    mobile,
    isNewUser: true,
  });
}