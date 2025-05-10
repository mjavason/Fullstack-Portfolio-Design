'use client';

import { fadeInUpVariants } from '@/utils/animation/fade-in-up-text';
import { iconStaggerVariants } from '@/utils/animation/icons';
import { motion } from 'framer-motion';

function FooterSection() {
  const icons = ['facebook-square', 'instagram', 'twitter', 'linkedin'];

  return (
    <footer className="px-36 pt-10 pb-5 text-primary min-h-[20vh] flex flex-col justify-end items-center gap-8">
      <div className="flex gap-10 justify-center text-[1.875rem]">
        {icons.map((icon, i) => (
          <motion.i
            key={icon}
            custom={i}
            variants={iconStaggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`cursor-pointer fab fa-${icon}`}
          />
        ))}
      </div>
      <motion.p
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-sm text-center w-[90vw] md:w-[100%]"
      >
        Copyright ©{new Date().getFullYear()} All rights reserved
      </motion.p>
    </footer>
  );
}

export default FooterSection;
