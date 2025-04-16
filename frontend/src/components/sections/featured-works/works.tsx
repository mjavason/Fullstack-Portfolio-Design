import { fetchProjects } from '@/actions/work/read';
import paths from '@/config/constants/paths';
import { Image } from '@heroui/react';
import Link from 'next/link';

async function FeaturedWorks() {
  const works = await fetchProjects();
  const renderedWorks = works.map((work) => {
    return (
      <Link key={work.id} href={paths.workDetails(work.id)}>
        <div className="flex flex-col items-stretch lg:flex-row gap-5 lg:gap-0 lg:hover:shadow-lg border-b-2 pb-3">
          <div className="overflow-hidden w-full lg:w-2/5 h-auto">
            <Image
              className="w-full h-full object-cover"
              src={work.coverImage}
              alt={work.title}
              isZoomed
              removeWrapper
            />
          </div>
          <div className="flex flex-col gap-5 lg:gap-0 justify-between cursor-pointer bg-white px-0 lg:px-5">
            <h3 className="text-3xl font-bold">{work.title}</h3>
            <div className="my-1 text-lg flex items-center gap-5">
              <span className="rounded-full px-3 p-0 bg-primary font-semibold text-white">
                {new Date(work.createdAt).getFullYear().toString()}
              </span>
              <span className="text-xl text-secondary">{work.category}</span>
            </div>
            <p className="text-lg">{work.summary}</p>
          </div>
        </div>
      </Link>
    );
  });

  return <div className="grid items-stretch gap-9">{renderedWorks}</div>;
}

export default FeaturedWorks;
