'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { books } from '@/lib/data';
import { youtubeBooks } from '@/lib/youtube-data';
import VideoPlayer from '@/components/VideoPlayer';
import YouTubePlayer from '@/components/YouTubePlayer';
import CourseNavigation from '@/components/CourseNavigation';
import SyncStatus from '@/components/SyncStatus';
import { getLastWatchedVideo, saveLastWatchedVideo, getLastWatchedYouTubeVideo, saveLastWatchedYouTubeVideo, useProgress } from '@/lib/progress-store';
import { getProgress } from '@/lib/progress';
import { getYouTubeProgress } from '@/lib/youtube-progress';
import { syncProgressToCloud, getCurrentUser, onAuthChange, loadProgressFromCloud } from '@/lib/cloud-sync';
import { useSidebar } from '@/components/SidebarContext';

type SeriesType = 'original' | 'youtube';

export default function Home() {
  const router = useRouter();
  const { progressVersion, refresh } = useProgress();
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  
  // Series selection - YouTube is now the default
  const [seriesType, setSeriesType] = useState<SeriesType>(() => {
    if (typeof window === 'undefined') return 'youtube';
    const saved = localStorage.getItem('seriesType');
    return (saved === 'original' ? 'original' : 'youtube') as SeriesType;
  });
  
  // Initialize from localStorage or default to first video
  const [selectedBook, setSelectedBook] = useState(1);
  const [selectedDVD, setSelectedDVD] = useState(1);
  const [selectedPartType, setSelectedPartType] = useState('A');
  const [selectedPartIndex, setSelectedPartIndex] = useState(0);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0); // For YouTube series
  const [isLoading, setIsLoading] = useState(true);

  // Save series type to localStorage
  useEffect(() => {
    localStorage.setItem('seriesType', seriesType);
  }, [seriesType]);

  // Check if user is new and redirect to welcome page
  useEffect(() => {
    const hasProgress = localStorage.getItem('progress') !== null;
    const hasStarted = localStorage.getItem('hasStarted') === 'true';
    
    // Redirect to welcome if no progress, no last watched video, and hasn't started before
    if (!hasProgress && !hasStarted) {
      const lastWatchedYouTube = getLastWatchedYouTubeVideo();
      const lastWatchedOriginal = getLastWatchedVideo();
      if (!lastWatchedYouTube && !lastWatchedOriginal) {
        router.push('/welcome');
        return;
      }
    }
    
    // Always restore last watched video for current series type
    if (seriesType === 'youtube') {
      const lastWatched = getLastWatchedYouTubeVideo();
      if (lastWatched) {
        const book = youtubeBooks.find(b => b.number === lastWatched.book);
        if (book && book.videos[lastWatched.videoIndex]) {
          setSelectedBook(lastWatched.book);
          setSelectedVideoIndex(lastWatched.videoIndex);
        } else {
          // If saved video doesn't exist, find the most recent video with progress
          let mostRecent: { book: number; videoIndex: number; lastUpdated: number } | null = null;
          youtubeBooks.forEach(book => {
            book.videos.forEach((_, index) => {
              const progress = getYouTubeProgress(book.number, index);
              if (progress.lastUpdated && (!mostRecent || progress.lastUpdated > mostRecent.lastUpdated)) {
                mostRecent = { book: book.number, videoIndex: index, lastUpdated: progress.lastUpdated };
              }
            });
          });
          if (mostRecent) {
            setSelectedBook(mostRecent.book);
            setSelectedVideoIndex(mostRecent.videoIndex);
          }
        }
      } else {
        // Find the most recent video with any progress
        let mostRecent: { book: number; videoIndex: number; lastUpdated: number } | null = null;
        youtubeBooks.forEach(book => {
          book.videos.forEach((_, index) => {
            const progress = getYouTubeProgress(book.number, index);
            if (progress.lastUpdated && (!mostRecent || progress.lastUpdated > mostRecent.lastUpdated)) {
              mostRecent = { book: book.number, videoIndex: index, lastUpdated: progress.lastUpdated };
            }
          });
        });
        if (mostRecent) {
          setSelectedBook(mostRecent.book);
          setSelectedVideoIndex(mostRecent.videoIndex);
        }
      }
    } else {
      const lastWatched = getLastWatchedVideo();
      if (lastWatched) {
        const book = books.find(b => b.number === lastWatched.book);
        if (book) {
          const dvd = book.dvds.find(d => d.number === lastWatched.dvd);
          if (dvd && dvd.parts[lastWatched.partType]?.[lastWatched.partIndex]) {
            setSelectedBook(lastWatched.book);
            setSelectedDVD(lastWatched.dvd);
            setSelectedPartType(lastWatched.partType);
            setSelectedPartIndex(lastWatched.partIndex);
          } else {
            // Find the most recent video with progress
            let mostRecent: { book: number; dvd: number; partType: string; partIndex: number; lastUpdated: number } | null = null;
            books.forEach(book => {
              book.dvds.forEach(dvd => {
                Object.entries(dvd.parts).forEach(([partType, parts]) => {
                  parts.forEach((_, partIndex) => {
                    const progress = getProgress(book.number, dvd.number, partType, partIndex);
                    if (progress.lastUpdated && (!mostRecent || progress.lastUpdated > mostRecent.lastUpdated)) {
                      mostRecent = { book: book.number, dvd: dvd.number, partType, partIndex, lastUpdated: progress.lastUpdated };
                    }
                  });
                });
              });
            });
            if (mostRecent) {
              setSelectedBook(mostRecent.book);
              setSelectedDVD(mostRecent.dvd);
              setSelectedPartType(mostRecent.partType);
              setSelectedPartIndex(mostRecent.partIndex);
            }
          }
        }
      } else {
        // Find the most recent video with any progress
        let mostRecent: { book: number; dvd: number; partType: string; partIndex: number; lastUpdated: number } | null = null;
        books.forEach(book => {
          book.dvds.forEach(dvd => {
            Object.entries(dvd.parts).forEach(([partType, parts]) => {
              parts.forEach((_, partIndex) => {
                const progress = getProgress(book.number, dvd.number, partType, partIndex);
                if (progress.lastUpdated && (!mostRecent || progress.lastUpdated > mostRecent.lastUpdated)) {
                  mostRecent = { book: book.number, dvd: dvd.number, partType, partIndex, lastUpdated: progress.lastUpdated };
                }
              });
            });
          });
        });
        if (mostRecent) {
          setSelectedBook(mostRecent.book);
          setSelectedDVD(mostRecent.dvd);
          setSelectedPartType(mostRecent.partType);
          setSelectedPartIndex(mostRecent.partIndex);
        }
      }
    }
    setIsLoading(false);
  }, [router]);

  // Restore last watched video when series type changes
  useEffect(() => {
    if (seriesType === 'youtube') {
      const lastWatched = getLastWatchedYouTubeVideo();
      if (lastWatched) {
        const book = youtubeBooks.find(b => b.number === lastWatched.book);
        if (book && book.videos[lastWatched.videoIndex]) {
          setSelectedBook(lastWatched.book);
          setSelectedVideoIndex(lastWatched.videoIndex);
          return;
        }
      }
      // Find the most recent video with progress
      let mostRecent: { book: number; videoIndex: number; lastUpdated: number } | null = null;
      youtubeBooks.forEach(book => {
        book.videos.forEach((_, index) => {
          const progress = getYouTubeProgress(book.number, index);
          if (progress.lastUpdated && (!mostRecent || progress.lastUpdated > mostRecent.lastUpdated)) {
            mostRecent = { book: book.number, videoIndex: index, lastUpdated: progress.lastUpdated };
          }
        });
      });
      if (mostRecent) {
        setSelectedBook(mostRecent.book);
        setSelectedVideoIndex(mostRecent.videoIndex);
      }
    } else {
      const lastWatched = getLastWatchedVideo();
      if (lastWatched) {
        const book = books.find(b => b.number === lastWatched.book);
        if (book) {
          const dvd = book.dvds.find(d => d.number === lastWatched.dvd);
          if (dvd && dvd.parts[lastWatched.partType]?.[lastWatched.partIndex]) {
            setSelectedBook(lastWatched.book);
            setSelectedDVD(lastWatched.dvd);
            setSelectedPartType(lastWatched.partType);
            setSelectedPartIndex(lastWatched.partIndex);
            return;
          }
        }
      }
      // Find the most recent video with progress
      let mostRecent: { book: number; dvd: number; partType: string; partIndex: number; lastUpdated: number } | null = null;
      books.forEach(book => {
        book.dvds.forEach(dvd => {
          Object.entries(dvd.parts).forEach(([partType, parts]) => {
            parts.forEach((_, partIndex) => {
              const progress = getProgress(book.number, dvd.number, partType, partIndex);
              if (progress.lastUpdated && (!mostRecent || progress.lastUpdated > mostRecent.lastUpdated)) {
                mostRecent = { book: book.number, dvd: dvd.number, partType, partIndex, lastUpdated: progress.lastUpdated };
              }
            });
          });
        });
      });
      if (mostRecent) {
        setSelectedBook(mostRecent.book);
        setSelectedDVD(mostRecent.dvd);
        setSelectedPartType(mostRecent.partType);
        setSelectedPartIndex(mostRecent.partIndex);
      }
    }
  }, [seriesType]);

  // Load progress when user signs in
  useEffect(() => {
    const unsubscribe = onAuthChange(async (user) => {
      if (user) {
        // First sync local progress to cloud (to ensure cloud has latest data)
        // Then load from cloud (which will merge intelligently)
        await syncProgressToCloud();
        await loadProgressFromCloud();
        refresh();
      }
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [refresh]);

  const currentBook = seriesType === 'original' 
    ? books.find(b => b.number === selectedBook)
    : youtubeBooks.find(b => b.number === selectedBook);
  const currentDVD = seriesType === 'original' && currentBook && 'dvds' in currentBook
    ? currentBook.dvds.find(d => d.number === selectedDVD)
    : null;
  const currentParts = currentDVD?.parts[selectedPartType] || [];
  const currentVideo = currentParts[selectedPartIndex];
  const currentYouTubeVideo = seriesType === 'youtube' && currentBook && 'videos' in currentBook
    ? currentBook.videos[selectedVideoIndex]
    : null;

  // Helper function to find most recent YouTube video
  const findMostRecentYouTubeVideo = () => {
    let mostRecent: { book: number; videoIndex: number; lastUpdated: number } | null = null;
    youtubeBooks.forEach(book => {
      book.videos.forEach((_, index) => {
        const progress = getYouTubeProgress(book.number, index);
        if (progress.lastUpdated && (!mostRecent || progress.lastUpdated > mostRecent.lastUpdated)) {
          mostRecent = { book: book.number, videoIndex: index, lastUpdated: progress.lastUpdated };
        }
      });
    });
    if (mostRecent) {
      setSelectedBook(mostRecent.book);
      setSelectedVideoIndex(mostRecent.videoIndex);
    } else {
      // Default to first video if no progress at all
      setSelectedBook(1);
      setSelectedVideoIndex(0);
    }
  };

  // Helper function to find most recent original video
  const findMostRecentOriginalVideo = () => {
    let mostRecent: { book: number; dvd: number; partType: string; partIndex: number; lastUpdated: number } | null = null;
    books.forEach(book => {
      book.dvds.forEach(dvd => {
        Object.entries(dvd.parts).forEach(([partType, parts]) => {
          parts.forEach((_, partIndex) => {
            const progress = getProgress(book.number, dvd.number, partType, partIndex);
            if (progress.lastUpdated && (!mostRecent || progress.lastUpdated > mostRecent.lastUpdated)) {
              mostRecent = { book: book.number, dvd: dvd.number, partType, partIndex, lastUpdated: progress.lastUpdated };
            }
          });
        });
      });
    });
    if (mostRecent) {
      setSelectedBook(mostRecent.book);
      setSelectedDVD(mostRecent.dvd);
      setSelectedPartType(mostRecent.partType);
      setSelectedPartIndex(mostRecent.partIndex);
    } else {
      // Default to first video if no progress at all
      setSelectedBook(1);
      setSelectedDVD(1);
      setSelectedPartType('A');
      setSelectedPartIndex(0);
    }
  };

  const handleSelect = (book: number, dvd: number, partType: string, partIndex: number) => {
    setSelectedBook(book);
    setSelectedDVD(dvd);
    setSelectedPartType(partType);
    setSelectedPartIndex(partIndex);
    saveLastWatchedVideo(book, dvd, partType, partIndex);
  };

  const handleSelectYouTube = (book: number, videoIndex: number) => {
    setSelectedBook(book);
    setSelectedVideoIndex(videoIndex);
    saveLastWatchedYouTubeVideo(book, videoIndex);
  };

  const getNextVideo = () => {
    if (seriesType === 'youtube') {
      if (!currentBook || !('videos' in currentBook)) return;
      
      if (selectedVideoIndex < currentBook.videos.length - 1) {
        setSelectedVideoIndex(selectedVideoIndex + 1);
        saveLastWatchedYouTubeVideo(selectedBook, selectedVideoIndex + 1);
        return;
      }

      const currentBookIndex = youtubeBooks.findIndex(b => b.number === selectedBook);
      if (currentBookIndex < youtubeBooks.length - 1) {
        const nextBook = youtubeBooks[currentBookIndex + 1];
        if (nextBook.videos.length > 0) {
          setSelectedBook(nextBook.number);
          setSelectedVideoIndex(0);
          saveLastWatchedYouTubeVideo(nextBook.number, 0);
        }
      }
      return;
    }

    if (!currentDVD) return;

    if (selectedPartIndex < currentParts.length - 1) {
      setSelectedPartIndex(selectedPartIndex + 1);
      return;
    }

    if (selectedPartType === 'A') {
      const bParts = currentDVD.parts.B || [];
      if (bParts.length > 0) {
        setSelectedPartType('B');
        setSelectedPartIndex(0);
        return;
      }
    }

    if (currentBook && 'dvds' in currentBook) {
      const currentDVDIndex = currentBook.dvds.findIndex(d => d.number === selectedDVD);
      if (currentDVDIndex < currentBook.dvds.length - 1) {
        const nextDVD = currentBook.dvds[currentDVDIndex + 1];
        const nextParts = nextDVD.parts.A || [];
        if (nextParts.length > 0) {
          setSelectedDVD(nextDVD.number);
          setSelectedPartType('A');
          setSelectedPartIndex(0);
          return;
        }
      }

      const currentBookIndex = books.findIndex(b => b.number === selectedBook);
      if (currentBookIndex < books.length - 1) {
        const nextBook = books[currentBookIndex + 1];
        const nextDVD = nextBook.dvds[0];
        const nextParts = nextDVD.parts.A || [];
        if (nextParts.length > 0) {
          setSelectedBook(nextBook.number);
          setSelectedDVD(nextDVD.number);
          setSelectedPartType('A');
          setSelectedPartIndex(0);
        }
      }
    }
  };

  const getPreviousVideo = () => {
    if (seriesType === 'youtube') {
      if (!currentBook || !('videos' in currentBook)) return;
      
      if (selectedVideoIndex > 0) {
        setSelectedVideoIndex(selectedVideoIndex - 1);
        saveLastWatchedYouTubeVideo(selectedBook, selectedVideoIndex - 1);
        return;
      }

      const currentBookIndex = youtubeBooks.findIndex(b => b.number === selectedBook);
      if (currentBookIndex > 0) {
        const prevBook = youtubeBooks[currentBookIndex - 1];
        if (prevBook.videos.length > 0) {
          setSelectedBook(prevBook.number);
          setSelectedVideoIndex(prevBook.videos.length - 1);
          saveLastWatchedYouTubeVideo(prevBook.number, prevBook.videos.length - 1);
        }
      }
      return;
    }

    if (!currentDVD) return;

    if (selectedPartIndex > 0) {
      setSelectedPartIndex(selectedPartIndex - 1);
      return;
    }

    if (selectedPartType === 'B') {
      const aParts = currentDVD.parts.A || [];
      if (aParts.length > 0) {
        setSelectedPartType('A');
        setSelectedPartIndex(aParts.length - 1);
        return;
      }
    }

    if (currentBook && 'dvds' in currentBook) {
      const currentDVDIndex = currentBook.dvds.findIndex(d => d.number === selectedDVD);
      if (currentDVDIndex > 0) {
        const prevDVD = currentBook.dvds[currentDVDIndex - 1];
        const prevParts = prevDVD.parts.B || [];
        if (prevParts.length > 0) {
          setSelectedDVD(prevDVD.number);
          setSelectedPartType('B');
          setSelectedPartIndex(prevParts.length - 1);
          return;
        }
        const prevAParts = prevDVD.parts.A || [];
        if (prevAParts.length > 0) {
          setSelectedDVD(prevDVD.number);
          setSelectedPartType('A');
          setSelectedPartIndex(prevAParts.length - 1);
        }
      }

      const currentBookIndex = books.findIndex(b => b.number === selectedBook);
      if (currentBookIndex > 0) {
        const prevBook = books[currentBookIndex - 1];
        const prevDVD = prevBook.dvds[prevBook.dvds.length - 1];
        const prevParts = prevDVD.parts.B || [];
        if (prevParts.length > 0) {
          setSelectedBook(prevBook.number);
          setSelectedDVD(prevDVD.number);
          setSelectedPartType('B');
          setSelectedPartIndex(prevParts.length - 1);
        }
      }
    }
  };

  const videoTitle = seriesType === 'youtube' && currentYouTubeVideo
    ? currentYouTubeVideo.title
    : currentVideo
    ? `${currentBook?.name} - DVD ${String(selectedDVD).padStart(2, '0')} - ${currentVideo.name}`
    : '';

  // Show loading state while checking
  if (isLoading) {
    return (
      <div className="h-[calc(100vh-3.5rem)] flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-3.5rem)] flex bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200 flex flex-col overflow-hidden transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Course Content</h1>
              <p className="text-xs text-gray-500 mt-0.5">
                {seriesType === 'youtube' ? 'Abu Kenzah' : 'Dr. Abdur Rahim'}
              </p>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Series Selector */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                setSeriesType('youtube');
                // Restore last watched YouTube video
                const lastWatched = getLastWatchedYouTubeVideo();
                if (lastWatched) {
                  const book = youtubeBooks.find(b => b.number === lastWatched.book);
                  if (book && book.videos[lastWatched.videoIndex]) {
                    setSelectedBook(lastWatched.book);
                    setSelectedVideoIndex(lastWatched.videoIndex);
                  } else {
                    // Find most recent video
                    findMostRecentYouTubeVideo();
                  }
                } else {
                  findMostRecentYouTubeVideo();
                }
              }}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                seriesType === 'youtube'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Abu Kenzah (YouTube)
            </button>
            <button
              onClick={() => {
                setSeriesType('original');
                // Restore last watched original video
                const lastWatched = getLastWatchedVideo();
                if (lastWatched) {
                  const book = books.find(b => b.number === lastWatched.book);
                  if (book) {
                    const dvd = book.dvds.find(d => d.number === lastWatched.dvd);
                    if (dvd && dvd.parts[lastWatched.partType]?.[lastWatched.partIndex]) {
                      setSelectedBook(lastWatched.book);
                      setSelectedDVD(lastWatched.dvd);
                      setSelectedPartType(lastWatched.partType);
                      setSelectedPartIndex(lastWatched.partIndex);
                    } else {
                      findMostRecentOriginalVideo();
                    }
                  } else {
                    findMostRecentOriginalVideo();
                  }
                } else {
                  findMostRecentOriginalVideo();
                }
              }}
              className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                seriesType === 'original'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Dr. Abdur Rahim
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <CourseNavigation
            books={seriesType === 'original' ? books : youtubeBooks}
            selectedBook={selectedBook}
            selectedDVD={seriesType === 'original' ? selectedDVD : 0}
            selectedPartType={seriesType === 'original' ? selectedPartType : ''}
            selectedPartIndex={seriesType === 'original' ? selectedPartIndex : selectedVideoIndex}
            progressVersion={progressVersion}
            seriesType={seriesType}
            onSelect={(book, dvd, partType, partIndex) => {
              if (seriesType === 'original') {
                handleSelect(book, dvd, partType, partIndex);
              } else {
                handleSelectYouTube(book, partIndex);
              }
              setSidebarOpen(false);
            }}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden min-w-0">
        {seriesType === 'youtube' && currentYouTubeVideo ? (
          // YouTube series (default)
          <div className="flex-1 overflow-y-auto p-4 lg:p-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-4">
                <h2 className="text-xs lg:text-sm font-medium text-gray-500 mb-1">
                  {currentBook?.name} • Video {selectedVideoIndex + 1} of {currentBook && 'videos' in currentBook ? currentBook.videos.length : 0}
                </h2>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">{currentYouTubeVideo.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{currentYouTubeVideo.duration}</p>
              </div>
              <YouTubePlayer
                videoUrl={currentYouTubeVideo.videoUrl}
                title={videoTitle}
                bookNumber={selectedBook}
                videoIndex={selectedVideoIndex}
                durationSeconds={currentYouTubeVideo.durationSeconds}
                onNext={getNextVideo}
                onPrevious={getPreviousVideo}
                onProgressChange={refresh}
              />
            </div>
          </div>
        ) : seriesType === 'original' && currentVideo ? (
          // Original series (alternative)
          <div className="flex-1 overflow-y-auto p-4 lg:p-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-4">
                <h2 className="text-xs lg:text-sm font-medium text-gray-500 mb-1">
                  {currentBook?.name} • DVD {String(selectedDVD).padStart(2, '0')} • Part {selectedPartType}
                </h2>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">{currentVideo.name}</h3>
              </div>
              <VideoPlayer
                src={currentVideo.url}
                title={videoTitle}
                bookNumber={selectedBook}
                dvdNumber={selectedDVD}
                partType={selectedPartType}
                partIndex={selectedPartIndex}
                onNext={getNextVideo}
                onPrevious={getPreviousVideo}
                onProgressChange={refresh}
              />
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-16 h-16 mx-auto text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <p className="text-gray-500 text-sm">Select a video to begin</p>
            </div>
          </div>
        )}
        
        {/* Sync Status Bar */}
        <SyncStatus />
      </main>
    </div>
  );
}
