import { NextResponse } from "next/server";

const EXTERNAL_API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(EXTERNAL_API_URL, { signal: controller.signal });

    clearTimeout(timeout);

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch data from API" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { success: false, message: "An error occurred while fetching data" },
      { status: 500 }
    );
  }
}
