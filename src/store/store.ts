import { combineReducers, configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./reducers/darkModeSlice";
import activeWindowReducer from "./reducers/activeWindowSlice";

const systemReducer = combineReducers({
  darkMode: darkModeReducer,
  activeWindow: activeWindowReducer,
});

export const store = configureStore({
  reducer: {
    system: systemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
