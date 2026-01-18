# Cloud Sync Setup Guide

To enable progress syncing across devices (phone, tablet, desktop), you need to set up Firebase with Email/Password authentication.

## Quick Setup (5 minutes)

1. **Create a Firebase Project**
   - Go to https://console.firebase.google.com/
   - Click "Add project"
   - Enter project name (e.g., "arabie-learning")
   - Disable Google Analytics (optional)
   - Click "Create project"

2. **Enable Email/Password Authentication**
   - Go to "Build" → "Authentication"
   - Click "Get started"
   - Click on "Email/Password"
   - Enable "Email/Password" (first toggle)
   - Click "Save"

3. **Enable Firestore Database**
   - In Firebase Console, go to "Build" → "Firestore Database"
   - Click "Create database"
   - Start in "Test mode" (for development)
   - Choose a location (closest to you)
   - Click "Enable"

4. **Set Firestore Security Rules** (Important!)
   - Go to Firestore Database → Rules
   - Replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

   - Click "Publish"

5. **Get Your Firebase Config**
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps"
   - Click the web icon `</>`
   - Register app with a nickname (e.g., "Arabie Web")
   - Copy the config values

6. **Add Config to Your Project**
   - Create a file `.env.local` in the project root
   - Add your Firebase config:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

7. **Restart Your Dev Server**
   ```bash
   npm run dev
   ```

## How It Works

- **Email/Password Login**: Sign in with the same email on all devices
- **Automatic Sync**: Progress syncs automatically every 5 seconds and when videos complete
- **Manual Sync**: Click "Sync to Cloud" button at the bottom
- **Cross-Device**: Just sign in with the same email on phone/tablet - progress syncs automatically!

## Using on Multiple Devices

1. On your computer: Click "Sign In" → Create account or sign in
2. On your phone/tablet: Click "Sign In" → Use the same email/password
3. Done! Both devices automatically share the same progress

## Without Firebase (Local Only)

If you don't set up Firebase, the app still works perfectly - progress is saved locally on each device. You can use Export/Import to manually transfer progress between devices.

## Troubleshooting

- **"Firebase not configured"**: Check your `.env.local` file exists and has all values
- **Sync fails**: Check Firestore rules allow authenticated users to read/write their own data
- **Progress not syncing**: Make sure you're signed in with the same email on all devices
- **Can't sign in**: Make sure Email/Password authentication is enabled in Firebase Console
