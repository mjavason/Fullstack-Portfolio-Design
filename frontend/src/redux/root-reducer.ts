import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from './baseApi';
import { loadingSlice } from './slices/loading-slice';
import { postSlice } from './slices/post-slice';

const reducers = {
  api: baseApi.reducer,
  loading: loadingSlice.reducer,
  post: postSlice.reducer,
};

export const combineReducer = combineReducers<typeof reducers>(reducers);
