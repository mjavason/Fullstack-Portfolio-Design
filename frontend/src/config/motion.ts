import { Variants } from 'framer-motion';

export const defaultSpringTransition = {
  type: 'spring',
  stiffness: 500, // 500
  damping: 20, // 30
};

export const pageContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5 },
  },
  exit: {
    // x: '-100vw',
    opacity: 0,
    transition: { ease: 'easeInOut' },
  },
};
