'use client';

import { usePathname } from 'next/navigation';
import NavSection from '@/components/navigation';
import FooterSection from '@/components/footer';
import paths from '@/config/constants/paths';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith(paths.adminDashboard);

  return (
    <>
      {isAdmin ? <></> : <NavSection />}
      {children}
      {isAdmin ? <></> : <FooterSection />}
    </>
  );
}
