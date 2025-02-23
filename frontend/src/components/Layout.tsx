// components/Layout.js
import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className="bg-white 
  
"
    >
      {children}
    </div>
  );
}
