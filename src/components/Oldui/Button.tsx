import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  Icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  active?: boolean;
  onMouseEnter?: () => void;
}

const Button = ({ Icon, className, children, onClick, active, onMouseEnter,  ...props }: Props) => {

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={cn(
        className,
        "px-[0.75rem] py-[2px] h-full rounded-[0.25rem] flex items-center transition-colors capitalize font-medium text-center w-max hover:bg-dropdown-dark-background dark:hover:bg-white",
        {" bg-dropdown-dark-background dark:bg-white": active},
        {"bg-opacity-20 hover:bg-opacity-20 dark:bg-opacity-20 dark:hover:bg-opacity-20": true}

      )}
      {...props}
    >
      {Icon}
      {children}
    </div>
  );
};

export default Button;
