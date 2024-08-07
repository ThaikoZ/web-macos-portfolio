import { AppConfig } from "@/types/app";
import App from "./App";
import Icon from "./Icon";
import { Menu } from "./Menu";

export const NotesConfig: AppConfig = {
  title: "Notes",
  icon: Icon,
  engine: App,
  defaultSize: {
    width: 300,
    height: 400,
  },
  isResizable: true,
  menu: Menu,
};
