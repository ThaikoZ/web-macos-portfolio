import {
  NotesConfig,
  FaceTimeConfig,
  MusicConfig,
  SafariiConfig,
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
    case SafariiConfig.title:
      return SafariiConfig;
    case NotesConfig.title:
      return NotesConfig;
    default:
      return FinderConfig;
  }
};
