import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface Props {
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  active?: boolean;
  font?: "regular" | "medium" | "bold";
  onClick?: () => void;
}

const Button = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className={cn(
        props.className,
        "px-[0.75rem] py-[2px] h-full rounded-[0.25rem] flex items-center transition-colors capitalize text-center w-max",
        { "bg-dropdown-dark-background dark:bg-white": props.active },
        [`font-${props.font}`],
        "hover:bg-dropdown-dark-background dark:hover:bg-white bg-opacity-20 hover:bg-opacity-20 dark:bg-opacity-20 dark:hover:bg-opacity-20 "
      )}
      {...props}
    >
      {props.icon}
      {props.children}
    </div>
  );
};

export default Button;
