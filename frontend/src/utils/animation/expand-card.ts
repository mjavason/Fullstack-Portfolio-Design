import { time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const expandCardVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: time.fast } },
};

export const expandCardStaggerVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { duration: time.fastest, ease: 'easeOut', delay: i * time.fastest },
  }),
};
