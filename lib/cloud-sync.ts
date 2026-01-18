'use client';

import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore, doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { getAuth, Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { getFirebaseConfig, isFirebaseConfigured } from './firebase-config';
import { getAllProgress, Progress } from './progress';

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let auth: Auth | null = null;

// Initialize Firebase
function initFirebase() {
  if (!isFirebaseConfigured()) {
    console.warn('Firebase not configured. Progress will only be saved locally.');
    return false;
  }

  try {
    // Get fresh config to ensure we have the latest env vars
    const config = getFirebaseConfig();
    
    // Strict validation: check for empty strings, not just falsy values
    const hasValidConfig = 
      config.apiKey && config.apiKey.trim().length > 0 &&
      config.authDomain && config.authDomain.trim().length > 0 &&
      config.projectId && config.projectId.trim().length > 0 &&
      config.storageBucket && config.storageBucket.trim().length > 0 &&
      config.messagingSenderId && config.messagingSenderId.trim().length > 0 &&
      config.appId && config.appId.trim().length > 0;
    
    if (!hasValidConfig) {
      console.error('Firebase config validation failed. Missing or empty required fields.');
      return false;
    }

    // Check if Firebase is already initialized
    const existingApps = getApps();
    if (existingApps.length > 0) {
      // Use existing app
      app = existingApps[0];
      
      // Verify the existing app has valid config by checking its options
      const appOptions = app.options;
      if (!appOptions.apiKey || !appOptions.apiKey.trim() || 
          !appOptions.projectId || !appOptions.projectId.trim()) {
        console.error('Existing Firebase app has invalid configuration. Reinitializing...');
        
        // The existing app is invalid, we need to delete it and create a new one
        // Note: We can't delete apps in Firebase v9+, so we'll try to use the default app
        // or initialize with a name
        try {
          app = initializeApp(config, 'arabie-app');
        } catch (initError: any) {
          // If that fails, try to get the default app
          app = existingApps[0];
        }
      }
      
      db = getFirestore(app);
      auth = getAuth(app);
    } else {
      // Initialize new app with validated config
      app = initializeApp(config);
      db = getFirestore(app);
      auth = getAuth(app);
    }
    
    // Verify auth was initialized correctly and has valid config
    if (!auth) {
      console.error('Failed to initialize Firebase Auth');
      return false;
    }
    
    // Double-check the app config is valid by checking auth's app
    const authApp = auth.app;
    const authAppOptions = authApp.options;
    if (!authAppOptions.apiKey || !authAppOptions.apiKey.trim() || 
        !authAppOptions.projectId || !authAppOptions.projectId.trim()) {
      console.error('Firebase Auth app has invalid configuration.');
      return false;
    }
    
    return true;
  } catch (error: any) {
    console.error('Failed to initialize Firebase:', error);
    console.error('Error details:', {
      code: error?.code,
      message: error?.message,
      stack: error?.stack,
    });
    
    // If it's a configuration error, provide helpful message
    if (error?.code === 'auth/configuration-not-found' || 
        error?.code === 400 || 
        error?.message?.includes('configuration') ||
        error?.message?.includes('CONFIGURATION_NOT_FOUND')) {
      console.error('Firebase configuration error. Please check your environment variables.');
    }
    return false;
  }
}

// Get current user ID
function getCurrentUserId(): string | null {
  if (!auth) {
    if (!initFirebase()) return null;
    if (!auth) return null;
  }
  return auth.currentUser?.uid || null;
}

// Sign up with email and password
export async function signUp(email: string, password: string): Promise<{ success: boolean; error?: string }> {
  if (!isFirebaseConfigured()) {
    return { success: false, error: 'Firebase not configured. Please check your .env.local file.' };
  }

  try {
    // Ensure Firebase is initialized before attempting sign up
    if (!auth) {
      const initialized = initFirebase();
      if (!initialized || !auth) {
        console.error('Failed to initialize Firebase before sign up');
        return { success: false, error: 'Failed to initialize Firebase. Please check your configuration and restart the dev server.' };
      }
    }

    // Double-check auth is valid and has proper config
    if (!auth) {
      return { success: false, error: 'Firebase Auth not initialized. Please restart the app.' };
    }
    
    // Verify auth app has valid config
    const authApp = auth.app;
    if (!authApp || !authApp.options || !authApp.options.apiKey || !authApp.options.projectId) {
      console.error('Firebase Auth has invalid configuration. Reinitializing...');
      const reinitialized = initFirebase();
      if (!reinitialized || !auth) {
        return { success: false, error: 'Firebase configuration is invalid. Please check your .env.local file and restart the server.' };
      }
    }

    console.log('Attempting to create user with email:', email);
    await createUserWithEmailAndPassword(auth, email, password);
    console.log('User created successfully');
    return { success: true };
  } catch (error: any) {
    console.error('Sign up error:', error);
    console.error('Error details:', {
      code: error?.code,
      message: error?.message,
      customData: error?.customData,
      response: error?.response,
      serverResponse: error?.serverResponse,
    });
    
    // Handle specific Firebase Auth errors
    const errorCode = error?.code;
    const errorMessage = error?.message;
    
    // auth/configuration-not-found with 400 typically means Email/Password auth is not enabled
    if (errorCode === 'auth/configuration-not-found') {
      return { 
        success: false, 
        error: 'Email/Password authentication is not enabled in Firebase Console. Please go to Firebase Console → Authentication → Sign-in method and enable "Email/Password".' 
      };
    }
    
    if (errorCode === 400 || error?.response?.status === 400) {
      // 400 Bad Request from Firebase API usually means Email/Password auth is not enabled
      return { 
        success: false, 
        error: 'Email/Password authentication is not enabled in Firebase Console. Please go to Firebase Console → Authentication → Sign-in method and enable "Email/Password".' 
      };
    }
    
    if (errorCode === 'auth/email-already-in-use') {
      return { success: false, error: 'This email is already registered. Please sign in instead.' };
    }
    
    if (errorCode === 'auth/invalid-email') {
      return { success: false, error: 'Please enter a valid email address.' };
    }
    
    if (errorCode === 'auth/weak-password') {
      return { success: false, error: 'Password is too weak. Please use at least 6 characters.' };
    }
    
    if (errorCode === 'auth/operation-not-allowed') {
      return { success: false, error: 'Email/Password authentication is not enabled in Firebase Console. Please enable it in Authentication settings.' };
    }
    
    if (errorCode === 'auth/network-request-failed') {
      return { success: false, error: 'Network error. Please check your internet connection and try again.' };
    }
    
    // Return user-friendly error message
    if (errorMessage) {
      // Extract user-friendly message from Firebase error
      const friendlyMessage = errorMessage.replace('Firebase: ', '').replace('auth/', '');
      return { success: false, error: friendlyMessage };
    }
    
    return { success: false, error: 'Failed to create account. Please try again.' };
  }
}

// Sign in with email and password
export async function signIn(email: string, password: string): Promise<{ success: boolean; error?: string }> {
  if (!isFirebaseConfigured()) {
    return { success: false, error: 'Firebase not configured. Please check your .env.local file.' };
  }

  try {
    // Ensure Firebase is initialized before attempting sign in
    if (!auth) {
      const initialized = initFirebase();
      if (!initialized || !auth) {
        console.error('Failed to initialize Firebase before sign in');
        return { success: false, error: 'Failed to initialize Firebase. Please check your configuration and restart the dev server.' };
      }
    }

    // Double-check auth is valid and has proper config
    if (!auth) {
      return { success: false, error: 'Firebase Auth not initialized. Please restart the app.' };
    }
    
    // Verify auth app has valid config
    const authApp = auth.app;
    if (!authApp || !authApp.options || !authApp.options.apiKey || !authApp.options.projectId) {
      console.error('Firebase Auth has invalid configuration. Reinitializing...');
      const reinitialized = initFirebase();
      if (!reinitialized || !auth) {
        return { success: false, error: 'Firebase configuration is invalid. Please check your .env.local file and restart the server.' };
      }
    }

    console.log('Attempting to sign in with email:', email);
    await signInWithEmailAndPassword(auth, email, password);
    console.log('Signed in successfully');
    return { success: true };
  } catch (error: any) {
    console.error('Sign in error:', error);
    
    // Handle specific Firebase Auth errors
    const errorCode = error?.code;
    const errorMessage = error?.message;
    
    if (errorCode === 'auth/configuration-not-found' || errorCode === 400) {
      // Check if it's a 400 error from the API (which often means Email/Password auth is not enabled)
      if (error?.response?.status === 400 || errorMessage?.includes('CONFIGURATION_NOT_FOUND')) {
        return { 
          success: false, 
          error: 'Email/Password authentication is not enabled in Firebase Console. Please go to Firebase Console → Authentication → Sign-in method and enable "Email/Password".' 
        };
      }
      return { success: false, error: 'Firebase configuration is incomplete. Please check your .env.local file has all required values.' };
    }
    
    if (errorCode === 'auth/user-not-found') {
      return { success: false, error: 'No account found with this email. Please sign up first.' };
    }
    
    if (errorCode === 'auth/wrong-password') {
      return { success: false, error: 'Incorrect password. Please try again.' };
    }
    
    if (errorCode === 'auth/invalid-email') {
      return { success: false, error: 'Please enter a valid email address.' };
    }
    
    if (errorCode === 'auth/invalid-credential') {
      return { success: false, error: 'Invalid email or password. Please check your credentials and try again.' };
    }
    
    if (errorCode === 'auth/too-many-requests') {
      return { success: false, error: 'Too many failed attempts. Please try again later.' };
    }
    
    if (errorCode === 'auth/network-request-failed') {
      return { success: false, error: 'Network error. Please check your internet connection and try again.' };
    }
    
    // Return user-friendly error message
    if (errorMessage) {
      // Extract user-friendly message from Firebase error
      const friendlyMessage = errorMessage.replace('Firebase: ', '').replace('auth/', '');
      return { success: false, error: friendlyMessage };
    }
    
    return { success: false, error: 'Failed to sign in. Please try again.' };
  }
}

// Sign out
export async function signOutUser(): Promise<void> {
  if (!auth) {
    if (!initFirebase()) return;
    if (!auth) return;
  }
  await signOut(auth);
}

// Get current user
export function getCurrentUser(): User | null {
  if (!auth) {
    if (!initFirebase()) return null;
    if (!auth) return null;
  }
  return auth.currentUser;
}

// Listen to auth state changes
export function onAuthChange(callback: (user: User | null) => void): (() => void) | null {
  if (!isFirebaseConfigured()) {
    return null;
  }

  if (!auth) {
    if (!initFirebase()) return null;
    if (!auth) return null;
  }

  return onAuthStateChanged(auth, callback);
}


// Save all progress to cloud
export async function syncProgressToCloud(): Promise<boolean> {
  if (!isFirebaseConfigured()) {
    return false;
  }

  try {
    if (!db) {
      if (!initFirebase()) return false;
      if (!db) return false;
    }

    const userId = getCurrentUserId();
    if (!userId) {
      return false;
    }

    const progress = getAllProgress();
    await setDoc(doc(db, 'users', userId), {
      progress,
      lastSynced: new Date().toISOString(),
    }, { merge: true });

    return true;
  } catch (error: any) {
    if (error?.code === 'permission-denied' || error?.code === 'missing-or-insufficient-permissions') {
      console.warn('⚠️  Firestore permissions error. Please set up security rules in Firebase Console.');
      console.warn('Go to: Firestore Database → Rules');
      console.warn('Add this rule:');
      console.warn('  match /users/{userId} {');
      console.warn('    allow read, write: if request.auth != null && request.auth.uid == userId;');
      console.warn('  }');
    } else {
      console.error('Error syncing to cloud:', error);
    }
    return false;
  }
}

// Load progress from cloud
export async function loadProgressFromCloud(): Promise<boolean> {
  if (!isFirebaseConfigured()) {
    return false;
  }

  try {
    if (!db) {
      if (!initFirebase()) return false;
      if (!db) return false;
    }

    const userId = getCurrentUserId();
    if (!userId) {
      return false;
    }

    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data.progress) {
        // Merge cloud progress with local (cloud takes precedence)
        Object.entries(data.progress as Record<string, Progress>).forEach(([key, value]) => {
          const localProgress = localStorage.getItem(key);
          if (!localProgress) {
            // Only add if not exists locally
            localStorage.setItem(key, JSON.stringify(value));
          } else {
            // Merge: keep watched status from either, use latest position
            try {
              const local = JSON.parse(localProgress) as Progress;
              const merged: Progress = {
                watched: local.watched || value.watched,
                lastPosition: Math.max(local.lastPosition || 0, value.lastPosition || 0),
                duration: value.duration || local.duration,
              };
              localStorage.setItem(key, JSON.stringify(merged));
            } catch {
              localStorage.setItem(key, JSON.stringify(value));
            }
          }
        });
        return true;
      }
    }

    return false;
  } catch (error: any) {
    if (error?.code === 'permission-denied' || error?.code === 'missing-or-insufficient-permissions') {
      console.warn('⚠️  Firestore permissions error. Please set up security rules in Firebase Console.');
      console.warn('Go to: Firestore Database → Rules');
      console.warn('Add this rule:');
      console.warn('  match /users/{userId} {');
      console.warn('    allow read, write: if request.auth != null && request.auth.uid == userId;');
      console.warn('  }');
    } else {
      console.error('Error loading from cloud:', error);
    }
    return false;
  }
}

// Listen for real-time updates
export function subscribeToProgressUpdates(callback: () => void): (() => void) | null {
  if (!isFirebaseConfigured()) {
    return null;
  }

  try {
    if (!db) {
      if (!initFirebase()) return null;
      if (!db) return null;
    }

    const userId = getCurrentUserId();
    if (!userId) {
      return null;
    }

    const docRef = doc(db, 'users', userId);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.progress) {
          Object.entries(data.progress as Record<string, Progress>).forEach(([key, value]) => {
            localStorage.setItem(key, JSON.stringify(value));
          });
          callback();
        }
      }
    });

    return unsubscribe;
  } catch (error) {
    console.error('Error subscribing to updates:', error);
    return null;
  }
}

// Export progress as JSON (backup)
export function exportProgress(): string {
  const progress = getAllProgress();
  return JSON.stringify(progress, null, 2);
}

// Import progress from JSON (backup)
export function importProgress(json: string): boolean {
  try {
    const progress = JSON.parse(json);
    Object.entries(progress).forEach(([key, value]) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
    return true;
  } catch (error) {
    console.error('Error importing progress:', error);
    return false;
  }
}
