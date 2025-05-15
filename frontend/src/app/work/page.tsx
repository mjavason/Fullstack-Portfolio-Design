import ContainerSection from '@/components/container';
import PageHeader from '@/components/page-header';
import Projects from '@/components/projects-page/works';
import ProjectsSkeleton from '@/components/projects-page/suspense/works';
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { getMetadataNoOg } from '@/utils/metadata';

export const metadata: Metadata = getMetadataNoOg('Projects', 'List of projects worked on.', [
  'projects',
  'works',
  'highlights',
  'portfolio',
  'case studies',
]);

const WorkPage = () => {
  return (
    <ContainerSection>
      {/* header */}
      <PageHeader pageTitle="Projects"></PageHeader>

      {/* works/projects */}
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects></Projects>
      </Suspense>
    </ContainerSection>
  );
};

export default WorkPage;
