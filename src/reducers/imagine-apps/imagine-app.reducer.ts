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
    const isAdmin = import.meta.env.VITE_ADMINUID === action.payload?.uid;
    return {
      ...state,
      user: action.payload,
      isAdmin,
    };
  });
});
