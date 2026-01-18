'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Book, VideoPart } from '@/lib/data';
import { getProgress } from '@/lib/progress';

interface CourseNavigationProps {
  books: Book[];
  selectedBook: number;
  selectedDVD: number;
  selectedPartType: string;
  selectedPartIndex: number;
  progressVersion?: number;
  onSelect: (book: number, dvd: number, partType: string, partIndex: number) => void;
}

export default function CourseNavigation({
  books,
  selectedBook,
  selectedDVD,
  selectedPartType,
  selectedPartIndex,
  progressVersion = 0,
  onSelect,
}: CourseNavigationProps) {
  const [expandedBook, setExpandedBook] = useState<number>(selectedBook);
  const [expandedDVD, setExpandedDVD] = useState<number>(selectedDVD);

  useEffect(() => {
    setExpandedBook(selectedBook);
    setExpandedDVD(selectedDVD);
  }, [selectedBook, selectedDVD]);

  const isWatched = (bookNumber: number, dvdNumber: number, partType: string, partIndex: number) => {
    const progress = getProgress(bookNumber, dvdNumber, partType, partIndex);
    return progress.watched;
  };

  const getVideoProgress = (bookNumber: number, dvdNumber: number, partType: string, partIndex: number) => {
    const progress = getProgress(bookNumber, dvdNumber, partType, partIndex);
    if (progress.watched) {
      return 100; // Fully watched
    }
    if (progress.lastPosition && progress.duration && progress.duration > 0) {
      return Math.min(100, (progress.lastPosition / progress.duration) * 100);
    }
    return 0; // Not started
  };

  const getBookProgress = (book: Book) => {
    let totalProgress = 0;
    let totalVideos = 0;
    
    book.dvds.forEach((dvd) => {
      Object.entries(dvd.parts).forEach(([partType, parts]) => {
        parts.forEach((_, index) => {
          totalVideos++;
          const progress = getProgress(book.number, dvd.number, partType, index);
          if (progress.watched) {
            totalProgress += 100; // Fully watched
          } else if (progress.lastPosition && progress.duration && progress.duration > 0) {
            // Partially watched - add percentage
            totalProgress += Math.min(100, (progress.lastPosition / progress.duration) * 100);
          }
        });
      });
    });
    
    const percent = totalVideos > 0 ? (totalProgress / totalVideos) : 0;
    const watched = Math.floor(totalProgress / 100); // Count fully watched
    return { total: totalVideos, watched, percent };
  };

  const getDVDProgress = (book: Book, dvdNumber: number) => {
    const dvd = book.dvds.find(d => d.number === dvdNumber);
    if (!dvd) return { total: 0, watched: 0, percent: 0 };
    
    let totalProgress = 0;
    let totalVideos = 0;
    
    Object.entries(dvd.parts).forEach(([partType, parts]) => {
      parts.forEach((_, index) => {
        totalVideos++;
        const progress = getProgress(book.number, dvd.number, partType, index);
        if (progress.watched) {
          totalProgress += 100; // Fully watched
        } else if (progress.lastPosition && progress.duration && progress.duration > 0) {
          // Partially watched - add percentage
          totalProgress += Math.min(100, (progress.lastPosition / progress.duration) * 100);
        }
      });
    });
    
    const percent = totalVideos > 0 ? (totalProgress / totalVideos) : 0;
    const watched = Math.floor(totalProgress / 100); // Count fully watched
    return { total: totalVideos, watched, percent };
  };

  return (
    <div className="p-3">
      <div className="mb-3 pb-3 border-b border-gray-200 space-y-1">
        <Link
          href="/books"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Books
        </Link>
        <Link
          href="/downloads"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Downloads
        </Link>
      </div>
      <nav className="space-y-1">
        {books.map((book) => {
          const isBookExpanded = expandedBook === book.number;
          const isBookSelected = selectedBook === book.number;
          const bookProgress = getBookProgress(book);

          return (
            <div key={book.number}>
              <button
                onClick={() => setExpandedBook(isBookExpanded ? 0 : book.number)}
                className={`w-full px-3 py-2 text-left flex items-center justify-between rounded-md transition-colors ${
                  isBookSelected
                    ? 'bg-blue-50 text-blue-900'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <span className="text-sm font-medium truncate">{book.name}</span>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {bookProgress.watched}/{bookProgress.total}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        bookProgress.percent === 100 ? 'bg-green-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${bookProgress.percent}%` }}
                    />
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ${
                      isBookExpanded ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {isBookExpanded && (
                <div className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-3">
                  {book.dvds.map((dvd) => {
                    const isDVDExpanded = expandedDVD === dvd.number;
                    const isDVDSelected = isBookSelected && selectedDVD === dvd.number;
                    const dvdProgress = getDVDProgress(book, dvd.number);

                    return (
                      <div key={dvd.number}>
                        <button
                          onClick={() => setExpandedDVD(isDVDExpanded ? 0 : dvd.number)}
                          className={`w-full px-2 py-1.5 text-left flex items-center justify-between rounded-md text-sm transition-colors ${
                            isDVDSelected
                              ? 'bg-blue-50 text-blue-900'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <span className="font-medium">DVD {String(dvd.number).padStart(2, '0')}</span>
                            <span className="text-xs text-gray-500">
                              {dvdProgress.watched}/{dvdProgress.total}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full transition-all ${
                                  dvdProgress.percent === 100 ? 'bg-green-500' : 'bg-blue-500'
                                }`}
                                style={{ width: `${dvdProgress.percent}%` }}
                              />
                            </div>
                            <svg
                              className={`w-3 h-3 text-gray-400 transition-transform shrink-0 ${
                                isDVDExpanded ? 'rotate-90' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </button>

                        {isDVDExpanded && (
                          <div className="ml-4 mt-1 space-y-2 border-l border-gray-200 pl-3">
                            {Object.entries(dvd.parts).map(([partType, parts]) => (
                              <div key={partType}>
                                <div className="text-xs font-medium text-gray-500 uppercase mb-1">
                                  Part {partType}
                                </div>
                                <div className="space-y-0.5">
                                  {parts.map((part, index) => {
                                    const watched = isWatched(book.number, dvd.number, partType, index);
                                    const progressPercent = getVideoProgress(book.number, dvd.number, partType, index);
                                    const isSelected =
                                      isBookSelected &&
                                      isDVDSelected &&
                                      selectedPartType === partType &&
                                      selectedPartIndex === index;

                                    return (
                                      <button
                                        key={index}
                                        onClick={() => onSelect(book.number, dvd.number, partType, index)}
                                        className={`w-full px-2 py-1.5 text-left text-sm rounded-md transition-colors flex items-center gap-2 ${
                                          isSelected
                                            ? 'bg-blue-600 text-white'
                                            : watched
                                            ? 'bg-green-50 text-green-800 hover:bg-green-100'
                                            : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                      >
                                        {watched && (
                                          <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                              fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"
                                            />
                                          </svg>
                                        )}
                                        <span className="truncate flex-1">{part.name}</span>
                                        {progressPercent > 0 && (
                                          <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden shrink-0">
                                            <div
                                              className={`h-full transition-all ${
                                                progressPercent === 100 ? 'bg-green-500' : 'bg-green-400'
                                              }`}
                                              style={{ width: `${progressPercent}%` }}
                                            />
                                          </div>
                                        )}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
