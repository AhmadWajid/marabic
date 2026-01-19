import { getYouTubeVideoKey } from './youtube-data';

export interface YouTubeProgress {
  watched: boolean;
  lastPosition?: number;
  duration?: number;
  lastUpdated?: number; // Timestamp in milliseconds
}

export function getYouTubeProgress(bookNumber: number, videoIndex: number): YouTubeProgress {
  if (typeof window === 'undefined') {
    return { watched: false };
  }
  
  const key = getYouTubeVideoKey(bookNumber, videoIndex);
  const stored = localStorage.getItem(key);
  
  if (!stored) {
    return { watched: false };
  }
  
  try {
    return JSON.parse(stored);
  } catch {
    return { watched: false };
  }
}

export function saveYouTubeProgress(
  bookNumber: number,
  videoIndex: number,
  progress: YouTubeProgress
): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  const key = getYouTubeVideoKey(bookNumber, videoIndex);
  // Always add/update timestamp when saving
  const progressWithTimestamp = {
    ...progress,
    lastUpdated: Date.now(),
  };
  localStorage.setItem(key, JSON.stringify(progressWithTimestamp));
}

export function markYouTubeAsWatched(
  bookNumber: number,
  videoIndex: number
): void {
  // Preserve existing progress when marking as watched
  const existing = getYouTubeProgress(bookNumber, videoIndex);
  saveYouTubeProgress(bookNumber, videoIndex, {
    ...existing,
    watched: true,
  });
}

export function getAllYouTubeProgress(): Record<string, YouTubeProgress> {
  if (typeof window === 'undefined') {
    return {};
  }
  
  const progress: Record<string, YouTubeProgress> = {};
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('youtube-book')) {
      try {
        const value = localStorage.getItem(key);
        if (value) {
          progress[key] = JSON.parse(value);
        }
      } catch {
        // Ignore invalid entries
      }
    }
  }
  
  return progress;
}

export function clearAllYouTubeProgress(): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  const keysToRemove: string[] = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('youtube-book')) {
      keysToRemove.push(key);
    }
  }
  
  keysToRemove.forEach(key => localStorage.removeItem(key));
}
