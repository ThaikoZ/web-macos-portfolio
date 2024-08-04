import { ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface Props {
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  active?: boolean;
  font?: string;
  onClick?: () => void;
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={cn(
        props.className,
        "px-[0.75rem] py-[2px] h-full rounded-[0.25rem] flex items-center transition-colors capitalize text-center w-max font-medium cursor-default",
        { [`${props.font}`]: props.font },
        "bg-topbar-btn-background hover:bg-topbar-btn-hovered text-btn-text"
      )}
      {...props}
    >
      {props.icon}
      {props.children}
    </button>
  );
};

export default Button;
