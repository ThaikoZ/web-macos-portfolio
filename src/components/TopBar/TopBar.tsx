import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import clsx from "clsx";
import { PropsWithChildren } from "react";

const TopBar = ({ children }: PropsWithChildren) => {
  const { darkMode } = useSelector((state: RootState) => state.darkMode);

  return (
    <div
      className={clsx(
        "w-full h-[2rem] px-[0.5rem] flex justify-between",
        { "bg-black bg-opacity-[18%] text-white": darkMode },
        { "bg-white bg-opacity-50 text-black": !darkMode }
      )}
    >
      {children}
    </div>
  );
};

export default TopBar;
