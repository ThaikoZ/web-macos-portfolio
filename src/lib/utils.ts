import clsx from "clsx";
import { finderMenu } from "../apps/finder/finderMenu";

export const cn = clsx;

export const appsTitles = {
  finder: "Finder",
};

export const getMenuByTitle = (title: string) => {
  switch (title) {
    case appsTitles.finder:
      return finderMenu;
    default:
      return [];
  }
};
