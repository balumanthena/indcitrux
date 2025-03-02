import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const resume = formData.get("resume");

    if (!name || !email || !resume) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    console.log("Received application:", { name, email, resume });

    return NextResponse.json({ message: "Application submitted successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error processing request." }, { status: 500 });
  }
}
