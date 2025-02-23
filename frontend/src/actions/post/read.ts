'use server';
import { PostType } from '@/config/types/post';

export const fetchPosts = async () => {
  const posts: PostType[] = [
    {
      title: 'Making a design system from scratch',
      date: '12 Feb 2020',
      category: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      title: 'Creating a pixel perfect icon in Figma',
      date: '12 Feb 2020',
      category: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ];

  try {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
