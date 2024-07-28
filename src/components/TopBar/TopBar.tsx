import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

const TopBar = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={cn(
        "w-full h-[1.8rem] px-[0.4rem] flex z-10",
        "bg-white bg-opacity-50 text-light-text",
        "dark:bg-black dark:bg-opacity-[18%] dark:text-dark-text",
        "before:backdrop-blur-xl before:absolute before:z-[-10px] before:left-0 before:top-0 before:w-full before:h-[1.8rem]"
      )}
    >
      <div className="z-[5] w-full flex justify-between">{children}</div>
    </div>
  );
};

export default TopBar;
