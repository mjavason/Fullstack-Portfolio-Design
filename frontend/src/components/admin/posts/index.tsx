'use client';

import { useState } from 'react';
import RootModal from '@/components/root-modal';
import CreatePostForm from './create-post-form';
import UpdatePostForm from './update-post-form';
import PageHeaderAdmin from '../page-header-admin';
import ContainerSection from '@/components/container';
import { useFetchPostsQuery } from '@/redux/api/posts';
import RotatingLoader from '@/components/rotating-loader';
import NothingFound from '@/components/nothing-found';
import PaginationComponent from '@/components/pagination';
import PostCard from './card';

function AdminPostsSection() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: posts, isLoading } = useFetchPostsQuery({ pagination_page: currentPage });
  const [postToUpdate, setPostToUpdate] = useState<IPost | null>(null);

  function onPostUpdate(post: IPost) {
    setPostToUpdate(post);
    setIsUpdateModalOpen(true);
  }

  function onPostUpdateModalClose() {
    setIsUpdateModalOpen(false);
    setPostToUpdate(null);
  }

  return (
    <ContainerSection>
      <PageHeaderAdmin
        pageTitle="Posts"
        setIsCreateModalOpen={setIsCreateModalOpen}
      ></PageHeaderAdmin>
      <RootModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)}>
        <CreatePostForm setIsModalOpen={setIsCreateModalOpen}></CreatePostForm>
      </RootModal>
      <RootModal isOpen={isUpdateModalOpen} onClose={onPostUpdateModalClose}>
        <UpdatePostForm setIsModalOpen={setIsUpdateModalOpen} post={postToUpdate}></UpdatePostForm>
      </RootModal>
      {isLoading ? (
        <RotatingLoader></RotatingLoader>
      ) : posts?.pagination?.totalCount === 0 ? (
        <NothingFound text="No posts found"></NothingFound>
      ) : (
        <>
          <div className="h-[50vh] overflow-auto scrollbar-thin-custom">
            <div className="grid grid-cols-1 items-stretch md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {posts?.data?.map((post) => (
                <PostCard onPostUpdate={onPostUpdate} key={post.id} post={post}></PostCard>
              ))}
            </div>
          </div>

          <PaginationComponent
            currentPage={currentPage}
            total={posts?.pagination?.totalPages ?? 0}
            onChange={setCurrentPage}
          ></PaginationComponent>
        </>
      )}
    </ContainerSection>
  );
}

export default AdminPostsSection;
