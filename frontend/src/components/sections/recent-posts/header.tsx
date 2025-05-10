'use client';

import { motion } from 'framer-motion';
import paths from '@/config/constants/paths';
import Link from 'next/link';
import { time } from '@/config/motion';

function RecentPostsSectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: time.base }}
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
