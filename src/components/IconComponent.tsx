import { IconProps } from "@/types/icon";
import { ReactNode } from "react";

interface Props extends IconProps {
  children: ReactNode;
}

const IconComponent = ({
  fill = "currentColor",
  children,
  ...props
}: Props) => (
  <svg
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    {children}
  </svg>
);

export default IconComponent;
