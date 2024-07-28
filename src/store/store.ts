import { combineReducers, configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./reducers/darkModeSlice";
import activeWindowReducer from "./reducers/activeWindowSlice";
import systemSettingsSlice from "./reducers/systemSettingsSlice";

const systemReducer = combineReducers({
  darkMode: darkModeReducer,
  activeWindow: activeWindowReducer,
  settings: systemSettingsSlice,
});

export const store = configureStore({
  reducer: {
    system: systemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
