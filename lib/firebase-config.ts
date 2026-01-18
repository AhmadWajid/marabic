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

  // Debug: Log raw env vars in development (first call only)
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    const isFirstCall = !(window as any).__firebaseConfigLogged;
    if (isFirstCall) {
      (window as any).__firebaseConfigLogged = true;
      console.log('🔍 Firebase Environment Variables Check:');
      console.log('NEXT_PUBLIC_FIREBASE_API_KEY:', apiKey ? `✅ Set (${apiKey.length} chars)` : '❌ undefined');
      console.log('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:', authDomain ? `✅ Set (${authDomain})` : '❌ undefined');
      console.log('NEXT_PUBLIC_FIREBASE_PROJECT_ID:', projectId ? `✅ Set (${projectId})` : '❌ undefined');
      console.log('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:', storageBucket ? `✅ Set (${storageBucket})` : '❌ undefined');
      console.log('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:', messagingSenderId ? `✅ Set (${messagingSenderId})` : '❌ undefined');
      console.log('NEXT_PUBLIC_FIREBASE_APP_ID:', appId ? `✅ Set (${appId.length} chars)` : '❌ undefined');
      
      if (!apiKey || !authDomain || !projectId || !storageBucket || !messagingSenderId || !appId) {
        console.error('');
        console.error('⚠️  Environment variables are undefined!');
        console.error('This means Next.js did not embed them in the client bundle.');
        console.error('');
        console.error('SOLUTION:');
        console.error('1. Stop your dev server (Ctrl+C)');
        console.error('2. Run: npm run dev');
        console.error('3. Hard refresh browser (Cmd+Shift+R)');
      }
    }
  }

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

  // Debug logging (always log in development to help diagnose)
  if (typeof window !== 'undefined') {
    const missing = [];
    if (!config.apiKey) missing.push('NEXT_PUBLIC_FIREBASE_API_KEY');
    if (!config.authDomain) missing.push('NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN');
    if (!config.projectId) missing.push('NEXT_PUBLIC_FIREBASE_PROJECT_ID');
    if (!config.storageBucket) missing.push('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET');
    if (!config.messagingSenderId) missing.push('NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID');
    if (!config.appId) missing.push('NEXT_PUBLIC_FIREBASE_APP_ID');
    
    if (!hasAllValues) {
      console.error('❌ Firebase configuration incomplete!');
      console.error('Missing variables:', missing.join(', '));
      console.error('Current values:', {
        apiKey: config.apiKey ? `✅ ${config.apiKey.substring(0, 15)}...` : '❌ MISSING',
        authDomain: config.authDomain ? `✅ ${config.authDomain}` : '❌ MISSING',
        projectId: config.projectId ? `✅ ${config.projectId}` : '❌ MISSING',
        storageBucket: config.storageBucket ? `✅ ${config.storageBucket}` : '❌ MISSING',
        messagingSenderId: config.messagingSenderId ? `✅ ${config.messagingSenderId}` : '❌ MISSING',
        appId: config.appId ? `✅ ${config.appId.substring(0, 15)}...` : '❌ MISSING',
      });
      console.error('');
      console.error('🔧 To fix this:');
      console.error('1. Make sure .env.local exists in your project root');
      console.error('2. Verify all NEXT_PUBLIC_FIREBASE_* variables are set in .env.local');
      console.error('3. ⚠️  IMPORTANT: Stop your dev server (Ctrl+C) and restart it: npm run dev');
      console.error('4. Hard refresh your browser (Cmd+Shift+R or Ctrl+Shift+R)');
      console.error('');
      console.error('Note: Next.js embeds environment variables at build time.');
      console.error('If you created/updated .env.local while the server was running,');
      console.error('you MUST restart the server for the changes to take effect.');
    } else if (process.env.NODE_ENV === 'development') {
      console.log('✅ Firebase configuration loaded successfully');
    }
  }

  return hasAllValues;
};
