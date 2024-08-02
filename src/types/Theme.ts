import { DARK_MODE, LIGHT_MODE } from "@/constants/theme";

export type ThemeType = typeof LIGHT_MODE | typeof DARK_MODE;

export interface ThemeContextInterface {
  theme: ThemeType;
  toggleTheme: () => void;
}
