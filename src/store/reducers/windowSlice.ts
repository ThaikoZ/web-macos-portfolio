import { DEFAULT_OPENED_WINDOW } from "@/constants/system";
import { WindowInterface } from "@/types/window";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SystemSettingsState {
  totalOpenedWindows: number;
  activeWindow: WindowInterface;
  openedWindows: WindowInterface[];
  minimizedWindows: WindowInterface[];
  isResizing: boolean;
  isMoving: boolean;
}

const initialState: SystemSettingsState = {
  totalOpenedWindows: 0,
  openedWindows: [],
  activeWindow: DEFAULT_OPENED_WINDOW,
  isResizing: false,
  isMoving: false,
  minimizedWindows: [],
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
      const activeWindow =
        state.activeWindow.id === id
          ? DEFAULT_OPENED_WINDOW
          : state.activeWindow;
      const openedWindows = state.openedWindows.filter(
        (window) => window.id !== id
      );
      return { ...state, openedWindows, activeWindow };
    },
    minimizeWindow(state, action: PayloadAction<number>) {
      const id = action.payload;
      const windowIndex = state.openedWindows.findIndex(
        (window) => window.id === id
      );

      if (windowIndex !== -1) {
        const windowToMinimize = state.openedWindows[windowIndex];
        const newOpenedWindows = [
          ...state.openedWindows.slice(0, windowIndex),
          ...state.openedWindows.slice(windowIndex + 1),
        ];
        const newMinimizedWindows = [
          ...state.minimizedWindows,
          windowToMinimize,
        ];

        return {
          ...state,
          openedWindows: newOpenedWindows,
          minimizedWindows: newMinimizedWindows,
          activeWindow:
            state.activeWindow.id === id
              ? DEFAULT_OPENED_WINDOW
              : state.activeWindow,
        };
      }

      return state;
    },
    restoreWindow(state, action: PayloadAction<number>) {
      const id = action.payload;
      const windowIndex = state.minimizedWindows.findIndex(
        (window) => window.id === id
      );

      if (windowIndex !== -1) {
        const windowToRestore = state.minimizedWindows[windowIndex];
        const newMinimizedWindows = [
          ...state.minimizedWindows.slice(0, windowIndex),
          ...state.minimizedWindows.slice(windowIndex + 1),
        ];
        const newOpenedWindows = [...state.openedWindows, windowToRestore];

        return {
          ...state,
          minimizedWindows: newMinimizedWindows,
          openedWindows: newOpenedWindows,
          activeWindow: windowToRestore,
        };
      }

      return state;
    },
  },
});

export const {
  setActiveWindow,
  setMoving,
  setResizing,
  openWindow,
  closeWindow,
  minimizeWindow,
  restoreWindow,
} = windowSlice.actions;

export default windowSlice.reducer;
