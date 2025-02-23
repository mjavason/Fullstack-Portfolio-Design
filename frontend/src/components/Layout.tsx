// components/Layout.js
import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className='font-[Heebo] bg-white'>{children}</div>;
}
