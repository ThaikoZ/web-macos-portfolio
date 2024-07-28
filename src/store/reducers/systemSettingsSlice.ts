import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SystemSettingsState {
  isWifiEnabled: boolean;
  isBluetoothEnabled: boolean;
  isAirdropEnabled: boolean;
  isFocusEnabled: boolean;
  displayRange: number;
  soundRange: number;
}

const initialState: SystemSettingsState = {
  isWifiEnabled: true,
  isBluetoothEnabled: true,
  isAirdropEnabled: false,
  isFocusEnabled: false,
  displayRange: 0.8,
  soundRange: 0.3,
};

const systemSettingsSlice = createSlice({
  name: "systemSettings",
  initialState,
  reducers: {
    toggleWifi(state) {
      return { ...state, isWifiEnabled: !state.isWifiEnabled };
    },
    toggleBluetooth(state) {
      return { ...state, isBluetoothEnabled: !state.isBluetoothEnabled };
    },
    toggleAirdrop(state) {
      return { ...state, isAirdropEnabled: !state.isAirdropEnabled };
    },
    toggleFocus(state) {
      return { ...state, isFocusEnabled: !state.isFocusEnabled };
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
} = systemSettingsSlice.actions;

export default systemSettingsSlice.reducer;
