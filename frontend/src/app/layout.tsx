import LayoutWrapper from '@/components/layout-wrapper';
import { Heebo } from 'next/font/google';
import { StoreProvider } from '@/redux';
import { ToastContainer } from 'react-toastify';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { getBaseMetadata } from '@/config/constants/metadata';

const heebo = Heebo({
  variable: '--font-heebo',
  subsets: ['latin'],
});

export const metadata = getBaseMetadata();

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={`${heebo.className}`}>
        <ToastContainer position="top-right" theme="light" />
        <StoreProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
