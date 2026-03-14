import { NextResponse } from "next/server";

const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "bestseller";
    const startIndex = searchParams.get("startIndex") || "0";
    const maxResults = searchParams.get("maxResults") || "20";

    const url = `${GOOGLE_BOOKS_API}?q=${encodeURIComponent(query)}&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=en`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

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
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching books",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
