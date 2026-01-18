// Firebase configuration
// To enable cloud sync, create a Firebase project and add your config here
// Or set these as environment variables

// Get config dynamically to ensure we're reading the latest env vars
export function getFirebaseConfig() {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
  const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
  const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
  const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;


  return {
    apiKey: apiKey || '',
    authDomain: authDomain || '',
    projectId: projectId || '',
    storageBucket: storageBucket || '',
    messagingSenderId: messagingSenderId || '',
    appId: appId || '',
    ...(measurementId && { measurementId }),
  };
}

// Export for backward compatibility, but prefer using getFirebaseConfig()
export const firebaseConfig = getFirebaseConfig();

export const isFirebaseConfigured = () => {
  // Re-read config to get latest env vars
  const config = getFirebaseConfig();
  
  // Check that all required Firebase configuration values are present
  const hasAllValues = !!(
    config.apiKey &&
    config.authDomain &&
    config.projectId &&
    config.storageBucket &&
    config.messagingSenderId &&
    config.appId
  );


  return hasAllValues;
};
