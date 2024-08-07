import { ThemeContext, ThemeContextInterface } from "providers/ThemeProvider";
import { useContext } from "react";

export const useTheme = (): ThemeContextInterface => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
