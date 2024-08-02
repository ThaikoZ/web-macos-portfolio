// src/components/ThemeProvider.tsx
import { createContext, useState, useEffect, PropsWithChildren } from "react";
import { ThemeContextInterface } from "../types/theme";

// Create a context with a default value
export const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
