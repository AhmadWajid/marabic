'use client';

import { useState, useEffect } from 'react';
import { getCurrentUser, signOutUser, onAuthChange } from '@/lib/cloud-sync';
import AuthModal from './AuthModal';
import { loadProgressFromCloud, syncProgressToCloud } from '@/lib/cloud-sync';
import { useProgress } from '@/lib/progress-store';

export default function AuthButton() {
  const [user, setUser] = useState(getCurrentUser());
  const [showModal, setShowModal] = useState(false);
  const { refresh } = useProgress();

  useEffect(() => {
    const unsubscribe = onAuthChange(async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Progress loading is handled in app/page.tsx to avoid duplicate calls
        // Just refresh the UI
        refresh();
      }
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [refresh]);

  const handleSignOut = async () => {
    await signOutUser();
    setUser(null);
    refresh();
  };

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600 hidden sm:block">
          {user.email}
        </span>
        <button
          onClick={handleSignOut}
          className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 rounded-md transition-colors"
      >
        Sign In
      </button>
      <AuthModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
