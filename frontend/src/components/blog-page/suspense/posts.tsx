import { Skeleton } from '@heroui/react';

function BlogPostsSkeleton() {
  return (
    <div className="grid grid-cols-1 items-stretch gap-10">
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="flex flex-col">
          {/* Title Skeleton */}
          <Skeleton className="h-8 w-3/4 my-5" />

          {/* Description Skeleton */}
          <Skeleton className="h-20 w-full" />
        </div>
      ))}
    </div>
  );
}

export default BlogPostsSkeleton;
