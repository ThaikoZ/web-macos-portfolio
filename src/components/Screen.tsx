import { PropsWithChildren } from "react";
import { clsx } from "clsx";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Screen = ({ children }: PropsWithChildren) => {
  const { darkMode } = useSelector((state: RootState) => state.system.darkMode);
  const backgroundClass =
    "h-full bg-macos-blue-400 bg-cover bg-center bg-no-repeat";

  return (
    <div
      className={clsx(backgroundClass, {
        "bg-[url('../assets/macos-sonoma-dark.jpg')]": darkMode,
        "bg-[url('../assets/macos-sonoma-light.jpg')]": !darkMode,
      })}
    >
      {children}
    </div>
  );
};

export default Screen;
