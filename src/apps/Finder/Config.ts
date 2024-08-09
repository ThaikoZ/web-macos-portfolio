import { AppConfig } from "@/types/app";
import App from "./App";
import Icon from "./Icon";
import { Menu } from "./Menu";

export const FinderConfig: AppConfig = {
  title: "Finder",
  icon: Icon,
  engine: App,
  defaultSize: {
    width: 700,
    height: 500,
  },
  isResizable: true,
  menu: Menu,
};
