import { time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const modalVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: time.base } },
};
