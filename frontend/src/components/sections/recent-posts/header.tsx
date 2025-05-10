'use client';

import { motion } from 'framer-motion';
import paths from '@/config/constants/paths';
import Link from 'next/link';
import { fadeInUpVariants } from '@/utils/animation/fade-in-up-text';

function RecentPostsSectionHeader() {
  return (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex justify-center md:justify-between my-5 text-primary"
    >
      <span className="text-2xl">Recent Posts</span>
      <Link
        href={paths.blog}
        className="hidden md:inline text-[#00A8CC] hover:underline text-lg cursor-pointer"
      >
        View all
      </Link>
    </motion.div>
  );
}

export default RecentPostsSectionHeader;
