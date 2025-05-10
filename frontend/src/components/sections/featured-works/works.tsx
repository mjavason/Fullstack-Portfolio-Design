import { fetchProjects } from '@/actions/work/read';
import ProjectPageCard from '@/components/projects-page/card';

async function FeaturedWorks() {
  const projects = await fetchProjects(1, 3);

  return (
    <div className="grid items-stretch gap-9">
      {projects.map((project) => {
        return <ProjectPageCard key={project.id} project={project}></ProjectPageCard>;
      })}
    </div>
  );
}

export default FeaturedWorks;
