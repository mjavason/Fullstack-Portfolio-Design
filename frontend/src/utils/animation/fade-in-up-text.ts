import { time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: time.base } },
};

export const fadeInUpStaggerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: time.base * 10, delay: i * time.fastest * 10 },
  }),
};
