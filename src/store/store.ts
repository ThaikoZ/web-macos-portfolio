import { configureStore } from "@reduxjs/toolkit";
import systemSettingsSlice from "./systemSettingsSlice";

export const store = configureStore({
  reducer: {
    systemSettings: systemSettingsSlice,
  },
});

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
