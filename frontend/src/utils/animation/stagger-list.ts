import { time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const staggerListItemVariantsWithDelay: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: time.fast, delay: i * time.fastest },
  }),
};
