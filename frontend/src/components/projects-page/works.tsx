import { fetchProjects } from '@/actions/work/read';
import ProjectsClient from './works-client';

async function Projects() {
  const projects = await fetchProjects();

  return <ProjectsClient projects={projects} fetchProjects={fetchProjects}></ProjectsClient>;
}

export default Projects;
