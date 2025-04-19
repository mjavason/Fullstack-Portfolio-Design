import { Skeleton } from '@heroui/react';

function WorksSkeleton() {
  return (
    <div className="grid items-stretch gap-9">
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="flex flex-col md:flex-row gap-5 md:gap-0 border-b-2 pb-3">
          {/* Image Skeleton */}
          <Skeleton className="rounded-sm w-[100%] md:w-[30%] h-[30vh] md:h-[100%]" />

          <div className="flex flex-col gap-5 md:gap-0 justify-between cursor-pointer bg-white px-0 md:px-5 w-full">
            {/* Title Skeleton */}
            <Skeleton className="h-8 w-3/4" />

            <div className="my-3 text-lg flex items-center gap-5">
              {/* Year Skeleton */}
              <Skeleton className="rounded-full px-3 p-2 bg-primary w-12 h-6" />
              {/* Category Skeleton */}
              <Skeleton className="w-24 h-6" />
            </div>

            {/* Description Skeleton */}
            <Skeleton className="h-16 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorksSkeleton;
