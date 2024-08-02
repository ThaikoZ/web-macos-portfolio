import { useContext } from "react";
import { ThemeContextInterface } from "../types/theme";
import { ThemeContext } from "../components/ThemeProvider";

export const useTheme = (): ThemeContextInterface => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
