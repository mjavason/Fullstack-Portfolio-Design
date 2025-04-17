import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from './baseApi';
import { loadingSlice } from './slices/loading-slice';

const reducers = {
  api: baseApi.reducer,
  loading: loadingSlice.reducer,
};

export const combineReducer = combineReducers<typeof reducers>(reducers);
