'use client';

import { FC } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Textarea } from '@heroui/react';
import { PostFormData, postSchema } from './schema';
import { useCreatePostMutation } from '@/redux/api/posts';
import { toast } from 'react-toastify';
import { extractFieldValues } from '@/utils/extract-field-values';

interface ModalProps {
  setIsModalOpen: (state: boolean) => void;
}

const PostForm: FC<ModalProps> = ({ setIsModalOpen }) => {
  const testing = '';
  const [createPost, { isLoading }] = useCreatePostMutation();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    defaultValues: { categories: [{ category: '' }] },
    resolver: zodResolver(postSchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'categories', // Matches the field name pattern
  });

  const onSubmit = async (data: PostFormData) => {
    await createPost({
      title: data.title,
      summary: data.summary,
      categories: extractFieldValues(data.categories, 'category'),
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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-4 space-y-3">
        <Input
          label="Title"
          variant={'bordered'}
          {...register('title')}
          defaultValue={testing}
          isInvalid={errors.title ? true : false}
          errorMessage={errors?.title?.message}
        />

        <div>
          <div className="flex flex-col gap-2 justify-start">
            {fields.map((field, index) => (
              <div key={field.id}>
                <Input
                  label="Categories"
                  variant={'bordered'}
                  {...register(`categories.${index}.category`)}
                  defaultValue={testing}
                  isInvalid={errors?.categories?.[index]?.category ? true : false}
                  errorMessage={errors?.categories?.[index]?.category?.message}
                  endContent={
                    <div className="h-full flex align-middle">
                      <button type="button" onClick={() => remove(index)}>
                        ✖
                      </button>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
          <Button className="mt-3" type="button" onClick={() => append({ category: '' })}>
            Add
          </Button>
        </div>

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
