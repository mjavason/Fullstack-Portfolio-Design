import { APP_DESCRIPTION, APP_NAME, APP_PREVIEW_IMAGE, FRONTEND_URL } from '@/config/constants';
import { Metadata } from 'next';

export function getHomeMetadata(): Metadata {
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
  };
}
