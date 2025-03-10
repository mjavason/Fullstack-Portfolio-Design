'use client';

import { FC } from 'react';
import { useForm /* useFieldArray*/ } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Textarea } from '@heroui/react';
import { PostFormData, postSchema } from './schema';
import { useCreatePostMutation } from '@/redux/api/posts';
import { toast } from 'react-toastify';

interface ModalProps {
  setIsModalOpen: (state: boolean) => void;
}

const PostForm: FC<ModalProps> = ({ setIsModalOpen }) => {
  const testing = '';
  const [createPost, { isLoading }] = useCreatePostMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = async (data: PostFormData) => {
    await createPost({
      title: data.title,
      summary: data.summary,
      categories: data.categories.split(',').map((cat: string) => cat.trim()),
      body: data.body,
      published: data.published ? true : false,
    })
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
      <h2 className="text-xl font-bold">Create Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3">
        <Input
          label="Title"
          variant={'bordered'}
          {...register('title')}
          defaultValue={testing}
          isInvalid={errors.title ? true : false}
          errorMessage={errors?.title?.message}
        />

        <Input
          label="Categories"
          variant={'bordered'}
          {...register('categories')}
          defaultValue={testing}
          isInvalid={errors.categories ? true : false}
          errorMessage={errors?.categories?.message}
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

        <Textarea
          label="Body"
          variant={'bordered'}
          size="lg"
          {...register('body')}
          defaultValue={testing}
          isInvalid={errors.body ? true : false}
          errorMessage={errors?.body?.message}
        />

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

export default PostForm;
