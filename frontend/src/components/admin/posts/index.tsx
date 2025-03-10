'use client';

import { Button } from '@heroui/button';
import { useState } from 'react';
import RootModal from '../../root-modal';
import PostForm from './create-post-form';

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

  return (
    <section className="bg-white flex flex-col gap-10 items-center md:px-10 min-h-[70vh]">
      {/* <!-- fourth row --> */}
      <div className="mt-10 px-5">
        <div className="flex justify-between align-middle w-full items-center py-5">
          <h2 className="text-5xl font-bold h-fit text-black">Posts</h2>
          <Button
            onPress={() => setIsModalOpen(true)}
            className="rounded-sm text-white bg-accent-primary px-5 py-2"
          >
            Create
          </Button>
        </div>
        <RootModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <PostForm setIsModalOpen={setIsModalOpen}></PostForm>
        </RootModal>
        <div className="grid grid-cols-1 items-stretch md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          <div className="flex flex-col justify-between w-full p-3 shadow-md">
            <h3 className="text-black text-lg mt-3">Guide to Pro Photography</h3>
            <h5 className="text-gray-400 text-sm">16 March 2019</h5>
            <p className="text-black text-sm my-3">
              Let me start off by saying, you can do this! It will be hard work, but it is&#39;nt
              impossible
            </p>
            <span className="text-accent-primary">10+ Clicks</span>
          </div>
          <div className="flex flex-col justify-between w-full p-3 shadow-md">
            <h3 className="text-black text-lg mt-3">Modern Industrial Design</h3>
            <h5 className="text-gray-400 text-sm">24 February 2025</h5>
            <p className="text-black text-sm my-3">
              Industrial designs require little furniture and more floor space. This design genre
              wants people to be able
            </p>
            <span className="text-accent-primary">12+ Clicks</span>
          </div>
          <div className="flex flex-col justify-between w-full p-3 shadow-md">
            <h3 className="text-black text-lg mt-3">Learning Design Process</h3>
            <h5 className="text-gray-400 text-sm">06 April 2025</h5>
            <p className="text-black text-sm my-3">
              This involves a methodical integration of pedagogical and technological elements to
              enrich all learning
            </p>
            <span className="text-accent-primary">27+ Clicks</span>
          </div>
          <div className="flex flex-col justify-between w-full p-3 shadow-md">
            <h3 className="text-black text-lg mt-3">Design Thinking Process</h3>
            <h5 className="text-gray-400 text-sm">04 December 2019</h5>
            <p className="text-black flex-1 text-sm my-3">
              Let me start off by saying, you can do this! It will be hard work, but it is&#39;nt
              impossible
            </p>
            <span className="text-accent-primary">30+ Clicks</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminPostsSection;
