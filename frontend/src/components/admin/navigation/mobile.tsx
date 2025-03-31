'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import paths from '@/config/constants/paths';
import Link from 'next/link';

interface MobileAdminNavbarProps {
  logout: () => void;
}

function MobileList({ logout }: MobileAdminNavbarProps) {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(pathname);
    setMenuOpen(false);
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
        className={`fixed top-0 left-0 h-screen w-screen bg-transparent shadow-lg transition-transform duration-300 ease-in-out flex font-bold sm:hidden z-50 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="h-full w-1/3 bg-gray-600 shadow-lg flex flex-col justify-center items-start p-5 space-y-4">
          {[
            { name: 'Overview', path: paths.adminDashboard },
            { name: 'Posts', path: paths.adminPosts },
            { name: 'Projects', path: paths.adminWorks },
            { name: 'Logout', action: logout },
          ].map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 rounded transition-colors duration-300 cursor-pointer"
            >
              {item.path ? (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-white ${
                    currentPath === item.path
                      ? 'text-accent-primary font-semibold'
                      : 'hover:text-accent-primary'
                  }`}
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={item.action}
                  className="w-full text-lg text-accent-primary"
                >
                  {item.name}
                </button>
              )}
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
