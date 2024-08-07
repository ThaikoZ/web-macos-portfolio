import { AppConfig } from "@/types/app";
import App from "./App";
import { Menu } from "./Menu";
import Icon from "./Icon";

export const MusicConfig: AppConfig = {
  title: "Music",
  icon: Icon,
  engine: App,
  defaultSize: {
    width: 300,
    height: 400,
  },
  isResizable: true,
  menu: Menu,
};
