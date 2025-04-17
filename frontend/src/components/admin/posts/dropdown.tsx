'use client';

import { toast } from 'react-toastify';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';
import { useAppDispatch } from '@/redux/hooks';
import { startLoading, stopLoading } from '@/redux/slices/loading-slice';
import paths from '@/config/constants/paths';
import { revalidateTagHelper } from '@/actions/revalidate';
import { tagTypes } from '@/redux/baseApi/tagTypes';
import { useDeletePostsMutation } from '@/redux/api/posts';

interface IPostCardDropDownProps {
  post: IPost;
  onPostUpdate: (post: IPost) => void;
}

function PostCardDropDown(props: IPostCardDropDownProps) {
  const [deletePost] = useDeletePostsMutation();
  const dispatch = useAppDispatch();

  async function onClickDelete() {
    dispatch(startLoading());
    await deletePost({
      postId: props.post.id,
    })
      .unwrap()
      .then((res) => {
        revalidateTagHelper(tagTypes.POSTS);
        toast.success(res.message);
        // console.log('Form Submitted:', data);
      })
      .catch((err: { message: string }) => {
        // console.log(err);
        toast.error(err.message);
      })
      .finally(() => {
        dispatch(stopLoading());
      });
  }

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <i className="fas fa-ellipsis-h text-primary cursor-pointer absolute right-3 top-3" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="preview" href={paths.blogDetails(props.post.id)}>
          Preview
        </DropdownItem>
        <DropdownItem key="update" onPress={() => props.onPostUpdate(props.post)}>
          Update
        </DropdownItem>
        <DropdownItem key="delete" color="danger" onPress={onClickDelete}>
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default PostCardDropDown;
