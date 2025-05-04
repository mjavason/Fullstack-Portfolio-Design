'use client';

import { motion, Variants } from 'framer-motion';
import { Button } from '@heroui/react';
import { time, staggerDefault } from '@/config/motion';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: time.base,
      when: 'beforeChildren',
      staggerChildren: staggerDefault,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: time.fast } },
};

const buttonVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: time.fast } },
};

function ProfileDescription() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="order-2 lg:order-1 flex-1 flex flex-col gap-10 w-full lg:w-2/3 text-primary"
    >
      <motion.h1
        variants={childVariants}
        className="flex flex-col gap-3 px-3 lg:px-0 text-4xl lg:text-5xl font-bold"
      >
        <motion.p variants={childVariants}>Hi, I am John.</motion.p>
        <motion.p variants={childVariants}>Creative Technologist</motion.p>
      </motion.h1>

      <motion.p variants={childVariants} className="text-xl">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </motion.p>

      <motion.div variants={buttonVariants}>
        <Button className="px-4 py-6 rounded-lg bg-accent-primary text-white w-[70%] lg:w-[40%] text-lg">
          Download Resume
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default ProfileDescription;
