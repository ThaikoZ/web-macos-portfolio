import { createContext, useState, useEffect, PropsWithChildren } from "react";
import { ThemeContextInterface, ThemeType } from "@/types/theme";
import { DARK_MODE, DEFAULT_THEME, LIGHT_MODE } from "@/constants/theme";

export const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeType>(DEFAULT_THEME);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === LIGHT_MODE ? DARK_MODE : LIGHT_MODE
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
