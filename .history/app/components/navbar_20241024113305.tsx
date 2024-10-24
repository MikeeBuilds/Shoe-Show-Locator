"use client"

import { ModeToggle } from '@/components/mode-toggle';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30 border-black border-gray-200 bg-white dark:bg-gray-800 dark:bg-opacity-30 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Sneaker & Vintage Locator</h1>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
            <Link href="/about" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">About</Link>
            <Link href="/contact" className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Contact</Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}