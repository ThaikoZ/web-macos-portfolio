import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Screen = ({ children }: PropsWithChildren) => {
  const theme = useSelector((state: RootState) => state.systemSettings.theme);

  return (
    <div
      className={cn(
        "h-full bg-cover bg-center bg-no-repeat bg-wallpaper transition-bg",
        theme
      )}
    >
      {children}
    </div>
  );
};

export default Screen;
