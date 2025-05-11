'use client';

import { useState, useEffect } from 'react';
import ProjectPageCard from './card';

interface ProjectsClientProps {
  projects: IProject[];
  fetchProjects: (page: number) => Promise<IProject[]>; // Function to fetch more projects
}

export default function ProjectsClient({ projects, fetchProjects }: ProjectsClientProps) {
  const [currentProjects, setCurrentProjects] = useState<IProject[]>(projects);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [end, setEnd] = useState<boolean>(false);

  const fetchMoreProjects = async () => {
    if (end) return;
    if (loading) return;
    setLoading(true);
    try {
      const moreProjects = await fetchProjects(page + 1);
      if (moreProjects.length < 1) {
        setEnd(true);
        return;
      }
      setPage((prev) => prev + 1);
      setCurrentProjects((prev) => [...prev, ...moreProjects]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (bottom && !loading) {
        fetchMoreProjects();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <div className="grid items-stretch gap-10">
      {currentProjects.map((project) => (
        <ProjectPageCard key={project.id} project={project}></ProjectPageCard>
      ))}
      {loading && <p>Loading more projects...</p>}
    </div>
  );
}
