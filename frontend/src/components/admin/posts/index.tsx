'use client';

import { useState } from 'react';
import RootModal from '@/components/root-modal';
import PostForm from './create-post-form';
import PageHeaderAdmin from '../page-header-admin';
import ContainerSection from '@/components/container';
import { useFetchPostsQuery } from '@/redux/api/posts';
import { truncate } from '@/utils/string';
import { Pagination } from '@heroui/react';

function AdminPostsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: posts, isLoading } = useFetchPostsQuery({ pagination_page: currentPage });

  return (
    <ContainerSection>
      <PageHeaderAdmin pageTitle="Posts" setIsModalOpen={setIsModalOpen}></PageHeaderAdmin>
      <RootModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <PostForm setIsModalOpen={setIsModalOpen}></PostForm>
      </RootModal>
      {isLoading ? (
        <div className="flex justify-center items-center h-full w-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent-primary"></div>
        </div>
      ) : posts?.pagination?.totalCount === 0 ? (
        <div className="flex justify-center items-center h-full w-full">
          <h2 className="text-gray-400 text-lg">No posts found</h2>
        </div>
      ) : (
        <>
          <div className="h-[50vh] overflow-auto">
            <div className="grid grid-cols-1 items-stretch md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {posts?.data?.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col justify-between w-full p-3 shadow-md min-h-16"
                >
                  <h3 className="text-black text-lg mt-3 break-words">{post.title}</h3>
                  <h5 className="text-gray-400 text-sm">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </h5>
                  <p className="text-black text-sm my-3">{truncate(post.summary, 50)}</p>
                  <span className="text-accent-primary">
                    {Math.floor(Math.random() * 50) + 1}+ Clicks
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-5">
            <Pagination
              variant="light"
              color="primary"
              page={currentPage}
              total={posts?.pagination?.totalPages ?? 0}
              onChange={setCurrentPage}
            />
          </div>
        </>
      )}
    </ContainerSection>
  );
}

export default AdminPostsSection;
