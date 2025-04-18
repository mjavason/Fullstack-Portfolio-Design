import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPostUpdateState {
  isModalOpen: boolean;
  postToUpdate: IPost | null;
}

const updatePost: IPostUpdateState = {
  isModalOpen: false,
  postToUpdate: null,
};

const initialState = {
  updatePost,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    initiatePostUpdate(state, action: PayloadAction<{ post: IPost }>) {
      state.updatePost.isModalOpen = true;
      state.updatePost.postToUpdate = action.payload.post;
    },
    closePostUpdate(state) {
      state.updatePost = updatePost;
    },
  },
});

export const { initiatePostUpdate, closePostUpdate } = postSlice.actions;
