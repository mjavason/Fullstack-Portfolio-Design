import { fetchProjects } from '@/actions/work/read';
import ProjectPageCard from './card';

async function Projects() {
  const projects = await fetchProjects();

  return (
    <div className="grid items-stretch gap-10">
      {projects.map((project) => {
        return <ProjectPageCard key={project.id} project={project}></ProjectPageCard>;
      })}
    </div>
  );
}

export default Projects;
