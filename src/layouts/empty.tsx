// for home maketing

import { LayoutProps } from '../models/index';
import Link from 'next/link';
import * as React from 'react';

export interface IAppProps {}

export function EmptyLayout({ children }: LayoutProps) {
  return <div>{children}</div>;
}
