import clsx from "clsx";
import { finderMenu } from "../apps/finder/finderMenu";
import { appsTitles } from "./appsTitles";

export const cn = clsx;

export const getMenuByTitle = (title: string) => {
  switch (title) {
    case appsTitles.finder:
      return finderMenu;
    default:
      return [];
  }
};
