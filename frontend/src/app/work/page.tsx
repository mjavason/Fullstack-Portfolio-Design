import ContainerSection from '@/components/container';
import PageHeader from '@/components/page-header';
import WorksSkeleton from '@/components/sections/featured-works/suspense/works';
import FeaturedWorks from '@/components/sections/featured-works/works';
import React, { Suspense } from 'react';

const WorkPage = () => {
  return (
    <ContainerSection>
      {/* header */}
      <PageHeader pageTitle="Work"></PageHeader>

      {/* works/projects */}
      <Suspense fallback={<WorksSkeleton />}>
        <FeaturedWorks></FeaturedWorks>
      </Suspense>
    </ContainerSection>
  );
};

export default WorkPage;
