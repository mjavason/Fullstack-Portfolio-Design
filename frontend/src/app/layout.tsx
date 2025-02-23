import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import './globals.css';
import NavSection from '@/components/navigation';
import FooterSection from '@/components/footer';

const heebo = Heebo({
  variable: '--font-heebo',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
        />
      </head>
      <body className={`${heebo.className}`}>
        <NavSection></NavSection>
        {children}
        <FooterSection></FooterSection>
      </body>
    </html>
  );
}
