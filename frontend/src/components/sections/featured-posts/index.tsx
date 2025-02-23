import { Suspense } from 'react';
import FeaturedWorksHeader from './header';
import FeaturedWorks from './works';
import WorkSkeleton from './suspense/works';

function FeaturedWorksSection() {
  return (
    <section className='px-5 md:px-36 py-10 text-[#21243D] min-h-[90vh] flex flex-col justify-start gap-5'>
      {/* header */}
      <FeaturedWorksHeader></FeaturedWorksHeader>

      {/* featured works */}
      <Suspense fallback={<WorkSkeleton />}>
        <FeaturedWorks></FeaturedWorks>
      </Suspense>
    </section>
  );
}

export default FeaturedWorksSection;
