import { time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const progressBarVariants: Variants = {
  initial: { width: '0%' },
  animate: { width: '100%', transition: { duration: time.slow, ease: 'easeInOut' } },
};
