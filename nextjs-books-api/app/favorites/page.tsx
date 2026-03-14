"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import BookList from "@/components/BookList";

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

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Book[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const removeFavorite = (bookId: string) => {
    const updated = favorites.filter((book) => book.id !== bookId);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Navbar />

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              <svg
                className="w-10 h-10 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              My Favorites
            </h1>
            <p className="text-lg text-gray-600">
              {favorites.length} {favorites.length === 1 ? "book" : "books"} in
              your collection
            </p>
          </div>

          {!mounted ? (
            <div className="flex items-center justify-center min-h-[40vh]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
            </div>
          ) : favorites.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="w-20 h-20 mx-auto text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <p className="text-gray-500 text-lg mb-4">
                No favorites yet. Start adding books you love!
              </p>
              <a
                href="/"
                className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg"
              >
                Browse Books
              </a>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favorites.map((book) => (
                  <div key={book.id} className="relative group">
                    <a href={`/book/${book.id}`}>
                      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
                        <div className="relative h-64 bg-gray-100">
                          <img
                            src={
                              book.volumeInfo.imageLinks?.thumbnail?.replace(
                                "http://",
                                "https://"
                              ) || "/placeholder-book.png"
                            }
                            alt={book.volumeInfo.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                            {book.volumeInfo.title}
                          </h3>
                          {book.volumeInfo.authors && (
                            <p className="text-gray-600 text-sm mb-2">
                              by {book.volumeInfo.authors.join(", ")}
                            </p>
                          )}
                          <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                            {book.volumeInfo.publishedDate && (
                              <span>
                                {book.volumeInfo.publishedDate.substring(0, 4)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </a>
                    <button
                      onClick={() => removeFavorite(book.id)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                      title="Remove from favorites"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
