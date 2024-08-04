import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface App {
  id: number;
  title: string;
}

export interface SystemSettingsState {
  openedApps: App[];
  activeWindowTitle: string;
  isResizing: boolean;
  isMoving: boolean;
}

const initialState: SystemSettingsState = {
  openedApps: [],
  activeWindowTitle: "Finder",
  isResizing: false,
  isMoving: false,
};

const windowSlice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    setActiveWindow(state, action: PayloadAction<string>) {
      return { ...state, activeWindowTitle: action.payload };
    },
    setMoving(state, action: PayloadAction<boolean>) {
      return { ...state, isMoving: action.payload };
    },
    setResizing(state, action: PayloadAction<boolean>) {
      return { ...state, isResizing: action.payload };
    },
    openApp(state, action: PayloadAction<string>) {
      const newApp = {
        id: state.openedApps.length,
        title: action.payload,
      };
      return { ...state, openedApps: [...state.openedApps, newApp] };
    },
    closeApp(state, action: PayloadAction<string>) {
      const newOpenedApps = state.openedApps.filter(
        (app) => app.title !== action.payload
      );
      return { ...state, openedApps: newOpenedApps };
    },
  },
});

export const { setActiveWindow, setMoving, openApp, closeApp } =
  windowSlice.actions;

export default windowSlice.reducer;
