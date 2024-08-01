import { configureStore } from "@reduxjs/toolkit";
import systemSettingsSlice from "./reducers/systemSettingsSlice";

export const store = configureStore({
  reducer: {
    systemSettings: systemSettingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
