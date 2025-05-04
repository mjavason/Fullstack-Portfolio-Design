'use client';

import { motion, Variants } from 'framer-motion';
import { Image } from '@heroui/react';

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function ProfileImage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="order-1 lg:order-2 flex flex-col items-center"
    >
      <div className="overflow-hidden lg:w-full w-auto aspect-square rounded-full shadow-[-5px_13px_5px_#EDF7FA]">
        <Image
          className="object-contain rounded-full"
          src="/images/Ellipse 1.png"
          alt="Picture of John"
          isZoomed
          removeWrapper
        />
      </div>
    </motion.div>
  );
}

export default ProfileImage;
