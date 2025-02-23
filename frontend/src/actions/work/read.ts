'use server';
import { WorkType } from '@/config/types/work';

export const fetchProjects = async () => {
  const works: WorkType[] = [
    {
      title: 'Designing Dashboards',
      year: 2020,
      category: 'Dashboard',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: 'images/featured/30.png',
      alt: 'dashboard design',
    },
    {
      title: 'Vibrant Portraits of 2020',
      year: 2018,
      category: 'Illustration',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: 'images/featured/32.png',
      alt: 'dashboard design',
    },
    {
      title: '36 Days of Malayalam Type',
      year: 2018,
      category: 'Typography',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      image: 'images/featured/34.png',
      alt: 'dashboard design',
    },
  ];

  try {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    return works;
  } catch (error) {
    console.error('Error fetching work data:', error);
    throw error;
  }
};
