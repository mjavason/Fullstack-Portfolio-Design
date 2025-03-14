'use client';

import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { uploadImage } from '@/utils/upload-image';
import 'quill/dist/quill.snow.css';
import { getCookieValue } from '@/utils/cookies';
import { CookieType } from '@/config/enums';

interface QuillEditorProps {
  setValue: (content: string) => void;
}

const QuillEditorWithImage: React.FC<QuillEditorProps> = ({ setValue }) => {
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

      quill.getModule('toolbar').addHandler('image', () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
          const file = input.files?.[0];
          if (!file) return;

          const token = (await getCookieValue(CookieType.Token)) ?? '';
          const imageUrl = await uploadImage(file, token);
          if (!imageUrl.success) return toast.error(imageUrl.error);

          const range = quill.getSelection();
          quill.insertEmbed(range.index, 'image', imageUrl.url);
        };
      });

      // Sync changes to parent component
      quill.on('text-change', () => {
        setValue(quill.root.innerHTML);
      });
    }
  }, [QuillInstance, setValue]);

  return <div ref={editorRef} className="border rounded-sm p-2 min-h-[200px]" />;
};

export default QuillEditorWithImage;
