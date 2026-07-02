import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyQVFfWOzo4UR_59agfNifAxUr2BGvsxgwsmFtlKw4yfFyH0guPk93eUs_vNXyy5ZUY/exec";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log("New Lead:", data);

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(data),
    });

    const text = await response.text();

    console.log("Google Response:", text);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}