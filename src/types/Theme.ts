export const defaultTheme = "light";

export type ThemeType = "light" | "dark";

export interface ThemeContextInterface {
  theme: ThemeType;
  toggleTheme: () => void;
}
