import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import exampleReducer from 'components/example/example.reducer';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
  devTools: process.env.NEXT_PUBLIC_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
