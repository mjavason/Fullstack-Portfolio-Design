'use client';

import { toast } from 'react-toastify';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';
import { useAppDispatch } from '@/redux/hooks';
import { startLoading, stopLoading } from '@/redux/slices/loading-slice';
import paths from '@/config/constants/paths';
import { revalidateServerTag } from '@/actions/revalidate';
import { tagTypes } from '@/redux/baseApi/tagTypes';
import { useDeletePostsMutation } from '@/redux/api/posts';
import { initiatePostUpdate } from '@/redux/slices/post-slice';

interface IPostCardDropDownProps {
  post: IPost;
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
        revalidateServerTag(tagTypes.POSTS);
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
        <i className="fas fa-ellipsis-v text-primary cursor-pointer absolute right-3 p-3 z-20 rounded-lg backdrop-blur-sm" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem
          key="update"
          onPress={() => dispatch(initiatePostUpdate({ post: props.post }))}
        >
          Update
        </DropdownItem>
        <DropdownItem key="preview" href={paths.blogDetails(props.post.id)}>
          Preview
        </DropdownItem>
        <DropdownItem key="delete" color="danger" onPress={onClickDelete}>
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default PostCardDropDown;
