import { AppConfig } from "@/types/app";
import App from "./App";
import Icon from "./Icon";
import { Menu } from "./Menu";

export const NotesConfig: AppConfig = {
  title: "Notes",
  icon: Icon,
  engine: App,
  defaultSize: {
    width: 800,
    height: 500,
  },
  isResizable: true,
  menu: Menu,
};
