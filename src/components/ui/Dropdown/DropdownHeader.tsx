import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

const DropdownHeader = ({ h, children }: PropsWithChildren<{ h: string }>) => {
  const classBase =
    "dropdown-menu-item relative group px-[0.75rem] py-[0.2rem] rounded-md flex justify-between items-center gap-12";

  if (h === "title-1")
    return (
      <h1 className={cn(classBase, "font-[600] text-sm mb-1")}>{children}</h1>
    );

  if (h === "title-2")
    return (
      <h2 className={cn(classBase, "px-3 text-xs opacity-40")}>{children}</h2>
    );
};

export default DropdownHeader;
