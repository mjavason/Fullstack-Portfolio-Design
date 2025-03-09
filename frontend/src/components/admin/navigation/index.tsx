'use client'; // Ensure this runs only on the client side

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter
import paths from '@/config/constants/paths';
import Link from 'next/link';

function AdminNavBar() {
  const pathname = usePathname(); // Works in client-side components
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    if (pathname) setActivePath(pathname);
  }, [pathname]);

  return (
    <nav className="bg-white text-primary flex justify-between items-center shadow-md px-10">
      <div className="flex items-center justify-between">
        <ul className="flex gap-10">
          {[
            { name: 'Overview', path: paths.adminDashboard },
            { name: 'Posts', path: paths.adminPosts },
            { name: 'Projects', path: paths.adminWorks },
          ].map((item) => (
            <Link key={item.path} href={item.path}>
              <li
                className={`py-5 cursor-pointer border-b-8 transition-all duration-300 ${
                  activePath === item.path
                    ? 'text-accent-primary border-accent-primary font-semibold'
                    : 'border-transparent hover:text-accent-primary hover:border-accent-primary'
                }`}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex gap-5 items-center">
        {[
          { icon: 'fas fa-search', color: 'text-primary' },
          { icon: 'far fa-comments', color: 'text-primary' },
          { icon: 'far fa-bell', color: 'text-primary' },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <i
              className={`${item.icon} cursor-pointer ${item.color} hover:text-accent-primary transition-colors`}
            />
            {index < 2 && <span className="text-gray-400">|</span>}
          </div>
        ))}
        <span className="text-gray-400">|</span>
        <div className="flex items-center gap-3 cursor-pointer hover:text-accent-primary transition-colors">
          <i className="far fa-user-circle text-xl"></i>
          <p className="flex items-center gap-1">
            Vallendito <i className="fas fa-chevron-down"></i>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavBar;
