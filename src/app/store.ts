import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { imagineAppReducer } from "../reducers/imagine-apps/imagine-app.reducer";

export const store = configureStore({
  reducer: {
    imagineApp: imagineAppReducer,
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
