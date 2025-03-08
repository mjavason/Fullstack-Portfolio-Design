'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import paths from '@/config/constants/paths';
import Link from 'next/link';

function MobileList() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <>
      <input type="checkbox" id="nav-toggle" className="hidden peer" />
      <div className="fixed top-0 left-0 h-screen w-screen bg-transparent shadow-lg transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out flex font-bold sm:hidden z-50">
        <ul className="h-full w-1/3 bg-gray-600 shadow-lg flex flex-col justify-center items-start p-5 space-y-4">
          {[
            { name: 'Home', path: paths.home },
            { name: 'Work', path: paths.work },
            { name: 'Blog', path: paths.blog },
          ].map((item) => (
            <li
              key={item.path}
              className="px-4 py-2 rounded transition-colors duration-300 cursor-pointer"
            >
              <Link
                href={item.path}
                className={`text-white ${
                  currentPath === item.path
                    ? 'text-button-primary font-semibold'
                    : 'hover:text-button-primary'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Clicking outside the menu closes it */}
        <label htmlFor="nav-toggle" className="flex-1 h-full bg-transparent"></label>
      </div>
    </>
  );
}

export default MobileList;
