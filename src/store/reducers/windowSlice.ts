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
      const windowIndex = state.openedWindows.findIndex(
        (window) => window.id === id
      );

      if (windowIndex !== -1) {
        const windowToMove = state.openedWindows[windowIndex];
        const newOpenedWindows = [
          ...state.openedWindows.slice(0, windowIndex),
          ...state.openedWindows.slice(windowIndex + 1),
          windowToMove,
        ];

        return {
          ...state,
          openedWindows: newOpenedWindows,
          activeWindow: windowToMove,
        };
      }

      return {
        ...state,
        activeWindow: DEFAULT_OPENED_WINDOW,
      };
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
      const id = action.payload;
      const openedWindows = state.openedWindows.filter(
        (window) => window.id !== id
      );

      const activeWindow =
        state.activeWindow.id === id
          ? openedWindows[openedWindows.length - 1] || DEFAULT_OPENED_WINDOW
          : state.activeWindow;

      return { ...state, openedWindows, activeWindow };
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
