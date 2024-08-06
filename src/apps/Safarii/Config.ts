import { AppConfig } from "@/types/app";
import App from "./App";
import Icon from "./Icon";
import { Menu } from "./Menu";

export const SafariiConfig: AppConfig = {
  title: "Safarii",
  icon: Icon,
  engine: App,
  defalutSize: {
    width: 300,
    height: 400,
  },
  isResizable: true,
  menu: Menu,
};
