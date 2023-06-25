import { RootState } from "../../app/store";

export const selectUser = (state: RootState) => state.imagineApp.user;
export const selectIsAdmin = (state: RootState) => state.imagineApp.isAdmin;
