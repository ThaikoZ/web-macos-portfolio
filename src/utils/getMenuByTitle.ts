import { FinderConfig } from "@/apps/Finder/finderConfig";
import { finderMenu } from "@/apps/Finder/finderMenu";
import { TrashConfig } from "@/apps/Trash/trashConfig";
import { trashMenu } from "@/apps/Trash/trashMenu";

export const getMenuByTitle = (title: string) => {
  switch (title) {
    case FinderConfig.title:
      return finderMenu;
    case TrashConfig.title:
      return trashMenu;
    default:
      return [];
  }
};
