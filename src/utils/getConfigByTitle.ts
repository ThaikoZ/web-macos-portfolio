import {
  NotesConfig,
  FaceTimeConfig,
  MusicConfig,
  SafariConfig,
  TrashConfig,
  FinderConfig,
} from "../apps";

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
    case SafariConfig.title:
      return SafariConfig;
    case NotesConfig.title:
      return NotesConfig;
    default:
      return FinderConfig;
  }
};
