import clsx from "clsx";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface Props {
  className?: string;
  children: ReactNode;
}

const DropdownMenu = ({ className, children }: Props) => {
  const { darkMode } = useSelector((state: RootState) => state.system.darkMode);

  return (
    <ul
      className={clsx(
        className,
        "p-[0.3rem] absolute rounded-lg shadow-lg w-max z-10 backdrop-blur-lg",
        { "bg-black bg-opacity-40 ": darkMode },
        { "bg-[#fafafa] bg-opacity-85": !darkMode }
      )}
    >
      {children}
    </ul>
  );
};

export default DropdownMenu;
