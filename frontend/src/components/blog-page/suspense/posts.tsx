import { Skeleton } from '@heroui/react';

function BlogPostsSkeleton() {
  return (
    <div className="grid grid-cols-1 items-stretch gap-5">
      {[1].map((index) => (
        <div key={index} className="flex flex-col">
          {/* Title Skeleton */}
          <Skeleton className="h-8 w-3/4 my-5" />

          {/* Meta Info Skeleton */}
          <div className="my-3 flex items-center gap-3">
            <Skeleton className="h-5 w-1/4" />
            <span className="mx-5"></span>
            <Skeleton className="h-5 w-1/3" />
          </div>

          {/* Description Skeleton */}
          <Skeleton className="h-20 w-full" />
        </div>
      ))}
    </div>
  );
}

export default BlogPostsSkeleton;
