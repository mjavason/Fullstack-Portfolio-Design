import React from 'react';

interface BlogDetailProps {
  params: Promise<{
    postId: string;
  }>;
}

const BlogPostPage = async ({ params }: BlogDetailProps) => {
  const { postId } = await params;

  return (
    <div>
      <h1>Blog Post {postId}</h1>
      <p>This is the content of the blog post.</p>
    </div>
  );
};

export default BlogPostPage;
