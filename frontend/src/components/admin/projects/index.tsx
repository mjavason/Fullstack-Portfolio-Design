'use client';

import ContainerSection from '@/components/container';
import NothingFound from '@/components/nothing-found';
import PageHeaderAdmin from '../page-header-admin';
import PaginationComponent from '@/components/pagination';
import ProjectCard from './card';
import ProjectForm from '../projects/create-project-form';
import RootModal from '@/components/root-modal';
import RotatingLoader from '@/components/rotating-loader';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useFetchProjectsQuery } from '@/redux/api/projects';
import { useState } from 'react';
import { closeProjectUpdate } from '@/redux/slices/project-slice';
import UpdateProjectForm from './update-project-form';

function AdminProjectsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: projects, isLoading } = useFetchProjectsQuery({ pagination_page: currentPage });
  const globalProjectState = useAppSelector((state) => state.project.updateProject);
  const dispatch = useAppDispatch();

  return (
    <ContainerSection>
      <PageHeaderAdmin pageTitle="Projects" setIsCreateModalOpen={setIsModalOpen}></PageHeaderAdmin>
      <RootModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProjectForm setIsModalOpen={setIsModalOpen}></ProjectForm>
      </RootModal>
      <RootModal
        isOpen={globalProjectState.isModalOpen}
        onClose={() => dispatch(closeProjectUpdate())}
      >
        <UpdateProjectForm></UpdateProjectForm>
      </RootModal>
      {isLoading ? (
        <RotatingLoader></RotatingLoader>
      ) : projects?.pagination?.totalCount === 0 ? (
        <NothingFound text="No projects found"></NothingFound>
      ) : (
        <>
          <div className="h-[50vh] overflow-auto">
            <div className="grid grid-cols-1 items-stretch md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {projects?.data?.map((project) => (
                <ProjectCard key={project.id} project={project}></ProjectCard>
              ))}
            </div>
          </div>

          <PaginationComponent
            currentPage={currentPage}
            total={projects?.pagination?.totalPages ?? 0}
            onChange={setCurrentPage}
          ></PaginationComponent>
        </>
      )}
    </ContainerSection>
  );
}

export default AdminProjectsSection;
