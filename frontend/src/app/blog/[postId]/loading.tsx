import { Skeleton } from '@heroui/react';

export default function Loading() {
  return (
    <section className="px-5 md:px-36 text-primary min-h-[90vh] flex flex-col justify-start gap-10">
      {/* Title and Tags Skeleton */}
      <div className="flex flex-col justify-start text-primary gap-5">
        <Skeleton className="h-10 w-[50%] rounded-md" />
        <div className="my-3 text-2xl flex items-center gap-5">
          <Skeleton className="h-8 w-16 rounded-full" />
          <Skeleton className="h-6 w-48 rounded-md" />
        </div>
        <Skeleton className="h-6 w-full max-w-lg rounded-md" />
      </div>

      {/* Paragraph Skeletons */}
      <div className="w-full flex flex-col text-lg gap-4">
        <Skeleton className="h-6 w-full rounded-md" />
        <Skeleton className="h-6 w-[90%] rounded-md" />
        <Skeleton className="h-6 w-[80%] rounded-md" />
        <Skeleton className="h-6 w-full rounded-md" />
      </div>
    </section>
  );
}
