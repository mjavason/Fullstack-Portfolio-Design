'use client';

import { usePathname } from 'next/navigation';
import NavSection from '@/components/navigation';
import FooterSection from '@/components/footer';
import paths from '@/config/constants/paths';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith(paths.adminDashboard);

  return (
    <div className="min-w-[240px] max-w-[1280px] mx-auto">
      {isAdmin ? <></> : <NavSection />}
      {children}
      {isAdmin ? <></> : <FooterSection />}
    </div>
  );
}
