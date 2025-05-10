import { time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const slideInButtonVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: time.fast } },
};

export const slideInButtonStaggerVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { duration: time.fast, delay: i * time.fastest },
  }),
};
