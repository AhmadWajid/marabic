'use client';

import React from 'react';
import { Book } from '@/lib/data';
import { getProgress } from '@/lib/progress';

interface VideoTableProps {
  books: Book[];
  format: 'avi' | 'hi-res' | 'low-res';
  onVideoClick?: (book: number, dvd: number, partType: string, partIndex: number) => void;
}

export default function VideoTable({ books, format, onVideoClick }: VideoTableProps) {
  const getVideoUrl = (book: number, dvd: number, part: string): string => {
    const dvdStr = String(dvd).padStart(2, '0');
    const folderSuffix = (book === 1 && dvd <= 3) ? '-' : '';
    
    if (format === 'hi-res') {
      return `http://www.archive.org/download/ArabicLanguageCourseVideos-Mpeg4-hi-res-Book${book}Dvd${dvdStr}${folderSuffix}/MAV_BK${book}_DVD${dvdStr}_${part}_512kb.mp4`;
    } else if (format === 'low-res') {
      return `http://www.archive.org/download/ArabicLanguageCourseVideos-Mpeg4-hi-res-Book${book}Dvd${dvdStr}${folderSuffix}/MAV_BK${book}_DVD${dvdStr}_${part}_512kb.mp4`;
    } else {
      return `http://www.archive.org/download/ArabicLanguageCourseVideos-Mpeg4-hi-res-Book${book}Dvd${dvdStr}${folderSuffix}/MAV_BK${book}_DVD${dvdStr}_${part}_512kb.mp4`;
    }
  };

  const isWatched = (bookNumber: number, dvdNumber: number, partType: string, partIndex: number) => {
    const progress = getProgress(bookNumber, dvdNumber, partType, partIndex);
    return progress.watched;
  };

  return (
    <div className="overflow-x-auto -mx-6 px-6">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
              Book
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
              DVD
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Parts
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {books.map((book) => {
            const totalRows = book.dvds.reduce((sum, dvd) => {
              return sum + (dvd.parts.A?.length ? 1 : 0) + (dvd.parts.B?.length ? 1 : 0);
            }, 0);
            
            return book.dvds.map((dvd, dvdIndex) => {
              const hasA = dvd.parts.A && dvd.parts.A.length > 0;
              const hasB = dvd.parts.B && dvd.parts.B.length > 0;
              const isFirstDVD = dvdIndex === 0;
              
              return (
                <React.Fragment key={dvd.number}>
                  {hasA && (
                    <tr className="hover:bg-gray-50">
                      {isFirstDVD && (
                        <td
                          rowSpan={totalRows}
                          className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200 align-top"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-semibold">
                              {book.number}
                            </span>
                            <span>{book.name}</span>
                          </div>
                        </td>
                      )}
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">
                        DVD {String(dvd.number).padStart(2, '0')}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          {dvd.parts.A?.map((part, index) => {
                            const watched = isWatched(book.number, dvd.number, 'A', index);
                            const url = getVideoUrl(book.number, dvd.number, `PARTA${index + 1}`);
                            return (
                              <a
                                key={index}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                  if (onVideoClick) {
                                    e.preventDefault();
                                    onVideoClick(book.number, dvd.number, 'A', index);
                                  }
                                }}
                                className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded transition-colors ${
                                  watched
                                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                                }`}
                              >
                                {watched && (
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                )}
                                {part.name}
                              </a>
                            );
                          })}
                        </div>
                      </td>
                    </tr>
                  )}
                  {hasB && (
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200" />
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          {dvd.parts.B?.map((part, index) => {
                            const watched = isWatched(book.number, dvd.number, 'B', index);
                            const url = getVideoUrl(book.number, dvd.number, `PARTB${index + 1}`);
                            return (
                              <a
                                key={index}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                  if (onVideoClick) {
                                    e.preventDefault();
                                    onVideoClick(book.number, dvd.number, 'B', index);
                                  }
                                }}
                                className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded transition-colors ${
                                  watched
                                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                                }`}
                              >
                                {watched && (
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                )}
                                {part.name}
                              </a>
                            );
                          })}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            });
          })}
        </tbody>
      </table>
    </div>
  );
}
