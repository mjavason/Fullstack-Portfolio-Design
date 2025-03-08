import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from './baseApi';

const reducers = {
  api: baseApi.reducer,
  // accountSetup: accountSetup.reducer,
};

export const combineReducer = combineReducers<typeof reducers>(reducers);
