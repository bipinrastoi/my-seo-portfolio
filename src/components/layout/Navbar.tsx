'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/articles', label: 'Blog / Articles' }, // Changed from '/blog' to '/articles'
  { href: '/projects', label: 'Projects' },        // Changed from '/case-studies' to '/projects'
  { href: '/contact', label: 'Contact' },
];
export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-[#F9FAFB]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        
        {/* CUSTOM LOGO */}
        <Link href="/" className="flex items-center gap-2 transition-transform active:scale-95">
          <Image 
            src="/my-logo.png" 
            alt="Bipin Raskoti Logo" 
            width={36} 
            height={36} 
            className="h-9 w-auto object-contain"
            priority 
          />
          <span className="text-xl font-extrabold tracking-tight text-gray-900">
           <span className="text-indigo-600"></span>
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-full',
                  isActive
                    ? 'text-indigo-600 bg-indigo-50/80 shadow-xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex md:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-95"
          >
            Contact Me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE NAV DRAWER */}
      {mobileMenuOpen && (
        <div className="border-b border-gray-200 bg-white px-4 pt-2 pb-6 md:hidden shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors',
                  pathname === link.href ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center rounded-lg bg-indigo-600 py-3 text-sm font-bold text-white shadow-md"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}