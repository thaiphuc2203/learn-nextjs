// for home maketing

import { LayoutProps } from '../models/index';
import Link from 'next/link';
import * as React from 'react';

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Admin Layout</h1>
      <Link href='/'>Home</Link>
      <Link href='/about'>about</Link>
      <div>{children}</div>
    </div>
  );
}
