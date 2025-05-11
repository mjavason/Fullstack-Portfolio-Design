import { fadeInUpVariants } from '@/utils/animation/fade-in-up-text';
import { slideInButtonVariants } from '@/utils/animation/slide-in-button';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  pageTitle: string;
  setIsCreateModalOpen: (isOpen: boolean) => void;
}

function PageHeaderAdmin(props: PageHeaderProps) {
  return (
    <div className="flex justify-between align-middle w-full items-center my-5">
      <motion.h2
        variants={fadeInUpVariants}
        initial="hidden"
        animate="visible"
        className="text-5xl font-bold h-fit text-primary"
      >
        {props.pageTitle}
      </motion.h2>
      <motion.div variants={slideInButtonVariants} initial="hidden" animate="visible">
        <Button
          onPress={() => props.setIsCreateModalOpen(true)}
          className="rounded-md text-white bg-accent-primary px-5 py-2"
        >
          Create
        </Button>
      </motion.div>
    </div>
  );
}

export default PageHeaderAdmin;
