import { createAction } from "@reduxjs/toolkit";
import { User } from "../../models/interfaces/ImagineApps";

export const setCurrentUserSession = createAction<User | null>(
  "imagineApp/setCurrentUserSession"
);
