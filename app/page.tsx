'use client';

import { useState, useEffect } from 'react';
import { books } from '@/lib/data';
import VideoPlayer from '@/components/VideoPlayer';
import CourseNavigation from '@/components/CourseNavigation';
import SyncStatus from '@/components/SyncStatus';
import { getLastWatchedVideo, saveLastWatchedVideo, useProgress } from '@/lib/progress-store';
import { syncProgressToCloud, getCurrentUser, onAuthChange, loadProgressFromCloud } from '@/lib/cloud-sync';
import { useSidebar } from '@/components/SidebarContext';

export default function Home() {
  const { progressVersion, refresh } = useProgress();
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  
  // Initialize from localStorage or default to first video
  const [selectedBook, setSelectedBook] = useState(1);
  const [selectedDVD, setSelectedDVD] = useState(1);
  const [selectedPartType, setSelectedPartType] = useState('A');
  const [selectedPartIndex, setSelectedPartIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [hasCheckedWelcome, setHasCheckedWelcome] = useState(false);

  // Check if user is new and show welcome screen
  useEffect(() => {
    const lastWatched = getLastWatchedVideo();
    const hasProgress = localStorage.getItem('progress') !== null;
    const hasStarted = localStorage.getItem('hasStarted') === 'true';
    
    // Show welcome if no progress, no last watched video, and hasn't started before
    if (!lastWatched && !hasProgress && !hasStarted) {
      setShowWelcome(true);
    } else if (lastWatched) {
      // Restore last watched video
      const book = books.find(b => b.number === lastWatched.book);
      if (book) {
        const dvd = book.dvds.find(d => d.number === lastWatched.dvd);
        if (dvd && dvd.parts[lastWatched.partType]?.[lastWatched.partIndex]) {
          setSelectedBook(lastWatched.book);
          setSelectedDVD(lastWatched.dvd);
          setSelectedPartType(lastWatched.partType);
          setSelectedPartIndex(lastWatched.partIndex);
        }
      }
    }
    setHasCheckedWelcome(true);
  }, []);

  // Load progress when user signs in
  useEffect(() => {
    const unsubscribe = onAuthChange(async (user) => {
      if (user) {
        await loadProgressFromCloud();
        refresh();
      }
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [refresh]);

  const currentBook = books.find(b => b.number === selectedBook);
  const currentDVD = currentBook?.dvds.find(d => d.number === selectedDVD);
  const currentParts = currentDVD?.parts[selectedPartType] || [];
  const currentVideo = currentParts[selectedPartIndex];

  const handleSelect = (book: number, dvd: number, partType: string, partIndex: number) => {
    setSelectedBook(book);
    setSelectedDVD(dvd);
    setSelectedPartType(partType);
    setSelectedPartIndex(partIndex);
    saveLastWatchedVideo(book, dvd, partType, partIndex);
  };

  const getNextVideo = () => {
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

    if (currentBook) {
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

    if (currentBook) {
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

  const videoTitle = currentVideo
    ? `${currentBook?.name} - DVD ${String(selectedDVD).padStart(2, '0')} - ${currentVideo.name}`
    : '';

  const handleStartLearning = () => {
    setShowWelcome(false);
    // Mark that user has started
    localStorage.setItem('hasStarted', 'true');
  };

  // Show welcome screen for new users
  if (showWelcome && hasCheckedWelcome) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] bg-linear-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 py-12 lg:py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <svg
                className="w-12 h-12 text-blue-600"
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Welcome to Madina Arabic Course
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Learn Arabic with Dr. Abdur Rahim's Comprehensive Video Course
            </p>
            <p className="text-sm text-gray-500">
              Track your progress • Watch videos online • Sync across devices
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">About This Course</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Lessons</h3>
                  <p className="text-gray-600">
                    Access comprehensive Arabic language video lessons organized by books and DVDs. 
                    Watch directly in your browser with no downloads required.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
                  <p className="text-gray-600">
                    Automatically track your learning progress. Your watch history and completion status 
                    are saved locally and can be synced across devices when you sign in.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cross-Device Sync</h3>
                  <p className="text-gray-600">
                    Sign in with your email to sync your progress across all your devices. 
                    Continue learning seamlessly from your phone, tablet, or computer.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Videos</h3>
                  <p className="text-gray-600">
                    Need offline access? Download videos in multiple formats for offline viewing 
                    from the Downloads page.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleStartLearning}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Start Learning</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Click to explore the course content and begin your Arabic learning journey
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Show loading state while checking
  if (!hasCheckedWelcome) {
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
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Course Content</h1>
            <p className="text-xs text-gray-500 mt-0.5">Dr. Abdur Rahim</p>
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
        <div className="flex-1 overflow-y-auto">
          <CourseNavigation
            books={books}
            selectedBook={selectedBook}
            selectedDVD={selectedDVD}
            selectedPartType={selectedPartType}
            selectedPartIndex={selectedPartIndex}
            progressVersion={progressVersion}
            onSelect={(book, dvd, partType, partIndex) => {
              handleSelect(book, dvd, partType, partIndex);
              setSidebarOpen(false);
            }}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden min-w-0">
        {currentVideo ? (
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
