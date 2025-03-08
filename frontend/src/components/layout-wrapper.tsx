'use client';

import { usePathname } from 'next/navigation';
import NavSection from '@/components/navigation';
import FooterSection from '@/components/footer';
import AdminNavBar from '@/components/admin/navigation';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <>
      {isAdmin ? <AdminNavBar /> : <NavSection />}
      {children}
      {isAdmin ? <></> : <FooterSection />}
    </>
  );
}
