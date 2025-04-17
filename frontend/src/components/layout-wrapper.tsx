'use client';

import { usePathname } from 'next/navigation';
import NavSection from '@/components/navigation';
import FooterSection from '@/components/footer';
import paths from '@/config/constants/paths';
import { useAppSelector } from '@/redux/hooks';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith(paths.adminDashboard);
  const globalLoading = useAppSelector((state) => state.loading);

  return (
    <div className="min-w-[240px] max-w-[1280px] mx-auto">
      {globalLoading.activeRequests > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-[1px] z-[9999] pointer-events-auto"></div>
      )}
      {isAdmin ? <></> : <NavSection />}
      {children}
      {isAdmin ? <></> : <FooterSection />}
    </div>
  );
}
