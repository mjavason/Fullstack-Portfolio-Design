'use client';

import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Textarea } from '@heroui/react';
import { PostFormData, postSchema } from './schema';
import { useUpdatePostMutation } from '@/redux/api/posts';
import { toast } from 'react-toastify';
import { extractFieldValues } from '@/utils/extract-field-values';
import QuillEditorWithImage from '@/components/text-editor/quill-with-image';
import { revalidateTagHelper } from '@/actions/revalidate';
import { tagTypes } from '@/redux/baseApi/tagTypes';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { closePostUpdate } from '@/redux/slices/post-slice';

const UpdatePostForm = () => {
  const [body, setBody] = useState('');
  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const dispatch = useAppDispatch();
  const postToUpdate = useAppSelector((state) => state.post.updatePost.postToUpdate);
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PostFormData>({
    defaultValues: {
      categories: postToUpdate?.categories.map((category) => ({ category })),
      title: postToUpdate?.title,
      summary: postToUpdate?.summary,
      body: postToUpdate?.body,
      published: postToUpdate?.published,
    },
    resolver: zodResolver(postSchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'categories', // Matches the field name pattern
  });

  // Sync state variable with the form field
  useEffect(() => {
    setValue('body', body);
  }, [body, setValue]);

  const onSubmit = async (data: PostFormData) => {
    await updatePost({
      postId: postToUpdate!.id,
      update: {
        title: data.title,
        summary: data.summary,
        categories: extractFieldValues(data.categories, 'category'),
        body: data.body,
        published: data.published ? true : false,
      },
    })
      .unwrap()
      .then((res) => {
        revalidateTagHelper(tagTypes.POSTS);
        toast.success(res.message);
        // console.log('Form Submitted:', data);
        dispatch(closePostUpdate());
      })
      .catch((err: { message: string }) => {
        // console.log(err);
        toast.error(err.message);
      });
  };

  return (
    <>
      <h2 className="text-xl font-bold">Update Post</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-4 space-y-3">
        <Input
          label="Title"
          variant={'bordered'}
          {...register('title')}
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
          <Button className="mt-3" type="button" onPress={() => append({ category: '' })}>
            Add
          </Button>
        </div>

        <Textarea
          label="Summary"
          variant={'bordered'}
          size="sm"
          {...register('summary')}
          isInvalid={errors.summary ? true : false}
          errorMessage={errors?.summary?.message}
        />

        <div>
          <QuillEditorWithImage
            setValue={setBody}
            initialValue={postToUpdate?.body}
          ></QuillEditorWithImage>
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

export default UpdatePostForm;
