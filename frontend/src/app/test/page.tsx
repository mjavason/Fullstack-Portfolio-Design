'use client';

import React from 'react';
import QuillEditor from '@/components/custom-editor';

const EditorPage: React.FC = () => {
  function setValue(content: string) {
    console.log(content);
  }

  return (
    <div>
      <h1>Quill Editor with Image Upload</h1>
      <QuillEditor setValue={setValue} />
    </div>
  );
};

export default EditorPage;
