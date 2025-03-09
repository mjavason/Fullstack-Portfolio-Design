'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Textarea } from '@heroui/react';
import { PostFormData, postSchema } from './schema';
import { useCreatePostMutation } from '@/redux/api/posts';
import { toast } from 'react-toastify';

interface ModalProps {
  setIsModalOpen: (state: boolean) => void;
}

const PostForm: FC<ModalProps> = ({ setIsModalOpen }) => {
  const testing =
    'testing, testing, testing, testing, testing, testing, testing, testing, testing, testing, ';
  const [createPost, { isLoading }] = useCreatePostMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = async (data: any) => {
    data.categories = data.categories.split(',').map((cat: string) => cat.trim()); // Convert categories to array
    await createPost(data)
      .unwrap()
      .then((res) => {
        toast.success(res.message);
        console.log('Form Submitted:', data);
        setIsModalOpen(false);
      })
      .catch((err: any) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <>
      <h2 className="text-xl font-bold">Create Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3">
        <Input {...register('title')} value={testing} placeholder="Title" />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <Input
          {...register('categories')}
          value={testing}
          placeholder="Categories (comma-separated)"
        />
        {errors.categories && <p className="text-red-500">{errors.categories.message}</p>}

        <Textarea {...register('summary')} value={testing} placeholder="Summary" />
        {errors.summary && <p className="text-red-500">{errors.summary.message}</p>}

        <Textarea {...register('body')} value={testing} placeholder="Body" />
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}

        <div className="flex items-center space-x-2">
          <input type="checkbox" {...register('published')} />
          <label>Publish</label>
        </div>

        <Button isLoading={isLoading} type="submit" className="w-full bg-blue-500 text-white">
          Submit
        </Button>
      </form>
    </>
  );
};

export default PostForm;
