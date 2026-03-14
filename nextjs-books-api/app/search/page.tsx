"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import BookList from "@/components/BookList";
import LoadingSpinner from "@/components/LoadingSpinner";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail?: string;
      smallThumbnail?: string;
    };
    publishedDate?: string;
    categories?: string[];
    averageRating?: number;
    ratingsCount?: number;
    pageCount?: number;
  };
}

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query) {
      const fetchBooks = async () => {
        setLoading(true);
        try {
          const res = await fetch(
            `/api/books?q=${encodeURIComponent(query)}&maxResults=40`
          );
          const data = await res.json();
          if (data.success) {
            setBooks(data.data);
          } else {
            setError(data.message || "Failed to search books");
          }
        } catch {
          setError("An unexpected error occurred");
        } finally {
          setLoading(false);
        }
      };

      fetchBooks();
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Navbar />

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Search Results
            </h1>
            {query && (
              <p className="text-lg text-gray-600">
                Showing results for &quot;{query}&quot;
              </p>
            )}
          </div>

          <div className="flex justify-center mb-8">
            <SearchBar initialQuery={query} />
          </div>

          {loading && <LoadingSpinner />}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 text-lg">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <BookList books={books} title={books.length > 0 ? "" : undefined} />
          )}
        </div>
      </section>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <Navbar />
          <LoadingSpinner />
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
