import { DEFAULT_OPENED_WINDOW } from "@/constants/system";
import { WindowInterface } from "@/types/window";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SystemSettingsState {
  totalOpenedWindows: number;
  openedWindows: WindowInterface[];
  activeWindow: WindowInterface;
  isResizing: boolean;
  isMoving: boolean;
}

const initialState: SystemSettingsState = {
  totalOpenedWindows: 0,
  openedWindows: [],
  activeWindow: DEFAULT_OPENED_WINDOW,
  isResizing: false,
  isMoving: false,
};

const windowSlice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    setActiveWindow(state, action: PayloadAction<number>) {
      const id = action.payload;
      const window = state.openedWindows.find((window) => window.id === id);
      return { ...state, activeWindow: window || DEFAULT_OPENED_WINDOW };
    },
    setMoving(state, action: PayloadAction<boolean>) {
      return { ...state, isMoving: action.payload };
    },
    setResizing(state, action: PayloadAction<boolean>) {
      return { ...state, isResizing: action.payload };
    },
    openWindow(state, action: PayloadAction<string>) {
      const newWindow: WindowInterface = {
        id: state.totalOpenedWindows,
        title: action.payload,
      };
      return {
        ...state,
        totalOpenedWindows: state.totalOpenedWindows + 1,
        activeWindow: newWindow,
        openedWindows: [...state.openedWindows, newWindow],
      };
    },
    closeWindow(state, action: PayloadAction<number>) {
      const windowIdToRemove = action.payload;
      const openedWindows = state.openedWindows.filter(
        (window) => window.id !== windowIdToRemove
      );
      return { ...state, openedWindows };
    },
  },
});

export const {
  setActiveWindow,
  setMoving,
  setResizing,
  openWindow,
  closeWindow,
} = windowSlice.actions;

export default windowSlice.reducer;
