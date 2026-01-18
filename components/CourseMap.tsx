'use client';

import { useState } from 'react';
import { Book } from '@/lib/data';
import { getProgress } from '@/lib/progress';

interface CourseMapProps {
  books: Book[];
  onSelect: (book: number, dvd: number, partType: string, partIndex: number) => void;
  selectedBook?: number;
  selectedDVD?: number;
  selectedPartType?: string;
  selectedPartIndex?: number;
}

export default function CourseMap({ books, onSelect, selectedBook, selectedDVD, selectedPartType, selectedPartIndex }: CourseMapProps) {
  const [expandedBook, setExpandedBook] = useState<number | null>(null);
  const [expandedDVD, setExpandedDVD] = useState<{ book: number; dvd: number } | null>(null);

  const getBookProgress = (book: Book) => {
    let totalParts = 0;
    let watchedParts = 0;

    book.dvds.forEach((dvd) => {
      Object.entries(dvd.parts).forEach(([partType, parts]) => {
        parts.forEach((_, index) => {
          totalParts++;
          const progress = getProgress(book.number, dvd.number, partType, index);
          if (progress.watched) watchedParts++;
        });
      });
    });

    return { total: totalParts, watched: watchedParts, percent: totalParts > 0 ? (watchedParts / totalParts) * 100 : 0 };
  };

  const getDVDProgress = (bookNumber: number, dvdNumber: number) => {
    const book = books.find(b => b.number === bookNumber);
    if (!book) return { total: 0, watched: 0, percent: 0 };

    const dvd = book.dvds.find(d => d.number === dvdNumber);
    if (!dvd) return { total: 0, watched: 0, percent: 0 };

    let totalParts = 0;
    let watchedParts = 0;

    Object.entries(dvd.parts).forEach(([partType, parts]) => {
      parts.forEach((_, index) => {
        totalParts++;
        const progress = getProgress(bookNumber, dvdNumber, partType, index);
        if (progress.watched) watchedParts++;
      });
    });

    return { total: totalParts, watched: watchedParts, percent: totalParts > 0 ? (watchedParts / totalParts) * 100 : 0 };
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Course Map</h2>
      
      <div className="space-y-6">
        {books.map((book) => {
          const bookProgress = getBookProgress(book);
          const isExpanded = expandedBook === book.number;
          const isSelected = selectedBook === book.number;

          return (
            <div
              key={book.number}
              className={`border-2 rounded-lg overflow-hidden transition-all ${
                isSelected
                  ? 'border-blue-500 shadow-lg'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Book Header */}
              <div
                className={`p-4 cursor-pointer transition-colors ${
                  isSelected ? 'bg-blue-50' : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setExpandedBook(isExpanded ? null : book.number)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'
                    }`}>
                      {book.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{book.name}</h3>
                      <p className="text-sm text-gray-600">
                        {book.dvds.length} DVDs • {bookProgress.watched}/{bookProgress.total} videos watched
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32">
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all ${
                            bookProgress.percent === 100 ? 'bg-green-500' : 'bg-blue-500'
                          }`}
                          style={{ width: `${bookProgress.percent}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-1 text-right">
                        {Math.round(bookProgress.percent)}%
                      </div>
                    </div>
                    <svg
                      className={`w-6 h-6 text-gray-500 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* DVD Grid */}
              {isExpanded && (
                <div className="p-4 bg-white border-t border-gray-200">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-4">
                    {book.dvds.map((dvd) => {
                      const dvdProgress = getDVDProgress(book.number, dvd.number);
                      const isDVDSelected = selectedBook === book.number && selectedDVD === dvd.number;
                      const isDVDExpanded = expandedDVD?.book === book.number && expandedDVD?.dvd === dvd.number;
                      const totalParts = Object.values(dvd.parts).reduce((sum, parts) => sum + parts.length, 0);

                      return (
                        <div key={dvd.number}>
                          <button
                            onClick={() => {
                              setExpandedDVD(isDVDExpanded ? null : { book: book.number, dvd: dvd.number });
                              // Select first available part
                              const firstPartType = Object.keys(dvd.parts)[0];
                              const firstPart = dvd.parts[firstPartType]?.[0];
                              if (firstPart) {
                                onSelect(book.number, dvd.number, firstPartType, 0);
                              }
                            }}
                            className={`w-full p-3 rounded-lg border-2 transition-all text-center ${
                              isDVDSelected
                                ? 'border-blue-500 bg-blue-50 shadow-md'
                                : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                            }`}
                          >
                            <div className="font-semibold text-gray-800 mb-2">
                              DVD {String(dvd.number).padStart(2, '0')}
                            </div>
                            <div className="text-xs text-gray-600 mb-2">
                              {totalParts} parts
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-1">
                              <div
                                className={`h-full transition-all ${
                                  dvdProgress.percent === 100 ? 'bg-green-500' : 'bg-blue-500'
                                }`}
                                style={{ width: `${dvdProgress.percent}%` }}
                              />
                            </div>
                            <div className="text-xs text-gray-500">
                              {dvdProgress.watched}/{dvdProgress.total}
                            </div>
                          </button>
                          
                          {/* DVD Details */}
                          {isDVDExpanded && (
                            <div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                              <div className="space-y-2">
                                {Object.entries(dvd.parts).map(([partType, parts]) => (
                                  <div key={partType}>
                                    <div className="text-xs font-semibold text-gray-700 mb-1 uppercase">
                                      Part {partType}
                                    </div>
                                    <div className="grid grid-cols-2 gap-1">
                                      {parts.map((part, index) => {
                                        const progress = getProgress(book.number, dvd.number, partType, index);
                                        const isSelected = 
                                          selectedBook === book.number &&
                                          selectedDVD === dvd.number &&
                                          selectedPartType === partType &&
                                          selectedPartIndex === index;

                                        return (
                                          <button
                                            key={index}
                                            onClick={() => onSelect(book.number, dvd.number, partType, index)}
                                            className={`px-2 py-1 text-xs rounded text-left transition-colors ${
                                              isSelected
                                                ? 'bg-blue-600 text-white'
                                                : progress.watched
                                                ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                            }`}
                                          >
                                            <div className="flex items-center gap-1">
                                              {progress.watched && (
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                  <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                  />
                                                </svg>
                                              )}
                                              <span className="truncate">{part.name}</span>
                                            </div>
                                          </button>
                                        );
                                      })}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Overall Progress Summary */}
      <div className="mt-8 p-4 bg-linear-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Overall Progress</h3>
        <div className="space-y-2">
          {books.map((book) => {
            const progress = getBookProgress(book);
            return (
              <div key={book.number} className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700 w-24">{book.name}:</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      progress.percent === 100 ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                    style={{ width: `${progress.percent}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-20 text-right">
                  {progress.watched}/{progress.total}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 pt-4 border-t border-blue-200">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-800">Total Progress:</span>
            <span className="text-lg font-bold text-blue-600">
              {Math.round(
                books.reduce((sum, book) => {
                  const p = getBookProgress(book);
                  return sum + (p.watched / p.total) * 100;
                }, 0) / books.length
              )}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
