import { time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const formVariants: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: time.base } },
};
