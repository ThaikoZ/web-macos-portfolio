import clsx from "clsx";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { ReactNode } from "react";

interface Props {
  icon?: string;
  imgWidth?: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  icon,
  className,
  children,
  onClick,
  imgWidth = "20",
}: Props) => {
  const { darkMode } = useSelector((state: RootState) => state.system.darkMode);

  const svgStyle = {
    filter: !darkMode ? "invert(1)" : "invert(0)",
  };
  return (
    <div
      onClick={onClick}
      className={clsx(
        className,
        "px-[0.75rem] py-[2px] h-full rounded-[0.25rem] flex items-center transition-colors capitalize font-medium hover:bg-opacity-20 text-center w-max",
        { "hover:bg-white ": darkMode },
        { "hover:bg-[#292828]": !darkMode }
      )}
    >
      {icon && <img src={icon} style={svgStyle} alt="Icon" width={imgWidth} />}
      {children}
    </div>
  );
};

export default Button;
