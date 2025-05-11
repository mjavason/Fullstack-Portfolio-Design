'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import paths from '@/config/constants/paths';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { menuVariants, itemVariants } from '@/utils/animation/navigation/mobile';

function MobileList() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <input
        type="checkbox"
        id="nav-toggle"
        className="hidden peer"
        checked={menuOpen}
        onChange={() => setMenuOpen((prev) => !prev)}
      />

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed top-0 left-0 h-screen w-screen bg-transparent shadow-lg flex font-bold md:hidden z-50"
          >
            <motion.ul
              className="h-full w-1/3 bg-gray-600 shadow-lg flex flex-col justify-center items-start p-5 space-y-4"
              variants={menuVariants}
            >
              {[
                { name: 'Home', path: paths.home },
                { name: 'Work', path: paths.work },
                { name: 'Blog', path: paths.blog },
                { name: 'Admin', path: paths.adminDashboard },
              ].map((item) => (
                <motion.li
                  key={item.path}
                  variants={itemVariants}
                  className="px-4 py-2 rounded transition-colors duration-300 cursor-pointer"
                >
                  <Link
                    href={item.path}
                    className={
                      isActive(item.path)
                        ? 'text-accent-primary font-semibold'
                        : 'text-white hover:text-accent-primary font-semibold'
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex-1 h-full bg-transparent" onClick={() => setMenuOpen(false)}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileList;
