import { finderMenu } from "../static/finderMenu";

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
