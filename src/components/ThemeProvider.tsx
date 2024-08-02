import { createContext, useState, useEffect, PropsWithChildren } from "react";
import { DARK_MODE, DEFAULT_THEME, LIGHT_MODE } from "@/constants/theme";
import { ThemeType } from "@/types/theme";

export interface ThemeContextInterface {
  theme: ThemeType | undefined;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
);

const getStoredTheme = () => localStorage.getItem("theme") as ThemeType | null;

const storeTheme = (theme: ThemeType) => localStorage.setItem("theme", theme);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeType>(
    getStoredTheme() || DEFAULT_THEME
  );

  useEffect(() => {
    document.body.className = theme;
    storeTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === LIGHT_MODE ? DARK_MODE : LIGHT_MODE;
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
