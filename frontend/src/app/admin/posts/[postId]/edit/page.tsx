import React from 'react';

const PostPage = ({ params }: { params: { postId: string } }) => {
  return (
    <div>
      <h1>Post ID: {params.postId}</h1>
      {/* Add your post content here */}
    </div>
  );
};

export default PostPage;
