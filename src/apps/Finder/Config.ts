import { AppConfig } from "@/types/app";
import App from "./App";
import Icon from "./Icon";
import { Menu } from "./Menu";

export const FinderConfig: AppConfig = {
  title: "Finder",
  icon: Icon,
  engine: App,
  defaultSize: {
    width: 500,
    height: 400,
  },
  isResizable: true,
  menu: Menu,
};
