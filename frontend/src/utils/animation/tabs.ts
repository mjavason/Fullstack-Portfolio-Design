import { time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const tabSwitchVariants: Variants = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: time.fast } },
};
