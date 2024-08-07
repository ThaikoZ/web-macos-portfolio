import { AppConfig } from "@/types/app";
import App from "./App";
import Icon from "./Icon";
import { Menu } from "./Menu";

export const TrashConfig: AppConfig = {
  title: "Trash",
  icon: Icon,
  engine: App,
  defaultSize: {
    width: 300,
    height: 400,
  },
  isResizable: false,
  menu: Menu,
};
