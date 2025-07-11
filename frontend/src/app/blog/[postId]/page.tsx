import FullDetails from '@/components/details-page/full-details';
import FullDetailsHeader from '@/components/details-page/header';
import React from 'react';
import { fetchSinglePost } from '@/actions/post/read';
import { notFound } from 'next/navigation';
import { formatLongDate } from '@/utils/date';
import { getMetadataNoOg } from '@/utils/metadata';
import { Metadata } from 'next';

interface BlogDetailProps {
  params: Promise<{
    postId: string;
  }>;
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { postId } = await params;

  const post = await fetchSinglePost(postId);
  if (!post) return { title: 'Project Not Found' };

  return getMetadataNoOg(post.title, post.summary, ['blog', 'post', ...post.categories]);
}

const BlogPostPage = async ({ params }: BlogDetailProps) => {
  const { postId } = await params;
  const post = await fetchSinglePost(postId);
  if (!post) notFound();

  return (
    <section className="px-5 md:px-36 text-primary min-h-[90vh] flex flex-col justify-start gap-10">
      {/* detail header */}
      <FullDetailsHeader
        title={post.title}
        date={formatLongDate(post.createdAt)}
        category={post.categories.join(', ')}
        description={post.summary}
        image={''}
        isPost={true}
      ></FullDetailsHeader>

      {/* full detail */}
      <FullDetails content={post.body}></FullDetails>
    </section>
  );
};

export default BlogPostPage;
