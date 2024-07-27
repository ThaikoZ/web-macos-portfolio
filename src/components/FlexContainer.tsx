import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const FlexContainer = ({ className, children }: Props) => {
  return <div className={clsx(className, "flex items-center")}>{children}</div>;
};

export default FlexContainer;
