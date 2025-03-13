'use client';

import AdminNavBar from './navigation';
import AdminFooterSection from './footer';
import { usePathname } from 'next/navigation';
import paths from '@/config/constants/paths';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuth = pathname.includes(paths.adminLogin);

  return (
    <>
      {isAuth ? <></> : <AdminNavBar />}
      {children}
      {isAuth ? <></> : <AdminFooterSection />}
    </>
  );
}
