import React from "react";
import ReactDOM from "react-dom/client";
import Desktop from "./Desktop.tsx";
import "./styles/globals.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { ThemeProvider } from "./components/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <Desktop />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
