import { finderMenu } from "@/apps/finder/finderMenu";
import { appsTitles } from "@/constants/apps";
import clsx from "clsx";

export const cn = clsx;

export const getMenuByTitle = (title: string) => {
  switch (title) {
    case appsTitles.finder:
      return finderMenu;
    default:
      return [];
  }
};
