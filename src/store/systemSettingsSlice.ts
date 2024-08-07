import { DEFAULT_THEME } from "@/constants/theme";
import { ThemeType } from "@/types/theme";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Store } from "./store";

export interface SystemSettingsState {
  isWifiEnabled: boolean;
  isBluetoothEnabled: boolean;
  isAirdropEnabled: boolean;
  isFocusEnabled: boolean;
  isFullscreen: boolean;
  displayRange: number;
  soundRange: number;
  theme: ThemeType;
}

const getStoredTheme = () => localStorage.getItem("theme") as ThemeType | null;

const initialState: SystemSettingsState = {
  isWifiEnabled: true,
  isBluetoothEnabled: true,
  isAirdropEnabled: false,
  isFocusEnabled: false,
  isFullscreen: false,
  displayRange: 90,
  soundRange: 50,
  theme: getStoredTheme() || DEFAULT_THEME,
};

const systemSettingsSlice = createSlice({
  name: "systemSettings",
  initialState,
  reducers: {
    toggleWifi(state) {
      state.isWifiEnabled = !state.isWifiEnabled;
    },
    toggleBluetooth(state) {
      state.isBluetoothEnabled = !state.isBluetoothEnabled;
    },
    toggleAirdrop(state) {
      state.isAirdropEnabled = !state.isAirdropEnabled;
    },
    toggleFocus(state) {
      state.isFocusEnabled = !state.isFocusEnabled;
    },
    toggleFullscreen(state) {
      state.isFullscreen = !state.isFullscreen;
    },
    setTheme(state, action: PayloadAction<ThemeType>) {
      state.theme = action.payload;
    },
    setFullscreen(state, action: PayloadAction<boolean>) {
      state.isFullscreen = action.payload;
    },
    setDisplayRange(state, action: PayloadAction<number>) {
      state.displayRange = action.payload;
    },
    setSoundRange(state, action: PayloadAction<number>) {
      state.soundRange = action.payload;
    },
  },
});

export const {
  toggleWifi,
  toggleBluetooth,
  toggleAirdrop,
  toggleFocus,
  toggleFullscreen,
  setTheme,
  setDisplayRange,
  setSoundRange,
  setFullscreen,
} = systemSettingsSlice.actions;

export const settingsSelector = (state: Store) => state.systemSettings;

export default systemSettingsSlice.reducer;
