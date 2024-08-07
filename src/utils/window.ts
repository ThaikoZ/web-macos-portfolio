import { AppConfig } from "@/types/app";

export const findWindow = (windows: AppConfig[], app: AppConfig) =>
  windows.find((window) => window.title === app.title);

export const findWindowIndex = (windows: AppConfig[], app: AppConfig) =>
  windows.findIndex((window) => window.title === app.title);

export const moveWindowToEnd = (windows: AppConfig[], index: number) => [
  ...windows.slice(0, index),
  ...windows.slice(index + 1),
  windows[index],
];

export const removeWindow = (windows: AppConfig[], app: AppConfig) =>
  windows.filter((window) => window.title !== app.title);

export const checkIfWindowIsOpened = (windows: AppConfig[], app: AppConfig) =>
  windows.find((window) => window.title === app.title);
