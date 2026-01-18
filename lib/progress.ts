import { getVideoKey } from './data';

export interface Progress {
  watched: boolean;
  lastPosition?: number;
  duration?: number;
}

export function getProgress(bookNumber: number, dvdNumber: number, partType: string, partIndex: number): Progress {
  if (typeof window === 'undefined') {
    return { watched: false };
  }
  
  const key = getVideoKey(bookNumber, dvdNumber, partType, partIndex);
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

export function saveProgress(
  bookNumber: number,
  dvdNumber: number,
  partType: string,
  partIndex: number,
  progress: Progress
): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  const key = getVideoKey(bookNumber, dvdNumber, partType, partIndex);
  localStorage.setItem(key, JSON.stringify(progress));
}

export function markAsWatched(
  bookNumber: number,
  dvdNumber: number,
  partType: string,
  partIndex: number
): void {
  saveProgress(bookNumber, dvdNumber, partType, partIndex, { watched: true });
}

export function getAllProgress(): Record<string, Progress> {
  if (typeof window === 'undefined') {
    return {};
  }
  
  const progress: Record<string, Progress> = {};
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('book')) {
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

export function clearAllProgress(): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  const keysToRemove: string[] = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('book')) {
      keysToRemove.push(key);
    }
  }
  
  keysToRemove.forEach(key => localStorage.removeItem(key));
}
