import { createSlice } from '@reduxjs/toolkit';

interface LoadingState {
  activeRequests: number;
}

const initialState: LoadingState = {
  activeRequests: 0,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading(state) {
      state.activeRequests += 1;
    },
    stopLoading(state) {
      state.activeRequests = Math.max(0, state.activeRequests - 1);
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;
