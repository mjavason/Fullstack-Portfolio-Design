import { fetchPosts } from '@/actions/post/read';
import paths from '@/config/constants/paths';
import { formatLongDate } from '@/utils/date';
import Link from 'next/link';

async function RecentPosts() {
  const posts = await fetchPosts();
  const renderedPosts = posts.map((post) => {
    return (
      <Link key={post.id} href={paths.blogDetails(post.id)}>
        <div className="flex flex-col cursor-pointer bg-white p-5 hover:border-1">
          <h3 className="text-3xl font-bold my-5 flex-1">{post.title}</h3>
          <div className="my-3 text-lg">
            <span>{formatLongDate(post.createdAt)}</span>
            <span className="mx-5">|</span>
            <span>{post.categories.join(', ')}</span>
          </div>
          <p className="flex-1 text-lg">{post.summary}</p>
        </div>
      </Link>
    );
  });

  return <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-5">{renderedPosts}</div>;
}

export default RecentPosts;
