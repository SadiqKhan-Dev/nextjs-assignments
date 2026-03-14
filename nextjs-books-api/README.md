# BookLib - Book Library Application

A modern, full-featured book library application built with Next.js 15 and the Google Books API.

## Features

- 🔍 **Search Books**: Search by title, author, or ISBN
- 📚 **Browse Collections**: Discover popular and fiction books
- ❤️ **Favorites**: Save your favorite books to a personal collection
- 📖 **Book Details**: View comprehensive information including ratings, descriptions, and more
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- 📱 **Responsive**: Works perfectly on all devices

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: Google Books API
- **Deployment**: Vercel-ready

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
nextjs-books-api/
├── app/
│   ├── api/
│   │   ├── books/           # Book API endpoints
│   │   │   ├── [id]/        # Get single book
│   │   │   └── route.ts     # Search books
│   │   └── external/        # External API proxy
│   ├── book/
│   │   └── [id]/            # Book detail page
│   ├── favorites/           # Favorites page
│   ├── search/              # Search results page
│   ├── fonts/               # Custom fonts
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── BookCard.tsx         # Book card component
│   ├── BookDetails.tsx      # Book details component
│   ├── BookList.tsx         # Book list component
│   ├── LoadingSpinner.tsx   # Loading spinner
│   ├── Navbar.tsx           # Navigation bar
│   └── SearchBar.tsx        # Search input component
├── public/
│   └── placeholder-book.svg # Placeholder image
└── ...
```

## API Endpoints

### GET /api/books
Search for books with query parameters:
- `q` - Search query (title, author, ISBN)
- `maxResults` - Number of results (default: 20)
- `startIndex` - Pagination offset

### GET /api/books/[id]
Get details for a specific book by Google Books ID.

## Pages

- **Home** (`/`) - Featured books and search
- **Search** (`/search?q=query`) - Search results
- **Book Details** (`/book/[id]`) - Individual book information
- **Favorites** (`/favorites`) - Saved books (localStorage)

## Environment Variables

No environment variables required. The app uses the public Google Books API.

## License

MIT
