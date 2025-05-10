'use client';

import { fadeInUpVariants } from '@/utils/animation/fade-in-up-text';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  pageTitle: string;
}

function PageHeader({ pageTitle }: PageHeaderProps) {
  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex justify-between my-5 text-primary"
    >
      <span className="text-5xl font-bold">{pageTitle}</span>
    </motion.div>
  );
}

export default PageHeader;
