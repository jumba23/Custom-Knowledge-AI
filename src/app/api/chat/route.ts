import { NextRequest, NextResponse } from "next/server";

type chatBody = {
  message: string;
};

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { message } = req.body as any as chatBody;

  // Implement your chat logic here

  // For example:
  const botResponse = `You said: ${message}`;

  return NextResponse.json({ botResponse });
}
