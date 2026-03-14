"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span className="text-white text-xl font-bold">BookLib</span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Home
              </Link>
              <Link
                href="/search"
                className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Search Books
              </Link>
              <Link
                href="/favorites"
                className="text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Favorites
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/20 px-3 py-2 rounded-md"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-indigo-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="text-white hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/search"
              className="text-white hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium"
            >
              Search Books
            </Link>
            <Link
              href="/favorites"
              className="text-white hover:bg-white/20 block px-3 py-2 rounded-md text-base font-medium"
            >
              Favorites
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
