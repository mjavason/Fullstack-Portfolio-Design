import { formatLongDate } from '@/utils/date';
import { Chip } from '@heroui/react';
import Image from 'next/image';
import ProjectCardDropDown from './dropdown';
import { motion } from 'framer-motion';
import { staggerListItemVariants } from '@/utils/animation/stagger-list';

function ProjectCard(props: { project: IProject }) {
  return (
    <motion.div
      variants={staggerListItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col justify-between w-full p-3 border-1 rounded-md relative"
    >
      <ProjectCardDropDown project={props.project}></ProjectCardDropDown>
      <div className="overflow-hidden">
        <Image
          className="w-full object-cover h-[256px] md:h-[128px] rounded-md"
          src={props.project.coverImage}
          alt={props.project.title}
          width={256}
          height={128}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/images/placeholder.png"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-primary text-lg mt-3 flex-1 overflow-hidden break-words md:truncate">
          {props.project.title}
        </h3>
        <h5 className="text-gray-400 text-sm">{formatLongDate(props.project.createdAt)}</h5>
      </div>
      <p className="text-primary flex-1 text-sm my-3 overflow-hidden break-words md:line-clamp-2">
        {props.project.summary}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-accent-primary text-sm">
          {Math.floor(Math.random() * 50) + 1}+ Clicks
        </span>
        {props.project.published ? (
          <Chip variant="bordered" size="sm" color="success">
            Live
          </Chip>
        ) : (
          <Chip color="warning" size="sm" variant="bordered">
            Draft
          </Chip>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
