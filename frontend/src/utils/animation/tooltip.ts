import { time } from '@/config/motion';
import { Variants } from 'framer-motion';

export const tooltipVariants: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: time.fastest } },
};
