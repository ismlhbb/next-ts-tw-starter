import { createSlice } from '@reduxjs/toolkit';

import { Pokemon } from 'models/Example';
import { Meta } from 'models/Meta';
import { ReduxUtils } from 'utils/redux';

import { editExampleData, getExampleData } from './example.thunks';

export interface ExampleState {
  currentRunningOperation: string;
  meta: Meta;
  exampleData: Pokemon[] | unknown;
}

const initialState: ExampleState = {
  currentRunningOperation: 'idle',
  meta: { code: '', message: '' },
  exampleData: [],
};

const SLICE_NAME = '@example';

export const exampleSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getExampleData.fulfilled, (state, action) => {
        state.currentRunningOperation = 'idle';
        state.exampleData = action.payload;
      })
      .addCase(editExampleData.fulfilled, (state) => {
        state.currentRunningOperation = 'idle';
      })
      .addMatcher(ReduxUtils.isPendingAction(SLICE_NAME), (state, action) => {
        state.currentRunningOperation = action.type;
        state.exampleData = initialState.exampleData;
        state.meta = initialState.meta;
      })
      .addMatcher(ReduxUtils.isRejectedAction(SLICE_NAME), (state, action) => {
        state.currentRunningOperation = 'idle';
        state.meta = {
          code: action.payload?.code || '',
          message: action.payload?.message || '',
        };
      })
      .addDefaultCase((state) => {
        state.currentRunningOperation = 'idle';
      });
  },
});

export const exampleActions = exampleSlice.actions;
export default exampleSlice.reducer;
