import { AppConfig } from "@/types/app";
import { finderMenu } from "./finderMenu";
import FinderAppIcon from "./FinderAppIcon";
import FinderApp from "./FinderApp";

export const FinderConfig: AppConfig = {
  title: "Finder",
  icon: FinderAppIcon,
  engine: FinderApp,
  defalutSize: {
    width: 500,
    height: 400,
  },
  isResizable: true,
  menu: finderMenu,
};
