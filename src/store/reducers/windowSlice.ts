import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_OPENED_WINDOW } from "@/constants/system";
import { WindowInterface } from "@/types/window";

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

const findWindowIndexById = (windows: WindowInterface[], id: number) =>
  windows.findIndex((window) => window.id === id);

const moveWindowToEnd = (windows: WindowInterface[], index: number) => [
  ...windows.slice(0, index),
  ...windows.slice(index + 1),
  windows[index],
];

const removeWindowByIndex = (windows: WindowInterface[], index: number) => [
  ...windows.slice(0, index),
  ...windows.slice(index + 1),
];

const windowSlice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    setActiveWindow(state, action: PayloadAction<number>) {
      const windowIndex = findWindowIndexById(
        state.openedWindows,
        action.payload
      );

      if (windowIndex !== -1) {
        const newOpenedWindows = moveWindowToEnd(
          state.openedWindows,
          windowIndex
        );
        return {
          ...state,
          openedWindows: newOpenedWindows,
          activeWindow: newOpenedWindows[newOpenedWindows.length - 1],
        };
      }

      return {
        ...state,
        activeWindow: DEFAULT_OPENED_WINDOW,
      };
    },
    setMoving(state, action: PayloadAction<boolean>) {
      state.isMoving = action.payload;
    },
    setResizing(state, action: PayloadAction<boolean>) {
      state.isResizing = action.payload;
    },
    openWindow(state, action: PayloadAction<string>) {
      const newWindow: WindowInterface = {
        id: state.totalOpenedWindows,
        title: action.payload,
      };
      state.totalOpenedWindows += 1;
      state.activeWindow = newWindow;
      state.openedWindows.push(newWindow);
    },
    closeWindow(state, action: PayloadAction<number>) {
      const windowIndex = findWindowIndexById(
        state.openedWindows,
        action.payload
      );

      if (windowIndex !== -1) {
        state.openedWindows = removeWindowByIndex(
          state.openedWindows,
          windowIndex
        );
        state.activeWindow =
          state.activeWindow.id === action.payload
            ? DEFAULT_OPENED_WINDOW
            : state.activeWindow;
      }
    },
    minimizeWindow(state, action: PayloadAction<number>) {
      const windowIndex = findWindowIndexById(
        state.openedWindows,
        action.payload
      );

      if (windowIndex !== -1) {
        const windowToMinimize = state.openedWindows[windowIndex];
        state.openedWindows = removeWindowByIndex(
          state.openedWindows,
          windowIndex
        );
        state.minimizedWindows.push(windowToMinimize);
        if (state.activeWindow.id === action.payload) {
          state.activeWindow = DEFAULT_OPENED_WINDOW;
        }
      }
    },
    restoreWindow(state, action: PayloadAction<number>) {
      const windowIndex = findWindowIndexById(
        state.minimizedWindows,
        action.payload
      );

      if (windowIndex !== -1) {
        const windowToRestore = state.minimizedWindows[windowIndex];
        state.minimizedWindows = removeWindowByIndex(
          state.minimizedWindows,
          windowIndex
        );
        state.openedWindows.push(windowToRestore);
        state.activeWindow = windowToRestore;
      }
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
