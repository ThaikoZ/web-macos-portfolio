import ReactDOM from "react-dom/client";
import Desktop from "./Desktop.tsx";
import "./styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store.ts";
import { ThemeProvider } from "@/components/screen/ThemeProvider.tsx";
import { AudioProvider } from "./components/screen/AudioProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <AudioProvider>
        <Desktop />
      </AudioProvider>
    </ThemeProvider>
  </Provider>
);
