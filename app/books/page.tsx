'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BookPDF {
  title: string;
  url: string;
  size?: string;
  pages?: string;
}

interface BookCategory {
  title: string;
  books: BookPDF[];
}

const categories: BookCategory[] = [
  {
    title: 'Arabic Text with English Key & Solutions',
    books: [
      {
        title: 'Madina Books - Arabic with English Key & Solutions Book 1',
        url: 'https://archive.org/download/book1_20191110/Book1.pdf',
        size: '137 MB',
      },
      {
        title: 'Madina Books - Arabic with English Key & Solutions Book 2',
        url: 'https://archive.org/30/items/book2_201911/Book2.pdf',
        size: '243 MB',
      },
      {
        title: 'Madina Books - Arabic with English Key & Solutions Book 3 Part 1',
        url: 'https://archive.org/download/book3a/Book3A.pdf',
        size: '223 MB',
      },
      {
        title: 'Madina Books - Arabic with English Key & Solutions Book 3 Part 2',
        url: 'https://archive.org/download/book3b_201909/Book3B.pdf',
        size: '356 MB',
      },
    ],
  },
  {
    title: 'Solutions',
    books: [
      {
        title: 'Madina Books - Arabic Solutions 1',
        url: 'http://www.archive.org/download/ArabicLanguageCourseBooks/Madina_Book1_Solutions.pdf',
        pages: '78 pages',
        size: '7.3 MB',
      },
      {
        title: 'Madina Books - Arabic Solutions 2',
        url: 'http://www.archive.org/download/ArabicLanguageCourseBooks/Madina_Book2_Solutions.pdf',
        pages: '68 pages',
        size: '5.7 MB',
      },
      {
        title: 'Madina Books - Arabic Solutions 3',
        url: 'http://www.archive.org/download/ArabicLanguageCourseBooks/Madina_Book3_Solutions.pdf',
        pages: '140 pages',
        size: '14.5 MB',
      },
    ],
  },
  {
    title: 'Glossary',
    books: [
      {
        title: 'Madina Books - Glossary',
        url: 'http://www.archive.org/download/ArabicLanguageCourseBooks/Madina_Books_Glossary.pdf',
        pages: '120 pages',
        size: '43.6 MB',
      },
    ],
  },
  {
    title: 'Grammar Notes',
    books: [
      {
        title: 'Madina Grammar Notes 1',
        url: 'http://www.archive.org/download/MadinaArabicCourseNotes-Book3/Grammar_Book1.pdf',
      },
      {
        title: 'Madina Grammar Notes 2',
        url: 'http://www.archive.org/download/MadinaArabicCourseNotes-Book3/Grammar_Book2.pdf',
      },
    ],
  },
  {
    title: 'Handouts',
    books: [
      {
        title: 'Madina Books - Arabic 1',
        url: 'http://www.archive.org/download/MadinaBooksHandouts/Book1.pdf',
      },
      {
        title: 'Madina Books - Arabic 2 & 3',
        url: 'http://www.archive.org/download/MadinaBooksHandouts/Book2and3.pdf',
      },
    ],
  },
  {
    title: 'Sharh Madeenah',
    books: [
      {
        title: 'Sharh Madeenah Book 1',
        url: 'http://www.archive.org/download/MadinaArabicCourseNotes-Book3/SharhMadeenahBook1.pdf',
      },
      {
        title: 'Sharh Madeenah Book 2',
        url: 'http://www.archive.org/download/MadinaArabicCourseNotes-Book3/SharhMadeenahBook2.pdf',
      },
      {
        title: 'Sharh Madeenah Book 3',
        url: 'http://www.archive.org/download/MadinaArabicCourseNotes-Book3/SharhMadeenahBook3.pdf',
      },
      {
        title: 'Sharh Madeenah Book 4',
        url: 'http://www.archive.org/download/MadinaArabicCourseNotes-Book3/SharhMadeenahBook4.pdf',
      },
    ],
  },
  {
    title: 'Expressions',
    books: [
      {
        title: 'Madina Side Book - Expressions 1',
        url: 'http://www.archive.org/download/MadinaArabicCourseNotes-Book3/Madina_side_book_expression_level_1.pdf',
      },
      {
        title: 'Madina Side Book - Expressions 2',
        url: 'http://www.archive.org/download/MadinaArabicCourseNotes-Book3/Madina_side_book_expression_level_2.pdf',
      },
    ],
  },
  {
    title: 'Reading',
    books: [
      {
        title: 'Madina Side Books - Reading',
        url: 'http://www.archive.org/download/MadinaArabicCourseNotes-Book3/Madina_side_book_reading_level_1.pdf',
      },
    ],
  },
];

const otherResources = [
  {
    title: 'Key (German)',
    url: 'https://www.lqtoronto.com/germankey.html',
  },
  {
    title: 'Key (Urdu)',
    url: 'https://www.lqtoronto.com/urdukey.html',
  },
  {
    title: 'Blank Verb Conjugation Sheet',
    url: 'https://www.lqtoronto.com/Blank_Verb_Conjugation_Sheet.pdf',
  },
];

export default function BooksPage() {
  const [selectedBook, setSelectedBook] = useState<{ title: string; url: string } | null>(null);

  const handleBookClick = (book: BookPDF) => {
    setSelectedBook({ title: book.title, url: book.url });
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Books</h1>
            <Link
              href="/"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Videos
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            <strong>NOTE:</strong> Right-click links and choose &quot;Save Target As&quot; to download PDFs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                {category.title}
              </h3>
              <div className="space-y-2.5">
                {category.books.map((book, bookIndex) => (
                  <button
                    key={bookIndex}
                    onClick={() => handleBookClick(book)}
                    className="w-full text-left block p-3.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-colors group cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-10 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded border border-blue-300 flex items-center justify-center shadow-sm">
                        <svg
                          className="w-5 h-5 text-blue-600"
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
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-gray-900 group-hover:text-blue-700 leading-snug break-words">
                          {book.title}
                        </div>
                        {(book.pages || book.size) && (
                          <div className="text-xs text-gray-500 mt-1.5">
                            {book.pages && <span>{book.pages}</span>}
                            {book.pages && book.size && <span> • </span>}
                            {book.size && <span>{book.size}</span>}
                          </div>
                        )}
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-blue-600 shrink-0 mt-0.5"
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
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Other Resources */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200">
              Additional Resources
            </h3>
            <div className="space-y-2">
              {otherResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-colors group"
                >
                  <span className="font-medium text-gray-900 group-hover:text-blue-700">
                    {resource.title}
                  </span>
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-blue-600 shrink-0"
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
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            No Copyrights. Reserved For Personal Use. No Commercial Use Allowed.
          </p>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 truncate pr-4">
                {selectedBook.title}
              </h3>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={selectedBook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Open in New Tab
                </a>
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                  aria-label="Close"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={`${selectedBook.url}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full border-0"
                title={selectedBook.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
