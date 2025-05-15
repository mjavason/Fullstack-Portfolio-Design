import { APP_DESCRIPTION, APP_NAME, APP_PREVIEW_IMAGE, FRONTEND_URL } from './index';
import { Metadata } from 'next';

export function getBaseMetadata(): Metadata {
  return {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    keywords: [
      'Fullstack',
      'Next.js',
      'Nest.js',
      'Portfolio',
      'React',
      'MongoDB',
      'JWT',
      'Tailwind CSS',
      'REST API',
      'TypeScript',
      'Figma',
      'Practice Project',
    ],
    authors: [{ name: 'mjavason' }],
    creator: 'mjavason',
    applicationName: APP_NAME,
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    openGraph: {
      title: APP_NAME,
      description: APP_DESCRIPTION,
      url: FRONTEND_URL,
      siteName: APP_NAME,
      images: [
        {
          url: APP_PREVIEW_IMAGE,
          alt: APP_NAME,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    metadataBase: new URL(FRONTEND_URL),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
      },
    },
    icons: {
      icon: [
        { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicons/favicon.ico', sizes: 'any' },
      ],
      apple: [{ url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      other: [
        { url: '/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
  };
}
