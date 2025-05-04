'use client';

import { delay, motion, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import paths from '@/config/constants/paths';
import Link from 'next/link';
import { staggerDefault, time } from '@/config/motion';

const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDefault,
      delay: time.base,
      duration: time.fast,
      when: 'beforeChildren',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: time.fastest } },
};

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
