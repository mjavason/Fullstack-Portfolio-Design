import { fetchSingleProject } from '@/actions/work/read';
import FullDetails from '@/components/details-page/full-details';
import FullDetailsHeader from '@/components/details-page/header';
import { notFound } from 'next/navigation';
import React from 'react';
import { Metadata } from 'next';
import { getMetadata } from '@/utils/metadata';

interface ProjectDetailProps {
  params: Promise<{
    workId: string;
  }>;
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { workId } = await params;

  const work = await fetchSingleProject(workId);
  if (!work) return { title: 'Project Not Found' };

  return getMetadata(
    work.title,
    work.summary,
    ['project', 'work', work.category.toLowerCase()],
    work.coverImage,
  );
}

const WorkPage = async ({ params }: ProjectDetailProps) => {
  const { workId } = await params;
  const work = await fetchSingleProject(workId);
  if (!work) notFound();

  return (
    <section className="px-5 md:px-36 text-primary min-h-[90vh] flex flex-col justify-start gap-10">
      <FullDetailsHeader
        title={work.title}
        date={new Date(work.createdAt).getFullYear().toString()}
        category={work.category}
        description={work.summary}
        image={work.coverImage}
        isPost={false}
      />
      <FullDetails content={work.body} />
    </section>
  );
};

export default WorkPage;
