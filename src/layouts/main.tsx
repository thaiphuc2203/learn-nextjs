// for home maketing

import { LayoutProps } from '../models/index';
import Link from 'next/link';
import * as React from 'react';

export function MainLayout({ children }: LayoutProps) {
  return (
    <div className='font-sans bg-gray-100'>
      {/* Navbar */}
      <nav className='bg-blue-500 p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          {/* Logo or website name */}
          <Link href='/' className='text-dark text-lg font-semibold'>
            Next JS Journey
          </Link>

          {/* Navigation links */}
          <div className='space-x-4'>
            <Link href='/' className='text-white hover:text-gray-300 p-3'>
              Home
            </Link>
            <Link href='/about' className='text-white hover:text-gray-300'>
              About
            </Link>
            <Link href='/posts' className='text-white hover:text-gray-300'>
              Post
            </Link>
            {/* Add more links as needed */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className='container mx-auto mt-8 h-[80vh]'>{children}</div>

      {/* Footer */}
      <footer className='bg-gray-200 py-4 mt-8'>
        <div className='container mx-auto text-center'>
          <p className='text-gray-600'>&copy; 2023 Your Website Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
