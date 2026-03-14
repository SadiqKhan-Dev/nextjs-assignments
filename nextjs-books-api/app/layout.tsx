import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BookLib - Discover Your Next Great Read",
  description:
    "Explore thousands of books from around the world. Find your favorites, discover new authors, and build your personal library with BookLib.",
  keywords: [
    "books",
    "library",
    "reading",
    "novels",
    "fiction",
    "bestsellers",
    "book search",
  ],
  authors: [{ name: "BookLib Team" }],
  openGraph: {
    title: "BookLib - Discover Your Next Great Read",
    description:
      "Explore thousands of books from around the world. Find your favorites, discover new authors.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
