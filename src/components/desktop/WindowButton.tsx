import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  inactive: boolean;
  className: string;
  icon: ReactNode;
}

const WindowButton = ({ onClick, inactive, className, icon }: Props) => (
  <span
    className={cn(
      "flex items-center justify-center text-black w-3 h-3 border-[1px] border-window-btn-border rounded-full transition-colors text-opacity-75",
      className,
      { "!bg-window-btn-inactive": inactive }
    )}
    onClick={onClick}
  >
    {!inactive && icon}
  </span>
);

export default WindowButton;
