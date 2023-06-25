import { createReducer } from "@reduxjs/toolkit";

import { setCurrentUserSession } from "./imagine-app.actions";
import { User } from "../../models/interfaces/ImagineApps";

interface ImagineAppInitialState {
  user: User | null;
  isAdmin: boolean;
}
const initialState: ImagineAppInitialState = {
  user: null,
  isAdmin: false,
};

export const imagineAppReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCurrentUserSession, (state, action) => {
    console.log(
      "🚀 ~ file: imagine-app.reducer.ts:16 ~ builder.addCase ~ action.payload?.uid:",
      action.payload?.uid
    );
    console.log(
      "🚀 ~ file: imagine-app.reducer.ts:16 ~ builder.addCase ~ import.meta.env.VITE_ADMINUID:",
      import.meta.env.VITE_ADMINUID
    );
    const isAdmin = import.meta.env.VITE_ADMINUID === action.payload?.uid;
    console.log(
      "🚀 ~ file: imagine-app.reducer.ts:20 ~ builder.addCase ~ isAdmin:",
      isAdmin
    );
    return {
      ...state,
      user: action.payload,
      isAdmin,
    };
  });
});
