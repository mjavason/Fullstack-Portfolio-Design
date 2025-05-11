import { fetchProjects } from '@/actions/work/read';
import ProjectPageCard from './card';
import ProjectsClient from './projects';

async function Projects() {
  const projects = await fetchProjects();

  return <ProjectsClient projects={projects} fetchProjects={fetchProjects}></ProjectsClient>;
}

export default Projects;
