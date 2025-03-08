import PageHeader from '@/components/page-header';
import WorksSkeleton from '@/components/sections/featured-works/suspense/works';
import FeaturedWorks from '@/components/sections/featured-works/works';
import React, { Suspense } from 'react';

const WorkPage = () => {
  return (
    <section className="px-5 md:px-36 text-primary min-h-[90vh] flex flex-col justify-start gap-5">
      {/* header */}
      <PageHeader pageTitle="Work"></PageHeader>

      {/* works/projects */}
      <Suspense fallback={<WorksSkeleton />}>
        <FeaturedWorks></FeaturedWorks>
      </Suspense>
    </section>
  );
};

export default WorkPage;
