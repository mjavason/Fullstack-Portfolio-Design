import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<{ value: string }>) {
      state.value = action.payload.value;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;
