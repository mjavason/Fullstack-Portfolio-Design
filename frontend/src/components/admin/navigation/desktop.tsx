'use client';

import { usePathname } from 'next/navigation';
import paths from '@/config/constants/paths';
import Link from 'next/link';

interface AdminNavbarProps {
  logout: () => void;
}

function AdminNavbar({ logout }: AdminNavbarProps) {
  const pathname = usePathname();

  return (
    <ul className="hidden sm:flex gap-10 font-bold">
      {[
        { name: 'Overview', path: paths.adminDashboard },
        { name: 'Posts', path: paths.adminPosts },
        { name: 'Projects', path: paths.adminWorks },
        { name: 'Logout', action: logout },
      ].map((item, index) => (
        <li key={index} className="transition-colors duration-300 cursor-pointer">
          {item.path ? (
            <Link
              key={item.path}
              href={item.path}
              className={`text-2xl ${
                pathname === item.path
                  ? 'text-accent-primary font-semibold'
                  : 'hover:text-accent-primary'
              }`}
            >
              {item.name}
            </Link>
          ) : (
            <button key={index} onClick={item.action} className="text-2xl">
              {item.name}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default AdminNavbar;
