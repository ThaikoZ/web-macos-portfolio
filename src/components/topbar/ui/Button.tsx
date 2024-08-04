import { ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface Props {
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  active?: boolean;
  font?: string;
  onClick?: () => void;
  pressed?: boolean;
}

const Button = (props: Props) => {
  const handleClick = () => {
    if (props.onClick) props.onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        props.className,
        "px-[0.75rem] py-[2px] h-full rounded-[0.25rem] flex items-center transition-colors capitalize text-center w-max font-medium cursor-default",
        { [`${props.font}`]: props.font },
        "bg-topbar-btn-background hover:bg-topbar-btn-hovered text-btn-text",
        { "bg-topbar-btn-hovered": props.pressed }
      )}
    >
      {props.icon}
      {props.children}
    </button>
  );
};

export default Button;
