import { AppConfig } from "@/types/app";
import { createContext, PropsWithChildren, useState } from "react";
import { FinderConfig } from "../apps";

export interface DeskContextProps {
  activeWindow: AppConfig;
  openedWindows: AppConfig[];
  minimizedWindows: AppConfig[];
  setActiveWindow: (app: AppConfig) => void;
  openWindow: (app: AppConfig) => void;
  closeWindow: (app: AppConfig) => void;
  minimizeWindow: (app: AppConfig) => void;
  restoreWindow: (app: AppConfig) => void;
}

const DeskContext = createContext<DeskContextProps | undefined>(undefined);

const findWindow = (windows: AppConfig[], app: AppConfig) =>
  windows.find((window) => window.title === app.title);

const findWindowIndex = (windows: AppConfig[], app: AppConfig) =>
  windows.findIndex((window) => window.title === app.title);

const moveWindowToEnd = (windows: AppConfig[], index: number) => [
  ...windows.slice(0, index),
  ...windows.slice(index + 1),
  windows[index],
];

const removeWindow = (windows: AppConfig[], app: AppConfig) =>
  windows.filter((window) => window.title !== app.title);

const DEFAULT_OPENED_WINDOW = FinderConfig;

export const DeskProvider = ({ children }: PropsWithChildren) => {
  const [openedWindows, setOpenedWindows] = useState<AppConfig[]>([]);
  const [minimizedWindows, setMinimizedWindows] = useState<AppConfig[]>([]);
  const [activeWindow, setActiveWindowState] = useState<AppConfig>(
    DEFAULT_OPENED_WINDOW
  );

  const setActiveWindow = (app: AppConfig) => {
    const windowIndex = findWindowIndex(openedWindows, app);
    if (windowIndex !== -1) {
      const newOpenedWindows = moveWindowToEnd(openedWindows, windowIndex);
      setOpenedWindows(newOpenedWindows);
      setActiveWindowState(newOpenedWindows[newOpenedWindows.length - 1]);
    } else {
      setActiveWindowState(DEFAULT_OPENED_WINDOW);
    }
  };

  const openWindow = (app: AppConfig) => {
    setOpenedWindows((prev) => [...prev, app]);
    setActiveWindowState(app);
  };

  const closeWindow = (app: AppConfig) => {
    const newOpenedWindows = removeWindow(openedWindows, app);
    setOpenedWindows(newOpenedWindows);
    if (activeWindow.title === app.title)
      setActiveWindowState(DEFAULT_OPENED_WINDOW);
  };

  const minimizeWindow = (app: AppConfig) => {
    const window = findWindow(openedWindows, app);
    if (window) {
      setOpenedWindows(removeWindow(openedWindows, app));
      setMinimizedWindows((prev) => [...prev, window]);
      if (activeWindow.title === app.title)
        setActiveWindowState(DEFAULT_OPENED_WINDOW);
    }
  };

  const restoreWindow = (app: AppConfig) => {
    const window = findWindow(minimizedWindows, app);
    if (window) {
      setMinimizedWindows(removeWindow(minimizedWindows, window));
      setOpenedWindows((prev) => [...prev, window]);
      setActiveWindowState(window);
    }
  };

  return (
    <DeskContext.Provider
      value={{
        activeWindow,
        openedWindows,
        minimizedWindows,
        setActiveWindow,
        openWindow,
        closeWindow,
        minimizeWindow,
        restoreWindow,
      }}
    >
      {children}
    </DeskContext.Provider>
  );
};
export default DeskContext;
