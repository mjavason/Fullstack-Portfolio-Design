import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from './baseApi';
import { loadingSlice } from './slices/loading-slice';
import { postSlice } from './slices/post-slice';
import { projectSlice } from './slices/project-slice';
import { searchSlice } from './slices/search-slice';

const reducers = {
  api: baseApi.reducer,
  loading: loadingSlice.reducer,
  post: postSlice.reducer,
  project: projectSlice.reducer,
  search: searchSlice.reducer,
};

export const combineReducer = combineReducers<typeof reducers>(reducers);
