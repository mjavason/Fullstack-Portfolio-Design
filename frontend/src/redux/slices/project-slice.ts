import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IProjectUpdateState {
  isModalOpen: boolean;
  projectToUpdate: IProject | null;
}

const updateProject: IProjectUpdateState = {
  isModalOpen: false,
  projectToUpdate: null,
};

const initialState = {
  updateProject,
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    initiateProjectUpdate(state, action: PayloadAction<{ project: IProject }>) {
      state.updateProject.isModalOpen = true;
      state.updateProject.projectToUpdate = action.payload.project;
    },
    closeProjectUpdate(state) {
      state.updateProject = updateProject;
    },
  },
});

export const { initiateProjectUpdate, closeProjectUpdate } = projectSlice.actions;
