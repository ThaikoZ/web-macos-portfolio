import { createSlice } from "@reduxjs/toolkit";
import { appsTitles } from "@/lib/utils";

export interface ActiveWindowState {
  title: string;
}

const initialState: ActiveWindowState = {
  title: appsTitles.finder,
};

const activeWindowSlice = createSlice({
  name: "activeWindow",
  initialState,
  reducers: {},
});

// export const { toggleDarkMode } = activeWindowSlice.actions;
export default activeWindowSlice.reducer;
