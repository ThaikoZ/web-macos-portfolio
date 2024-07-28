import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const FlexContainer = ({ className, children }: Props) => {
  return <div className={cn(className, "flex items-center")}>{children}</div>;
};

export default FlexContainer;
