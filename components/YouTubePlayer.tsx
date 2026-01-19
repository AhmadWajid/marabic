'use client';

import { useEffect, useRef, useState } from 'react';
import { getYouTubeProgress, saveYouTubeProgress, markYouTubeAsWatched } from '@/lib/youtube-progress';
import { saveLastWatchedYouTubeVideo } from '@/lib/progress-store';
import { syncProgressToCloud } from '@/lib/cloud-sync';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YouTubePlayerProps {
  videoUrl: string;
  title: string;
  bookNumber: number;
  videoIndex: number;
  durationSeconds: number;
  onNext?: () => void;
  onPrevious?: () => void;
  onProgressChange?: () => void;
}

export default function YouTubePlayer({
  videoUrl,
  title,
  bookNumber,
  videoIndex,
  durationSeconds,
  onNext,
  onPrevious,
  onProgressChange,
}: YouTubePlayerProps) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [hasSeeked, setHasSeeked] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastSaveTimeRef = useRef<number>(0);
  const [playerReady, setPlayerReady] = useState(false);

  // Extract YouTube video ID
  const youtubeId = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
  const savedProgress = getYouTubeProgress(bookNumber, videoIndex);
  const startTime = savedProgress.lastPosition && savedProgress.lastPosition > 5 ? savedProgress.lastPosition : 0;

  // Load YouTube iframe API
  useEffect(() => {
    // Suppress YouTube analytics errors in console (they're harmless)
    const originalError = console.error;
    console.error = (...args: any[]) => {
      if (args[0]?.includes?.('ERR_BLOCKED_BY_CLIENT') || 
          args[0]?.toString?.().includes('youtubei/v1/log_event')) {
        return; // Suppress these harmless errors
      }
      originalError.apply(console, args);
    };

    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      initializePlayer();
      return () => {
        console.error = originalError;
        if (playerRef.current) {
          try {
            playerRef.current.destroy();
          } catch (e) {
            // Ignore destroy errors
          }
        }
      };
    }

    // Load the API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Set up callback
    window.onYouTubeIframeAPIReady = () => {
      initializePlayer();
    };

    return () => {
      console.error = originalError;
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // Ignore destroy errors
        }
      }
    };
  }, [youtubeId, bookNumber, videoIndex]);

  const initializePlayer = () => {
    if (!containerRef.current || !youtubeId || playerRef.current) return;

    const savedProgress = getYouTubeProgress(bookNumber, videoIndex);
    const startTime = savedProgress.lastPosition && savedProgress.lastPosition > 5 ? savedProgress.lastPosition : 0;

    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId: youtubeId,
      playerVars: {
        modestbranding: 1,
        rel: 0,
        enablejsapi: 1,
        start: Math.floor(startTime),
      },
      events: {
        onReady: (event: any) => {
          console.log('YouTube Player - Ready');
          setPlayerReady(true);
          saveLastWatchedYouTubeVideo(bookNumber, videoIndex);
          
          // Seek to saved position
          if (startTime > 0 && !hasSeeked) {
            setTimeout(() => {
              if (playerRef.current) {
                try {
                  playerRef.current.seekTo(startTime, true);
                  setHasSeeked(true);
                  console.log('YouTube Player - Seeked to', startTime);
                } catch (e) {
                  console.error('Seek error:', e);
                }
              }
            }, 1000);
          } else {
            setHasSeeked(true);
          }
        },
        onStateChange: (event: any) => {
          // 0 = ended, 1 = playing, 2 = paused, 3 = buffering
          console.log('YouTube Player - State changed:', event.data);
          if (event.data === 0) {
            // Video ended
            console.log('YouTube Player - Video ended');
            markYouTubeAsWatched(bookNumber, videoIndex);
            if (onProgressChange) {
              onProgressChange();
            }
            syncProgressToCloud();
          }
        },
        onError: (event: any) => {
          console.error('YouTube Player - Error:', event.data);
        },
      },
    });
  };

  // Track progress periodically
  useEffect(() => {
    if (!playerReady || !playerRef.current) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (playerRef.current) {
        try {
          const currentTime = playerRef.current.getCurrentTime();
          const duration = playerRef.current.getDuration();
          
          if (currentTime && duration) {
            setPlayedSeconds(currentTime);
            
            // Save progress every 5 seconds
            const currentTimeFloor = Math.floor(currentTime);
            if (currentTimeFloor !== lastSaveTimeRef.current && currentTimeFloor % 5 === 0 && currentTimeFloor > 0) {
              lastSaveTimeRef.current = currentTimeFloor;
              const savedProgress = getYouTubeProgress(bookNumber, videoIndex);
              saveYouTubeProgress(bookNumber, videoIndex, {
                watched: savedProgress.watched,
                lastPosition: currentTime,
                duration: duration,
              });
              console.log(`YouTube Player - Saved progress: ${currentTime.toFixed(1)}s / ${duration.toFixed(1)}s`);
              if (onProgressChange) {
                onProgressChange();
              }
              syncProgressToCloud();
            }
          }
        } catch (e) {
          // Player might not be ready yet
        }
      }
    }, 1000); // Check every second

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [playerReady, bookNumber, videoIndex, onProgressChange]);

  if (!videoUrl || !youtubeId) {
    return (
      <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-lg">
        <p className="text-gray-500">No video URL provided</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        <div ref={containerRef} className="absolute inset-0 w-full h-full" />
        {!playerReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
            <div className="text-white text-sm">Loading player...</div>
          </div>
        )}
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
