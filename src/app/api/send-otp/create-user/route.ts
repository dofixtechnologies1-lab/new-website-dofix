// app/api/create-user/route.ts

import { NextResponse } from "next/server";

// ⚠️ temporary memory store (replace with DB later)
let users: any[] = [];

export async function POST(req: Request) {

  const { firstName, lastName, email, mobile } = await req.json();

  const newUser = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    mobile,
  };

  users.push(newUser);

  return NextResponse.json({
    success: true,
    user: newUser,
  });
}