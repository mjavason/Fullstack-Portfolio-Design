import { fetchProjects } from '@/actions/work/read';
import ProjectPageCard from './card';
import { babelIncludeRegexes } from 'next/dist/build/webpack-config';

async function Projects() {
  const projects = await fetchProjects();

  return (
    <div className="grid items-stretch gap-10">
      {projects.map((project, index) => {
        return <ProjectPageCard key={project.id} project={project} index={index}></ProjectPageCard>;
      })}
    </div>
  );
}

export default Projects;
