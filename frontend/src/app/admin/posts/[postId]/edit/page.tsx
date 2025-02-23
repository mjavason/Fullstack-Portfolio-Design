import React from 'react';

interface EditPostProps {
  params: Promise<{
    postId: string;
  }>;
}

const PostPage = async ({ params }: EditPostProps) => {
  const { postId } = await params;

  return (
    <div>
      <h1>Post ID: {postId}</h1>
      {/* Add your post content here */}
    </div>
  );
};

export default PostPage;
