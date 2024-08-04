import { finderMenu } from "@/apps/Finder/finderMenu";
import { appsTitles } from "@/constants/apps";

export const getMenuByTitle = (title: string) => {
  switch (title) {
    case appsTitles.finder:
      return finderMenu;
    default:
      return [];
  }
};
