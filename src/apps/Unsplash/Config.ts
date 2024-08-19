import { AppConfig } from "@/types/app";
import App from "./App";
import Icon from "./Icon";
import { Menu } from "./Menu";

export const UnsplashConfig: AppConfig = {
  title: "Unsplash",
  icon: Icon,
  engine: App,
  defaultSize: {
    width: 900,
    height: 600,
  },
  isResizable: true,
  menu: Menu,
};
