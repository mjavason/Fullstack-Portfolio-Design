'use client';

import { useEffect, useRef } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';

interface EditorProps {
  onChange: (data: OutputData) => void;
  initialData?: OutputData;
}

export default function Editor({ onChange, initialData }: EditorProps) {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new EditorJS({
        holder: 'editor',
        tools: {
          paragraph: Paragraph,
          header: Header,
          list: List,
        },
        data: initialData || { blocks: [] },
        onChange: async () => {
          const data = await editorRef.current?.save();
          if (data) onChange(data);
        },
      });
    }

    return () => {
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, []);

  return <div id="editor" className="p-4 border rounded-md"></div>;
}
