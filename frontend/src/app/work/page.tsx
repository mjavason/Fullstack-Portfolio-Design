import ContainerSection from '@/components/container';
import PageHeader from '@/components/page-header';
import Projects from '@/components/projects-page/works';
import ProjectsSkeleton from '@/components/projects-page/suspense/works';
import React, { Suspense } from 'react';

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
