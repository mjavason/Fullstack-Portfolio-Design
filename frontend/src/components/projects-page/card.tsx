import paths from '@/config/constants/paths';
import Link from 'next/link';
import { Image } from '@heroui/react';

function ProjectPageCard(props: { project: IProject }) {
  const { project } = props;

  return (
    <Link href={paths.workDetails(project.id)}>
      <div className="flex flex-col items-stretch lg:flex-row gap-5 lg:gap-0 border-b-2 pb-3">
        <div className="overflow-hidden w-full lg:w-2/5 h-auto">
          <Image
            className="w-full h-full object-cover"
            src={project.coverImage}
            alt={project.title}
            isZoomed
            removeWrapper
          />
        </div>
        <div className="flex flex-col gap-5 lg:gap-0 justify-between cursor-pointer bg-white px-0 lg:px-5">
          <h3 className="text-3xl font-bold">{project.title}</h3>
          <div className="my-1 text-lg flex items-center gap-5">
            <span className="rounded-full px-3 p-0 bg-primary font-semibold text-white">
              {new Date(project.createdAt).getFullYear().toString()}
            </span>
            <span className="text-xl text-secondary">{project.category}</span>
          </div>
          <p className="text-lg">{project.summary}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectPageCard;
