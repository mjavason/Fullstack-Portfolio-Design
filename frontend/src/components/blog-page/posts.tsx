import { fetchPosts } from '@/actions/post/read';
import BlogPageCard from './card';

async function BlogPagePosts() {
  const posts = await fetchPosts();

  return (
    <div className="grid grid-cols-1 items-stretch gap-5">
      {posts.map((post, index) => {
        return <BlogPageCard key={post.id} post={post} index={index}></BlogPageCard>;
      })}
    </div>
  );
}

export default BlogPagePosts;
