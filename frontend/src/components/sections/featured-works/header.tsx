'use client';

import { fadeInUpVariants } from '@/utils/animation/fade-in-up-text';
import { motion } from 'framer-motion';

function FeaturedWorksHeader() {
  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex justify-center md:justify-between my-5 text-primary"
    >
      <span className="text-2xl">Featured works</span>
    </motion.div>
  );
}

export default FeaturedWorksHeader;
