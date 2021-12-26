import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { reducer as termReducer } from '../services/term/termAPI';

export const store = configureStore({
  reducer: {
    term: termReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
