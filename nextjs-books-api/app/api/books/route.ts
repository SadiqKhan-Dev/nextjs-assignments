import { NextResponse } from "next/server";

const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "bestseller";
    const rawStartIndex = searchParams.get("startIndex") || "0";
    const rawMaxResults = searchParams.get("maxResults") || "20";

    const startIndex = Math.max(0, parseInt(rawStartIndex, 10) || 0);
    const maxResults = Math.min(40, Math.max(1, parseInt(rawMaxResults, 10) || 20));

    const url = `${GOOGLE_BOOKS_API}?q=${encodeURIComponent(query)}&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=en`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch books from API" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      data: data.items || [],
      totalItems: data.totalItems,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "An error occurred while fetching books" },
      { status: 500 }
    );
  }
}
