import FullDetails from '@/components/details-page/full-details';
import FullDetailsHeader from '@/components/details-page/header';
import React from 'react';
import { fetchPosts } from '@/actions/post/read';

interface BlogDetailProps {
  params: Promise<{
    postId: string;
  }>;
}

const BlogPostPage = async ({ params }: BlogDetailProps) => {
  const { postId } = await params;
  const posts = await fetchPosts();
  const post = posts[parseInt(postId)];

  return (
    <section className="px-5 md:px-36 text-primary min-h-[90vh] flex flex-col justify-start gap-10">
      {/* detail header */}
      <FullDetailsHeader
        title={post.title}
        date={post.date}
        category={post.category.join(', ')}
        description={post.description}
        image={''}
        isPost={true}
      ></FullDetailsHeader>

      {/* full detail */}
      <FullDetails content={post.description}></FullDetails>
    </section>
  );
};

export default BlogPostPage;
