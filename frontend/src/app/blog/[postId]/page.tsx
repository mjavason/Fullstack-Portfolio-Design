import React from 'react';
import { useRouter } from 'next/router';

const BlogPostPage: React.FC = () => {
    const router = useRouter();
    const { postId } = router.query;

    return (
        <div>
            <h1>Blog Post {postId}</h1>
            <p>This is the content of the blog post.</p>
        </div>
    );
};

export default BlogPostPage;