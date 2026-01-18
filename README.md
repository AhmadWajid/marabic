# Madina Arabic Course

A modern web application for learning Arabic with Dr. Abdur Rahim's comprehensive Madina Arabic course. Track your progress, watch video lessons, and sync your learning across devices.

## Features

- 📹 **Video Lessons** - Access comprehensive Arabic language video lessons organized by books and DVDs
- 📊 **Progress Tracking** - Automatically track your learning progress with watch history and completion status
- ☁️ **Cloud Sync** - Sign in with your email to sync progress across all your devices
- 📚 **Course Books** - Access PDF versions of course materials and supplementary resources
- 💾 **Video Downloads** - Download videos in multiple formats for offline viewing
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- **Framework**: Next.js 16.1.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Video Player**: React Player
- **Authentication & Sync**: Firebase
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AhmadWajid/marabic.git
cd arabie
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

For cloud sync functionality, you'll need to set up Firebase. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Project Structure

```
arabie/
├── app/
│   ├── books/          # Books and PDF resources page
│   ├── downloads/      # Video downloads page
│   ├── welcome/        # Welcome/onboarding page
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main course page
├── components/
│   ├── AuthButton.tsx      # Authentication button
│   ├── AuthModal.tsx       # Authentication modal
│   ├── CourseMap.tsx       # Course map visualization
│   ├── CourseNavigation.tsx  # Course navigation sidebar
│   ├── Navigation.tsx       # Top navigation bar
│   ├── SidebarContext.tsx    # Sidebar state management
│   ├── SyncStatus.tsx        # Cloud sync status indicator
│   ├── VideoPlayer.tsx       # Video player component
│   └── VideoTable.tsx        # Video table component
├── lib/
│   ├── cloud-sync.ts    # Firebase cloud sync logic
│   ├── data.ts          # Course data (books, DVDs, videos)
│   ├── firebase-config.ts  # Firebase configuration
│   ├── progress-store.ts   # Progress state management
│   └── progress.ts         # Progress tracking utilities
└── public/             # Static assets
```

## Usage

### For New Users

1. Visit the site and you'll be redirected to the welcome page
2. Read about the course features
3. Click "Start Learning" to begin
4. Select a book, DVD, and video part to start watching

### Progress Tracking

- Your progress is automatically saved locally in your browser
- Sign in with your email to sync progress across devices
- Watch status and video position are tracked automatically

### Course Navigation

- Use the sidebar to navigate between books and DVDs
- Green checkmarks indicate completed videos
- Progress bars show completion percentage for books and DVDs

## Deployment

The application is deployed on Netlify and automatically builds from the `main` branch.

### Build

```bash
npm run build
```

### Production URL

Live site: [https://marabic.netlify.app](https://marabic.netlify.app)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is for educational purposes. Course materials are provided for personal use only.

## Acknowledgments

- Course materials by Dr. Abdur Rahim
- Video content hosted on Archive.org
- Original course website: [LQ Toronto](http://www.lqtoronto.com)
