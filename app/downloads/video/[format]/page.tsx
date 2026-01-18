'use client';

import { use } from 'react';
import { books } from '@/lib/data';
import VideoTable from '@/components/VideoTable';
import Link from 'next/link';

export default function VideoDownloadsPage({ params }: { params: Promise<{ format: string }> }) {
  const { format } = use(params);
  
  const formatMap: Record<string, 'avi' | 'hi-res' | 'low-res'> = {
    avi: 'avi',
    'hi-res': 'hi-res',
    'low-res': 'low-res',
  };

  const currentFormat = formatMap[format] || 'hi-res';
  const formatLabel = format === 'avi' ? 'AVI' : format === 'hi-res' ? 'MPEG4 Hi-Res' : 'MPEG4 Low-Res';

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
        <div className="mb-6">
          <Link href="/downloads" className="text-blue-600 hover:text-blue-700 text-sm mb-4 inline-block">
            ← Back to Downloads
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Madina Books - Video Downloads ({formatLabel})
          </h1>
          <p className="text-gray-600">
            These are {format === 'avi' ? 'AVI' : 'mp4 (mpeg4)'} files.
            {format === 'hi-res' && ' They are smaller than our AVI files, and will work on both Windows and Mac operating systems.'}
            {format === 'low-res' && ' These are smaller MP4 files, best suited for iPhones and smartphones.'}
          </p>
          <p className="text-gray-600 mt-2">
            <strong>NOTE:</strong> To properly download the file, right-click on the link and choose &quot;Save Target As&quot; or &quot;Save Link As&quot; and choose a folder on your hard drive to save it to.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <VideoTable books={books} format={currentFormat} />
        </div>
      </div>
    </div>
  );
}
