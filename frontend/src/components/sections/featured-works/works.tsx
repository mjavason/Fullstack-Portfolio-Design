import { fetchProjects } from '@/actions/work/read';
import paths from '@/app/paths';
import { Image } from '@heroui/react';
import Link from 'next/link';

async function FeaturedWorks() {
  const works = await fetchProjects();
  const renderedWorks = works.map((work, index) => {
    return (
      <Link key={index} href={paths.workDetails(index.toString())}>
        <div className="flex flex-col items-stretch md:flex-row gap-5 md:gap-0 hover:shadow-md border-b-2 pb-3">
          <div className="overflow-hidden w-2/5">
            <Image
              className="object-cover w-full"
              src={work.image}
              alt={work.alt}
              isZoomed
              removeWrapper
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-0 justify-between cursor-pointer bg-white px-0 md:px-5">
            <h3 className="text-3xl font-bold">{work.title}</h3>
            <div className="my-3 text-lg flex items-center gap-5">
              <span className="rounded-full px-3 p-0 bg-[#21243D] font-semibold text-white">
                {work.year}
              </span>
              <span className="text-xl text-[#8695A4] font-semibold">{work.category}</span>
            </div>
            <p className="text-lg">{work.description}</p>
          </div>
        </div>
      </Link>
    );
  });

  return <div className="grid items-stretch gap-9">{renderedWorks}</div>;
}

export default FeaturedWorks;
