import { time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const zoomInImageVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: time.base } },
};

export const zoomInImageStaggerVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: time.base, delay: i * time.fastest },
  }),
};
