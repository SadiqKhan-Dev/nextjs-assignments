import { NextResponse } from "next/server";

const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const url = `${GOOGLE_BOOKS_API}/${id}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: "Book not found" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching the book",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
