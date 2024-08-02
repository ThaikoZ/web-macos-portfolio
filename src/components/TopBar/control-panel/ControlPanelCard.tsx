import { ReactNode } from "react";
import { cn } from "../../../lib/utils";

interface Props {
  children?: ReactNode;
  className?: string;
  title?: string;
}

const ControlPanelCard = (props: Props) => {
  return (
    <div
      className={cn(
        props.className,
        "flex flex-col justify-center rounded-xl px-2.5 py-2 shadow-md bg-topbar-control-card-background min-w-24"
      )}
    >
      {props.title && <h2 className="text-xs">{props.title}</h2>}
      {props.children}
    </div>
  );
};

export default ControlPanelCard;
