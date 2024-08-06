import { FinderConfig } from "@/apps/Finder/Config";
import { TrashConfig } from "@/apps/Trash/Config";
import { FaceTimeConfig, MusicConfig, SafariiConfig } from "../apps";

export const getConfigByTitle = (title: string) => {
  switch (title) {
    case FinderConfig.title:
      return FinderConfig;
    case TrashConfig.title:
      return TrashConfig;
    case MusicConfig.title:
      return MusicConfig;
    case FaceTimeConfig.title:
      return FaceTimeConfig;
    case SafariiConfig.title:
      return SafariiConfig;
    default:
      return FinderConfig;
  }
};
