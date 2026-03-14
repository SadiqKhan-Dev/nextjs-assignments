"use client";

import Link from "next/link";
import Image from "next/image";

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

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const { volumeInfo } = book;
  const imageUrl =
    volumeInfo.imageLinks?.thumbnail ||
    volumeInfo.imageLinks?.smallThumbnail;

  return (
    <Link href={`/book/${book.id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group h-full flex flex-col">
        <div className="relative h-64 bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden flex items-center justify-center">
          {imageUrl ? (
            <Image
              src={imageUrl.replace("http://", "https://")}
              alt={volumeInfo.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          ) : (
            <svg
              className="w-20 h-20 text-indigo-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          )}
          {volumeInfo.averageRating && (
            <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-md">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {volumeInfo.averageRating.toFixed(1)}
            </div>
          )}
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
            {volumeInfo.title}
          </h3>

          {volumeInfo.authors && (
            <p className="text-gray-600 text-sm mb-2">
              by {volumeInfo.authors.join(", ")}
            </p>
          )}

          {volumeInfo.categories && volumeInfo.categories.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {volumeInfo.categories.slice(0, 3).map((category, index) => (
                <span
                  key={index}
                  className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
            {volumeInfo.publishedDate && (
              <span>{volumeInfo.publishedDate.substring(0, 4)}</span>
            )}
            {volumeInfo.pageCount && (
              <span>{volumeInfo.pageCount} pages</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
