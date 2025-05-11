'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import paths from '@/config/constants/paths';
import Link from 'next/link';
import { listVariants, itemVariants } from '@/utils/animation/navigation/desktop';

function DesktopList() {
  const pathname = usePathname();

  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      animate="show"
      className="hidden md:flex gap-10 font-bold"
    >
      {[
        { name: 'Home', path: paths.home },
        { name: 'Works', path: paths.work },
        { name: 'Blog', path: paths.blog },
        { name: 'Admin', path: paths.adminDashboard },
      ].map((item) => (
        <motion.li
          key={item.path}
          variants={itemVariants}
          className="transition-colors duration-300 cursor-pointer"
        >
          <Link
            href={item.path}
            className={`text-2xl ${
              pathname === item.path
                ? 'text-accent-primary font-semibold'
                : 'hover:text-accent-primary font-semibold'
            }`}
          >
            {item.name}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default DesktopList;
