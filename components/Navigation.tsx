'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AuthButton from './AuthButton';
import { useSidebar } from './SidebarContext';

export default function Navigation() {
  const pathname = usePathname();
  const { setSidebarOpen } = useSidebar();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden -ml-2 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-semibold text-gray-900">Madina Arabic</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/') && pathname !== '/downloads' && pathname !== '/books'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Videos
              </Link>
              <Link
                href="/books"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/books')
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Books
              </Link>
              <Link
                href="/downloads"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/downloads')
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Downloads
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <AuthButton />
            <a
              href="http://www.lqtoronto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-sm text-gray-500 hover:text-gray-700"
            >
              LQ Toronto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
