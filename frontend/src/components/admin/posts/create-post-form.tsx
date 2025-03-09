import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Textarea } from '@heroui/react';
import { PostFormData, postSchema } from './schema';

interface ModalProps {
  setIsModalOpen: (state: boolean) => void;
}

const PostForm: FC<ModalProps> = ({ setIsModalOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = (data: any) => {
    data.categories = data.categories.split(',').map((cat: string) => cat.trim()); // Convert categories to array
    console.log('Form Submitted:', data);
    setIsModalOpen(false);
  };

  return (
    <>
      <h2 className="text-xl font-bold">Create Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-3">
        <Input {...register('title')} placeholder="Title" />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <Input {...register('categories')} placeholder="Categories (comma-separated)" />
        {errors.categories && <p className="text-red-500">{errors.categories.message}</p>}

        <Textarea {...register('summary')} placeholder="Summary" />
        {errors.summary && <p className="text-red-500">{errors.summary.message}</p>}

        <Textarea {...register('body')} placeholder="Body" />
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}

        <div className="flex items-center space-x-2">
          <input type="checkbox" {...register('published')} />
          <label>Publish</label>
        </div>

        <Button type="submit" className="w-full bg-blue-500 text-white">
          Submit
        </Button>
      </form>
    </>
  );
};

export default PostForm;
