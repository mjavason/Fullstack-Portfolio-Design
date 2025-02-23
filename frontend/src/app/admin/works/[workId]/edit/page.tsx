import React from 'react';

interface EditProjectProps {
  params: Promise<{
    workId: string;
  }>;
}

const WorkPage = async ({ params }: EditProjectProps) => {
  const { workId } = await params;

  return (
    <div>
      <h1>Work Details {workId}</h1>
      <p>Details about the work will be displayed here.</p>
    </div>
  );
};

export default WorkPage;
