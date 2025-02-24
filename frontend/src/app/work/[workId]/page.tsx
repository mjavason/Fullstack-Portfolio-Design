import { fetchProjects } from '@/actions/work/read';
import FullDetails from '@/components/details-page/full-details';
import FullDetailsHeader from '@/components/details-page/header';
import React, { Suspense } from 'react';

interface ProjectDetailProps {
  params: Promise<{
    workId: string;
  }>;
}

const WorkPage = async ({ params }: ProjectDetailProps) => {
  const { workId } = await params;
  const works = await fetchProjects();
  const work = works[0];

  return (
    <section className="px-5 md:px-36 py-10 text-[#21243D] min-h-[90vh] flex flex-col justify-start gap-10">
      {/* detail header */}
      <FullDetailsHeader
        title={work.title}
        date={work.year.toString()}
        category={work.category}
        description={work.description}
        image={work.image}
        isPost={false}
      ></FullDetailsHeader>

      {/* full detail */}
      <FullDetails content={work.description}></FullDetails>
    </section>
  );
};

export default WorkPage;
