'use client';

import { useState, useEffect } from 'react';
import { syncProgressToCloud, loadProgressFromCloud, subscribeToProgressUpdates, getCurrentUser } from '@/lib/cloud-sync';
import { useProgress } from '@/lib/progress-store';

export default function SyncStatus() {
  const [lastSynced, setLastSynced] = useState<string | null>(null);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');
  const [user, setUser] = useState(getCurrentUser());
  const { refresh } = useProgress();

  useEffect(() => {
    const interval = setInterval(() => {
      setUser(getCurrentUser());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!user) return;

    // Load progress on mount and when user changes
    // First sync local to cloud, then load (to ensure cloud has latest before merging)
    (async () => {
      await syncProgressToCloud();
      const success = await loadProgressFromCloud();
      if (success) {
        refresh();
        setLastSynced(new Date().toLocaleString());
        setSyncStatus('success');
        setTimeout(() => setSyncStatus('idle'), 2000);
      }
    })();

    // Subscribe to real-time updates
    const unsubscribe = subscribeToProgressUpdates(() => {
      refresh();
      setLastSynced(new Date().toLocaleString());
      setSyncStatus('success');
      setTimeout(() => setSyncStatus('idle'), 2000);
    });

    // Auto-sync periodically (every 30 seconds)
    const syncInterval = setInterval(async () => {
      setSyncStatus('syncing');
      const success = await syncProgressToCloud();
      if (success) {
        setLastSynced(new Date().toLocaleString());
        setSyncStatus('success');
        setTimeout(() => setSyncStatus('idle'), 2000);
      } else {
        setSyncStatus('error');
        setTimeout(() => setSyncStatus('idle'), 3000);
      }
    }, 30000); // Sync every 30 seconds

    return () => {
      if (unsubscribe) unsubscribe();
      clearInterval(syncInterval);
    };
  }, [refresh, user]);

  if (!user) {
    return null; // Don't show sync if not signed in
  }

  return (
    <div className="bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {syncStatus === 'syncing' && (
            <svg className="animate-spin h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          )}
          {syncStatus === 'success' && (
            <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
          {syncStatus === 'error' && (
            <svg className="h-4 w-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
          {syncStatus === 'idle' && (
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          )}
          <span className="text-xs text-gray-600">
            {syncStatus === 'syncing' && 'Syncing...'}
            {syncStatus === 'success' && 'Synced'}
            {syncStatus === 'error' && 'Sync failed'}
            {syncStatus === 'idle' && 'Auto-sync enabled'}
          </span>
        </div>

        {lastSynced && (
          <div className="text-xs text-gray-500">
            Last synced: {new Date(lastSynced).toLocaleTimeString()}
          </div>
        )}
      </div>
    </div>
  );
}
