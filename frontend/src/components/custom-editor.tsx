'use client';

import React, { useEffect, useRef, useState } from 'react';
import 'quill/dist/quill.snow.css';

interface QuillEditorProps {
  setValue: (content: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ setValue }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [QuillInstance, setQuillInstance] = useState<any>(null);

  useEffect(() => {
    const loadQuill = async () => {
      const { default: Quill } = await import('quill');
      setQuillInstance(() => Quill);
    };

    loadQuill();
  }, []);

  useEffect(() => {
    if (QuillInstance && editorRef.current) {
      const quill = new QuillInstance(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['link', 'image', 'video'],
          ],
        },
      });

      // Sync changes to parent component
      quill.on('text-change', () => {
        setValue(quill.root.innerHTML);
      });
    }
  }, [QuillInstance, setValue]);

  return <div ref={editorRef} className="border rounded-md p-2 min-h-[200px]" />;
};

export default QuillEditor;
