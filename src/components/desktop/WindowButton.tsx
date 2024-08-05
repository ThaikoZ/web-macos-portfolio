import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  inactive: boolean;
  className: string;
  icon: ReactNode;
  disabled?: boolean;
}

const WindowButton = ({
  onClick,
  inactive,
  className,
  icon,
  disabled = false,
}: Props) => {
  return (
    <span
      className={cn(
        { "!bg-window-btn-inactive": disabled },
        { "bg-window-bar-btn-inactive": inactive },
        className,
        "flex items-center justify-center text-black w-3 h-3 border-[1px] border-window-btn-border rounded-full transition-colors"
      )}
      onClick={onClick}
    >
      {!disabled && icon}
    </span>
  );
};

export default WindowButton;
