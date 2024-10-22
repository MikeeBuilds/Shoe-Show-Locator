"use client"

import Link from 'next/link';
import { ModeToggle } from "@/components/ui/mode-toggle";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Sneaker & Vintage Locator</h1>
      <div className="flex items-center space-x-4">
        <Link href="/" className="px-4">Home</Link>
        <Link href="/about" className="px-4">About</Link>
        <Link href="/contact" className="px-4">Contact</Link>
        <ModeToggle />
      </div>
    </nav>
  );
}