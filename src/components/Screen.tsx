import { PropsWithChildren } from "react";
import { useTheme } from "../hooks/useTheme";
import { cn } from "@/lib/utils";

const Screen = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();

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
