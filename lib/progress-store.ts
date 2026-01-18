'use client';

import { useState, useEffect, useCallback } from 'react';
import { getProgress as getProgressUtil, getAllProgress, Progress } from './progress';

// Custom hook to track progress changes and force re-renders
export function useProgress() {
  const [progressVersion, setProgressVersion] = useState(0);

  const refresh = useCallback(() => {
    setProgressVersion(v => v + 1);
  }, []);

  useEffect(() => {
    // Listen for storage changes (from other tabs/windows)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key && e.key.startsWith('book')) {
        refresh();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [refresh]);

  return { progressVersion, refresh };
}

// Hook to get progress with reactivity
export function useVideoProgress(
  bookNumber: number,
  dvdNumber: number,
  partType: string,
  partIndex: number,
  progressVersion: number
): Progress {
  const [progress, setProgress] = useState<Progress>(() => 
    getProgressUtil(bookNumber, dvdNumber, partType, partIndex)
  );

  useEffect(() => {
    setProgress(getProgressUtil(bookNumber, dvdNumber, partType, partIndex));
  }, [bookNumber, dvdNumber, partType, partIndex, progressVersion]);

  return progress;
}

// Get last watched video from localStorage
export function getLastWatchedVideo(): {
  book: number;
  dvd: number;
  partType: string;
  partIndex: number;
} | null {
  if (typeof window === 'undefined') return null;

  const lastWatched = localStorage.getItem('lastWatchedVideo');
  if (!lastWatched) return null;

  try {
    return JSON.parse(lastWatched);
  } catch {
    return null;
  }
}

// Save last watched video
export function saveLastWatchedVideo(
  book: number,
  dvd: number,
  partType: string,
  partIndex: number
): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('lastWatchedVideo', JSON.stringify({ book, dvd, partType, partIndex }));
}
