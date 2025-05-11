import { staggerDefault, time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDefault,
      delay: time.base,
      duration: time.fast,
      when: 'beforeChildren',
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: time.fastest } },
};
