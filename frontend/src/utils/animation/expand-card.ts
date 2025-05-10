import { time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const scaleInOpacityVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: time.fast } },
};

export const scaleInOpacityStaggerVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: time.fast, ease: 'easeOut', delay: i * time.fastest },
  }),
};
