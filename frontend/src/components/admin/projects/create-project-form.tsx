'use client';

import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Textarea } from '@heroui/react';
import { ProjectFormData, projectSchema } from './schema';
import { useCreateProjectMutation } from '@/redux/api/projects';
import { toast } from 'react-toastify';
import QuillEditorWithImage from '@/components/text-editor/quill-with-image';
import { uploadImage } from '@/utils/upload-image';
import { getCookieValue } from '@/utils/cookies';
import { CookieType } from '@/config/enums';
import { Image } from '@heroui/react';
import { revalidateTagHelper } from '@/actions/revalidate';
import { tagTypes } from '@/redux/baseApi/tagTypes';

interface ModalProps {
  setIsModalOpen: (state: boolean) => void;
}

const ProjectForm: FC<ModalProps> = ({ setIsModalOpen }) => {
  const testing = '';
  const [body, setBody] = useState(testing);
  const [createProject, { isLoading }] = useCreateProjectMutation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState('');

  // Sync state variable with the form field
  useEffect(() => {
    setValue('coverImage', fileUrl);
    setValue('body', body);
  }, [fileUrl, setFileUrl, body, setValue]);

  const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const token = (await getCookieValue(CookieType.Token)) ?? '';
    const imageUrl = await uploadImage(file, token);
    if (!imageUrl.success) {
      setUploading(false);
      return toast.error(imageUrl.error);
    } else {
      setFileUrl(imageUrl.url as string);
      setUploading(false);
      return toast.success('Image uploaded successfully!');
    }
  };

  const onSubmit = async (data: ProjectFormData) => {
    revalidateTagHelper(tagTypes.PROJECTS);

    await createProject(data)
      .unwrap()
      .then((res) => {
        toast.success(res.message);
        // console.log('Form Submitted:', data);
        setIsModalOpen(false);
      })
      .catch((err: { message: string }) => {
        // console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <>
      <h2 className="text-xl font-bold">Create Project</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-4 space-y-3">
        <Input
          label="Title"
          variant={'bordered'}
          {...register('title')}
          defaultValue={testing}
          isInvalid={errors.title ? true : false}
          errorMessage={errors?.title?.message}
        />

        <Input
          label="Category"
          variant={'bordered'}
          {...register('category')}
          defaultValue={testing}
          isInvalid={errors.title ? true : false}
          errorMessage={errors?.category?.message}
        />

        <Textarea
          label="Summary"
          variant={'bordered'}
          size="sm"
          {...register('summary')}
          defaultValue={testing}
          isInvalid={errors.summary ? true : false}
          errorMessage={errors?.summary?.message}
        />

        <div>
          <Input
            label="Cover Image"
            id="coverImage"
            type="file"
            accept="image/*"
            onChange={onFileChange}
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
          />
          {uploading && <p className="text-sm text-gray-500 mt-1">Uploading...</p>}
          {fileUrl && (
            <div className="mt-2 w-full flex gap-2 items-center">
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline ml-1"
              >
                <Image
                  src={fileUrl}
                  alt="Uploaded file preview"
                  className="mt-2 max-w-[96px] h-auto rounded-lg"
                />
              </a>
            </div>
          )}

          <Input
            type="hidden"
            label="Cover Image"
            variant={'bordered'}
            {...register('coverImage')}
          />
          {errors.coverImage && (
            <div className="text-red-500 text-sm mt-1">{errors.coverImage.message}</div>
          )}
        </div>

        <div>
          <QuillEditorWithImage setValue={setBody}></QuillEditorWithImage>
          {/* Hidden Input - Syncs with Quill Editor */}
          <input type="text" {...register('body')} value={body} hidden readOnly />
          {errors.body && <div className="text-red-500 text-sm mt-1">{errors.body.message}</div>}
        </div>

        <div className="flex justify-end space-x-2">
          <input id="published" type="checkbox" {...register('published')} />
          <label htmlFor="published">Publish</label>
        </div>

        <Button isLoading={isLoading} type="submit" className="w-full bg-accent-primary text-white">
          Submit
        </Button>
      </form>
    </>
  );
};

export default ProjectForm;
