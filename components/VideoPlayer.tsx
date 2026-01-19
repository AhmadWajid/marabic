'use client';

import { useEffect, useRef, useState } from 'react';
import { getProgress, saveProgress, markAsWatched } from '@/lib/progress';
import { saveLastWatchedVideo } from '@/lib/progress-store';
import { syncProgressToCloud } from '@/lib/cloud-sync';

interface VideoPlayerProps {
  src: string;
  title: string;
  bookNumber: number;
  dvdNumber: number;
  partType: string;
  partIndex: number;
  onNext?: () => void;
  onPrevious?: () => void;
  onProgressChange?: () => void;
}

export default function VideoPlayer({
  src,
  title,
  bookNumber,
  dvdNumber,
  partType,
  partIndex,
  onNext,
  onPrevious,
  onProgressChange,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasSeeked, setHasSeeked] = useState(false);
  const lastSaveTimeRef = useRef<number>(0);

  // Load saved progress on mount
  useEffect(() => {
    const savedProgress = getProgress(bookNumber, dvdNumber, partType, partIndex);
    saveLastWatchedVideo(bookNumber, dvdNumber, partType, partIndex);
    setHasSeeked(false);
    lastSaveTimeRef.current = 0; // Reset save time tracking
  }, [src, bookNumber, dvdNumber, partType, partIndex]);

  // Set up video event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      // Seek to saved position after metadata loads
      if (!hasSeeked) {
        const savedProgress = getProgress(bookNumber, dvdNumber, partType, partIndex);
        if (savedProgress.lastPosition && savedProgress.lastPosition > 5 && savedProgress.lastPosition < video.duration - 10) {
          // Only seek if position is valid and not near the end
          video.currentTime = savedProgress.lastPosition;
          setHasSeeked(true);
        } else if (savedProgress.watched) {
          // If video is marked as watched, start from beginning
          video.currentTime = 0;
          setHasSeeked(true);
        } else {
          setHasSeeked(true);
        }
      }
    };

    const handleTimeUpdate = () => {
      setPlayedSeconds(video.currentTime);
      
      // Save progress every 5 seconds
      const currentTimeFloor = Math.floor(video.currentTime);
      if (currentTimeFloor !== lastSaveTimeRef.current && currentTimeFloor % 5 === 0 && currentTimeFloor > 0) {
        lastSaveTimeRef.current = currentTimeFloor;
        const savedProgress = getProgress(bookNumber, dvdNumber, partType, partIndex);
        saveProgress(bookNumber, dvdNumber, partType, partIndex, {
          watched: savedProgress.watched,
          lastPosition: video.currentTime,
          duration: video.duration,
        });
        if (onProgressChange) {
          onProgressChange();
        }
        syncProgressToCloud();
      }
    };

    const handleEnded = () => {
      markAsWatched(bookNumber, dvdNumber, partType, partIndex);
      if (onProgressChange) {
        onProgressChange();
      }
      syncProgressToCloud();
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [src, bookNumber, dvdNumber, partType, partIndex, hasSeeked, onProgressChange]);

  if (!src) {
    return (
      <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-lg">
        <p className="text-gray-500">No video URL provided</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          controls
          className="w-full h-full"
          playsInline
          preload="metadata"
        />
      </div>
      
      {(onPrevious || onNext) && (
        <div className="flex items-center justify-center gap-4 mt-4">
          {onPrevious && (
            <button
              onClick={onPrevious}
              className="px-4 py-2 text-sm font-medium rounded-md bg-gray-100 hover:bg-gray-200 text-gray-900 transition-colors"
            >
              Previous
            </button>
          )}
          {onNext && (
            <button
              onClick={onNext}
              className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
}
