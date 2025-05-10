import { time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const dropdownVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1, transition: { duration: time.fast } },
};
