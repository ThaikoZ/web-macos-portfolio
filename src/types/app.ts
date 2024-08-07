import { ComponentType } from "react";
import { DropdownMenuInterface } from "./dropdown";
import { Size } from "./window";

export interface App {
  title: string;
  defaultSize: Size;
  isResizable: boolean;
}

export interface AppConfig extends App {
  icon: ComponentType;
  engine: ComponentType;
  menu: DropdownMenuInterface[];
}
