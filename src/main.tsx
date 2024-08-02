import ReactDOM from "react-dom/client";
import Desktop from "./Desktop.tsx";
import "./styles/globals.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { ThemeProvider } from "./components/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Provider store={store}>
      <Desktop />
    </Provider>
  </ThemeProvider>
);
