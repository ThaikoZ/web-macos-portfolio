import { finderMenu } from "@/apps/dwadwa/finderMenu";
import { appsTitles } from "@/constants/apps";

export const getMenuByTitle = (title: string) => {
  switch (title) {
    case appsTitles.finder:
      return finderMenu;
    default:
      return [];
  }
};
