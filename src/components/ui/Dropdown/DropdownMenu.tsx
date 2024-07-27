import clsx from "clsx";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const DropdownMenu = ({ children }: PropsWithChildren) => {
  const { darkMode } = useSelector((state: RootState) => state.system.darkMode);

  return (
    <ul
      className={clsx(
        "p-[0.3rem] overflow-hidden absolute rounded-lg shadow-lg drop-shadow-xl list-none w-max z-10 backdrop-blur-lg",
        { "bg-black bg-opacity-30 text-white": darkMode },
        { "bg-[#fafafa] bg-opacity-80 text-black": !darkMode }
      )}
    >
      {children}
    </ul>
  );
};

export default DropdownMenu;
