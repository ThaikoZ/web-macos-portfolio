import { AppConfig } from "@/types/app";
import { createContext, PropsWithChildren, useState } from "react";
import { FinderConfig, NotesConfig } from "../apps";
import {
  findWindow,
  findWindowIndex,
  moveWindowToEnd,
  removeWindow,
} from "@/utils/window";

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

const initialValues: DeskContextProps = {
  activeWindow: FinderConfig,
  openedWindows: [],
  minimizedWindows: [],
  setActiveWindow: () => {},
  openWindow: () => {},
  closeWindow: () => {},
  minimizeWindow: () => {},
  restoreWindow: () => {},
};

export const DeskContext = createContext<DeskContextProps>(initialValues);

const DEFAULT_OPENED_WINDOW = FinderConfig;

export const DeskProvider = ({ children }: PropsWithChildren) => {
  const [openedWindows, setOpenedWindows] = useState<AppConfig[]>([
    NotesConfig,
  ]);
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
