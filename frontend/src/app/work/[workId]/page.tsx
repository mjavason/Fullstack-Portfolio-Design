import { fetchProjects } from '@/actions/work/read';
import FullDetails from '@/components/details-page/full-details';
import FullDetailsHeader from '@/components/details-page/header';
import React from 'react';

interface ProjectDetailProps {
  params: Promise<{
    workId: string;
  }>;
}

const WorkPage = async ({ params }: ProjectDetailProps) => {
  const { workId } = await params;
  const works = await fetchProjects();
  const work = works[parseInt(workId)];

  return (
    <section className="px-5 md:px-36 text-primary min-h-[90vh] flex flex-col justify-start gap-10">
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
