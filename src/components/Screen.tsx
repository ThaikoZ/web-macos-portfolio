import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Screen = ({ children }: PropsWithChildren) => {
  const { darkMode } = useSelector((state: RootState) => state.system.darkMode);
 
  return (
    <div
      className={cn("h-full bg-macos-blue-400 bg-cover bg-center bg-no-repeat", {
        "bg-[url('src/assets/background/monterey-dark.jpg')] dark": darkMode,
        "bg-[url('src/assets/background/monterey-light.jpg')] light": !darkMode,
      })}
    >
      {children}
    </div>
  );
};

export default Screen;
