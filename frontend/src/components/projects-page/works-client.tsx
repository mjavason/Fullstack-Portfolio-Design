'use client';

import { useState, useEffect, useCallback } from 'react';
import ProjectPageCard from './card';

interface ProjectsClientProps {
  projects: IProject[];
  fetchProjects: (page: number) => Promise<IProject[]>;
}

export default function ProjectsClient({ projects, fetchProjects }: ProjectsClientProps) {
  const [currentProjects, setCurrentProjects] = useState<IProject[]>(projects);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [end, setEnd] = useState<boolean>(false);

  const fetchMoreProjects = useCallback(async () => {
    if (loading || end) return;

    setLoading(true);
    try {
      const moreProjects = await fetchProjects(page + 1);
      if (moreProjects.length < 1) {
        setEnd(true); // No more projects to load
        return;
      }
      setPage((prev) => prev + 1);
      setCurrentProjects((prev) => [...prev, ...moreProjects]);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  }, [loading, page, end, fetchProjects]);

  // Throttle or debounce the scroll handler for better performance
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (bottom && !loading && !end) {
        fetchMoreProjects();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchMoreProjects, loading, end]);

  return (
    <div className="grid items-stretch gap-10">
      {currentProjects.map((project, index) => (
        <ProjectPageCard key={index} project={project} />
      ))}
      {loading && <p>Loading more projects...</p>}
      {end && <p>No more projects to load</p>}
    </div>
  );
}
