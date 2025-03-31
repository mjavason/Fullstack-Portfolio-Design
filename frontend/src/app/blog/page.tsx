import PageHeader from '@/components/page-header';
import BlogPagePosts from '@/components/blog-page/posts';
import BlogPostsSkeleton from '@/components/blog-page/suspense/posts';
import React, { Suspense } from 'react';
import ContainerSection from '@/components/container';

const BlogPage = () => {
  return (
    <ContainerSection>
      {/* header */}
      <PageHeader pageTitle="Blog"></PageHeader>

      {/* posts */}
      <Suspense fallback={<BlogPostsSkeleton />}>
        <BlogPagePosts></BlogPagePosts>
      </Suspense>
    </ContainerSection>
  );
};

export default BlogPage;
