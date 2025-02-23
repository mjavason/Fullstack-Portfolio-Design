import React from 'react';

interface ProjectDetailProps {
  params: Promise<{
    workId: string;
  }>;
}

const WorkPage = async ({ params }: ProjectDetailProps) => {
  const { workId } = await params;

  return (
    <div>
      <h1>Work Page</h1>
      <p>Work ID: {workId}</p>
    </div>
  );
};

export default WorkPage;
