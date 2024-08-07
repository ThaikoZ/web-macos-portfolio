import { settingsSelector } from "@/store/systemSettingsSlice";
import { PropsWithChildren, useEffect } from "react";
import { useSelector } from "react-redux";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { theme } = useSelector(settingsSelector);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return children;
};
