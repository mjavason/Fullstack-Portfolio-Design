import { fetchSingleProject } from '@/actions/work/read';
import FullDetails from '@/components/details-page/full-details';
import FullDetailsHeader from '@/components/details-page/header';
import { notFound } from 'next/navigation';
import React from 'react';

interface ProjectDetailProps {
  params: Promise<{
    workId: string;
  }>;
}

const WorkPage = async ({ params }: ProjectDetailProps) => {
  const { workId } = await params;
  const work = await fetchSingleProject(workId);
  if (!work) notFound();

  return (
    <section className="px-5 md:px-36 text-primary min-h-[90vh] flex flex-col justify-start gap-10">
      {/* detail header */}
      <FullDetailsHeader
        title={work.title}
        date={new Date(work.createdAt).getFullYear().toString()}
        category={work.category}
        description={work.summary}
        image={work.coverImage}
        isPost={false}
      ></FullDetailsHeader>

      {/* full detail */}
      <FullDetails content={work.body}></FullDetails>
    </section>
  );
};

export default WorkPage;
