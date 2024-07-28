import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import clsx from "clsx";
import { PropsWithChildren } from "react";

const TopBar = ({ children }: PropsWithChildren) => {
  const { darkMode } = useSelector((state: RootState) => state.system.darkMode);

  return (
    <div
      className={clsx(
        "w-full h-[1.75rem] px-[0.4rem] flex ",
        "before:backdrop-blur-xl before:absolute before:z-[-10px] before:left-0 before:top-0 before:w-full before:h-7",
        { "bg-black bg-opacity-[18%] text-white": darkMode },
        { "bg-white bg-opacity-50 text-black": !darkMode }
      )}
    >
      <div className="z-[5] w-full flex justify-between">{children}</div>
    </div>
  );
};

export default TopBar;
