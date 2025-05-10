'use client';

import paths from '@/config/constants/paths';
import Link from 'next/link';
import { Image } from '@heroui/react';
import { motion } from 'framer-motion';
import { staggerListItemVariantsWithDelay } from '@/utils/animation/stagger-list';

function ProjectPageCard(props: { project: IProject; index: number }) {
  const { project, index } = props;

  return (
    <Link href={paths.workDetails(project.id)}>
      <motion.div
        custom={index}
        variants={staggerListItemVariantsWithDelay}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-stretch lg:flex-row gap-5 lg:gap-0 border-b-2 pb-3"
      >
        <div className="overflow-hidden lg:w-[246px] lg:h-[180px] w-full h-[230px] rounded-md">
          <Image
            className="lg:w-[246px] lg:h-[180px] w-full h-[230px] object-cover"
            src={project.coverImage}
            alt={project.title}
            isZoomed
            removeWrapper
          />
        </div>
        <div className="flex-1 flex flex-col gap-5 justify-between cursor-pointer bg-white px-0 lg:px-5">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold break-words md:line-clamp-1">{project.title}</h3>
            <div className="my-1 text-lg flex items-center gap-5">
              <span className="rounded-full px-3 p-0 bg-primary font-semibold text-white">
                {new Date(project.createdAt).getFullYear().toString()}
              </span>
              <span className="text-xl text-secondary">{project.category}</span>
            </div>
          </div>
          <p className="flex-1 text-lg break-words line-clamp-3 lg:line-clamp-2">
            {project.summary}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default ProjectPageCard;
