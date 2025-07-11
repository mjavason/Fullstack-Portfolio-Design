import { fetchPosts } from '@/actions/post/read';
import RecentPostCard from './card';

async function RecentPosts() {
  const posts = await fetchPosts(1, 2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-5">
      {posts.map((post, index) => (
        <RecentPostCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}

export default RecentPosts;
