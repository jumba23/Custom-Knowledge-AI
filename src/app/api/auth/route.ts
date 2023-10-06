import { NextRequest, NextResponse } from "next/server";
import { type } from "os";

type loginBody = {
  username: string;
  password: string;
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { username, password } = req.body as any as loginBody;

  // Authenticate the user
  // Replace with your own authentication logic

  // Dummy authentication
  if (username === "admin" && password === "password") {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}
