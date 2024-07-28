import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: ReactNode;
}

const DropdownMenu = ({ className, children }: Props) => {
  const { darkMode } = useSelector((state: RootState) => state.system.darkMode);

  return (
    <ul
      className={cn(
        className,
        "p-[0.3rem] absolute rounded-lg shadow-lg w-max z-10 backdrop-blur-lg dark:bg-black dark:bg-opacity-40 bg-[#fafafa] bg-opacity-85",
        { " ": darkMode },
        { "": !darkMode }
      )}
    >
      {children}
    </ul>
  );
};

export default DropdownMenu;
