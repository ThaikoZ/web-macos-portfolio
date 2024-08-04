import { ComponentType } from "react";
import { DropdownMenuInterface } from "./dropdown";
import { Position, Size } from "./window";

export interface App {
  title: string;
  defalutSize: Size;
  defaultPosition?: Position;
  isResizable?: boolean;
}

export interface AppConfig extends App {
  id?: number;
  icon: ComponentType;
  engine: ComponentType;
  menu: DropdownMenuInterface[];
}
