import PageHeader from '@/components/page-header';
import BlogPagePosts from '@/components/blog-page/posts';
import BlogPostsSkeleton from '@/components/blog-page/suspense/posts';
import React, { Suspense } from 'react';

const BlogPage = () => {
  return (
    <section className="px-5 md:px-36 text-[#21243D] min-h-[90vh] flex flex-col justify-start gap-5">
      {/* header */}
      <PageHeader pageTitle="Blog"></PageHeader>

      {/* posts */}
      <Suspense fallback={<BlogPostsSkeleton />}>
        <BlogPagePosts></BlogPagePosts>
      </Suspense>
    </section>
  );
};

export default BlogPage;
