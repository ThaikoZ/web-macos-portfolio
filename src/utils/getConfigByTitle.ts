import { FinderConfig } from "@/apps/Finder/finderConfig";
import { TrashConfig } from "@/apps/Trash/trashConfig";

export const getConfigByTitle = (title: string) => {
  switch (title) {
    case FinderConfig.title:
      return FinderConfig;
    case TrashConfig.title:
      return TrashConfig;
    default:
      return FinderConfig;
  }
};
