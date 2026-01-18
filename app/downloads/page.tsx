'use client';

import Link from 'next/link';

export default function DownloadsPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Downloads</h1>
            <Link
              href="/"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Videos
            </Link>
          </div>
          <p className="text-gray-600">
            All video downloads are now available as{' '}
            <span className="text-blue-600 font-semibold">torrents</span>. Choose the video format you want from below,
            and you will then have the option of either downloading it directly (as before) or downloading a torrent
            file for each DVD.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Madina Books */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Madina Books</h2>

            <div className="space-y-6">
              {/* Video Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Video</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/downloads/video/avi"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                    >
                      Br. Asif&apos;s DVD sets (AVI)
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">AVI is a video format for Windows (and Mac)</p>
                  </li>
                  <li>
                    <Link
                      href="/downloads/video/hi-res"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                    >
                      Br. Asif&apos;s DVD sets (MPEG4 Hi-Res)
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">Large MP4 files for the iMac/iPhone/iPad/iWhatever</p>
                  </li>
                  <li>
                    <Link
                      href="/downloads/video/low-res"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                    >
                      Br. Asif&apos;s DVD sets (MPEG4 Low-Res)
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">Smaller MP4 files, best suited for iPhones</p>
                  </li>
                </ul>
              </div>

              {/* Audio Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Audio</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/downloads/audio/dvd"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                    >
                      Br. Asif&apos;s DVD sets
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">Our DVD sets in mp3 format only</p>
                  </li>
                  <li>
                    <Link
                      href="/downloads/audio/books"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                    >
                      Madina Books (Arabic, English and Urdu)
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">
                      The Madina Books narrated in Arabic, English and Urdu
                    </p>
                  </li>
                </ul>
              </div>

              {/* Books Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Books</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/downloads/books/arabic-text"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Madina Books - Arabic Text with English Key &amp; Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/downloads/books/german-key" className="text-blue-600 hover:text-blue-700 hover:underline">
                      Madina Books - Key (German)
                    </Link>
                  </li>
                  <li>
                    <Link href="/downloads/books/urdu-key" className="text-blue-600 hover:text-blue-700 hover:underline">
                      Madina Books - Key (Urdu)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/downloads/books/solutions"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Madina Books - Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/downloads/books/glossary"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Madina Books - Glossary
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/downloads/books/grammar"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Madina Books - Grammar Notes
                    </Link>
                  </li>
                  <li>
                    <Link href="/downloads/books/handouts" className="text-blue-600 hover:text-blue-700 hover:underline">
                      Madina Books - Handouts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/downloads/books/verb-conjugation"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Blank Verb Conjugation Sheet
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/downloads/books/sharh-madeenah"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Sharh Madeenah
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/downloads/books/expressions"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Madina Side Books - Expressions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/downloads/books/reading"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Madina Side Books - Reading
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Other Downloads */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Other Downloads</h2>

            <div className="space-y-6">
              {/* Video Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Video</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/downloads/conversation/avi"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                    >
                      Conversation DVDs (AVI)
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">AVI is a video format for Windows (and Mac)</p>
                  </li>
                  <li>
                    <Link
                      href="/downloads/conversation/hi-res"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                    >
                      Conversation DVDs (MPEG4 Hi-Res)
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">Large MP4 files for the iMac/iPhone/iPad/iWhatever</p>
                  </li>
                  <li>
                    <Link
                      href="/downloads/conversation/low-res"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                    >
                      Conversation DVDs (MPEG4 Low-Res)
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">Smaller MP4 files, best suited for iPhones</p>
                  </li>
                </ul>
              </div>

              {/* Books Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Books</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/downloads/conversation/book"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Conversation Drills
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">A PDF to accompany the Conversation DVDs</p>
                  </li>
                  <li>
                    <Link
                      href="/downloads/conversation/talking-arabic"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Talking Arabic Books
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">PDFs with audio to help learn arabic conversation</p>
                  </li>
                  <li>
                    <Link
                      href="/downloads/conversation/tibyan"
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      At-Tibyan
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">The Easy way to Qur&apos;anic Reading (PDF with audio)</p>
                  </li>
                </ul>
              </div>

              {/* Advanced Courses */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Courses</h3>

                <div className="space-y-4">
                  {/* Video Section */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Video</h4>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/downloads/advanced/sfgq/avi"
                          className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                        >
                          Selections from the Glorious Qur&apos;an (AVI)
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">AVI is a video format for Windows (and Mac)</p>
                      </li>
                      <li>
                        <Link
                          href="/downloads/advanced/sfgq/hi-res"
                          className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                        >
                          Selections from the Glorious Qur&apos;an (MPEG4 Hi-Res)
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">Large MP4 files for the iMac/iPhone/iPad/iWhatever</p>
                      </li>
                      <li>
                        <Link
                          href="/downloads/advanced/sfgq/low-res"
                          className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                        >
                          Selections from the Glorious Qur&apos;an (MPEG4 Low-Res)
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">Smaller MP4 files, best suited for iPhones</p>
                      </li>
                      <li>
                        <Link
                          href="/downloads/advanced/hujurat/avi"
                          className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                        >
                          Surat al-Hujurat (AVI)
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">AVI is a video format for Windows (and Mac)</p>
                      </li>
                      <li>
                        <Link
                          href="/downloads/advanced/hujurat/hi-res"
                          className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                        >
                          Surat al-Hujurat (MPEG4 Hi-Res)
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">Large MP4 files for the iMac/iPhone/iPad/iWhatever</p>
                      </li>
                      <li>
                        <Link
                          href="/downloads/advanced/hujurat/low-res"
                          className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                        >
                          Surat al-Hujurat (MPEG4 Low-Res)
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">Smaller MP4 files, best suited for iPhones</p>
                      </li>
                      <li>
                        <Link
                          href="/downloads/advanced/nur-un-ala-nur/avi"
                          className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                        >
                          Nur-un ala Nur (AVI)
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">AVI is a video format for Windows (and Mac)</p>
                      </li>
                      <li>
                        <Link
                          href="/downloads/advanced/nur-un-ala-nur/hi-res"
                          className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                        >
                          Nur-un ala Nur (MPEG4 Hi-Res)
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">Large MP4 files for the iMac/iPhone/iPad/iWhatever</p>
                      </li>
                      <li>
                        <Link
                          href="/downloads/advanced/nur-un-ala-nur/low-res"
                          className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                        >
                          Nur-un ala Nur (MPEG4 Low-Res)
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">Smaller MP4 files, best suited for iPhones</p>
                      </li>
                    </ul>
                  </div>

                  {/* Books Section */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Books</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/downloads/advanced/sfgq/book"
                          className="text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          Selections from the Glorious Qur&apos;an
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">A PDF with grammatical notes</p>
                      </li>
                      <li>
                        <Link
                          href="/downloads/advanced/hujurat/book"
                          className="text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          Surat al-Hujurat
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">A PDF to accompany the Surat al-Hujurat Videos</p>
                      </li>
                      <li>
                        <Link
                          href="/downloads/advanced/nur-un-ala-nur/book"
                          className="text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          Nur-un ala Nur
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">A PDF to accompany the Nur-un ala Nur Videos</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
