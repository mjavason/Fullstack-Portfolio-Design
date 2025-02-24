import BlogPageHeader from '@/components/blog-page/header';
import BlogPagePosts from '@/components/blog-page/posts';
import BlogPostsSkeleton from '@/components/blog-page/suspense/posts';
import React, { Suspense } from 'react';

const BlogPage = () => {
  return (
    <section className="px-5 md:px-36 py-10 text-[#21243D] min-h-[90vh] flex flex-col justify-start gap-5">
      {/* header */}
      <BlogPageHeader></BlogPageHeader>

      {/* posts */}
      <Suspense fallback={<BlogPostsSkeleton />}>
        <BlogPagePosts></BlogPagePosts>
      </Suspense>
    </section>
  );
};

export default BlogPage;
