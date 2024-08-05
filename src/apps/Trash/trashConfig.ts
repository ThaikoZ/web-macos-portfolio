import { AppConfig } from "@/types/app";
import TrashAppIcon from "./TrashAppIcon";
import TrashApp from "./TrashApp";
import { trashMenu } from "./trashMenu";

export const TrashConfig: AppConfig = {
  title: "Trash",
  icon: TrashAppIcon,
  engine: TrashApp,
  defalutSize: {
    width: 300,
    height: 400,
  },
  isResizable: false,
  menu: trashMenu,
};
