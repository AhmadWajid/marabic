# Environment Variables Setup

## Quick Steps

1. **Get Your Firebase Config**
   - Go to https://console.firebase.google.com/
   - Select your project (or create one)
   - Click the gear icon ⚙️ → Project Settings
   - Scroll down to "Your apps" section
   - If you don't have a web app, click the `</>` icon to add one
   - Copy the config values (they look like this):

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

2. **Create `.env.local` File**
   - In your project root (same folder as `package.json`)
   - Create a new file named `.env.local`
   - Copy the template below and fill in your values

3. **Add Your Values**
   - Replace each placeholder with the actual value from Firebase
   - Don't use quotes around the values
   - Don't add commas or semicolons

## Example `.env.local` File

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC1234567890abcdefghijklmnopqrstuvwxyz
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=my-arabie-app.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=my-arabie-app
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=my-arabie-app.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890
```

## Important Notes

- ✅ File must be named exactly `.env.local` (with the dot at the start)
- ✅ No spaces around the `=` sign
- ✅ No quotes needed around values
- ✅ Restart your dev server after creating/updating the file
- ❌ Don't commit `.env.local` to git (it's already in `.gitignore`)

## Verify It's Working

After setting up:
1. Restart your dev server: `npm run dev`
2. Open the app in browser
3. Click "Sign In" button
4. If you see the login form, Firebase is configured correctly!
5. If you see errors in console, check your values match Firebase exactly

## Troubleshooting

**"Firebase not configured" warning:**
- Check `.env.local` file exists in project root
- Check all 6 variables are present
- Check no typos in variable names (they must start with `NEXT_PUBLIC_`)
- Restart dev server after changes

**Can't sign in:**
- Make sure Email/Password auth is enabled in Firebase Console
- Check Firestore rules allow authenticated users
- Check browser console for specific error messages
