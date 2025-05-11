'use client';

import { useState, useEffect, useCallback } from 'react';
import BlogPageCard from './card';

interface BlogPagePostsClientProps {
  posts: IPost[];
  fetchPosts: (page: number) => Promise<IPost[]>;
}

export default function BlogPagePostsClient({ posts, fetchPosts }: BlogPagePostsClientProps) {
  const [currentPosts, setCurrentPosts] = useState<IPost[]>(posts);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [end, setEnd] = useState<boolean>(false);

  const fetchMorePosts = useCallback(async () => {
    if (loading || end) return;

    setLoading(true);
    try {
      const morePosts = await fetchPosts(page + 1);
      if (morePosts.length < 1) {
        setEnd(true); // No more posts to load
        return;
      }
      setPage((prev) => prev + 1);
      setCurrentPosts((prev) => [...prev, ...morePosts]);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  }, [page, end, loading, fetchPosts]);

  // Throttle or debounce the scroll handler for better performance
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (bottom && !loading && !end) {
        fetchMorePosts();
      }
    };

    console.log(page, currentPosts);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchMorePosts, loading, end]);

  return (
    <div className="grid grid-cols-1 items-stretch gap-5">
      {currentPosts.map((post, index) => {
        return <BlogPageCard key={index} post={post}></BlogPageCard>;
      })}
      {loading && <p>Loading more posts...</p>}
      {end && <p>No more posts to load</p>}
    </div>
  );
}
