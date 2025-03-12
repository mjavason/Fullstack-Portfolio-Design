'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import QuillEditor from '@/components/custom-editor';

const EditorPage: React.FC = () => {
  return (
    <div>
      <h1>Quill Editor with Image Upload</h1>
      <QuillEditor />
    </div>
  );
};

export default EditorPage;
