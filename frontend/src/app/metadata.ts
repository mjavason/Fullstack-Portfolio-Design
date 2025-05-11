import { Metadata } from 'next';

export function getHomeMetadata(): Metadata {
  return {
    title: 'Fullstack Portfolio Design',
    description:
      'A fullstack portfolio project using Next.js and Nest.js with a responsive UI and dynamic backend integration.',
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
    applicationName: 'Fullstack Portfolio Design',
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    openGraph: {
      title: 'Fullstack Portfolio Design',
      description:
        'A fullstack practice portfolio project with Next.js frontend and Nest.js backend.',
      url: 'https://fullstack-portfolio-design.vercel.app',
      siteName: 'Fullstack Portfolio',
      images: [
        {
          url: 'https://res.cloudinary.com/tech-aku/image/upload/v1743443222/startup/66cb07776cde8fba5b240bfe/keloc4mylznclkudtzhv.jpg',
          width: 1200,
          height: 630,
          alt: 'Fullstack Portfolio Preview',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    metadataBase: new URL('https://fullstack-portfolio-design.vercel.app'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
      },
    },
  };
}
