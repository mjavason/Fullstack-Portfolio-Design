import { time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const iconVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0, rotate: -15 },
  visible: { scale: 1, opacity: 1, rotate: 0, transition: { duration: time.fast } },
};

export const iconStaggerVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0, rotate: -15 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { duration: time.fast, delay: i * time.fastest },
  }),
};
