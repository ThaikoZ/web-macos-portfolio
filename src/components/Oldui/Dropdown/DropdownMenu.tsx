import { PropsWithChildren, useContext } from "react";
import { DropdownContext } from "./Dropdown";
import { cn } from "@/lib/utils";

const DropdownMenu = ({
  children,
  className,
}: PropsWithChildren<{ className?: string; isSubmenu?: boolean }>) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownMenu must be used within a Dropdown");
  }

  const { isOpen, ref } = context;

  return isOpen ? (
    <ul
      ref={ref}
      className={cn(
        className,
        "absolute p-[0.3rem] rounded-lg shadow-window h-fit w-max z-10 border-[1px] border-opacity-[12%] border-black font-[500]",
        "bg-dropdown-light-background bg-opacity-60 text-light-text",
        "dark:bg-dropdown-dark-background dark:bg-opacity-60 dark:text-dark-text backdrop-brightness-200",
        "backdrop-blur-lg"
      )}
    >
      {children}
    </ul>
  ) : null;
};

export default DropdownMenu;
