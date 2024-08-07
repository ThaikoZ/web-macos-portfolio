import { PropsWithChildren } from "react";
import ReduxProvider from "./ReduxProvider";
import { ThemeProvider } from "./ThemeProvider";
import { AudioProvider } from "./AudioProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <AudioProvider>{children}</AudioProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default Providers;
