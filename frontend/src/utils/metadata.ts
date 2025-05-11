import { APP_NAME, BASE_URL } from '@/config/constants';
import { Metadata } from 'next';

export function getMetadata(
  title: string,
  description: string,
  keywords: string[],
  image: string,
): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: BASE_URL,
      siteName: APP_NAME,
      images: [
        {
          url: image,
          alt: title,
        },
      ],
    },
  };
}

export function getMetadataNoOg(title: string, description: string, keywords: string[]): Metadata {
  return {
    title,
    description,
    keywords,
  };
}
