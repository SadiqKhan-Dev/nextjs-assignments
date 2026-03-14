"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

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
    publisher?: string;
    language?: string;
    infoLink?: string;
  };
}

export default function BookDetails() {
  const params = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`/api/books/${params.id}`);
        const data = await res.json();
        if (data.success) {
          setBook(data.data);
          const favorites = JSON.parse(
            localStorage.getItem("favorites") || "[]"
          );
          setIsFavorite(favorites.some((b: Book) => b.id === data.data.id));
        } else {
          setError(data.message || "Failed to fetch book details");
        }
      } catch {
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchBook();
    }
  }, [params.id]);

  const toggleFavorite = () => {
    if (!book) return;
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (isFavorite) {
      const updated = favorites.filter((b: Book) => b.id !== book.id);
      localStorage.setItem("favorites", JSON.stringify(updated));
    } else {
      favorites.push(book);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">{error || "Book not found"}</p>
          <a
            href="/"
            className="text-indigo-600 hover:underline"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    );
  }

  const { volumeInfo } = book;
  const imageUrl =
    volumeInfo.imageLinks?.thumbnail ||
    volumeInfo.imageLinks?.smallThumbnail ||
    "/placeholder-book.png";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </a>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gray-100 p-8 flex items-center justify-center">
              <div className="relative w-full max-w-xs aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={imageUrl.replace("http://", "https://")}
                  alt={volumeInfo.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            <div className="md:w-2/3 p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {volumeInfo.title}
                  </h1>
                  {volumeInfo.authors && (
                    <p className="text-lg text-gray-600">
                      by {volumeInfo.authors.join(", ")}
                    </p>
                  )}
                </div>
                <button
                  onClick={toggleFavorite}
                  className={`p-3 rounded-full transition-all duration-200 ${
                    isFavorite
                      ? "bg-red-100 text-red-500 hover:bg-red-200"
                      : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                  }`}
                >
                  <svg
                    className="w-8 h-8"
                    fill={isFavorite ? "currentColor" : "none"}
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
                </button>
              </div>

              {volumeInfo.averageRating && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.round(volumeInfo.averageRating!)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {volumeInfo.averageRating.toFixed(1)}
                    {volumeInfo.ratingsCount &&
                      ` (${volumeInfo.ratingsCount} ratings)`}
                  </span>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {volumeInfo.categories &&
                  volumeInfo.categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {category}
                    </span>
                  ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {volumeInfo.publishedDate && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Published</p>
                    <p className="font-semibold text-gray-800">
                      {volumeInfo.publishedDate}
                    </p>
                  </div>
                )}
                {volumeInfo.pageCount && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Pages</p>
                    <p className="font-semibold text-gray-800">
                      {volumeInfo.pageCount}
                    </p>
                  </div>
                )}
                {volumeInfo.publisher && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Publisher</p>
                    <p className="font-semibold text-gray-800">
                      {volumeInfo.publisher}
                    </p>
                  </div>
                )}
                {volumeInfo.language && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500">Language</p>
                    <p className="font-semibold text-gray-800 capitalize">
                      {volumeInfo.language}
                    </p>
                  </div>
                )}
              </div>

              {volumeInfo.description && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3">
                    About the Book
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {volumeInfo.description}
                  </p>
                </div>
              )}

              {volumeInfo.infoLink && (
                <a
                  href={volumeInfo.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  More Info on Google Books
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
