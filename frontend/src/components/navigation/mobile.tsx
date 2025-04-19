'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import paths from '@/config/constants/paths';
import Link from 'next/link';

function MobileList() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false); // Close menu after navigation
  }, [pathname]);

  return (
    <>
      {/* Toggle Button */}
      <input
        type="checkbox"
        id="nav-toggle"
        className="hidden peer"
        checked={menuOpen}
        onChange={() => setMenuOpen((prev) => !prev)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-transparent shadow-lg transition-transform duration-300 ease-in-out flex font-bold md:hidden z-50 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="h-full w-1/3 bg-gray-600 shadow-lg flex flex-col justify-center items-start p-5 space-y-4">
          {[
            { name: 'Home', path: paths.home },
            { name: 'Work', path: paths.work },
            { name: 'Blog', path: paths.blog },
            { name: 'Admin', path: paths.adminDashboard },
          ].map((item) => (
            <li
              key={item.path}
              className="px-4 py-2 rounded transition-colors duration-300 cursor-pointer"
            >
              <Link
                href={item.path}
                className={
                  isActive(item.path)
                    ? 'text-accent-primary font-semibold'
                    : 'text-white hover:text-accent-primary font-semibold'
                }
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Clicking outside the menu closes it */}
        <div className="flex-1 h-full bg-transparent" onClick={() => setMenuOpen(false)}></div>
      </div>
    </>
  );
}

export default MobileList;
