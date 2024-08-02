import { appsTitles } from "@/constants/apps";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SystemSettingsState {
  isWifiEnabled: boolean;
  isBluetoothEnabled: boolean;
  isAirdropEnabled: boolean;
  isFocusEnabled: boolean;
  isFullscreen: boolean;
  displayRange: number;
  soundRange: number;
  activeWindowTitle: string;
}

const initialState: SystemSettingsState = {
  isWifiEnabled: true,
  isBluetoothEnabled: true,
  isAirdropEnabled: false,
  isFocusEnabled: false,
  isFullscreen: false,
  displayRange: 0.8,
  soundRange: 0.3,
  activeWindowTitle: appsTitles.finder,
};

const systemSettingsSlice = createSlice({
  name: "systemSettings",
  initialState,
  reducers: {
    toggleWifi(settings) {
      return { ...settings, isWifiEnabled: !settings.isWifiEnabled };
    },
    toggleBluetooth(settings) {
      return { ...settings, isBluetoothEnabled: !settings.isBluetoothEnabled };
    },
    toggleAirdrop(settings) {
      return { ...settings, isAirdropEnabled: !settings.isAirdropEnabled };
    },
    toggleFocus(settings) {
      return { ...settings, isFocusEnabled: !settings.isFocusEnabled };
    },
    toggleFullscreen(settings) {
      return { ...settings, isFullscreen: !settings.isFullscreen };
    },
    setFullscreen(settings, action: PayloadAction<boolean>) {
      return { ...settings, isFullscreen: action.payload };
    },
    setDisplayRange(settings, action: PayloadAction<number>) {
      return { ...settings, displayRange: action.payload };
    },
    setSoundRange(settings, action: PayloadAction<number>) {
      return { ...settings, soundRange: action.payload };
    },
  },
});

export const {
  toggleWifi,
  toggleBluetooth,
  toggleAirdrop,
  toggleFocus,
  setDisplayRange,
  setSoundRange,
  toggleFullscreen,
  setFullscreen,
} = systemSettingsSlice.actions;

export default systemSettingsSlice.reducer;
