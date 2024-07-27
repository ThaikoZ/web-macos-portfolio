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
        "p-[0.3rem] absolute rounded-lg shadow-lg drop-shadow-xl list-none w-max z-10 backdrop-blur-lg",
        { "bg-black bg-opacity-30 ": darkMode },
        { "bg-[#fafafa] bg-opacity-80": !darkMode }
      )}
    >
      {children}
    </ul>
  );
};

export default DropdownMenu;
