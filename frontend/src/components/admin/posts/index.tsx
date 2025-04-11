'use client';

import { useState } from 'react';
import RootModal from '../../root-modal';
import PostForm from './create-post-form';
import PageHeaderAdmin from '../page-header-admin';
import ContainerSection from '@/components/container';
import { useFetchPostsQuery } from '@/redux/api/posts';
import { truncate } from '@/utils/string';

// TODO: Update happens when you click on a post or project.
//  As the user types, updates are saved automatically.
//  There should be a button to preview the work.
//  The preview is simply redirecting them to client side as usual.
//  A delete button should be there as well.
//  Maybe a publish/unpublish button as well.
//  Don't forget the TinyMCE text editor.
//  There should also be a settings page to update the picture and social media links that show on the client side.
//  Also don't forget to implement search.

function AdminPostsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: posts, isLoading } = useFetchPostsQuery({});

  return (
    <ContainerSection>
      <PageHeaderAdmin pageTitle="Posts" setIsModalOpen={setIsModalOpen}></PageHeaderAdmin>
      <RootModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <PostForm setIsModalOpen={setIsModalOpen}></PostForm>
      </RootModal>
      {isLoading && (
        <div className="flex justify-center items-center h-full w-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent-primary"></div>
        </div>
      )}

      <div className="grid grid-cols-1 items-stretch md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {posts?.data?.map((post) => (
          <div key={post.id} className="flex flex-col justify-between w-full p-3 shadow-md">
            <h3 className="text-black text-lg mt-3">{truncate(post.title, 20)}</h3>
            <h5 className="text-gray-400 text-sm">
              {new Date(post.createdAt).toLocaleDateString()}
            </h5>
            <p className="text-black text-sm my-3">{truncate(post.summary, 20)}</p>
            <span className="text-accent-primary">
              {Math.floor(Math.random() * 50) + 1}+ Clicks
            </span>
          </div>
        ))}
      </div>
    </ContainerSection>
  );
}

export default AdminPostsSection;
