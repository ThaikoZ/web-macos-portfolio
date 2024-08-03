import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store.ts";
import { ThemeProvider } from "@/components/screen/ThemeProvider.tsx";
import { AudioProvider } from "./components/screen/AudioProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <AudioProvider>
        <App />
      </AudioProvider>
    </ThemeProvider>
  </Provider>
);
