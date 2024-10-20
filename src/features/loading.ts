import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingProps {
  [key: string]: boolean;
}

const initialState: LoadingProps = {};

const LoadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading: (state: LoadingProps, { payload }: PayloadAction<string>) => ({
      ...state,
      payload: true
    }),
    finishLoading: (state: LoadingProps, { payload }: PayloadAction<string>) => ({
      ...state,
      payload: false
    })
  }
});

export const { startLoading, finishLoading } = LoadingSlice.actions;
export default LoadingSlice.reducer;