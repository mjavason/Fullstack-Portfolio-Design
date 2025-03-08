import { Suspense } from 'react';
import RecentPostsSectionHeader from './header';
import RecentPosts from './posts';
import PostSkeleton from './suspense/posts';

function RecentPostsSection() {
  return (
    <section className="px-5 md:px-36 py-10 bg-[#EDF7FA] text-[#21243D] min-h-[90vh] md:min-h-0 flex flex-col justify-start gap-5">
      {/* recent posts section header */}
      <RecentPostsSectionHeader></RecentPostsSectionHeader>

      {/* recent posts */}
      <Suspense fallback={<PostSkeleton />}>
        <RecentPosts></RecentPosts>
      </Suspense>
    </section>
  );
}

export default RecentPostsSection;
