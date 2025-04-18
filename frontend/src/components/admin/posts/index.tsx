'use client';

import { useEffect, useState } from 'react';
import RootModal from '@/components/root-modal';
import CreatePostForm from './create-post-form';
import UpdatePostForm from './update-post-form';
import PageHeaderAdmin from '../page-header-admin';
import ContainerSection from '@/components/container';
import { useFetchPostsAdvancedQuery } from '@/redux/api/posts';
import RotatingLoader from '@/components/rotating-loader';
import NothingFound from '@/components/nothing-found';
import PaginationComponent from '@/components/pagination';
import PostCard from './card';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { closePostUpdate } from '@/redux/slices/post-slice';
import { postFieldOptions } from '@/config/constants/post';

function AdminPostsSection() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const searchValue = useAppSelector((state) => state.search.value);
  const { data: posts, isLoading } = useFetchPostsAdvancedQuery({
    searchTerm: searchValue,
    fields: postFieldOptions,
    pagination_page: currentPage,
  });
  const globalPostState = useAppSelector((state) => state.post.updatePost);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue]);

  return (
    <ContainerSection>
      <PageHeaderAdmin
        pageTitle="Posts"
        setIsCreateModalOpen={setIsCreateModalOpen}
      ></PageHeaderAdmin>
      <RootModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)}>
        <CreatePostForm setIsModalOpen={setIsCreateModalOpen}></CreatePostForm>
      </RootModal>
      <RootModal isOpen={globalPostState.isModalOpen} onClose={() => dispatch(closePostUpdate())}>
        <UpdatePostForm></UpdatePostForm>
      </RootModal>
      {isLoading ? (
        <RotatingLoader></RotatingLoader>
      ) : posts?.pagination?.totalCount === 0 ? (
        <NothingFound text="No posts found"></NothingFound>
      ) : (
        <>
          <div className="h-[50vh] overflow-auto scrollbar-thin-custom">
            <div className="grid grid-cols-1 items-stretch md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {posts?.data?.map((post) => <PostCard key={post.id} post={post}></PostCard>)}
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
