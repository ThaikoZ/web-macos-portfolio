import clsx from "clsx";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { ReactNode } from "react";

interface Props {
  icon?: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ icon, className, children, onClick }: Props) => {
  const { darkMode } = useSelector((state: RootState) => state.darkMode);

  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        "px-[0.75rem] py-[2px] h-full rounded-[0.25rem] flex items-center transition-colors cursor-pointer capitalize font-medium hover:bg-opacity-20 text-center ",
        { "hover:bg-white ": darkMode },
        { "hover:bg-[#292828]": !darkMode }
      )}
    >
      {icon && <img src={icon} alt="Icon" width="20" height="20" />}
      {children}
    </button>
  );
};

export default Button;
