import { appsTitles } from "@/constants/apps";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SystemSettingsState {
  activeWindowTitle: string;
  isResizing: boolean;
  isMoving: boolean;
}

const initialState: SystemSettingsState = {
  activeWindowTitle: appsTitles.finder,
  isResizing: false,
  isMoving: false,
};

const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    setActiveWindow(settings, action: PayloadAction<string>) {
      return { ...settings, activeWindowTitle: action.payload };
    },
  },
});

export const { setActiveWindow } = windowSlice.actions;

export default windowSlice.reducer;
