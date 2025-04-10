'use client';

import ContainerSection from '@/components/container';
import { Image } from '@heroui/react';
import PageHeaderAdmin from '../page-header-admin';
import { useState } from 'react';
import ProjectForm from '../projects/create-project-form';
import RootModal from '@/components/root-modal';

function AdminProjectsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ContainerSection>
      <PageHeaderAdmin pageTitle="Projects" setIsModalOpen={setIsModalOpen}></PageHeaderAdmin>
      <RootModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProjectForm setIsModalOpen={setIsModalOpen}></ProjectForm>
      </RootModal>
      <div className="grid grid-cols-1 items-stretch md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        <div className="flex flex-col justify-between w-full p-3 shadow-md">
          <div className="overflow-hidden">
            <Image
              className="object-cover w-full h-[256px] md:h-[128px] rounded-md"
              src="/images/featured/30.png"
              alt=""
              removeWrapper
              isZoomed
            />
          </div>
          <h3 className="text-black text-lg mt-3">Guide to Pro Photography</h3>
          <h5 className="text-gray-400 text-sm">16 March 2019</h5>
          <p className="text-black text-sm my-3">
            Let me start off by saying, you can do this! It will be hard work, but it isn&#39;t
            impossible
          </p>
          <span className="text-accent-primary">10+ Clicks</span>
        </div>
        <div className="flex flex-col justify-between w-full p-3 shadow-md">
          <div className="overflow-hidden">
            <Image
              className="w-full object-cover h-[256px] md:h-[128px] rounded-md"
              src="/images/featured/32.png"
              alt=""
              removeWrapper
              isZoomed
            />
          </div>
          <h3 className="text-black text-lg mt-3">Modern Industrial Design</h3>
          <h5 className="text-gray-400 text-sm">24 February 2025</h5>
          <p className="text-black text-sm my-3">
            Industrial designs require little furniture and more floor space. This design genre
            wants people to be able
          </p>
          <span className="text-accent-primary">12+ Clicks</span>
        </div>
        <div className="flex flex-col justify-between w-full p-3 shadow-md">
          <div className="overflow-hidden">
            <Image
              className="w-full object-cover h-[256px] md:h-[128px] rounded-md"
              src="/images/featured/34.png"
              alt=""
              removeWrapper
              isZoomed
            />
          </div>
          <h3 className="text-black text-lg mt-3">Learning Design Process</h3>
          <h5 className="text-gray-400 text-sm">06 April 2025</h5>
          <p className="text-black text-sm my-3">
            This involves a methodical integration of pedagogical and technological elements to
            enrich all learning
          </p>
          <span className="text-accent-primary">27+ Clicks</span>
        </div>
      </div>
    </ContainerSection>
  );
}

export default AdminProjectsSection;
