import { ReactNode } from "react";

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface WindowInterface {
  children: ReactNode;
  title?: string;
  defalutSize?: Size;
  defaultPosition?: Position;
  isResizable?: boolean;
}
