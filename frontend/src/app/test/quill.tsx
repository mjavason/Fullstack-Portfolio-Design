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
      const ImageResize = (await import('quill-image-resize')).default;

      Quill.register('modules/imageResize', ImageResize);
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
            [{ font: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['link', 'image', 'video'],
            ['clean'],
            ['code-block'],
          ],
          imageResize: {
            displayStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white',
            },
            modules: ['Resize', 'DisplaySize', 'Toolbar'],
          },
        },
      });

      // Image Upload Handler
      quill.getModule('toolbar').addHandler('image', () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = () => {
          const file = input.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              const base64Image = e.target?.result;
              const range = quill.getSelection();
              if (range) {
                quill.insertEmbed(range.index, 'image', base64Image);
              }
            };
            reader.readAsDataURL(file);
          }
        };
      });
      // Sync changes to parent component
      quill.on('text-change', () => {
        setValue(quill.root.innerHTML);
      });
    }
  }, [QuillInstance, setValue]);

  return <div ref={editorRef} />;
};

export default QuillEditor;
