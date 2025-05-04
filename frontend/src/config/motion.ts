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

export const staggerDefault = 0.15;
export const time = {
  fastest: 0.2,
  fast: 0.4,
  base: 0.6,
  slow: 0.8,
  slowest: 1.0,
};
