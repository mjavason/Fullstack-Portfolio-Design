import { staggerDefault } from '@/config/motion';
import { time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const menuVariants: Variants = {
  hidden: { x: '-100%' },
  visible: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: staggerDefault,
      duration: time.fastest,
      ease: 'easeInOut',
    },
  },
  exit: { x: '-100%', transition: { duration: time.fastest, ease: 'easeInOut' } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: time.fastest } },
};
