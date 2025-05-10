import { time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const alertVariants: Variants = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: time.fast } },
};
