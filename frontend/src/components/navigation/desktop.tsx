'use client'; // Ensure this runs only on the client side

import { usePathname } from 'next/navigation';
import paths from '@/config/constants/paths';
import Link from 'next/link';

function DesktopList() {
  const pathname = usePathname(); // Get the current route

  return (
    <ul className="hidden md:flex gap-10 font-bold">
      {[
        { name: 'Home', path: paths.home },
        { name: 'Works', path: paths.work },
        { name: 'Blog', path: paths.blog },
        { name: 'Admin', path: paths.adminDashboard },
      ].map((item) => (
        <li key={item.path} className="transition-colors duration-300 cursor-pointer">
          <Link
            href={item.path}
            className={`text-2xl ${
              pathname === item.path
                ? 'text-accent-primary font-semibold'
                : 'hover:text-accent-primary font-semibold'
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DesktopList;
