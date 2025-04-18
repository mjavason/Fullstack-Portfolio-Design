'use client';

import { toast } from 'react-toastify';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';
import { useAppDispatch } from '@/redux/hooks';
import { startLoading, stopLoading } from '@/redux/slices/loading-slice';
import paths from '@/config/constants/paths';
import { revalidateServerTag } from '@/actions/revalidate';
import { tagTypes } from '@/redux/baseApi/tagTypes';
import { useDeleteProjectsMutation } from '@/redux/api/projects';
import { initiateProjectUpdate } from '@/redux/slices/project-slice';

interface IProjectCardDropDownProps {
  project: IProject;
}

function ProjectCardDropDown(props: IProjectCardDropDownProps) {
  const [deleteProject] = useDeleteProjectsMutation();
  const dispatch = useAppDispatch();

  async function onClickDelete() {
    dispatch(startLoading());
    await deleteProject({
      projectId: props.project.id,
    })
      .unwrap()
      .then((res) => {
        revalidateServerTag(tagTypes.PROJECTS);
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
        <i className="fas fa-ellipsis-v text-primary cursor-pointer absolute right-3 top-3 p-3 z-20" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem
          key="update"
          onPress={() => dispatch(initiateProjectUpdate({ project: props.project }))}
        >
          Update
        </DropdownItem>
        <DropdownItem key="preview" href={paths.workDetails(props.project.id)}>
          Preview
        </DropdownItem>
        <DropdownItem key="delete" color="danger" onPress={onClickDelete}>
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default ProjectCardDropDown;
