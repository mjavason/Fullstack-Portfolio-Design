import LayoutWrapper from '@/components/admin/layout-wrapper';

export default function AdminRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
