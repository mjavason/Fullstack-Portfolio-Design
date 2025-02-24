import { fetchPosts } from '@/actions/post/read';
import paths from '@/app/paths';
import { PostType } from '@/config/types/post';
import Link from 'next/link';

async function BlogPagePosts() {
  const posts: PostType[] = await fetchPosts();
  const renderedPosts = posts.map((post, index) => {
    return (
      <Link key={index} href={paths.blogDetails(index.toString())}>
        <div className="flex flex-col cursor-pointer py-5 border-b-2">
          <h3 className="text-3xl font-bold my-5 flex-1">{post.title}</h3>
          <div className="my-3 text-lg">
            <span>{post.date}</span>
            <span className="mx-5">|</span>
            <span>{post.category.join(', ')}</span>
          </div>
          <p className="flex-1 text-lg">{post.description}</p>
        </div>
      </Link>
    );
  });

  return <div className="grid grid-cols-1 items-stretch gap-5">{renderedPosts}</div>;
}

export default BlogPagePosts;
