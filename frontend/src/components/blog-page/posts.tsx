import { fetchPosts } from '@/actions/post/read';
import BlogPagePostsClient from './posts-client';

async function BlogPagePosts() {
  const posts = await fetchPosts();

  return <BlogPagePostsClient posts={posts} fetchPosts={fetchPosts}></BlogPagePostsClient>;
}

export default BlogPagePosts;
