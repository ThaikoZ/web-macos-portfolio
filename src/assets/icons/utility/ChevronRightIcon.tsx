import { IconProps } from "../../../types/icon";

export const ChevronRightIcon = ({
  width = 7,
  height = 13,
  fill = "currentColor",
  ...props
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 5 10"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.764331 9.5C0.973612 9.5 1.14195 9.42174 1.28753 9.26522L4.71338 5.675C4.90446 5.46467 4.99545 5.25924 5 5C5 4.74565 4.90901 4.53043 4.71338 4.325L1.28753 0.729891C1.14195 0.578261 0.969063 0.5 0.764331 0.5C0.341219 0.5 0 0.861957 0 1.31196C0 1.53696 0.0864422 1.74239 0.245678 1.91359L3.21201 5.00489L0.245678 8.08641C0.0864422 8.25761 0 8.46304 0 8.68804C0 9.13315 0.341219 9.5 0.764331 9.5Z"
      fillOpacity="0.76"
    />
  </svg>
);

export default ChevronRightIcon;
