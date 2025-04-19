import { fetchProjects } from '@/actions/work/read';
import ProjectPageCard from './card';

async function Projects() {
  const projects = await fetchProjects();

  return (
    <div className="grid items-stretch gap-9">
      {projects.map((project) => {
        return <ProjectPageCard project={project}></ProjectPageCard>;
      })}
    </div>
  );
}

export default Projects;
