import { configureStore } from "@reduxjs/toolkit";
import systemSettingsSlice from "./reducers/systemSettingsSlice";
import windowSlice from "./reducers/windowSlice";

export const store = configureStore({
  reducer: {
    systemSettings: systemSettingsSlice,
    window: windowSlice,
  },
});

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
