import { combineReducer } from '@/redux';
import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './baseApi';

export const makeStore = () => {
  return configureStore({
    reducer: combineReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
